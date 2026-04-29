---
title: Browse by Resource Type
description: Direct links to the main resource types in the list.
---

import Link from '@docusaurus/Link';

Jump by the kind of resource you want to open.

## Canonical resource types

These 10 slugs are the **type axis** used to tag every entry on the site. Combine with a `lifecycle:` slug from [workflows](./workflows.md) and a `domain:` slug from [domains](./domains.md) to fully classify a resource.

- **`paper`** — peer-reviewed papers, preprints, and technical reports.
- **`dataset`** — training, evaluation, or reference datasets.
- **`framework`** — libraries and SDKs you build on top of.
- **`agent-system`** — end-to-end agents or scientific systems shipped as products or projects.
- **`benchmark`** — leaderboards and capability evaluations.
- **`tool`** — narrowly scoped utilities, CLIs, plugins, and small services.
- **`tutorial-course`** — guided learning material, courses, walkthroughs.
- **`community-event`** — conferences, workshops, recurring meetups.
- **`blog-essay`** — long-form posts, essays, and meta-resources (including curated lists).
- **`model`** — released checkpoints and weights.

See [start-here](./start-here.md#how-entries-are-organized) for the full three-axis tagging convention.

## Browse the cards

<div className="docs-grid docs-grid--two">
  <Link className="doc-card" href="https://github.com/natnew/awesome-ai-scientists#foundational-papers--systems">
    <p className="eyebrow">Papers</p>
    <h3>Foundational systems</h3>
    <p>Flagship systems, core papers, and end-to-end project entries.</p>
    <p><small>Tags: <code>lifecycle:tool-use-execution,evaluation</code> · <code>domain:cross-domain</code> · <code>type:agent-system,paper</code></small></p>
  </Link>
  <Link className="doc-card" href="https://github.com/natnew/awesome-ai-scientists#surveys--overviews">
    <p className="eyebrow">Papers</p>
    <h3>Surveys & overviews</h3>
    <p>Broad reviews, taxonomies, and field-level framing.</p>
    <p><small>Tags: <code>lifecycle:literature-intelligence</code> · <code>domain:cross-domain</code> · <code>type:paper</code></small></p>
  </Link>
  <Link className="doc-card" href="https://github.com/natnew/awesome-ai-scientists#literature-intelligence--knowledge-extraction">
    <p className="eyebrow">Tools</p>
    <h3>Literature tools</h3>
    <p>Search, retrieval, metadata APIs, and scientific language models.</p>
    <p><small>Tags: <code>lifecycle:literature-intelligence</code> · <code>domain:cross-domain</code> · <code>type:tool</code></small></p>
  </Link>
  <Link className="doc-card" href="https://github.com/natnew/awesome-ai-scientists#experiment-planning--design">
    <p className="eyebrow">Tools</p>
    <h3>Planning tools</h3>
    <p>Bayesian optimization and experiment-design tooling.</p>
    <p><small>Tags: <code>lifecycle:experiment-planning</code> · <code>domain:cross-domain</code> · <code>type:tool,framework</code></small></p>
  </Link>
  <Link className="doc-card" href="https://github.com/natnew/awesome-ai-scientists#tool-use--lab-automation">
    <p className="eyebrow">Tools</p>
    <h3>Automation tools</h3>
    <p>Tool-use systems, lab platforms, and scientific APIs.</p>
    <p><small>Tags: <code>lifecycle:tool-use-execution</code> · <code>domain:cross-domain</code> · <code>type:tool,framework</code></small></p>
  </Link>
  <Link className="doc-card" href="https://github.com/natnew/awesome-ai-scientists#benchmarks--evaluation">
    <p className="eyebrow">Benchmarks</p>
    <h3>Evaluation suites</h3>
    <p>Benchmarks for scientific agents, coding, and reasoning.</p>
    <p><small>Tags: <code>lifecycle:evaluation</code> · <code>domain:cross-domain</code> · <code>type:benchmark</code></small></p>
  </Link>
  <Link className="doc-card" href="https://github.com/natnew/awesome-ai-scientists#datasets-for-scientific-ai">
    <p className="eyebrow">Datasets</p>
    <h3>Scientific datasets</h3>
    <p>Compact dataset table with core evaluation and training assets.</p>
    <p><small>Tags: <code>lifecycle:evaluation,experiment-planning</code> · <code>domain:cross-domain</code> · <code>type:dataset</code></small></p>
  </Link>
  <Link className="doc-card" href="https://github.com/natnew/awesome-ai-scientists#hugging-face-models--resources">
    <p className="eyebrow">Models</p>
    <h3>Models & checkpoints</h3>
    <p>Model entries and Hugging Face paths across scientific domains.</p>
    <p><small>Tags: <code>lifecycle:tool-use-execution</code> · <code>domain:cross-domain</code> · <code>type:model</code></small></p>
  </Link>
  <Link className="doc-card" href="https://github.com/natnew/awesome-ai-scientists#agent-frameworks-general-purpose">
    <p className="eyebrow">Frameworks</p>
    <h3>Agent frameworks</h3>
    <p>General-purpose orchestration tools used to build scientific agents.</p>
    <p><small>Tags: <code>lifecycle:tool-use-execution</code> · <code>domain:cross-domain</code> · <code>type:framework</code></small></p>
  </Link>
  <Link className="doc-card" href="https://github.com/natnew/awesome-ai-scientists#meta-resources--awesome-lists">
    <p className="eyebrow">Meta</p>
    <h3>Meta-resources</h3>
    <p>Adjacent awesome lists and broader discovery hubs.</p>
    <p><small>Tags: <code>lifecycle:literature-intelligence</code> · <code>domain:cross-domain</code> · <code>type:blog-essay</code></small></p>
  </Link>
</div>