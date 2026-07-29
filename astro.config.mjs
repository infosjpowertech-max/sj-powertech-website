import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://www.sjpowertech.in',
  output: 'static',
  integrations: [tailwind(), sitemap()],
});
