const aboutBlocks = [
  {
    title: "C++ 서버 개발자",
    body: "게임 컨텐츠 백엔드와 데이터베이스를 다룹니다.",
  },
  {
    title: "트러블슈팅 · 서비스 안정화",
    body: "빠르게 조치하고, 근본 원인을 추적해 재발을 막는 방식을 선호합니다.",
  },
  {
    title: "커뮤니케이션",
    body: "빠르게 적응하고 흡수하며, 팀과의 소통을 통해 프로젝트를 진행하는 데 강점이 있습니다.",
  },
  {
    title: "AI 바이브코딩 활용",
    body: "AI 도구를 적극 활용해, 학습과 개발을 동시에 진행하며 결과물을 빠르게 만들어 냅니다. 본 포트폴리오 사이트도 AI와 함께 구축했습니다.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-3xl px-6 py-24">
      <h2 className="mb-12 font-mono text-xs uppercase tracking-widest text-muted">
        About
      </h2>
      <div className="space-y-10">
        {aboutBlocks.map((block) => (
          <div key={block.title}>
            <h3 className="text-lg font-semibold tracking-tight md:text-xl">
              {block.title}
            </h3>
            <p className="mt-2 text-base leading-relaxed text-fg/80 md:text-lg">
              {block.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
