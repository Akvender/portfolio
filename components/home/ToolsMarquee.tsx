import {
  siAirtable,
  siDocker,
  siGrafana,
  siLinux,
  siMake,
  siMeta,
  siN8n,
  siNodedotjs,
  siPostgresql,
  siPrometheus,
  siPython,
  siTwilio,
  siTypescript,
  type SimpleIcon,
} from "simple-icons";
import type { Lang } from "@/content/i18n";
import { uiExtra } from "@/content/ui-extra";

/** Neutralna ikona „iskry” dla modeli językowych — bez logotypu konkretnego dostawcy. */
const SPARKLE_PATH =
  "M12 2.5l1.9 5.7a3 3 0 0 0 1.9 1.9l5.7 1.9-5.7 1.9a3 3 0 0 0-1.9 1.9L12 21.5l-1.9-5.7a3 3 0 0 0-1.9-1.9L2.5 12l5.7-1.9a3 3 0 0 0 1.9-1.9z";

/**
 * Narzędzia z ikonami marek (simple-icons, CC0), monochromatycznie — tylko te, które występują w projektach
 * albo w mapie umiejętności. Kolejność: automatyzacje, kod, AI, infrastruktura, integracje.
 */
const TOOLS: { name: string | ((lang: Lang) => string); icon: Pick<SimpleIcon, "path"> }[] = [
  { name: "n8n", icon: siN8n },
  { name: "Make", icon: siMake },
  { name: "Python", icon: siPython },
  { name: "TypeScript", icon: siTypescript },
  { name: "Node.js", icon: siNodedotjs },
  // Bez logotypu konkretnego dostawcy: dostawca w poszczególnych projektach bywa różny.
  { name: (lang) => uiExtra[lang].tools.llm, icon: { path: SPARKLE_PATH } },
  { name: "Docker", icon: siDocker },
  { name: "Linux", icon: siLinux },
  { name: "PostgreSQL", icon: siPostgresql },
  { name: "Grafana", icon: siGrafana },
  { name: "Prometheus", icon: siPrometheus },
  { name: "Twilio", icon: siTwilio },
  { name: "Meta", icon: siMeta },
  { name: "Airtable", icon: siAirtable },
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
