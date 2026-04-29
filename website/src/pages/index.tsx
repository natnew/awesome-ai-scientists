import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

import styles from './index.module.css';

const repoBase = 'https://github.com/natnew/awesome-ai-scientists';

const readmeSection = (anchor: string) => `${repoBase}#${anchor}`;

const linkProps = (href: string) =>
  href.startsWith('http') ? {href} : {to: href};

const quickJumps = [
  {
    title: 'Foundations',
    description: 'Landmark systems and broad surveys.',
    href: readmeSection('foundational-papers--systems'),
  },
  {
    title: 'Workflow',
    description: 'Literature, planning, tool use, and evaluation.',
    href: '/docs/workflows',
  },
  {
    title: 'Domains',
    description: 'Chemistry, materials, biology, climate, and physics.',
    href: '/docs/domains',
  },
  {
    title: 'Full README',
    description: 'Open the complete awesome list on GitHub.',
    href: repoBase,
  },
];

const resourceTypes = [
  {
    label: 'Papers',
    title: 'Foundations & surveys',
    description: 'Landmark systems, project papers, and field overviews.',
    href: readmeSection('foundational-papers--systems'),
  },
  {
    label: 'Tools',
    title: 'Literature tools',
    description: 'RAG, search, metadata APIs, and scientific language models.',
    href: readmeSection('literature-intelligence--knowledge-extraction'),
  },
  {
    label: 'Tools',
    title: 'Planning & automation',
    description: 'Experiment design, optimization, and lab automation.',
    href: readmeSection('experiment-planning--design'),
  },
  {
    label: 'Benchmarks',
    title: 'Evaluation sets',
    description: 'Benchmarks for reasoning, coding, and agent performance.',
    href: readmeSection('benchmarks--evaluation'),
  },
  {
    label: 'Datasets',
    title: 'Scientific datasets',
    description: 'Core datasets for evaluation and training.',
    href: readmeSection('datasets-for-scientific-ai'),
  },
  {
    label: 'Models',
    title: 'Models & checkpoints',
    description: 'Hugging Face resources and domain-specific model entries.',
    href: readmeSection('hugging-face-models--resources'),
  },
  {
    label: 'Frameworks',
    title: 'Agent frameworks',
    description: 'General-purpose orchestration frameworks used by builders.',
    href: readmeSection('agent-frameworks-general-purpose'),
  },
  {
    label: 'Meta',
    title: 'More lists',
    description: 'Adjacent awesome lists and broader resource hubs.',
    href: readmeSection('meta-resources--awesome-lists'),
  },
];

const workflows = [
  {
    label: 'Review',
    title: 'Literature review',
    description: 'Search, retrieval, synthesis, and scientific context.',
    href: readmeSection('literature-intelligence--knowledge-extraction'),
  },
  {
    label: 'Ideation',
    title: 'Hypothesis generation',
    description: 'Systems for novelty, ideation, and research framing.',
    href: readmeSection('hypothesis-generation--ideation'),
  },
  {
    label: 'Planning',
    title: 'Experiment planning',
    description: 'Optimization, experimental design, and decision loops.',
    href: readmeSection('experiment-planning--design'),
  },
  {
    label: 'Execution',
    title: 'Tool use',
    description: 'Lab tooling, APIs, and systems that act through tools.',
    href: readmeSection('tool-use--lab-automation'),
  },
  {
    label: 'Agents',
    title: 'Multi-agent systems',
    description: 'Debate, coordination, and specialist-agent architectures.',
    href: readmeSection('multi-agent-architectures-for-science'),
  },
  {
    label: 'Evaluation',
    title: 'Evaluation',
    description: 'Benchmarks, datasets, and agent capability measurement.',
    href: readmeSection('benchmarks--evaluation'),
  },
  {
    label: 'Reporting',
    title: 'Communication',
    description: 'Writing, reporting, figures, and manuscript tooling.',
    href: readmeSection('scientific-communication--reporting'),
  },
  {
    label: 'Safety',
    title: 'Safety & governance',
    description: 'Dual-use, policy, validation, and responsible AI resources.',
    href: readmeSection('ethics-safety--responsible-ai-for-science'),
  },
];

const personas = [
  {
    title: 'New to AI Scientist systems',
    description: 'Start with the flagship systems and the broad surveys.',
    href: readmeSection('foundational-papers--systems'),
  },
  {
    title: 'Builders',
    description: 'Jump to frameworks first, then move into tool use and models.',
    href: readmeSection('agent-frameworks-general-purpose'),
  },
  {
    title: 'Researchers',
    description: 'Open the benchmarks, datasets, and domain tracks.',
    href: readmeSection('benchmarks--evaluation'),
  },
];

