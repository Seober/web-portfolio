import type { ProjectFrontmatter } from "@/lib/types";
import { ProjectCard } from "./ProjectCard";

export function TimelineEntry({ project }: { project: ProjectFrontmatter }) {
  const dateLabel = String(project.year);

  return (
    <article className="relative pl-9 pb-12 last:pb-0 md:grid md:grid-cols-[100px_1fr] md:gap-x-10 md:pl-0 md:pb-16">
      {/* Year label */}
      <div className="mb-1 md:mb-0 md:pt-1.5 md:text-right">
        <span className="font-mono text-xs tracking-wide text-muted md:text-sm">
          {dateLabel}
        </span>
        {project.status === "in-progress" && (
          <span className="ml-2 inline-block rounded-full border border-accent px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-accent md:ml-0 md:mt-1 md:block">
            진행 중
          </span>
        )}
      </div>

      {/* Dot — centered on the 2px rail */}
      <div
        aria-hidden
        className="absolute left-[6px] top-2 size-2.5 rounded-full bg-fg md:left-[115px]"
      />

      {/* Content */}
      <div>
        <ProjectCard project={project} />
      </div>
    </article>
  );
}
