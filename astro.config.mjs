import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://marc.rohde-net.us',
  redirects: {
    '/twitter-tools': '/x-tools',
  },
});
