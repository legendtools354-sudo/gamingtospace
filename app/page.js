import Link from 'next/link';
import { GAMES, CATEGORIES, slugify } from './data/games';
import { GUIDES } from './data/guides';
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

      <section className="card article">
        <h2>Why small games? About GamingToSpace</h2>
        <p>
          The Play Store&apos;s charts answer one question — what is already popular — and they answer it the same way for everyone.
          GamingToSpace exists to answer a different one: what is <em>good</em> that almost nobody has found yet? Every game in this
          directory has under 50,000 downloads on Google Play, and most have under 10,000. At that size you find solo developers and
          tiny teams building the game they wanted to exist: a cave-diving roguelike, a cricket management sim, a tile game built
          around postcards of world landmarks. They cannot buy their way onto a chart, so the only way they surface is if someone
          goes looking. We go looking.
        </p>
        <p>
          Every listing here is checked by hand. We record the title, developer, category, install bracket and rating exactly as
          Google Play shows them, print the date we checked on the game&apos;s page, and write the description ourselves — Play Store
          copy is written to sell, and often copied from templates, so we rewrite it into an honest account of what the game is and
          who it suits. We reject far more than we list: clones, contradictory listings and empty descriptions never make it. And we
          never host APK files; every download button opens the game&apos;s official Google Play page, where Play Protect scans the
          app and the developer gets the download they earned.
        </p>
        <p>
          Why trust small games at all? Because in genre after genre — puzzle and arcade especially — the highest-rated games on
          this site hold 4.9 and even perfect 5.0 scores from the few thousand players who found them first. Small does not mean
          rough; it often means focused. Browse by category, compare each game against its peers on its page, and use our guides
          below to judge like an editor. The next game on your phone does not have to be the one a chart chose for you.
        </p>
      </section>

      <section className="card">
        <h2>Guides <Link className="view-all" href="/guides">All guides →</Link></h2>
        <p className="sub">How we find small games, our best hidden picks, and how to judge any small game yourself</p>
        <div className="guide-cards">
          {GUIDES.map((g) => (
            <Link key={g.slug} className="guide-card" href={`/guides/${g.slug}`}>
              <h3>{g.title}</h3>
              <p>{g.description}</p>
            </Link>
          ))}
        </div>
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
