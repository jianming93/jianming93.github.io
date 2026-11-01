---
title: "Start here: what this blog is for"
description: "Why I'm writing this blog, and how it's organised from algorithms down to GPU kernels and serving."
pubDate: 2026-11-01
layer: foundations
series: "Welcome"
part: 1
---

<!-- Placeholder: rewrite this in your own words, or delete the file. -->

This blog follows the LLM stack from the algorithms at the top down to GPU kernels and serving.

## Math renders with KaTeX

Inline math like $\mathrm{softmax}(x)_i = e^{x_i} / \sum_j e^{x_j}$ and display math both work:

$$
\mathrm{Attention}(Q,K,V) = \mathrm{softmax}\!\left(\frac{QK^\top}{\sqrt{d_k}}\right)V
$$

## Code renders with Expressive Code

```python title="softmax.py" {3}
import numpy as np

def softmax(x):
    z = np.exp(x - x.max())  # subtract the max for numerical stability
    return z / z.sum()
```

## Writing the next post

Run `npm run new -- "My title" --layer kernels` to scaffold a post, then write Markdown. Use `--mdx` when you want components such as `<Callout>` or `<Snippet>`.
