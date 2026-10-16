import { siDocker, siLinux, siMake, siN8n, siPostgresql, siPython, type SimpleIcon } from "simple-icons";
import type { Lang } from "@/content/i18n";
import { uiExtra } from "@/content/ui-extra";

/**
 * Główne narzędzia (5–7 pozycji) z ikonami marek (simple-icons, CC0), monochromatycznie.
 * Pełny zakres technologii jest przy projektach i w mapie umiejętności.
 */
const TOOLS: { name: string | ((lang: Lang) => string); icon?: SimpleIcon }[] = [
  { name: "n8n", icon: siN8n },
  { name: "Python", icon: siPython },
  // Bez logotypu konkretnego dostawcy: dostawca w poszczególnych projektach bywa różny.
  { name: (lang) => uiExtra[lang].tools.llm },
  { name: "Docker", icon: siDocker },
  { name: "PostgreSQL", icon: siPostgresql },
  { name: "Linux", icon: siLinux },
  { name: "Make", icon: siMake },
];

/** Narzędzia, z którymi pracuję — statyczny wiersz (bez przewijania, żeby nie udawał logotypów klientów). */
export function ToolsMarquee({ lang }: { lang: Lang }) {
  return (
    <div className="min-w-0 flex-1">
      <ul className="flex flex-wrap items-center gap-x-7 gap-y-3">
        {TOOLS.map((t, i) => (
          <li key={i} className="flex items-center gap-2.5 text-text-on-dark/70">
            {t.icon && (
              <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5 shrink-0 fill-current">
                <path d={t.icon.path} />
              </svg>
            )}
            <span className="whitespace-nowrap font-display text-[16px] font-bold tracking-[-0.01em]">{typeof t.name === "function" ? t.name(lang) : t.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
