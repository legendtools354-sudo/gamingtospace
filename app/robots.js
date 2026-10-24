import { siteUrl } from './components/site';

export default function robots() {
  const base = siteUrl();
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: `${base}/sitemap.xml`,
  };
}
