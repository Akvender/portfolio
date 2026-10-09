import Image from "next/image";
import Link from "next/link";
import type { LocalizedProject as Project } from "@/content/projects";
import { type Lang, localePath, ui, type UI } from "@/content/i18n";
import type {
  ApproachSection, CaseSection, ImpactSection, ProblemSection, ResultsSection, RoadmapSection, SolutionSection,
} from "@/content/projects/types";
import { Arrow } from "@/components/site/Arrow";
import { Icon } from "@/components/site/Icon";
import { Counter } from "@/components/site/Counter";
import { Reveal, RevealGroup, RevealItem } from "@/components/site/Reveal";
import { ScrollLine } from "@/components/site/ScrollLine";
import { SectionHeader, Tags } from "@/components/home/Sections";
import { OrderTable, ParallaxCover } from "./Interactive";
import { FlowCover } from "./FlowCover";
import { asset, container, h1, sectionLabel, sectionY } from "@/lib/ui";

const d = (ms: number) => ({ "--d": `${ms}ms` }) as React.CSSProperties;

export function CaseHero({ project, lang }: { project: Project; lang: Lang }) {
  const t = ui[lang].case;
  const meta = [
    [t.client, project.meta.client], [t.role, project.meta.role], [t.period, project.meta.period],
    [t.status, project.meta.status], [t.stack, project.meta.stack],
  ];
  return (
    <section className="bg-ink pt-[104px] text-text-on-dark">
      <div className={`${container} flex flex-col gap-10 py-12 lg:py-20`}>
        <Link href={localePath(lang, "/#umiejetnosci")} className="intro-up inline-flex min-h-[44px] w-fit items-center gap-2 text-[15px] font-semibold text-text-muted-on-dark hover:text-text-on-dark" style={d(0)}>
          <span aria-hidden="true">←</span> {t.back}
        </Link>
        <div>
          <h1 className={`${h1} intro-up max-w-[22ch] text-balance`} style={d(120)}>{project.title}</h1>
          <p className="intro-up mt-5 max-w-[62ch] text-[18px] leading-[160%] text-text-muted-on-dark" style={d(220)}>{project.lead}</p>
          {!project.translated && t.notTranslated && (
            <p className="intro-up mt-5 inline-flex max-w-[62ch] items-start gap-2 rounded-xs border border-border-on-dark px-4 py-3 text-[14px] leading-[150%] text-text-muted-on-dark" style={d(260)}>
              <span aria-hidden="true" className="mt-1.5 size-2 shrink-0 bg-accent" />
              {t.notTranslated}
            </p>
          )}
        </div>
        <dl className="intro-up grid grid-cols-2 overflow-hidden rounded-xs border border-border-on-dark md:grid-cols-5" style={d(300)}>
          {meta.map(([k, v], i) => (
            <div key={k} className={`border-border-on-dark px-5 py-4 md:px-6 ${i % 2 ? "border-l" : ""} ${i >= 2 ? "border-t md:border-t-0" : ""} md:border-l md:first:border-l-0 ${i === 4 ? "col-span-2 md:col-span-1" : ""}`}>
              <dt className="text-[14px] font-medium text-text-muted-on-dark">{k}</dt>
              <dd className="mt-1.5 text-[15px] font-semibold leading-[140%]">{v}</dd>
            </div>
          ))}
        </dl>
        {project.cover ? (
          <ParallaxCover src={project.cover} alt={project.coverAlt ?? project.title} />
        ) : (
          <div className="intro-clip" style={d(350)}>
            <FlowCover id={`hero-${project.slug}`} flow={project.flow} tags={project.tags} caption={t.flowCaption} label={`${t.flowCaption}: ${project.flow.join(" → ")}`} />
          </div>
        )}
      </div>
    </section>
  );
}

