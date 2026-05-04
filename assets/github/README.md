# GitHub README pill buttons

Premium-looking pill CTA buttons used in the README hero section. Designed in the style of polished startup/product landing UI elements (e.g. CocoIndex's `cocoindex.io` button) — minimal, modern, refined, and not a generic shields.io badge.

## Files

Each pill ships as a matched pair of hand-authored SVGs:

| Pill | Light | Dark |
| --- | --- | --- |
| Website | `pill-website-light.svg` | `pill-website-dark.svg` |
| Contents | `pill-contents-light.svg` | `pill-contents-dark.svg` |
| Contributing | `pill-contributing-light.svg` | `pill-contributing-dark.svg` |
| Maintainers | `pill-maintainers-light.svg` | `pill-maintainers-dark.svg` |

## Design system

- **Shape:** capsule, `rx = 19.5` on a `170 × 40` viewBox
- **Border:** 1px, `#d0d7de` (light) / `#30363d` (dark) — matches GitHub Primer
- **Background:** subtle vertical gradient
  - Light: `#ffffff` → `#f6f8fa`
  - Dark: `#21262d` → `#161b22`
- **Text:** system UI stack, 13px, weight 600, slight negative tracking
  - Light: `#1f2328`
  - Dark: `#e6edf3`
- **Icon:** 16×16, Feather-style 1.6px stroke, rounded caps/joins, sits 16px from the left edge with 10px gap to the label

## Embedding (GitHub-safe HTML)

Use `<a>` + `<picture>` + `<source media="(prefers-color-scheme: dark)">` + `<img>`. GitHub honors `prefers-color-scheme` inside `<picture>` for raw asset paths.

```html
<a href="https://example.com">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="assets/github/pill-website-dark.svg">
    <img alt="Website" src="assets/github/pill-website-light.svg" height="28">
  </picture>
</a>
```

Render at `height="28"` for a crisp small size. The SVG is vector, so it stays sharp on retina.

## Adding a new pill (Docs, Discord, Demo, …)

1. Copy any existing light/dark pair as `pill-<name>-light.svg` / `pill-<name>-dark.svg`.
2. Replace the icon in the `<g transform="translate(16 12)">` group with a 16×16 Feather-style icon (stroke `1.6`, rounded caps/joins).
3. Update the `<text>` label and `aria-label` on the `<svg>`.
4. Keep the `170 × 40` viewBox and color tokens above so all pills line up visually.
5. Embed with the `<a><picture>` snippet from the previous section.
