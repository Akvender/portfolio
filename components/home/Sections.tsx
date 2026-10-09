import Image from "next/image";
import type { ReactNode } from "react";
import { about, proofs } from "@/content/site";
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
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-16">
          <Reveal>
            <h2 className={`${h2} max-w-[18ch] text-balance`}>{about.title}</h2>
          </Reveal>
          <Reveal delay={0.05} className="flex flex-col gap-8">
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
            <h3 className="font-display text-[26px] font-bold leading-[1.15] tracking-[-0.025em]">Jak pracuję</h3>
          </Reveal>
          {/* Kroki jako numerowana lista: duże cyfry w kroju nagłówków, bez ikon i kart. */}
          <RevealGroup as="ol" className="grid border-t border-ink sm:grid-cols-2 lg:grid-cols-4">
            {about.steps.map((s, i) => (
              <RevealItem as="li" key={s.title} className="flex gap-5 border-b border-border py-7 sm:pr-8 lg:flex-col lg:gap-3 lg:border-b-0">
                <span aria-hidden="true" className="font-display text-[56px] font-extrabold leading-[0.85] tracking-[-0.05em] lg:text-[72px]">
                  {i + 1}
                </span>
                <div className="flex flex-col gap-1.5">
                  <h4 className="text-[18px] font-semibold leading-[130%]">{s.title}</h4>
                  <p className="text-[15px] leading-[155%] text-text-muted">{s.text}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        <div id="certyfikaty" className="flex scroll-mt-[120px] flex-col gap-6">
          <Reveal>
            <h3 className="font-display text-[26px] font-bold leading-[1.15] tracking-[-0.025em]">Certyfikaty i osiągnięcia</h3>
          </Reveal>
          <RevealGroup className="flex flex-col gap-6">
            {proofs.map((p) => (
              <RevealItem
                key={p.src}
                className="grid gap-6 border-t border-ink pt-6 md:grid-cols-[minmax(0,0.75fr)_minmax(0,1fr)] md:items-start md:gap-10"
              >
                <a href={asset(p.src)} target="_blank" rel="noopener noreferrer" className="block" aria-label={`${p.title} — otwórz certyfikat w pełnym rozmiarze`}>
                  <Image
                    src={asset(p.src)}
                    alt={p.alt}
                    width={p.width}
                    height={p.height}
                    className="w-full rounded-[2px] border border-border"
                  />
                </a>
                <div className="flex flex-col gap-3">
                  {p.badge && <Image src={asset(p.badge)} alt="" width={192} height={192} className="size-20" />}
                  <h4 className="font-display text-[28px] font-bold leading-[1.1] tracking-[-0.025em]">{p.title}</h4>
                  <p className="text-[14px] font-medium text-text-muted">{p.meta}</p>
                  {p.text && <p className="max-w-[56ch] text-[16px] leading-[160%] text-text-primary/85">{p.text}</p>}
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
