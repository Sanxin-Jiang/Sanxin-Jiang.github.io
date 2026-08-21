import { defineConfig } from 'astro/config';

// GitHub Actions supplies these automatically during deployment.
// For local development, the defaults below are used.
export default defineConfig({
  site: process.env.SITE_URL || 'https://yourusername.github.io',
  base: process.env.BASE_PATH || '/',
  output: 'static',
  trailingSlash: 'always',
});
