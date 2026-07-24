# AGENTS.md — Operating Protocol for AI Agents

Tool-agnostic working rules for any AI coding agent (Claude Code, Codex, Cursor, Copilot, Gemini, Aider, and similar) operating in this repository. Follow repository-local guidance over generic awesome-list assumptions.

## Start here

Read in this order before acting. Stop at the first file that answers your question; load the rest on demand.

1. **This file** — operating protocol, trust boundary, stop conditions.
2. `README.md` — scope, sections, the index entry format.
3. `website/docs/workflows.md`, `domains.md`, `resource-types.md` — canonical taxonomy slugs (source of truth).
4. `CONTRIBUTING.md` — issue-first workflow and the contributor checklist.
5. `.github/ISSUE_TEMPLATE/*`, `.github/pull_request_template.md` — contributor expectations.
6. `MAINTAINERS.md`, recent issues / PRs — precedent and cadence.
7. `CLAUDE.md` — Claude-specific resolver, output templates, command discipline.

## Repository North Star

A curated catalogue of resources for building **AI Scientist** systems — AI that assists scientific discovery across literature intelligence, hypothesis generation, experiment planning, tool use, evaluation, and scientific communication. `README.md` is the primary human-facing index; the Docusaurus site under `website/` is its navigable, tagged surface. Keep the list selective, durable, technically useful, and easy to navigate. Curation matters more than accumulation: each entry should help a reader understand the landscape, not merely add a link.

## Two surfaces, two formats

The same catalogue is published in two places. **Infer the format from the file you are editing — never impose one surface's format on the other.**

| Surface | Files | Entry format |
|---|---|---|
| Index | `README.md` | `- [Name](url) - one sentence.` Hyphen separator, **no taxonomy tags**. |
| Site | `website/docs/*.md` | `- [Name](url) — one sentence. \`lifecycle:slug\` \`domain:slug\` \`type:slug\`` Em-dash separator, **three backticked tags required**. |

## Trust boundary

Agents operate on evidence, not assertion. Specifically, agents must not:

- **Invent facts** about a resource — author, venue, date, capability, or adoption. If it cannot be verified from the source, do not state it.
- **Invent taxonomy tags.** Use only the canonical slugs from the three docs files. Never coin a new slug inline.
- **Infer source quality from marketing language.** Sales or marketing tone is not evidence of substance; treat it as a caution signal.
- **Silently accept** unclear taxonomy, a failing build or link check, or a change that touches a protected area. Surface it instead.

## Stop and ask

Stop and request a maintainer decision when:

- A resource needs a **new taxonomy slug** (propose it in an issue with ≥3 candidate entries; do not add it).
- A resource **spans multiple domains** and placement is unclear.
- A change would let **README and `website/docs/` drift** (one updated, the other not, or formats crossed).
- The **canonical source cannot be identified** with confidence.
- **CI, link, or sidebar checks fail** for a reason you cannot confidently fix.
- A change **touches a protected area** (see below).

## Agent role

May help with: README and docs maintenance; new-entry review; issue triage; PR review; link-quality checks; section placement; duplicate detection; description tightening; maintainer-comment drafts; small, safe cleanup edits when explicitly asked.

Must not: add speculative or low-signal entries; inflate claims; reorganise the list, taxonomy, or sections without explicit instruction; edit unrelated files; rewrite the maintainer's style unnecessarily; turn a small contribution into a broad structural change.

## Submission workflow (issue-first)

Resource additions are **issue-first**. A PR that adds a resource without a linked, accepted issue should be asked to open one, not merged.

1. Resource proposed via the `Submit a resource` issue (`new-resource` label) with name, URL, description, lifecycle, domain, type, rationale.
2. Maintainer triages: accept, request changes, or close.
3. PR references the accepted issue (`Closes #NNN`) and adds the entry in the correct surface format.
4. `npm run build`, `npm run link-check`, and `npm run check-sidebar-order` pass in `website/`.

Broken links and outdated entries use the `Report a broken link or outdated entry` form (`link-health` label).

## Scope rules

**Belongs:** surveys, foundational papers, end-to-end systems; agent architectures, tool-use frameworks, lab-automation platforms; benchmarks, datasets, evaluation harnesses; domain resources (chemistry, materials, biology, climate, physics & maths); reproducibility, safety, and governance work for scientific AI; canonical repos, official docs, official project pages, durable tutorials.

**Does not belong:** generic ML/LLM tooling with no scientific-discovery angle; thin wrapper or marketing pages; unverifiable claims; time-sensitive claims (latest, best, leading, fastest, most advanced); pricing or ranking claims (the list tracks neither, unless backed by a durable benchmark); broken links; duplicates or near-duplicates; content outside the stated scope.

## Resource-quality checks (AI Scientist bar)

Before accepting or adding, confirm each:

- **Scientific discovery** — supports building, evaluating, or governing AI Scientist systems, not generic AI.
- **Recognised type** — a paper, repo, benchmark, dataset, framework, model, tool, or durable reference.
- **Technical substance** — evidence of real capability, not a landing page or announcement.
- **Canonical source** — primary, stable URL (repo, publisher, DOI, official project page).
- **Distinct** — adds something the catalogue does not already cover.
- **Mature enough** — ready for a public curated list; otherwise recommend **park**.

