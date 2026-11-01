# jianming93.github.io

Personal site of Ng Jian Ming: a blog following the LLM stack from algorithms down to GPU kernels and serving, plus projects and experience. Built with [Astro](https://astro.build), published to GitHub Pages at <https://jianming93.github.io>.

**Everything you write is Markdown.** No TSX or data files to edit for content.

## Quick start

Needs Node 22.23 or newer.

```bash
npm install
npm run dev      # http://localhost:4321, drafts are visible here
npm run build    # static site into dist/
npm run check    # type + front-matter validation
```

## Where content lives

| What | Where | URL |
|---|---|---|
| Blog posts | `src/content/posts/*.md` or `.mdx` | `/posts/<file-name>/` |
| Projects | `src/content/projects/*.mdx` | `/projects/<file-name>/` |
| Work and education | `src/content/experience/*.md` (bullets are the body) | `/experience/` |
| Skills and achievements | `src/data/skills.md` | `/experience/` |
| Home page short bio | `src/data/about.md` (hero and layout: `src/pages/index.astro`) | `/` |
| Full "About" story | `src/pages/about.md` | `/about/` |
| RSS feed | generated from posts by `src/pages/rss.xml.ts` | `/rss.xml` |
| Social preview image | `public/og-default.png` (1200x630) | n/a |
| Runnable code that posts embed | `labs/<layer>/<project>/` | n/a |

### Writing a post

```bash
npm run new -- "Online softmax" --layer kernels --mdx --code kernels/online-softmax
```

This creates `src/content/posts/online-softmax.mdx` as a draft (add `--publish` to skip that). Front matter:

```yaml
title: "Online softmax"
description: "One sentence for cards and search results."
pubDate: 2026-11-01
layer: kernels            # foundations | models | training | kernels | serving (this is the post's only category)
series: "Fast attention"  # optional, with `part: 1`
code: kernels/online-softmax   # optional: folder under labs/ or a full URL
draft: false
```

What works in the body:

- Math with KaTeX: `$inline$` and `$$display$$`.
- Code fences with titles, line marks and diffs (Expressive Code): ` ```python title="x.py" {3-4} `. `cuda` and `ptx` are highlighted too.
- In `.mdx` files only: `<Callout kind="note|gotcha|aside">`, `<Snippet file="kernels/x/y.py" region="name" />` to embed code from `labs/`, and `<Figure src={img} alt="" caption="" />` for captioned images.
- Region markers in lab files: `# region name` ... `# endregion` (see `labs/README.md`).

Images: put them next to your work in `src/assets/` and import them in MDX, or use `![alt](../../assets/x.png)` in Markdown, so Astro optimises them.

### Adding a project or a job

Copy an existing file in `src/content/projects/` or `src/content/experience/` and edit the front matter. Schemas are in `src/content.config.ts`.

- Projects: `cover` (a screenshot under `src/assets/projects/`) and `tags` show on the project card.
- Experience: set `earlier: true` on an early-career role to fold it under "Earlier roles" on `/experience/`. Leave `end` out for a current role.

### Tags

Every post has exactly one tag, shown as a hashtag (`#foundations`, `#models`, `#training`, `#kernels`, `#serving`) and set by its `layer:` front-matter field. The tags are the layers of the stack, defined in one place: `src/data/layers.ts`.

To add a tag:

```bash
npm run new-tag -- evals --name "Evals" --blurb "Benchmarks, judges and measuring what matters."
```

That adds one entry (id, name, blurb, colour hue) to `src/data/layers.ts`. Nothing else needs editing: the Tags page, the `/tags/<id>/` page, the filter chips on `/posts`, the colours, the allowed `layer:` values and `npm run new -- "Title" --layer evals` all follow from it. Leave `--hue` out and a colour is picked that is far from the existing ones. Edit the file by hand to rename a tag, change its blurb or colour, or reorder them.

## Deploying

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds with Astro and publishes to GitHub Pages. In the repo settings, Pages → Source must be **GitHub Actions**.

## Stack

Astro 7, MDX, Expressive Code, KaTeX, Tailwind v4 with [Basecoat](https://basecoatui.com), self-hosted Fontsource fonts. The colour theme is in `src/styles/theme.css`.
