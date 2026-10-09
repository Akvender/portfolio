import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { projects, type Project } from "@/content/projects";
import { highlights, processSteps, proofs, services, team } from "@/content/site";
import { CaseCard } from "@/components/site/CaseCard";
import { Counter } from "@/components/site/Counter";
import { Reveal, RevealGroup, RevealItem } from "@/components/site/Reveal";
import { ScrollLine } from "@/components/site/ScrollLine";
import { asset, body, container, h2, h3, sectionLabel, sectionY } from "@/lib/ui";

export function SectionHeader({ label, title, dark = false, children }: { label: string; title: string; dark?: boolean; children?: ReactNode }) {
  return (
    <Reveal className="max-w-[760px]">
      <p className={`${sectionLabel} ${dark ? "text-accent-amber" : "text-accent-green"}`}>{label}</p>
      <h2 className={`${h2} mt-4`}>{title}</h2>
      {children && <div className={`${body} mt-4 ${dark ? "text-text-muted-on-dark" : "text-text-muted"}`}>{children}</div>}
    </Reveal>
  );
}

export function Tags({ tags }: { tags: readonly string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {tags.map((t, i) => (
        <li key={i} className="rounded-full border border-border px-3 py-1 font-mono text-[11.5px] uppercase tracking-[1px] text-text-muted">
          {t}
        </li>
      ))}
    </ul>
  );
}

export function Highlights() {
  return (
    <section aria-label="Najważniejsze liczby" className="bg-ink pb-16 text-text-on-dark">
      <RevealGroup className={container}>
        <dl className="grid grid-cols-2 overflow-hidden rounded-lg border border-border-on-dark lg:grid-cols-4">
          {highlights.map((h, i) => (
            <RevealItem
              key={i}
              className={`border-border-on-dark p-6 md:px-8 ${i % 2 ? "border-l" : ""} ${i >= 2 ? "border-t lg:border-t-0" : ""} ${i === 2 ? "lg:border-l" : ""}`}
            >
              <dt className="sr-only">{h.label}</dt>
              <dd>
                <Counter to={h.value} suffix={h.suffix} className="block text-[36px] font-extrabold leading-[110%]" />
                <span aria-hidden="true" className="mt-1 block text-[14px] text-text-muted-on-dark">{h.label}</span>
              </dd>
            </RevealItem>
          ))}
        </dl>
      </RevealGroup>
    </section>
  );
}

function FeaturedCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projekty/${project.slug}/`}
      className="group grid gap-8 rounded-lg border border-border bg-white p-5 transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_24px_60px_-24px_rgba(20,22,26,0.3)] md:p-8 lg:grid-cols-[1.3fr_1fr] lg:items-center lg:gap-12"
    >
      <div className="overflow-hidden rounded-[12px]">
        <Image
          src={asset(project.cover)}
          alt={project.coverAlt}
          width={1600}
          height={1000}
          sizes="(min-width: 1024px) 700px, 100vw"
          className="aspect-[8/5] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
      </div>
      <div className="flex flex-col gap-5">
        <p className={`${sectionLabel} text-accent-amber`}>Case study {project.number} · Wyróżniony</p>
        <h3 className="text-[clamp(24px,3vw,30px)] font-extrabold leading-[120%]">{project.title}</h3>
        <p className={`${body} text-text-muted`}>{project.description}</p>
        <Tags tags={project.tags} />
        <dl className="grid grid-cols-3 gap-4 border-t border-border pt-5">
          {project.metrics.map((m, i) => (
            <div key={i}>
              <dt className="sr-only">{m.label}</dt>
              <dd>
                <Counter to={m.value} suffix={m.suffix} className="block text-[28px] font-extrabold leading-[110%]" />
                <span aria-hidden="true" className="mt-1 block text-[13px] leading-[140%] text-text-muted">{m.label}</span>
              </dd>
            </div>
          ))}
        </dl>
        <p className="text-[16px] font-semibold text-accent-green">
          Zobacz case study{" "}
          <span aria-hidden="true" className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
        </p>
      </div>
    </Link>
  );
}

export function Work() {
  const featured = projects.find((p) => p.featured) ?? projects[0];
  const rest = projects.filter((p) => p !== featured);
  return (
    <section id="projekty" className={`bg-paper ${sectionY}`}>
      <div className={`${container} flex flex-col gap-12`}>
        <SectionHeader label="Wybrane realizacje" title="Projekty i wdrożenia" />
        <Reveal>
          <FeaturedCard project={featured} />
        </Reveal>
        <RevealGroup className="grid gap-6 md:grid-cols-2">
          {rest.map((p) => (
            <RevealItem key={p.slug}>
              <CaseCard project={p} />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section id="uslugi" className={`bg-white ${sectionY}`}>
      <div className={`${container} flex flex-col gap-12`}>
        <SectionHeader label="Co robimy" title="Usługi" />
        <RevealGroup className="grid gap-6 md:grid-cols-3">
          {services.map((s, i) => (
            <RevealItem key={i} className="flex flex-col gap-3 rounded-lg bg-paper p-8">
              <p className="font-mono text-[13px] text-accent-green">{String(i + 1).padStart(2, "0")}</p>
              <h3 className={h3}>{s.title}</h3>
              <p className="text-[15px] leading-[150%] text-text-muted">{s.text}</p>
              <div className="mt-2">
                <Tags tags={s.items} />
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <div id="proces" className="scroll-mt-24 pt-8">
          <Reveal>
            <p className={`${sectionLabel} text-text-muted`}>Jak pracujemy</p>
          </Reveal>
          <ScrollLine className="mt-6 hidden md:block" />
          <RevealGroup className="grid gap-6 md:grid-cols-5 md:gap-0">
            {processSteps.map((s, i) => (
              <RevealItem key={i} className="mt-6 border-l-2 border-border pl-4 md:mt-0 md:border-l-0 md:pl-0 md:pr-5 md:pt-5">
                <p className="font-mono text-[13px] text-accent-amber">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-2 text-[17px] font-semibold leading-[130%]">{s.title}</h3>
                <p className="mt-1 text-[14px] leading-[150%] text-text-muted">{s.text}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}

export function Team() {
  return (
    <section id="zespol" className={`bg-paper ${sectionY}`}>
      <div className={`${container} flex flex-col gap-12`}>
        <SectionHeader label="Zespół" title="Uzupełniamy się kompetencjami." />
        <RevealGroup className="grid gap-6 md:grid-cols-2">
          {team.map((p) => (
            <RevealItem key={p.name} className="flex flex-col gap-5 rounded-lg border border-border bg-white p-6 md:p-8">
              <Image
                src={asset(p.photo)}
                alt={`${p.name} — zdjęcie (placeholder)`}
                width={800}
                height={1000}
                sizes="(min-width: 768px) 560px, 100vw"
                className="aspect-[4/3] w-full rounded-[12px] object-cover"
              />
              <div>
                <h3 className="text-[24px] font-extrabold leading-[120%]">{p.name}</h3>
                <p className="mt-2 font-mono text-[13px] leading-[150%] text-accent-green">{p.role}</p>
              </div>
              <ul className="flex flex-col gap-2">
                {p.skills.map((s) => (
                  <li key={s} className="flex gap-3 text-[15px] leading-[150%]">
                    <span aria-hidden="true" className="text-accent-amber">·</span>
                    {s}
                  </li>
                ))}
              </ul>
            </RevealItem>
          ))}
        </RevealGroup>
        <RevealGroup className="grid gap-6 md:grid-cols-2">
          {proofs.map((p) => (
            <RevealItem key={p.src}>
              <Image src={asset(p.src)} alt={p.alt} width={1200} height={800} sizes="(min-width: 768px) 600px, 100vw" className="aspect-[5/2] w-full rounded-lg object-cover" />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
