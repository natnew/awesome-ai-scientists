# Awesome AI Scientists

[![Awesome](https://awesome.re/badge-flat2.svg)](https://awesome.re) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE) [![GitHub stars](https://img.shields.io/github/stars/natnew/awesome-ai-scientists?style=flat-square)](https://github.com/natnew/awesome-ai-scientists/stargazers) [![GitHub forks](https://img.shields.io/github/forks/natnew/awesome-ai-scientists?style=flat-square)](https://github.com/natnew/awesome-ai-scientists/network/members) [![GitHub contributors](https://img.shields.io/github/contributors/natnew/awesome-ai-scientists?style=flat-square)](https://github.com/natnew/awesome-ai-scientists/graphs/contributors) [![GitHub last commit](https://img.shields.io/github/last-commit/natnew/awesome-ai-scientists?style=flat-square)](https://github.com/natnew/awesome-ai-scientists/commits/main) [![GitHub issues](https://img.shields.io/github/issues/natnew/awesome-ai-scientists?style=flat-square)](https://github.com/natnew/awesome-ai-scientists/issues) [![Maintained](https://img.shields.io/badge/Maintained-yes-brightgreen.svg?style=flat-square)](https://github.com/natnew/awesome-ai-scientists) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](CONTRIBUTING.md)

> A curated collection of resources for building "AI Scientist" systems: AI that assists scientific discovery through literature intelligence, hypothesis generation, experiment planning, tool use, evaluation, and scientific communication.

**[Website](https://natnew.github.io/awesome-ai-scientists/)** · **[Contents](#contents)** · **[Contributing](CONTRIBUTING.md)**

## Contents
- [Foundational Papers & Systems](#foundational-papers--systems)
- [Surveys & Overviews](#surveys--overviews)
- [Literature Intelligence & Knowledge Extraction](#literature-intelligence--knowledge-extraction)
- [Hypothesis Generation & Ideation](#hypothesis-generation--ideation)
- [Experiment Planning & Design](#experiment-planning--design)
- [Tool-Use & Lab Automation](#tool-use--lab-automation)
- [Multi-Agent Architectures for Science](#multi-agent-architectures-for-science)
- [Benchmarks & Evaluation](#benchmarks--evaluation)
- [Datasets for Scientific AI](#datasets-for-scientific-ai)
- [Scientific Communication & Reporting](#scientific-communication--reporting)
- [Ethics, Safety & Responsible AI for Science](#ethics-safety--responsible-ai-for-science)
- [Domain: Drug Discovery & Chemistry](#domain-drug-discovery--chemistry)
- [Domain: Materials Science](#domain-materials-science)
- [Domain: Genomics & Biology](#domain-genomics--biology)
- [Domain: Climate & Earth Sciences](#domain-climate--earth-sciences)
- [Domain: Physics & Mathematics](#domain-physics--mathematics)
- [Hugging Face Models & Resources](#hugging-face-models--resources)
- [Agent Frameworks (General-Purpose)](#agent-frameworks-general-purpose)
- [Meta-Resources & Awesome Lists](#meta-resources--awesome-lists)

## Foundational Papers & Systems
Landmark systems that define the AI Scientist paradigm.

- [The AI Scientist v1](https://arxiv.org/abs/2408.06292) - Sakana AI, 2024. First end-to-end system for fully automated scientific discovery. Generates ideas, writes code, runs experiments, and produces LaTeX papers with automated peer review at roughly $15 per paper.
- [The AI Scientist v2](https://github.com/SakanaAI/AI-Scientist-v2) - Sakana AI, 2025. Adds agentic tree search, removes human-authored templates, and produced the first fully AI-generated paper accepted at an ICLR 2025 workshop.
- [Coscientist](https://www.nature.com/articles/s41586-023-06792-0) - Boiko et al., Nature 2023. GPT-4 autonomously designs, plans, and performs chemistry experiments via web search, code execution, and robotic lab control.
- [ChemCrow](https://arxiv.org/abs/2304.05376) - Bran et al., Nature Machine Intelligence 2024. An LLM augmented with 18 chemistry tools including RDKit, PubChem, retrosynthesis engines, and robotic synthesis tools.
- [Google DeepMind AI Co-Scientist](https://arxiv.org/abs/2502.18864) - Gottweis et al., 2025. A multi-agent Gemini 2.0 system using generate-debate-evolve with tournament-based Elo ranking.
- [Robin](https://github.com/Future-House/robin) - FutureHouse, 2025. An end-to-end drug discovery system that orchestrates specialized agents from literature review through experiment design.
- [FunSearch](https://www.nature.com/articles/s41586-023-06924-6) - DeepMind, Nature 2024. Pairs an LLM with a systematic evaluator to search in function space and discover new mathematical constructions.
- [Agent Laboratory](https://github.com/SamuelSchmidgall/AgentLaboratory) - Schmidgall et al., 2025. A PhD, postdoc, and reviewer agent pipeline with large cost reductions versus earlier autonomous methods.
- [AI-Researcher](https://github.com/HKUDS/AI-Researcher) - NeurIPS 2025. A full pipeline from literature review to publication.
- [Kosmos](https://github.com/jimmc414/Kosmos) - Supports 200 parallel agent rollouts and large code-generation runs.
- [Stanford Ideation Study](https://arxiv.org/abs/2409.04109) - Si, Yang, and Hashimoto, 2024. LLM-generated research ideas were judged more novel than expert human ideas in blind evaluation.

## Surveys & Overviews
- [Scientific Discovery in the Age of AI](https://www.nature.com/articles/s41586-023-06221-2) - Nature, 2023. A broad review of AI breakthroughs across the research lifecycle.
- [Agentic AI for Scientific Discovery](https://arxiv.org/abs/2503.08979) - 2025. Categorizes existing systems across chemistry, biology, and materials science.
- [Towards Scientific Intelligence: LLM-based Scientific Agents](https://arxiv.org/abs/2503.24047) - 2025. A taxonomy of LLM-based scientific agent architectures and evaluation benchmarks.

## Literature Intelligence & Knowledge Extraction
Tools for searching, retrieving, synthesizing, and extracting knowledge from scientific literature.

### RAG & QA Systems
- [PaperQA2](https://github.com/Future-House/paper-qa) - FutureHouse. An agentic RAG system for scientific literature search, summarization, and contradiction detection.
- [OpenScholar](https://arxiv.org/abs/2411.14199) - Allen AI and UW, Nature 2025. An open retrieval-augmented LM that searches 45M open-access papers.
- [Elicit](https://elicit.com) - An AI research assistant for structured literature extraction and screening.

### Knowledge Graphs & Metadata APIs
- [OpenAlex](https://openalex.org/) - A fully open knowledge graph with hundreds of millions of works, authors, and institutions.
- [Semantic Scholar API](https://www.semanticscholar.org/product/api) - Allen AI. A free API with 200M+ papers, citation graphs, recommendations, and AI-generated TL;DRs.
- [S2ORC](https://github.com/allenai/s2orc) - Allen AI. A large open corpus of machine-readable full-text academic papers.
- [ORKG](https://www.orkg.org/) - A machine-actionable platform for comparing research contributions.
- [scite.ai](https://scite.ai/) - Smart citation analysis that classifies citations as supporting, contrasting, or mentioning.
- [Connected Papers](https://www.connectedpapers.com/) - A visual graph tool for exploring citation neighborhoods.
- [CORE](https://core.ac.uk/) - An open-access full-text aggregator with hundreds of millions of metadata records.

### Scientific Language Models
- [Galactica](https://galactica.org/) - Meta AI. A 120B-parameter scientific language model trained on papers, textbooks, and knowledge bases.
- [SciBERT](https://github.com/allenai/scibert) - Allen AI. BERT trained on 1.14M scientific papers with a scientific vocabulary.
- [BioGPT](https://github.com/microsoft/BioGPT) - Microsoft. A biomedical language model with strong QA and relation-extraction performance.
- [BioMedLM](https://huggingface.co/stanford-crfm/BioMedLM) - Stanford CRFM. A 2.7B-parameter biomedical language model.

## Hypothesis Generation & Ideation
Systems for AI-driven hypothesis generation, novelty detection, and research ideation.

- [SciMON](https://arxiv.org/abs/2305.14259) - Wang et al., ACL 2024. Retrieves inspirations from prior work and iteratively optimizes ideas for novelty.
- [ResearchAgent](https://arxiv.org/abs/2404.07738) - Microsoft and KAIST, 2024. Defines problems, proposes methods, and designs experiments with reviewing agents.
- [Scideator](https://arxiv.org/abs/2409.14634) - UW and Allen AI. Decomposes papers into facets and recombines them for structured ideation.
- [KG-CoI](https://arxiv.org/abs/2411.02382) - Xiong et al., 2024. A knowledge-graph-grounded hypothesis generation system with hallucination detection.

## Experiment Planning & Design
Bayesian optimization, adaptive design, and intelligent experiment selection.

- [BoTorch](https://botorch.org/) - Meta. A modular Bayesian optimization library on PyTorch.
- [Ax Platform](https://ax.dev/) - Meta. A production-grade experiment management platform built on BoTorch.
- [BayBE](https://github.com/emdgroup/baybe) - Merck KGaA. Bayesian optimization for chemistry with built-in chemical encodings and transfer learning.
- [Dragonfly](https://github.com/dragonfly/dragonfly) - Scalable Bayesian optimization for high-dimensional and multi-fidelity problems.
- [Summit](https://github.com/sustainable-processes/summit) - Chemical reaction optimization benchmarks and strategies.
- [Olympus](https://github.com/aspuru-guzik-group/olympus) - Algorithm benchmarking with experimentally derived datasets.
- [Phoenics](https://github.com/aspuru-guzik-group/phoenics) - Bayesian optimization for categorical search spaces.
- [GRYFFIN](https://github.com/aspuru-guzik-group/gryffin) - Descriptor-aware optimization for categorical chemical spaces.

## Tool-Use & Lab Automation
Frameworks connecting AI reasoning to scientific databases, code execution, and physical instruments.

### Robotic & Cloud Lab Platforms
- [Opentrons](https://opentrons.com/) - Open-source lab robotics with a Python API.
- [ChemOS 2.0](https://github.com/aspuru-guzik-group/ChemOS) - An open-source self-driving lab orchestration platform using SiLA2.
- [Emerald Cloud Lab](https://www.emeraldcloudlab.com/) - Remote access to hundreds of instruments with built-in lab information systems.
- [Benchling](https://www.benchling.com/) - Biotech data infrastructure with ELN, LIMS, and molecular biology tooling.

### Scientific Database APIs
- [PubChem](https://pubchem.ncbi.nlm.nih.gov/) - A massive chemistry database with programmatic access via PUG-REST.
- [UniProt](https://www.uniprot.org/) - Comprehensive protein sequence and functional data.
- [ChEMBL](https://www.ebi.ac.uk/chembl/) - A large database of bioactive compounds with REST access.
- [Materials Project](https://materialsproject.org/) - Computed materials data with API access via mp-api.
- [PDB (Protein Data Bank)](https://www.rcsb.org/) - Experimentally determined macromolecular structures with REST and GraphQL interfaces.

## Multi-Agent Architectures for Science
Systems where multiple specialized agents collaborate, debate, and refine scientific work.

- [SciAgents](https://arxiv.org/abs/2409.05556) - Ghafarollahi and Buehler, MIT 2024. A KG plus multi-agent pipeline for materials discovery built on AutoGen.
- [AgenticSciML](https://arxiv.org/html/2511.07262v1) - 2025. Uses proposers, critics, engineers, retrievers, and evaluators for scientific ML.
- [VirSci](https://arxiv.org/abs/2410.09403) - Su et al., 2024. Uses agents with different scientific backgrounds to improve research potential.
- [AgentRxiv](https://arxiv.org/abs/2503.18102) - Schmidgall et al., 2025. A centralized preprint server where autonomous agents publish and build on each other's work.
- [Multi-Agent Debate](https://arxiv.org/abs/2305.14325) - Du et al., ICML 2024. Foundational work showing that debate between LLM instances improves reasoning.
- [ChatDev](https://github.com/OpenBMB/ChatDev) - A multi-agent software development framework adaptable to scientific workflows.
- [CAMEL](https://github.com/camel-ai/camel) - A role-playing agent communication framework.

## Benchmarks & Evaluation
Measuring scientific AI capabilities across reasoning, coding, and autonomous research.

- [ScienceAgentBench](https://github.com/OSU-NLP-Group/ScienceAgentBench) - ICLR 2025. A benchmark with 102 tasks drawn from peer-reviewed scientific workflows.
- [GPQA](https://arxiv.org/abs/2311.12022) - Rein et al., 2023. Graduate-level Google-proof questions across biology, physics, and chemistry.
- [SciCode](https://scicode-bench.github.io/) - NeurIPS 2024. Research coding problems across 16 scientific subdomains.
- [MLAgentBench](https://github.com/snap-stanford/MLAgentBench) - A benchmark suite for research-agent experimentation ability.
- [SciFact](https://github.com/allenai/scifact) - A benchmark for scientific claim verification.
- [SciBench](https://github.com/mandyyyyii/scibench) - Open-ended collegiate STEM problem solving.
- [BioASQ](http://bioasq.org/) - Biomedical information retrieval and question answering.
- [IdeaBench](https://arxiv.org/abs/2411.02429) - A benchmark for evaluating research-idea generation quality.

## Datasets for Scientific AI

| Dataset       | Domain                | Size              | Path or link                                           |
| ------------- | --------------------- | ----------------- | ------------------------------------------------------ |
| GPQA          | Bio/Physics/Chem      | 448 questions     | `idavidrein/gpqa`                                      |
| SciFact       | Biomedical claims     | 1,400 claims      | `allenai/scifact`                                      |
| SciQ          | Science exam QA       | 13,679 questions  | `allenai/sciq`                                         |
| PubMedQA      | Biomedical research   | 1K+ labeled       | `qiaojin/PubMedQA`                                     |
| MMLU-Pro      | STEM-heavy QA         | 12K+ questions    | `TIGER-Lab/MMLU-Pro`                                   |
| S2ORC         | Full-text papers      | 81.1M papers      | Allen AI S2ORC                                         |
| The Pile      | Mixed scientific text | Large             | `EleutherAI`                                           |
| MoleculeNet   | Molecular benchmarks  | Multiple datasets | DeepChem docs                                          |
| MatBench      | Materials properties  | 13 tasks          | [GitHub](https://github.com/materialsproject/matbench) |
| Open Catalyst | Catalysis/DFT         | 1.3M+ relaxations | [OCP project](https://opencatalystproject.org/)        |
| QM9           | Quantum chemistry     | 134K molecules    | Various mirrors                                        |

## Scientific Communication & Reporting
Automating the last mile from results to manuscripts, figures, and reports.

- [AI Scientist Paper Module](https://github.com/SakanaAI/AI-Scientist) - Sakana AI. Generates LaTeX manuscripts with figures, citations, and automated review.
- [Manubot](https://manubot.org/) - Open-source collaborative manuscripts via Markdown and GitHub-based automation.
- [SciNote](https://www.scinote.net/) - An open-source ELN with manuscript-writing support.
- [SciencePlots](https://github.com/garrettj403/SciencePlots) - One-line Matplotlib style sheets for publication figures.
- [LLM4Papers](https://github.com/KordingLab/LLM4Papers) - An AI editing agent for Overleaf documents.
- [Paperpal](https://paperpal.com/) - Academic language improvement trained on scholarly writing.
- [Writefull](https://www.writefull.com/) - An academic English writing assistant with Overleaf integration.
- [tikzplotlib](https://github.com/nschloe/tikzplotlib) - Converts Matplotlib figures to TikZ and PGFPlots for LaTeX.

## Ethics, Safety & Responsible AI for Science
Dual-use concerns, hallucination, reproducibility, epistemic integrity, and governance.

### Key Papers & Reports
- [Dual-use capabilities of concern of biological AI models](https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1011354) - Carter, Sandbrink et al., 2025. Proposes evaluation methods with preset risk thresholds and mitigation actions.
- [AI Hallucination Taxonomy](https://www.nature.com/articles/s41599-023-02523-8) - Zhou et al., 2024. A classification of distorted information in AI-generated content.
- [The ethics of using AI in scientific research](https://link.springer.com/article/10.1007/s43681-023-00271-x) - Resnik & Hosseini, 2024. Actionable recommendations for responsible AI use in science.
- [AI Scientist Evaluation (ARI)](https://www.alignmentforum.org/posts/Rz9kXk4JbH9jKz5z/evaluation-of-automated-scientist-v1) - A critical assessment of AI Scientist v1 limitations, failure modes, and risks.

### Policy Frameworks
- [EU Living Guidelines on Responsible Use of Generative AI in Research](https://research-and-innovation.ec.europa.eu/document/2b6cf7e5-36ac-41cb-aab5-0d32050143dc_en) - Guidance on transparency, responsibility, and non-authorship for AI systems.
- [UNESCO Recommendation on the Ethics of AI](https://www.unesco.org/en/artificial-intelligence/recommendation-ethics) - A global standard with readiness and ethical impact assessment tools.
- [OECD AI in Science](https://www.oecd.org/en/publications/artificial-intelligence-in-science_a8d820bd-en.html) - Policy proposals on research integrity, open science, and LLM quality standards.

### Authorship and Publishing

- [Project Rachel: Can an AI Become a Scholarly Author?](http://arxiv.org/pdf/2511.14819), (arXiv 2511.14819, 2025) — Discuss how AI scientists can publish in their own name.

### Practical Tools
- [SecureDNA](https://securedna.org/) - DNA synthesis screening to reduce biosecurity risks.
- [Guardrails AI](https://github.com/guardrails-ai/guardrails) - Validation and control tooling for LLM outputs.
- [FactScore](https://github.com/shmsw25/FActScore) - Fine-grained fact verification for model outputs.

## Domain: Drug Discovery & Chemistry

### Toolkits & Platforms
- [RDKit](https://www.rdkit.org/) - Industry-standard open-source cheminformatics.
- [DeepChem](https://deepchem.io/) - Deep learning tooling for drug discovery, materials science, and quantum chemistry.
- [TorchDrug](https://torchdrug.ai/) - A GPU-accelerated graph-based molecular ML platform.
- [Open Babel](http://openbabel.org/) - Chemical file format conversion and molecular toolkit.

### Molecular Generation & Docking
- [DiffDock](https://github.com/gcorso/DiffDock) - MIT, 2022. Diffusion-based molecular docking.
- [REINVENT 4](https://github.com/MolecularAI/REINVENT4) - AstraZeneca. De novo drug design via reinforcement learning.
- [MoleculeSTM](https://github.com/chao1224/MoleculeSTM) - Multi-modal molecular understanding across SMILES, graphs, and text.
- [AutoDock Vina](https://vina.scripps.edu/) - A fast and widely used molecular docking system.
- [Uni-Mol](https://github.com/dptech-corp/Uni-Mol) - A 3D molecular pretraining framework.

### Retrosynthesis & Reactions
- [AiZynthFinder](https://github.com/MolecularAI/AiZynthFinder) - AstraZeneca. Template-based retrosynthetic planning via Monte Carlo tree search.
- [RXN for Chemistry](https://rxn.res.ibm.com/) - IBM. Transformer-based chemical reaction prediction.
- [ASKCOS](https://askcos.mit.edu/) - MIT's retrosynthesis and pathway planning platform.

### Chemistry Agents
- [ChemCrow](https://github.com/ur-whitelab/chemcrow-public) - An LLM plus chemistry-tools agent system.

## Domain: Materials Science

- [MACE](https://github.com/ACEsuit/mace) - Higher-order equivariant message passing for interatomic potentials.
- [CHGNet](https://github.com/CederGroupHub/chgnet) - A universal ML potential trained on Materials Project data.
- [M3GNet](https://github.com/materialsvirtuallab/m3gnet) - A graph neural network potential for the periodic table.
- [Matbench Discovery](https://matbench-discovery.materialsproject.org/) - Benchmarks universal potentials on materials discovery tasks.
- [Pymatgen](https://pymatgen.org/) - A comprehensive Python materials analysis library.
- [JARVIS](https://github.com/usnistgov/jarvis) - NIST. DFT, ML, and force-field calculations for tens of thousands of materials.
- [Materials Project API](https://api.materialsproject.org/) - Computed materials data with API access.
- [CDVAE](https://github.com/txie-93/cdvae) - Crystal Diffusion VAE for periodic materials generation.
- [GNoME](https://deepmind.google/discover/blog/millions-of-new-materials-discovered-with-deep-learning/) - DeepMind, Nature 2023. Predicts millions of stable crystals.

## Domain: Genomics & Biology

### Protein Structure & Language Models
- [AlphaFold 2/3](https://github.com/google-deepmind/alphafold) - Near-experimental protein structure prediction, extended in AlphaFold 3 to DNA, RNA, and ligands.
- [OpenFold 3](https://github.com/aqlaboratory/openfold-3) - Columbia. An open-source AlphaFold 3 reproduction.
- [Protenix](https://github.com/bytedance/Protenix) - ByteDance. Biomolecular structure prediction plus de novo protein-binder design.
- [ESM-2](https://github.com/facebookresearch/esm) - Meta AI. Protein language modeling up to 15B parameters.
- [ESM Cambrian](https://huggingface.co/EvolutionaryScale/esmc-600m-2024-12) - Next-generation ESM models with major speedups.
- [ESMFold](https://esmatlas.com/resources) - Single-sequence protein folding in Hugging Face Transformers.
- [Boltz-1](https://github.com/jwohlwend/boltz) - Open-source biomolecular structure prediction.
- [Chai-1](https://github.com/chaidiscovery/chai-lab) - Multi-purpose molecular structure prediction.
- [RFDiffusion](https://github.com/RosettaCommons/RFdiffusion) - Baker Lab. Protein design via diffusion models.

### Genomic Foundation Models
- [Evo 2](https://github.com/evo-design/evo) - Arc Institute. A 40B-parameter genomic model trained on 9.3T DNA bases.
- [Enformer](https://github.com/deepmind/deepmind-research/tree/master/enformer) - DeepMind. Predicts gene expression from DNA sequence across long contexts.
- [Nucleotide Transformer](https://github.com/instadeepai/nucleotide-transformer) - InstaDeep and NVIDIA. Foundation models for genomics.
- [HyenaDNA](https://github.com/HazyResearch/hyena-dna) - Stanford. Long-range genomic sequence modeling at single-nucleotide resolution.
- [DNABERT-2](https://github.com/MAGICS-LAB/DNABERT_2) - A multi-species genome foundation model.

### Single-Cell & Omics
- [scvi-tools](https://scvi-tools.org/) - Deep learning tooling for single-cell omics.
- [scGPT](https://github.com/bowang-lab/scGPT) - A foundation model for single-cell biology.
- [Geneformer](https://huggingface.co/ctheodoris/Geneformer) - Christina Theodoris. A transformer pretrained on 30M single-cell transcriptomes.

## Domain: Climate & Earth Sciences

- [GraphCast](https://github.com/google-deepmind/graphcast) - DeepMind, Science 2023. A fast 10-day weather model at 0.25-degree resolution.
- [Aurora](https://arxiv.org/abs/2405.13063) - Microsoft, 2025. A 1.3B-parameter atmospheric model spanning weather, chemistry, and air quality.
- [Prithvi WxC](https://huggingface.co/ibm-nasa-geospatial/Prithvi-WxC) - IBM and NASA. An open foundation model for weather and climate.
- [FourCastNet](https://github.com/NVlabs/FourCastNet) - NVIDIA. Fourier neural operators for global weather forecasting.
- [Pangu-Weather](https://github.com/198808xc/Pangu-Weather) - Huawei, Nature 2023. A 3D neural weather model.
- [ClimaX](https://github.com/microsoft/ClimaX) - Microsoft. A foundation model for weather and climate.
- [WeatherBench 2](https://github.com/google-research/weatherbench2) - Google Research and ECMWF. An evaluation framework for data-driven weather models.
- [Climate Change AI](https://www.climatechange.ai/) - A community focused on the intersection of climate change and machine learning.

## Domain: Physics & Mathematics

- [PySR](https://github.com/MilesCranmer/PySR) - Symbolic regression for interpretable scientific equations.
- [LaSR](https://arxiv.org/abs/2312.01633) - LLM-guided concept evolution for symbolic regression.
- [LeanDojo](https://leandojo.org/) - An end-to-end framework for AI theorem proving in Lean 4.
- [AlphaProof](https://deepmind.google/discover/blog/ai-solves-imo-problems-at-silver-medal-level/) - DeepMind's IMO-level mathematical reasoning system.
- [AlphaGeometry 2](https://deepmind.google/discover/blog/alphageometry-an-olympiad-level-ai-system-for-geometry/) - DeepMind's olympiad geometry theorem prover.
- [DeepXDE](https://deepxde.readthedocs.io/) - Physics-informed neural networks for differential equations.
- [torchdiffeq](https://github.com/rtqichen/torchdiffeq) - Neural ordinary differential equations in PyTorch.
- [SciML](https://sciml.ai/) - The Julia ecosystem for scientific ML and differential equation solving.

## Hugging Face Models & Resources

| Model            | HF Path                               | Domain            | Notes                   |
| ---------------- | ------------------------------------- | ----------------- | ----------------------- |
| ESM-2 (3B)       | `facebook/esm2_t36_3B_UR50D`          | Protein           | 8M-15B parameter family |
| ESMFold          | `facebook/esmfold_v1`                 | Protein structure | Single-sequence folding |
| ESM Cambrian     | `EvolutionaryScale/esmc-600m-2024-12` | Protein           | Up to 6B parameters     |
| BioGPT           | `microsoft/biogpt`                    | Biomedical NLP    | Strong PubMed QA signal |
| SciBERT          | `allenai/scibert_scivocab_uncased`    | Scientific NLP    | Scientific vocabulary   |
| BioMedLM         | `stanford-crfm/BioMedLM`              | Biomedical        | 2.7B parameters         |
| Galactica (6.7B) | `facebook/galactica-6.7b`             | General science   | Part of a larger family |
| ChemBERTa        | `seyonec/ChemBERTa-zinc-base-v1`      | Molecular         | SMILES-trained          |
| Prithvi WxC      | `ibm-nasa-geospatial/Prithvi-WxC`     | Weather/Climate   | 2.3B parameters         |
| Geneformer       | `ctheodoris/Geneformer`               | Single-cell       | 30M transcriptomes      |

## Agent Frameworks (General-Purpose)
Not science-specific, but widely used to build scientific agent systems.

- [LangChain](https://github.com/langchain-ai/langchain) - Foundation for many scientific LLM-agent applications.
- [LangGraph](https://github.com/langchain-ai/langgraph) - Stateful, multi-actor agent orchestration built on LangChain.
- [AutoGen / AG2](https://github.com/microsoft/autogen) - Microsoft. A multi-agent conversation framework.
- [CrewAI](https://github.com/crewAIInc/crewAI) - A role-playing multi-agent framework.
- [Semantic Kernel](https://github.com/microsoft/semantic-kernel) - Microsoft. Enterprise-grade AI orchestration.
- [Haystack](https://github.com/deepset-ai/haystack) - An end-to-end NLP and RAG framework from deepset.
- [DSPy](https://github.com/stanfordnlp/dspy) - Stanford. Programming language-model pipelines instead of hand-tuned prompting.

## Meta-Resources & Awesome Lists

- [Awesome-LLM-Scientific-Discovery](https://github.com/HKUST-KnowComp/Awesome-LLM-Scientific-Discovery) - HKUST. A broad list of LLM resources across the scientific method.
- [awesome-ai-for-science](https://github.com/ai-boost/awesome-ai-for-science) - A broad AI-for-science resource list across domains.
- [Awesome Self-Driving Labs](https://github.com/AccelerationConsortium/awesome-self-driving-labs) - A directory of autonomous experimentation resources.
- [LLMs-in-science](https://github.com/ur-whitelab/LLMs-in-science) - White Lab. A living bibliography of LLM scientific agents.

## Contributing
See `CONTRIBUTING.md`.
