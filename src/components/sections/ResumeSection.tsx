import {
  experience,
  education,
  training,
  skills,
  certifications,
} from "@/data/resume";

function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mb-6 text-xl font-semibold tracking-tight md:text-2xl">
      {children}
    </h3>
  );
}

function PeriodLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-mono text-xs tracking-wide text-muted">
      {children}
    </span>
  );
}

export function ResumeSection() {
  return (
    <section id="resume" className="mx-auto max-w-3xl px-6 py-24">
      <h2 className="mb-12 font-mono text-xs uppercase tracking-widest text-muted">
        Resume
      </h2>

      {/* 경력 */}
      <div className="mb-16">
        <SubHeading>경력</SubHeading>
        <div className="space-y-8">
          {experience.map((exp) => (
            <article key={exp.company + exp.period}>
              <PeriodLabel>{exp.period}</PeriodLabel>
              <h4 className="mt-1 text-base font-medium md:text-lg">
                {exp.company} · {exp.role}
              </h4>
              <p className="mt-1 text-sm text-fg/80 md:text-base">
                {exp.summary}
              </p>
              {exp.bullets.length > 0 && (
                <ul className="mt-3 space-y-1 text-sm text-fg/70 md:text-base">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="pl-4 -indent-4">
                      <span className="text-muted">·</span> {bullet}
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </div>

      {/* 학력 */}
      <div className="mb-16">
        <SubHeading>학력</SubHeading>
        <div className="space-y-6">
          {education.map((edu) => (
            <article key={edu.school + edu.period}>
              <PeriodLabel>{edu.period}</PeriodLabel>
              <h4 className="mt-1 text-base font-medium md:text-lg">
                {edu.school} · {edu.major}
              </h4>
              {edu.note && (
                <p className="mt-1 text-sm text-muted">({edu.note})</p>
              )}
            </article>
          ))}
        </div>
      </div>

      {/* 교육 */}
      <div className="mb-16">
        <SubHeading>교육</SubHeading>
        <div className="space-y-6">
          {training.map((t) => (
            <article key={t.institution + t.period}>
              <PeriodLabel>{t.period}</PeriodLabel>
              <h4 className="mt-1 text-base font-medium md:text-lg">
                {t.institution} · {t.program}
              </h4>
              <p className="mt-1 text-sm leading-relaxed text-fg/80 md:text-base">
                {t.details}
              </p>
            </article>
          ))}
        </div>
      </div>

      {/* 기술 스택 */}
      <div className="mb-16">
        <SubHeading>기술 스택</SubHeading>
        <dl className="space-y-3">
          {skills.map((group) => (
            <div
              key={group.category}
              className="flex flex-col gap-1 md:flex-row md:items-baseline md:gap-6"
            >
              <dt className="font-mono text-xs uppercase tracking-widest text-muted md:w-28">
                {group.category}
              </dt>
              <dd className="text-sm text-fg/80 md:text-base">
                {group.items.join(" · ")}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      {/* 자격·어학 */}
      <div>
        <SubHeading>자격·어학</SubHeading>
        <ul className="space-y-3">
          {certifications.map((cert) => (
            <li
              key={cert.name}
              className="flex flex-col gap-1 md:flex-row md:items-baseline md:gap-6"
            >
              <PeriodLabel>{cert.date}</PeriodLabel>
              <span className="text-sm text-fg/80 md:text-base">
                {cert.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
