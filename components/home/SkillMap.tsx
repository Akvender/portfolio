"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Arrow } from "@/components/site/Arrow";
import { Icon } from "@/components/site/Icon";
import type { Project } from "@/content/projects";
import { skillGroups, type SkillId } from "@/content/skills";
import { EASE_OUT } from "@/lib/motion";
import { container } from "@/lib/ui";

/** Tylko to, czego potrzebuje lista — reszta case study nie trafia do paczki strony głównej. */
export type SkillMapProject = Pick<Project, "slug" | "title" | "description" | "flow" | "skills">;

const labelOf = new Map<string, string>(skillGroups.flatMap((g) => g.skills.map((s) => [s.id, s.label] as const)));

/**
 * Interaktywna mapa umiejętności na czarnym pasie: wybór umiejętności przenosi pasujące
 * projekty na górę listy, pozostałe zostają przygaszone.
 */
export function SkillMap({ projects }: { projects: SkillMapProject[] }) {
  const [active, setActive] = useState<SkillId | null>(null);
  const reduce = useReducedMotion();
  const resultsRef = useRef<HTMLDivElement>(null);
  const used = new Set(projects.flatMap((p) => p.skills));
  const matches = active ? projects.filter((p) => p.skills.includes(active)) : projects;
  const countOf = (id: SkillId) => projects.filter((p) => p.skills.includes(id)).length;
  let wave = 0; // kolejność przycisków w jednorazowej „fali” podświetlenia
  const ordered = active ? [...matches, ...projects.filter((p) => !p.skills.includes(active))] : projects;

  const choose = (id: SkillId | null) => {
    setActive(id);
    // Na wąskich ekranach lista jest pod przyciskami — pokaż wynik wyboru.
    if (id && window.matchMedia("(max-width: 1023px)").matches) {
      resultsRef.current?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
    }
  };

  return (
    <section id="umiejetnosci" className="scroll-mt-[104px] border-t border-border-on-dark bg-ink-soft text-text-on-dark">
      <div className={`${container} grid gap-12 py-16 md:py-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-16 lg:py-28`}>
        <div className="flex flex-col gap-10">
          <div>
            <h2 className="mark-heading font-display text-[clamp(32px,4.4vw,56px)] font-extrabold leading-[1.02] tracking-[-0.035em] text-balance">
              Kliknij umiejętność. Pokażę, gdzie jej użyłem.
            </h2>
            <p className="mt-5 max-w-[48ch] text-[17px] leading-[155%] text-text-muted-on-dark">
              Każdy projekt obok to coś, co zbudowałem. Wybierz technologię, a projekty, w których grała rolę, przejdą na
              górę listy.
            </p>
          </div>

          <div className="flex flex-col gap-7">
            <p className="-mb-2 flex items-center gap-2 text-[14px] font-medium text-text-muted-on-dark">
              <Icon name="pointer" className="size-[18px] text-accent" />
              Wybierz umiejętność. Liczba obok to projekty, w których jej użyłem.
            </p>
            {skillGroups.map((g) => (
              <fieldset key={g.title} className="flex flex-col gap-3">
                <legend className="mb-3 flex items-center gap-2 text-[14px] font-semibold text-text-muted-on-dark">
                  <Icon name={g.icon} className="size-[18px]" />
                  {g.title}
                </legend>
                <div className="flex flex-wrap gap-2">
                  {g.skills.filter((s) => used.has(s.id)).map((s) => {
                    const on = active === s.id;
                    const order = wave++;
                    const n = countOf(s.id);
                    return (
                      <button
                        key={s.id}
                        type="button"
                        aria-pressed={on}
                        aria-controls="lista-projektow"
                        aria-label={`${s.label}: ${n} ${n === 1 ? "projekt" : "projekty"}`}
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
                        {s.label}
                        <span
                          aria-hidden="true"
                          className={`grid h-5 min-w-5 place-items-center rounded-[3px] px-1 text-[12px] font-semibold tabular-nums transition-colors ${
                            on ? "bg-on-accent/15" : "bg-white/10 text-text-muted-on-dark group-hover/chip:text-text-on-dark"
                          }`}
                        >
                          {on ? "✕" : n}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </fieldset>
            ))}
            {/* Umiejętności bez opisanego tu projektu — informacja, nie przycisk. */}
            {(() => {
              const other = skillGroups.flatMap((g) => [...g.skills] as { id: SkillId; label: string }[]).filter((s) => !used.has(s.id));
              return other.length > 0 ? (
                <p className="border-t border-white/20 pt-5 text-[15px] leading-[155%] text-text-muted-on-dark">
                  <span className="font-semibold text-text-on-dark">Używam też: </span>
                  {other.map((s) => s.label).join(" · ")}
                </p>
              ) : null;
            })()}
          </div>
        </div>

        <div ref={resultsRef} className="flex scroll-mt-[120px] flex-col">
          <div className="flex min-h-[44px] items-center justify-between gap-4 border-b border-white/60 pb-3 md:-mx-4 md:px-4">
            <p aria-live="polite" className="text-[15px] font-semibold">
              {active
                ? matches.length > 0
                  ? `${labelOf.get(active)}: ${matches.length} z ${projects.length} projektów`
                  : labelOf.get(active)
                : `Wszystkie projekty (${projects.length})`}
            </p>
            {active && (
              <button
                type="button"
                onClick={() => choose(null)}
                className="min-h-[44px] shrink-0 cursor-pointer text-[15px] font-medium underline decoration-white/40 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
              >
                Pokaż wszystkie
              </button>
            )}
          </div>

          <ul id="lista-projektow" className="flex flex-col">
            {ordered.map((p) => {
              const dim = active !== null && !p.skills.includes(active);
              return (
                <motion.li
                  key={p.slug}
                  layout={!reduce}
                  transition={{ duration: 0.45, ease: EASE_OUT }}
                  className={`group relative grid gap-3 border-b border-white/15 py-6 md:-mx-4 md:rounded-xs md:px-4 transition-[opacity,background-color] duration-300 hover:bg-white/[0.04] focus-within:bg-white/[0.04] md:grid-cols-[minmax(0,1fr)_auto] md:items-start md:gap-8 ${
                    dim ? "opacity-50 hover:opacity-80" : "opacity-100"
                  }`}
                >
                  <div className="flex flex-col gap-2">
                    <h3 className="font-display text-[22px] font-bold leading-[1.15] tracking-[-0.012em] text-balance md:text-[26px]">
                      {/* Link na tytule, klikalny cały wiersz przez ::after. */}
                      <Link href={`/projekty/${p.slug}/`} className="transition-colors after:absolute after:inset-0 after:content-[''] group-hover:text-accent">
                        {p.title}
                      </Link>
                    </h3>
                    <p className="max-w-[56ch] text-[15px] leading-[150%] text-text-muted-on-dark">{p.description}</p>
                    <p className="mt-1 text-[14px] font-medium text-white/85">
                      <span className="sr-only">Przepływ: </span>
                      {p.flow.join("  →  ")}
                    </p>
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
                    Szczegóły
                    <Arrow className="transition-transform duration-200 group-hover:translate-x-1" />
                  </span>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
