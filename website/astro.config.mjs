import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://aleberriz.com',
  // Astro 7 defaults to JSX whitespace rules, which drop the space between a
  // line of prose and a link that starts on the next line. Keep HTML rules.
  compressHTML: true,
  integrations: [mdx()],
  vite: {
    plugins: [tailwindcss()],
  },
});
