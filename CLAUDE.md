# CLAUDE.md

Claude-specific operating layer for **awesome-ai-scientists**, a curated list of resources for building AI Scientist systems. There is no application code: the work is curating Markdown across two surfaces and keeping CI green. **`AGENTS.md` is the full protocol** (scope, trust boundary, quality bar, decision matrix, protected areas, comment style). This file does not restate it. Where the two overlap, `AGENTS.md` wins, with one exception: for entry format, the live files win (see below).

## Map

| Path | Role |
|---|---|
| `README.md` | Canonical public index, grouped by lifecycle → domain → meta sections. Also checked by `awesome-lint`. |
| `website/docs/workflows.md`, `domains.md` | The only site pages that hold tagged entries, under `### … {#slug}` headings. |
| `website/docs/workflows.md`, `domains.md`, `resource-types.md` | Source of truth for the taxonomy slugs. The slug tables in `AGENTS.md` and `CONTRIBUTING.md` copy them. |
| `website/docs/start-here.md` | Tagging convention: primary slug first, multi-value axes. |
| `website/src/`, `docusaurus.config.ts`, `sidebars.ts` | Site infrastructure. Doc order in `sidebars.ts` must match each doc's `sidebar_position`. |
| `website/scripts/` | `link-check.mjs` checks `README.md`, `CONTRIBUTING.md` and `website/docs/*.md`; `check-sidebar-order.mjs`. |
| `CONTRIBUTING.md`, `.github/ISSUE_TEMPLATE/*`, `pull_request_template.md` | Contributor workflow. Resource additions are issue-first. |
| `skills/`, `.agent/` | Maintainer tooling, not part of the catalogue. Ignore unless asked. `feature-spec` needs the local-only `specs/`. |

`specs/` is gitignored and usually absent. Docs that cite `specs/…` point to maintainer-local files. Do not create or edit it.

## Entry formats (the most common source of errors)

Match the neighbouring entries in the file you edit. Never cross formats.

- **README:** `- [Name](url) - One neutral sentence.` Hyphen separator, no tags.
- **Site (`workflows.md`, `domains.md`), as used by 58 of 59 live entries:**

  ```text
  - **[Name](url)** — One neutral sentence. *Tags: <code>lifecycle:slug</code> · <code>domain:slug</code> · <code>type:slug</code>*
  ```

`AGENTS.md`, `CONTRIBUTING.md` and the PR template show a simpler form, `` `lifecycle:…` `domain:…` `type:…` ``. Entries that copied it have drifted: IdeaGene-Bench in `workflows.md`, and Agon and "What's Missing in Autonomous Research?" in `README.md`, which carry em-dashes and tags. Flag this drift. Do not fix it outside the task you were given.

The three tags are required. Separate several slugs on one axis with commas, primary slug first, no spaces. The primary slug is the one matching the section the entry sits in. The same resource may appear in two site sections with its primary slug reordered (STORM is an example). That is intended, not a duplicate.

## Task routing

Load only what the task needs.

| Task | Read |
|---|---|
| Add or review a resource | The linked issue (additions need one), the target `README.md` section and its matching site section, `AGENTS.md` (scope, quality bar, placement, duplicates). |
| Issue triage | The issue form fields, the README scope, the three taxonomy pages, and duplicate candidates on both surfaces and in open issues and PRs. |
| Broken or outdated link | The entry on both surfaces. Find the canonical replacement, then recommend replace or remove. Check `.markdown-link-check.json` ignores before calling a link dead. |
| Taxonomy question | The three taxonomy pages. New slugs go to an issue with at least 3 candidate entries. Never add one inline. |
| Site or CI change | `website/`, `.github/workflows/`, and the relevant config. Keep the action pinning policy noted in `ci.yml`. |

Duplicate search should grep both surfaces by project or org name, not only by URL, because repositories get renamed. For large link sweeps or cross-surface audits, fan independent checks out to parallel subagents. For a single entry, work inline.

## Hard stops (ask the maintainer)

Ask the maintainer before any of the following:

- Editing a protected area listed in `AGENTS.md`: badges, the Contents block, banners, the sponsor block, `LICENSE`, `CODEOWNERS`, generated output, `specs/`, local-only files.
- Adding a new taxonomy slug or a new section.
- Reordering or restructuring `README.md`.
- Adding a resource whose scientific-discovery relevance or canonical source is unclear.
- Leaving README and site out of sync.
- Leaving a check failing when you cannot confidently fix it.

Any other `AGENTS.md` "Stop and ask" condition also applies.

## Verification

CI decides whether a change passes. Run the checks that match what you changed:

| Changed | Check | Where |
|---|---|---|
| Any `.md` | `npx markdownlint-cli2@0.17.2 "**/*.md"` (config: `.markdownlint-cli2.jsonc`) | repo root |
| `README.md` | `npx awesome-lint README.md` (the `awesome-lint.yml` workflow) | repo root |
| Links in the README, CONTRIBUTING or docs | `npm run link-check` | `website/` |
| `website/docs/` or `sidebars.ts` | `npm run check-sidebar-order`, then `npm run build` | `website/` |

- Pin markdownlint to the version CI uses. The unpinned latest release adds rule MD060, which flags existing tables that CI accepts.
- Run `npm ci` in `website/` first (Node ≥ 20). `node_modules` is not committed.
- `link-check` needs network access, is slow, and checks every target file. Run it once, after your edits.
- A link that returns 403 or 429, or is walled to bots, is not proof it is dead. Say so rather than removing it.
- Do not run `npm run start` or other long-running commands unless asked.
- Report each result in one line. If a check cannot run here (for example, no network), say so. Do not claim it passed.

## Completion

Make small, safe maintainer fixes yourself rather than asking contributors: tighten wording, remove hype, use the canonical URL, strip tracking parameters, fix punctuation or placement. Every answer ends with:

```text
Decision: accept | maintainer edit | request changes | close | park   (or: draft entry | request info for triage)
Reason: 1–3 bullets (scope · link · placement · duplicate · description)
Surface sync: README and site consistent? Which changed, and why only one if so
Files touched: paths, or "none"
Checks: which ran and their result, or why not run
Suggested comment: short, warm, decision-oriented (style: AGENTS.md)
Uncertainty: anything the maintainer should confirm, or "none"
```

For a broken link, use this format instead: `Entry · Status (broken/moved/archived) · Canonical replacement · Recommendation (replace/remove) · Note`.
