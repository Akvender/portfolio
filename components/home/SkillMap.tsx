"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Arrow } from "@/components/site/Arrow";
import { Icon } from "@/components/site/Icon";
import { StatusBadge } from "@/components/case/Status";
import type { Project } from "@/content/projects";
import { type Lang, localePath, ui } from "@/content/i18n";
import { skillGroups, type SkillId } from "@/content/skills";
import { uiExtra } from "@/content/ui-extra";
import { EASE_OUT } from "@/lib/motion";
import { container } from "@/lib/ui";

/** Tylko to, czego potrzebuje lista — reszta case study nie trafia do paczki strony głównej. */
export type SkillMapProject = Pick<Project, "slug" | "title" | "description" | "skills"> & { status: string };


/**
 * Interaktywna mapa umiejętności na czarnym pasie: wybór umiejętności przestawia listę (nie filtruje):
 * pasujące projekty idą na górę, pozostałe zostają niżej, przygaszone, pod etykietą „Pozostałe projekty”.
 */
export function SkillMap({ projects, lang }: { projects: SkillMapProject[]; lang: Lang }) {
  const t = ui[lang].skills;
  const x = uiExtra[lang];
  const labelOf = new Map<string, string>(skillGroups.flatMap((g) => g.skills.map((s) => [s.id, s.label[lang]] as const)));
  const [active, setActive] = useState<SkillId | null>(null);
  const reduce = useReducedMotion();
  const resultsRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [lines, setLines] = useState<{ d: string; x: number; y: number }[]>([]);
  const countOf = (id: SkillId) => projects.filter((p) => p.skills.includes(id)).length;
  // Klikalna jest każda umiejętność, która ma choć jeden projekt; reszta trafia do „Pracuję też z”.
  const isFilter = (id: SkillId) => countOf(id) >= 1;
  const matches = active ? projects.filter((p) => p.skills.includes(active)) : projects;
  let wave = 0; // kolejność przycisków w jednorazowej „fali” podświetlenia
  const ordered = active ? [...matches, ...projects.filter((p) => !p.skills.includes(active))] : projects;

  // Linie od wybranej umiejętności do pasujących projektów (tylko desktop, gdzie są obok siebie).
  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;
    const measure = () => {
      if (!active || !window.matchMedia("(min-width: 1024px)").matches) return setLines([]);
      const box = grid.getBoundingClientRect();
      const chip = grid.querySelector<HTMLElement>(`[data-skill="${active}"]`);
      if (!chip) return setLines([]);
      const c = chip.getBoundingClientRect();
      const x1 = c.right - box.left + 6;
      const y1 = c.top + c.height / 2 - box.top;
      const paths = projects
        .filter((pr) => pr.skills.includes(active))
        .map((pr) => grid.querySelector<HTMLElement>(`[data-project="${pr.slug}"]`))
        .filter((el): el is HTMLElement => el !== null)
        .map((el) => {
          const r = el.getBoundingClientRect();
          const x2 = r.left - box.left - 20;
          const y2 = r.top - box.top + 38;
          const bend = Math.max(40, (x2 - x1) * 0.5);
          return { d: `M ${x1} ${y1} C ${x1 + bend} ${y1}, ${x2 - bend} ${y2}, ${x2} ${y2}`, x: x2, y: y2 };
        });
      setLines(paths);
    };
    measure();
    // Po przestawieniu listy (animacja ok. 450 ms) przelicz jeszcze raz.
    const t = window.setTimeout(measure, 500);
    window.addEventListener("resize", measure);
    return () => {
      window.clearTimeout(t);
      window.removeEventListener("resize", measure);
    };
  }, [active, projects]);

  const choose = (id: SkillId | null) => {
    setActive(id);
    // Na wąskich ekranach lista jest pod przyciskami — pokaż wynik wyboru.
    if (id && window.matchMedia("(max-width: 1023px)").matches) {
      resultsRef.current?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
    }
  };

  return (
    <section id="umiejetnosci" className="scroll-mt-[72px] border-t border-border-on-dark bg-ink-soft text-text-on-dark">
      <div ref={gridRef} className={`${container} relative grid gap-10 py-16 md:py-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:grid-rows-[auto_1fr] lg:gap-x-16 lg:gap-y-10 lg:py-28`}>
        {/* Linie łączące wybraną umiejętność z projektami. */}
        <svg aria-hidden="true" className="pointer-events-none absolute inset-0 z-10 hidden size-full overflow-visible lg:block">
          {lines.map(({ d, x, y }, i) => (
            <g key={`${active}-${i}`}>
              <motion.path
                d={d}
                fill="none"
                className="stroke-accent"
                strokeWidth={1.5}
                strokeLinecap="round"
                initial={{ pathLength: reduce ? 1 : 0, opacity: 0.9 }}
                animate={{ pathLength: 1, opacity: 0.9 }}
                transition={{ duration: 0.6, delay: i * 0.06, ease: EASE_OUT }}
              />
              <circle cx={x} cy={y} r={4} className="fill-accent" />
            </g>
          ))}
        </svg>
        {/* Na telefonie kolejność: nagłówek → projekty → przyciski; na desktopie przyciski pod nagłówkiem, projekty obok. */}
        <div className="contents">
          <div className="order-1 lg:col-start-1 lg:row-start-1">
            <h2 className="mark-heading font-display text-[clamp(32px,4.4vw,56px)] font-extrabold leading-[1.02] tracking-[-0.035em] text-balance">
              {t.title}
            </h2>
            <p className="mt-5 max-w-[48ch] text-[17px] leading-[155%] text-text-muted-on-dark">
              {t.lead}
            </p>
          </div>

          <div className="order-3 flex flex-col gap-7 lg:order-none lg:col-start-1 lg:row-start-2">
            <p className="-mb-2 flex items-center gap-2 text-[14px] font-medium text-text-muted-on-dark">
              <Icon name="pointer" className="size-[18px] text-accent" />
              {t.hint}
            </p>
            {skillGroups.filter((g) => g.skills.some((s) => isFilter(s.id))).map((g) => (
              <fieldset key={g.title.pl} className="flex flex-col gap-3">
                <legend className="mb-3 flex items-center gap-2 text-[14px] font-semibold text-text-muted-on-dark">
                  <Icon name={g.icon} className="size-[18px]" />
                  {g.title[lang]}
                </legend>
                <div className="flex flex-wrap gap-2">
                  {g.skills.filter((s) => isFilter(s.id)).map((s) => {
                    const on = active === s.id;
                    const order = wave++;
                    const n = countOf(s.id);
                    return (
                      <button
                        key={s.id}
                        data-skill={s.id}
                        type="button"
                        aria-pressed={on}
                        aria-controls="lista-projektow"
                        onClick={() => choose(on ? null : s.id)}
                        className={`group/chip relative inline-flex min-h-[44px] cursor-pointer items-center gap-2.5 rounded-xs border pl-3.5 pr-2.5 text-[15px] font-medium transition-[background-color,border-color,color,transform] duration-200 active:scale-[0.97] ${
                          on
                            ? "border-accent bg-accent text-on-accent"
                            : "border-white/25 hover:-translate-y-px hover:border-accent/70 hover:bg-white/[0.06]"
                        }`}
                      >
                        {/* Jednorazowa fala obwódek, gdy sekcja wjeżdża w widok: subtelna podpowiedź, że to przyciski. */}
                        {!reduce && (
                          <motion.span
                            aria-hidden="true"
                            className="pointer-events-none absolute -inset-px rounded-xs border border-accent"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: [0, 1, 0] }}
                            viewport={{ once: true, amount: 0.6 }}
                            transition={{ duration: 0.9, delay: 0.4 + order * 0.07, ease: "easeInOut" }}
                          />
                        )}
                        {s.label[lang]}{" "}
                        <span
                          className={`grid h-5 min-w-4 place-items-center text-[12px] font-medium tabular-nums transition-colors ${
                            on ? "" : "text-text-muted-on-dark/80 group-hover/chip:text-text-muted-on-dark"
                          }`}
                        >
                          {on ? <Icon name="close" className="size-3" /> : <span>{n}<span className="sr-only"> {t.projects(n)}</span></span>}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </fieldset>
            ))}
            {/* Umiejętności bez opisanego tu projektu — informacja, nie przycisk. */}
            {(() => {
              const other = skillGroups.flatMap((g) => [...g.skills] as { id: SkillId; label: { pl: string; en: string } }[]).filter((s) => !isFilter(s.id));
              return other.length > 0 ? (
                <p className="border-t border-white/20 pt-5 text-[15px] leading-[155%] text-text-muted-on-dark">
                  <span className="font-semibold text-text-on-dark">{t.also} </span>
                  {other.map((s) => s.label[lang]).join(" · ")}
                </p>
              ) : null;
            })()}
          </div>
        </div>

        <div ref={resultsRef} className="order-2 flex scroll-mt-[88px] flex-col lg:order-none lg:col-start-2 lg:row-span-2 lg:row-start-1">
          <div className="flex min-h-[44px] flex-wrap items-center justify-between gap-x-4 gap-y-2 border-b border-white/60 pb-3 md:-mx-4 md:px-4">
            <div aria-live="polite" className="min-w-0">
              <p className="text-[15px] font-semibold">
                {active
                  ? matches.length > 0
                    ? t.matching(labelOf.get(active) ?? "", matches.length, projects.length)
                    : labelOf.get(active)
                  : t.all(projects.length)}
              </p>
              {active && <p className="mt-1 text-[14px] leading-[145%] text-text-muted-on-dark">{x.skills.reorder}</p>}
            </div>
            {active && (
              <button
                type="button"
                onClick={() => choose(null)}
                className="inline-flex min-h-[44px] shrink-0 cursor-pointer items-center gap-2 rounded-xs border border-white/40 px-4 text-[15px] font-semibold transition-colors hover:border-accent hover:text-accent"
              >
                <Icon name="close" className="size-4" />
                {t.showAll}
              </button>
            )}
          </div>

          <ul id="lista-projektow" className="flex flex-col">
            {ordered.flatMap((p, idx) => {
              const dim = active !== null && !p.skills.includes(active);
              // Granica między pasującymi a pozostałymi projektami: lista jest przestawiona, nie przefiltrowana.
              const divider = dim && idx === matches.length && (
                <motion.li key="pozostale" layout={!reduce} aria-hidden="true" className="pt-6 pb-1 text-[13px] font-semibold text-text-muted-on-dark md:-mx-4 md:px-4">
                  {x.skills.others}
                </motion.li>
              );
              const item = (
                <motion.li
                  key={p.slug}
                  data-project={p.slug}
                  layout={!reduce}
                  transition={{ duration: 0.45, ease: EASE_OUT }}
                  className={`group relative grid gap-3 border-b border-white/15 py-6 md:-mx-4 md:rounded-xs md:px-4 transition-[opacity,background-color] duration-300 hover:bg-white/[0.04] focus-within:bg-white/[0.04] md:grid-cols-[minmax(0,1fr)_auto] md:items-start md:gap-8 ${
                    dim ? "opacity-70 hover:opacity-90" : "opacity-100"
                  }`}
                >
                  <div className="flex flex-col gap-2">
                    <h3 className="font-display text-[22px] font-bold leading-[1.15] tracking-[-0.012em] text-balance [overflow-wrap:anywhere] md:text-[26px]">
                      {/* Link na tytule, klikalny cały wiersz przez ::after. */}
                      <Link href={localePath(lang, `/projekty/${p.slug}/`)} className="transition-colors after:absolute after:inset-0 after:content-[''] group-hover:text-accent">
                        {p.title}
                      </Link>
                    </h3>
                    {p.status && <StatusBadge status={p.status} label={x.status} dark />}
                    <p className="max-w-[56ch] text-[15px] leading-[150%] text-text-muted-on-dark">{p.description}</p>
                    {active && (
                      <p className="text-[13px] font-medium text-text-muted-on-dark">
                        {p.skills.map((id, i) => (
                          <span key={id}>
                            {i > 0 && " · "}
                            <span className={id === active ? "font-semibold text-accent" : undefined}>{labelOf.get(id)}</span>
                          </span>
                        ))}
                      </p>
                    )}
                  </div>
                  <span aria-hidden="true" className="inline-flex items-center gap-2 text-[15px] font-semibold text-text-muted-on-dark transition-colors group-hover:text-accent md:pt-1.5">
                    <Arrow className="transition-transform duration-200 group-hover:translate-x-1" />
                  </span>
                </motion.li>
              );
              return divider ? [divider, item] : [item];
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
