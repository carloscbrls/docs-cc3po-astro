---
layout: '../../../layouts/Layout.astro'
title: Supabase — The Databases
description: The two projects, the leads flow, security posture, and the rules for changing anything
navOrder: 5
owner: 'CC3PO Village'
reviewBy: '2027-01-25'
---

# Supabase

Supabase holds the databases behind the business: the leads the websites collect, and the Village's own shared knowledge and activity. There are exactly **two projects**:

- **The production project** — the Village and the business in one place: leads, outreach, email queues, agent memory and activity. Healthy, live, and the one almost every task means.
- **The product skeleton** — a small accessibility-scan product shell: a handful of tables, all empty, nothing writing to it. It waits on Carlos's decision (build, pause, or delete). Don't build on it unprompted.

## How leads flow

1. A form on a website submits.
2. The form inserts a row into the **`leads`** table through the database's public API, using the public (anon) key. That key is **insert-only** on leads — a form can add a lead and cannot read any.
3. A database trigger fires on every insert and automatically creates the lead's **pipeline row** and a **notification row**. Leads are workable records now: they carry status, stage, owner, and follow-up fields.
4. A second, older store — **`scanner_leads`** — holds leads from the scanner flow. **Any lead count that reads only one store is wrong.** Always count both.

Known gap, recorded honestly: notification rows accumulate in the database, but the **email drainer** — the piece that turns them into an email in Carlos's inbox — is the next build, not a built thing. Don't claim a lead "notified" anyone until the drainer exists and you've seen it send.

## Security posture

- **Row-level security is on for nearly every table.** On many tables it is on with no policy behind it, which means access behavior there is accidental, not designed. Before assuming how a table can be reached, check its actual policies.
- The public key can insert leads and almost nothing else. That is deliberate. Never widen it to make a task easier.
- **Check the token species before anything else.** The scripted door (the Management API) accepts only an **account access token** — the kind that starts with `sbp_`, created from the account's Access Tokens page. Project keys (anon, service role) are a different species — signed JWTs — and the Management API rejects them. Three attempts were once burned on exactly this confusion.

## The rules for changing anything

1. **Migrations only.** Schema changes are written as numbered, reversible migration files and applied deliberately. No silent edits through a dashboard — unexplained schema drift was found once, during an audit, in real time.
2. **The database documents itself.** Tables and key columns carry plain-language comments saying what they are, what writes to them, and what the trap is. When you change a table, update its comment in the same migration.
3. **Verify with counts.** Row counts before and after any change, stated in your report. A change you didn't count is a change you didn't verify. Baseline counts live in the CURRENT reference document.
4. **Counts are health checks.** The fastest database health check is comparing the handful of known counts — leads in both stores, unsent queue rows — against the recorded baselines. A number that moved when nothing should have moved is a finding.
5. **Report structure, never people's data.** Counts, dates, sources, column names — yes. Names, emails, and messages from real rows — never, in any report or guide.
6. **Old queues are whiteboards, not backlogs.** Some legacy tables were filled in by agents working by hand and were never wired to a sender. Do not "retry" or drain them blindly — recipients and consent need a human pass first.

## Access

Agents reach the database two ways: the **Management API** with the account token held in the Secure Vault (the simple, scripted path), or the **dashboard**, which signs in through a Google → GitHub single-sign-on chain. There is no database password. See [Handover](/guides/village/handover) for which keys unlock what.

---

*Source of truth: Supabase — What's What, What's Missing, What to Fix — CURRENT (Drive), including the Move 1 migration record; the database's own table and column comments carry the same documentation in place.*
