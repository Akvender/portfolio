"use client";

import { useState } from "react";
import { Arrow } from "@/components/site/Arrow";
import { Icon } from "@/components/site/Icon";
import { Reveal, RevealGroup, RevealItem } from "@/components/site/Reveal";
import { container, sectionY } from "@/lib/ui";
import { site } from "@/content/site";

const btnBase =
  "group inline-flex min-h-[56px] cursor-pointer items-center justify-center gap-3 rounded-xs px-7 text-[16px] font-semibold transition-[background-color,border-color,color,transform] duration-200 active:scale-[0.98]";

/** Gotowe tematy: jedno kliknięcie otwiera e-mail z wpisanym tematem — łatwiej zacząć rozmowę. */
const topics = [
  "Ręczne przepisywanie danych między systemami",
  "Obsługa zapytań i leadów",
  "Chatbot albo voicebot dla klientów",
  "Połączenie CRM z resztą firmy",
];

const mail = (subject?: string) =>
  `mailto:${site.email}${subject ? `?subject=${encodeURIComponent(`Pomysł na AI: ${subject}`)}` : ""}`;

/** Sekcja Kontakt (ciemna). Ten sam komponent na Home i w case study; stopka jest w layout.tsx. */
export function Contact() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      window.location.href = mail();
    }
  };

  return (
    <section id="kontakt" className="scroll-mt-[104px] bg-ink text-text-on-dark">
      <div className={`${container} ${sectionY} grid gap-12 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] lg:items-end lg:gap-20`}>
        <div>
          <Reveal>
            <h2 className="mark-heading max-w-[16ch] font-display text-[clamp(36px,5.2vw,72px)] font-extrabold leading-[1.02] tracking-[-0.025em] text-balance">
              Co w Twojej firmie wciąż robi się ręcznie?
            </h2>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="mt-6 max-w-[50ch] text-[18px] leading-[160%] text-text-muted-on-dark">
              Opowiedz mi o tym w kilku zdaniach, bez specyfikacji i technicznego języka. Odpiszę z pierwszym pomysłem, jak to
              zautomatyzować, i z tym, od czego najrozsądniej zacząć.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a href={mail()} className={`${btnBase} bg-accent text-on-accent hover:bg-[#ff8a3d]`}>
                Napisz wiadomość
                <Arrow className="transition-transform duration-200 group-hover:translate-x-1" />
              </a>
              <button
                type="button"
                onClick={copy}
                aria-label={`Skopiuj adres ${site.email}`}
                className={`${btnBase} border border-border-on-dark text-text-on-dark hover:border-text-muted-on-dark`}
              >
                <span className="text-[15px] font-medium">{site.email}</span>
                <Icon name={copied ? "check" : "copy"} className={`size-[18px] ${copied ? "text-accent" : "text-text-muted-on-dark"}`} />
              </button>
              <p aria-live="polite" className="text-[14px] font-semibold text-accent">
                {copied ? "Skopiowano" : ""}
              </p>
              {site.linkedin && (
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${btnBase} border border-border-on-dark text-text-on-dark hover:border-text-muted-on-dark`}
                >
                  LinkedIn
                  <Arrow dir="up-right" />
                </a>
              )}
            </div>
          </Reveal>
        </div>

        <div>
          <Reveal>
            <p className="text-[14px] font-semibold text-text-muted-on-dark">Nie wiesz, jak zacząć? Wybierz temat:</p>
          </Reveal>
          <RevealGroup as="ul" className="mt-4 flex flex-col border-t border-border-on-dark">
            {topics.map((t) => (
              <RevealItem as="li" key={t}>
                <a
                  href={mail(t)}
                  className="group flex min-h-[60px] items-center justify-between gap-4 border-b border-border-on-dark py-3 text-[17px] font-semibold transition-colors duration-200 hover:text-accent"
                >
                  {t}
                  <Arrow className="shrink-0 text-text-muted-on-dark transition-[transform,color] duration-200 group-hover:translate-x-1 group-hover:text-accent" />
                </a>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
