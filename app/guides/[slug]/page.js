import Link from 'next/link';
import { notFound } from 'next/navigation';
import { GUIDES, getGuide } from '../../data/guides';
import { getGame } from '../../data/games';
import { AdSlot } from '../../components/GameCard';
import { siteUrl } from '../../components/site';

export function generateStaticParams() {
  return GUIDES.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }) {
  const guide = getGuide(params.slug);
  if (!guide) return {};
  return {
    title: guide.title,
    description: guide.description,
    alternates: { canonical: `/guides/${guide.slug}` },
    openGraph: { title: `${guide.title} | GamingToSpace`, description: guide.description },
  };
}

export default function GuidePage({ params }) {
  const guide = getGuide(params.slug);
  if (!guide) notFound();
  const others = GUIDES.filter((g) => g.slug !== guide.slug);
  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: guide.title,
    description: guide.description,
    url: `${siteUrl()}/guides/${guide.slug}`,
    author: { '@type': 'Organization', name: 'GamingToSpace' },
    publisher: { '@type': 'Organization', name: 'GamingToSpace' },
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <nav className="breadcrumb">
        <Link href="/">Home</Link> › <Link href="/guides">Guides</Link> › {guide.title}
      </nav>
      <section className="card article">
        <h1 style={{ fontSize: 26, lineHeight: 1.25 }}>{guide.title}</h1>
        <p style={{ color: '#374151', fontSize: 16 }}>{guide.intro}</p>
        <AdSlot label="Advertisement" />
        {guide.sections.map((s, i) => (
          <div key={i}>
            <h2>{s.heading}</h2>
            {s.paragraphs.map((p, j) => <p key={j}>{p}</p>)}
            {s.list && (
              <ul className="tips-list">
                {s.list.map((item, k) => <li key={k}>{item}</li>)}
              </ul>
            )}
          </div>
        ))}
        {guide.picks && guide.picks.length > 0 && (
          <>
            <h2>The picks, with their real numbers</h2>
            {guide.picks.map((pick) => {
              const game = getGame(pick.slug);
              if (!game) return null;
              return (
                <div className="pick" key={pick.slug}>
                  <h3>
                    <Link href={`/game/${game.slug}`}>{game.title}</Link>{' '}
                    <span className="cat">{game.category}</span>
                  </h3>
                  <p className="meta" style={{ fontSize: 13 }}>
                    by {game.developer} • {game.rating ? `★ ${game.rating}` : 'Not rated yet'} • {game.installs} installs • checked {game.checked}
                  </p>
                  <p>{pick.note}</p>
                  <p>
                    <a className="btn-outline" href={game.playUrl} target="_blank" rel="noopener noreferrer">Get it on Google Play ↗</a>{' '}
                    <Link className="btn-outline" href={`/game/${game.slug}`}>Our listing</Link>
                  </p>
                </div>
              );
            })}
          </>
        )}
        <p>{guide.closing}</p>
      </section>
      <section className="card">
        <h2>More guides</h2>
        <ul className="tips-list">
          {others.map((g) => (
            <li key={g.slug}><Link href={`/guides/${g.slug}`}>{g.title}</Link></li>
          ))}
        </ul>
      </section>
    </>
  );
}
