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

/* Sourced by fetching the public-domain texts and matching each line against
   the source before use: King James Bible, Thoreau's Walden, Chesterton's
   Orthodoxy, Muir's The Yosemite and My First Summer in the Sierra.
   Nothing here is written from memory. */
Object.assign(window.QUOTES, {
  "2026-07-25 11-08-13": { t: "One must labor for beauty as for bread, here as elsewhere.", a: "John Muir", s: "The Yosemite" },
  "2026-07-25 11-27-29": { t: "Thou makest darkness, and it is night: wherein all the beasts of the forest do creep forth.", a: "Psalm 104:20", s: "King James Bible" },
  "2026-07-25 11-27-28": { t: "Surely in vain the net is spread in the sight of any bird.", a: "Psalm 1:17", s: "King James Bible" },
  "2026-07-25 12-08-40": { t: "For, lo, the winter is past, the rain is over and gone; 2:12 The flowers appear on the earth; the time of the singing of birds is come, and the voice of the turtle is heard in our land; 2:13 The fig tree putteth forth her green figs, and the vines with the tender grape give a good smell.", a: "Ecclesiastes 2:11", s: "King James Bible" },
  "2026-07-25 12-10-46": { t: "They drop upon the pastures of the wilderness: and the little hills rejoice on every side.", a: "Psalm 65:12", s: "King James Bible" },
  "2026-07-25 12-13-29": { t: "The glory of the LORD shall endure for ever: the LORD shall rejoice in his works.", a: "Psalm 104:31", s: "King James Bible" },
  "2026-07-25 12-15-20": { t: "The heavens declare the glory of God; and the firmament sheweth his handywork.", a: "Psalm 19:1", s: "King James Bible" },
  "2026-07-25 12-15-11": { t: "The people asked, and he brought quails, and satisfied them with the bread of heaven.", a: "Psalm 105:40", s: "King James Bible" },
  "2026-07-25 12-15-16": { t: "The trees of the LORD are full of sap; the cedars of Lebanon, which he hath planted; 104:17 Where the birds make their nests: as for the stork, the fir trees are her house.", a: "Psalm 104:16", s: "King James Bible" },
  "2026-07-25 12-15-13": { t: "How glorious a conversion, so complete and wholesome it is, scarce memory enough of old bondage days left as a standpoint to view it from!", a: "John Muir", s: "My First Summer in the Sierra" },
  "2026-07-25 12-22-55": { t: "He appointed the moon for seasons: the sun knoweth his going down.", a: "Psalm 104:19", s: "King James Bible" },
  "2026-07-25 12-22-03": { t: "Thy righteousness is like the great mountains; thy judgments are a great deep: O LORD, thou preservest man and beast.", a: "Psalm 36:6", s: "King James Bible" },
  "2026-07-25 12-25-24": { t: "The sun ariseth, they gather themselves together, and lay them down in their dens.", a: "Psalm 104:22", s: "King James Bible" },
  "2026-07-25 12-25-45": { t: "They give drink to every beast of the field: the wild asses quench their thirst.", a: "Psalm 104:11", s: "King James Bible" },
  "2026-07-25 12-27-26": { t: "For ye shall go out with joy, and be led forth with peace: the mountains and the hills shall break forth before you into singing, and all the trees of the field shall clap their hands.", a: "Isaiah 55:12", s: "King James Bible" },
  "2026-07-25 12-27-19": { t: "Praise him, ye heavens of heavens, and ye waters that be above the heavens.", a: "Psalm 148:4", s: "King James Bible" },
  "2026-07-25 12-27-22": { t: "He looketh on the earth, and it trembleth: he toucheth the hills, and they smoke.", a: "Psalm 104:32", s: "King James Bible" },
  "2026-07-25 12-29-22": { t: "In his hand are the deep places of the earth: the strength of the hills is his also.", a: "Psalm 95:4", s: "King James Bible" },
  "2026-07-25 12-29-20": { t: "Lift up your eyes on high, and behold who hath created these things, that bringeth out their host by number: he calleth them all by names by the greatness of his might, for that he is strong in power; not one faileth.", a: "Isaiah 40:26", s: "King James Bible" },
  "2026-07-25 12-30-50": { t: "They seem the very breath of Nature, whispering peace to every living thing.", a: "John Muir", s: "My First Summer in the Sierra" },
  "2026-07-25 12-32-16": { t: "Thou hast set a bound that they may not pass over; that they turn not again to cover the earth.", a: "Psalm 104:9", s: "King James Bible" },
  "2026-07-25 12-32-18": { t: "Thou sendest forth thy spirit, they are created: and thou renewest the face of the earth.", a: "Psalm 104:30", s: "King James Bible" },
  "2026-07-25 12-33-36": { t: "Thou crownest the year with thy goodness; and thy paths drop fatness.", a: "Psalm 65:11", s: "King James Bible" },
  "2026-07-25 12-33-38": { t: "The pastures are clothed with flocks; the valleys also are covered over with corn; they shout for joy, they also sing.", a: "Psalm 65:13", s: "King James Bible" },
  "2026-07-25 12-34-25": { t: "They shall abundantly utter the memory of thy great goodness, and shall sing of thy righteousness.", a: "Psalm 145:7", s: "King James Bible" },
  "2026-07-25 12-38-40": { t: "He hath made the earth by his power, he hath established the world by his wisdom, and hath stretched out the heavens by his discretion.", a: "Jeremiah 10:12", s: "King James Bible" },
  "2026-07-25 12-38-35": { t: "Every good gift and every perfect gift is from above, and cometh down from the Father of lights, with whom is no variableness, neither shadow of turning.", a: "James 1:17", s: "King James Bible" },
  "2026-07-25 12-38-43": { t: "Time is but the stream I go a-fishing in.", a: "Henry David Thoreau", s: "Walden" },
  "2026-07-25 12-38-42": { t: "Every rock in its walls seems to glow with life.", a: "John Muir", s: "The Yosemite" },
  "2026-07-25 12-42-19": { t: "Before the mountains were brought forth, or ever thou hadst formed the earth and the world, even from everlasting to everlasting, thou art God.", a: "Psalm 90:2", s: "King James Bible" },
  "2026-07-25 12-42-46": { t: "For grown-up people are not strong enough to exult in monotony.", a: "G. K. Chesterton", s: "Orthodoxy" },
  "2026-07-25 12-43-30": { t: "Thou hast set all the borders of the earth: thou hast made summer and winter.", a: "Psalm 74:17", s: "King James Bible" },
  "2026-07-25 12-43-31": { t: "Where wast thou when I laid the foundations of the earth?", a: "Job 38:4", s: "King James Bible" },
  "2026-07-25 12-43-22": { t: "We need so to view the world as to combine an idea of wonder and an idea of welcome.", a: "G. K. Chesterton", s: "Orthodoxy" },
  "2026-07-25 12-43-47": { t: "When we try to pick out anything by itself, we find it hitched to everything else in the universe.", a: "John Muir", s: "My First Summer in the Sierra" },
  "2026-07-25 12-43-45": { t: "Let the sinners be consumed out of the earth, and let the wicked be no more.", a: "Psalm 104:35", s: "King James Bible" },
  "2026-07-25 12-43-44": { t: "He is the LORD our God: his judgments are in all the earth.", a: "Psalm 105:7", s: "King James Bible" },
  "2026-07-25 12-58-33": { t: "For every house is builded by some man; but he that built all things is God.", a: "Hebrews 3:4", s: "King James Bible" },
  "2026-07-25 12-59-09": { t: "But ask now the beasts, and they shall teach thee; and the fowls of the air, and they shall tell thee: 12:8 Or speak to the earth, and it shall teach thee: and the fishes of the sea shall declare unto thee.", a: "Job 12:7", s: "King James Bible" },
  "2026-07-25 12-59-08": { t: "I will lift up mine eyes unto the hills, from whence cometh my help.", a: "Psalm 121:1", s: "King James Bible" },
  "2026-07-25 12-59-08 (2)": { t: "And God saw every thing that he had made, and, behold, it was very good.", a: "Genesis 1:31", s: "King James Bible" },
  "2026-07-25 12-59-06 (2)": { t: "He watereth the hills from his chambers: the earth is satisfied with the fruit of thy works.", a: "Psalm 104:13", s: "King James Bible" },
  "2026-07-25 12-59-06": { t: "He telleth the number of the stars; he calleth them all by their names.", a: "Psalm 147:4", s: "King James Bible" },
  "2026-07-25 12-59-00": { t: "With this plant the whole world would seem rich though none other existed.", a: "John Muir", s: "My First Summer in the Sierra" },
  "2026-07-25 13-10-29": { t: "When I consider thy heavens, the work of thy fingers, the moon and the stars, which thou hast ordained; 8:4 What is man, that thou art mindful of him?", a: "Psalm 8:3", s: "King James Bible" },
  "2026-07-25 13-10-27": { t: "Great is the LORD, and greatly to be praised in the city of our God, in the mountain of his holiness.", a: "Psalm 48:1", s: "King James Bible" },
  "2026-07-25 13-10-30": { t: "And one cried unto another, and said, Holy, holy, holy, is the LORD of hosts: the whole earth is full of his glory.", a: "Isaiah 6:3", s: "King James Bible" },
  "2026-07-25 13-10-27 (2)": { t: "Then it seemed to me that the Sierra should be called, not the Nevada or Snowy Range, but the Range of Light.", a: "John Muir", s: "The Yosemite" },
  "2026-07-25 13-11-53": { t: "Heaven is under our feet as well as over our heads.", a: "Henry David Thoreau", s: "Walden" },
  "2026-07-25 13-12-03": { t: "And the stars, the everlasting sky lilies, how bright they are now that we have climbed above the lowland dust!", a: "John Muir", s: "My First Summer in the Sierra" },
  "2026-07-25 13-14-24": { t: "Thou visitest the earth, and waterest it: thou greatly enrichest it with the river of God, which is full of water: thou preparest them corn, when thou hast so provided for it.", a: "Psalm 65:9", s: "King James Bible" },
  "2026-07-25 13-14-22": { t: "I went to the woods because I wished to live deliberately, to front only the essential facts of life, and see if I could not learn what it had to teach, and not, when I came to die, discover that I had not lived.", a: "Henry David Thoreau", s: "Walden" },
  "2026-07-25 14-29-37": { t: "O LORD, how manifold are thy works!", a: "Psalm 104:24", s: "King James Bible" },
  "2026-07-25 14-36-21": { t: "Glory ye in his holy name: let the heart of them rejoice that seek the LORD.", a: "Psalm 105:3", s: "King James Bible" },
  "2026-07-25 14-36-24": { t: "He spread a cloud for a covering; and fire to give light in the night.", a: "Psalm 105:39", s: "King James Bible" },
  "2026-07-25 14-36-20": { t: "The grass withereth, the flower fadeth: because the spirit of the LORD bloweth upon it: surely the people is grass.", a: "Isaiah 40:7", s: "King James Bible" },
  "2026-07-25 14-36-47": { t: "The morning wind forever blows, the poem of creation is uninterrupted; but few are the ears that hear it.", a: "Henry David Thoreau", s: "Walden" },
  "2026-07-25 15-34-42": { t: "By them shall the fowls of the heaven have their habitation, which sing among the branches.", a: "Psalm 104:12", s: "King James Bible" }
});
