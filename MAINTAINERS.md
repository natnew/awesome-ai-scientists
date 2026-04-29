# Maintainers

This file lists who maintains **awesome-ai-scientists**, what maintainers do, and how to become one.

## Current maintainers

- [@natnew](https://github.com/natnew) — repository owner.

All pull requests are auto-routed to the listed maintainers via [`.github/CODEOWNERS`](.github/CODEOWNERS).

## What maintainers do

- **Triage** new issues opened with the `new-resource` and `link-health` labels.
- **Review** pull requests against the [review checklist](CONTRIBUTING.md#review-checklist) — link health, canonical entry format, three-axis tagging, neutral tone, no duplicates.
- **Merge** PRs that pass the checklist and CI.
- **Maintain** the canonical taxonomy in `website/docs/workflows.md`, `domains.md`, and `resource-types.md`.

## Review cadence

| Activity | Cadence | Target |
|---|---|---|
| New-resource triage | Weekly | First response within 14 days of issue open. |
| PR review | Weekly | First response within 14 days; merge or request changes within 21. |
| Link-check sweep | Monthly | `npm run link-check` over the full repo; open `link-health` issues for breakage. |
| Roadmap review | Per release | Update `specs/roadmap.md` checkboxes as phases ship. |

If you have not heard back within these targets, comment `@natnew` on the issue or PR.

## How to become a maintainer

There is no formal application. Sustained, high-quality contributions are the path:

1. Land at least 3–5 accepted resource submissions or fixes that pass review without rework.
2. Help triage open issues — confirm duplicates, validate links, suggest tags.
3. A current maintainer will open an invitation issue. On accept, your handle is added to the **Current maintainers** list above and to `.github/CODEOWNERS`.

Maintainers may step down at any time by opening a PR removing their handle from this file and `CODEOWNERS`.

## Deferred / future

These are tracked for **Phase 11 — Community Loop** in `specs/roadmap.md` and are not part of the current maintainer workflow:

- **GitHub Discussions categories** for proposals and questions.
- **Resource of the Week** label and rotation process.
- **Call-for-contributions** posts on a regular cadence.

## See also

- [CONTRIBUTING.md](CONTRIBUTING.md) — entry format, submission workflow, review checklist.
- [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) — expected behaviour.
- [.github/CODEOWNERS](.github/CODEOWNERS) — auto-review routing.
