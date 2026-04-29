import { aboutBlocks } from "@/data/about";

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
