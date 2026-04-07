import type {Config} from '@docusaurus/types';

const config: Config = {
  title: 'Awesome AI Scientists',
  tagline: 'Fast navigation for the AI Scientist awesome list.',
  favicon: 'img/logo.svg',
  url: 'https://natnew.github.io',
  baseUrl: '/awesome-ai-scientists/',
  organizationName: 'natnew',
  projectName: 'awesome-ai-scientists',
  onBrokenLinks: 'throw',
  trailingSlash: false,
  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
  themes: ['@docusaurus/theme-mermaid'],
  plugins: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: 'filename',
        indexDocs: true,
        indexBlog: false,
        indexPages: false,
        docsRouteBasePath: 'docs',
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
        searchBarShortcut: true,
        searchBarPosition: 'right',
        searchResultLimits: 10,
        searchResultContextMaxLength: 80,
        ignoreFiles: ['/404.html'],
      },
    ],
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  stylesheets: [
    {
      href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=IBM+Plex+Sans:wght@400;500;600;700&family=Space+Grotesk:wght@500;700&display=swap',
      type: 'text/css',
    },
  ],
  presets: [
    [
      'classic',
      {
        docs: {
          path: 'docs',
          routeBasePath: 'docs',
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/natnew/awesome-ai-scientists/tree/main/website/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],
  themeConfig: {
    image: 'img/social-card.svg',
    navbar: {
      title: 'Awesome AI Scientists',
      logo: {
        alt: 'Awesome AI Scientists',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: '/docs/explore',
          position: 'left',
          label: 'Explore',
        },
        {
          to: '/docs/resource-types',
          label: 'Resource Types',
          position: 'left',
        },
        {
          to: '/docs/workflows',
          label: 'Workflow',
          position: 'left',
        },
        {
          to: '/docs/domains',
          label: 'Domains',
          position: 'left',
        },
        {
          type: 'search',
          position: 'right',
        },
        {
          href: 'https://github.com/natnew/awesome-ai-scientists',
          label: 'README',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Browse',
          items: [
            {
              label: 'Explore',
              to: '/docs/explore',
            },
            {
              label: 'Resource Types',
              to: '/docs/resource-types',
            },
            {
              label: 'Workflow',
              to: '/docs/workflows',
            },
            {
              label: 'Domains',
              to: '/docs/domains',
            },
          ],
        },
        {
          title: 'Start',
          items: [
            {
              label: 'Start Here',
              to: '/docs/start-here',
            },
            {
              label: 'Highlights',
              to: '/docs/highlights',
            },
            {
              label: 'Full README',
              href: 'https://github.com/natnew/awesome-ai-scientists',
            },
          ],
        },
        {
          title: 'Site',
          items: [
            {
              label: 'Site Development',
              to: '/docs/site-development',
            },
            {
              label: 'GitHub Pages Workflow',
              href: 'https://github.com/natnew/awesome-ai-scientists/blob/main/.github/workflows/deploy-docs.yml',
            },
          ],
        },
      ],
      copyright: 'Built as a navigation layer for the Awesome AI Scientists README.',
    },
    docs: {
      sidebar: {
        hideable: false,
        autoCollapseCategories: false,
      },
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 4,
    },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
  },
};

export default config;