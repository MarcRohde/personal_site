import type { APIRoute } from 'astro';
import { getPublishedWriting } from '../lib/writing';

// Dynamic routes ([slug]) are listed from the writing collection instead.
const pagePaths = Object.keys(import.meta.glob('./**/*.astro'))
  .filter((file) => !file.includes('['))
  .map((file) => {
    const path = file.replace(/^\.\//, '').replace(/\.astro$/, '').replace(/index$/, '');
    return `/${path}`.replace(/\/?$/, '/');
  })
  .sort();

export const GET: APIRoute = async ({ site }) => {
  const posts = await getPublishedWriting();
  const paths = posts.length ? pagePaths : pagePaths.filter((p) => p !== '/writing/');
  const urls = [
    ...paths.map((path) => ({ loc: new URL(path, site).href, lastmod: undefined as string | undefined })),
    ...posts.map((post) => ({
      loc: new URL(`/writing/${post.id}/`, site).href,
      lastmod: post.data.date.toISOString().slice(0, 10),
    })),
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${u.loc}</loc>${u.lastmod ? `<lastmod>${u.lastmod}</lastmod>` : ''}</url>`).join('\n')}
</urlset>
`;

  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
