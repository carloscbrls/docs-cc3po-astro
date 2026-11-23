---
layout: '../../../layouts/Layout.astro'
title: Hermes Setup Pack — Local Workspace & Timestamp Discipline
description: The operational setup pack for a client-side Hermes agent — local folder structure, CURRENT-doc discipline, a timestamped change log, and verification gates
---

# Hermes Setup Pack — Local Workspace & Timestamp Discipline

**For: the Hermes agent running on the client's own device.**
**Read this whole document first. Then execute it in order. Verify each step before moving to the next (§7).**

You are setting up — and then running — a local working system on this computer. It has three parts:

1. A **folder structure** on this machine's local drive where all work lives.
2. A **timestamp discipline**: a CHANGE LOG that records every action in the same motion as the work, and "— CURRENT" documents that are the only living version of each report or topic.
3. A **client activity view**: a page generated locally from the CHANGE LOG so the client can see what the agents did, per agent, with timestamps, in plain language.

This system exists to end version chaos: one living document per topic, one log of everything, no agent ever working from an outdated copy.

**Prime rule: the client's data stays on the client's machine.** Nothing in this pack sends the client's files, logs, or documents to CC3PO or anywhere else. You build locally, you work locally, you report locally.

---

---

## Scope — what this pack governs, and what it does not

**This pack governs the operational layer only:** how work is filed (the folder structure), how the one living version of each document is kept (the "— CURRENT" rule), how every action is recorded (the timestamped CHANGE LOG), how work is handed off, and how completion is verified.

**This pack deliberately does not touch the work itself.** It does not choose research topics or questions, pick tools or sources, set priorities, direct creative choices, or tell any agent how to do its job. Your agents keep full autonomy over their work — what they research, how they research it, and what they conclude. The pack only keeps the operation organized around that work, so nothing gets lost, duplicated, or stuck in the wrong version.

## 1. Create the local workspace

