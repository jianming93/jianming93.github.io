#!/usr/bin/env node
// Add a tag (a layer of the stack) to src/data/layers.ts.
//
//   npm run new-tag -- evals
//   npm run new-tag -- evals --name "Evals" --blurb "Benchmarks, judges and measuring what matters."
//   npm run new-tag -- evals --hue 150
//
// Flags:
//   --name <text>    display name (default: the id, capitalised)
//   --blurb <text>   one line shown on the Tags page (default: a TODO placeholder)
//   --hue <0-360>    colour on the colour wheel (default: the hue furthest from the existing tags)
//
// The tag is appended after the existing ones. Reorder entries in the file if you want it elsewhere.

import { readFileSync, writeFileSync } from 'node:fs';

const FILE = 'src/data/layers.ts';
const VALUE_FLAGS = ['--name', '--blurb', '--hue'];
const args = process.argv.slice(2);
const option = (name) => {
  const i = args.indexOf(name);
  return i >= 0 ? args[i + 1] : undefined;
};

const id = args.find((a, i) => !a.startsWith('--') && !VALUE_FLAGS.includes(args[i - 1]));
if (!id) {
  console.error('Usage: npm run new-tag -- <id> [--name "Display name"] [--blurb "One line"] [--hue 0-360]');
  process.exit(1);
}
if (!/^[a-z][a-z0-9-]*$/.test(id)) {
  console.error(`Invalid id "${id}": use lowercase letters, digits and hyphens, starting with a letter.`);
  process.exit(1);
}

const { LAYERS } = await import(`../${FILE}`);
if (LAYERS.some((l) => l.id === id)) {
  console.error(`The tag "${id}" already exists.`);
  process.exit(1);
}

// Pick the hue that is furthest from every existing one (circular distance).
const taken = LAYERS.map((l) => l.hue);
const dist = (a, b) => Math.min(Math.abs(a - b), 360 - Math.abs(a - b));
let best = 0;
let bestScore = -1;
for (let h = 0; h < 360; h += 5) {
  const score = Math.min(...taken.map((t) => dist(h, t)));
  if (score > bestScore) [best, bestScore] = [h, score];
}
const hue = option('--hue') !== undefined ? Number(option('--hue')) : best;
if (!Number.isFinite(hue) || hue < 0 || hue > 360) {
  console.error(`--hue must be a number from 0 to 360, got "${option('--hue')}"`);
  process.exit(1);
}

const name = option('--name') ?? id.charAt(0).toUpperCase() + id.slice(1).replace(/-/g, ' ');
const blurb = option('--blurb') ?? 'TODO: one line about this tag.';
const q = (s) => `'${s.replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`;

const entry = `  {
    id: ${q(id)},
    name: ${q(name)},
    blurb: ${q(blurb)},
    hue: ${hue},
  },
`;

const src = readFileSync(FILE, 'utf8');
const marker = '] as const;';
if (!src.includes(marker)) {
  console.error(`Could not find the end of the tag list in ${FILE}. Add the entry by hand.`);
  process.exit(1);
}
writeFileSync(FILE, src.replace(marker, entry + marker));

console.log(`Added #${id} to ${FILE} (hue ${hue}).`);
if (blurb.startsWith('TODO')) console.log(`Edit the blurb in ${FILE}.`);
console.log(`Use it:  npm run new -- "Post title" --layer ${id}`);
