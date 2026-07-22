import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://liushuisheng.github.io',
  base: '/blog',
  output: 'static',
  integrations: [sitemap()],
  build: {
    format: 'directory'
  }
});
