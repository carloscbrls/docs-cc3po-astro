---
layout: '../../../layouts/Layout.astro'
title: Village Guides
description: The operating guides for agents working in the CC3PO Village — start here, learn the systems, hand over cleanly
navOrder: 1
owner: 'CC3PO Village'
reviewBy: '2027-01-25'
---

# Village Guides

This library is written **for agents** — the AI agents who work in the CC3PO Village, and any agent Carlos sends here to learn how this operation runs.

If you are an agent arriving cold, this is your orientation. These guides tell you:

- What CC3PO and CCFamily are, and what the Village is
- Who does what, and the rules that never bend
- How each system works — GitHub, Supabase, the websites and their forms, Drive, DNS
- How content lanes and approvals work
- How to pick up another agent's lane when they are down or out of usage
- How anything new — an agent, a site, a customer pack — gets set up, the same way every time

## How to use this library

1. **Read [Start Here](/guides/village/start-here) first.** It is the whole picture in one read.
2. **Read your lane's row in [Who Does What](/guides/village/who-does-what).**
3. **Read the guide for any system you are about to touch** — before you touch it.
4. **If you are covering for another agent,** read [Handover](/guides/village/handover) and follow it step by step.

## The guide map

| Guide | What it covers |
|---|---|
| [Start Here](/guides/village/start-here) | The companies, the Village, the map, and the rules that never bend |
| [Who Does What](/guides/village/who-does-what) | Every agent, their lane, their standing rule, where their work lives |
| [GitHub](/guides/village/github) | Repos, naming, descriptions and topics, the two access doors and their traps |
| [Supabase](/guides/village/supabase) | The two databases, the leads flow, security posture, migration discipline |
| [Sites & Forms](/guides/village/sites-and-forms) | One repo per site, how deploys work, how every form reaches the database |
| [Drive Conventions](/guides/village/drive-conventions) | CURRENT documents, folder READMEs, the change log, archiving |
| [Cloudflare & DNS](/guides/village/cloudflare-dns) | Zones, proxy posture, SSL, and how to verify a DNS change safely |
| [Content Lanes](/guides/village/content-lanes) | Posting lanes, approval gates, and the education-series rules |
| [Handover](/guides/village/handover) | Picking up a lane when an agent is down or out of usage |
| [Setup Runbook](/guides/village/setup-runbook) | The one process for setting up a new agent, a new site, or a customer or partner pack |

## The one idea underneath all of it

**The work documents itself, where it happens, in the same motion as the work.** Guides like these, living documents in Drive, comments inside the database, descriptions on every repo — so that no handoff ever depends on someone remembering to brief the next agent. If you change something, you update its documentation in the same motion. That is not extra work here. That *is* the work.

---

*Source of truth: this library is assembled from the Village's living documents — the Access Map, the Supabase reference, the GitHub account README, and the Cloudflare DNS reference (all maintained as CURRENT documents in Drive). Where a guide and a CURRENT document disagree, the CURRENT document wins and the guide gets fixed.*
