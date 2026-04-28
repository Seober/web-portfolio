import { compactEntries } from "@/data/timeline";
import { getAllProjects } from "@/lib/projects";
import { ComingSoonCard } from "@/components/timeline/ComingSoonCard";
import { TimelineEntryCompact } from "@/components/timeline/TimelineEntryCompact";
import { TimelineEntry } from "@/components/timeline/TimelineEntry";
import type { CompactEntry, ProjectFrontmatter } from "@/lib/types";

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
      sortKey: e.sortKey,
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

        {/* Top placeholder: Coming soon */}
        <article className="relative pl-9 pb-12 md:grid md:grid-cols-[100px_1fr] md:gap-x-10 md:pl-0 md:pb-16">
          <div className="mb-1 md:mb-0 md:pt-2 md:text-right">
            <span className="font-mono text-xs tracking-wide text-muted md:text-sm">
              예정
            </span>
          </div>
          {/* ComingSoon dot (size-3 = 12px) — centered on rail (center 11/120 → left 5/114) */}
          <div
            aria-hidden
            className="absolute left-[5px] top-2 size-3 rounded-full border border-dashed border-locked bg-bg md:left-[114px]"
          />
          <div>
            <ComingSoonCard />
          </div>
        </article>

        {/* Merged entries (descending) */}
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
