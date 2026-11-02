#!/usr/bin/env node
// Create a new log with front matter filled in.
//
//   npm run new -- "Paged attention in 200 lines"                 # log in 'models'
//   npm run new -- "Paged attention in 200 lines" --layer serving
//   npm run new -- "Notes on RoPE" --layer models --mdx
//   npm run new -- "CUDA from zero: tiled matmul" --layer kernels --series "CUDA from zero" --part 3 --code kernels/matmul
//
// Flags:
//   --layer <id>     the log's tag: any id in src/data/layers.ts (add one with `npm run new-tag`)
//   --mdx            create .mdx (to use components and <Snippet>) instead of .md
//   --code <path>    folder under labs/ with the code for this log (creates it if missing; implies --mdx)
//   --series <name>  name of a multi-part series
//   --part <n>       part number within the series
//   --publish        start with draft: false

import { existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const { LAYERS: TAGS } = await import('../src/data/layers.ts');
const LAYERS = TAGS.map((t) => t.id);
const VALUE_FLAGS = ['--layer', '--code', '--series', '--part'];
const args = process.argv.slice(2);
const flag = (name) => args.includes(name);
const option = (name) => {
  const i = args.indexOf(name);
  return i >= 0 ? args[i + 1] : undefined;
};

const title = args.find((a, i) => !a.startsWith('--') && !VALUE_FLAGS.includes(args[i - 1]));
if (!title) {
  console.error(
    'Usage: npm run new -- "Log title" [--layer <id>] [--mdx] [--code <labs path>] [--series <name>] [--part <n>] [--publish]',
  );
  process.exit(1);
}

const layer = option('--layer') ?? 'models';
if (!LAYERS.includes(layer)) {
  console.error(`Unknown tag "${layer}". Use one of: ${LAYERS.join(', ')}, or add one with: npm run new-tag -- <id>`);
  process.exit(1);
}

const code = option('--code')?.replace(/^\/?labs\//, '').replace(/^\/|\/$/g, '');
const series = option('--series');
const part = option('--part') ? Number(option('--part')) : undefined;
if (part !== undefined && !(Number.isInteger(part) && part > 0)) {
  console.error(`--part must be a positive integer, got "${option('--part')}"`);
  process.exit(1);
}

const slug = title
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/(^-|-$)/g, '');
const ext = flag('--mdx') || code ? 'mdx' : 'md';
const dir = join('src', 'content', 'logs');
const file = join(dir, `${slug}.${ext}`);

if (existsSync(file)) {
  console.error(`${file} already exists.`);
  process.exit(1);
}

const today = new Date().toISOString().slice(0, 10);
const extra = [
  code && `code: ${code}`,
  series && `series: ${JSON.stringify(series)}`,
  part && `part: ${part}`,
]
  .filter(Boolean)
  .map((l) => `${l}\n`)
  .join('');

const imports =
  ext === 'mdx'
    ? `import Callout from '../../components/Callout.astro';\nimport Snippet from '../../components/Snippet.astro';\n\n`
    : '';

const example = code
  ? `{/* Embed code from labs/${code}/ like this (see labs/README.md for region markers):\n    <Snippet file="${code}/main.py" region="example" /> */}\n\n`
  : '';

const body = `---
title: ${JSON.stringify(title)}
description: ""
pubDate: ${today}
layer: ${layer}
${extra}draft: ${flag('--publish') ? 'false' : 'true'}
---

${imports}${example}Start writing.
`;

mkdirSync(dir, { recursive: true });
writeFileSync(file, body);
console.log(`Created ${file}`);

if (code) {
  const labDir = join('labs', code);
  if (!existsSync(labDir)) {
    mkdirSync(labDir, { recursive: true });
    writeFileSync(join(labDir, 'README.md'), `# ${code.split('/').pop()}\n\nCode for the log *${title}*.\n`);
    console.log(`Created ${labDir}/`);
  }
}
