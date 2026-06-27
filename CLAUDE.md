# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

This is a curated awesome list, not an application codebase. `README.md` is the canonical public index; `website/` is its Docusaurus surface. **`AGENTS.md` is the full operating protocol** — scope rules, trust boundary, taxonomy slug tables, cross-surface sync, risk register, and protected areas live there. This file routes Claude to the right context per task and fixes the output format; it does not restate `AGENTS.md`. Where the two overlap, `AGENTS.md` wins.

## North Star

Preserve `README.md` as the canonical index and keep `website/docs/` in step with it. Curate selectively over accumulating. Keep entries technically useful, neutral, durable, and scannable. Help the maintainer decide fast and consistently. Do not broaden the repository beyond its stated scope.

## Resolver — load per task

Pull only what the task needs; do not preload everything.

| Task | Load |
|---|---|
| **PR review** | the diff · `AGENTS.md` · the affected `README.md` section · the matching `website/docs/` page · `CONTRIBUTING.md` checklist |
| **Issue triage** | the issue form · README scope · the three taxonomy docs · duplicate candidates in the target section |
| **Broken link** | the affected entry · search for a canonical replacement · then recommend replace or remove |
| **Taxonomy work** | `website/docs/workflows.md` · `domains.md` · `resource-types.md` (slug source of truth) |

## First-pass workflow

1. Read the diff or issue. 2. Check scope (`README.md` / `AGENTS.md`). 3. Check `CONTRIBUTING.md`. 4. Read existing entries in the target section. 5. Search for duplicates across both surfaces. 6. Verify the link where tools allow. 7. Inspect the resource enough to know what it is. 8. Decide the smallest useful action. 9. Produce a concise recommendation or edit.

## Stop conditions

Stop and ask the maintainer before:

- Editing any **protected area** (badges, Contents/TOC, contributor banners, sponsor blocks, `LICENSE`, `CODEOWNERS`, generated output, `specs/`, local-only files).
- Creating a **new taxonomy slug** — propose it in an issue instead.
- **Broad README restructuring** or section reordering.
- Accepting a resource whose **scientific-discovery relevance is unclear**.

Also stop on any `AGENTS.md` "Stop and ask" condition (taxonomy ambiguity, cross-surface drift, no canonical source, failing checks).

## Commands

Run from `website/` (Node ≥ 20). Do not run destructive or long-running commands unless asked; report results in one line.

```bash
cd website
npm install            # first time
npm run start          # local preview at http://localhost:3000/
npm run build          # production build — CI gate
npm run link-check     # validate markdown links (root + docs) — CI gate
npm run check-sidebar-order  # verify docs sidebar order — CI gate
```

Markdown lint, from repo root: `npx markdownlint-cli2 "**/*.md"`.

CI (`.github/workflows/ci.yml`) runs three jobs on any `**/*.md` or `website/**` change — **Build**, **Link check + sidebar order**, **Markdownlint** — and a change must pass all three. Config: `.markdown-link-check.json`, `.markdownlint-cli2.jsonc`.

## Architecture

- **`README.md`** — index. Plain format: `- [Name](url) - one sentence.` (hyphen, **no tags**), grouped by lifecycle, then domain, then meta.
- **`website/docs/*.md`** — tagged site. Canonical format: `- [Name](url) — one sentence. \`lifecycle:slug\` \`domain:slug\` \`type:slug\`` (em-dash, **three tags required**).
- **Two surfaces, one catalogue.** A resource usually touches the right `website/docs/` page and, where it fits, the matching `README.md` section. **Infer format from the file you edit; never cross the formats.**


## Maintainer process files

`CONTRIBUTING.md` (issue-first workflow, full checklist) · `.github/ISSUE_TEMPLATE/*` (submit-resource → `new-resource`; report-issue → `link-health`) · `pull_request_template.md` · `MAINTAINERS.md` · `.github/CODEOWNERS` (auto-routes review to @natnew).

## Description rules

Convert to concise, neutral language answering at least one of: what is it? what technical problem does it address? what category is it? why is it useful? Remove or neutralise: best, latest, most advanced, powerful, revolutionary, cutting-edge, game-changing, industry-leading, fastest, and unsupported performance, adoption, or pricing claims.

## Small safe fix rule

If a resource is clearly suitable and the issue is minor, make or recommend a maintainer edit rather than asking the contributor to revise. Safe fixes: tighten description, remove hype, fix punctuation, correct placement, swap a non-canonical URL for the canonical one, match bullet formatting, strip tracking parameters.

## Output templates

**PR review**

```
Decision: accept | maintainer edit | request changes | close | park
Reason: 1–3 bullets (scope · link · placement · duplicate · description)
Surface sync: README and website consistent? which changed?
Files touched: paths or "none"
Suggested comment: <short, warm, authoritative>
Uncertainty: <or "none">
```

**Issue triage**

```
Decision: draft entry | maintainer edit | request info | close (duplicate/scope) | park
Reason: 1–3 bullets
Proposed entry: (README and/or website, in the correct format)
Suggested comment: <short>
```

**Broken-link report**

```
Entry: [Name] in <file>
Status: broken | moved | archived
Canonical replacement: <url or "none found">
Recommendation: replace | remove
Note: <one line>
```

**Proposed README entry**

```
- [Name](https://canonical-url) - One neutral factual sentence.
```

**Proposed website entry (tagged)**

```
- [Name](https://canonical-url) — One neutral factual sentence. `lifecycle:slug` `domain:slug` `type:slug`
```

## Maintainer comment templates

- **Accept:** "Thank you — relevant, the link is canonical, and the placement works. I would accept this."
- **Maintainer edit:** "Thank you — I would accept with a small edit to tighten the description and keep the wording neutral."
- **Request changes:** "Thank you — this could fit, but I would ask for a little more context on why this is the canonical source and where it belongs."
- **Close (duplicate):** "Thank you — I would close as a duplicate; the resource already appears under [section]."
- **Close (scope):** "Thank you for sharing this. I would close it as outside the current scope of the list."
- **Park:** "Thank you — worth revisiting, but I would park it until the list has a clearer section for this category."


