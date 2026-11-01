// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import expressiveCode from 'astro-expressive-code';
import { unified } from '@astrojs/markdown-remark';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import tailwindcss from '@tailwindcss/vite';

// ---------------------------------------------------------------------------
// Where the site lives.
//
// The repo is `jianming93/jianming93.github.io`, a GitHub *user* site, so it is
// served from the root of https://jianming93.github.io/ and BASE is '/'.
// With a custom domain, set SITE to it and keep BASE as '/'.
// ---------------------------------------------------------------------------
const SITE = 'https://jianming93.github.io';
const BASE = '/';

export default defineConfig({
  site: SITE,
  base: BASE,
  trailingSlash: 'ignore',

  // Old URLs that should keep working: the portfolio's /blogs stub, and /layers
  // (tags used to be called layers).
  redirects: {
    '/blogs': '/posts',
    '/layers': '/tags',
    '/layers/[layer]': '/tags/[layer]',
  },

  vite: {
    // Tailwind v4 compiles Basecoat's component CSS (see src/styles/ui.css).
    plugins: [tailwindcss()],
  },

  markdown: {
    // remark/rehype pipeline, so math ($...$, $$...$$) is rendered with KaTeX.
    // .mdx files inherit this.
    processor: unified({
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex],
    }),
  },

  integrations: [
    // Expressive Code must come before mdx(). Its options are in ec.config.mjs.
    expressiveCode(),
    mdx(),
    sitemap(),
  ],
});
