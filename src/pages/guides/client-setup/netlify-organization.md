---
layout: '../../../layouts/Layout.astro'
title: Netlify Organization Pack — Every Site Mapped to Its Domain
description: The organization pack for a client-side agent working on the client's own Netlify account — site inventory, domain map, and a client decision list
---

# Netlify Organization Pack — Every Site Mapped to Its Domain

**For: the agent running on the client's own setup, working on the client's own Netlify account.**
**Read this whole document first. Then execute it in order. Verify each step before moving to the next (§6).**

You are organizing a Netlify account so that anyone — the client, a new agent starting cold — can answer one question instantly: **which site serves which domain, and how does it get there?** Three parts:

1. An **inventory** of every site: its name, its domain, how it deploys, and whether it's actually serving.
2. A **domain map**: every custom domain traced to the one site that serves it.
3. A **decision list** of stale, unlinked, and duplicate sites — flagged for the client, never acted on unasked.

This pack runs **inside the local workspace the Hermes Setup Pack builds** — the site map becomes a "— CURRENT" document there, and every action gets its timestamped CHANGE LOG line in the same motion. It composes with the GitHub Organization Pack: where a site is git-linked, the inventory names the repository, and the two CURRENT docs should agree. If the workspace doesn't exist yet, see the fallback in §1 before doing anything else.

**Composes with:** [Hermes Setup Pack](/guides/client-setup/hermes-pack) — the local workspace this pack runs inside.

**Prime rule: a map is not a demolition.** This pack inventories, traces, and records. It never deletes a site, never moves or removes a domain, never changes a DNS record, and never re-links a repository. Anything that looks like it *should* be deleted, renamed, or re-pointed goes on the decision list for the client and stays untouched until the client says the word.

---

## Scope — what this pack governs, and what it does not

**This pack governs the operational layer only:** the site inventory, the domain-to-site map, deploy-source hygiene (knowing which sites are git-linked and which were deployed by hand), and the decision list. It keeps the account legible.

**This pack deliberately does not touch the work itself.** It does not change site content, code, build settings, environment variables, or forms. It does not decide what gets deleted or re-pointed — it surfaces candidates with honest labels and lets the client decide. The client's sites are the client's work; this pack only makes the account explain itself.

**Boundary rule — other people's sites stay hands off.** If the client hosts sites that belong to *their* clients, those sites are **inventory-only**: they appear in the inventory marked HANDS OFF, with their domain noted, and receive no changes of any kind without that client's own work order. When in doubt about who a site belongs to, mark it HANDS OFF and ask.

---

## 1. Prerequisites — the workspace, and the fallback

**Assumed:** the Hermes Setup Pack has already run on this machine, so a local workspace exists with a CHANGE LOG, per-folder READMEs, and the "— CURRENT" convention. This pack's outputs live there:

- `Netlify — Sites & Domains — CURRENT.md` in the workspace (the inventory and domain map — one living document, updated in place).
- CHANGE LOG lines for every step, in the standard format, in the same motion as the work.

**Fallback — if the workspace doesn't exist yet:** stop and say so (report through Carlos). Do not invent a second filing system. Either run the Hermes Setup Pack first, or, if the client directs it, create a single folder named `Account Organization/` holding this pack's CURRENT doc and a plain `LOG.md` with the same timestamped line format, and proceed — the discipline matters more than the address. Note which fallback you used in the first log line.

**Access:** you work through whatever Netlify access the client has already authorized on this machine (their signed-in account / their token). Never ask the client to paste a token into a document, a log, or a chat with anyone else, and never write a token into any file this pack produces (see §7).

## 2. First entry

Write the first CHANGE LOG line yourself, recording the start:

```
YYYY-MM-DD HH:MM PT — <Your name> (Netlify organization) — Netlify organization pass started: inventory and domain map first, nothing deleted or re-pointed — Netlify — Sites & Domains — CURRENT
```

## 3. Step 1 — Inventory every site

List **every** site in the account, and record each one in `Netlify — Sites & Domains — CURRENT.md` with:

- **Site name** (and its Netlify subdomain, e.g. `<name>.netlify.app`).
- **Custom domain** — the domain it serves, if any; "none" is a real answer.
- **Deploy source** — git-linked (name the repository and branch) or **manual deploy** (uploaded by hand / CLI, no repo behind it). Manual-deploy sites get a visible flag: they are the ones nobody can rebuild from source, and the client should know which they are.
- **Last deploy** — date, and its state (published / failed / none ever).
- **Serving status** — does the custom domain (or the Netlify subdomain, if no custom domain) actually answer right now? Check it; record what you found and when.
- **Purpose** — one plain-language line on what the site is. If you cannot tell, write "purpose not recorded" — never guess.
- **Ownership class** — the client's own site, or HANDS OFF (belongs to the client's client or a third party).

