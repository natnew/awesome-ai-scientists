# Awesome AI Scientist [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> A curated collection of resources for building **“AI Scientist”** systems: AI that assists scientific discovery through literature intelligence, hypothesis generation, experiment planning, tool-use, evaluation, and scientific communication.

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
- [Contributing](#contributing)

## Foundational Papers & Systems
Landmark systems that define the AI Scientist paradigm.

- **[The AI Scientist v1](https://arxiv.org/abs/2408.06292)** (Sakana AI, 2024) — First end-to-end system for fully automated scientific discovery. Generates ideas, writes code, runs experiments, produces LaTeX papers with automated peer review (~$15/paper).
- **[The AI Scientist v2](https://sakana.ai/ai-scientist-v2/)** (Sakana AI, 2025) — Adds agentic tree search, eliminates human-authored templates. Produced the first fully AI-generated paper accepted at an ICLR 2025 workshop.
- **[Coscientist](https://www.nature.com/articles/s41586-023-06792-0)** (Boiko et al., Nature 2023) — GPT-4 autonomously designs, plans, and performs chemistry experiments via web search, code execution, and robotic lab control. First LLM to directly control physical lab equipment.
- **[ChemCrow](https://arxiv.org/abs/2304.05376)** (Bran et al., Nature Machine Intelligence 2024) — LLM augmented with 18 expert chemistry tools (RDKit, PubChem, retrosynthesis engines, robotic synthesis). Successfully planned and executed multi-step organic syntheses.
- **[Google DeepMind AI Co-Scientist](https://blog.google/technology/ai/google-deepmind-ai-co-scientist/)** (Gottweis et al., 2025) — Multi-agent system (Gemini 2.0) using generate-debate-evolve with tournament-based Elo ranking. Experimentally validated drug repurposing hypotheses for liver fibrosis.
- **[Robin](https://github.com/Future-House/robin)** (FutureHouse, 2025) — End-to-end drug discovery system. Orchestrates specialised agents (Crow, Falcon, Finch) from literature review through experiment design. Identified ripasudil for dry AMD in 2.5 months.
- **[FunSearch](https://www.nature.com/articles/s41586-023-06924-6)** (DeepMind, Nature 2024) — Pairs LLM with systematic evaluator to search in function space. First LLM-driven mathematical discovery — new cap set constructions surpassing 20-year records.
- **[Agent Laboratory](https://github.com/SamuelSchmidgall/AgentLaboratory)** (Schmidgall et al., 2025) — PhD/Postdoc/Reviewer agent pipeline achieving 84% cost reduction over previous autonomous methods.
- **[AI-Researcher](https://github.com/HKUDS/AI-Researcher)** (NeurIPS 2025) — Full pipeline from literature review to publication.
- **[MLAgentBench](https://github.com/snap-stanford/MLAgentBench)** (Huang et al., 2023) — Suite of 13 ML tasks benchmarking research agent capabilities.
- **[Kosmos](https://github.com/jimmc414/Kosmos)** — 200 parallel agent rollouts, 42K lines of code per run.
- **[Stanford Ideation Study](https://arxiv.org/abs/2409.04109)** (Si, Yang & Hashimoto, 2024) — LLM-generated research ideas judged statistically more novel than human expert ideas (p < 0.05) in blind evaluation with 100+ NLP researchers.

## Surveys & Overviews
- **[Scientific Discovery in the Age of AI](https://www.nature.com/articles/s41586-023-06221-2)** (Nature, 2023) — Comprehensive Nature review of AI breakthroughs across the full research lifecycle.
- **[Agentic AI for Scientific Discovery](https://arxiv.org/abs/2503.08979)** (2025) — Categorises existing systems across chemistry, biology, and materials science.
- **[Towards Scientific Intelligence: LLM-based Scientific Agents](https://arxiv.org/abs/2503.24047)** (2025) — Taxonomy of LLM-based scientific agent architectures and evaluation benchmarks.
- **[Awesome-LLM-Scientific-Discovery](https://github.com/HKUST-KnowComp/Awesome-LLM-Scientific-Discovery)** (HKUST) — Living resource list covering LLMs across all stages of the scientific method.
- **[OECD: AI in Science](https://www.oecd.org/en/publications/artificial-intelligence-in-science_a8d820bd-en.html)** (2023) — Policy-oriented analysis of AI across the full scientific process.
- **[Evaluation of Sakana's AI Scientist (ARI Assessment)](https://www.alignmentforum.org/posts/Rz9kXk4JbH9jKz5z/evaluation-of-automated-scientist-v1)** (2025) — Critical evaluation of AI Scientist v1 capabilities and limitations.

## Literature Intelligence & Knowledge Extraction
Tools for searching, retrieving, synthesising, and extracting knowledge from scientific literature.

### RAG & QA Systems
- **[PaperQA2](https://github.com/Future-House/paper-qa)** (FutureHouse) — Agentic RAG achieving superhuman accuracy on scientific literature search, summarisation, and contradiction detection (LitQA2 benchmark). 7K+ ⭐.
- **[OpenScholar](https://arxiv.org/abs/2411.14199)** (Allen AI / UW, Nature 2025) — Open-source retrieval-augmented LM searching 45M open-access papers. 8B model outperforms GPT-4o by 6.1% on ScholarQABench.
- **[Elicit](https://elicit.com)** — AI research assistant for structured literature extraction and screening. Freemium.

### Knowledge Graphs & Metadata APIs
- **[OpenAlex](https://openalex.org/)** — Fully open (CC0) knowledge graph: 240M+ works, 213M authors, 109K institutions. Successor to Microsoft Academic Graph.
- **[Semantic Scholar API](https://www.semanticscholar.org/product/api)** (Allen AI) — Free API with 200M+ papers, AI-generated TL;DRs, citation graphs, and recommendations.
- **[S2ORC](https://github.com/allenai/s2orc)** (Allen AI) — Largest publicly available corpus of machine-readable full-text academic papers.
- **[ORKG](https://www.orkg.org/)** — Machine-actionable research contribution comparison platform. Open-source.
- **[scite.ai](https://scite.ai/)** — Smart citation analysis: classifies citations as supporting, contrasting, or mentioning. (Freemium)
- **[Connected Papers](https://www.connectedpapers.com/)** — Visual graph tool for citation cluster exploration. (Freemium)
- **[CORE](https://core.ac.uk/)** — Open-access full-text aggregator (200M+ metadata records, 36M+ full texts).

### Scientific Language Models
- **[Galactica](https://galactica.org/)** (Meta AI) — 120B-parameter LLM trained on 106B tokens from 48M papers, textbooks, and knowledge bases. Excels at citation prediction, LaTeX generation, scientific QA.
- **[SciBERT](https://github.com/allenai/scibert)** (Allen AI) — BERT trained on 1.14M scientific papers with custom vocabulary.
- **[BioGPT](https://github.com/microsoft/BioGPT)** (Microsoft) — SOTA on PubMedQA (78.2%) and relation extraction.
- **[BioMedLM](https://huggingface.co/stanford-crfm/BioMedLM)** (Stanford CRFM) — 2.7B-param LLM competitive with 540B models on some medical tasks.

## Hypothesis Generation & Ideation
Systems for AI-driven hypothesis generation, novelty detection, and research ideation.

- **[SciMON](https://arxiv.org/abs/2305.14259)** (Wang et al., ACL 2024) — Retrieves "inspirations" from past papers and iteratively optimises generated ideas for novelty. Uses semantic, KG, and citation retrieval.
- **[ResearchAgent](https://arxiv.org/abs/2404.07738)** (Microsoft/KAIST, 2024) — Defines problems, proposes methods, designs experiments; refined by collaborative ReviewingAgents with academic graph augmentation.
- **[Scideator](https://arxiv.org/abs/2409.14634)** (UW/Allen AI) — Decomposes papers into facets, recombines them for structured ideation.
- **[KG-CoI](https://arxiv.org/abs/2411.02382)** (Xiong et al., 2024) — Knowledge-graph-grounded hypothesis generation with built-in hallucination detection via chain-of-ideas.
- **MOOSE-Chem** (ICLR 2025) — Mines knowledge graphs to rediscover chemistry hypotheses.
- **Deep Ideation** — LLM agents generating novel research ideas on scientific concept networks.
- **[IdeaBench](https://arxiv.org/abs/2411.02429)** (Guo et al., 2024) — Evaluation framework with 2,374 biomedical papers and "Insight Score" metric.
- **AGATHA** (Sybrandt et al.) — Deep learning for biomedical literature-based discovery.

## Experiment Planning & Design
Bayesian optimisation, adaptive design, and intelligent experiment selection.

- **[BoTorch](https://botorch.org/)** (Meta) — Modular Bayesian optimisation on PyTorch: GPs (GPyTorch), MC acquisition functions, multi-objective. Foundation for higher-level tools. MIT license.
- **[Ax Platform](https://ax.dev/)** (Meta) — Production-grade experiment management atop BoTorch. Easy APIs for defining experiments, running loops, visualising results. MIT license.
- **[BayBE](https://github.com/emdgroup/baybe)** (Merck KGaA) — Bayesian optimisation for real-world chemistry: built-in chemical encodings, transfer learning, multi-target. ≥50% reduction in required experiments. Apache 2.0.
- **[Dragonfly](https://github.com/dragonfly/dragonfly)** — Scalable BO for high-dimensional, multi-fidelity problems. MIT license.
- **[Summit](https://github.com/sustainable-processes/summit)** — Chemical reaction optimisation benchmarks and strategies. Open-source.
- **[Olympus](https://github.com/aspuru-guzik-group/olympus)** — Algorithm benchmarking with 33 experimentally-derived datasets. Open-source.
- **[Phoenics](https://github.com/aspuru-guzik-group/phoenics) / [GRYFFIN](https://github.com/aspuru-guzik-group/gryffin)** — BO for categorical and descriptor-aware chemical spaces. Open-source.

## Tool-Use & Lab Automation
Frameworks connecting AI reasoning to scientific databases, code execution, and physical instruments.

### Robotic & Cloud Lab Platforms
- **[Opentrons](https://opentrons.com/)** — Open-source lab robotics (OT-2, Flex) with Python API. Used by 70%+ of top-10 pharma. Coscientist directly controls Opentrons hardware.
- **[IBM RoboRXN](https://rxn.res.ibm.com/)** — Cloud-accessible autonomous chemical synthesis: AI reaction prediction + remote robotic execution. (Free tier available)
- **[ChemOS 2.0](https://github.com/aspuru-guzik-group/ChemOS)** — Open-source self-driving lab orchestration using SiLA2 protocol.
- **[Emerald Cloud Lab](https://www.emeraldcloudlab.com/)** — Remote access to 200+ instruments, built-in LIMS/ELN. (Commercial, >$250K/year)
- **[Benchling](https://www.benchling.com/)** — Biotech data infrastructure (ELN + LIMS + molecular biology tools). REST API for AI/ML integration. (Commercial, free academic tier)

### Scientific Database APIs
- **[PubChem](https://pubchem.ncbi.nlm.nih.gov/)** — 115M+ chemical compounds. REST + programmatic access via PUG-REST.
- **[UniProt](https://www.uniprot.org/)** — Comprehensive protein sequence and functional data. REST API.
- **[ChEMBL](https://www.ebi.ac.uk/chembl/)** — 2.4M+ bioactive compounds with drug-like properties. REST API.
- **[Materials Project](https://materialsproject.org/)** — 150K+ computed materials. REST API via mp-api.
- **[PDB (Protein Data Bank)](https://www.rcsb.org/)** — 200K+ experimentally determined macromolecular structures. REST + GraphQL.

### Meta-Resource
- **[Awesome Self-Driving Labs](https://github.com/AccelerationConsortium/awesome-self-driving-labs)** — Comprehensive directory of autonomous experimentation resources.

## Multi-Agent Architectures for Science
Systems where multiple specialised agents collaborate, debate, and refine scientific work.

- **[Google AI Co-Scientist](https://blog.google/technology/ai/google-deepmind-ai-co-scientist/)** — Generate-debate-evolve: Supervisor → Generation agents → Debate agents (self-play) → Evolution agents (tournament Elo ranking). Scales with compute.
- **[SciAgents](https://arxiv.org/abs/2409.05556)** (Ghafarollahi & Buehler, MIT 2024) — KG + multi-agent pipeline (Ontologist → Scientist 1 → Scientist 2 → Critic) on AutoGen. "Swarm intelligence" for materials discovery.
- **[AgenticSciML](https://arxiv.org/html/2511.07262v1)** (2025) — Proposers, critics, engineers, retrievers, evaluators for scientific ML. 10–1000× improvement over single-agent on PDE problems.
- **[VirSci](https://arxiv.org/abs/2410.09403)** (Su et al., 2024) — Agents impersonate scientists with different backgrounds. 44.1% improvement in potential impact over single-agent systems.
- **[AgentRxiv](https://arxiv.org/abs/2503.18102)** (Schmidgall et al., 2025) — Centralised preprint server where autonomous agents upload, retrieve, and build on each other's research. Steady improvement from 70.2% → 79.8% on MATH-500.
- **[Multi-Agent Debate](https://arxiv.org/abs/2305.14325)** (Du et al., MIT/DeepMind, ICML 2024) — Foundational work: multiple LLM instances debating enhances reasoning and factual validity. Underpins debate mechanisms in AI Co-Scientist.
- **[ChatDev](https://github.com/OpenBMB/ChatDev)** — Multi-agent software development (adaptable to science). 28K+ ⭐.
- **[CAMEL](https://github.com/camel-ai/camel)** — Role-playing agent communication framework. 10K+ ⭐.

## Benchmarks & Evaluation
Measuring scientific AI capabilities across reasoning, coding, and autonomous research.

- **[ScienceAgentBench](https://github.com/OSU-NLP-Group/ScienceAgentBench)** (ICLR 2025) — 102 tasks from 44 peer-reviewed papers (bioinformatics, comp. chem, GIS, psychology). Best agent: 32–42%.
- **[GPQA](https://arxiv.org/abs/2311.12022)** (Rein et al., 2023) — 448 graduate-level "Google-proof" questions (bio, physics, chem). Non-experts: 34% with web access; PhD experts: ~65%.
- **[SciCode](https://scicode-bench.github.io/)** (NeurIPS 2024) — 80 research coding problems across 16 scientific subdomains. Most realistic setting: best model 4.6% → now ~56%.
- **[MLAgentBench](https://github.com/snap-stanford/MLAgentBench)** — 13 ML research tasks for benchmarking agent experimentation ability.
- **[SciEval](https://github.com/Open-SciEval/SciEval)** — ~18K questions in chemistry, physics, biology at multiple difficulty levels.
- **ChemBench** — 2,788 QA pairs for chemical reasoning vs. human chemists.
- **[SciFact](https://github.com/allenai/scifact)** — 1,400 scientific claims for claim verification.
- **[SciBench](https://github.com/mandarbk/scibench)** — Open-ended collegiate STEM problem-solving.
- **SciKnowEval** — 5-level progressive scientific knowledge assessment (28K–70K instances).
- **MatSci-NLP** — 7 NLP tasks for materials science.
- **[BioASQ](http://bioasq.org/)** — Biomedical information retrieval + question answering.
- **[IdeaBench](https://arxiv.org/abs/2411.02429)** — Research idea generation evaluation with Insight Score.

## Datasets for Scientific AI

| Dataset | Domain | Size | HF Path / Link |
|---------|--------|------|----------------|
| **GPQA** | Bio/Physics/Chem | 448 questions | `idavidrein/gpqa` |
| **SciFact** | Biomedical claims | 1,400 claims | `allenai/scifact` |
| **SciQ** | Science exam QA | 13,679 questions | `allenai/sciq` |
| **PubMedQA** | Biomedical research QA | 1K+ labelled | `qiaojin/PubMedQA` |
| **MMLU-Pro** | Multi-task (STEM emphasis) | 12K+ questions | `TIGER-Lab/MMLU-Pro` |
| **S2ORC** | Full-text academic papers | 81.1M papers | [GitHub](https://github.com/allenai/s2orc) |
| **The Pile** | Mixed scientific text (science subset) | Large | `EleutherAI` |
| **MoleculeNet** | Molecular benchmarks | Multiple datasets | [DeepChem](https://deepchem.io/) |
| **MatBench** | Materials properties | 13 tasks | [GitHub](https://github.com/materialsproject/matbench) |
| **Open Catalyst** | Catalysis/DFT | 1.3M+ relaxations | [ocpmodels.github.io](https://ocpmodels.github.io/) |
| **QM9** | Quantum chemistry | 134K molecules | Various |

## Scientific Communication & Reporting
Automating the last mile: results → manuscripts, figures, and reports.

- **[AI Scientist Paper Module](https://github.com/SakanaAI/AI-Scientist)** (Sakana AI) — Generates complete LaTeX manuscripts with figures, citations, automated reviewer (1–10 scoring). v2 adds VLM-based figure refinement.
- **[Manubot](https://manubot.org/)** — Open-source collaborative manuscripts via Markdown + GitHub CI/CD. Version-controlled, auto-generated citations.
- **[SciNote](https://www.scinote.net/)** — Open-source ELN with Manuscript Writer add-on. Used by 20K+ scientists including FDA.
- **[SciencePlots](https://github.com/garrettj403/SciencePlots)** — One-line Matplotlib style sheets for publication figures (IEEE, Nature, Science).
- **[OverleafCopilot](https://github.com/dsp-lab/OverleafCopilot)** — LLM-assisted academic writing directly within Overleaf.
- **[LLM4Papers](https://github.com/KordingLab/LLM4Papers)** — AI editing agent for Overleaf documents.
- **[Paperpal](https://paperpal.com/)** — Academic language improvement trained on millions of scholarly articles. (Commercial)
- **[Writefull](https://www.writefull.com/)** — AI writing assistant for academic English, integrated with Overleaf. (Freemium)
- **[matplotlib2tikz](https://github.com/nschloe/matplotlib2tikz)** / **[tikzplotlib](https://github.com/tikzplotlib/tikzplotlib)** — Convert Matplotlib figures to TikZ/PGFPlots for LaTeX.

## Ethics, Safety & Responsible AI for Science
Dual-use concerns, hallucination, reproducibility, epistemic integrity, and governance.

### Key Papers & Reports
- **[Dual-use capabilities of concern of biological AI models](https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1011354)** (Carter, Sandbrink et al., PLOS Computational Biology, 2025) — Proposes evaluation methods with pre-specified risk thresholds and mitigation actions.
- **[When AI Meets Biology: Promise, Risk, and Responsibility](https://www.microsoft.com/en-us/research/publication/when-ai-meets-biology-promise-risk-and-responsibility/)** (Microsoft Research, 2025) — AI protein design tools evading DNA synthesis screening; proposes hybrid function-based screening.
- **[AI Hallucination Taxonomy](https://www.nature.com/articles/s41599-023-02523-8)** (Zhou et al., Nature HSS Communications, 2024) — Comprehensive classification of distorted information in AI-generated content.
- **[The ethics of using AI in scientific research](https://link.springer.com/article/10.1007/s43681-023-00271-x)** (Resnik et al., AI and Ethics, 2024) — 9 actionable recommendations for responsible AI use in science.
- **[AI Scientist Evaluation (ARI)](https://www.alignmentforum.org/posts/Rz9kXk4JbH9jKz5z/evaluation-of-automated-scientist-v1)** (2025) — Critical assessment of AI Scientist v1 limitations, failure modes, and risks.
- **[National Academies: Age of AI in the Life Sciences](https://www.nationalacademies.org/our-work/the-age-of-ai-in-the-life-sciences)** (2025) — Maps AI-enabled biological design and biosecurity implications.

### Policy Frameworks
- **[EU Living Guidelines on Responsible Use of Generative AI in Research](https://research-and-innovation.ec.europa.eu/news/all-research-and-innovation-news/guidelines-responsible-use-generative-ai-research-2024-03-20_en)** (2024) — AI systems are not authors; researchers remain responsible for outputs; use must be transparent.
- **[UNESCO Recommendation on the Ethics of AI](https://www.unesco.org/en/artificial-intelligence/recommendation-ethics)** (2021) — First global standard. Includes Readiness Assessment Methodology and Ethical Impact Assessment tools.
- **[OECD AI in Science](https://www.oecd.org/en/publications/artificial-intelligence-in-science_a8d820bd-en.html)** (2023) — Policy proposals on research integrity, open science, and LLM quality standards.

### Authorship and Publishing

- [Project Rachel: Can an AI Become a Scholarly Author?](http://arxiv.org/pdf/2511.14819), (arXiv 2511.14819, 2025) — Discuss how AI scientists can publish in their own name.

### Practical Tools
- **[SecureDNA](https://securedna.org/)** — DNA synthesis screening to prevent biosecurity threats.
- **[Guardrails AI](https://github.com/guardrails-ai/guardrails)** — Validate, structure, and control LLM outputs. Adaptable to scientific claims.
- **[FactScore](https://github.com/shmsw25/FActScore)** — Fine-grained atomic fact verification for LLM outputs.

## Domain: Drug Discovery & Chemistry

### Toolkits & Platforms
- **[RDKit](https://www.rdkit.org/)** — Industry-standard open-source cheminformatics. BSD license.
- **[DeepChem](https://deepchem.io/)** — Deep learning for drug discovery, materials science, quantum chemistry. TF/PyTorch/JAX. 6.5K+ ⭐. MIT.
- **[TorchDrug](https://torchdrug.ai/)** — GPU-accelerated graph-based molecular ML platform.
- **[DGL-LifeSci](https://lifesci.dgl.ai/)** — Life science applications on deep graph library.
- **[Open Babel](http://openbabel.org/)** — Chemical file format conversion and molecular toolkit.

### Molecular Generation & Docking
- **[DiffDock](https://github.com/gcorso/DiffDock)** (MIT, 2022) — Diffusion-based molecular docking. 38% top-1 success (PDBBind).
- **[REINVENT 4](https://github.com/MolecularAI/REINVENT4)** (AstraZeneca) — De novo drug design via RL with scaffold-hopping. Apache 2.0.
- **[MoleculeSTM](https://github.com/chao1224/MoleculeSTM)** — Multi-modal molecular understanding (SMILES + graph + text).
- **[AutoDock Vina](https://vina.scripps.edu/)** — Fast, widely-used molecular docking. Apache 2.0.
- **[Uni-Mol](https://github.com/dptech-corp/Uni-Mol)** — 3D molecular pretraining framework.

### Retrosynthesis & Reactions
- **[AiZynthFinder](https://github.com/MolecularAI/AiZynthFinder)** (AstraZeneca) — Template-based retrosynthetic planning via MCTS.
- **[RXN for Chemistry](https://rxn.res.ibm.com/)** (IBM) — Transformer-based chemical reaction prediction.
- **[ASKCOS](https://askcos.mit.edu/)** — MIT's retrosynthesis and pathway planning platform.

### Chemistry Agents
- **[ChemCrow](https://github.com/ur-whitelab/chemcrow-public)** — LLM + 18 chemistry tools.
- **[Coscientist](https://www.nature.com/articles/s41586-023-06792-0)** — LLM with web search + code + robotic lab control.

## Domain: Materials Science

- **[MACE](https://github.com/ACEsuit/mace)** — Higher-order equivariant message passing for interatomic potentials. SOTA accuracy.
- **[CHGNet](https://github.com/CederGroupHub/chgnet)** — Universal ML potential trained on Materials Project (1.58M structures). Charge-informed.
- **[M3GNet](https://github.com/materialsvirtuallab/m3gnet)** — Universal graph neural network potential for the periodic table.
- **[Matbench Discovery](https://matbench-discovery.materialsproject.org/)** (2024) — Benchmarks universal potentials on real materials discovery tasks.
- **[Pymatgen](https://pymatgen.org/)** — Comprehensive Python materials analysis library. Core of Materials Project.
- **[JARVIS](https://github.com/usnistgov/jarvis)** (NIST) — DFT/ML/FF calculations for ~80K materials + ALIGNN neural network.
- **[Materials Project API](https://api.materialsproject.org/)** — 150K+ computed materials with REST API (mp-api).
- **[CDVAE](https://github.com/MinkaiXu/CDVAE)** — Crystal Diffusion VAE for periodic materials generation. (NeurIPS 2022)
- **[GNoME](https://deepmind.google/discover/blog/millions-of-new-materials-discovered-with-deep-learning/)** (DeepMind, Nature 2023) — Graph network predicting 2.2M stable crystals.
- **[MatSci-NLP](https://github.com/MatSciNLP/MatSci-NLP)** — NLP benchmarks for materials science.

## Domain: Genomics & Biology

### Protein Structure & Language Models
- **[AlphaFold 2/3](https://github.com/google-deepmind/alphafold)** — Near-experimental protein structure prediction. 214M structures in AF Database. AF3 extends to DNA/RNA/ligands; source released Feb 2025. 13K+ ⭐.
- **[OpenFold 3](https://github.com/aqlaboratory/openfold-3)** (Columbia) — Fully open-source AlphaFold3 reproduction. Apache 2.0.
- **[Protenix](https://github.com/bytedance/Protenix)** (ByteDance) — Open-source biomolecular structure prediction + PXDesign for de novo protein-binder design (20–73% experimental success rates).
- **[ESM-2](https://github.com/facebookresearch/esm)** (Meta AI) — Protein language model (up to 15B params). Structure prediction from single sequences, ~60× faster than AF2.
- **[ESM Cambrian](https://huggingface.co/EvolutionaryScale/esmc-600m-2024-12)** — Next-gen ESM with major speedups, scales to 6B.
- **[ESMFold](https://esmatlas.com/resources)** — Single-sequence protein folding in HF Transformers.
- **[Boltz-1](https://github.com/jwohlwend/boltz)** — Open-source biomolecular structure prediction. MIT license.
- **[Chai-1](https://github.com/chaidiscovery/chai-lab)** — Multi-purpose molecular structure prediction.
- **[RFDiffusion](https://github.com/RosettaCommons/RFdiffusion)** (Baker Lab) — Protein design via diffusion models.

### Genomic Foundation Models
- **[Evo 2](https://arcinstitute.org/manuscripts/evo)** (Arc Institute) — 40B-parameter genomic model trained on 9.3T DNA bases with 1M token context. Covers all domains of life.
- **[Enformer](https://github.com/deepmind/deepmind-research/tree/master/enformer)** (DeepMind) — Predicts gene expression from DNA sequence, integrating long-range interactions up to 100kb.
- **[Nucleotide Transformer](https://github.com/xbgo/NucleotideTransformer)** (InstaDeep/NVIDIA) — Foundation models for genomics. Up to 2.5B params.
- **[HyenaDNA](https://github.com/HazyResearch/hyena-dna)** (Stanford) — Long-range genomic sequence modelling at single-nucleotide resolution.
- **[DNABERT-2](https://github.com/MAGICS-LAB/DNABERT_2)** — Multi-species genome foundation model.

### Single-Cell & Omics
- **[scvi-tools](https://scvi-tools.org/)** — Deep learning for single-cell omics (scVI, scANVI, totalVI, MultiVI, etc.).
- **[scGPT](https://github.com/bowang-lab/scGPT)** — Foundation model for single-cell biology.
- **[Geneformer](https://huggingface.co/ctheodoris/Geneformer)** (Christina Theodoris) — Transformer pretrained on 30M single-cell transcriptomes.

## Domain: Climate & Earth Sciences

- **[GraphCast](https://github.com/google-deepmind/graphcast)** (DeepMind, Science 2023) — 10-day weather in <1 min at 0.25° resolution. Outperforms ECMWF HRES on 90% of targets.
- **[Aurora](https://arxiv.org/abs/2405.13063)** (Microsoft, 2025) — 1.3B-param atmospheric model: weather + chemistry + air quality.
- **[Prithvi WxC](https://huggingface.co/ibm-nasa-geospatial/Prithvi-WxC)** (IBM/NASA) — 2.3B-param open foundation model for weather & climate.
- **[FourCastNet](https://github.com/NVlabs/FourCastNet)** (NVIDIA) — Fourier neural operator for global weather forecasting.
- **[Pangu-Weather](https://github.com/198808xc/Pangu-Weather)** (Huawei, Nature 2023) — 3D neural weather model.
- **[ClimaX](https://github.com/microsoft/ClimaX)** (Microsoft) — Foundation model for weather & climate.
- **[WeatherBench 2](https://github.com/google-research/weatherbench2)** (Google Research/ECMWF) — Standard evaluation framework for data-driven weather models.
- **[Climate Change AI](https://www.climatechange.ai/)** — Community catalysing impactful work at the intersection of climate change and ML.

## Domain: Physics & Mathematics

- **[PySR](https://github.com/MilesCranmer/PySR)** (Miles Cranmer) — Symbolic regression discovering interpretable scientific equations via multi-population evolutionary algorithms.
- **[LaSR](https://arxiv.org/abs/2312.01633)** — LLM-guided concept evolution for symbolic regression, overcoming exploration bottlenecks in PySR.
- **[LeanDojo](https://leandojo.org/)** — End-to-end framework for AI theorem proving in Lean 4: repo tracing, retrieval-augmented agents, HF fine-tuning.
- **[AlphaProof](https://deepmind.google/technologies/alphaproof/)** (DeepMind) — IMO-level mathematical reasoning system.
- **[AlphaGeometry 2](https://deepmind.google/discover/blog/alphageometry-an-olympiad-level-ai-system-for-geometry/)** (DeepMind) — Olympiad geometry theorem prover.
- **[FunSearch](https://www.nature.com/articles/s41586-023-06924-6)** (DeepMind, Nature 2024) — LLM + evaluator for mathematical program search.
- **[DeepXDE](https://deepxde.readthedocs.io/)** — Physics-informed neural networks (PINNs) for differential equations.
- **[NeuralODE](https://github.com/rtqichen/torchdiffeq)** / **torchdiffeq** — Neural ordinary differential equations.
- **[SciML](https://sciml.ai/) / DifferentialEquations.jl** — Julia ecosystem for scientific ML and differential equation solving.
- **DeepSeek-Math-V2** — Gold-level IMO 2025, 118/120 on Putnam 2024.

## Hugging Face Models & Resources

| Model | HF Path | Domain | Notes |
|-------|---------|--------|-------|
| **ESM-2 (3B)** | `facebook/esm2_t36_3B_UR50D` | Protein | 8M–15B param variants |
| **ESMFold** | `facebook/esmfold_v1` | Protein structure | Single-sequence folding |
| **ESM Cambrian** | `EvolutionaryScale/esmc-600m-2024-12` | Protein | Next-gen, up to 6B |
| **BioGPT** | `microsoft/biogpt` | Biomedical NLP | SOTA PubMedQA |
| **SciBERT** | `allenai/scibert_scivocab_uncased` | Scientific NLP | Custom scientific vocab |
| **BioMedLM** | `stanford-crfm/BioMedLM` | Biomedical | 2.7B params |
| **Galactica (6.7B)** | `facebook/galactica-6.7b` | General science | 125M–120B variants |
| **ChemBERTa** | `seyonec/ChemBERTa-zinc-base-v1` | Molecular | SMILES-trained |
| **Prithvi WxC** | `ibm-nasa-geospatial/Prithvi-WxC` | Weather/Climate | 2.3B params |
| **Geneformer** | `ctheodoris/Geneformer` | Single-cell | 30M transcriptomes |

## Agent Frameworks (General-Purpose)
Not science-specific, but widely used to build scientific agent systems.

- **[LangChain](https://github.com/langchain-ai/langchain)** — Foundation for most scientific LLM agents. 80K+ ⭐.
- **[LangGraph](https://github.com/langchain-ai/langgraph)** — Stateful, multi-actor agent orchestration built on LangChain.
- **[AutoGen / AG2](https://github.com/microsoft/autogen)** (Microsoft) — Multi-agent conversation framework. 40K+ ⭐.
- **[CrewAI](https://github.com/crewAIInc/crewAI)** — Role-playing multi-agent framework. 25K+ ⭐.
- **[Semantic Kernel](https://github.com/microsoft/semantic-kernel)** (Microsoft) — Enterprise-grade AI orchestration.
- **[Haystack](https://github.com/deepset-ai/haystack)** (deepset) — End-to-end NLP/RAG framework.
- **[DSPy](https://github.com/stanfordnlp/dspy)** (Stanford) — Programming (not prompting) LM pipelines.

## Meta-Resources & Awesome Lists

- **[Awesome-LLM-Scientific-Discovery](https://github.com/HKUST-KnowComp/Awesome-LLM-Scientific-Discovery)** (HKUST) — LLMs across all stages of the scientific method.
- **[awesome-ai-for-science](https://github.com/ai-boost/awesome-ai-for-science)** — 100+ AI-for-science resources across domains.
- **[Awesome Self-Driving Labs](https://github.com/AccelerationConsortium/awesome-self-driving-labs)** — Comprehensive autonomous experimentation directory.
- **[LLMs-in-science](https://github.com/ur-whitelab/LLMs-in-science)** (White Lab) — Living bibliography of LLM scientific agents.
- **[awesome-AI-for-drug-discovery](https://github.com/kexinhuang12345/awesome-AI-for-drug-discovery)** — AI drug discovery resources.
- **[awesome-protein-representation-learning](https://github.com/yangkevin2/awesome-protein-representation-learning)** — Protein ML resources.
- **[Awesome-Biomolecule-Generative-Models](https://github.com/chao1224/Awesome-Biomolecule-Generative-Models)** — Generative models for biomolecules.
- **[LangChain for Life Sciences and Healthcare](https://www.oreilly.com/library/view/langchain-for-life/9781098167375/)** (2025) — O'Reilly book on building chemistry agents, AlphaFold integration, multi-agent research teams.

## Contributing
See `CONTRIBUTING.md`.
