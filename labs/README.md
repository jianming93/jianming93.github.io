# labs

Code that goes with the logs, one folder per layer of the stack:

```
labs/
  foundations/   maths, autograd, optimisers
  models/        attention, transformers, world models
  training/      training loops, parallelism, post-training
  kernels/       CUDA, Triton, profiling
  serving/       KV caches, batching, inference servers
```

Each lab is a self-contained project: its own README, dependencies and build
steps. The site build only reads these files as text, so any language or
toolchain is fine here.

## Embedding code in a log

Logs pull code straight from these files, so a snippet can never drift from
the source. In an `.mdx` log:

```mdx
import Snippet from '../../components/Snippet.astro';

<Snippet file="kernels/online-softmax/online_softmax.py" region="online" mark={[3, 4]} />
```

Mark the region in the source with a comment. The markers work in any language
with line comments and match VS Code's folding syntax, so they also fold in
your editor:

```python
# region online
def online_softmax(xs):
    ...
# endregion
```

```cpp
// region merge
__device__ MD md_merge(MD a, MD b) { ... }
// endregion
```

`region` / `endregion` may be prefixed with `#` or `pragma`, so
`#pragma region merge` works in C/CUDA too. Marker lines are stripped from the
output and the region is de-indented. Omit `region` to embed the whole file,
or use `lines="10-24"` for a fixed range.

Props on `<Snippet>`: `region`, `lines`, `title` (defaults to the file name),
`lang` (inferred from the extension), `showLineNumbers` (numbers match the
source file), plus the usual Expressive Code markers `mark`, `ins`, `del`,
`collapse`. A "view source" link to GitHub is added under every snippet.
