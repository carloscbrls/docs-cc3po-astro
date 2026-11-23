---
layout: '../../../layouts/Layout.astro'
title: GitHub Organization Pack — Inventory, Descriptions, and a Profile That Explains Itself
description: The organization pack for a client-side agent working on the client's own GitHub account — inventory, descriptions and topics, profile README, and a client decision list
---

# GitHub Organization Pack — Inventory, Descriptions, and a Profile That Explains Itself

**For: the agent running on the client's own setup, working on the client's own GitHub account.**
**Read this whole document first. Then execute it in order. Verify each step before moving to the next (§6).**

You are organizing a GitHub account so that anyone — the client, a new agent starting cold, a collaborator — can look at it and immediately know what everything is. Three parts:

1. An **inventory** of every repository: what it is, whether it's public or private, when it last moved, and whether it explains itself.
2. **Descriptions and topics** on the client's own repositories, so no repo sits there mute.
3. A **profile README** that tells a visitor what this account is and where the important things live.

This pack runs **inside the local workspace the Hermes Setup Pack builds** — the inventory becomes a "— CURRENT" document there, and every action gets its timestamped CHANGE LOG line in the same motion. If that workspace doesn't exist yet, see the fallback in §1 before doing anything else.

**Composes with:** [Hermes Setup Pack](/guides/client-setup/hermes-pack) — the local workspace this pack runs inside.

**Prime rule: organization is not deletion.** This pack describes, labels, and maps. It never archives, renames, deletes, or changes the visibility of anything. Anything that looks like it *should* be archived, renamed, merged, or deleted goes on a decision list for the client — exactly as it would for Carlos — and stays untouched until the client says the word.

---

## Scope — what this pack governs, and what it does not

**This pack governs the operational layer only:** the account's inventory, repository descriptions and topics, the profile README, and the decision list. It keeps the account legible.

**This pack deliberately does not touch the work itself.** It does not open, edit, review, or judge code. It does not change repository contents, settings (beyond description/topics), collaborators, or branches. It does not decide what gets archived or deleted — it surfaces candidates with honest labels and lets the client decide. The client's repos are the client's work; this pack only makes the account explain itself.

**Boundary rule — other people's repos stay hands off.** If the client does work for *their* clients and repositories belonging to those clients live in (or are visible from) this account, those repos are **inventory-only**: they appear in the inventory marked HANDS OFF, and they receive no descriptions, no topics, no README, and no changes of any kind without that client's own work order. When in doubt about who a repo belongs to, mark it HANDS OFF and ask.

---

## 1. Prerequisites — the workspace, and the fallback

**Assumed:** the Hermes Setup Pack has already run on this machine, so a local workspace exists with a CHANGE LOG, per-folder READMEs, and the "— CURRENT" convention. This pack's outputs live there:

- `GitHub Account — What's What — CURRENT.md` in the workspace (the inventory — one living document, updated in place).
- CHANGE LOG lines for every step, in the standard format, in the same motion as the work.

**Fallback — if the workspace doesn't exist yet:** stop and say so (report through Carlos). Do not invent a second filing system. Either run the Hermes Setup Pack first, or, if the client directs it, create a single folder named `Account Organization/` holding this pack's CURRENT doc and a plain `LOG.md` with the same timestamped line format, and proceed — the discipline matters more than the address. Note which fallback you used in the first log line.

**Access:** you work through whatever GitHub access the client has already authorized on this machine (their signed-in account / their token). Never ask the client to paste a token into a document, a log, or a chat with anyone else, and never write a token into any file this pack produces (see §7).

## 2. First entry

Write the first CHANGE LOG line yourself, recording the start:

```
YYYY-MM-DD HH:MM PT — <Your name> (GitHub organization) — GitHub organization pass started: inventory first, descriptions second, nothing archived or deleted — GitHub Account — What's What — CURRENT
```

## 3. Step 1 — Inventory every repository

List **every** repository the account can see, and record each one in `GitHub Account — What's What — CURRENT.md` with:

- **Name** (and owner, if it isn't the client's own account).
- **Visibility** — public or private.
- **Last activity** — date of the most recent commit or update.
- **Explains itself?** — has a description? has a README? (yes/no for each)
- **Purpose** — one plain-language line on what the repo is, from its README, description, or contents page. If you cannot tell, write "purpose not recorded" — never guess, never invent.
- **Ownership class** — the client's own repo, or HANDS OFF (belongs to the client's client or a third party).

Count as you go: total repos, own vs HANDS OFF, public vs private. These counts are your verification baseline (§6) and the numbers the client sees in your report.

