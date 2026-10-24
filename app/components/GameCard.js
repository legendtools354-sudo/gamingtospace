import Link from 'next/link';
import Image from 'next/image';

export function GameIcon({ game, size = 48 }) {
  if (game.icon) {
    return <Image src={game.icon} alt={`${game.title} icon`} width={size} height={size} loading="lazy" />;
  }
  return <span className="icon-fallback" aria-hidden="true">{game.title.charAt(0)}</span>;
}

export function GameCard({ game }) {
  return (
    <Link className="game-card" href={`/game/${game.slug}`}>
      <GameIcon game={game} />
      <span>
        <h3>{game.title}</h3>
        <span className="cat">{game.category}</span>
        <span className="meta" style={{ display: 'block' }}>
          Game{game.rating ? ` • ★ ${game.rating.toFixed(2).replace(/\.?0+$/, '')}` : ''} • {game.installs} installs
        </span>
      </span>
    </Link>
  );
}

export function AdSlot({ label = 'Advertisement' }) {
  return (
    <div className="ad-slot" role="complementary" aria-label={label}>
      {label} — AdSense slot. Replace this placeholder with your AdSense ad unit after approval.
      {/* To enable AdSense: add your publisher script in app/layout.js and replace this div with your <ins className="adsbygoogle"> unit. */}
    </div>
  );
}
