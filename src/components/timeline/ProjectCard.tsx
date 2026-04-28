import Link from "next/link";
import Image from "next/image";
import type { ProjectFrontmatter } from "@/lib/types";

export function ProjectCard({ project }: { project: ProjectFrontmatter }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block rounded-lg border border-rule bg-bg p-6 transition hover:border-fg/30 hover:shadow-sm"
    >
      {project.cover && (
        <div className="relative mb-4 aspect-video w-full overflow-hidden rounded-md bg-rule/40">
          <Image
            src={project.cover}
            alt={`${project.title} 커버 이미지`}
            fill
            sizes="(min-width: 768px) 600px, 100vw"
            className="object-cover"
          />
        </div>
      )}
      <h3 className="text-base font-semibold tracking-tight md:text-lg">
        {project.title}
      </h3>
      <p className="mt-1 text-sm leading-relaxed text-fg/80 md:text-base">
        {project.summary}
      </p>
      {project.tech.length > 0 && (
        <ul className="mt-3 flex flex-wrap gap-x-3 gap-y-1">
          {project.tech.map((t) => (
            <li key={t} className="font-mono text-xs text-muted">
              {t}
            </li>
          ))}
        </ul>
      )}
      <p className="mt-4 font-mono text-xs uppercase tracking-widest text-accent opacity-0 transition group-hover:opacity-100">
        자세히 보기 →
      </p>
    </Link>
  );
}
