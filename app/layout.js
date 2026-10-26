import Link from 'next/link';
import Script from 'next/script';
import './globals.css';
import { siteUrl } from './components/site';

export const metadata = {
  metadataBase: new URL(siteUrl()),
  verification: { google: 'hDA3UX-mtwre9TYsx13BNkmkscNBsjmN4l_rabL0sag' },
  title: {
    default: 'GamingToSpace — Discover Small & Hidden Android Games',
    template: '%s | GamingToSpace',
  },
  description:
    'GamingToSpace finds small, hidden Android games with under 50,000 downloads — with rewritten descriptions, ratings, and official Google Play links.',
  keywords: ['small android games', 'hidden android games', 'under 50k downloads games', 'new android games', 'indie android games'],
  openGraph: {
    type: 'website',
    siteName: 'GamingToSpace',
    title: 'GamingToSpace — Discover Small & Hidden Android Games',
    description: 'Small, hidden Android games with under 50,000 downloads, linked to their official Google Play pages.',
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
  alternates: { canonical: '/' },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8705324713774273" crossOrigin="anonymous" strategy="afterInteractive" />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-MT4MNXC1JS" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-MT4MNXC1JS');`}
        </Script>
        <header className="top">
          <div className="header-in">
            <Link className="logo" href="/">🎮 Gaming<span>ToSpace</span></Link>
            <nav className="main" aria-label="Main navigation">
              <Link href="/">Home</Link>
              <Link href="/popular">Popular</Link>
              <Link href="/games">Games</Link>
            </nav>
            <form className="search-form" action="/search" method="get" role="search">
              <label htmlFor="site-search" style={{ position: 'absolute', left: '-9999px' }}>Search games</label>
              <input id="site-search" name="q" type="search" placeholder="Search games" />
              <button type="submit">Search</button>
            </form>
          </div>
        </header>
        <main>{children}</main>
        <footer>
          <div className="footer-in">
            <div>
              <h4>GamingToSpace</h4>
              <p style={{ fontSize: 14 }}>Discover small and hidden Android games with under 50,000 downloads.</p>
              <p style={{ fontSize: 14 }}>Contact: <a href="/contact">Contact Us</a></p>
            </div>
            <div>
              <h4>Categories</h4>
              <ul>
                <li><Link href="/category/action">Action</Link></li>
                <li><Link href="/category/arcade">Arcade</Link></li>
                <li><Link href="/category/puzzle">Puzzle</Link></li>
                <li><Link href="/category/racing">Racing</Link></li>
                <li><Link href="/category/sports">Sports</Link></li>
                <li><Link href="/category/strategy">Strategy</Link></li>
                <li><Link href="/category/adventure">Adventure</Link></li>
                <li><Link href="/category/casual">Casual</Link></li>
                <li><Link href="/category/simulation">Simulation</Link></li>
                <li><Link href="/category/card">Card</Link></li>
                <li><Link href="/category/word">Word</Link></li>
                <li><Link href="/category/board">Board</Link></li>
              </ul>
            </div>
            <div>
              <h4>Quick Links</h4>
              <ul>
                <li><Link href="/popular">Popular</Link></li>
                <li><Link href="/games">Games</Link></li>
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/contact">Contact Us</Link></li>
                <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                <li><Link href="/terms">Terms and Conditions</Link></li>
                <li><Link href="/dmca">DMCA</Link></li>
                <li><Link href="/disclaimer">Disclaimer</Link></li>
              </ul>
            </div>
          </div>
          <div className="copy">© {new Date().getFullYear()} GamingToSpace. All game titles, icons and trademarks belong to their respective developers. Downloads are provided via the official Google Play Store.</div>
        </footer>
      </body>
    </html>
  );
}
