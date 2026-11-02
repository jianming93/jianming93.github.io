import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getLogs, logUrl, SITE_DESCRIPTION, AUTHOR } from '../lib/site';

export async function GET(context: APIContext) {
  const logs = await getLogs();
  return rss({
    title: `${AUTHOR}: Rolling in Deep Learning`,
    description: SITE_DESCRIPTION,
    site: context.site!,
    items: logs.map((log) => ({
      title: log.data.title,
      description: log.data.description,
      pubDate: log.data.pubDate,
      link: logUrl(log),
      categories: [log.data.layer],
    })),
  });
}
