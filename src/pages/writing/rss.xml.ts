import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import profile from '../../data/profile.json';
import { getPublishedWriting } from '../../lib/writing';

export async function GET(context: APIContext) {
  const posts = (await getPublishedWriting()).filter((post) => !post.data.draft);

  return rss({
    title: `${profile.name} - Writing`,
    description: profile.seo.description,
    site: context.site!,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.summary,
      link: `/writing/${post.id}/`,
      categories: post.data.tags,
    })),
    customData: '<language>en-us</language>',
  });
}