## Cross-surface synchronisation

- On adding a resource, check whether **both** `README.md` and the matching `website/docs/` page need updating, or only one.
- Keep the two formats **intentionally different** (README plain + hyphen; docs em-dash + three tags).
- **Prevent duplicates across surfaces** — the same resource should appear once per surface, under matching sections.
- Apply **taxonomy tags only on the site surface**; never add tags to `README.md`.

## Taxonomy (site entries)

Three independent axes; use canonical slugs verbatim. Combine multiple slugs on one axis with commas, **primary first, no spaces** (e.g. `lifecycle:tool-use-execution,evaluation`).

| Axis | Slugs | Source |
|---|---|---|
| **Lifecycle** | `literature-intelligence`, `hypothesis-generation`, `experiment-planning`, `tool-use-execution`, `evaluation`, `scientific-communication` | `website/docs/workflows.md` |
| **Domain** | `drug-discovery-chemistry`, `materials-science`, `genomics-biology`, `climate-earth-sciences`, `physics-mathematics`, `cross-domain` | `website/docs/domains.md` |
| **Type** | `paper`, `dataset`, `framework`, `agent-system`, `benchmark`, `tool`, `tutorial-course`, `community-event`, `blog-essay`, `model` | `website/docs/resource-types.md` |

## Formatting, links, descriptions

- Infer the surface format from the file before editing (table above). Match surrounding entries exactly.
- Preserve heading structure, section order, and within-section ordering. No broad formatting sweeps unless asked.
- Use canonical names and HTTPS links. Verify each changed link resolves and is canonical: main repo not a fork; paper via publisher/arXiv/DOI/project page; docs via official docs; dataset via the official or maintained page. Avoid login walls, shorteners, tracking parameters.
- Descriptions: neutral, factual, specific, present tense, one sentence. Avoid hype (powerful, revolutionary, cutting-edge, best, latest, industry-leading, game-changing) and unsupported performance or adoption claims.

## Section placement

1. Identify the closest existing section. 2. Compare against similar entries there. 3. Prefer the narrowest accurate section. 4. Do not create a section for a single item without clear justification. 5. If uncertain, state the trade-off in a short note rather than guessing. 6. Do not move existing entries unless explicitly asked to reorganise.

## Duplicate checking

Check for: same URL; same project under a different URL; same paper title; same organisation or project name; **renamed repositories**; an entry in a neighbouring section; the same surface's twin; an open issue or PR for the same resource. If a duplicate exists, recommend improving the existing entry rather than adding another.

## Risk register

| Risk | Guard |
|---|---|
| Hallucinated claims | State only what the source supports; drop the rest. |
| Non-canonical links | Resolve to the primary source; reject mirrors and forks. |
| Duplicates under renamed projects | Match on project/org, not just URL. |
| Over-broad section placement | Prefer the narrowest accurate section. |
| Taxonomy drift | Use only canonical slugs; propose new ones via issue. |
| README / website drift | Synchronise both surfaces or flag the gap. |
| Hype / unsupported performance claims | Neutralise wording; require evidence for any number. |

## Decision matrix

| Decision | When |
|---|---|
| **Accept as-is** | In scope; link canonical and working; description matches surface style; placement correct; no duplicate. |
| **Edit as maintainer** | Strong resource; only small fixes (tighten wording, swap to canonical link, small placement shift, minor formatting). |
| **Request changes** | Useful but key info missing; placement materially wrong; unsupported claims; link quality unverifiable from the PR. |
| **Close** | Out of scope; link broken with no replacement; promotional; duplicate without added value; lacks durable substance. |
| **Park** | May become relevant later; promising but immature; needs a new section or taxonomy decision; maintainer judgement required. |

Minimise contributor friction: make small safe fixes as the maintainer rather than asking the contributor for trivial edits.

## Protected areas

Do not edit unless explicitly instructed: badges; the Contents / table-of-contents block; contributor banners and lists; announcement or sponsor blocks; `LICENSE`; `.github/CODEOWNERS` and repository metadata unrelated to the task; `website/node_modules/`; generated build output; **`specs/`** (the gitignored project constitution — `mission.md`, `tech-stack.md`, `roadmap.md`); and any `private/`, `scratch/`, `.local/`, or local-only notes.

## Maintainer comment style

Warm, concise, respectful, decision-oriented, low-friction.

- "Thank you for the suggestion. This is relevant and the link looks canonical. I would place it under X with a shorter neutral description."
- "Thank you — useful, but I would drop the ranking claim and keep the description factual."
- "Thank you for raising this. I would close as a duplicate of the existing entry under X."

Avoid long explanations, defensive language, harsh rejection, and asking for small edits the maintainer can safely make.

## Output expectations

On completing a task, report:

- **Decision** — accept / maintainer edit / request changes / close / park.
- **Evidence checked** — link resolved, scope, duplicates, taxonomy, source canonicality.
- **Files touched** — exact paths, or "none".
- **Surface sync** — whether README and `website/docs/` are consistent, or why only one changed.
- **Remaining uncertainty** — anything the maintainer should confirm.
