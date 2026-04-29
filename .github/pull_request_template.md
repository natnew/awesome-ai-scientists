<!--
Thanks for opening a pull request. Please fill in every section.
PRs that add resources must reference an accepted "Submit a resource" issue.
-->

## Summary

<!-- One or two sentences describing what this PR does. -->

## Linked issue

<!-- Required for resource additions. Use "Closes #NNN" or "Refs #NNN". -->
Closes #

## Type of change

- [ ] Resource addition (linked issue required)
- [ ] Resource fix (description, link, tags)
- [ ] Docs / site content
- [ ] Site infrastructure (build, CI, styling)
- [ ] Other

## Review checklist

- [ ] Linked to an accepted "Submit a resource" issue (`Closes #NNN`) — required for resource additions.
- [ ] All links resolve (`npm run link-check` passes locally).
- [ ] Every new or edited entry uses the canonical format: `- [Name](url) — one-line description. \`lifecycle:slug\` \`domain:slug\` \`type:slug\``.
- [ ] All three taxonomy tags are present and use slugs from `workflows.md`, `domains.md`, and `resource-types.md`. Multi-tag values are comma-separated with the **primary slug first**.
- [ ] Description is factual and neutral; no marketing language.
- [ ] No duplicate of an existing entry (searched the catalogue).
- [ ] `npm run build` succeeds in `website/`.

## Notes for reviewers

<!-- Optional: anything reviewers should pay attention to. -->
