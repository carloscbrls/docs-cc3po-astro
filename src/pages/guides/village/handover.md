---
layout: '../../../layouts/Layout.astro'
title: Handover — Picking Up a Lane When an Agent Is Down
description: How a covering agent takes over a lane using the guides, the CURRENT docs, and the keys they already hold
navOrder: 10
---

# Handover

Agents hit usage limits. Sessions expire. Laptops close. The work is designed to survive that: **any agent with the proper access can pick up another agent's lane from the documentation alone.** This guide is the procedure.

## The principle

A lane is not the agent. A lane is a set of guides, living documents, standing rules, and access paths — the agent is who happens to be holding it. If a handover needs a private briefing from the outgoing agent, the documentation has a bug, and fixing that bug is part of the handover.

## The procedure

1. **Identify the lane and its owner.** [Who Does What](/guides/village/who-does-what) names every lane, its standing rule, and where its work lives.
2. **Read the lane's guide and system guides.** The relevant pages in this library first — they tell you the shape of the work and the traps.
3. **Read the CURRENT documents.** In Drive, open the CURRENT doc for each system the lane touches (see [Drive Conventions](/guides/village/drive-conventions)). The CURRENT doc wins over any guide, snapshot, or memory — including yours.
4. **Check the change logs.** The Drive change log (and the in-document change log, where a reference keeps one) tells you what changed most recently and what state things were left in. Work that was mid-flight will be visible there.
5. **Check what "done" looks like.** Open items, schedules, and next steps are recorded in the CURRENT docs and the lane's own files — not in the outgoing agent's head. If you can't find the state of a piece of work, say so before acting on it.
6. **Work the lane under its own rules.** The standing rule travels with the lane, not the agent: approval gates, read-only limits, and pauses apply to whoever is holding the lane. A covering agent does not inherit broader permission than the lane allows.
7. **Document as you go.** Update the CURRENT docs and log your changes in the same motion, under your own name. The next handover — possibly back to the original agent — reads what you wrote.
8. **Hand back explicitly.** When the original agent returns, a short note in the change log — what you did, what's still open — closes the loop.

## Access: which keys open which doors

Credentials are never written in these guides, in documents, or in chat. They live in **registered connectors and the Secure Vault**, and an agent uses them through those connections only. The map of doors:

| Door | What it opens | How an agent gets in |
|---|---|---|
| GitHub App connection | Reading all repos; pushing text files | The registered connector |
| GitHub token connection | Creating repos; pushing text and binaries; repo admin | Token in the Secure Vault, via the connector |
| Supabase Management API | Database projects, queries, migrations | Account token (the `sbp_` species) in the Secure Vault, via the connector |
| Supabase dashboard | The same database, by hand | Single sign-on chain: Google → GitHub → Supabase (no password exists) |
| Google connectors | Gmail, Drive, Docs, Calendar | The registered connectors |
| Cloudflare connector | Reading zones; adding DNS records | The registered connector |
| Social connectors | Instagram, Facebook, Threads — reading and publishing | The registered connectors, under the lanes' approval rules |
| Netlify | Creating sites, attaching custom domains | **No connector yet** — this step is Carlos's clicks until a token is stored |

The full, living version of this map is the **Access Map — CURRENT** in Drive. If a door you need isn't on it, that's the escalation case below — not a reason to find another door.

## The escalation rule

**If the path isn't in a guide, stop and tell Carlos.** Say what you were trying to do, what you checked, and where the map ran out. That report is valuable — it's how the guides get better. What you must not do: improvise a workaround, widen a permission to make a task fit, use a credential somewhere it wasn't registered for, or guess at a state you couldn't verify.

An agent that stops at the edge of the map is doing the job. An agent that invents the territory beyond it is how incidents happen.

---

*Source of truth: the Access Map — How Muse Reaches Everything — CURRENT (Drive); this guide is its public-safe procedure extract.*
