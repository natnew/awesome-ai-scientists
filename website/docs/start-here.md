---
title: Start Here
description: Entry points for new readers, builders, and researchers.
sidebar_position: 1
---

import Link from '@docusaurus/Link';

Pick the closest path and move into the full README from there.

## How entries are organized

Every resource on the site is classified along **three independent axes**:

- **Lifecycle stage** — where it fits in the discovery loop. See [workflows](./workflows.md) for the 6 canonical stages (e.g., `literature-intelligence`, `evaluation`).
- **Domain** — the scientific field it targets. See [domains](./domains.md) for the 5 canonical domains plus `cross-domain`.
- **Resource type** — the kind of artefact it is. See [resource-types](./resource-types.md) for the 10 canonical types (e.g., `paper`, `framework`, `benchmark`).

Axes are independent and filterable: a resource may carry multiple values per axis when appropriate. Tags are written inline in the form:

> **AlphaFold 3** — protein structure prediction across the proteome.
> Tags: `lifecycle:experiment-planning,evaluation` · `domain:genomics-biology` · `type:model,paper`

Maintainers: the rationale behind this taxonomy lives in the local `specs/2026-04-29-information-architecture/` folder (gitignored).

## Pick your path

<div className="docs-grid docs-grid--three">
  <div className="doc-card">
    <p className="eyebrow">New readers</p>
    <h3>New to AI Scientist systems</h3>
    <p>Get the landscape first, then scan the standout entries.</p>
    <p><Link href="https://github.com/natnew/awesome-ai-scientists#foundational-papers--systems">Open foundational systems</Link></p>
    <p><Link href="https://github.com/natnew/awesome-ai-scientists#surveys--overviews">Open surveys & overviews</Link></p>
    <p><Link to="/docs/highlights">Open highlights</Link></p>
  </div>
  <div className="doc-card">
    <p className="eyebrow">Builders</p>
    <h3>Building agent systems</h3>
    <p>Start with the implementation surfaces, then fill in the workflow gaps.</p>
    <p><Link href="https://github.com/natnew/awesome-ai-scientists#agent-frameworks-general-purpose">Open frameworks</Link></p>
    <p><Link href="https://github.com/natnew/awesome-ai-scientists#tool-use--lab-automation">Open tool use</Link></p>
    <p><Link href="https://github.com/natnew/awesome-ai-scientists#hugging-face-models--resources">Open models</Link></p>
  </div>
  <div className="doc-card">
    <p className="eyebrow">Researchers</p>
    <h3>Evaluating or extending systems</h3>
    <p>Start with benchmarks and datasets, then drill into the relevant domain track.</p>
    <p><Link href="https://github.com/natnew/awesome-ai-scientists#benchmarks--evaluation">Open benchmarks</Link></p>
    <p><Link href="https://github.com/natnew/awesome-ai-scientists#datasets-for-scientific-ai">Open datasets</Link></p>
    <p><Link to="/docs/domains">Open domain tracks</Link></p>
  </div>
</div>