Log the step in the same motion: one CHANGE LOG line with the counts.

## 4. Step 2 — Descriptions and topics on the client's own repos

For each of the **client's own** repos (never the HANDS OFF set):

- **Description:** if missing, add a one-line description drawn from the repo's actual README or contents — what it is, in plain language. If a description exists but is wrong or stale, note it on the decision list (§5) rather than silently rewriting it; a description that is merely *absent* is the only one you fill in without asking.
- **Topics:** add a small set of topic tags that describe the repo's kind (site, app, docs, music, tool…) — the same vocabulary across the account, so the tags stay useful. Topics are public even on private repos: **never put a client name, a person's name, or anything confidential in a topic tag.**
- Work repo by repo and log in batches (one CHANGE LOG line per batch, with the count), so the log stays readable and the work is resumable if interrupted.

## 5. Step 3 — Profile README, and the decision list

**Profile README.** If the account has no profile repository (the special repo named after the account's username, whose README appears on the profile page), create it — public, containing only a README that says, in plain language: who this account belongs to, what kinds of things live here, and where the important projects are. If a profile README already exists, leave it and note any drift on the decision list instead of editing it unasked.

**The decision list.** Everything this pack must *not* do on its own goes into a clearly marked section at the bottom of the CURRENT doc — **"Decisions for the client"** — each item with the fact and the honest label:

- **Empty repositories** (no commits, no content) — archive candidates.
- **Duplicate or divergent pairs** (two repos that appear to be versions of the same thing) — reconcile candidates; say which one looks live and the evidence (last activity, what's deployed from it), but merge nothing.
- **Stale repositories** (no activity for a long stretch) — archive candidates, labeled with the last-activity date.
- **Unidentified repositories** (purpose not recorded after a genuine look) — the client identifies them, or accepts the honest label.
- **Stale descriptions** found in Step 2.
- **Recommended pins** — the handful of repos that best represent the account, proposed for the profile's pinned slots.

The decision list is the deliverable the client acts on. Nothing on it gets executed by you — not in this run, not in a later run — without the client's explicit word on that item.

## 6. Verification gates — prove it before you report it

Do not report a step done on intention. Each step has an observable proof:

| Step | Proof required |
|---|---|
| Inventory (§3) | Repo count in the CURRENT doc equals the account's actual repo count (read back from GitHub). Every repo carries visibility, last-activity date, and ownership class; HANDS OFF count stated separately. |
| Descriptions (§4) | Re-read the account: every one of the client's own repos now has a description; count of descriptions added matches the CHANGE LOG batch lines. Zero HANDS OFF repos modified — spot-check by their untouched state. |
| Topics (§4) | Every own repo carries topics from the shared vocabulary; no topic anywhere contains a client or person name. |
| Profile README (§5) | Open the public profile page: the README renders, names the account's owner and main project areas, and links resolve. |
| Decision list (§5) | Every empty, duplicate, stale, and unidentified repo from the inventory appears on the list with its evidence; the list's total matches the inventory's flags. |
| Change log | One line per step/batch, standard format, timestamps in PT; the log and the CURRENT doc agree on counts. |

If a gate fails, fix the cause and re-verify. Report the proof (counts, readbacks), not just the claim.

## 7. Safety rules

- **Nothing structural without the client's word.** No archiving, renaming, deleting, visibility changes, transfers, or settings changes — in this run or any later one — on the basis of this pack alone. The decision list is where those live until the client rules.
- **HANDS OFF means hands off.** Repos belonging to the client's clients get an inventory line and nothing else. Ever.
- **Tokens never touch paper.** Account tokens, passwords, and keys are never written into the CURRENT doc, the CHANGE LOG, the profile README, a description, or a topic. If you encounter a secret committed inside a repo while inventorying, do not copy its value anywhere — note the repo name and "secret found in source — rotation recommended" on the decision list and report it through Carlos.
- **Descriptions are facts, not marketing.** Write what the repo verifiably is. No invented purposes, no inflated claims, no borrowed descriptions from a similar-looking repo.
- **Honest labels stay honest.** "Purpose not recorded" is a complete and acceptable inventory entry. A guessed purpose is worse than none.
- **Plain language in anything the client reads.** The CURRENT doc and the decision list are written for the account's owner, not for engineers.

## 8. When you're done

Report to the client (through Carlos) with the §6 proofs: total repos inventoried, own vs HANDS OFF counts, descriptions and topics added, profile README status, and the decision list's item count. Then the CURRENT doc stays current: when the client rules on a decision item or a new repo appears, update the doc in place and log the line in the same motion.
