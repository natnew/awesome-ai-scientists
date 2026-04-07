import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    'explore',
    'resource-types',
    'workflows',
    'domains',
    'start-here',
    'highlights',
    {
      type: 'category',
      label: 'Site',
      collapsed: true,
      items: ['site-development'],
    },
  ],
};

export default sidebars;