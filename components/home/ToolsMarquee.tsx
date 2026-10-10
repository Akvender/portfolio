import { siAnthropic, siDocker, siGrafana, siLinux, siMake, siMeta, siN8n, siOpenai, siPostgresql, siPython, siStripe, siTwilio, siWhatsapp, siWordpress, type SimpleIcon } from "simple-icons";

/** Narzędzia z ikonami marek (simple-icons, CC0). Monochromatyczne — kolory marek gryzłyby się z paletą. */
// Zapier bez ikony: jego znak w simple-icons to kwadrat z drobnym napisem, nieczytelny w 24 px.
const TOOLS: { name: string; icon?: SimpleIcon }[] = [
  { name: "n8n", icon: siN8n },
  { name: "OpenAI", icon: siOpenai },
  { name: "Anthropic", icon: siAnthropic },
  { name: "Python", icon: siPython },
  { name: "Docker", icon: siDocker },
  { name: "Make", icon: siMake },
  { name: "Zapier" },
  { name: "Twilio", icon: siTwilio },
  { name: "SMSAPI" },
  { name: "WhatsApp", icon: siWhatsapp },
  { name: "Stripe", icon: siStripe },
  { name: "Meta", icon: siMeta },
  { name: "WordPress", icon: siWordpress },
  { name: "Linux", icon: siLinux },
  { name: "PostgreSQL", icon: siPostgresql },
  { name: "Grafana", icon: siGrafana },
];

function Row({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul aria-hidden={hidden || undefined} className="flex flex-wrap items-center gap-x-8 gap-y-3">
      {TOOLS.map((t) => (
        <li key={t.name} className="flex items-center gap-3 text-text-on-dark/70 transition-colors duration-200 hover:text-text-on-dark">
          {t.icon && (
            <svg aria-hidden="true" viewBox="0 0 24 24" className="size-6 shrink-0 fill-current">
              <path d={t.icon.path} />
            </svg>
          )}
          <span className="whitespace-nowrap font-display text-[18px] font-bold tracking-[-0.01em]">{t.name}</span>
        </li>
      ))}
    </ul>
  );
}

/** Narzędzia, z którymi pracuję — statyczny wiersz (bez przewijania, żeby nie udawał logotypów klientów). */
export function ToolsMarquee() {
  return (
    <div className="min-w-0 flex-1">
      <Row />
    </div>
  );
}
