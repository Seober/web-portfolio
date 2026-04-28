import { profile } from "@/data/profile";

type ContactLink = { label: string; href: string; value: string };

export function ContactSection() {
  const links: ContactLink[] = [
    { label: "Email", href: `mailto:${profile.email}`, value: profile.email },
  ];

  if (profile.display.phone && profile.phone) {
    links.push({
      label: "Phone",
      href: `tel:${profile.phone.replace(/-/g, "")}`,
      value: profile.phone,
    });
  }

  if (profile.github) {
    links.push({
      label: "GitHub",
      href: profile.github,
      value: profile.github.replace(/^https?:\/\//, ""),
    });
  }

  if (profile.linkedin) {
    links.push({
      label: "LinkedIn",
      href: profile.linkedin,
      value: profile.linkedin.replace(/^https?:\/\//, ""),
    });
  }

  return (
    <section id="contact" className="mx-auto max-w-3xl px-6 py-24">
      <h2 className="mb-12 font-mono text-xs uppercase tracking-widest text-muted">
        Contact
      </h2>
      <ul className="space-y-4">
        {links.map((link) => (
          <li
            key={link.label}
            className="flex flex-col gap-1 md:flex-row md:items-baseline md:gap-6"
          >
            <span className="font-mono text-xs uppercase tracking-widest text-muted md:w-24">
              {link.label}
            </span>
            <a
              href={link.href}
              className="text-base text-fg underline-offset-4 transition hover:underline md:text-lg"
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
            >
              {link.value}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
