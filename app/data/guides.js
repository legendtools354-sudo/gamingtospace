// Original long-form guides written for GamingToSpace readers.
// Game picks reference real listings in app/data/games.js by slug and use
// only their verified facts (summary, rating, installs, developer).

export const GUIDES = [
  {
    slug: "how-we-find-hidden-android-games",
    title: "How We Find Hidden Android Games Under 50,000 Downloads",
    description:
      "The full GamingToSpace method: where we look for small Android games, what we verify on every listing, what we reject, and how we keep the directory honest.",
    intro:
      "Every game on GamingToSpace had to pass the same test: fewer than 50,000 downloads on Google Play, verified by hand, with a description we rewrote ourselves. That sounds simple, but the Play Store is not designed to help you find small games — its charts, search rankings and recommendations all push in the opposite direction, towards titles that already have millions of players. Finding the good small games takes a deliberate method. This guide explains exactly how we do it, so you can judge our listings for yourself — and borrow the method to go hunting on your own.",
    sections: [
      {
        heading: "Step 1: Start from the download brackets, not the charts",
        paragraphs: [
          "Google Play shows every app's install count as a bracket: 1,000+, 5,000+, 10,000+, 50,000+ and so on. Those brackets are the single most useful discovery tool on the store, and almost nobody uses them. A game in the 1,000+ bracket has been installed by roughly a village; a game at 50 million has been installed by a country. We only work in the first three brackets — 1,000+, 5,000+ and 10,000+ — which guarantees every game we list is genuinely small, not just 'less famous than the top ten'.",
          "Working bracket-first changes what you find. Instead of asking 'what is popular in puzzle games?', we ask 'what exists in puzzle games that almost nobody has downloaded yet?' The answers are stranger and more interesting: a tile-matching game built around world landmarks, a cave-diving roguelike made by one person, a cricket management sim written by someone who clearly loves cricket more than marketing. None of those surface in charts, because charts measure momentum, and these games have none yet. That is precisely the point.",
        ],
      },
      {
        heading: "Step 2: Search like a player, verify like an editor",
        paragraphs: [
          "Discovery starts with ordinary player behaviour: searching the Play Store by genre, by mechanic and by theme, following 'similar games' trails from titles we already like, and watching what small developers release next after a game we listed turns out well. A developer who made one good small game usually has another one sitting at 3,000 downloads.",
          "Verification is where the work is. For every candidate we open the actual listing and record the facts exactly as Google Play shows them: the title, the developer name, the category, the install bracket and the public rating, if it has one. We note the date we checked, and that date is printed on every game page on this site, because brackets and ratings move — a game we listed at 1,000+ downloads in October may not be small by Christmas, and we would rather show our working than pretend the numbers are eternal.",
          "We also follow one rule with no exceptions: we never host APK files and never link anywhere except the game's official Google Play page. Small games attract pirated, modified copies on third-party sites, and those copies are exactly where malware hides. If a game cannot be linked cleanly to its official listing, it does not get listed here.",
        ],
      },
      {
        heading: "Step 3: Rewrite every description from scratch",
        paragraphs: [
          "Play Store descriptions are written to sell, often by people copying each other's bullet points, and sometimes pasted from a template with the game's name swapped in. We do not republish them. For each game we write our own short description of what the game actually is — what you do in it, how a session feels, who it suits — based on the listing's genuine information about the game itself.",
          "This matters more than it might seem. A rewritten description is a small act of quality control: to describe a game honestly you have to understand it, and games we cannot understand from their own listing usually turn out to be games nobody should download. The rewriting step filters out a surprising amount of junk before it ever reaches the site. It also means our pages tell you something the store page did not, which is the least a directory owes its readers.",
        ],
      },
      {
        heading: "What we reject — and there is a lot of it",
        paragraphs: [
          "Most small games are not hidden gems; they are just small. For every game listed on GamingToSpace, several candidates were rejected. The common reasons: the listing makes claims its own screenshots contradict; the game is a near-identical clone of another title with the art swapped; the description is empty, copied or written for a different game entirely; or the download bracket has already passed 50,000, which makes it a fine game but not our kind of game.",
          "We are also careful about ratings. A high rating on a tiny game can rest on very few reviews, so we report the rating exactly as Play shows it and let the install bracket give it context — a 5.0 rating at 1,000+ downloads is a promising signal, not a proven fact, and our game pages present it that way, alongside comparisons with the other games in the same category so you can see how it stacks up locally.",
        ],
        list: [
          "Rejected: listings whose screenshots contradict their own description",
          "Rejected: asset-swap clones with no original idea of their own",
          "Rejected: empty, copied or wrong-game descriptions we cannot verify",
          "Rejected: anything already over 50,000 downloads — good, but not hidden",
          "Rejected: any game we cannot link to a clean official Play Store page",
        ],
      },
      {
        heading: "How the directory stays honest over time",
        paragraphs: [
          "A directory decays the moment you stop checking it, so every game page carries its 'listing checked' date and we re-verify listings as we add new games — the newest titles on the site were checked the day they were added. Games grow, ratings change and developers update; when a listed game crosses 50,000 downloads it has, frankly, graduated, and it no longer fits the promise this site makes on its homepage.",
          "Finally, the door is open in both directions. Developers can ask us to list a game — or remove one — through the Contact page, and readers can report a problem with any listing. A small directory run by people who answer their email will always beat an automated scraper, and that is the standard we intend to keep.",
        ],
      },
    ],
    closing:
      "That is the whole method: bracket-first discovery, hand verification, original descriptions, aggressive rejection, and dates on everything. It is slower than scraping, and it is why the catalogue is dozens of games rather than thousands. If you use the same approach yourself — start from the 1,000+ bracket in a genre you love, verify before you download, and always install from the official listing — you will find games your friends have never heard of. Some of them will be the best games on your phone.",
  },
  {
    slug: "best-hidden-puzzle-games-android",
    title: "Best Hidden Puzzle Games on Android You Haven't Played Yet",
    description:
      "Six small Android puzzle games with outstanding ratings and only a few thousand downloads each — matching, sorting and logic gems picked from real GamingToSpace listings.",
    intro:
      "Puzzle is the easiest genre to make and the hardest to make well, which is why the small end of the Play Store is such a good hunting ground: thousands of developers have published their one good idea, and the best of them hold ratings that big studios would envy. Every game below is listed on GamingToSpace, sits under 50,000 downloads, and earns its place with a genuinely high public rating — the highest-rated of them has a perfect score with just 10,000+ installs. These are real listings with real numbers, checked by hand, and each one links to its official Google Play page. If your puzzle folder is full of the same five famous titles, start here.",
    sections: [
      {
        heading: "What 'hidden' actually means in this list",
        paragraphs: [
          "Hidden does not mean obscure for the sake of it. Every pick below is under 50,000 downloads — most are under 10,000 — yet holds a rating of 4.8 or higher, which in puzzle games is a meaningful signal. Puzzle players are honest raters: a game with an unfair difficulty spike or a broken hint system gets marked down fast, because there is nothing else to hide behind. A small puzzle game that keeps a 4.9 average has a fair curve and satisfying solves.",
          "The six games split into three families. Fruity Pop and Triple Tile are matching games — find groups, clear the board. Jelly Puzzle, Cat Out and Froggy Sort are spatial sorting and sliding puzzles where the order of your moves is the whole game. ArrowIQ is pure logic: no theme to lean on, just deduction. Between them they cover most of what puzzle players actually want, and all six are built for the short, thoughtful session — a few minutes, one puzzle, a clean solve.",
        ],
      },
      {
        heading: "How to choose between them",
        paragraphs: [
          "Start with the pace you want. Triple Tile: Explore the World is explicitly relaxed and senior-friendly, built around matching oversized tiles to collect postcards of world landmarks — it is the calmest game on this list. Froggy Sort, sorting frogs by colour onto matching lily pads, has the same gentle energy with a cuter skin. At the other end, ArrowIQ's logic-first design, with daily challenges, suits players who want to feel tested rather than soothed.",
          "Then consider session length. The sorting games — Cat Out Puzzle, where each cat must slide out of the grid without blocking another's escape route, and Jelly Puzzle, where sliding jelly balls trigger chain reactions across the board — produce the best 'one more level' pull, because each solve teaches a small new trick. Fruity Pop, a tap-to-drop matching game, is the quickest of all: a board clears in a minute or two, which makes it the best pick for genuinely short gaps in the day.",
        ],
      },
      {
        heading: "Why puzzle ratings run high — and when to distrust them",
        paragraphs: [
          "Puzzle is the highest-rated category on GamingToSpace, with an average well above most genres, and there are honest reasons for that. Puzzle games ask little of a phone, so they rarely crash; they have no servers, so they cannot go down; and a finished puzzle game stays finished, which means a good one from a small team does not decay. Players reward that reliability.",
          "The caution is sample size. A perfect 5.0 at 10,000+ downloads, like Fruity Pop's, rests on far fewer reviews than a 4.6 at ten million would, and early raters are often the kindest. Treat these ratings as strong recommendations to try a game — the two-minute download costs you nothing — rather than as guarantees. That is also why every pick below states its install bracket next to its rating: the two numbers together are the honest version of the story.",
        ],
      },
    ],
    picks: [
      {
        slug: "fruity-pop-drop-puzzle",
        note: "Our top-rated puzzle game, full stop: a perfect 5.0 on Google Play at just 10,000+ installs. You tap matching fruits so they drop, collide and pop to clear the board — simple to grasp, and the physics of the drops keeps boards from ever feeling identical.",
      },
      {
        slug: "arrowiq-logic-puzzle",
        note: "Rated 4.96 at 5,000+ installs, ArrowIQ is the thinker's pick: work out the correct order to tap arrows off the board, with daily challenges for players who like a streak to protect. Calm, logic-first, and harder than it looks.",
      },
      {
        slug: "triple-tile-explore-the-world",
        note: "Rated 4.92 at only 1,000+ installs — the most undiscovered game on this list. Match oversized tiles in threes to collect illustrated postcards of world landmarks, at a relaxed pace designed to welcome older players too.",
      },
      {
        slug: "jelly-puzzle",
        note: "Rated 4.86 at 1,000+ installs. Slide jelly balls until they hit obstacles and use chain reactions to cover every tile on the board. The chain reactions are the joy here — one good move can finish half a level.",
      },
      {
        slug: "cat-out-puzzle",
        note: "Rated 4.85 at 10,000+ installs, the most-played game in this list. Tap cats in the right order so each slides out of the grid without blocking another cat's escape. Order is everything, and the wrong first tap teaches you fast.",
      },
      {
        slug: "froggy-sort",
        note: "Rated 4.81 at 1,000+ installs. Sort frogs by colour onto matching lily pads to complete each pond. It belongs to the sorting family that puzzle players keep returning to, dressed in the friendliest theme on this list.",
      },
    ],
    closing:
      "Six games, none of them famous, all of them rated 4.8 or higher by the few thousand players who found them first. Download two or three, keep the one whose logic clicks with your brain, and you will understand what this site is for. Every pick links to its official Google Play page — no APKs, no mirrors — and the full puzzle category holds more where these came from, all under 50,000 downloads.",
  },
  {
    slug: "best-hidden-arcade-games-under-50000-downloads",
    title: "Best Hidden Arcade Games Under 50,000 Downloads",
    description:
      "Six small Android arcade games built for one more run — two of them rated a perfect 5.0 — picked from real GamingToSpace listings, all under 50,000 downloads.",
    intro:
      "Arcade games are where small developers punch hardest. An arcade title does not need a world, a story or a server — it needs one mechanic that feels good in ten seconds and a score that makes you tap restart. That levels the field completely, and the proof is in the ratings below: two of the six games on this list hold a perfect 5.0 on Google Play, and none of them has more than 5,000 downloads in most cases. Every pick is a real GamingToSpace listing, verified by hand, linking to its official Play Store page. If you have five spare minutes and one free thumb, this list will use both.",
    sections: [
      {
        heading: "Why arcade is the best genre for hidden gems",
        paragraphs: [
          "In most genres, a small budget shows: fewer levels, rougher art, thinner content. In arcade games the budget barely matters, because the entire product is a loop — jump, dodge, smash, climb — and a loop either sings or it does not. A solo developer can tune a jump for a month until it feels perfect, and that tuning, not money, is what separates a 5.0 arcade game from a forgettable one. Small arcade games also restart instantly and waste none of your time on tutorials or cut-scenes, which makes them the cheapest games on this site to sample: download three, play each for two minutes, keep the winner.",
          "Ratings are unusually trustworthy here too. Arcade players rate the loop and nothing else, so when several of our listed arcade games sit at 4.85 or above — in a category where the average across our catalogue is already high — it means the core action survived hundreds of 'one more run' tests by strangers. The picks below are ordered loosely from purest to most elaborate: a one-tap jumper at one end, a cave-diving action roguelike at the other.",
        ],
      },
      {
        heading: "Matching the game to your kind of session",
        paragraphs: [
          "For the shortest sessions — a queue, a kettle boiling — Mr Cubed: Jump & Bounce and Ghost Jump Go! are built around single climbs where a run can end in seconds and restart in one tap. For something with more texture, SPLIT: Retro Arcade layers a classic space-dodger formula with collectible stars, an unlockable faster Insane mode and boss battles, so a session has a shape rather than just a score. Hit Fest: Cannon Smash swaps reflexes for aim: firing a cannon at targets and structures is a slower, more deliberate pleasure.",
          "Shopper's Paradise HD is the odd one out in the best way — an arcade game themed around a shopping mall, proof that small developers take themes the big studios would never risk. And Voidloop is the deep end: procedurally generated caves, timed descents, mining, fighting and looting, then upgrades at camp between runs. It is rated lower than the others here (4.0) because it asks more of the player — but if you want an arcade game with a campaign's worth of systems, it is the one players talk about.",
        ],
      },
      {
        heading: "A word about ratings at this size",
        paragraphs: [
          "Two perfect 5.0 scores on one list should make a careful reader pause — and that pause is healthy. At 1,000+ or 5,000+ downloads, a rating rests on a small pool of reviewers, and the players who bother to rate an obscure game early are often its happiest. We publish the install bracket beside every rating on this site for exactly that reason: 5.0 at 5,000+ installs means 'everyone who rated it loved it, and few have rated it yet'.",
          "That is still valuable information. Arcade games get abandoned within a day when the loop is weak, so a tiny game holding any high average has passed the only test that matters in this genre — strangers kept playing it. Use the ratings here as a shortlist, then apply the two-minute test from our buying-guide checklist: the game itself always gets the final vote.",
        ],
      },
    ],
    picks: [
      {
        slug: "mr-cubed-jump-bounce",
        note: "Rated a perfect 5.0 at 5,000+ installs. Tap to make a cube jump and bounce upward between platforms in an endless climb — the purest one-more-run game on this site, and the easiest recommendation we make.",
      },
      {
        slug: "split-retro-arcade",
        note: "Also rated 5.0, at just 1,000+ installs. A retro space dodger: steer through obstacles, collect stars, unlock a faster Insane mode and face boss battles. The most complete arcade package here in the smallest download bracket.",
      },
      {
        slug: "hit-fest-cannon-smash",
        note: "Rated 4.97 at 5,000+ installs. Fire a cannon at targets and structures across levels — arcade satisfaction through aim and destruction rather than reflexes, and nearly as perfectly rated as the two 5.0 games above it.",
      },
      {
        slug: "ghost-jump-go",
        note: "Rated 4.85 at 5,000+ installs. A ghost-themed jumping arcade game with the instant-restart rhythm the genre lives on — spooky dressing on a clean, fast loop.",
      },
      {
        slug: "shopper-s-paradise-hd",
        note: "Rated 4.62 at 5,000+ installs. A shopping-mall-themed arcade game from Second Gear Games — the kind of cheerful, specific idea that only survives at small scale, and a good palate cleanser between score-chasers.",
      },
      {
        slug: "voidloop",
        note: "Rated 4.0 at 1,000+ installs — lower, but the most ambitious game here. Descend timed, procedurally generated caves to mine, fight and loot, then upgrade your spirit at camp between runs. Pick this when you want depth, not just a score.",
      },
    ],
    closing:
      "The pattern across all six: tiny install counts, ratings that would make big studios jealous, and loops tuned by people who clearly played their own games a thousand times. That is the arcade bargain — you give up spectacle, you get feel. Browse the full arcade category for the rest of our verified sub-50,000-download picks, and always install from the official Google Play page so the developer gets the download they earned.",
  },
  {
    slug: "how-to-spot-a-good-small-android-game",
    title: "How to Spot a Good Small Android Game (and Avoid Bad Ones)",
    description:
      "A practical checklist for judging any small Android game before you install: reading ratings properly, checking the developer, permissions, Play Protect and the two-minute test.",
    intro:
      "Small Android games are a gamble by design — that is what makes finding a good one satisfying. But the gamble is not blind. The Play Store gives you more evidence about a game than most players ever look at: its rating in context, its reviews in order, its developer's track record, its permission requests and its update history. This checklist is the one we use at GamingToSpace when we verify listings, adapted for any player. Run through it before you install any small game, from this site or anywhere else, and you will dodge most of the junk while keeping the gems.",
    sections: [
      {
        heading: "1. Read the rating as a fraction, not a score",
        paragraphs: [
          "A rating means little without its denominator. A 5.0 average at 1,000+ downloads might rest on thirty reviews from the developer's friends; a 4.4 at 10,000+ downloads rests on thousands of strangers and is, paradoxically, the stronger signal. Neither is automatically better — the 5.0 game might be a genuine gem caught early, which is exactly what sites like this one exist to find — but you should know which bet you are placing. Our game pages always show the rating and the install bracket side by side, and add the category average and the game's rank among its peers, because a 4.6 in a category averaging 4.2 is a different claim from a 4.6 where everything averages 4.8.",
          "Also learn to love the unrated game. Very new and very small titles often show no public rating at all — Google Play does not display one until enough players have rated. 'No rating yet' means unproven, not bad; several developers' first games sit in that state while being genuinely good. Judge those by the rest of this checklist instead.",
        ],
      },
      {
        heading: "2. Read the newest reviews, not the best ones",
        paragraphs: [
          "Sort reviews by newest and read five. You are looking for three things. First, specifics: reviews that name a level, a control or a bug are real evidence, while rows of one-line praise tell you nothing. Second, the present tense: a game that was lovely in 2023 may have been abandoned or filled with ads by a 2025 update, and only recent reviews will say so. Third, the developer's replies: a small developer who answers complaints and ships fixes is the single best predictor that a small game will keep working on your phone.",
          "One warning pattern deserves its own rule: if recent reviews suddenly turn hostile about ads after an update, believe them and move on. Small games change hands and change monetisation, and yesterday's gem can become today's ad wrapper. The listing cannot tell you this. The newest reviews can.",
        ],
      },
      {
        heading: "3. Check the developer, then the permissions",
        paragraphs: [
          "Tap the developer's name. A real small studio has a consistent name, maybe two or three other games, and a contact email that is not a throwaway. A page full of unrelated clones under a random-letter name is a content farm, and its games are built to harvest ad views, not to be played. Neither guarantees quality, but the first kind of developer answers email and fixes bugs; the second kind has already moved on.",
          "Permissions deserve ten seconds of suspicion. A puzzle game asking for your contacts, call logs or precise location has no honest reason; a racing game asking for storage to save replays does. Google Play lists what an app can access in its data safety section — read it the way you would read ingredients. And keep perspective: most small games ask for little, because they do little beyond being a game. The checklist item is cheap. Use it every time.",
        ],
        list: [
          "Consistent developer name with a real contact email",
          "Other games by the same developer that look like games, not clones",
          "Permissions that match the genre — a card game needs almost none",
          "A data safety section you can read in under a minute",
        ],
      },
      {
        heading: "4. Install only from the official listing — and let Play Protect work",
        paragraphs: [
          "Every download button on GamingToSpace opens the game's official Google Play page, and that is a deliberate safety decision, not a lack of imagination. Installing from the official store means Google Play Protect scans the app, updates arrive automatically, and uninstalling is clean. The APK files floating around third-party sites for small games are a genuine risk: obscure titles are perfect camouflage for repackaged malware, precisely because nobody famous is watching them.",
          "The same logic applies to 'mod' and 'unlimited coins' versions of small games. A modified copy of a free game saves you nothing and risks your accounts, your photos and your banking apps. If a small game is worth playing, it is worth the ninety seconds of installing it properly.",
        ],
      },
      {
        heading: "5. Apply the two-minute test, then be ruthless",
        paragraphs: [
          "Evidence gets a game onto your phone; only the game itself earns a stay. Give a new small game exactly two honest minutes. In that time a good small game will have taught you its core idea, let you fail once without punishment, and made you curious about the next attempt. A bad one will have shown you three ads, a sign-up wall, or a tutorial that still has not ended. Delete without guilt — small games are plentiful, and your attention is the scarce resource in this whole system.",
          "Keep a small rotation instead of a huge library: two or three small games you genuinely return to beat forty you opened once. And when you find a good one, rate it. On a game with 1,000 downloads, your single review is a meaningful percentage of its reputation, it steers the next player using this same checklist, and it is the closest thing small developers have to a marketing department.",
        ],
      },
    ],
    closing:
      "None of this takes long — rating in context, five new reviews, a developer check, a permission glance, an official install, two honest minutes. It is the same discipline we apply to every listing on this site, scaled down to fit in your pocket. Small games will still surprise you; that is their charm. But they will surprise you pleasantly far more often once you stop installing them blind.",
  },
];

export function getGuide(slug) {
  return GUIDES.find((g) => g.slug === slug) || null;
}
