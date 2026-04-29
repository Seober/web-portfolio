import type { ReactNode } from "react";

type DotVariant = "filled" | "outlined";

const DOT_CLASS: Record<DotVariant, string> = {
  // 8px (size-2.5) — centered on 2px rail at left:11/120 → left:6/115
  filled: "left-[6px] top-2 size-2.5 rounded-full bg-fg md:left-[115px]",
  // 12px (size-3) — centered on 2px rail at left:11/120 → left:5/114
  outlined:
    "left-[5px] top-2 size-3 rounded-full border border-dashed border-locked bg-bg md:left-[114px]",
};

export function TimelineRow({
  dateLabel,
  dateBadge,
  dotVariant = "filled",
  children,
}: {
  dateLabel: string;
  dateBadge?: ReactNode;
  dotVariant?: DotVariant;
  children: ReactNode;
}) {
  return (
    <article className="relative pl-9 pb-12 last:pb-0 md:grid md:grid-cols-[100px_1fr] md:gap-x-10 md:pl-0 md:pb-16">
      <div className="mb-1 md:mb-0 md:pt-1.5 md:text-right">
        <span className="font-mono text-xs tracking-wide text-muted md:text-sm">
          {dateLabel}
        </span>
        {dateBadge}
      </div>
      <div aria-hidden className={`absolute ${DOT_CLASS[dotVariant]}`} />
      <div>{children}</div>
    </article>
  );
}
