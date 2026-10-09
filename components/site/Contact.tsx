import { Reveal } from "@/components/site/Reveal";
import { container, sectionLabel, sectionY } from "@/lib/ui";
import { site } from "@/content/site";

const btnBase =
  "inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full px-7 text-[16px] font-semibold transition-colors duration-200";

/** Sekcja Kontakt (ciemna) + stopka. Ten sam komponent na Home i w case study. */
export function Contact() {
  return (
    <footer id="kontakt" className="bg-ink text-text-on-dark">
      <div className={`${container} ${sectionY}`}>
        <Reveal>
          <p className={`${sectionLabel} text-accent-amber`}>Kontakt</p>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="mt-6 max-w-[20ch] text-[clamp(30px,4.5vw,48px)] font-extrabold leading-[115%] tracking-[-0.01em]">
            Zdanie zamykające — zaproszenie do kontaktu.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={`mailto:${site.email}`}
              className={`${btnBase} bg-accent-green text-text-on-dark hover:bg-accent-green-dark`}
            >
              {site.email}
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={`${btnBase} border border-border-on-dark text-text-on-dark hover:bg-ink-soft`}
            >
              LinkedIn
              <span aria-hidden="true">↗</span>
            </a>
            <a
              href={site.pdf}
              className={`${btnBase} border border-border-on-dark text-text-on-dark hover:bg-ink-soft`}
            >
              Prezentacja PDF
              <span aria-hidden="true">↓</span>
            </a>
          </div>
        </Reveal>
      </div>
      <div className="border-t border-border-on-dark">
        <div
          className={`${container} flex min-h-[72px] flex-wrap items-center justify-between gap-2 py-4 font-mono text-[12.5px] uppercase tracking-[1.5px] text-text-muted-on-dark`}
        >
          <p>
            © {new Date().getFullYear()} {site.name}
          </p>
          <p>Systemy wewnętrzne i automatyzacje AI</p>
        </div>
      </div>
    </footer>
  );
}
