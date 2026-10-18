import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

// Hand-rolled sitemap: @astrojs/sitemap's installed version is incompatible
// with Astro 4. Lists the indexable pages only (news detail pages are noindex).
const staticPages = ['/', '/research/', '/publications/', '/software/', '/talks/', '/news/', '/cv/'];

export const GET: APIRoute = async ({ site }) => {
  const posts = (await getCollection('blog')).filter((p) => !p.data.draft);
  const pages = [...staticPages, ...posts.map((p) => `/blog/${p.slug}/`)];
  const lastmod = new Date().toISOString().slice(0, 10);
  const urls = pages
    .map((p) => `  <url><loc>${new URL(p, site)}</loc><lastmod>${lastmod}</lastmod></url>`)
    .join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
};
