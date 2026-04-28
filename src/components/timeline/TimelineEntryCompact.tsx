import type { CompactEntry } from "@/lib/types";

export function TimelineEntryCompact({ entry }: { entry: CompactEntry }) {
  return (
    <article className="relative pl-9 pb-12 last:pb-0 md:grid md:grid-cols-[100px_1fr] md:gap-x-10 md:pl-0 md:pb-16">
      {/* Year / date label */}
      <div className="mb-1 md:mb-0 md:pt-1.5 md:text-right">
        <span className="font-mono text-xs tracking-wide text-muted md:text-sm">
          {entry.displayDate}
        </span>
      </div>

      {/* Dot — centered on the 2px rail (rail at left:10px mobile / left:119px md → center 11/120) */}
      <div
        aria-hidden
        className="absolute left-[6px] top-2 size-2.5 rounded-full bg-fg md:left-[115px]"
      />

      {/* Content */}
      <div>
        <h3 className="text-base font-semibold tracking-tight md:text-lg">
          {entry.title}
        </h3>
        <p className="mt-1 text-sm leading-relaxed text-fg/80 md:text-base">
          {entry.summary}
        </p>
        {entry.tech.length > 0 && (
          <ul className="mt-2 flex flex-wrap gap-x-3 gap-y-1">
            {entry.tech.map((t) => (
              <li
                key={t}
                className="font-mono text-xs text-muted"
              >
                {t}
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}
