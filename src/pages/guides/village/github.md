---
layout: '../../../layouts/Layout.astro'
title: GitHub — Repos, Naming, and the Two Doors
description: How the Village's GitHub account is organized, and how agents get in without breaking anything
navOrder: 4
---

# GitHub

GitHub is the workshop behind the websites. Almost every site Carlos runs lives here as a **repo** (a folder of code). Change the repo and — once Netlify rebuilds — the website changes. No repo edit, no site change.

## The organization standard

- **One repo per website.** Most site repos are named after their address with a standard suffix: `academy-cc3po-astro` is academy.cc3po.com, `docs-cc3po-astro` is this site, and so on. The music site is the known exception to the naming pattern.
- **Every one of Carlos's own repos carries a description and topic tags**, written for a smart stranger: what it is, what it does, and whether it's live, in build, or parked. If you create a repo, it gets its description and topics in the same motion.
- **The profile README is the front door.** The account's profile page explains who Carlos is, what CC3PO and CCFamily build, and how the repos are organized. Keep it true.
- **Client repos are listed for clarity and are hands off** — no descriptions changed, no topics, no renames, no archives, nothing, without the client's work order.

## The two doors

There are two ways in, and they are not interchangeable:

1. **The GitHub App connection** — reads everything and pushes *text* files. It cannot push binary files (images, fonts) and cannot create repos.
2. **The token connection** — a full-permission personal access token stored in the Secure Vault. It creates repos, pushes text *and* binaries, and administers repos.

Rule of thumb: text-only change → either door. Binary file or a new repo → the token door.

## The traps (each one cost real time once)

- **Check the repo EXISTS before building a permission theory.** A 404 usually means the repo was never created — a full repo-list search settles it in one step. Hours were once spent widening token scopes for a repo that simply didn't exist.
- **Token species and scope matter.** A fine-grained token only reaches the repos selected for it, and its Contents permission can be read-only even when the repo is visible. If a push fails with a permissions error, check the token's repository access and Contents setting before retrying. **Edit a token's scope, never Regenerate it** — regenerating changes the secret and breaks the stored connection until the new value is entered through the secure flow.
- **The rename trap.** GitHub redirects a renamed repo, but Netlify's link to it does not follow. Renaming a live site's repo without re-linking Netlify in the same motion silently stops that site from deploying. Cosmetic renames of live-site repos are not worth it.
- **Empty repos refuse git-database pushes.** A brand-new repo with zero commits needs one ordinary first commit before tree-based pushes work.
- **Archives and deletions need Carlos's word.** They are never part of a cleanup batch on an agent's own initiative.

## How a change goes live

Edit → push to the site's repo → Netlify notices, rebuilds, and the new version appears at the site's address. Then **verify on the live page** — a successful push is not proof the deploy took. Two gotchas from real deploys: pages may redirect to trailing-slash URLs, and built pages minify code, so check the served page for the *content*, not the exact source text.

---

*Source of truth: GitHub Account — What's What — CURRENT (Drive) and the GitHub section of the Access Map — CURRENT (Drive).*
