import { GAMES } from '../data/games';
import { GameCard } from '../components/GameCard';

export const metadata = { title: 'Popular Games', description: 'The most highly rated small Android games on GamingToSpace, all under 50,000 downloads.' };

export default function PopularPage() {
  const popular = [...GAMES].filter((g) => g.rating).sort((a, b) => b.rating - a.rating);
  return (
    <>
      <h1 style={{ fontSize: 24 }}>Popular Games</h1>
      <p style={{ color: '#6b7280' }}>Sorted by Google Play rating, highest first. Only small games under 50,000 downloads are listed.</p>
      <div className="grid">{popular.map((g) => <GameCard key={g.slug} game={g} />)}</div>
    </>
  );
}
