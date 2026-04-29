---
title: Site Development
description: Build and deploy the Docusaurus navigation layer.
sidebar_position: 7
---

This site is a Docusaurus wrapper around the README. The README stays the source of truth; the site stays focused on discovery and navigation.

## Local development

```bash
cd website
npm start
```

## Production build

```bash
cd website
npm run build
```

The generated output is written to `website/build`.

## Content rules

- Keep pages short and link-heavy.
- Point readers back to real README sections when possible.
- Prefer navigation cards over long explanatory prose.

## Deployment

GitHub Pages deployment is defined in `.github/workflows/deploy-docs.yml`.

## Source files

- [website/package.json](https://github.com/natnew/awesome-ai-scientists/blob/main/website/package.json)
- [website/docusaurus.config.ts](https://github.com/natnew/awesome-ai-scientists/blob/main/website/docusaurus.config.ts)
- [deploy-docs.yml](https://github.com/natnew/awesome-ai-scientists/blob/main/.github/workflows/deploy-docs.yml)