Create this structure on the local drive (adapt folder names to the client's kind of work; the conventions do not change):

```
< Client Workspace >/
  README.md                      — what this workspace is, how to read it, who works here
  CHANGE LOG.md                  — one timestamped line per action (see §3)
  Activity/                      — the generated client activity view lives here (see §6)
  01 Agreements/
    README.md
  02 Working/                    — the live work
    README.md
    <Topic> — CURRENT.md         — one living document per report/topic (see §4)
  03 Deliverables/
    README.md
  04 Notes & Handoffs/
    README.md
```

**Every folder gets a README** stating, in plain language:
- **Purpose** — what this folder is for.
- **Current file** — which file in it is the living one right now (where applicable).
- **Audience** — who reads it (the client, the agents, or both).
- **Cadence** — how often it changes (daily, per task, weekly…).

The workspace root README also carries the rules in §3–§5 in short form, so any agent starting cold can read one file and know how this workspace runs.

## 2. First entry

Write the first CHANGE LOG line yourself, recording the setup:

```
YYYY-MM-DD HH:MM PT — Hermes (Setup) — Workspace created on this computer: folders, READMEs, and CHANGE LOG in place — < Client Workspace >/
```

## 3. The timestamp discipline (same-motion rule)

**Every action gets one line in `CHANGE LOG.md`, written in the same motion as the work itself** — not later, not in a batch at the end of the day. If it isn't in the log, it didn't happen; if it happened, it's in the log before you move on.

Standard format:

```
YYYY-MM-DD HH:MM PT — Who — What changed — Where
```

- **Who** = first name + role in parentheses, e.g. `Research Agent 2 (Research)`.
- **What changed** = one plain-language sentence about the outcome, written so the client could read it and understand it.
- **Where** = the folder/file the work touched, by workspace-relative path.
- Times are Pacific (America/Los_Angeles).

## 4. The "— CURRENT" rule (the version fix)

- For every report, topic, or working document there is exactly **one living document**, named `<Topic> — CURRENT`. It is the only working copy. Every agent reads and writes *it*.
- Updates happen **in place** in that document. A new finding, a new draft, a correction — it goes into the CURRENT doc, not into a new file.
- Dated files are **snapshots: history only**. They may be kept for the record, but they are never the working copy, and **no agent ever works from a snapshot**. If you catch yourself reading a dated file for current facts, stop, flag it in the CHANGE LOG, and go to the CURRENT doc.
- This is what kills "which version is real": the answer is structural. The CURRENT doc is real; the CHANGE LOG shows who touched it, when, and what changed.

## 5. Research-agent protocol (multiple agents, one log)

Several research agents (typically 5–6) work in this workspace. Parallel research is where duplication and version collisions breed; this protocol prevents both.

**Every research agent, in the same motion as its work, makes two writes:**
1. **One line to the shared CHANGE LOG** (§3 format) — what it did, what changed, where.
2. **Its findings into the single CURRENT doc for that topic** (§4) — updated in place, never a new dated working file.

**First-reader / router role.** One designated agent is the **first reader**: before research runs start, it reads the CHANGE LOG first and coordinates coverage — who is already covering which topic, which outputs are ready to fold into a CURRENT doc, where findings overlap or conflict. This is a traffic job, not an editorial one: the first reader prevents duplicate runs and collisions, but does not set research questions, choose topics or sources, or judge anyone's findings. If your setup has no designated first reader yet, **ask the client (through Carlos) which agent takes the role before running parallel research.** Do not improvise a second coordination system; the log plus the first reader is the system.

**Research agent rules — binding on every agent in this workspace:**
- **Timestamp everything.** Every output, update, and handoff carries its time (PT) — in the log line and where the change lands.
- **Write to CURRENT.** Findings go into the one living doc for the topic. Never start a new dated working file; never work from a snapshot.
- **Read the log before starting a run.** The CHANGE LOG is the coordination surface: check what the other agents have already done, claimed, or flagged. No duplicate runs.
- **Flag conflicts in the log; never silently overwrite.** If your findings contradict the CURRENT doc, write the conflict into the CHANGE LOG and note it in the doc for the first reader to route. Overwriting another agent's work without a log line is the one unforgivable move.
- **Same motion, always.** The log line and the CURRENT-doc update happen with the work. A log that is hours behind is a log nobody can coordinate from.

## 6. The client activity view (an output of the process)

The activity page is **not** the system — it is a rendering of the system, generated locally from the local record:

- **Generate it from `CHANGE LOG.md`** (plus the CURRENT docs where a summary needs context). Each log line becomes one entry: agent (first name + role), PT timestamp, plain-language summary, and status/category where the line carries one (work done / looked at / decision / deliverable; done / in progress / waiting on client / scheduled).
- **It lives in the workspace** (`Activity/` folder) on this computer. The client opens it locally. It is never hosted on CC3PO's sites or servers.
- **Keep it current:** regenerate it whenever the CHANGE LOG changes (or on a short fixed cadence — pick one, write which in the workspace README, and hold to it).
- **It adds nothing and hides nothing.** The page is a readable view of files the client owns; the raw CHANGE LOG sits next to it and the client can open it at any time.
- **Framing:** the page presents the workspace itself, not just the timeline — the folders, the README, the CURRENT convention — because the process is the point. (A sample of the expected output ships with this pack as `demo.html` — match its structure and plain-language tone; its data is sample data, never copy it into a live workspace.)

## 7. Verification gates — prove it before you report it

Do not report a step done on intention. Each step has an observable proof:

| Step | Proof required |
|---|---|
| Workspace created (§1) | List the tree back: every folder exists, every folder contains its README. Count folders and READMEs; the counts match. |
| READMEs complete (§1) | Re-read each README: purpose, current file, audience, cadence all present, in plain language. |
| First log line (§2) | Read `CHANGE LOG.md` back: the setup line is present, correctly formatted, timestamped PT. |
| Discipline live (§3–§4) | After the first real work session: the log has one line per action (spot-check against the work done), and each topic touched has exactly one CURRENT doc and no new dated working files. |
| Research protocol (§5) | Two or more agents have written to the log in format; the first-reader role is named in the workspace README; no duplicate-topic CURRENT docs exist. |
| Activity view (§6) | Open the generated page locally: entry count matches CHANGE LOG line count; newest entry matches the log's last line; timestamps render in PT. |

If a gate fails, fix the cause and re-verify. Report the proof (counts, readbacks), not just the claim.

## 8. Safety rules

- **The client's data stays on the client's machine.** Do not upload the workspace, the log, or any client document to CC3PO's Drive, CC3PO's database, or any third party as part of this system.
- **Plain language everywhere client-facing.** Entries and READMEs are written for a business owner: outcomes first, no jargon, no acronyms without a plain-words explanation.
- **First names + jobs only** in anything the client reads. Agents appear as "Research Agent 2 — Research," never with platform, model, or infrastructure detail.
- **Never write into the log or the page:** passwords, API keys or token fragments, IP addresses, internal network names, or anything from outside this client's own work.
- **Honest shortfalls stay honest.** If something is waiting on the client, the status says so. If work slipped, the log says what happened in plain words. The record's trustworthiness is the product.

## 9. When you're done setting up

Report to the client (through Carlos) with the §7 proofs: the folder/README counts, the first log line, and confirmation that the activity view opens and matches the log. Then the system runs itself: work, log in the same motion, keep CURRENT current, regenerate the view.