function Problem({ s }: { s: ProblemSection }) {
  return (
    <section className={`bg-paper ${sectionY}`}>
      <div className={`${container} flex flex-col gap-12`}>
        <SectionHeader title={s.title}>{s.intro}</SectionHeader>
        <div>
          <ScrollLine className="hidden lg:block" />
          <RevealGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6 lg:gap-0">
            {s.steps.map((step, i) => (
              <RevealItem key={i} className="rounded-xs border border-border bg-white p-5 lg:rounded-none lg:border-0 lg:bg-transparent lg:px-0 lg:pr-5 lg:pt-5">
                <p className="font-display text-[28px] font-extrabold leading-none tracking-[-0.025em]">{i + 1}</p>
                <h3 className="mt-2 text-[16px] font-semibold leading-[135%]">{step.title}</h3>
                <p className="mt-1 text-[14px] leading-[150%] text-text-muted">{step.text}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}

function Solution({ s, t }: { s: SolutionSection; t: UI["case"] }) {
  return (
    <section className={`bg-white ${sectionY}`}>
      <div className={`${container} flex flex-col gap-12`}>
        <SectionHeader title={s.title}>{s.intro}</SectionHeader>
        {s.table && (
          <Reveal className="rounded-xs border border-border p-4 md:p-8">
            <div className="mb-4 flex flex-wrap justify-between gap-2 text-[14px] font-medium text-text-muted">
              <span>{t.orderCard}</span>
              <span>{t.sampleData}</span>
            </div>
            <OrderTable columns={s.table.columns} rows={s.table.rows} dashLabel={t.dash} />
          </Reveal>
        )}
        {s.image && (
          <Reveal>
            <Image src={asset(s.image)} alt={s.imageAlt ?? ""} width={1400} height={900} sizes="(min-width: 1280px) 1248px, 100vw" className="w-full rounded-xs" />
          </Reveal>
        )}
        <div>
          <Reveal><h3 className="font-display text-[24px] font-bold leading-[1.15]">{t.modules}</h3></Reveal>
          <RevealGroup as="ul" className="mt-5 border-t border-ink">
            {s.modules.map((m, i) => (
              <RevealItem as="li" key={i} className="grid gap-1 border-b border-border py-4 md:grid-cols-[240px_minmax(0,1fr)] md:gap-8">
                <span className="text-[16px] font-semibold">{m.title}</span>
                <span className="text-[15px] leading-[150%] text-text-muted">{m.text}</span>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}

function Results({ s }: { s: ResultsSection }) {
  return (
    <section className={`bg-ink text-text-on-dark ${sectionY}`}>
      <div className={`${container} flex flex-col gap-12`}>
        <SectionHeader title={s.title} dark>{s.intro}</SectionHeader>
        <RevealGroup as="ul" className="grid grid-cols-2 border-t border-border-on-dark md:grid-cols-[repeat(auto-fit,minmax(160px,1fr))]">
          {s.metrics.map((m, i) => (
            <RevealItem as="li" key={i} className="border-b border-border-on-dark py-5 pr-6 md:border-b-0 md:border-r md:pl-6 md:first:pl-0 md:last:border-r-0">
              <Counter to={m.value} suffix={m.suffix} className="block text-[clamp(32px,4vw,44px)] font-display font-extrabold leading-[110%] tracking-[-0.02em]" />
              <p className="mt-2 text-[14px] leading-[145%] text-text-muted-on-dark">{m.label}</p>
            </RevealItem>
          ))}
        </RevealGroup>
        <div className={`grid gap-10 ${s.image ? "lg:grid-cols-2 lg:items-center" : ""}`}>
          <RevealGroup className="flex flex-col gap-4">
            {s.proofs.map((p, i) => (
              <RevealItem key={i} className="flex gap-3 text-[16px] leading-[155%]">
                <Icon name="check" className="mt-1 size-5 shrink-0" />
                {p}
              </RevealItem>
            ))}
          </RevealGroup>
          {s.image && (
            <Reveal>
              <Image src={asset(s.image)} alt={s.imageAlt ?? ""} width={1400} height={900} sizes="(min-width: 1024px) 600px, 100vw" className="w-full rounded-xs" />
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}

function Approach({ s }: { s: ApproachSection }) {
  return (
    <section className={`bg-paper ${sectionY}`}>
      <div className={`${container} flex flex-col gap-12`}>
        <SectionHeader title={s.title} />
        <Reveal className="flex flex-col gap-4 rounded-xs border border-border bg-white p-8 md:flex-row md:items-center md:gap-10 md:p-10">
          <span aria-hidden="true" className="text-[72px] font-extrabold leading-none text-ink md:text-[96px]">—</span>
          <figure>
            <blockquote className="text-[clamp(20px,2.4vw,26px)] font-extrabold leading-[130%]">{s.quote}</blockquote>
            {s.quoteAuthor && <figcaption className="mt-3 text-[16px] leading-[155%] text-text-muted">{s.quoteAuthor}</figcaption>}
          </figure>
        </Reveal>
        <RevealGroup as="ul" className="border-t border-ink">
          {s.cards.map((c, i) => (
            <RevealItem as="li" key={i} className="grid gap-1 border-b border-border py-4 md:grid-cols-[240px_minmax(0,1fr)] md:gap-8">
              <span className="text-[16px] font-semibold">{c.title}</span>
              <span className="text-[15px] leading-[150%] text-text-muted">{c.text}</span>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

function Impact({ s }: { s: ImpactSection }) {
  return (
    <section className={`bg-white ${sectionY}`}>
      <div className={container}>
        <SectionHeader title={s.title}>{s.text}</SectionHeader>
      </div>
    </section>
  );
}

function Roadmap({ s }: { s: RoadmapSection }) {
  return (
    <section className={`bg-white ${sectionY} border-t border-border`}>
      <div className={`${container} flex flex-col gap-12`}>
        <SectionHeader title={s.title} />
        <RevealGroup as="ol" className="grid gap-4 md:grid-cols-3">
          {s.items.map((it, i) => (
            <RevealItem as="li" key={i} className="rounded-xs border border-border bg-paper p-7">
              <span aria-hidden="true" className="font-display text-[40px] font-extrabold leading-none tracking-[-0.025em]">{i + 1}</span>
              <h3 className="mt-3 text-[20px] font-semibold leading-[130%]">{it.title}</h3>
              <p className="mt-2 text-[15px] leading-[150%] text-text-muted">{it.text}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

export function CaseSections({ sections, lang }: { sections: CaseSection[]; lang: Lang }) {
  const t = ui[lang].case;
  return sections.map((s, i) => {
    switch (s.type) {
      case "problem": return <Problem key={i} s={s} />;
      case "solution": return <Solution key={i} s={s} t={t} />;
      case "results": return <Results key={i} s={s} />;
      case "approach": return <Approach key={i} s={s} />;
      case "impact": return <Impact key={i} s={s} />;
      case "roadmap": return <Roadmap key={i} s={s} />;
    }
  });
}

export function NextProject({ project, lang }: { project: Project; lang: Lang }) {
  return (
    <section className={`bg-paper ${sectionY}`}>
      <div className={container}>
        <Reveal>
          <Link
            href={localePath(lang, `/projekty/${project.slug}/`)}
            className="group grid gap-8 rounded-xs border border-border bg-white p-5 transition-colors duration-300 hover:border-ink md:grid-cols-[1fr_1.2fr] md:items-center md:p-8"
          >
            <div className="flex flex-col gap-4">
              <h2 className="text-[clamp(24px,3vw,30px)] font-extrabold leading-[120%]">
                <span className="sr-only">{ui[lang].case.next} </span>
                {project.title}{" "}
                <Arrow className="transition-transform duration-200 group-hover:translate-x-1" />
              </h2>
              <Tags tags={project.tags} />
            </div>
            <div className="overflow-hidden rounded-[2px]">
              {project.cover ? (
                <Image src={asset(project.cover)} alt={project.coverAlt ?? project.title} width={1600} height={1000} sizes="(min-width: 768px) 640px, 100vw" className="aspect-[8/5] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]" />
              ) : (
                <div className="transition-transform duration-700 ease-out group-hover:scale-[1.02]">
                  <FlowCover id={`next-${project.slug}`} flow={project.flow} tags={project.tags} caption={ui[lang].case.flowCaption} label={`${ui[lang].case.flowCaption}: ${project.flow.join(" → ")}`} />
                </div>
              )}
            </div>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
