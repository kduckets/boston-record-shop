"use client";

import { useMemo, useState } from "react";
import type { Format, Release } from "@/data/records";
import { FilterBar, type SortMode } from "./FilterBar";
import { RecordCard } from "./RecordCard";
import { RecordModal } from "./RecordModal";

export function ShopBrowser({
  records,
  genres,
}: {
  records: Release[];
  genres: string[];
}) {
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [selectedFormats, setSelectedFormats] = useState<Format[]>([]);
  const [sortMode, setSortMode] = useState<SortMode>("band");
  const [selectedRelease, setSelectedRelease] = useState<Release | null>(null);

  function toggleFormat(format: Format) {
    setSelectedFormats((prev) =>
      prev.includes(format) ? prev.filter((f) => f !== format) : [...prev, format]
    );
  }

  const visibleRecords = useMemo(() => {
    let result = records;

    if (selectedGenre !== "All") {
      result = result.filter((r) => r.genre === selectedGenre);
    }

    if (selectedFormats.length > 0) {
      result = result.filter((r) =>
        r.formats.some((f) => selectedFormats.includes(f))
      );
    }

    result = [...result].sort((a, b) => {
      if (sortMode === "newest") return b.year - a.year;
      if (sortMode === "oldest") return a.year - b.year;
      return a.band.localeCompare(b.band);
    });

    return result;
  }, [records, selectedGenre, selectedFormats, sortMode]);

  return (
    <>
      <FilterBar
        genres={genres}
        selectedGenre={selectedGenre}
        onGenreChange={setSelectedGenre}
        selectedFormats={selectedFormats}
        onToggleFormat={toggleFormat}
        sortMode={sortMode}
        onSortChange={setSortMode}
        resultCount={visibleRecords.length}
      />

      <div className="mx-auto max-w-6xl px-4 py-8">
        {visibleRecords.length === 0 ? (
          <p className="py-16 text-center font-stamp text-sm text-ink-soft">
            Nothing in this bin. Try another genre or format.
          </p>
        ) : (
          <div className="grid grid-cols-2 gap-x-5 gap-y-8 sm:grid-cols-3 lg:grid-cols-4">
            {visibleRecords.map((release) => (
              <RecordCard
                key={release.id}
                release={release}
                onSelect={setSelectedRelease}
              />
            ))}
          </div>
        )}
      </div>

      {selectedRelease && (
        <RecordModal
          release={selectedRelease}
          onClose={() => setSelectedRelease(null)}
        />
      )}
    </>
  );
}