const startCards = [
  {
    eyebrow: 'New here',
    title: 'Start Here',
    description: 'Entry points for new readers, builders, and researchers.',
    href: '/docs/start-here',
  },
  {
    eyebrow: 'By stage',
    title: 'Workflows',
    description:
      'The six lifecycle stages — literature, hypothesis, planning, tool use, evaluation, communication.',
    href: '/docs/workflows',
  },
  {
    eyebrow: 'By field',
    title: 'Domains',
    description:
      'Chemistry, materials, biology, climate, and physics tracks across the awesome list.',
    href: '/docs/domains',
  },
];

const highlights = [
  {
    label: 'Foundations',
    title: 'The AI Scientist v2',
    description: 'A flagship end-to-end system entry in the current list.',
    href: 'https://sakana.ai/ai-scientist-v2/',
  },
  {
    label: 'Literature',
    title: 'PaperQA2',
    description: 'A strong starting point for literature-grounded workflows.',
    href: 'https://github.com/Future-House/paper-qa',
  },
  {
    label: 'Planning',
    title: 'BayBE',
    description: 'Bayesian optimization tooling for real experimental work.',
    href: 'https://github.com/emdgroup/baybe',
  },
  {
    label: 'Evaluation',
    title: 'ScienceAgentBench',
    description: 'A benchmark built around real scientific workflows.',
    href: 'https://github.com/OSU-NLP-Group/ScienceAgentBench',
  },
  {
    label: 'Biology',
    title: 'AlphaFold 2/3',
    description: 'A central biology entry with broad downstream relevance.',
    href: 'https://github.com/google-deepmind/alphafold',
  },
  {
    label: 'Frameworks',
    title: 'LangGraph',
    description: 'A common orchestration layer for stateful agent systems.',
    href: 'https://github.com/langchain-ai/langgraph',
  },
];

export default function Home(): JSX.Element {
  return (
    <Layout
      title="Navigation layer"
      description="Fast navigation for the Awesome AI Scientists awesome list."
    >
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>Awesome list navigation</p>
            <h1>awesome-ai-scientists</h1>
            <p className={styles.heroLead}>
              A curated collection of resources for building &ldquo;AI Scientist&rdquo; systems
              &mdash; AI that assists scientific discovery across the full research lifecycle.
            </p>
            <p className={styles.heroLead}>
              We map the tools, papers, datasets, frameworks, and workflows that help machines
              (and the humans who build them) do real science.
            </p>
            <div className={styles.heroActions}>
              <Link className="button button--primary button--lg" to="/docs/start-here">
                Start here
              </Link>
              <Link className="button button--secondary button--lg" href={repoBase}>
                Explore the list
              </Link>
              <Link className="button button--secondary button--lg" to="/docs/highlights">
                View highlights
              </Link>
            </div>
          </div>
          <div className={styles.heroPanel}>
            <p className={styles.panelLabel}>Quick jumps</p>
            <div className={styles.jumpGrid}>
              {quickJumps.map((item) => (
                <Link
                  key={item.title}
                  className={styles.jumpCard}
                  {...linkProps(item.href)}
                >
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <p className={styles.sectionLabel}>Start exploring</p>
            <h2>Three entry points into the navigation layer.</h2>
          </div>
          <div className={styles.startCards}>
            {startCards.map((item) => (
              <Link key={item.title} className={styles.startCard} to={item.href}>
                <p className={styles.cardEyebrow}>{item.eyebrow}</p>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <p className={styles.sectionLabel}>Browse by resource type</p>
            <h2>Open the right part of the list without scanning the whole README.</h2>
          </div>
          <div className={styles.cardGrid}>
            {resourceTypes.map((item) => (
              <Link key={item.title} className={styles.linkCard} {...linkProps(item.href)}>
                <p className={styles.cardEyebrow}>{item.label}</p>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <p className={styles.sectionLabel}>Browse by workflow or capability</p>
            <h2>Navigate the list the same way scientific agent systems are built and evaluated.</h2>
          </div>
          <div className={styles.cardGrid}>
            {workflows.map((item) => (
              <Link key={item.title} className={styles.linkCard} {...linkProps(item.href)}>
                <p className={styles.cardEyebrow}>{item.label}</p>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <p className={styles.sectionLabel}>Start here</p>
            <h2>Three fast entry points, depending on what you need from the list.</h2>
          </div>
          <div className={styles.personaGrid}>
            {personas.map((item) => (
              <Link key={item.title} className={styles.linkCard} {...linkProps(item.href)}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <p className={styles.sectionLabel}>Current highlights</p>
            <h2>A quick scan of standout entries pulled from the current list.</h2>
          </div>
          <div className={styles.highlightGrid}>
            {highlights.map((item) => (
              <Link key={item.title} className={styles.highlightCard} href={item.href}>
                <p className={styles.cardEyebrow}>{item.label}</p>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className={styles.readmeStrip}>
          <div>
            <p className={styles.sectionLabel}>Full awesome list</p>
            <h2>Open the complete README when you want the full catalog.</h2>
          </div>
          <div className={styles.heroActions}>
            <Link className="button button--primary button--lg" href={repoBase}>
              Open the README
            </Link>
            <Link className="button button--secondary button--lg" to="/docs/explore">
              Use the docs index
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}