Count as you go: total sites, own vs HANDS OFF, git-linked vs manual, with-domain vs without. These counts are your verification baseline (§6) and the numbers the client sees in your report.

Log the step in the same motion: one CHANGE LOG line with the counts.

## 4. Step 2 — The domain map

From the inventory, build the map as its own section of the CURRENT doc — one line per custom domain:

```
<domain> → <site name> (git-linked: <repo> @ <branch> / manual deploy) — verified serving YYYY-MM-DD
```

Then check the map for the three classic tangles, and record what you find (facts only — fixes belong to the decision list):

- **A domain claimed by no site**, or a site whose domain points somewhere else — the pairing doesn't close.
- **Two sites claiming the same domain**, or a production site and a leftover preview/test site both presenting as the real thing.
- **A git-linked repo with no site, or a site linked to a repo that no longer matches it** — cross-check against the GitHub Organization Pack's CURRENT doc where it exists; where the two maps disagree, flag the disagreement rather than resolving it.

## 5. Step 3 — The decision list

Everything this pack must *not* do on its own goes into a clearly marked section at the bottom of the CURRENT doc — **"Decisions for the client"** — each item with the fact and the honest label:

- **Stale sites** — no deploy in a long stretch, or serving nothing — delete or keep-for-the-record candidates, labeled with the last-deploy date.
- **Manual-deploy sites** — candidates for git-linking, so the site can be rebuilt from source; say which repo should back each one if it's obvious, and "repo not identified" when it isn't.
- **Duplicate or test sites** — previews and experiments that outlived their purpose.
- **Unpaired domains and sites** from §4's tangles, each with the evidence.
- **Unidentified sites** (purpose not recorded after a genuine look) — the client identifies them, or accepts the honest label.

The decision list is the deliverable the client acts on. Nothing on it gets executed by you — not in this run, not in a later run — without the client's explicit word on that item. Deleting a site and moving a domain are both irreversible-feeling moves from the client's side; they are never side effects of an organization pass.

## 6. Verification gates — prove it before you report it

Do not report a step done on intention. Each step has an observable proof:

| Step | Proof required |
|---|---|
| Inventory (§3) | Site count in the CURRENT doc equals the account's actual site count (read back from Netlify). Every site carries domain, deploy source, last-deploy date, serving status, and ownership class; HANDS OFF count stated separately. |
| Deploy sources (§3) | Every site is classified git-linked (repo + branch named) or manual; manual count matches the account readback. Zero HANDS OFF sites modified — they were only read. |
| Domain map (§4) | Every custom domain in the account appears on the map exactly once, traced to one site; every site with a domain appears on the map. Map count equals the inventory's with-domain count. |
| Serving checks (§3–§4) | Each serving status carries the date it was checked; any site recorded as not serving also appears on the decision list with the evidence. |
| Decision list (§5) | Every stale, manual, duplicate, unpaired, and unidentified item from the inventory and map appears on the list; the list's total matches the flags. |
| Change log | One line per step, standard format, timestamps in PT; the log and the CURRENT doc agree on counts. |

If a gate fails, fix the cause and re-verify. Report the proof (counts, readbacks), not just the claim.

## 7. Safety rules

- **Nothing structural without the client's word.** No site deletions, no domain adds/removes/moves, no DNS changes, no re-linking repositories, no build-setting or environment changes — in this run or any later one — on the basis of this pack alone. The decision list is where those live until the client rules.
- **HANDS OFF means hands off.** Sites belonging to the client's clients get an inventory line and nothing else. Ever.
- **Tokens never touch paper.** Account tokens, passwords, and keys are never written into the CURRENT doc, the CHANGE LOG, or any report. If a site's build settings or a repo behind a site turns out to contain a committed secret, do not copy its value anywhere — note the site/repo name and "secret found — rotation recommended" on the decision list and report it through Carlos.
- **Serving checks are reads, not touches.** Checking whether a domain answers is allowed; changing anything to make it answer is a decision-list item.
- **Facts, not guesses.** Deploy sources, dates, and pairings come from the account readback and the serving check — never from a site's name or from memory. "Purpose not recorded" is a complete and acceptable entry.
- **Plain language in anything the client reads.** The CURRENT doc and the decision list are written for the account's owner, not for engineers.

## 8. When you're done

Report to the client (through Carlos) with the §6 proofs: total sites inventoried, own vs HANDS OFF counts, git-linked vs manual counts, domains mapped, and the decision list's item count. Then the CURRENT doc stays current: when the client rules on a decision item, a site is added, or a domain moves, update the doc in place and log the line in the same motion.
