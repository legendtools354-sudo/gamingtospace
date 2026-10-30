import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { GAMES, getGame, slugify } from '../../data/games';
import { getCategoryEditorial } from '../../data/editorial';
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

// Real paragraphs only: the old third paragraph was an identical template on
// every game ("On Google Play it sits in the ...") and is dropped.
function realParagraphs(game) {
  return game.description
    .split('\n\n')
    .map((p) => p.trim())
    .filter((p) => p && !p.startsWith('On Google Play it sits in the'));
}

function categoryStats(game) {
  const inCat = GAMES.filter((g) => g.category === game.category);
  const rated = inCat.filter((g) => g.rating).sort((a, b) => b.rating - a.rating);
  const avg = rated.length ? rated.reduce((s, g) => s + g.rating, 0) / rated.length : null;
  const rank = game.rating ? rated.findIndex((g) => g.slug === game.slug) + 1 : null;
  const sameBracket = GAMES.filter((g) => g.installs === game.installs).length;
  return { count: inCat.length, ratedCount: rated.length, avg, rank, sameBracket };
}

function fmt(n) {
  return n == null ? null : (Math.round(n * 100) / 100).toString();
}

function whyListed(game, stats) {
  const parts = [];
  if (game.rating && stats.avg && game.rating >= stats.avg + 0.25) {
    parts.push(
      `${game.title} earned its place in our ${game.category} selection the straightforward way: players like it more than most. It holds a ${fmt(game.rating)} rating on Google Play, comfortably above the ${fmt(stats.avg)} average across the ${stats.count} ${game.category.toLowerCase()} games we list, yet it sits in the ${game.installs} installs bracket — far below the download counts of the chart-topping titles in this genre. Ratings that strong at install counts that small are exactly the pattern GamingToSpace exists to catch.`
    );
  } else if (game.rating && stats.avg && game.rating >= stats.avg - 0.15) {
    parts.push(
      `We listed ${game.title} because it holds its own in a competitive corner of the Play Store. Its ${fmt(game.rating)} rating on Google Play is right around the ${fmt(stats.avg)} average for the ${stats.count} ${game.category.toLowerCase()} games in our directory, and it has done that at just ${game.installs} installs, without the marketing push that carries bigger titles. For a small game by ${game.developer}, that is a solid, honest record — and the kind of under-the-radar listing our readers come here for.`
    );
  } else if (game.rating) {
    parts.push(
      `${game.title} is one of the more divisive picks in our ${game.category} selection, and we think that makes it worth listing rather than hiding. Its ${fmt(game.rating)} rating on Google Play sits below the ${stats.avg ? fmt(stats.avg) : '—'} category average across our ${stats.count} listed ${game.category.toLowerCase()} games, so it will not suit everyone — but it is a genuine small-studio take on the genre at ${game.installs} installs, and GamingToSpace's job is to surface real small games with their real numbers attached, not only the ones with perfect scores. Read the comparison below, check the recent reviews on its Play page, and decide with full information.`
    );
  } else {
    parts.push(
      `${game.title} is about as undiscovered as a listed game gets: at ${game.installs} installs it does not yet show a public rating on Google Play, because too few players have rated it for Google to publish one. We list unrated games deliberately, alongside the highly rated ones, because 'no rating yet' means unproven rather than bad — and someone has to be among the first to try a small ${game.category.toLowerCase()} game by ${game.developer} and find out. If you try it, rating it on Google Play genuinely helps the next player.`
    );
  }
  parts.push(
    `We verified this listing on ${game.checked}, recording the title, developer, category, install bracket and rating exactly as Google Play showed them, and we wrote the description above ourselves. Every figure on this page can be checked against the official listing in one click.`
  );
  return parts;
}

function compareText(game, stats) {
  const parts = [];
  if (game.rating && stats.rank) {
    parts.push(
      `By Google Play rating, ${game.title} ranks #${stats.rank} of the ${stats.ratedCount} rated ${game.category.toLowerCase()} games currently listed on GamingToSpace${stats.avg ? `, against a category average of ${fmt(stats.avg)}` : ''}.`
    );
  } else {
    parts.push(
      `${game.title} cannot be ranked by rating yet because Google Play does not show a public rating for it. Of the ${stats.count} ${game.category.toLowerCase()} games we list, ${stats.ratedCount} currently show a rating${stats.avg ? `, averaging ${fmt(stats.avg)}` : ''}.`
    );
  }
  parts.push(
    `Its ${game.installs} installs bracket is one it shares with ${stats.sameBracket} of the ${GAMES.length} games in our whole directory — every one of them under the 50,000-download ceiling this site is built around.`
  );
  return parts.join(' ');
}

