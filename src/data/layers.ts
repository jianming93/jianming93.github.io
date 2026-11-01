// The blog's tags. Each one is a layer of the stack, listed in the order of the journey.
// Every post carries exactly one (the `layer:` field in its front matter) and shows it
// as a hashtag: #foundations, #models, ...
//
// To add a tag, run:   npm run new-tag -- <id> --name "Display name" --blurb "One line about it"
// (or add an entry below by hand). Everything else follows from this list: the Tags page,
// the tag pages, the filter chips, the colours, the allowed `layer:` values and `npm run new`.
//
//   id     lowercase letters, digits and hyphens. It is the hashtag and the URL: /tags/<id>/
//   name   shown in headings and descriptions
//   blurb  one line shown on the Tags page and at the top of the tag page
//   hue    0-360, the tag's colour on the colour wheel (light and dark shades are derived)

const TAGS = [
  {
    id: 'foundations',
    name: 'Foundations',
    blurb: 'Linear algebra, probability, optimisation and backprop: the maths everything else leans on.',
    hue: 255,
  },
  {
    id: 'models',
    name: 'Models',
    blurb: 'Transformers, attention variants, mixture-of-experts, diffusion and world models.',
    hue: 180,
  },
  {
    id: 'training',
    name: 'Training',
    blurb: 'Pretraining, scaling, mixed precision, distributed parallelism and post-training.',
    hue: 80,
  },
  {
    id: 'kernels',
    name: 'GPU & kernels',
    blurb: 'The memory hierarchy, CUDA, Triton, profiling and writing fast kernels.',
    hue: 20,
  },
  {
    id: 'serving',
    name: 'Serving',
    blurb: 'KV caches, batching, paged attention, quantisation and inference engines.',
    hue: 295,
  },
] as const;

export type LayerId = (typeof TAGS)[number]['id'];

/** Each tag with its CSS colour variable (defined by LAYER_CSS below). */
export const LAYERS = TAGS.map((t) => ({ ...t, color: `var(--layer-${t.id})` }));
export const LAYER_IDS = LAYERS.map((l) => l.id) as [LayerId, ...LayerId[]];

export function getLayer(id: LayerId) {
  const layer = LAYERS.find((l) => l.id === id);
  if (!layer) throw new Error(`Unknown tag: ${id}`);
  return layer;
}

// Colours: one hue per tag, with a darker shade for light mode and a lighter one for dark mode.
const shade = (h: number, dark: boolean) => (dark ? `oklch(0.77 0.11 ${h})` : `oklch(0.54 0.14 ${h})`);
const vars = (dark: boolean) => TAGS.map((t) => `--layer-${t.id}:${shade(t.hue, dark)};`).join('');

/** CSS custom properties for every tag colour. Injected into every page's <head> by BaseLayout. */
export const LAYER_CSS =
  `:root,:root[data-theme='light']{${vars(false)}}` +
  `:root[data-theme='dark']{${vars(true)}}` +
  `@media (prefers-color-scheme: dark){:root:not([data-theme='light']){${vars(true)}}}`;
