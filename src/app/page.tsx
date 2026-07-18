import { records, genres } from "@/data/records";
import { ShopBrowser } from "@/components/ShopBrowser";

export default function Home() {
  return (
    <div className="min-h-screen">
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
