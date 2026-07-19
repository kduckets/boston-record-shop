import { records, genres } from "@/data/records";
import { ShopBrowser } from "@/components/ShopBrowser";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Store",
        "@id": "https://bostonwax.com/#store",
        name: "Boston Wax",
        description:
          "A record shop for local Boston bands only. Vinyl, CDs, and cassettes from artists across the Boston music scene, including Somerville and Cambridge — buy straight from each band's own Bandcamp store.",
        url: "https://bostonwax.com",
        image: "https://bostonwax.com/opengraph-image",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Boston",
          addressRegion: "MA",
          addressCountry: "US",
        },
        areaServed: "Boston, Massachusetts",
      },
      {
        "@type": "ItemList",
        name: "Boston Wax Catalog",
        itemListElement: records.map((release, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "MusicAlbum",
            name: release.album,
            genre: release.genre,
            datePublished: String(release.year),
            image: release.coverUrl,
            url: release.bandcampUrl,
            byArtist: {
              "@type": "MusicGroup",
              name: release.band,
            },
          },
        })),
      },
    ],
  };

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <header className="border-b border-ink/10 bg-paper">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:py-10">
          <p className="font-stamp text-xs uppercase tracking-[0.3em] text-oxblood">
            Est. today &middot; Boston, MA
          </p>
          <h1 className="font-logo mt-1 text-4xl tracking-tight text-ink sm:text-5xl">
            Boston Wax
          </h1>
          <p className="mt-2 max-w-xl text-sm text-ink-soft sm:text-base">
            A record shop for locals only.
          </p>
        </div>
      </header>

      <main>
        <ShopBrowser records={records} genres={genres} />
      </main>

      <footer className="border-t border-ink/10 px-4 py-8 text-center font-stamp text-xs text-ink-soft">
        Every purchase link goes straight to the artist&apos;s own Bandcamp
        store.
      </footer>
    </div>
  );
}