function gameFaqs(game) {
  return [
    {
      q: `Who made ${game.title}?`,
      a: `${game.title} is an Android ${game.category.toLowerCase()} game by ${game.developer}. GamingToSpace verified the listing on ${game.checked} and recorded the developer, category and install bracket exactly as shown on Google Play.`,
    },
    {
      q: `How many downloads does ${game.title} have?`,
      a: `Google Play places ${game.title} in the ${game.installs} installs bracket. Google reports downloads in brackets rather than exact figures, and every game on GamingToSpace sits in the 1,000+, 5,000+ or 10,000+ bracket — always under 50,000 downloads at the time we checked.`,
    },
    game.rating
      ? {
          q: `What rating does ${game.title} have on Google Play?`,
          a: `${game.title} holds a ${fmt(game.rating)} out of 5 rating on Google Play, as recorded when we checked the listing on ${game.checked}. Ratings can move as more players review the game, so the live figure on its Play Store page is the final word.`,
        }
      : {
          q: `Why does ${game.title} have no rating yet?`,
          a: `Google Play only publishes a rating once enough players have rated a game, and ${game.title} — at ${game.installs} installs — has not crossed that threshold yet. No rating means unproven, not poor quality; several excellent small games sit in this state while they find their first audience.`,
        },
    {
      q: `Is it safe to download ${game.title}? Does GamingToSpace host the APK?`,
      a: `GamingToSpace never hosts APK files, for ${game.title} or any other game. The download buttons on this page open the game's official Google Play page, where Google Play Protect scans apps and Google handles the install and updates. Avoid third-party APK copies of small games — unofficial files are a common hiding place for malware.`,
    },
    {
      q: `How do I install ${game.title}?`,
      a: `Tap "Get it on Google Play" on this page to open the official listing, then tap Install in the Play Store app on your Android phone or tablet. The listing there shows the current size, price (if any) and Android version requirement before you confirm.`,
    },
  ];
}

export default function GamePage({ params }) {
  const game = getGame(params.slug);
  if (!game) notFound();
  const related = GAMES.filter((g) => g.category === game.category && g.slug !== game.slug).slice(0, 4);
  const stats = categoryStats(game);
  const editorial = getCategoryEditorial(game.category);
  const faqs = gameFaqs(game);
  const why = whyListed(game, stats);
  const catIntroShort = editorial
    ? editorial.intro.split(/(?<=\.)\s+/).slice(0, 3).join(' ')
    : null;
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
  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
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
          {realParagraphs(game).map((p, i) => <p key={i}>{p}</p>)}

          <h2>Why we listed {game.title}</h2>
          {why.map((p, i) => <p key={i}>{p}</p>)}

          <h2>How {game.title} compares</h2>
          <p>{compareText(game, stats)}</p>
          <div className="stats compare-stats">
            <div className="stat"><span>{game.category} games listed here</span><b>{stats.count}</b></div>
            <div className="stat"><span>Category average rating</span><b>{stats.avg ? `${fmt(stats.avg)} ★` : '—'}</b></div>
            <div className="stat"><span>This game&apos;s rating rank in category</span><b>{stats.rank ? `#${stats.rank} of ${stats.ratedCount} rated` : 'Not rated yet'}</b></div>
            <div className="stat"><span>Games site-wide in the {game.installs} bracket</span><b>{stats.sameBracket} of {GAMES.length}</b></div>
          </div>

          {editorial && (
            <>
              <h2>{game.category} games like this one</h2>
              <p>{catIntroShort}</p>
              <p>
                Read our full <Link href={`/category/${slugify(game.category)}`}>{game.category} category guide</Link> — what makes a good {game.category.toLowerCase()} game, how to choose one, and every small {game.category.toLowerCase()} game we have verified.
              </p>
              <div className="fit-box">
                <p><strong>Good for:</strong> {editorial.goodFor}</p>
                <p><strong>Keep in mind:</strong> {editorial.keepInMind}</p>
              </div>
            </>
          )}
        </article>
        <p><a className="btn" href={game.playUrl} target="_blank" rel="noopener noreferrer">Download {game.title} on Google Play</a></p>
        <p style={{ fontSize: 13, color: '#6b7280' }}>GamingToSpace does not host this game. The download button opens the developer&apos;s official Google Play page, where Google handles the install, updates and payments.</p>
      </section>
      <section className="card faq">
        <h2>{game.title} — Frequently Asked Questions</h2>
        {faqs.map((f, i) => (
          <details key={i}><summary>{f.q}</summary><p>{f.a}</p></details>
        ))}
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
