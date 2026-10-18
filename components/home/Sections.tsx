import Image from "next/image";
import type { ReactNode } from "react";
import { CertCard } from "@/components/home/CertCard";
import { Arrow } from "@/components/site/Arrow";
import { type Lang, ui } from "@/content/i18n";
import { getContent } from "@/content/site";
import { uiExtra } from "@/content/ui-extra";
import { asset, body, container, h2 } from "@/lib/ui";

export function SectionHeader({ title, dark = false, children }: { title: string; dark?: boolean; children?: ReactNode }) {
  return (
    <div className={children ? "grid gap-4 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:items-end lg:gap-16" : "max-w-[760px]"}>
      <h2 className={`${h2} text-balance`}>{title}</h2>
      {children && <div className={`${body} ${dark ? "text-text-muted-on-dark" : "text-text-muted"}`}>{children}</div>}
    </div>
  );
}

export function Tags({ tags }: { tags: readonly string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {tags.map((tag, index) => (
        <li key={index} className="rounded-xs border border-border px-2.5 py-1 text-[13px] font-medium text-text-muted">{tag}</li>
      ))}
    </ul>
  );
}

export function About({ lang }: { lang: Lang }) {
  const { about, proofs, courses } = getContent(lang);
  const t = ui[lang].about;
  // Bez zdjęcia sekcja idzie w jednej kolumnie.
  const hasPhoto = about.photo !== "";
  const x = uiExtra[lang];

  return (
    <section id="o-mnie" className="scroll-mt-24 bg-paper text-text-primary">
      <div className={`${container} flex flex-col gap-16 py-16 md:py-20 lg:gap-20 lg:py-24`}>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-start lg:gap-16">
          <div>
            <p className="mb-4 font-mono text-[12px] font-medium uppercase tracking-[0.08em] text-text-muted">{x.eyebrow.about}</p>
            <h2 className={`${h2} max-w-[20ch] text-balance`}>{about.title}</h2>
            <p className="mt-6 max-w-[60ch] text-[18px] leading-[165%] text-text-muted">{x.about.summary}</p>
          </div>
          {hasPhoto && (
            <Image
              src={asset(about.photo)}
              alt={about.photoAlt}
              width={1000}
              height={1100}
              sizes="(min-width: 1024px) 520px, 100vw"
              className="hidden aspect-[4/3] w-full rounded-lg bg-paper-soft object-cover lg:block"
            />
          )}
        </div>

        <ol className="grid gap-6 lg:grid-cols-4 lg:gap-6">
          {about.steps.map((step, index) => (
            <li key={step.title} className="grid grid-cols-[32px_minmax(0,1fr)] gap-x-3 border-t border-border pt-4 lg:block">
              <p className="font-mono text-[12px] text-text-muted">{String(index + 1).padStart(2, "0")}</p>
              <div>
                <h3 className="font-display text-[19px] font-bold leading-[1.2]">{step.title}</h3>
                <p className="mt-2 text-[15px] leading-[155%] text-text-muted">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>

        <div id="certyfikaty" className="scroll-mt-24">
          <p className="mb-5 font-mono text-[12px] font-medium uppercase tracking-[0.08em] text-text-muted">{t.certs}</p>
          <div className="grid gap-5 lg:grid-cols-3">
            {proofs.map((proof) => <CertCard key={proof.src} proof={proof} t={ui[lang].cert} />)}
            {[...courses].reverse().map((course) => (
              <article key={course.title} className="flex h-full flex-col rounded-lg border border-border bg-white p-6">
                <h3 className="font-display text-[21px] font-bold leading-[1.15] tracking-[-0.015em]">{course.title}</h3>
                <p className="mt-3 font-mono text-[11px] leading-[145%] text-text-muted">{course.meta}</p>
                <p className="mt-4 text-[15px] leading-[160%] text-text-muted">{course.text}</p>
                {course.details && course.link && (
                  <details className="group mt-auto pt-3">
                    <summary className="inline-flex min-h-[48px] cursor-pointer list-none items-center gap-2 text-[15px] font-semibold [&::-webkit-details-marker]:hidden">
                      {course.more}<Arrow dir="down" className="text-accent transition-transform duration-200 group-open:rotate-180" />
                    </summary>
                    <ul className="mt-2 flex flex-col gap-2 border-l border-border pl-4 text-[14px] leading-[150%] text-text-muted">
                      {course.details.map((detail) => <li key={detail}>{detail}</li>)}
                      <li>
                        <a href={course.link.href} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[48px] items-center gap-2 font-semibold text-text-primary underline underline-offset-4">
                          {course.link.label}<Arrow dir="up-right" className="text-accent" />
                        </a>
                      </li>
                    </ul>
                  </details>
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
