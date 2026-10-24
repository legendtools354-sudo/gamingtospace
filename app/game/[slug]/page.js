import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { GAMES, getGame, slugify } from '../../data/games';
import { GameCard, AdSlot } from '../../components/GameCard';
import { siteUrl } from '../../components/site';

export function generateStaticParams() {
  return GAMES.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }) {
  const game = getGame(params.slug);
  if (!game) return {};
  return {
    title: `${game.title} — ${game.category} Game by ${game.developer}`,
    description: game.summary,
    alternates: { canonical: `/game/${game.slug}` },
    openGraph: {
      title: `${game.title} | GamingToSpace`,
      description: game.summary,
      images: game.icon ? [game.icon] : [],
    },
  };
}

export default function GamePage({ params }) {
  const game = getGame(params.slug);
  if (!game) notFound();
  const related = GAMES.filter((g) => g.category === game.category && g.slug !== game.slug).slice(0, 4);
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MobileApplication',
    name: game.title,
    applicationCategory: 'GameApplication',
    operatingSystem: 'Android',
    author: { '@type': 'Organization', name: game.developer },
    aggregateRating: game.rating ? { '@type': 'AggregateRating', ratingValue: game.rating, ratingCount: 1 } : undefined,
    url: `${siteUrl()}/game/${game.slug}`,
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="breadcrumb">
        <Link href="/">Home</Link> › <Link href={`/category/${slugify(game.category)}`}>{game.category}</Link> › {game.title}
      </nav>
      <section className="card detail">
        <div className="detail-head">
          {game.icon ? <Image src={game.icon} alt={`${game.title} icon`} width={88} height={88} priority /> : <span className="icon-fallback">{game.title.charAt(0)}</span>}
          <div>
            <h1>{game.title}</h1>
            <p style={{ color: '#6b7280', margin: '4px 0' }}>by {game.developer}</p>
            <span className="cat">{game.category}</span>
            <p style={{ margin: '6px 0' }}>{game.rating ? `★ ${game.rating} on Google Play` : 'No public rating yet on Google Play'} • {game.installs} installs</p>
            <a className="btn" href={game.playUrl} target="_blank" rel="noopener noreferrer">Get it on Google Play</a>{' '}
            <a className="btn-outline" href={game.playUrl} target="_blank" rel="noopener noreferrer">View on Play Store ↗</a>
          </div>
        </div>
        <div className="stats">
          <div className="stat"><span>Developer</span><b>{game.developer}</b></div>
          <div className="stat"><span>Installs on Google Play</span><b>{game.installs}</b></div>
          <div className="stat"><span>Rating</span><b>{game.rating ? `${game.rating} ★` : 'Not rated yet'}</b></div>
          <div className="stat"><span>Category</span><b>{game.category}</b></div>
          <div className="stat"><span>Listing checked</span><b>{game.checked}</b></div>
        </div>
        <AdSlot label="Advertisement" />
        <article className="article">
          <h2>About {game.title}</h2>
          {game.description.split('\n\n').map((p, i) => <p key={i}>{p}</p>)}
        </article>
        <p><a className="btn" href={game.playUrl} target="_blank" rel="noopener noreferrer">Download {game.title} on Google Play</a></p>
        <p style={{ fontSize: 13, color: '#6b7280' }}>GamingToSpace does not host this game. The download button opens the developer&apos;s official Google Play page, where Google handles the install, updates and payments.</p>
      </section>
      {related.length > 0 && (
        <section className="card">
          <h2>You may also like</h2>
          <div className="grid">{related.map((g) => <GameCard key={g.slug} game={g} />)}</div>
        </section>
      )}
    </>
  );
}
