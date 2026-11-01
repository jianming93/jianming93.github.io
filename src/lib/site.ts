import { getCollection, type CollectionEntry } from 'astro:content';
import type { LayerId } from '../data/layers';

export const SITE_TITLE = 'Jian Ming Personal Website';
export const SITE_DESCRIPTION =
  'Learning the LLM and world-model stack in public, from the maths down to GPU kernels and out to serving.';
export const AUTHOR = 'Ng Jian Ming';
/** Default social-preview image (public/og-default.png, 1200x630). */
export const OG_IMAGE = '/og-default.png';
export const GITHUB_URL = 'https://github.com/jianming93';
export const LINKEDIN_URL = 'https://www.linkedin.com/in/ngjianming';
/** What the site is built with, shown as "Powered by" in the hero and footer. */
export const STACK = [
  { name: 'Astro', href: 'https://astro.build' },
  { name: 'MDX', href: 'https://mdxjs.com' },
  { name: 'Expressive Code', href: 'https://expressive-code.com' },
  { name: 'KaTeX', href: 'https://katex.org' },
  { name: 'Tailwind CSS', href: 'https://tailwindcss.com' },
  { name: 'Basecoat', href: 'https://basecoatui.com' },
  { name: 'TypeScript', href: 'https://www.typescriptlang.org' },
] as const;

/** This site's repository, which also holds the code under labs/. */
export const REPO_URL = `${GITHUB_URL}/jianming93.github.io`;

/** GitHub link to a file under labs/, optionally to a line range. */
export function labsUrl(file: string, startLine?: number, endLine?: number) {
  const clean = file.replace(/^\/?labs\//, '').replace(/^\//, '');
  const anchor = startLine ? `#L${startLine}${endLine && endLine !== startLine ? `-L${endLine}` : ''}` : '';
  return `${REPO_URL}/blob/main/labs/${clean}${anchor}`;
}

/** Resolve a post's `code` field: a path under labs/ or a full URL. */
export function codeUrl(code: string) {
  return /^https?:\/\//.test(code) ? code : `${REPO_URL}/tree/main/labs/${code.replace(/^\/?labs\//, '').replace(/^\/|\/$/g, '')}`;
}

export type Post = CollectionEntry<'posts'>;
export type Project = CollectionEntry<'projects'>;
export type ExperienceEntry = CollectionEntry<'experience'>;

/** Prefix a site-relative path with the configured `base`, so links work on GitHub Pages sub-paths. */
export function url(path = '/'): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${base}${clean}`;
}

export function postUrl(post: Post) {
  return url(`/posts/${post.id}/`);
}

/** Published posts, newest first. Drafts are included only in `astro dev`. */
export async function getPosts(filter?: (p: Post) => boolean): Promise<Post[]> {
  const posts = await getCollection('posts', ({ data }) => import.meta.env.DEV || !data.draft);
  return posts
    .filter((p) => (filter ? filter(p) : true))
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export async function getPostsByLayer(layer: LayerId) {
  return getPosts((p) => p.data.layer === layer);
}

/** All posts in a series, ordered by part (unnumbered parts last, by date). */
export async function getSeries(series: string) {
  const posts = await getPosts((p) => p.data.series === series);
  return posts.sort((a, b) => {
    const pa = a.data.part ?? Number.MAX_SAFE_INTEGER;
    const pb = b.data.part ?? Number.MAX_SAFE_INTEGER;
    return pa !== pb ? pa - pb : a.data.pubDate.valueOf() - b.data.pubDate.valueOf();
  });
}

export function formatDate(date: Date) {
  return date.toLocaleDateString('en-GB', { year: 'numeric', month: 'short', day: 'numeric' });
}

export function readingMinutes(body: string | undefined) {
  const words = (body ?? '').replace(/```[\s\S]*?```/g, ' ').split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
}

/** Published projects in display order. Drafts are included only in `astro dev`. */
export async function getProjects(): Promise<Project[]> {
  const projects = await getCollection('projects', ({ data }) => import.meta.env.DEV || !data.draft);
  return projects.sort((a, b) => a.data.order - b.data.order || a.data.title.localeCompare(b.data.title));
}

/** Work or education entries, most recent first. */
export async function getExperience(kind: ExperienceEntry['data']['kind']): Promise<ExperienceEntry[]> {
  const entries = await getCollection('experience', ({ data }) => data.kind === kind);
  return entries.sort((a, b) => b.data.start.valueOf() - a.data.start.valueOf());
}

/** "Feb 2025". Dates in front matter are UTC midnight, so format in UTC. */
export function formatMonth(date: Date) {
  return date.toLocaleDateString('en-GB', { month: 'short', year: 'numeric', timeZone: 'UTC' });
}

/** "Jun 2023 - Feb 2025", or "Feb 2025 - Present" when there is no end date. */
export function formatRange(start: Date, end?: Date) {
  return `${formatMonth(start)} - ${end ? formatMonth(end) : 'Present'}`;
}
