/* Captions for the Lägern traverse.
   Key = filename without extension. Edit freely — the page reads this at load.
   Frames without an entry fall back to the mono altitude/time readout only. */

window.CAPTIONS = {
  // ── Out of Baden ────────────────────────────────────────────────
  "2026-07-25 11-08-13": "Eight past eleven, 470 metres, and already off the tarmac. The Lägern doesn't bother with a warm-up — the path leaves Baden and goes straight up through the oaks.",
  "2026-07-25 11-27-28": "Twenty minutes of climbing in and the ground has turned to rubble. This is the Lägern's calling card: broken Jurassic limestone, most of it loose.",
  "2026-07-25 11-28-12": "The path narrows onto the flank. White rock, dry grass, and a fairly persuasive drop on the right.",
  "2026-07-25 11-32-25": "Roots doing the work of stairs.",
  "2026-07-25 11-38-06": "First proper gap in the canopy. The plain below is already going hazy in the heat.",
  "2026-07-25 11-39-17": "Slow motion, because a rock slab this smooth deserves it. Shot at 120 frames a second.",

  // ── Onto the crest ──────────────────────────────────────────────
  "2026-07-25 11-54-09": "Campanula, growing straight out of the limestone chippings. This violet turns up all along the ridge and it ended up being the accent colour of this whole page.",
  "2026-07-25 11-54-17": "A better clump of them.",
  "2026-07-25 11-54-27": "Close enough to see the bells properly.",
  "2026-07-25 11-54-37": "Scattered across the woodland floor among last autumn's leaves.",
  "2026-07-25 11-58-50": "Spindle berries — those coral capsules split open to bright orange seeds. Pretty, and thoroughly poisonous.",
  "2026-07-25 12-08-40": "Just past 12:08 the ridge stops being a hill and becomes an edge.",
  "2026-07-25 12-08-42": "Out on the rock nose, framed by oak.",
  "2026-07-25 12-10-46": "The bare spine of the trail lifting away through the scrub.",

  // ── The narrow bit ──────────────────────────────────────────────
  "2026-07-25 12-13-22": "Standing on the crest with air on both sides.",
  "2026-07-25 12-13-29": "Sky overhead, oak leaves, and not much width to spare.",
  "2026-07-25 12-13-59": "Walking the rock. No hands needed here, but you do watch your feet.",
  "2026-07-25 12-15-11": "The rib steepens. Tilted strata, laid down as seabed and stood on end since.",
  "2026-07-25 12-15-13": "Same rib, and you can read the bedding in the stone.",
  "2026-07-25 12-15-16": "Looking straight down into the treetops.",
  "2026-07-25 12-15-18": "And out the other way — the whole plain, one bleached snag in the foreground.",

  // ── Below here: add your own. ───────────────────────────────────
  // The frames from 12:22 onward are in the gallery with their real time
  // and altitude, but no written comment yet.
};

/* Quotes on the flower and plant frames. One per frame.
   Rendered as a pull-quote beneath the photo, separate from the caption.
   Deliberately omitted: the Luther "God writes the gospel on trees and flowers"
   line and Kepler's "thinking God's thoughts after him" — both circulate widely
   but neither traces to a primary source. */

window.QUOTES = {
  /* Campanula on the limestone, 11:54 */
  "2026-07-25 11-54-09": { t: "&ldquo;God is love&rdquo; is written upon every opening bud, upon every spire of springing grass.", a: "Ellen G. White", s: "Steps to Christ" },
  "2026-07-25 11-54-17": { t: "There is no portion of the world, however minute, that does not exhibit at least some sparks of beauty.", a: "John Calvin", s: "Institutes I.v" },
  "2026-07-25 11-54-27": { t: "The world is charged with the grandeur of God.", a: "Gerard Manley Hopkins", s: "God&rsquo;s Grandeur" },
  "2026-07-25 11-54-37": { t: "The green fields, the lofty trees, the buds and flowers, the passing cloud, the falling rain, the babbling brook &mdash; they speak to our hearts.", a: "Ellen G. White", s: "Steps to Christ" },

  /* Spindle and the berry frames */
  "2026-07-25 11-58-50": { t: "Deus creavit, Linnaeus disposuit. &mdash; God created, Linnaeus arranged.", a: "Carl Linnaeus", s: "inscribed on his herbarium" },
  "2026-07-25 12-40-48": { t: "On every leaf of the forest and stone of the mountains, in every shining star, in earth and sea and sky, God&rsquo;s name was written.", a: "Ellen G. White", s: "Education, ch. 2" },
  "2026-07-25 12-49-09": { t: "I questioned the earth, the sea, the sky &mdash; and they answered that they did not make themselves. Their beauty is their confession.", a: "Augustine", s: "Confessions X" },
  "2026-07-25 13-54-21": { t: "God gives us two books &mdash; the Scriptures, and the book of His works. We should not stop reading either.", a: "Francis Bacon", s: "" },
  "2026-07-25 13-54-30": { t: "God is strong enough to exult in monotony. It may be that He says every morning to the sun, &lsquo;Do it again.&rsquo;", a: "G. K. Chesterton", s: "Orthodoxy" },
  "2026-07-25 14-29-33": { t: "As we come close to the heart of nature, Christ makes His presence real to us.", a: "Ellen G. White", s: "Christ&rsquo;s Object Lessons, ch. 1" },
  "2026-07-25 14-29-34": { t: "God has so magnificently adorned the world that we are not merely spectators of this beautiful theatre, but enjoy its abundance.", a: "John Calvin", s: "Commentary on Genesis" },
  "2026-07-25 14-29-35": { t: "The things of nature are the Lord&rsquo;s silent ministers, given to us to teach us spiritual truths.", a: "Ellen G. White", s: "" },
  "2026-07-25 14-29-37 (2)": { t: "Nature and revelation alike testify of God&rsquo;s love. Our Father in heaven is the source of life, of wisdom, and of joy.", a: "Ellen G. White", s: "Steps to Christ, ch. 1" }
};

/* The remaining well-sourced lines from the collection, placed on the open
   frames — the astronomy quotes want sky, Muir wants the ridge. */
Object.assign(window.QUOTES, {
  "2026-07-25 12-15-18": { t: "The mountains are fountains of men as well as of rivers, of glaciers, of fertile soil.", a: "John Muir", s: "Our National Parks" },
  "2026-07-25 12-22-47": { t: "I only went out for a walk, and finally concluded to stay out till sundown; for going out, I found, was really going in.", a: "John Muir", s: "journal, 1913" },
  "2026-07-25 13-10-36": { t: "The laws of nature are within the grasp of the human mind. God wanted us to recognise them by creating us in his image, so that we could share in his own thoughts.", a: "Johannes Kepler", s: "letter to Herwart von Hohenburg, 1599" },
  "2026-07-25 13-11-51": { t: "Astronomers are priests of the highest God in regard to the book of nature.", a: "Johannes Kepler", s: "" },
  "2026-07-25 13-24-12": { t: "This most beautiful system of sun, planets and comets could only proceed from the counsel and dominion of an intelligent and powerful Being.", a: "Isaac Newton", s: "Principia, General Scholium" }
});
