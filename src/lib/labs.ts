// Read source files from /labs at build time so posts can embed real code.
// Used by src/components/Snippet.astro.

const files = import.meta.glob<string>(
  '/labs/**/*.{py,pyi,cu,cuh,c,h,cc,cpp,hpp,cxx,rs,go,ts,tsx,js,mjs,jsx,sh,bash,zsh,ptx,asm,s,S,mojo,toml,yaml,yml,json,txt,md,sql,glsl,wgsl,Makefile,mk,cmake,dockerfile,Dockerfile,ini,cfg,env.example}',
  { query: '?raw', import: 'default' },
);

/** Language for Expressive Code, from the file extension. Aliases for CUDA/PTX live in astro.config.mjs. */
export function langFor(file: string): string {
  const base = file.split('/').pop() ?? file;
  if (/^(Makefile|GNUmakefile)$/.test(base)) return 'makefile';
  if (/^Dockerfile/.test(base)) return 'dockerfile';
  const ext = base.includes('.') ? base.split('.').pop()!.toLowerCase() : '';
  const map: Record<string, string> = {
    py: 'python', pyi: 'python', mojo: 'python',
    cu: 'cuda', cuh: 'cuda', c: 'c', h: 'c', cc: 'cpp', cpp: 'cpp', hpp: 'cpp', cxx: 'cpp',
    rs: 'rust', go: 'go', ts: 'ts', tsx: 'tsx', js: 'js', mjs: 'js', jsx: 'jsx',
    sh: 'bash', bash: 'bash', zsh: 'bash', ptx: 'ptx', asm: 'asm', s: 'asm',
    toml: 'toml', yaml: 'yaml', yml: 'yaml', json: 'json', txt: 'text', md: 'md',
    sql: 'sql', glsl: 'glsl', wgsl: 'wgsl', mk: 'makefile', cmake: 'cmake', ini: 'ini', cfg: 'ini',
  };
  return map[ext] ?? ext ?? 'text';
}

/** A comment line that opens a region: `# region name`, `// #region name`, `#pragma region name`, `-- region name`, … */
const REGION_START = /^\s*(?:#|\/\/|--|;+|%+|\/\*|\*|<!--)?\s*(?:pragma\s+)?#?region\b[:\s]*([\w.-]+)/;
const REGION_END = /^\s*(?:#|\/\/|--|;+|%+|\/\*|\*|<!--)?\s*(?:pragma\s+)?#?endregion\b/;

export type SnippetOptions = {
  /** Path under labs/, e.g. 'kernels/online-softmax/md_reduce.cuh'. */
  file: string;
  /** Name of a region marked in the source with `region <name>` … `endregion` comments. */
  region?: string;
  /** Fixed line range, 1-based and inclusive, e.g. '10-24' or '7'. */
  lines?: string;
};

export type Snippet = {
  code: string;
  /** 1-based line number in the source file where the snippet starts. */
  startLine: number;
  /** 1-based line number in the source file where the snippet ends. */
  endLine: number;
  lang: string;
};

export async function loadSnippet({ file, region, lines }: SnippetOptions): Promise<Snippet> {
  const key = `/labs/${file.replace(/^\/?labs\//, '').replace(/^\//, '')}`;
  const loader = files[key];
  if (!loader) {
    const known = Object.keys(files).map((k) => k.replace(/^\/labs\//, '')).sort();
    throw new Error(
      `Snippet: no file "${file}" under labs/. ` +
        (known.length ? `Known files:\n  ${known.join('\n  ')}` : 'labs/ has no embeddable files.'),
    );
  }
  const text = (await loader()).replace(/\r\n/g, '\n');
  const all = text.split('\n');
  if (all.length && all[all.length - 1] === '') all.pop();

  let start = 0;
  let end = all.length - 1;

  if (region) {
    let i = all.findIndex((l) => {
      const m = l.match(REGION_START);
      return m && m[1] === region;
    });
    if (i < 0) throw new Error(`Snippet: region "${region}" not found in ${file}`);
    start = i + 1;
    // Find the matching end, allowing nested regions.
    let depth = 1;
    for (i = start; i < all.length; i++) {
      if (REGION_START.test(all[i])) depth++;
      else if (REGION_END.test(all[i]) && --depth === 0) break;
    }
    if (i >= all.length) throw new Error(`Snippet: region "${region}" in ${file} has no endregion`);
    end = i - 1;
  } else if (lines) {
    const m = lines.trim().match(/^(\d+)(?:\s*-\s*(\d+))?$/);
    if (!m) throw new Error(`Snippet: bad lines "${lines}", expected "10-24" or "7"`);
    start = Number(m[1]) - 1;
    end = (m[2] ? Number(m[2]) : Number(m[1])) - 1;
    if (start < 0 || end >= all.length || start > end)
      throw new Error(`Snippet: lines "${lines}" out of range for ${file} (${all.length} lines)`);
  }

  // Drop marker lines inside the slice, then trim blank edges and common indent.
  let picked = all.slice(start, end + 1).filter((l) => !REGION_START.test(l) && !REGION_END.test(l));
  while (picked.length && picked[0].trim() === '') { picked.shift(); start++; }
  while (picked.length && picked[picked.length - 1].trim() === '') { picked.pop(); end--; }
  const indent = Math.min(...picked.filter((l) => l.trim()).map((l) => l.match(/^[ \t]*/)![0].length));
  if (Number.isFinite(indent) && indent > 0) picked = picked.map((l) => l.slice(indent));

  return { code: picked.join('\n'), startLine: start + 1, endLine: end + 1, lang: langFor(file) };
}
