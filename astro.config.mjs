import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://seanelliot.dev',
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
    },
  },
});
