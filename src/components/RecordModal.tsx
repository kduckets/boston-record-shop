"use client";

import { useEffect } from "react";
import Image from "next/image";
import type { Release } from "@/data/records";
import { FORMAT_LABELS } from "@/data/records";
import { FormatIcon } from "./FormatIcon";

export function RecordModal({
  release,
  onClose,
}: {
  release: Release;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${release.album} by ${release.band}`}
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/70 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative grid w-full max-w-3xl grid-cols-1 overflow-hidden rounded-sm border-4 border-crate-wood bg-paper shadow-2xl sm:grid-cols-2"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-3 top-3 z-10 flex size-8 items-center justify-center rounded-full bg-ink/80 font-stamp text-paper hover:bg-oxblood"
        >
          &times;
        </button>

        <div className="record-cover-shadow relative aspect-square w-full bg-ink/10">
          <Image
            src={release.coverUrl}
            alt={`${release.album} by ${release.band}`}
            fill
            sizes="(min-width: 640px) 50vw, 100vw"
            className="object-cover"
            priority
          />
        </div>

        <div className="flex flex-col justify-between p-6 sm:p-8">
          <div>
            <p className="font-stamp text-xs uppercase tracking-widest text-oxblood">
              {release.genre} &middot; {release.year}
            </p>
            <h2 className="font-display mt-1 text-2xl font-bold leading-tight text-ink sm:text-3xl">
              {release.album}
            </h2>
            <p className="font-display mt-1 text-lg italic text-ink-soft">
              {release.band}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-ink-soft">
              {release.blurb}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {release.formats.map((f) => (
                <span
                  key={f}
                  className="flex items-center gap-1.5 rounded-full border border-ink/20 bg-paper-dark px-2.5 py-1 font-stamp text-[11px] uppercase tracking-wide text-ink"
                >
                  <FormatIcon format={f} className="size-3.5" />
                  {FORMAT_LABELS[f]}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6 flex items-center gap-3">
            <a
              href={release.bandcampUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 rounded-sm bg-oxblood px-4 py-3 text-center font-display font-semibold text-paper transition-colors hover:bg-oxblood-dark"
            >
              Buy on Bandcamp
            </a>
            <a
              href={release.bandcampUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Stream ${release.album} on Bandcamp`}
              title="Stream on Bandcamp"
              className="flex size-12 shrink-0 items-center justify-center rounded-full border-2 border-ink text-ink transition-colors hover:border-teal hover:text-teal"
            >
              <svg viewBox="0 0 24 24" fill="none" className="size-5" aria-hidden>
                <circle cx="12" cy="12" r="9.5" stroke="currentColor" strokeWidth="1.4" />
                <path d="M10 8.5v7l6-3.5-6-3.5Z" fill="currentColor" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
