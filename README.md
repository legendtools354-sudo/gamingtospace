# GamingToSpace

A compact, mobile-friendly Next.js directory of small Android games with under 50,000 downloads on Google Play.

- 60 games at launch, all in the 1,000+ / 5,000+ / 10,000+ install brackets (checked 24 Oct 2026)
- Original rewritten descriptions — no copied Play Store text, no hosted APKs. Every download button links to the official Google Play page.
- SEO: unique title + description per game and category page, canonical URLs, Open Graph, JSON-LD (MobileApplication), dynamic `sitemap.xml` (`app/sitemap.js`) and `robots.txt` (`app/robots.js`)
- AdSense-ready structure: About, Contact (working mailto form), Privacy Policy, Terms, DMCA and Disclaimer pages are all live and linked from the footer. Ad slots are clearly marked placeholders.

## Run locally

```bash
cd site
npm install
npm run dev
# open http://localhost:3000
```

## Deploy

Set the live domain before deploying:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com npm run build
```

Vercel: import this repo, set the root directory to `site`, and set `NEXT_PUBLIC_SITE_URL` to your domain. The sitemap and canonical URLs use that value.

## AdSense — what you still need to do

1. Deploy to your own domain and wait for Google to index the sitemap (submit `https://your-domain.com/sitemap.xml` in Search Console).
2. Apply for AdSense, then replace the placeholder in `app/components/GameCard.js` (`AdSlot`) with your real ad unit, and add your AdSense publisher script tag in `app/layout.js`.
3. Replace `contact@gamingtospace.com` in `app/contact/page.js`, `app/dmca/page.js` and the footer with an email you actually monitor, if your domain differs.

## Adding a game

Add an entry to `app/data/games.js` (slug, title, developer, category, installs, rating, package, playUrl, icon, summary, description). The game page, category page, sitemap and search update automatically — no other file needs editing.
