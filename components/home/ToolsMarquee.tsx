"use client";

import { useState } from "react";
import { siAnthropic, siDocker, siMake, siMeta, siN8n, siOpenai, siPython, type SimpleIcon } from "simple-icons";

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
  { name: "Meta CAPI", icon: siMeta },
];

function Row({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul aria-hidden={hidden || undefined} className="flex shrink-0 items-center gap-12 pr-12">
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

/**
 * Przewijany pas narzędzi: dwie identyczne listy w pętli (translateX −50%), wygaszone krawędzie.
 * Pauza: najechanie kursorem, fokus albo przycisk (WCAG 2.2.2). Reduced motion → stoi w miejscu.
 */
export function ToolsMarquee({ pauseLabel, resumeLabel }: { pauseLabel: string; resumeLabel: string }) {
  const [paused, setPaused] = useState(false);
  return (
    <div className="flex min-w-0 flex-1 items-center gap-3">
      <div className="marquee min-w-0 flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
        <div className={`marquee-track flex w-max ${paused ? "[animation-play-state:paused]" : ""}`}>
          <Row />
          <Row hidden />
        </div>
      </div>
      <button
        type="button"
        onClick={() => setPaused((p) => !p)}
        aria-label={paused ? resumeLabel : pauseLabel}
        className="grid size-11 shrink-0 cursor-pointer place-items-center rounded-xs text-text-muted-on-dark transition-colors hover:bg-ink-soft hover:text-accent motion-reduce:hidden"
      >
        <svg aria-hidden="true" viewBox="0 0 24 24" className="size-4 fill-current">
          {paused ? <path d="M8 5v14l11-7z" /> : <path d="M7 5h4v14H7zM13 5h4v14h-4z" />}
        </svg>
      </button>
    </div>
  );
}
