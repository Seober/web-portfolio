import type { CompactEntry } from "@/lib/types";
import { TimelineRow } from "./TimelineRow";

export function TimelineEntryCompact({ entry }: { entry: CompactEntry }) {
  return (
    <TimelineRow dateLabel={entry.displayDate}>
      <h3 className="text-base font-semibold tracking-tight md:text-lg">
        {entry.title}
      </h3>
      <p className="mt-1 text-sm leading-relaxed text-fg/80 md:text-base">
        {entry.summary}
      </p>
      {entry.tech.length > 0 && (
        <ul className="mt-2 flex flex-wrap gap-x-3 gap-y-1">
          {entry.tech.map((t) => (
            <li key={t} className="font-mono text-xs text-muted">
              {t}
            </li>
          ))}
        </ul>
      )}
    </TimelineRow>
  );
}
