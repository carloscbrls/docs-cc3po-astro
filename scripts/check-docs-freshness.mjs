#!/usr/bin/env node
/**
 * Docs freshness check — every Markdown guide must carry an owner and a
 * reviewBy date in frontmatter. Report-only: stale guides are listed, the
 * exit code stays 0 unless metadata is missing or malformed.
 *
 * Usage: node scripts/check-docs-freshness.mjs [--json] [--as-of YYYY-MM-DD]
 */
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const root = new URL('../src/pages/', import.meta.url).pathname;
const args = process.argv.slice(2);
const asOfIndex = args.indexOf('--as-of');
const asOf = asOfIndex >= 0 ? args[asOfIndex + 1] : new Date().toISOString().slice(0, 10);
const json = args.includes('--json');

function files(dir) {
  return readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    return statSync(path).isDirectory() ? files(path) : name.endsWith('.md') ? [path] : [];
  });
}

function frontmatter(text) {
  if (!text.startsWith('---\n')) return null;
  const end = text.indexOf('\n---\n', 4);
  return end < 0 ? null : text.slice(4, end);
}

function field(fm, name) {
  const match = fm?.match(new RegExp(`^${name}:\\s*['"]?([^'"\\n]+)['"]?\\s*$`, 'm'));
  return match?.[1]?.trim();
}

const rows = [];
let errors = 0;
for (const file of files(root).sort()) {
  const rel = relative(root, file);
  const fm = frontmatter(readFileSync(file, 'utf8'));
  const owner = field(fm, 'owner');
  const reviewBy = field(fm, 'reviewBy');
  if (!fm || !owner || !reviewBy || !/^\d{4}-\d{2}-\d{2}$/.test(reviewBy)) {
    errors += 1;
    rows.push({ file: rel, owner: owner || null, reviewBy: reviewBy || null, status: 'missing-or-invalid-metadata' });
  } else {
    rows.push({ file: rel, owner, reviewBy, status: reviewBy < asOf ? 'stale' : 'current' });
  }
}

const stale = rows.filter((row) => row.status === 'stale');
if (json) {
  console.log(JSON.stringify({ asOf, total: rows.length, stale: stale.length, errors, rows }, null, 2));
} else {
  console.log(`Docs freshness — as of ${asOf}: ${rows.length} guides, ${stale.length} stale, ${errors} metadata errors.`);
  for (const row of stale) console.log(`STALE ${row.reviewBy} ${row.file} (owner: ${row.owner})`);
  for (const row of rows.filter((r) => r.status === 'missing-or-invalid-metadata')) console.log(`ERROR ${row.file}`);
}
process.exit(errors ? 1 : 0);
