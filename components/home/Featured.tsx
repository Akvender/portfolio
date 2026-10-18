import Link from "next/link";
import { FlowCover } from "@/components/case/FlowCover";
import { StatusBadge } from "@/components/case/Status";
import { Arrow } from "@/components/site/Arrow";
import { type Lang, localePath, ui } from "@/content/i18n";
import type { LocalizedProject } from "@/content/projects";
import { uiExtra } from "@/content/ui-extra";
import { container, h2 } from "@/lib/ui";

function ProjectCard({ project, lang, large = false }: { project: LocalizedProject; lang: Lang; large?: boolean }) {
  const t = uiExtra[lang];
  const baseMetric = project.metrics[0];
  const metric = project.slug === "mleczarnia-automatyzacja-zamowien"
    ? t.featured.dairyMetric
    : baseMetric
      ? { value: `${baseMetric.value}${baseMetric.suffix ?? ""}`, label: baseMetric.label }
      : null;
  const href = localePath(lang, `/projekty/${project.slug}/`);

  return (
    <article className={`group relative flex min-w-0 flex-col gap-5 overflow-hidden rounded-lg bg-ink-soft p-4 md:p-6 ${large ? "lg:row-span-2" : ""}`}>
      <div className="overflow-hidden rounded-md border border-border-on-dark bg-ink">
        <FlowCover
          id={`featured-${project.slug}`}
          flow={project.flow}
          icons={project.flowIcons}
          tags={project.tags}
          ends={[ui[lang].case.flowStart, ui[lang].case.flowEnd]}
          caption={ui[lang].case.flowCaption}
          label={`${ui[lang].case.flowCaption}: ${project.flow.join(" → ")}`}
          forceHorizontal
        />
      </div>
      <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
        <StatusBadge status={project.meta.status} label={t.status} dark />
        <span className="font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-text-muted-on-dark">
          {t.featured.caseStudy} {project.number}
        </span>
      </div>
      <h3 className={`font-display font-bold leading-[1.12] tracking-[-0.015em] text-balance ${large ? "text-[26px] lg:text-[30px]" : "text-[23px]"}`}>
        <Link
          href={href}
          className="after:absolute after:inset-0 after:content-['']"
          style={{ viewTransitionName: `project-${project.slug}` } as React.CSSProperties}
        >
          {project.title}
        </Link>
      </h3>
      {metric && (
        <p className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
          <strong className={`font-display font-extrabold leading-none text-accent ${large ? "text-[46px]" : "text-[36px]"}`}>{metric.value}</strong>
          <span className="max-w-[30ch] text-[14px] leading-[140%] text-text-muted-on-dark">{metric.label}</span>
        </p>
      )}
      <p className="text-[15px] leading-[155%] text-text-muted-on-dark">{project.description}</p>
      <div className="mt-auto flex items-end justify-between gap-4 pt-1">
        <p className="font-mono text-[11px] leading-[150%] text-text-muted-on-dark">{project.meta.stack}</p>
        <span aria-hidden="true" className="inline-flex shrink-0 items-center gap-2 text-[14px] font-semibold text-text-on-dark">
          {t.featured.open} <Arrow className="text-accent transition-transform duration-200 group-hover:translate-x-1" />
        </span>
      </div>
    </article>
  );
}

export function Featured({ projects, others, total, lang }: { projects: LocalizedProject[]; others: LocalizedProject[]; total: number; lang: Lang }) {
  const t = uiExtra[lang];
  if (projects.length === 0) return null;
  return (
    <section id="realizacje" aria-labelledby="realizacje-tytul" className="scroll-mt-24 border-t border-border-on-dark bg-ink text-text-on-dark">
      <div className={`${container} flex flex-col gap-10 py-16 md:py-20 lg:py-24`}>
        <div className="grid items-end gap-5 lg:grid-cols-[minmax(0,1fr)_auto]">
          <div>
            <p className="mb-4 font-mono text-[12px] font-medium uppercase tracking-[0.08em] text-accent">{t.eyebrow.work}</p>
            <h2 id="realizacje-tytul" className={`${h2} max-w-[20ch] text-balance`}>{t.featured.title}</h2>
          </div>
          <Link href={localePath(lang, "/#umiejetnosci")} className="group inline-flex min-h-[48px] items-center gap-2 text-[15px] font-semibold">
            {t.featured.all(total)}
            <Arrow dir="down" className="text-accent transition-transform duration-200 group-hover:translate-y-1" />
          </Link>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {projects.map((project, index) => <ProjectCard key={project.slug} project={project} lang={lang} large={index === 0} />)}
        </div>

        <ul className="mt-4 flex flex-col border-t border-border-on-dark">
          {others.map((project) => (
            <li key={project.slug} className="group relative border-b border-border-on-dark py-5">
              <div className="grid gap-2 md:grid-cols-[minmax(0,1fr)_auto] md:items-center md:gap-8">
                <div>
                  <h3 className="font-display text-[20px] font-bold leading-[1.2] tracking-[-0.015em]">
                    <Link href={localePath(lang, `/projekty/${project.slug}/`)} className="after:absolute after:inset-0 after:content-['']">
                      {project.title}
                    </Link>
                  </h3>
                  <p className="mt-1 max-w-[72ch] text-[14px] leading-[145%] text-text-muted-on-dark md:line-clamp-1">{project.description}</p>
                </div>
                <div className="flex items-center justify-between gap-5 md:justify-end">
                  <p className="font-mono text-[11px] text-text-muted-on-dark">{project.meta.stack}</p>
                  <Arrow className="shrink-0 text-accent transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
