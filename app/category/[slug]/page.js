import Link from 'next/link';
import { notFound } from 'next/navigation';
import { GAMES, CATEGORIES, getGame, gamesByCategory, slugify } from '../../data/games';
import { GameCard } from '../../components/GameCard';

export function generateStaticParams() {
  return CATEGORIES.map((c) => ({ slug: slugify(c) }));
}

export async function generateMetadata({ params }) {
  const category = CATEGORIES.find((c) => slugify(c) === params.slug);
  if (!category) return {};
  return {
    title: `${category} Games Under 50,000 Downloads`,
    description: `Discover small ${category.toLowerCase()} games for Android with under 50,000 downloads — original descriptions and official Google Play links.`,
    alternates: { canonical: `/category/${params.slug}` },
  };
}

export default function CategoryPage({ params }) {
  const category = CATEGORIES.find((c) => slugify(c) === params.slug);
  if (!category) notFound();
  const games = gamesByCategory(params.slug);
  return (
    <>
      <nav className="breadcrumb"><Link href="/">Home</Link> › {category}</nav>
      <h1 style={{ fontSize: 24 }}>{category} Games</h1>
      <p style={{ color: '#6b7280' }}>{games.length} small {category.toLowerCase()} game{games.length === 1 ? '' : 's'} under 50,000 downloads.</p>
      <div className="grid">{games.map((g) => <GameCard key={g.slug} game={g} />)}</div>
    </>
  );
}
