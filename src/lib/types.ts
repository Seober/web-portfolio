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
  /** 화면에 표시되는 기간 라벨 (예: "2023 — 현재") */
  displayDate: string;
  /** 정렬용 날짜 문자열. "YYYY-MM" 형식. */
  date: string;
  title: string;
  summary: string;
  tech: string[];
};

/**
 * "YYYY-MM" 또는 "YYYY" 형식의 날짜 문자열을 정렬용 정수 키로 변환합니다.
 * 같은 연도 내에서는 월(또는 ProjectFrontmatter.order)을 기준으로 순서가 결정됩니다.
 */
export function dateToSortKey(date: string): number {
  const [yearStr, monthStr = "0"] = date.split("-");
  const year = Number.parseInt(yearStr ?? "0", 10);
  const month = Number.parseInt(monthStr, 10);
  return year * 100 + month;
}
