import { cities } from '../content/cities';
import { blogPosts } from '../data/blog-posts';

const pages = [
  '',
  '/about',
  '/services',
  '/team',
  '/insurance',
  '/faq',
  '/contact',
  '/blog',
  '/michigan',
  '/services/bariatric-support',
  '/services/nutrition',
  '/services/anxiety-depression',
  '/services/trauma',
];

const cityPages = cities.map(city => `/michigan/${city.slug}`);
const blogPages = blogPosts.map(post => `/blog/${post.slug}`);
const allPages = [...pages, ...cityPages, ...blogPages];

export async function GET() {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(page => `  <url>
    <loc>https://laureltreecounseling.com${page}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${page === '' ? 'weekly' : 'monthly'}</changefreq>
    <priority>${page === '' ? '1.0' : page.includes('michigan') ? '0.7' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
