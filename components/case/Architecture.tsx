import { Fragment } from "react";
import { Reveal } from "@/components/site/Reveal";
import type { Architecture as ArchitectureData } from "@/content/projects/types";
import { container, h2, sectionY } from "@/lib/ui";

/**
 * Schemat architektury projektu: kolumny od wejścia do wyniku, w każdej prawdziwe elementy systemu,
 * a pod spodem pas infrastruktury. Na desktopie poziomo ze strzałkami, na telefonie pionowo.
 */
export function Architecture({ data, title, infraLabel }: { data: ArchitectureData; title: string; infraLabel: string }) {
  return (
    <section className={`bg-paper ${sectionY}`}>
      <div className={`${container} flex flex-col gap-10`}>
        <Reveal>
          <h2 className={`${h2} mark-heading text-balance`}>{title}</h2>
        </Reveal>
        <Reveal>
          <figure className="flex flex-col gap-4">
            <div className="flex flex-col items-stretch gap-3 lg:flex-row lg:gap-0">
              {data.columns.map((col, i) => (
                <Fragment key={col.title}>
                  {i > 0 && (
                    <div aria-hidden="true" className="flex items-center justify-center text-accent lg:w-10 lg:shrink-0">
                      <svg viewBox="0 0 24 24" className="size-5 rotate-90 lg:rotate-0" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 12h15 M13 6l6 6-6 6" />
                      </svg>
                    </div>
                  )}
                  <div className="flex min-w-0 flex-1 flex-col gap-2 rounded-xs border border-border bg-white p-4">
                    <p className="text-[13px] font-semibold text-text-muted">{col.title}</p>
                    <ul className="flex flex-col gap-2">
                      {col.items.map((item) => (
                        <li key={item} className="rounded-xs border border-ink/10 bg-paper px-3 py-2 text-[15px] font-semibold leading-[1.3] [overflow-wrap:anywhere]">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Fragment>
              ))}
            </div>
            {data.infra && (
              <p className="rounded-xs bg-ink px-4 py-3 text-[14px] text-text-on-dark">
                <span className="font-semibold">{infraLabel}: </span>
                <span className="text-text-muted-on-dark">{data.infra}</span>
              </p>
            )}
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
