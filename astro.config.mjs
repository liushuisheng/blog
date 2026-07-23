import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://lss.is-a.dev',
  base: '/',
  output: 'static',
  integrations: [sitemap()],
  build: {
    format: 'directory'
  }
});
