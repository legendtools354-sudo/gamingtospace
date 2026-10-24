import Link from 'next/link';
import { GAMES, CATEGORIES, slugify } from '../data/games';
import { GameCard } from '../components/GameCard';

export const metadata = { title: 'All Games', description: 'Browse all small Android games on GamingToSpace — every title has under 50,000 downloads on Google Play.' };

export default function GamesPage() {
  return (
    <>
      <h1 style={{ fontSize: 24 }}>All Games</h1>
      <p style={{ color: '#6b7280' }}>{GAMES.length} small games, all under 50,000 downloads on Google Play.</p>
      <div className="pills" style={{ justifyContent: 'flex-start', marginBottom: 12 }}>
        {CATEGORIES.map((c) => <Link key={c} className="pill" href={`/category/${slugify(c)}`}>{c}</Link>)}
      </div>
      <div className="grid">{GAMES.map((g) => <GameCard key={g.slug} game={g} />)}</div>
    </>
  );
}
