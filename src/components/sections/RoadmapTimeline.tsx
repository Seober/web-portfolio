import { compactEntries } from "@/data/timeline";
import { comingSoonCopy } from "@/data/comingSoon";
import { getAllProjects } from "@/lib/projects";
import { ComingSoonCard } from "@/components/timeline/ComingSoonCard";
import { TimelineEntryCompact } from "@/components/timeline/TimelineEntryCompact";
import { TimelineEntry } from "@/components/timeline/TimelineEntry";
import { TimelineRow } from "@/components/timeline/TimelineRow";
import {
  dateToSortKey,
  type CompactEntry,
  type ProjectFrontmatter,
} from "@/lib/types";

type TimelineItem =
  | { kind: "compact"; data: CompactEntry; sortKey: number }
  | { kind: "project"; data: ProjectFrontmatter; sortKey: number };

export function RoadmapTimeline() {
  const projects = getAllProjects();

  // Merge compact entries (no detail page) with MDX-backed projects (with detail page).
  // Sort descending by sortKey so most recent appears first.
  const items: TimelineItem[] = [
    ...compactEntries.map<TimelineItem>((e) => ({
      kind: "compact",
      data: e,
      sortKey: dateToSortKey(e.date),
    })),
    ...projects.map<TimelineItem>((p) => ({
      kind: "project",
      data: p,
      sortKey: p.year * 100 + p.order,
    })),
  ].sort((a, b) => b.sortKey - a.sortKey);

  return (
    <section id="roadmap" className="mx-auto max-w-3xl px-6 py-24">
      <h2 className="mb-12 font-mono text-xs uppercase tracking-widest text-muted">
        Roadmap
      </h2>

      <div className="relative">
        {/* The vertical rail line — 2px wide so dots can perfectly center.
            Mobile: left:10px (center 11), md+: left:119px (center 120) */}
        <div
          aria-hidden
          className="absolute top-0 bottom-0 left-[10px] w-0.5 bg-rule md:left-[119px]"
        />

        <TimelineRow dateLabel={comingSoonCopy.dateLabel} dotVariant="outlined">
          <ComingSoonCard />
        </TimelineRow>

        {items.map((item) =>
          item.kind === "compact" ? (
            <TimelineEntryCompact
              key={`compact-${item.data.title}`}
              entry={item.data}
            />
          ) : (
            <TimelineEntry
              key={`project-${item.data.slug}`}
              project={item.data}
            />
          )
        )}
      </div>
    </section>
  );
}
