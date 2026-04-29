---
title: Browse by Domain
description: Domain-specific sections in the Awesome AI Scientists list.
sidebar_position: 3
---

import Link from '@docusaurus/Link';

Jump straight to the domain tracks in the README.

## Canonical domains

These 6 slugs are the **domain axis** used to tag every entry on the site. Use `cross-domain` for general-purpose resources that don't target a single field.

- **`drug-discovery-chemistry`** — cheminformatics, retrosynthesis, docking, chemistry agents.
- **`materials-science`** — interatomic potentials, materials APIs, discovery benchmarks.
- **`genomics-biology`** — protein and genomic foundation models, single-cell tooling, wet-lab automation.
- **`climate-earth-sciences`** — weather and climate models, earth observation, environmental data.
- **`physics-mathematics`** — symbolic regression, theorem proving, scientific ML toolchains.
- **`cross-domain`** — general-purpose entries (frameworks, surveys, foundational systems) that span fields.

See [start-here](./start-here.md#how-entries-are-organized) for the full three-axis tagging convention.

## Browse the cards

<div className="docs-grid docs-grid--two">
  <Link className="doc-card" href="#drug-discovery-chemistry">
    <p className="eyebrow">Domain</p>
    <h3>Drug discovery & chemistry</h3>
    <p>Cheminformatics, docking, retrosynthesis, chemistry agents, and platforms.</p>
    <p><small>Tags: <code>lifecycle:experiment-planning,tool-use-execution</code> · <code>domain:drug-discovery-chemistry</code> · <code>type:framework,agent-system,model</code></small></p>
  </Link>
  <Link className="doc-card" href="#materials-science">
    <p className="eyebrow">Domain</p>
    <h3>Materials science</h3>
    <p>Potentials, materials APIs, discovery benchmarks, and materials NLP.</p>
    <p><small>Tags: <code>lifecycle:experiment-planning,evaluation</code> · <code>domain:materials-science</code> · <code>type:framework,dataset,benchmark</code></small></p>
  </Link>
  <Link className="doc-card" href="#genomics-biology">
    <p className="eyebrow">Domain</p>
    <h3>Genomics & biology</h3>
    <p>Protein models, genomic foundation models, and single-cell tooling.</p>
    <p><small>Tags: <code>lifecycle:tool-use-execution,evaluation</code> · <code>domain:genomics-biology</code> · <code>type:model,framework</code></small></p>
  </Link>
  <Link className="doc-card" href="#climate-earth-sciences">
    <p className="eyebrow">Domain</p>
    <h3>Climate & earth sciences</h3>
    <p>Weather models, climate foundation models, and evaluation resources.</p>
    <p><small>Tags: <code>lifecycle:experiment-planning,evaluation</code> · <code>domain:climate-earth-sciences</code> · <code>type:model,benchmark</code></small></p>
  </Link>
  <Link className="doc-card" href="#physics-mathematics">
    <p className="eyebrow">Domain</p>
    <h3>Physics & mathematics</h3>
    <p>Symbolic regression, theorem proving, and scientific ML toolchains.</p>
    <p><small>Tags: <code>lifecycle:hypothesis-generation,evaluation</code> · <code>domain:physics-mathematics</code> · <code>type:framework,benchmark</code></small></p>
  </Link>
  <Link className="doc-card" href="https://github.com/natnew/awesome-ai-scientists#hugging-face-models--resources">
    <p className="eyebrow">Support</p>
    <h3>Cross-domain models</h3>
    <p>Use the model index when you want checkpoints that cut across domains.</p>
    <p><small>Tags: <code>lifecycle:tool-use-execution</code> · <code>domain:cross-domain</code> · <code>type:model</code></small></p>
  </Link>
</div>

## Resources by domain

Hand-picked entries grouped by canonical domain slug. Every bullet carries the full three-axis tag set (`lifecycle:` · `domain:` · `type:`) locked in [Phase 2](./start-here.md#how-entries-are-organized). Anchors below match the domain slugs verbatim so the card grid above and external links stay stable.

### Drug discovery & chemistry {#drug-discovery-chemistry}

Cheminformatics, retrosynthesis, docking, and chemistry-aware agents. The distinctive shape here is **chemistry-grounded tool use**: models are wrapped with reaction templates, simulators, and safety checks so an agent can propose, score, and (sometimes) execute synthesis plans. Most live entries cluster around **experiment-planning** and **tool-use-execution**.

- **[RDKit](https://github.com/rdkit/rdkit)** — The de-facto open-source cheminformatics toolkit; substrate for almost every Python-based chemistry agent and ML pipeline. *Tags: <code>lifecycle:tool-use-execution</code> · <code>domain:drug-discovery-chemistry</code> · <code>type:framework,tool</code>*
- **[DeepChem](https://github.com/deepchem/deepchem)** — Open-source library for ML in chemistry, drug discovery, and materials, with a wide catalogue of featurizers, datasets, and pretrained models. *Tags: <code>lifecycle:tool-use-execution,evaluation</code> · <code>domain:drug-discovery-chemistry</code> · <code>type:framework,dataset</code>*
- **[AiZynthFinder](https://github.com/MolecularAI/aizynthfinder)** — AstraZeneca's Monte Carlo Tree Search retrosynthesis tool with neural policies; canonical reference for synthesis planning. *Tags: <code>lifecycle:experiment-planning</code> · <code>domain:drug-discovery-chemistry</code> · <code>type:framework,tool</code>*
- **[ChemCrow](https://github.com/ur-whitelab/chemcrow-public)** — LLM agent equipped with 18 expert chemistry tools (synthesis, safety, search) for autonomous chemical reasoning. *Tags: <code>lifecycle:tool-use-execution</code> · <code>domain:drug-discovery-chemistry</code> · <code>type:agent-system,framework</code>*
- **[DiffDock](https://github.com/gcorso/DiffDock)** — Diffusion-generative model for blind protein–ligand docking; a strong baseline for structure-based drug discovery agents. *Tags: <code>lifecycle:tool-use-execution,evaluation</code> · <code>domain:drug-discovery-chemistry</code> · <code>type:model,paper</code>*

### Materials science {#materials-science}

Interatomic potentials, materials APIs, and discovery benchmarks. The frontier is **ML force fields** that are accurate enough to replace expensive DFT in screening loops, paired with active-learning campaigns that propose the next composition or structure to evaluate.

- **[Materials Project (mp-api)](https://github.com/materialsproject/api)** — Official Python client and REST surface for the Materials Project's computed-properties database covering hundreds of thousands of inorganic crystals; the standard data backbone for materials ML. *Tags: <code>lifecycle:literature-intelligence,experiment-planning</code> · <code>domain:materials-science</code> · <code>type:dataset,tool</code>*
- **[MACE](https://github.com/ACEsuit/mace)** — Equivariant message-passing interatomic potential; a leading open ML force field family for molecular dynamics and screening. *Tags: <code>lifecycle:tool-use-execution</code> · <code>domain:materials-science</code> · <code>type:model,framework</code>*
- **[Matbench](https://matbench.materialsproject.org/)** — Standardised benchmark suite of materials property prediction tasks with leaderboards; the canonical evaluation surface for materials ML. *Tags: <code>lifecycle:evaluation</code> · <code>domain:materials-science</code> · <code>type:benchmark,dataset</code>*
- **[Open Catalyst Project](https://opencatalystproject.org/)** — Meta + CMU dataset and challenge (OC20 / OC22 / OC25) for ML-driven catalyst discovery, with millions of DFT calculations. *Tags: <code>lifecycle:experiment-planning,evaluation</code> · <code>domain:materials-science</code> · <code>type:dataset,benchmark</code>*
- **[SciAgents](https://arxiv.org/abs/2409.05556)** — Multi-agent graph-reasoning framework for materials hypothesis generation across an ontological knowledge graph (Buehler). *Tags: <code>lifecycle:hypothesis-generation</code> · <code>domain:materials-science</code> · <code>type:paper,agent-system</code>*

### Genomics & biology {#genomics-biology}

Protein and genomic foundation models, single-cell tooling, and wet-lab automation. AI-for-bio is unusual in that **structure prediction works**, which makes downstream design and screening pipelines tractable; the open challenge is closing the loop with real experiments.

- **[AlphaFold](https://github.com/google-deepmind/alphafold)** — DeepMind's protein structure prediction system; the canonical reference for AI-driven structural biology. *Tags: <code>lifecycle:tool-use-execution</code> · <code>domain:genomics-biology</code> · <code>type:model,framework</code>*
- **[ESM (Evolutionary Scale Modeling)](https://github.com/facebookresearch/esm)** — Meta's protein language models (ESM-2, ESMFold) for embeddings, structure, and function prediction at scale. *Tags: <code>lifecycle:tool-use-execution</code> · <code>domain:genomics-biology</code> · <code>type:model</code>*
- **[scvi-tools](https://github.com/scverse/scvi-tools)** — Probabilistic deep generative models for single-cell omics (scRNA-seq, ATAC, spatial); the workhorse library of the scverse stack. *Tags: <code>lifecycle:tool-use-execution,evaluation</code> · <code>domain:genomics-biology</code> · <code>type:framework,model</code>*
- **[Boltz-1](https://github.com/jwohlwend/boltz)** — MIT's open-source biomolecular structure prediction model approaching AlphaFold 3 quality, released under MIT license. *Tags: <code>lifecycle:tool-use-execution</code> · <code>domain:genomics-biology</code> · <code>type:model</code>*
- **[LAB-Bench](https://github.com/Future-House/LAB-Bench)** — FutureHouse benchmark for biology research tasks (literature, figures, protocols, DBQA, cloning); aimed squarely at scientific agents. *Tags: <code>lifecycle:evaluation</code> · <code>domain:genomics-biology</code> · <code>type:benchmark,dataset</code>*

### Climate & earth sciences {#climate-earth-sciences}

Weather and climate models, earth observation, and environmental data. The shift here has been from numerical PDE solvers to **neural surrogates** trained on reanalysis data — orders of magnitude faster, competitive in accuracy, and reshaping how forecasting and downscaling get done.

- **[GraphCast](https://github.com/google-deepmind/graphcast)** — DeepMind's GNN-based medium-range weather model that beats HRES on most variables at a fraction of the compute. *Tags: <code>lifecycle:tool-use-execution,evaluation</code> · <code>domain:climate-earth-sciences</code> · <code>type:model,paper</code>*
- **[Pangu-Weather](https://github.com/198808xc/Pangu-Weather)** — Huawei's 3D Earth-Specific Transformer for global weather forecasting; first ML model to outperform NWP at all forecast lead times in 2023. *Tags: <code>lifecycle:tool-use-execution</code> · <code>domain:climate-earth-sciences</code> · <code>type:model,paper</code>*
- **[Aurora](https://github.com/microsoft/aurora)** — Microsoft's foundation model for atmospheric forecasting (weather, air quality, ocean waves) trained on heterogeneous earth-system data. *Tags: <code>lifecycle:tool-use-execution</code> · <code>domain:climate-earth-sciences</code> · <code>type:model</code>*
- **[WeatherBench 2](https://github.com/google-research/weatherbench2)** — Google Research benchmark and leaderboard for global weather forecasting at 6h–10d lead times; the standard evaluation surface for ML weather models. *Tags: <code>lifecycle:evaluation</code> · <code>domain:climate-earth-sciences</code> · <code>type:benchmark,dataset</code>*
- **[ClimateLearn](https://github.com/aditya-grover/climate-learn)** — Open-source PyTorch library for ML-driven climate and weather modelling, with datasets, baselines, and downscaling tasks. *Tags: <code>lifecycle:experiment-planning,evaluation</code> · <code>domain:climate-earth-sciences</code> · <code>type:framework,dataset</code>*

### Physics & mathematics {#physics-mathematics}

Symbolic regression, theorem proving, and scientific ML toolchains. This is where AI is most directly producing **machine-checkable artifacts** — proofs, formulas, programs — rather than just predictions, which makes evaluation unusually clean.

- **[PySR](https://github.com/MilesCranmer/PySR)** — High-performance symbolic regression (Cranmer); recovers compact, interpretable equations from data and is widely used in physics ML. *Tags: <code>lifecycle:hypothesis-generation,tool-use-execution</code> · <code>domain:physics-mathematics</code> · <code>type:framework,tool</code>*
- **[Lean & mathlib](https://leanprover-community.github.io/)** — The Lean 4 theorem prover and its community-built mathematics library; the substrate for most modern AI-for-math systems. *Tags: <code>lifecycle:tool-use-execution,evaluation</code> · <code>domain:physics-mathematics</code> · <code>type:framework,tool</code>*
- **[DeepXDE](https://github.com/lululxvi/deepxde)** — Library for physics-informed neural networks, operator learning, and inverse problems over PDEs and ODEs. *Tags: <code>lifecycle:tool-use-execution</code> · <code>domain:physics-mathematics</code> · <code>type:framework</code>*
- **[FunSearch](https://github.com/google-deepmind/funsearch)** — DeepMind system that pairs an LLM with an evaluator to search the space of programs and discover new mathematical results. *Tags: <code>lifecycle:hypothesis-generation</code> · <code>domain:physics-mathematics</code> · <code>type:agent-system,paper</code>*
- **[miniF2F](https://github.com/facebookresearch/miniF2F)** — Olympiad-style formal mathematics benchmark across Lean, Metamath, and Isabelle; a standard evaluation surface for theorem-proving models. *Tags: <code>lifecycle:evaluation</code> · <code>domain:physics-mathematics</code> · <code>type:benchmark,dataset</code>*