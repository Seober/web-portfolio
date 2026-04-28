import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { ProjectFrontmatter } from "./types";

const PROJECTS_DIR = path.join(process.cwd(), "src/content/projects");

export function getAllProjects(): ProjectFrontmatter[] {
  if (!fs.existsSync(PROJECTS_DIR)) return [];

  // Skip files starting with `_` (templates/drafts not shown in timeline).
  const files = fs
    .readdirSync(PROJECTS_DIR)
    .filter((f) => f.endsWith(".mdx") && !f.startsWith("_"));

  return files
    .map((file) => {
      const filePath = path.join(PROJECTS_DIR, file);
      const raw = fs.readFileSync(filePath, "utf8");
      const { data } = matter(raw);
      return data as ProjectFrontmatter;
    })
    .sort((a, b) => {
      if (b.year !== a.year) return b.year - a.year;
      return b.order - a.order;
    });
}

export function getProjectBySlug(slug: string): ProjectFrontmatter | null {
  return getAllProjects().find((p) => p.slug === slug) ?? null;
}
