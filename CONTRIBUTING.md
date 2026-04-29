# Contributing

Thank you for contributing to **Awesome AI Scientists** — a curated catalogue of resources for building AI systems that assist scientific discovery.

This guide covers what belongs here, the canonical entry format, how to submit a resource, and the review checklist used at merge time.

## What belongs here

Resources should directly support building, evaluating, or governing "AI Scientist" systems. The catalogue is **curated, not exhaustive** — quality over volume. In scope:

- Surveys, foundational papers, and end-to-end systems.
- Agent architectures, tool-use frameworks, and lab-automation platforms.
- Benchmarks, datasets, and evaluation harnesses.
- Domain-specific resources (chemistry, materials, biology, climate, physics & maths).
- Reproducibility, safety, and governance work for scientific AI.

Out of scope: generic ML/LLM tooling without a scientific-discovery angle, vendor marketing pages, and benchmark leaderboard entries we don't operate.

## Entry format

Every catalogue entry uses this exact line format:

```
- [Name](url) — one-line description. `lifecycle:slug` `domain:slug` `type:slug`
```

Rules:

- **Em-dash separator** (`—`) between description and tags.
- **One sentence** of factual description, no marketing.
- **All three taxonomy tags are required**, each in backticks. Combine multiple slugs on one axis with commas (no spaces): `lifecycle:tool-use-execution,evaluation`.
- Slugs come from the three canonical axes — see [Taxonomy reference](#taxonomy-reference) below.

### Worked example

A real entry from [website/docs/domains.md](website/docs/domains.md):

```
- [DiffDock](https://github.com/gcorso/DiffDock) — Diffusion-generative model for blind protein–ligand docking; a strong baseline for structure-based drug discovery agents. `lifecycle:tool-use-execution,evaluation` `domain:drug-discovery-chemistry` `type:model,paper`
```

This entry: links to the canonical repo, describes what it is in one sentence, and tags two lifecycle stages, one domain, and two resource types.

## How to submit a resource

The catalogue uses an **issue-first workflow**. PRs that add resources without a linked, accepted issue will be asked to open one.

1. **Open an issue** using the [Submit a resource](.github/ISSUE_TEMPLATE/submit-resource.yml) form. Fill every field — name, URL, description, lifecycle, domain, type, and rationale.
2. **Wait for triage.** A maintainer will accept, request changes, or close with a reason. See [MAINTAINERS.md](MAINTAINERS.md) for the review cadence.
3. **Open a pull request** referencing the accepted issue (`Closes #NNN`). Add the entry to the most appropriate page under `website/docs/` and, if relevant, the matching section of `README.md`. Use the canonical entry format above.
4. **Pass the checks.** `npm run build` and `npm run link-check` must pass locally; CI runs them again on PR.

For broken links or outdated entries, use the [Report a broken link or outdated entry](.github/ISSUE_TEMPLATE/report-issue.yml) form instead.

## Review checklist

Self-check before opening the PR; reviewers will use the same list.

- [ ] Linked to an accepted "Submit a resource" issue.
- [ ] Entry uses the canonical format with em-dash and three backticked tags.
- [ ] All three taxonomy tags are present and use valid slugs.
- [ ] Link resolves and points to a primary, stable source.
- [ ] Description is factual and neutral (no "amazing", "powerful", "cutting-edge").
- [ ] No duplicate of an existing entry; if related, the existing entry is improved instead.
- [ ] Placement matches the entry's primary lifecycle / domain / type.
- [ ] `npm run build` and `npm run link-check` pass locally.

## Taxonomy reference

The site tags every entry on three independent axes. Use the canonical slugs verbatim.

| Axis | Slugs | Source of truth |
|---|---|---|
| **Lifecycle** (6) | `literature-intelligence`, `hypothesis-generation`, `experiment-planning`, `tool-use-execution`, `evaluation`, `scientific-communication` | [website/docs/workflows.md](website/docs/workflows.md) |
| **Domain** (6) | `drug-discovery-chemistry`, `materials-science`, `genomics-biology`, `climate-earth-sciences`, `physics-mathematics`, `cross-domain` | [website/docs/domains.md](website/docs/domains.md) |
| **Type** (10) | `paper`, `dataset`, `framework`, `agent-system`, `benchmark`, `tool`, `tutorial-course`, `community-event`, `blog-essay`, `model` | [website/docs/resource-types.md](website/docs/resource-types.md) |

If an entry truly does not fit any existing slug, open an issue proposing a new one with at least three candidate entries that would use it.

## Local development

```bash
cd website
npm install
npm run start         # local preview at http://localhost:3000/
npm run build         # production build
npm run link-check    # check all markdown links (root + docs)
```

## Proposing a new section

If you need a new section (not a new tag), include in your issue:

- The gap it fills.
- Why it cannot fit an existing section.
- At least three high-quality entries you plan to add.

## See also

- [README.md](README.md) — catalogue entry point.
- [MAINTAINERS.md](MAINTAINERS.md) — current maintainers, review cadence, how to become one.
- [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) — expected behaviour in issues, PRs, and discussions.
