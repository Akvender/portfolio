import { Arrow } from "@/components/site/Arrow";
import { Reveal } from "@/components/site/Reveal";
import { container, sectionY } from "@/lib/ui";
import { site } from "@/content/site";

const btnBase =
  "group inline-flex min-h-[56px] items-center justify-center gap-3 rounded-xs px-7 text-[16px] font-semibold transition-colors duration-200";

/** Sekcja Kontakt (ciemna). Ten sam komponent na Home i w case study; stopka jest w layout.tsx. */
export function Contact() {
  return (
    <section id="kontakt" className="scroll-mt-[104px] bg-ink text-text-on-dark">
      <div className={`${container} ${sectionY}`}>
        <Reveal>
          <h2 className="max-w-[18ch] font-display text-[clamp(36px,5.6vw,76px)] font-extrabold leading-[1.02] tracking-[-0.04em] text-balance">
            Masz pomysł na AI w swojej firmie? Porozmawiajmy.
          </h2>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="mt-6 max-w-[52ch] text-[18px] leading-[160%] text-text-muted-on-dark">
            Opisz w kilku zdaniach, co chcesz usprawnić. Odpiszę z pierwszym pomysłem na rozwiązanie.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href={`mailto:${site.email}`} className={`${btnBase} bg-paper text-ink hover:bg-paper-soft`}>
              {site.email}
              <Arrow className="transition-transform duration-200 group-hover:translate-x-1" />
            </a>
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
    </section>
  );
}
