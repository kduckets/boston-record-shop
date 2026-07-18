export type Format = "vinyl" | "cd" | "cassette";

export interface Release {
  id: string;
  band: string;
  album: string;
  year: number;
  genre: string;
  formats: Format[];
  coverUrl: string;
  bandcampUrl: string;
  blurb: string;
}

export const FORMAT_LABELS: Record<Format, string> = {
  vinyl: "Vinyl",
  cd: "CD",
  cassette: "Cassette",
};

export const records: Release[] = [
  {
    id: "mission-of-burma-signals-calls-and-marches",
    band: "Mission of Burma",
    album: "Signals, Calls and Marches",
    year: 1981,
    genre: "Post-Punk",
    formats: ["vinyl"],
    coverUrl: "https://f4.bcbits.com/img/a0370464918_10.jpg",
    bandcampUrl:
      "https://missionofburmamusic.bandcamp.com/album/signals-calls-and-marches",
    blurb:
      "The debut EP from Boston's own art-punk pioneers — jagged guitars, tape loops, and the blueprint for a generation of post-punk bands.",
  },
  {
    id: "pile-green-and-gray",
    band: "Pile",
    album: "Green and Gray",
    year: 2019,
    genre: "Noise Rock",
    formats: ["vinyl"],
    coverUrl: "https://f4.bcbits.com/img/a0120018546_10.jpg",
    bandcampUrl: "https://pile.bandcamp.com/album/green-and-gray",
    blurb:
      "Boston noise-rock institution Pile at their most controlled-chaos best — asymmetrical riffs and Rick Maguire's cathartic howl.",
  },
  {
    id: "vundabar-smell-smoke",
    band: "Vundabar",
    album: "Smell Smoke",
    year: 2015,
    genre: "Indie Rock",
    formats: ["vinyl"],
    coverUrl: "https://f4.bcbits.com/img/a1493987580_10.jpg",
    bandcampUrl: "https://vundabar.bandcamp.com/album/smell-smoke",
    blurb:
      "Scrappy, hook-heavy garage-pop from a Boston trio that turned basement-show energy into a real songwriting streak.",
  },
  {
    id: "horse-jumper-of-love-natural-part",
    band: "Horse Jumper of Love",
    album: "Natural Part",
    year: 2023,
    genre: "Slowcore",
    formats: ["vinyl", "cassette"],
    coverUrl: "https://f4.bcbits.com/img/a3316616840_10.jpg",
    bandcampUrl: "https://horsejumperoflove.bandcamp.com/album/natural-part",
    blurb:
      "Woozy, half-whispered guitar songs from a Boston band that's mastered the art of the slow burn.",
  },
  {
    id: "really-from-verse",
    band: "Really From",
    album: "Verse",
    year: 2018,
    genre: "Indie / Jazz",
    formats: ["vinyl", "cd", "cassette"],
    coverUrl: "https://f4.bcbits.com/img/a2747507295_10.jpg",
    bandcampUrl: "https://reallyfrom.bandcamp.com/album/verse",
    blurb:
      "A Boston outfit weaving jazz chords, math-y guitar, and multilingual lyrics into something genuinely its own.",
  },
  {
    id: "bent-shapes-wolves-of-want",
    band: "Bent Shapes",
    album: "Wolves Of Want",
    year: 2013,
    genre: "Indie Pop",
    formats: ["vinyl", "cd"],
    coverUrl: "https://f4.bcbits.com/img/a0079073719_10.jpg",
    bandcampUrl: "https://bentshapes.bandcamp.com/album/wolves-of-want",
    blurb:
      "Wiry, wordy jangle-pop from a Boston band with a soft spot for a killer hook and a sharper turn of phrase.",
  },
  {
    id: "piebald-we-are-the-only-friends-we-have",
    band: "Piebald",
    album: "We Are The Only Friends We Have",
    year: 2024,
    genre: "Emo",
    formats: ["vinyl"],
    coverUrl: "https://f4.bcbits.com/img/a2538393362_10.jpg",
    bandcampUrl:
      "https://iodinerecordings.bandcamp.com/album/we-are-the-only-friends-we-have-standard-edition",
    blurb:
      "Reissued via Boston's own Iodine Recordings — sing-along emo from a band that soundtracked a whole era of basement shows.",
  },
  {
    id: "big-d-and-the-kids-table-for-the-damned",
    band: "Big D and the Kids Table",
    album: "For The Damned, The Dumb and The Delirious",
    year: 2011,
    genre: "Ska Punk",
    formats: ["cd"],
    coverUrl: "https://f4.bcbits.com/img/a1200028641_10.jpg",
    bandcampUrl:
      "https://bigdandthekidstableofficial.bandcamp.com/album/for-the-damned-the-dumb-and-the-delirious",
    blurb:
      "Horn-driven, high-energy ska-punk from one of Boston's longest-running party bands.",
  },
  {
    id: "shepherdess-im-saving-myself-for-shepherdess",
    band: "Shepherdess",
    album: "I'm Saving Myself for Shepherdess",
    year: 2013,
    genre: "Post-Punk",
    formats: ["vinyl"],
    coverUrl: "https://f4.bcbits.com/img/a0804033595_10.jpg",
    bandcampUrl:
      "https://shepherdess.bandcamp.com/album/im-saving-myself-for-shepherdess",
    blurb:
      "Slack, sly post-punk from a band that practices in Somerville's Union Square — led by Hilken Mancini of beloved 90s Boston band Fuzzy.",
  },
  {
    id: "bent-knee-frosting",
    band: "Bent Knee",
    album: "Frosting",
    year: 2021,
    genre: "Prog Rock",
    formats: ["vinyl", "cd"],
    coverUrl: "https://f4.bcbits.com/img/a3886237306_10.jpg",
    bandcampUrl: "https://bentknee.bandcamp.com/album/frosting",
    blurb:
      "A Boston art-rock sextet that treats genre as a suggestion — swerving from pop hooks to avant-garde noise without ever losing the plot.",
  },
  {
    id: "we-broke-the-weather-restart-game",
    band: "we broke the weather",
    album: "Restart Game",
    year: 2024,
    genre: "Prog Rock",
    formats: ["vinyl", "cd"],
    coverUrl: "https://f4.bcbits.com/img/a1417216465_10.jpg",
    bandcampUrl: "https://webroketheweather.bandcamp.com/album/restart-game",
    blurb:
      "Self-described \"garage prog\" out of Somerville — five players who started jamming as strangers in a basement and came out the other side fusing prog, jazz fusion, and stoner rock.",
  },
  {
    id: "the-rupert-selection-crumbs-for-the-sun",
    band: "The Rupert Selection",
    album: "Crumbs for the Sun",
    year: 2023,
    genre: "Psych Grunge",
    formats: ["cd"],
    coverUrl: "https://f4.bcbits.com/img/a1586845602_10.jpg",
    bandcampUrl:
      "https://therupertselection.bandcamp.com/album/crumbs-for-the-sun",
    blurb:
      "A Boston trio that sounds like Nirvana and The Mars Volta fighting over the aux cord — hard-rock riffs bent through math-prog rhythm shifts.",
  },
  {
    id: "clamb-earth-mother-grapefruit",
    band: "Clamb",
    album: "Earth Mother Grapefruit",
    year: 2021,
    genre: "Krautrock",
    formats: ["vinyl"],
    coverUrl: "https://f4.bcbits.com/img/a1539645579_10.jpg",
    bandcampUrl: "https://clamb.bandcamp.com/album/earth-mother-grapefruit",
    blurb:
      "Four self-described \"earthmagik peacelords\" out of Allston, blending krautrock, zeuhl, and fusion into one long spacey groove.",
  },
  {
    id: "astronoid-astronoid",
    band: "Astronoid",
    album: "Astronoid",
    year: 2019,
    genre: "Blackgaze",
    formats: ["cd"],
    coverUrl: "https://f4.bcbits.com/img/a1350767353_10.jpg",
    bandcampUrl: "https://astronoid.bandcamp.com/album/astronoid",
    blurb:
      "Blast beats under shoegaze-bright guitars — a Massachusetts band that made \"metal you can smile to\" its whole mission statement.",
  },
  {
    id: "lesotho-through-the-dying-light",
    band: "Lesotho",
    album: "Through the Dying Light",
    year: 2023,
    genre: "Post-Metal",
    formats: ["cassette"],
    coverUrl: "https://f4.bcbits.com/img/a2501856521_10.jpg",
    bandcampUrl: "https://lesotho.bandcamp.com/album/through-the-dying-light",
    blurb:
      "A Boston instrumental trio building long, heavy, riff-driven arcs out of post-metal and post-rock with no verse-chorus safety net.",
  },
  {
    id: "courtney-swain-growing-pains",
    band: "Courtney Swain",
    album: "Growing Pains",
    year: 2017,
    genre: "Electropop",
    formats: ["cd"],
    coverUrl: "https://f4.bcbits.com/img/a0656231676_10.jpg",
    bandcampUrl: "https://courtneyswain.bandcamp.com/album/growing-pains",
    blurb:
      "The Bent Knee frontwoman's solo debut — dreamy electropop and virtuosic keyboard work that stands entirely apart from the band.",
  },
  {
    id: "converge-love-is-not-enough",
    band: "Converge",
    album: "Love Is Not Enough",
    year: 2026,
    genre: "Metalcore",
    formats: ["vinyl", "cd"],
    coverUrl: "https://f4.bcbits.com/img/a1291330267_10.jpg",
    bandcampUrl: "https://convergecult.bandcamp.com/album/love-is-not-enough",
    blurb:
      "Boston hardcore royalty — the band that helped invent metalcore, still hitting as hard as ever decades in.",
  },
];

export const genres = Array.from(new Set(records.map((r) => r.genre))).sort();
