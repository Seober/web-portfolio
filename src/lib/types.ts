export type ProjectStatus = "completed" | "in-progress";

export type ProjectFrontmatter = {
  slug: string;
  year: number;
  title: string;
  status: ProjectStatus;
  summary: string;
  tech: string[];
  cover?: string;
  diagram?: string;
  order: number;
};

export type CompactEntry = {
  displayDate: string;
  sortKey: number;
  title: string;
  summary: string;
  tech: string[];
};
