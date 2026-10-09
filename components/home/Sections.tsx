import Image from "next/image";
import type { ReactNode } from "react";
import { about, proofs } from "@/content/site";
import { CertCard } from "@/components/home/CertCard";
import { Reveal, RevealGroup, RevealItem } from "@/components/site/Reveal";
import { asset, body, container, h2, sectionY } from "@/lib/ui";

/** Nagłówek sekcji: tytuł po lewej, opis — na desktopie — w osobnej kolumnie po prawej. */
export function SectionHeader({ title, dark = false, children }: { title: string; dark?: boolean; children?: ReactNode }) {
  return (
    <Reveal className={children ? "grid gap-4 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:items-end lg:gap-16" : "max-w-[760px]"}>
      <h2 className={`${h2} text-balance`}>{title}</h2>
      {children && <div className={`${body} ${dark ? "text-text-muted-on-dark" : "text-text-muted"}`}>{children}</div>}
    </Reveal>
  );
}

export function Tags({ tags }: { tags: readonly string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {tags.map((t, i) => (
        <li key={i} className="rounded-xs border border-border px-2.5 py-1 text-[13px] font-medium text-text-muted">
          {t}
        </li>
      ))}
    </ul>
  );
}

export function About() {
  return (
    <section id="o-mnie" className="scroll-mt-[104px] bg-paper">
      <div className={`${container} ${sectionY} flex flex-col gap-16 lg:gap-24`}>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)] lg:items-center lg:gap-16">
          <Reveal>
            <Image
              src={asset(about.photo)}
              alt={about.photoAlt}
              width={1000}
              height={1100}
              sizes="(min-width: 1024px) 520px, 100vw"
              className="aspect-[10/11] w-full rounded-xs object-cover"
            />
          </Reveal>
          <Reveal delay={0.05} className="flex flex-col gap-8">
            <h2 className={`${h2} mark-heading max-w-[18ch] text-balance`}>{about.title}</h2>
            <div className="flex flex-col gap-5">
              {about.paragraphs.map((p, i) => (
                <p key={i} className="max-w-[62ch] text-[17px] leading-[165%] text-text-primary/85">
                  {p}
                </p>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="flex flex-col gap-6">
          <Reveal>
            <h3 className="mark-heading font-display text-[26px] font-bold leading-[1.15]">Jak pracuję</h3>
          </Reveal>
          {/* Oś czasu: kwadratowy znacznik i kropkowana linia prowadząca do następnego kroku. */}
          <RevealGroup as="ol" className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
            {about.steps.map((s, i) => (
              <RevealItem as="li" key={s.title} className="flex flex-col gap-4 lg:pr-8">
                <div aria-hidden="true" className="flex items-center gap-3">
                  <span className="size-3 shrink-0 bg-accent" />
                  <span className="h-0 flex-1 border-t-2 border-dotted border-ink/30" />
                </div>
                <p className="text-[14px] font-semibold text-text-muted">Krok {i + 1}</p>
                <h4 className="-mt-2 font-display text-[22px] font-bold leading-[1.2]">{s.title}</h4>
                <p className="text-[15px] leading-[160%] text-text-muted">{s.text}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        <div id="certyfikaty" className="flex scroll-mt-[120px] flex-col gap-6">
          <Reveal>
            <h3 className="mark-heading font-display text-[26px] font-bold leading-[1.15]">Certyfikaty i osiągnięcia</h3>
          </Reveal>
          <RevealGroup className="flex flex-col gap-6">
            {proofs.map((p) => (
              <RevealItem key={p.src}>
                <CertCard proof={p} />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
