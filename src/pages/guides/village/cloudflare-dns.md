---
layout: '../../../layouts/Layout.astro'
title: Cloudflare & DNS — Zones, Proxy Posture, and Safe Changes
description: How DNS is held, the order to make decisions in, and how to verify a record before removing anything
navOrder: 8
owner: 'CC3PO Village'
reviewBy: '2027-01-25'
---

# Cloudflare & DNS

Cloudflare holds the DNS for Carlos's domains — the records that point each name at the place that hosts the site. The DNS for the main domain lives in **Carlos's own Cloudflare account**; that question is settled and verified. Agents with the connector connected can read the zones and add records directly.

## Zones: his and not his

The account holds more than one kind of zone:

- **Carlos's zones** (his companies' domains) — agents may read them and, for a task Carlos has set in motion, add and change records.
- **Client zones** — they exist in the same account because the clients' work runs through it. They are **hands off**: inventory them for clarity, change nothing without the client's work order. Ever.

If you cannot tell which kind a zone is, treat it as a client zone until Carlos says otherwise.

## The decision order (learned from research, not preference)

1. **Proxy posture first.** Decide whether a hostname is proxied through Cloudflare (orange cloud) or DNS-only (grey cloud) *before* touching SSL settings. The hosting platform used here (Netlify) officially advises against proxying through Cloudflare at all, and certificate renewal is the fragile point when proxying is on. If a hostname is DNS-only, Cloudflare's SSL settings don't apply to it in the first place.
2. **SSL mode second.** "Full" encrypts to the origin without fully verifying its certificate; "Full (Strict)" verifies it. Strict is the tighter setting — but it is not a standalone switch to flip casually; it follows from the proxy decision, per hostname.
3. **TLS floor is the free one.** Raising the minimum TLS version to 1.2 is an edge-only change with no origin interaction, and it only drops pre-2013-era clients. Safe to raise.

## Verifying a record before you touch it

- **Two records for one name can both be live.** Round-robin means both may be serving real traffic right now. Never assume one is stale because it looks unfamiliar — a record pointing at a different provider may be a legitimate front door.
- **Verify per address.** Query the name against each address separately and compare what answers — the server identity and the actual content — before calling anything stale.
- **Lower the TTL first, and wait out the old TTL,** before removing or replacing a record. Then remove, then verify the name still resolves and serves the right thing.

## Known open items on the main zone (awareness, not instructions)

A split record on one subdomain awaiting Carlos's decision on which backend is right; the SSL-mode and TLS items above, awaiting his word; one preview-vs-production target worth a deliberate check. These are recorded in full in the CURRENT reference — an agent does not freelance DNS fixes from this list. Carlos's word first, then the decision order above.

---

*Source of truth: Cloudflare — DNS What's What — CURRENT (Drive) and the Fix Research note on Cloudflare hardening (Drive, Briefings).*
