import Link from 'next/link';

export function siteUrl() {
  return (process.env.NEXT_PUBLIC_SITE_URL || 'https://gamingto.space').replace(/\/$/, '');
}

export function slugify(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '') || 'game';
}

export function categorySlug(category) {
  return slugify(category);
}
