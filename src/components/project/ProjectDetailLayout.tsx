import Link from "next/link";
import Image from "next/image";
import type { ProjectFrontmatter } from "@/lib/types";

export function ProjectDetailLayout({
  project,
  children,
}: {
  project: ProjectFrontmatter;
  children: React.ReactNode;
}) {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      {/* Back link */}
      <Link
        href="/#roadmap"
        className="font-mono text-xs uppercase tracking-widest text-muted transition hover:text-fg"
      >
        ← Back to Roadmap
      </Link>

      {/* Header */}
      <header className="mt-8 border-b border-rule pb-8">
        <div className="flex flex-wrap items-baseline gap-3">
          <span className="font-mono text-sm tracking-wide text-muted">
            {project.year}
          </span>
          {project.status === "in-progress" && (
            <span className="rounded-full border border-accent px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-accent">
              진행 중
            </span>
          )}
        </div>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight md:text-5xl">
          {project.title}
        </h1>
        <p className="mt-4 text-base leading-relaxed text-fg/80 md:text-lg">
          {project.summary}
        </p>
        {project.tech.length > 0 && (
          <ul className="mt-6 flex flex-wrap gap-x-3 gap-y-1">
            {project.tech.map((t) => (
              <li
                key={t}
                className="rounded-full border border-rule px-3 py-1 font-mono text-xs text-muted"
              >
                {t}
              </li>
            ))}
          </ul>
        )}
      </header>

      {/* Optional cover image */}
      {project.cover && (
        <div className="my-8 overflow-hidden rounded-lg border border-rule">
          <Image
            src={project.cover}
            alt={`${project.title} 커버`}
            width={1600}
            height={900}
            className="h-auto w-full"
            priority
          />
        </div>
      )}

      {/* MDX body */}
      <div className="mt-8">{children}</div>
    </article>
  );
}
