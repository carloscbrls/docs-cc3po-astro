---
layout: '../../../layouts/Layout.astro'
title: Sites & Forms — How the Websites and Their Forms Work
description: One repo per site, the Netlify deploy pattern, and the one form pipeline every form uses
navOrder: 6
owner: 'CC3PO Village'
reviewBy: '2027-01-25'
---

# Sites & Forms

## The site pattern

- **One repo per subdomain.** Each site — the main site, the academy, the music site, this docs site, the fantasy desk, and the rest — has its own repo, named for its address (see the [GitHub guide](/guides/village/github)).
- **Netlify publishes.** Pushing to a site's repo triggers a Netlify rebuild, and the new version goes live at the site's address. Most sites are static builds with no build command beyond the framework default; the repo carries its own deploy config.
- **Creating a new site is a relay, for now.** Repo (an agent can do this end-to-end) → Netlify site creation and custom-domain attachment (currently Carlos's clicks — the one remaining gap in the pipeline) → the DNS record (an agent can add it, see [Cloudflare & DNS](/guides/village/cloudflare-dns)) → live verification by the owning lane before anything is announced.

## The form pipeline — one pattern for everything

Every lead-capturing form on the main site follows the same path:

**Form → the database's public API → the `leads` table**, with a per-form source tag so reporting can tell the forms apart.

Why one pattern: nine forms once ran on three different mechanisms, and the differences hid the failures. Two forms were outright broken — one pointed at a form-service endpoint that did not exist, and one posted to an on-site endpoint that was never built and *showed a success message anyway*. Both were found only when someone tested every form end to end. Uniformity is what makes the system checkable.

The rules that came out of that:

1. **A success message shows only on a real success.** If the insert fails, the visitor sees an honest error — never a fake confirmation. A form that lies about success is worse than a broken form.
2. **Send the whole form.** Every field the visitor filled in lands in the database. A form that silently discards fields (it happened: phone, company, and website were collected and thrown away) is a data-loss bug, not a simplification.
3. **Field values must fit the database's rules.** The leads table validates some fields against an allowed list. When a new form needs a new value, widening that list is a database migration (see the [Supabase guide](/guides/village/supabase)) — not a workaround in site code.
4. **Form-handling services are a legacy exception, not the pattern.** One form service account still exists, nearly dormant. New forms do not go there.

## Testing a form — the only test that counts

After any form change, and after the deploy settles:

1. Submit **one labeled test** exactly as a visitor would — a clearly marked test name and a test email address.
2. Confirm the submission was accepted (a success response, not just a success screen).
3. Confirm the row exists in the database with the right source tag.
4. Clean up test rows when the check is done, and say so in your report.

"Submissions are probably fine" is not a state this system accepts anymore. The 2026 audit exists because forms *looked* fine for months while two of them silently failed — and the working ones landed 1,600+ leads with no notification anywhere. Test, count, report.

## Verifying a deploy

- Poll the **live page** until the new content appears; deploys take a few minutes.
- Pages may redirect to trailing-slash URLs — follow them before concluding anything.
- Built pages minify code. Verify the *content and behavior* of the served page, not the exact source text.

---

*Source of truth: the forms audit and fix record (November 2026) and the Access Map — CURRENT (Drive); per-site details live in GitHub Account — What's What — CURRENT (Drive).*
