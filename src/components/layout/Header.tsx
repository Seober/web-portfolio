const navLinks = [
  { href: "#about", label: "소개" },
  { href: "#resume", label: "이력" },
  { href: "#roadmap", label: "프로젝트" },
  { href: "#contact", label: "연락처" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-bg/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-4 md:px-6">
        <a
          href="#top"
          className="shrink-0 font-mono text-sm font-medium tracking-tight"
        >
          Lee Junseob
        </a>
        <nav>
          <ul className="flex gap-3 text-sm md:gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-muted underline-offset-4 transition-colors hover:text-fg hover:underline"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
