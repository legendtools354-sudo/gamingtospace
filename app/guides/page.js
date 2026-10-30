import Link from 'next/link';
import { GUIDES } from '../data/guides';

export const metadata = {
  title: 'Guides — How to Find and Judge Hidden Android Games',
  description:
    'Original GamingToSpace guides: how we find hidden Android games under 50,000 downloads, the best small puzzle and arcade games, and how to spot a good small game.',
  alternates: { canonical: '/guides' },
};

export default function GuidesIndex() {
  return (
    <>
      <nav className="breadcrumb"><Link href="/">Home</Link> › Guides</nav>
      <h1 style={{ fontSize: 24 }}>Guides</h1>
      <p style={{ color: '#6b7280', maxWidth: 720 }}>
        Longer reads from the GamingToSpace editor: how this directory finds and verifies small Android games,
        our best hidden puzzle and arcade picks, and a practical checklist for judging any small game before you install it.
      </p>
      <div className="guide-list">
        {GUIDES.map((g) => (
          <section className="card" key={g.slug}>
            <h2 style={{ marginTop: 0 }}><Link href={`/guides/${g.slug}`}>{g.title}</Link></h2>
            <p style={{ color: '#374151' }}>{g.description}</p>
            <p><Link className="btn-outline" href={`/guides/${g.slug}`}>Read the guide →</Link></p>
          </section>
        ))}
      </div>
    </>
  );
}
