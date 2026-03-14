# Blueprint Health Analyzer Web Docs

This directory contains the web-based documentation for the **Blueprint Health Analyzer** Unreal Engine plugin.
It is built using [Astro](https://astro.build/).

## Prerequisites

- [Node.js](https://nodejs.org/) (`^20.19.1` or `>=22.12.0`; `.node-version` pins `22.20.0`)
- npm (comes with Node.js)

## Commands

All commands are run from the root of the project (`Web/immersalabwebsite/`), from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |

## Deployment

This site is ready for **Cloudflare Pages** as a static Astro build.

Use these Pages settings:

- **Framework preset**: `Astro`
- **Build command**: `npm run build`
- **Build output directory**: `dist`
- **Root directory**: repository root (`Web/immersalabwebsite/` if this folder is deployed standalone)

Node is pinned in `.node-version` so Cloudflare Pages uses the same major runtime the local build
was validated against.

Expected deployment flow:

1. Connect the GitHub repository to Cloudflare Pages.
2. Confirm Pages is building from the website root with `npm run build`.
3. Add the custom domain `immersalab.dev` in Cloudflare Pages.
4. Verify the deployed routes under `/blueprint-health-analyzer/`.

Notes:

- `astro.config.mjs` already sets `site` to `https://immersalab.dev`, which keeps sitemap and
  canonical metadata aligned with production.
- `public/robots.txt` and Astro sitemap output are included in the static build.
- Legacy GitHub Pages artifacts, if present locally, are not used by Cloudflare Pages.

## Project Structure

- `src/pages/` - Pages and routes
- `src/components/` - Astro components
- `src/layouts/` - Page layouts
- `public/` - Static assets (CSS, JS, images)

## Integration with Plugin

This documentation site is hosted on the web and served to plugin users via "Learn More" links in the Blueprint Health Analyzer dashboard. It allows for rich visualizations of Unreal Engine Blueprint anti-patterns and solutions.
