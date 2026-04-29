import { comingSoonCopy } from "@/data/comingSoon";

export function ComingSoonCard() {
  const { badge, placeholder } = comingSoonCopy;

  return (
    <div className="relative rounded-lg p-6">
      <div
        aria-hidden
        className="pointer-events-none select-none blur-[6px] saturate-50 opacity-50"
      >
        <h4 className="text-base font-semibold tracking-tight md:text-lg">
          {placeholder.title}
        </h4>
        <p className="mt-1 text-sm leading-relaxed text-fg/80 md:text-base">
          {placeholder.body}
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {Array.from({ length: placeholder.techCount }).map((_, i) => (
            <span key={i} className="font-mono text-xs text-muted">
              TBD
            </span>
          ))}
        </div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="rounded-full border border-rule bg-bg/90 px-4 py-2 font-mono text-xs uppercase tracking-widest text-muted">
          {badge}
        </span>
      </div>
    </div>
  );
}
