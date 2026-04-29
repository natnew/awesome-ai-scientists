---
title: Browse by Workflow
description: Direct links to the main workflow and capability sections in the list.
sidebar_position: 2
---

import Link from '@docusaurus/Link';

Jump by scientific workflow stage or capability.

## Canonical lifecycle stages

These 6 slugs are the **lifecycle axis** used to tag every entry on the site, lifted directly from the project mission (`specs/mission.md`, kept local):

- **`literature-intelligence`** — search, summarization, citation graphs, knowledge extraction.
- **`hypothesis-generation`** — proposing novel, testable scientific claims.
- **`experiment-planning`** — protocols, simulations, study design, adaptive experimentation.
- **`tool-use-execution`** — code generation, lab automation, simulators, agent frameworks acting on the world.
- **`evaluation`** — benchmarks, reproducibility checks, result validation.
- **`scientific-communication`** — writing, figure generation, peer-review assistance, reproducible artifacts.

Some cards below are **capability tracks** (e.g., multi-agent systems, safety & governance) rather than lifecycle stages — they cut across multiple stages and are not part of the canonical lifecycle axis.

See [start-here](./start-here.md#how-entries-are-organized) for the full three-axis tagging convention.

## Browse the cards

<div className="docs-grid docs-grid--two">
  <Link className="doc-card" href="#literature-intelligence">
    <p className="eyebrow">Review</p>
    <h3>Literature review</h3>
    <p>Retrieval, synthesis, contradiction checks, metadata graphs, and QA.</p>
    <p><small>Tags: <code>lifecycle:literature-intelligence</code> · <code>domain:cross-domain</code> · <code>type:tool,framework</code></small></p>
  </Link>
  <Link className="doc-card" href="#hypothesis-generation">
    <p className="eyebrow">Ideation</p>
    <h3>Hypothesis generation</h3>
    <p>Novelty detection, idea generation, and structured research ideation.</p>
    <p><small>Tags: <code>lifecycle:hypothesis-generation</code> · <code>domain:cross-domain</code> · <code>type:agent-system,paper</code></small></p>
  </Link>
  <Link className="doc-card" href="#experiment-planning">
    <p className="eyebrow">Planning</p>
    <h3>Experiment planning</h3>
    <p>Optimization, adaptive design, and experiment selection.</p>
    <p><small>Tags: <code>lifecycle:experiment-planning</code> · <code>domain:cross-domain</code> · <code>type:framework,tool</code></small></p>
  </Link>
  <Link className="doc-card" href="#tool-use-execution">
    <p className="eyebrow">Execution</p>
    <h3>Tool use</h3>
    <p>Lab systems, APIs, cloud labs, and tooling that lets agents act.</p>
    <p><small>Tags: <code>lifecycle:tool-use-execution</code> · <code>domain:cross-domain</code> · <code>type:framework,tool,agent-system</code></small></p>
  </Link>
  <Link className="doc-card" href="https://github.com/natnew/awesome-ai-scientists#multi-agent-architectures-for-science">
    <p className="eyebrow">Agents</p>
    <h3>Multi-agent systems</h3>
    <p>Debate, coordination, specialist roles, and agent collaboration patterns.</p>
    <p><small>Capability track (cuts across lifecycle stages). Tags: <code>lifecycle:hypothesis-generation,tool-use-execution</code> · <code>domain:cross-domain</code> · <code>type:framework,agent-system</code></small></p>
  </Link>
  <Link className="doc-card" href="#evaluation">
    <p className="eyebrow">Evaluation</p>
    <h3>Benchmarks</h3>
    <p>Capability checks for reasoning, coding, and scientific tasks.</p>
    <p><small>Tags: <code>lifecycle:evaluation</code> · <code>domain:cross-domain</code> · <code>type:benchmark</code></small></p>
  </Link>
  <Link className="doc-card" href="#scientific-communication">
    <p className="eyebrow">Reporting</p>
    <h3>Communication</h3>
    <p>Manuscript generation, figures, writing, and research reporting tools.</p>
    <p><small>Tags: <code>lifecycle:scientific-communication</code> · <code>domain:cross-domain</code> · <code>type:tool,framework</code></small></p>
  </Link>
  <Link className="doc-card" href="https://github.com/natnew/awesome-ai-scientists#ethics-safety--responsible-ai-for-science">
    <p className="eyebrow">Safety</p>
    <h3>Safety & governance</h3>
    <p>Dual-use risk, evaluation, policy, and guardrail resources.</p>
    <p><small>Capability track (cuts across lifecycle stages). Tags: <code>lifecycle:evaluation,scientific-communication</code> · <code>domain:cross-domain</code> · <code>type:paper,blog-essay</code></small></p>
  </Link>
</div>

## Resources by lifecycle stage

Hand-picked entries grouped by canonical lifecycle slug. Every bullet carries the full three-axis tag set (`lifecycle:` · `domain:` · `type:`) locked in [Phase 2](./start-here.md#how-entries-are-organized). Anchors below match the lifecycle slugs verbatim so external links stay stable.

### Literature intelligence {#literature-intelligence}

Search, summarization, citation graphs, and structured knowledge extraction over the scholarly record. This is where most "AI scientist" projects start: turning the long tail of papers into a queryable substrate that downstream stages can reason over.

- **[Semantic Scholar Academic Graph API](https://www.semanticscholar.org/product/api)** — Open API over ~200M papers with citation context, embeddings, and TLDRs from Allen AI. *Tags: <code>lifecycle:literature-intelligence</code> · <code>domain:cross-domain</code> · <code>type:tool</code>*
- **[OpenAlex](https://openalex.org/)** — Fully open scholarly graph (works, authors, institutions, concepts) with a permissive API; a free replacement for Microsoft Academic Graph. *Tags: <code>lifecycle:literature-intelligence</code> · <code>domain:cross-domain</code> · <code>type:dataset,tool</code>*
- **[PaperQA2](https://github.com/Future-House/paper-qa)** — Retrieval-augmented QA agent over PDFs that produces grounded, citation-rich answers; reference implementation from FutureHouse. *Tags: <code>lifecycle:literature-intelligence</code> · <code>domain:cross-domain</code> · <code>type:framework,agent-system</code>*
- **[SPECTER2](https://github.com/allenai/SPECTER2)** — Scientific document embeddings from Allen AI for retrieval, recommendation, and citation prediction. *Tags: <code>lifecycle:literature-intelligence</code> · <code>domain:cross-domain</code> · <code>type:model</code>*
- **[STORM](https://github.com/stanford-oval/storm)** — Stanford OVAL system that drafts Wikipedia-style articles by retrieving and synthesizing sources end-to-end. *Tags: <code>lifecycle:literature-intelligence,scientific-communication</code> · <code>domain:cross-domain</code> · <code>type:agent-system,framework</code>*

### Hypothesis generation {#hypothesis-generation}

Proposing novel, testable scientific claims grounded in prior work. Resources here range from idea-generation agents to multi-agent debate systems that surface contradictions in the literature.

- **[The AI Scientist](https://github.com/SakanaAI/AI-Scientist)** — Sakana AI's end-to-end pipeline that ideates, runs, and writes up ML research papers; a useful reference for full-loop hypothesis systems. *Tags: <code>lifecycle:hypothesis-generation,tool-use-execution</code> · <code>domain:cross-domain</code> · <code>type:agent-system,paper</code>*
- **[ResearchAgent](https://arxiv.org/abs/2404.07738)** — Iterative LLM agent for research idea generation that critiques and refines hypotheses against retrieved literature. *Tags: <code>lifecycle:hypothesis-generation</code> · <code>domain:cross-domain</code> · <code>type:paper</code>*
- **[SciAgents](https://arxiv.org/abs/2409.05556)** — Multi-agent graph-reasoning framework (Buehler) for materials hypothesis generation across an ontological knowledge graph. *Tags: <code>lifecycle:hypothesis-generation</code> · <code>domain:materials-science</code> · <code>type:paper,agent-system</code>*
- **[Towards an AI co-scientist](https://research.google/blog/accelerating-scientific-breakthroughs-with-an-ai-co-scientist/)** — Google Research's multi-agent system that generates, debates, and ranks hypotheses for a target research goal. *Tags: <code>lifecycle:hypothesis-generation</code> · <code>domain:cross-domain</code> · <code>type:blog-essay,agent-system</code>*
- **[Coscientist](https://github.com/gomesgroup/coscientist)** — Boiko et al. autonomous agent that designs, plans, and executes chemical experiments; the Nature paper is a canonical hypothesis-to-execution case study. *Tags: <code>lifecycle:hypothesis-generation,tool-use-execution</code> · <code>domain:drug-discovery-chemistry</code> · <code>type:agent-system,paper</code>*

### Experiment planning {#experiment-planning}

Designing protocols, simulations, and adaptive study procedures. The dominant pattern here is sequential decision-making — Bayesian optimization, active learning, and multi-fidelity surrogates that pick the next experiment to run.

- **[BoTorch](https://botorch.org/)** — PyTorch-native Bayesian optimization library underpinning much of modern adaptive experimentation. *Tags: <code>lifecycle:experiment-planning</code> · <code>domain:cross-domain</code> · <code>type:framework</code>*
- **[Ax](https://ax.dev/)** — Adaptive Experimentation Platform from Meta; high-level API over BoTorch for managing real experiment campaigns. *Tags: <code>lifecycle:experiment-planning</code> · <code>domain:cross-domain</code> · <code>type:framework,tool</code>*
- **[Optuna](https://optuna.org/)** — Define-by-run hyperparameter and experiment optimization framework with pruning and distributed trials. *Tags: <code>lifecycle:experiment-planning</code> · <code>domain:cross-domain</code> · <code>type:framework</code>*
- **[Emukit](https://github.com/EmuKit/emukit)** — Toolkit for emulation, multi-fidelity modelling, and experimental design over expensive simulators. *Tags: <code>lifecycle:experiment-planning</code> · <code>domain:cross-domain</code> · <code>type:framework</code>*
- **[BayBE](https://github.com/emdgroup/baybe)** — Merck's Bayesian Back End, a domain-aware experiment planner aimed at chemistry and formulations campaigns. *Tags: <code>lifecycle:experiment-planning</code> · <code>domain:drug-discovery-chemistry</code> · <code>type:framework,tool</code>*

### Tool use & execution {#tool-use-execution}

Code generation, lab automation, simulators, and agent frameworks that let a system *act* — calling tools, running code, or driving instruments — rather than just reasoning in text.

- **[ChemCrow](https://github.com/ur-whitelab/chemcrow-public)** — LLM agent equipped with 18 expert chemistry tools (synthesis, safety, search) for autonomous chemical reasoning. *Tags: <code>lifecycle:tool-use-execution</code> · <code>domain:drug-discovery-chemistry</code> · <code>type:agent-system,framework</code>*
- **[LangChain](https://github.com/langchain-ai/langchain)** — Widely used framework for composing LLMs with tools, retrievers, and workflows; common substrate for scientific agents. *Tags: <code>lifecycle:tool-use-execution</code> · <code>domain:cross-domain</code> · <code>type:framework</code>*
- **[AutoGen](https://github.com/microsoft/autogen)** — Microsoft framework for multi-agent conversation patterns and code execution; used in several published scientific agent setups. *Tags: <code>lifecycle:tool-use-execution</code> · <code>domain:cross-domain</code> · <code>type:framework</code>*
- **[smolagents](https://github.com/huggingface/smolagents)** — Hugging Face's minimalist code-acting agent library; agents emit Python that is executed in a sandbox. *Tags: <code>lifecycle:tool-use-execution</code> · <code>domain:cross-domain</code> · <code>type:framework</code>*
- **[Opentrons](https://github.com/Opentrons/opentrons)** — Open-source software stack for OT-2 / Flex liquid-handling robots; the canonical "agent talks to a wet lab" surface. *Tags: <code>lifecycle:tool-use-execution</code> · <code>domain:genomics-biology</code> · <code>type:framework,tool</code>*

### Evaluation {#evaluation}

Benchmarks, reproducibility checks, and result validation. Without these, "AI scientist" claims do not survive contact with peer review — this stage is what makes a system credible.

- **[SWE-bench](https://www.swebench.com/)** — Benchmark of real GitHub issues that tests whether agents can produce repository-level patches; the de-facto bar for code-acting agents. *Tags: <code>lifecycle:evaluation</code> · <code>domain:cross-domain</code> · <code>type:benchmark,dataset</code>*
- **[GPQA](https://github.com/idavidrein/gpqa)** — Graduate-level Google-proof Q&A in biology, physics, and chemistry; a reasoning benchmark widely cited in frontier model reports. *Tags: <code>lifecycle:evaluation</code> · <code>domain:cross-domain</code> · <code>type:benchmark,dataset</code>*
- **[MLE-bench](https://github.com/openai/mle-bench)** — OpenAI benchmark of 75 Kaggle competitions for measuring whether agents can run end-to-end ML engineering work. *Tags: <code>lifecycle:evaluation</code> · <code>domain:cross-domain</code> · <code>type:benchmark</code>*
- **[LAB-Bench](https://github.com/Future-House/LAB-Bench)** — FutureHouse benchmark for biology research tasks (literature, figures, protocols, DBQA, cloning); aimed squarely at scientific agents. *Tags: <code>lifecycle:evaluation</code> · <code>domain:genomics-biology</code> · <code>type:benchmark,dataset</code>*
- **[ScienceQA](https://scienceqa.github.io/)** — Multimodal multiple-choice science benchmark with chain-of-thought explanations across grade-school science domains. *Tags: <code>lifecycle:evaluation</code> · <code>domain:cross-domain</code> · <code>type:benchmark,dataset</code>*

### Scientific communication {#scientific-communication}

Manuscript drafting, figure generation, peer-review assistance, and reproducible artifacts. The output stage of the loop — how findings get turned into something other scientists can read, run, and review.

- **[Quarto](https://quarto.org/)** — Open scientific publishing system that renders Markdown / Jupyter / R notebooks to articles, sites, slides, and books from one source. *Tags: <code>lifecycle:scientific-communication</code> · <code>domain:cross-domain</code> · <code>type:framework,tool</code>*
- **[Manubot](https://manubot.org/)** — Tooling for writing scholarly manuscripts collaboratively over Git, with automatic citation rendering and reproducible builds. *Tags: <code>lifecycle:scientific-communication</code> · <code>domain:cross-domain</code> · <code>type:framework,tool</code>*
- **[STORM](https://github.com/stanford-oval/storm)** — Stanford system for grounded, citation-rich long-form article generation; useful as a reference implementation for AI-assisted writing. *Tags: <code>lifecycle:scientific-communication,literature-intelligence</code> · <code>domain:cross-domain</code> · <code>type:agent-system,framework</code>*
- **[OpenReview](https://openreview.net/)** — Open peer-review platform powering NeurIPS, ICLR, COLM, etc.; the surface where automated reviewer-assist tooling is increasingly evaluated. *Tags: <code>lifecycle:scientific-communication,evaluation</code> · <code>domain:cross-domain</code> · <code>type:tool,community-event</code>*
- **[Reviewer2](https://arxiv.org/abs/2402.10886)** — Two-stage paper review generation pipeline; representative of the emerging body of work on AI-assisted peer review. *Tags: <code>lifecycle:scientific-communication,evaluation</code> · <code>domain:cross-domain</code> · <code>type:paper</code>*
