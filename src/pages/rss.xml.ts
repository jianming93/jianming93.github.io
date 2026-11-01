import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getPosts, postUrl, SITE_DESCRIPTION, AUTHOR } from '../lib/site';

export async function GET(context: APIContext) {
  const posts = await getPosts();
  return rss({
    title: `${AUTHOR}: Rolling in Deep Learning`,
    description: SITE_DESCRIPTION,
    site: context.site!,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: postUrl(post),
      categories: [post.data.layer],
    })),
  });
}
