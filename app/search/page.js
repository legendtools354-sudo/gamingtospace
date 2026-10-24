import { GAMES } from '../data/games';
import { GameCard } from '../components/GameCard';

export default function SearchPage({ searchParams }) {
  const q = (searchParams?.q || '').trim();
  const lower = q.toLowerCase();
  const results = q ? GAMES.filter((g) => `${g.title} ${g.developer} ${g.category}`.toLowerCase().includes(lower)) : [];
  return (
    <>
      <h1 style={{ fontSize: 24 }}>{q ? `Results for “${q}”` : 'Search games'}</h1>
      <p style={{ color: '#6b7280' }}>{q ? `${results.length} game${results.length === 1 ? '' : 's'} found.` : 'Type a game name, developer or category in the search box above.'}</p>
      {q && <div className="grid">{results.map((g) => <GameCard key={g.slug} game={g} />)}</div>}
      {q && results.length === 0 && <p>No games matched that search yet. Try a category name like Puzzle, Arcade or Racing.</p>}
    </>
  );
}
