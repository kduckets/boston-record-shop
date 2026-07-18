import Image from "next/image";
import type { Release } from "@/data/records";
import { FormatIcon } from "./FormatIcon";

export function RecordCard({
  release,
  onSelect,
}: {
  release: Release;
  onSelect: (release: Release) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onSelect(release)}
      className="group relative flex flex-col text-left focus:outline-none"
    >
      <span
        className="record-cover-shadow relative block aspect-square w-full overflow-hidden bg-ink/10 transition-transform duration-200 ease-out group-hover:-translate-y-1 group-hover:rotate-[-1.5deg] group-focus-visible:-translate-y-1 group-focus-visible:ring-2 group-focus-visible:ring-mustard"
      >
        <Image
          src={release.coverUrl}
          alt={`${release.album} by ${release.band}`}
          fill
          sizes="(min-width: 1024px) 22vw, (min-width: 640px) 30vw, 45vw"
          className="object-cover"
        />
        <span className="pointer-events-none absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-ink/90 via-ink/0 to-ink/0 p-3 opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
          <span className="font-display text-sm font-semibold leading-tight text-paper">
            {release.album}
          </span>
          <span className="font-stamp text-[11px] text-paper/80">
            {release.band}
          </span>
        </span>
        <span className="absolute right-2 top-2 flex gap-1">
          {release.formats.map((f) => (
            <span
              key={f}
              className="flex size-6 items-center justify-center rounded-full bg-paper/90 text-ink shadow-sm"
            >
              <FormatIcon format={f} className="size-3.5" />
            </span>
          ))}
        </span>
      </span>
      <span className="mt-2 font-display text-sm font-semibold text-ink">
        {release.band}
      </span>
      <span className="font-stamp text-xs text-ink-soft">
        {release.album} &middot; {release.year}
      </span>
    </button>
  );
}
