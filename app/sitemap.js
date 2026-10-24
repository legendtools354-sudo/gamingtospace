import { GAMES, CATEGORIES, slugify } from './data/games';
import { siteUrl } from './components/site';

export const dynamic = 'force-static';

export default function sitemap() {
  const base = siteUrl();
  const now = new Date();
  const urls = [
    { url: `${base}/`, lastModified: now, changeFrequency: 'daily', priority: 1.0 },
    { url: `${base}/games`, lastModified: now, changeFrequency: 'daily', priority: 0.9 },
    { url: `${base}/popular`, lastModified: now, changeFrequency: 'daily', priority: 0.8 },
    { url: `${base}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${base}/privacy-policy`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${base}/terms`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${base}/dmca`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${base}/disclaimer`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
  ];
  for (const c of CATEGORIES) {
    urls.push({ url: `${base}/category/${slugify(c)}`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 });
  }
  for (const g of GAMES) {
    urls.push({ url: `${base}/game/${g.slug}`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 });
  }
  return urls;
}
