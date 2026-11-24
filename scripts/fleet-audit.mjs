#!/usr/bin/env node
/**
 * Fleet Audit — in-house replacement for the retired Codex weekly audits.
 *
 * Three legs, no external AI vendor, no API keys:
 *   1. Accessibility — axe-core WCAG 2.2 AA against the LIVE site (Playwright Chromium).
 *   2. SEO essentials — title / description / canonical / OG / single H1 per page
 *      (JSON-LD absence is a warning, not a failure).
 *   3. Security & hygiene — response headers on the live site + a high-confidence
 *      secrets-pattern scan of the repository working tree + .env gitignore check.
 *
 * Usage (CI):  BASE_URL=https://docs.cc3po.com node scripts/fleet-audit.mjs
 * Exit code 1 when any FAIL check fires. Report is printed as Markdown and,
 * under GitHub Actions, appended to the step summary.
 */
import { readdirSync, readFileSync, existsSync, statSync } from 'node:fs';
import { join } from 'node:path';

const BASE = (process.env.BASE_URL ?? 'https://docs.cc3po.com').replace(/\/$/, '');
const PAGES = [
  '/', '/ai-tools/', '/disclaimer/',
  '/guides/agent-system/', '/guides/agent-system/security/',
  '/guides/agent-system/payments/', '/guides/agent-system/faq/',
  '/guides/agent-system/client-guide/',
];
const AXE_TAGS = ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'];

const lines = [];
const fails = [];
const warns = [];
const ok = (m) => lines.push(`- ✅ ${m}`);
const fail = (m) => { lines.push(`- ❌ ${m}`); fails.push(m); };
const warn = (m) => { lines.push(`- ⚠️ ${m}`); warns.push(m); };

/* ---------- Leg 2 + headers (fetch-based) ---------- */
async function fetchPage(path) {
  const res = await fetch(BASE + path, { redirect: 'follow' });
  return { status: res.status, headers: res.headers, html: await res.text() };
}

async function seoAndHeaders() {
  lines.push('\n## SEO essentials');
  for (const p of PAGES) {
    try {
      const { status, html } = await fetchPage(p);
      if (status !== 200) { fail(`${p} returned HTTP ${status}`); continue; }
      const missing = [];
      if (!/<title>[^<]{3,}<\/title>/.test(html)) missing.push('title');
      if (!/name="description" content="[^"]{10,}"/.test(html)) missing.push('meta description');
      if (!/rel="canonical"/.test(html)) missing.push('canonical');
      if (!/property="og:title"/.test(html)) missing.push('og:title');
      const h1 = (html.match(/<h1[\s>]/g) || []).length;
      if (h1 !== 1) missing.push(`h1 count = ${h1}`);
      if (missing.length) fail(`${p} missing: ${missing.join(', ')}`);
      else ok(`${p} title/description/canonical/OG/H1 all present`);
      if (!/application\/ld\+json/.test(html)) warn(`${p} has no JSON-LD structured data`);
    } catch (e) { fail(`${p} fetch failed: ${e.message}`); }
  }
  lines.push('\n## Security headers (homepage)');
  try {
    const { headers } = await fetchPage('/');
    const need = ['content-security-policy', 'strict-transport-security', 'x-frame-options', 'x-content-type-options', 'referrer-policy'];
    for (const h of need) {
      if (headers.get(h)) ok(`header present: ${h}`);
      else fail(`header MISSING: ${h}`);
    }
  } catch (e) { fail(`header check failed: ${e.message}`); }
}

/* ---------- Leg 3: repo hygiene ---------- */
const SECRET_PATTERNS = [
  [/sk_live_[A-Za-z0-9]{16,}/, 'Stripe live secret key'],
  [/rk_live_[A-Za-z0-9]{16,}/, 'Stripe restricted live key'],
  [/sbp_[A-Za-z0-9]{20,}/, 'Supabase access token'],
  [/AKIA[0-9A-Z]{16}/, 'AWS access key id'],
  [/-----BEGIN (RSA |EC |OPENSSH )?PRIVATE KEY-----/, 'private key block'],
  [/ghp_[A-Za-z0-9]{30,}/, 'GitHub personal access token'],
  [/github_pat_[A-Za-z0-9_]{30,}/, 'GitHub fine-grained token'],
  [/xoxb-[A-Za-z0-9-]{20,}/, 'Slack bot token'],
];
const SKIP_DIRS = new Set(['node_modules', '.git', 'dist', '.astro']);
function* walk(dir) {
  for (const name of readdirSync(dir)) {
    if (SKIP_DIRS.has(name)) continue;
    const p = join(dir, name);
    if (statSync(p).isDirectory()) yield* walk(p);
    else if (statSync(p).size < 2_000_000) yield p;
  }
}
function repoHygiene() {
  lines.push('\n## Repository hygiene');
  let hits = 0;
  for (const file of walk('.')) {
    if (file.endsWith('package-lock.json') || file.endsWith('fleet-audit.mjs')) continue;
    let text;
    try { text = readFileSync(file, 'utf8'); } catch { continue; }
    for (const [re, label] of SECRET_PATTERNS) {
      if (re.test(text)) { fail(`${label} pattern found in ${file}`); hits++; }
    }
  }
  if (!hits) ok('no high-confidence secret patterns in the working tree');
  if (existsSync('.gitignore') && /^\.env/m.test(readFileSync('.gitignore', 'utf8'))) ok('.gitignore covers .env');
  else fail('.gitignore does not cover .env');
}

/* ---------- Leg 1: axe ---------- */
async function axeAudit() {
  lines.push('\n## Accessibility (axe-core, WCAG 2.2 AA, live site)');
  let chromium, AxeBuilder;
  try {
    ({ chromium } = await import('playwright'));
    ({ AxeBuilder } = await import('@axe-core/playwright'));
  } catch {
    warn('playwright/@axe-core not installed — axe leg skipped (install in CI before this step)');
    return;
  }
  const browser = await chromium.launch();
  for (const p of PAGES) {
    const page = await browser.newPage();
    try {
      await page.goto(BASE + p, { waitUntil: 'load', timeout: 45000 });
      const res = await new AxeBuilder({ page }).withTags(AXE_TAGS).analyze();
      const serious = res.violations.filter((v) => v.impact === 'critical' || v.impact === 'serious');
      if (serious.length === 0) ok(`${p} — 0 critical/serious violations`);
      else for (const v of serious) fail(`${p} — ${v.id} (${v.impact}) × ${v.nodes.length}`);
      const minor = res.violations.filter((v) => v.impact !== 'critical' && v.impact !== 'serious');
      for (const v of minor) warn(`${p} — ${v.id} (${v.impact}) × ${v.nodes.length}`);
    } catch (e) { fail(`${p} axe run failed: ${e.message.slice(0, 120)}`); }
    await page.close();
  }
  await browser.close();
}

/* ---------- run ---------- */
lines.push(`# Fleet Audit — ${BASE}`);
lines.push(`Run: ${new Date().toISOString()}`);
await seoAndHeaders();
repoHygiene();
await axeAudit();
lines.push(`\n## Verdict: ${fails.length ? `❌ ${fails.length} failure(s)` : '✅ all checks passed'}${warns.length ? `, ${warns.length} warning(s)` : ''}`);
const report = lines.join('\n') + '\n';
console.log(report);
const { writeFileSync, appendFileSync } = await import('node:fs');
writeFileSync('fleet-audit-report.md', report);
if (process.env.GITHUB_STEP_SUMMARY) appendFileSync(process.env.GITHUB_STEP_SUMMARY, report);
process.exit(fails.length ? 1 : 0);
