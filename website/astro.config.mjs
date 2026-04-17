import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://aleberriz.com',
  integrations: [mdx(), tailwind({ applyBaseStyles: true })],
});
