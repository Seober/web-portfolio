export function ComingSoonCard() {
  return (
    <div className="relative rounded-lg p-6">
      <div
        aria-hidden
        className="pointer-events-none select-none blur-[6px] saturate-50 opacity-50"
      >
        <h4 className="text-base font-semibold tracking-tight md:text-lg">
          차기 프로젝트 준비 중
        </h4>
        <p className="mt-1 text-sm leading-relaxed text-fg/80 md:text-base">
          새로운 도전을 곧 추가합니다. 본 포트폴리오는 지속적으로 업데이트됩니다.
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          <span className="font-mono text-xs text-muted">TBD</span>
          <span className="font-mono text-xs text-muted">TBD</span>
          <span className="font-mono text-xs text-muted">TBD</span>
        </div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="rounded-full border border-rule bg-bg/90 px-4 py-2 font-mono text-xs uppercase tracking-widest text-muted">
          Coming soon · 준비 중
        </span>
      </div>
    </div>
  );
}
