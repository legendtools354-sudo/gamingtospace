import Link from 'next/link';
import { GAMES, CATEGORIES, slugify } from './data/games';
import { GameCard, AdSlot } from './components/GameCard';

export default function Home() {
  const popular = [...GAMES].filter((g) => g.rating).sort((a, b) => b.rating - a.rating).slice(0, 12);
  const latest = GAMES.slice(0, 12);
  return (
    <>
      <div className="hero">
        <h1>GamingToSpace</h1>
        <p>Discover small &amp; hidden Android games with under 50,000 downloads — before everyone else finds them.</p>
        <form className="hero-search" action="/search" method="get" role="search">
          <label htmlFor="hero-q" style={{ position: 'absolute', left: '-9999px' }}>Search games</label>
          <input id="hero-q" name="q" type="search" placeholder="Search games and apps" />
          <button type="submit">Search</button>
        </form>
        <div className="pills">
          {CATEGORIES.map((c) => (
            <Link key={c} className="pill" href={`/category/${slugify(c)}`}>{c}</Link>
          ))}
        </div>
      </div>

      <AdSlot label="Advertisement" />

      <section className="card">
        <h2>Popular <Link className="view-all" href="/popular">View all →</Link></h2>
        <p className="sub">Most highly rated small games right now</p>
        <div className="grid">{popular.map((g) => <GameCard key={g.slug} game={g} />)}</div>
      </section>

      <section className="card">
        <h2>Games <Link className="view-all" href="/games">View all →</Link></h2>
        <p className="sub">Discover the best small games</p>
        <div className="grid">{latest.map((g) => <GameCard key={g.slug} game={g} />)}</div>
      </section>

      <section className="card faq">
        <h2>Frequently Asked Questions</h2>
        <details><summary>What is GamingToSpace?</summary><p>GamingToSpace is a directory of small, hidden Android games with under 50,000 downloads on Google Play. We write original, rewritten descriptions for each game so you can discover titles you would not find on the top charts.</p></details>
        <details><summary>Are the games free to download?</summary><p>Download availability and pricing are set by each developer on Google Play. Every download button on GamingToSpace links to the game&apos;s official Google Play page, where you can check the current price before installing.</p></details>
        <details><summary>Does GamingToSpace host APK files?</summary><p>No. We never host APK files. All downloads go through the official Google Play Store, which is safer and ensures you always get the developer&apos;s latest version.</p></details>
        <details><summary>How do I install a game?</summary><p>Tap &quot;Get it on Google Play&quot; on a game page, then tap Install in the Play Store app on your Android phone or tablet.</p></details>
        <details><summary>Can I request a game or report a problem?</summary><p>Yes — use the <Link href="/contact">Contact Us</Link> page. Tell us the game name and the issue, and we will look into it.</p></details>
      </section>
    </>
  );
}
