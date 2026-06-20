import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://angg4ra.my.id',

  integrations: [sitemap()],

  vite: {
    plugins: [tailwindcss()],
  },

  redirects: {
    '/': '/id/',
  },

  i18n: {
    defaultLocale: 'id',
    locales: ['id', 'en'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
});
