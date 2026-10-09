import { Icon } from "@/components/site/Icon";
import { site } from "@/content/site";
import { type Lang, ui } from "@/content/i18n";

/** Pionowy pasek z linkami kontaktowymi przy lewej krawędzi (tylko szerokie ekrany). Własne granatowe tło: czytelny nad jasnymi i ciemnymi sekcjami. */
export function SocialRail({ lang }: { lang: Lang }) {
  const t = ui[lang].rail;
  const links = [
    { href: `mailto:${site.email}`, label: "E-mail", icon: "mail" as const },
    ...(site.github ? [{ href: site.github, label: "GitHub", icon: "github" as const }] : []),
    ...(site.linkedin ? [{ href: site.linkedin, label: "LinkedIn", icon: "linkedin" as const }] : []),
  ];
  return (
    <aside aria-label={t.label} className="fixed bottom-10 left-6 z-40 hidden flex-col items-center gap-3 rounded-xs border border-border-on-dark bg-ink/90 px-1.5 py-3 shadow-[0_12px_32px_-16px_rgba(0,0,0,0.6)] backdrop-blur-sm xl:flex">
      {links.map((l) => (
        <a
          key={l.label}
          href={l.href}
          target={l.href.startsWith("http") ? "_blank" : undefined}
          rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
          aria-label={l.label}
          className="grid size-9 place-items-center rounded-xs text-text-muted-on-dark transition-colors duration-200 hover:bg-ink-soft hover:text-accent"
        >
          <Icon name={l.icon} className="size-[18px]" />
        </a>
      ))}
      <span aria-hidden="true" className="h-10 w-px bg-border-on-dark" />
      <span aria-hidden="true" className="text-[12px] font-semibold text-text-muted-on-dark [writing-mode:vertical-rl] rotate-180">
        {t.contact}
      </span>
    </aside>
  );
}
