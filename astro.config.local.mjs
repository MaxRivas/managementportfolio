import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';

export default defineConfig({
  site: 'http://localhost:4321',
  integrations: [
    tailwind(),
    sitemap(),
    robotsTxt()
  ]
});