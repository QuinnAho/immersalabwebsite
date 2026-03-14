import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://immersalab.dev',
  integrations: [mdx(), sitemap()],
  output: 'static',

  optimizeDeps: {
    noDiscovery: true,
  },

  vite: {
    cacheDir: '.vite',
  },

  adapter: cloudflare(),
});