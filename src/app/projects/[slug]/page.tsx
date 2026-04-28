import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllProjects, getProjectBySlug } from "@/lib/projects";
import { ProjectDetailLayout } from "@/components/project/ProjectDetailLayout";

// Only allow slugs explicitly listed in generateStaticParams.
// Unknown slugs return 404 instead of trying to resolve at runtime.
export const dynamicParams = false;

export function generateStaticParams() {
  return getAllProjects().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project not found" };

  return {
    title: `${project.title} — Lee Junseob`,
    description: project.summary,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const mod = await import(`@/content/projects/${slug}.mdx`);
  const MDXContent = mod.default;

  return (
    <ProjectDetailLayout project={project}>
      <MDXContent />
    </ProjectDetailLayout>
  );
}
