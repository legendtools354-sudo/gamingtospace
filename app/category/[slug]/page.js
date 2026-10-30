import Link from 'next/link';
import { notFound } from 'next/navigation';
import { GAMES, CATEGORIES, gamesByCategory, slugify } from '../../data/games';
import { getCategoryEditorial } from '../../data/editorial';
import { GameCard } from '../../components/GameCard';

export function generateStaticParams() {
  return CATEGORIES.map((c) => ({ slug: slugify(c) }));
}

export async function generateMetadata({ params }) {
  const category = CATEGORIES.find((c) => slugify(c) === params.slug);
  if (!category) return {};
  return {
    title: `${category} Games Under 50,000 Downloads`,
    description: `Discover small ${category.toLowerCase()} games for Android with under 50,000 downloads — original descriptions, honest choosing advice and official Google Play links.`,
    alternates: { canonical: `/category/${params.slug}` },
  };
}

export default function CategoryPage({ params }) {
  const category = CATEGORIES.find((c) => slugify(c) === params.slug);
  if (!category) notFound();
  const games = gamesByCategory(params.slug);
  const editorial = getCategoryEditorial(category);
  const rated = games.filter((g) => g.rating);
  const avg = rated.length ? (rated.reduce((s, g) => s + g.rating, 0) / rated.length).toFixed(2) : null;
  const top = rated.length ? [...rated].sort((a, b) => b.rating - a.rating)[0] : null;
  const faqLd = editorial
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: editorial.faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      }
    : null;
  return (
    <>
      {faqLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />}
      <nav className="breadcrumb"><Link href="/">Home</Link> › {category}</nav>
      <h1 style={{ fontSize: 24 }}>{category} Games</h1>
      <p style={{ color: '#6b7280' }}>
        {games.length} small {category.toLowerCase()} game{games.length === 1 ? '' : 's'} under 50,000 downloads
        {avg ? `, averaging ${avg} ★ across the ${rated.length} rated titles` : ''}
        {top ? <> — highest rated: <Link href={`/game/${top.slug}`}>{top.title}</Link> ({top.rating} ★)</> : ''}.
      </p>

      {editorial && (
        <section className="card article">
          <h2>About {category.toLowerCase()} games on GamingToSpace</h2>
          <p>{editorial.intro}</p>
          <h2>How to choose a {category.toLowerCase()} game</h2>
          <ul className="tips-list">
            {editorial.choosingTips.map((t, i) => <li key={i}>{t}</li>)}
          </ul>
          <h2>What makes a good {category.toLowerCase()} game?</h2>
          <p>{editorial.goodGame}</p>
          <div className="fit-box">
            <p><strong>Good for:</strong> {editorial.goodFor}</p>
            <p><strong>Keep in mind:</strong> {editorial.keepInMind}</p>
          </div>
        </section>
      )}

      <section className="card">
        <h2>All {category.toLowerCase()} games under 50,000 downloads</h2>
        <div className="grid">{games.map((g) => <GameCard key={g.slug} game={g} />)}</div>
      </section>

      {editorial && (
        <section className="card faq">
          <h2>{category} games — Frequently Asked Questions</h2>
          {editorial.faqs.map((f, i) => (
            <details key={i}><summary>{f.q}</summary><p>{f.a}</p></details>
          ))}
          <p style={{ fontSize: 14 }}>
            New to judging small games? Read our guide: <Link href="/guides/how-to-spot-a-good-small-android-game">How to spot a good small Android game (and avoid bad ones)</Link>.
          </p>
        </section>
      )}
    </>
  );
}
