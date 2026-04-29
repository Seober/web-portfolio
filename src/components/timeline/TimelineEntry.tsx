import type { ProjectFrontmatter } from "@/lib/types";
import { ProjectCard } from "./ProjectCard";
import { TimelineRow } from "./TimelineRow";

export function TimelineEntry({ project }: { project: ProjectFrontmatter }) {
  return (
    <TimelineRow
      dateLabel={String(project.year)}
      dateBadge={
        project.status === "in-progress" ? (
          <span className="ml-2 inline-block rounded-full border border-accent px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-accent md:ml-0 md:mt-1 md:block">
            진행 중
          </span>
        ) : undefined
      }
    >
      <ProjectCard project={project} />
    </TimelineRow>
  );
}
