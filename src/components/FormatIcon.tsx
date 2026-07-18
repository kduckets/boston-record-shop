import type { Format } from "@/data/records";

export function FormatIcon({
  format,
  className = "size-4",
}: {
  format: Format;
  className?: string;
}) {
  switch (format) {
    case "vinyl":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
          <circle cx="12" cy="12" r="9.5" stroke="currentColor" strokeWidth="1.4" />
          <circle cx="12" cy="12" r="6.5" stroke="currentColor" strokeWidth="0.9" opacity="0.6" />
          <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="0.9" opacity="0.6" />
          <circle cx="12" cy="12" r="1.4" fill="currentColor" />
        </svg>
      );
    case "cd":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
          <circle cx="12" cy="12" r="9.5" stroke="currentColor" strokeWidth="1.4" />
          <circle cx="12" cy="12" r="2.6" stroke="currentColor" strokeWidth="1.2" />
          <circle cx="12" cy="12" r="0.9" fill="currentColor" />
          <path d="M12 2.5a9.5 9.5 0 0 1 8.2 14.3" stroke="currentColor" strokeWidth="1" opacity="0.4" />
        </svg>
      );
    case "cassette":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
          <rect x="2.5" y="4.5" width="19" height="15" rx="1.6" stroke="currentColor" strokeWidth="1.4" />
          <circle cx="8.5" cy="12" r="2.4" stroke="currentColor" strokeWidth="1.2" />
          <circle cx="15.5" cy="12" r="2.4" stroke="currentColor" strokeWidth="1.2" />
          <path d="M9.5 16.5h5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      );
  }
}
