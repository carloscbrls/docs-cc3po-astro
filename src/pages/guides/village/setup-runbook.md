---
layout: '../../../layouts/Layout.astro'
title: Setup Runbook — How Anything Gets Set Up
description: The one process for setting up a new agent, a new site, or a new customer or partner pack in the Village
navOrder: 11
owner: 'CC3PO Village'
reviewBy: '2027-01-25'
---

# Setup Runbook

Anything new in this operation — a new agent, a new website, a new customer or partner pack — gets set up **one way**: this runbook. It exists because every trap in it already cost real time once. Follow the track, pass the gate, and the setup is done. Skip a step and the next agent pays for it.

Carlos has pre-approved the internal steps of this process. Agents execute them and report after; nobody waits for a per-step review. The gates that are *not* internal — money, client work, anything published under Carlos's name — keep their own rules below.

## The three tracks

| Track | When | Shape |
|---|---|---|
| **A — New agent** | A new Village agent starts, on any platform | Connectors → the one link → registry row → cold-start test |
| **B — New site** | A new site or subdomain on CC3PO / CCFamily properties | Repo → hosting → domain → verify → document |
| **C — Customer / partner pack** | A real customer or partner setup is underway | Templates → facts only → staged for approval |

## Track A — a new agent

1. **Grant only the connectors the lane needs.** Each agent connects its own accounts — access is per-agent and cannot be inherited or centralized.
2. **Send one link: the Agent Onboarding document.** It holds the reading path, the registry, and the update rule. That link is the whole syllabus; never hand-brief around it.
3. **Create the registry row** — name, lane, platform, how the agent reaches shared files, its required reading. Unknowns are written as *confirm on onboarding*, never guessed.
4. **Run the cold-start test.** Give the agent nothing but the link and this library, plus one small real task. The agent reports what it learned and settles its own registry unknowns. Whatever it gets stuck on is a documentation defect — fix the guide, not the agent.

## Track B — a new site

1. **Repo first, named by pattern:** `<subdomain>-cc3po-astro`. Set its description and topics in the same motion as creating it.
2. **Hosting linked to the repo**, with build settings copied from a sibling site's proven settings — a static page publishes from the root with no build command; a framework site uses its real build.
3. **Verify the host's own URL before touching DNS.** A working page there separates "site problem" from "DNS problem" — they look identical from outside.
4. **DNS record: a CNAME to the host, proxy off.** Then verify the real domain — resolution, HTTPS, correct content — before calling it live.
5. **Document in the same motion:** the Access Map and the repo inventory get the new site before the task is called done.

## Track C — a customer or partner pack

1. **Start from the templates**, never from another customer's pack.
2. **Fill from facts only** — what this setup actually is. Money, commissions, and service terms stay blank until Carlos writes them himself; they are never invented to complete a document.
3. **One audience per pack.** No pack ever names another client, and internal guides never flow outward into customer or partner material.
4. **Staging is not publishing.** A finished pack still waits for Carlos's exact approval before it is handed out or posted.

## The rules that never bend during a setup

- **Credentials move only through the secure vault and connectors** — never through chat, documents, or files.
- **Verify by readback.** A success message is not proof; read the thing back — the live page, the record, the registry row.
- **Documentation moves in the same motion as the work** — registry, maps, and the change log update when the setup happens.
- **Client work is hands off** without that client's work order, however helpful a fix looks.
- **Money always needs Carlos's say-so.** A setup step with a price attached stops and surfaces.
- **Classify a failure before retrying it** — transient, hard limit, or wrong target. The wrong-target retry is the expensive one: check that the thing you're aiming at exists, and that your key is the right *kind* of key, before a second attempt.

## What "done" means

Each track has a verification gate, and a setup is done only when its gate passes: a live URL returning the right page over HTTPS; a cold-start report received and a registry row settled; a pack staged with every open field listed rather than filled with a guess. A report that says "done" with a gate still open is the one report this process never sends.

---

*Source of truth: the Setup Process SOP pack (Village internal) and Agent Onboarding — Start Here — CURRENT (Drive). Where this page and those documents disagree, they win and this page gets fixed.*
