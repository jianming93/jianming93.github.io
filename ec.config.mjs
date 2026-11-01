// @ts-check
// Expressive Code options (syntax highlighting for Markdown fences and <Snippet>/<Code>).
// Lives here rather than in astro.config.mjs because the <Code> component needs it.
import { defineEcConfig } from 'astro-expressive-code';
import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers';
import { pluginCollapsibleSections } from '@expressive-code/plugin-collapsible-sections';

export default defineEcConfig({
  themes: ['github-light', 'github-dark-dimmed'],
  // Follow the site's light/dark toggle (data-theme on <html>).
  themeCssSelector: (theme) => `[data-theme='${theme.type}']`,
  useDarkModeMediaQuery: false,
  plugins: [pluginLineNumbers(), pluginCollapsibleSections()],
  shiki: {
    // Shiki has no CUDA/PTX grammar; borrow close relatives.
    langAlias: { cuda: 'cpp', cu: 'cpp', ptx: 'asm' },
  },
  defaultProps: {
    showLineNumbers: false,
    overridesByLang: {
      'bash,sh,shell,zsh,console': { frame: 'terminal' },
    },
  },
  styleOverrides: {
    codeFontFamily: "'JetBrains Mono Variable', ui-monospace, SFMono-Regular, Menlo, monospace",
    codeFontSize: '0.875rem',
    borderRadius: 'var(--radius)',
    // Code blocks sit on the theme's surfaces: white on the cream light theme,
    // the darker "muted" tone in dark mode. Syntax colours stay from the Shiki themes.
    borderColor: 'var(--border)',
    codeBackground: ({ theme }) => (theme.type === 'dark' ? 'var(--muted)' : 'var(--popover)'),
    frames: {
      editorTabBarBackground: ({ theme }) => (theme.type === 'dark' ? 'var(--muted)' : 'var(--popover)'),
      editorActiveTabBackground: ({ theme }) => (theme.type === 'dark' ? 'var(--muted)' : 'var(--popover)'),
      editorTabBarBorderBottomColor: 'var(--border)',
      terminalBackground: ({ theme }) => (theme.type === 'dark' ? 'var(--muted)' : 'var(--popover)'),
      terminalTitlebarBackground: ({ theme }) => (theme.type === 'dark' ? 'var(--muted)' : 'var(--popover)'),
      terminalTitlebarBorderBottomColor: 'var(--border)',
      shadowColor: 'transparent',
    },
    uiFontFamily: "'Schibsted Grotesk Variable', system-ui, sans-serif",
  },
});
