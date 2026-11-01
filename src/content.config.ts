import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { LAYER_IDS } from './data/layers';

// Every post is a Markdown (.md) or MDX (.mdx) file in src/content/posts/.
// The file name (without extension) becomes the URL: /posts/<file-name>/
const posts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    // The post's tag: which layer of the stack it belongs to (see src/data/layers.ts).
    layer: z.enum(LAYER_IDS),
    // Code that goes with the post: a folder under labs/ ('kernels/online-softmax')
    // or a full URL to an external repository.
    code: z.string().optional(),
    // Multi-part posts: give each part the same `series` name and a `part` number.
    // The post page then links the parts together.
    series: z.string().optional(),
    part: z.number().int().positive().optional(),
    // Drafts show up in `npm run dev` but are never published.
    draft: z.boolean().default(false),
  }),
});

// Portfolio projects: src/content/projects/<slug>.{md,mdx}  ->  /projects/<slug>/
// Images live in src/assets/projects/<slug>/ and are referenced relatively.
const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    // Link to the project's source repository.
    repo: z.url(),
    // Screenshot shown on the project card: a relative path to a file in src/assets/projects/.
    cover: image().optional(),
    // Short technology / topic labels shown on the card.
    tags: z.array(z.string()).default([]),
    // Lower numbers come first on /projects/.
    order: z.number().int().default(100),
    draft: z.boolean().default(false),
  }),
});

// Work and education history: one file per entry in src/content/experience/.
// The bullet points are the Markdown body. Leave `end` out for a current role.
const experience = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/experience' }),
  schema: z.object({
    kind: z.enum(['work', 'education']),
    org: z.string(),
    role: z.string(),
    location: z.string().optional(),
    start: z.coerce.date(),
    end: z.coerce.date().optional(),
    // Early-career roles are folded under "Earlier roles" on /experience.
    earlier: z.boolean().default(false),
  }),
});

export const collections = { posts, projects, experience };
