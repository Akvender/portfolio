import { Icon } from "@/components/site/Icon";
import { site } from "@/content/site";

/** Pionowy pasek z linkami kontaktowymi przy lewej krawędzi (tylko szerokie ekrany). */
export function SocialRail() {
  const links = [
    { href: `mailto:${site.email}`, label: "E-mail", icon: "mail" as const },
    ...(site.github ? [{ href: site.github, label: "GitHub", icon: "github" as const }] : []),
    ...(site.linkedin ? [{ href: site.linkedin, label: "LinkedIn", icon: "linkedin" as const }] : []),
  ];
  return (
    <aside aria-label="Kontakt i profile" className="fixed bottom-10 left-6 z-40 hidden flex-col items-center gap-4 xl:flex">
      {links.map((l) => (
        <a
          key={l.label}
          href={l.href}
          target={l.href.startsWith("http") ? "_blank" : undefined}
          rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
          aria-label={l.label}
          className="grid size-9 place-items-center rounded-xs text-text-muted transition-colors duration-200 hover:bg-paper-soft hover:text-ink"
        >
          <Icon name={l.icon} className="size-[18px]" />
        </a>
      ))}
      <span aria-hidden="true" className="h-16 w-px bg-border" />
      <span aria-hidden="true" className="text-[12px] font-semibold text-text-muted [writing-mode:vertical-rl] rotate-180">
        Kontakt
      </span>
    </aside>
  );
}
