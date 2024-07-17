import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightLinksValidator from 'starlight-links-validator';
import starlightUtils from '@lorenzo_lewis/starlight-utils';
import remarkAttr from 'remark-attr';
import markdoc from '@astrojs/markdoc';

export default defineConfig({
  integrations: [
    starlight({
      plugins: [
        starlightLinksValidator(),
        starlightUtils()
      ],
      title: 'My Docs',
      customCss: [
        './src/styles/custom.css'
      ],
      sidebar: [
        {
          label: 'NTW2029',
          // Don't collapse the main group by default.
          collapsed: false,
          autogenerate: { directory: 'groups', collapsed: true },
        },
      ],
      head: [
        {
          tag: 'script',
          attrs: {
            src: 'https://ncase.me/nutshell/nutshell.js',
            defer: true,
          }
        },
        {
          tag: 'script',
          attrs: {
            src: '/nutshell-config.js',
            defer: true,
          }
        }
      ]
    }),
    markdoc()
  ],
});
