"use client";

import type { Format } from "@/data/records";
import { FORMAT_LABELS } from "@/data/records";
import { FormatIcon } from "./FormatIcon";

export type SortMode = "band" | "newest" | "oldest";

const ALL_FORMATS: Format[] = ["vinyl", "cd", "cassette"];

export function FilterBar({
  genres,
  selectedGenre,
  onGenreChange,
  selectedFormats,
  onToggleFormat,
  sortMode,
  onSortChange,
  resultCount,
}: {
  genres: string[];
  selectedGenre: string;
  onGenreChange: (genre: string) => void;
  selectedFormats: Format[];
  onToggleFormat: (format: Format) => void;
  sortMode: SortMode;
  onSortChange: (mode: SortMode) => void;
  resultCount: number;
}) {
  return (
    <div className="border-b-4 border-crate-wood bg-crate-wood pb-0 pt-3">
      <div className="mx-auto flex max-w-6xl flex-wrap items-end gap-x-1 gap-y-2 overflow-x-auto px-4">
        <button
          type="button"
          onClick={() => onGenreChange("All")}
          className={`crate-tab shrink-0 px-4 py-2 font-tab text-xs uppercase tracking-wide transition-colors ${
            selectedGenre === "All"
              ? "bg-paper text-ink"
              : "bg-crate-wood-dark text-paper/80 hover:bg-paper/20 hover:text-paper"
          }`}
        >
          All Bins
        </button>
        {genres.map((genre) => (
          <button
            key={genre}
            type="button"
            onClick={() => onGenreChange(genre)}
            className={`crate-tab shrink-0 px-4 py-2 font-tab text-xs uppercase tracking-wide transition-colors ${
              selectedGenre === genre
                ? "bg-paper text-ink"
                : "bg-crate-wood-dark text-paper/80 hover:bg-paper/20 hover:text-paper"
            }`}
          >
            {genre}
          </button>
        ))}
      </div>

      <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-3 bg-paper px-4 py-3">
        <span className="font-stamp text-xs uppercase tracking-widest text-ink-soft">
          Format
        </span>
        {ALL_FORMATS.map((format) => {
          const active = selectedFormats.includes(format);
          return (
            <button
              key={format}
              type="button"
              onClick={() => onToggleFormat(format)}
              aria-pressed={active}
              className={`flex items-center gap-1.5 rounded-full border px-3 py-1.5 font-stamp text-xs uppercase tracking-wide transition-colors ${
                active
                  ? "border-oxblood bg-oxblood text-paper"
                  : "border-ink/25 text-ink-soft hover:border-ink/50 hover:text-ink"
              }`}
            >
              <FormatIcon format={format} className="size-3.5" />
              {FORMAT_LABELS[format]}
            </button>
          );
        })}

        <div className="ml-auto flex items-center gap-2">
          <label
            htmlFor="sort"
            className="font-stamp text-xs uppercase tracking-widest text-ink-soft"
          >
            Sort
          </label>
          <select
            id="sort"
            value={sortMode}
            onChange={(e) => onSortChange(e.target.value as SortMode)}
            className="rounded-sm border border-ink/25 bg-paper px-2 py-1.5 font-stamp text-xs uppercase tracking-wide text-ink"
          >
            <option value="band">Band A–Z</option>
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
          </select>
        </div>

        <span className="font-stamp text-xs text-ink-soft">
          {resultCount} {resultCount === 1 ? "record" : "records"}
        </span>
      </div>
    </div>
  );
}
