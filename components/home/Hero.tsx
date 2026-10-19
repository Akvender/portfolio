import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { Arrow } from "@/components/site/Arrow";
import { ContactLink } from "@/components/site/ContactLink";
import { type Lang, localePath } from "@/content/i18n";
import { getProjects } from "@/content/projects";
import { getContent } from "@/content/site";
import { uiExtra } from "@/content/ui-extra";
import { asset, container } from "@/lib/ui";

const d = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

/** Liczba odliczana od zera w CSS (@property); czytnik ekranu dostaje gotową wartość. Wartości nieliczbowe bez animacji. */
function CountUp({ value, delay }: { value: string; delay: number }) {
  const m = /^(\d+)(.*)$/.exec(value);
  if (!m) return <>{value}</>;
  return (
    <>
      <span className="sr-only">{value}</span>
      <span aria-hidden="true" className="count-up" data-suffix={m[2]} style={{ "--to": Number(m[1]), "--d": `${delay}ms` } as CSSProperties} />
    </>
  );
}

export function Hero({ lang }: { lang: Lang }) {
  const { hero } = getContent(lang);
  const t = uiExtra[lang];
  const projects = getProjects(lang);
  const metric = (slug: string) => {
    const value = projects.find((project) => project.slug === slug)?.metrics[0];
    return value ? `${value.value}${value.suffix ?? ""}` : "—";
  };
  const stats = [
    { value: metric("call-center-analiza-rozmow"), label: t.hero.stats.calls },
    { value: metric("formularze-crm-powiadomienia"), label: t.hero.stats.leads },
    { value: metric("generator-grafik-produktowych"), label: t.hero.stats.images },
    { value: String(projects.length), label: t.hero.stats.projects },
  ];

  return (
    <section className="overflow-x-clip bg-ink pt-20 text-text-on-dark lg:pt-24">
      <div className={`${container} grid items-center gap-8 py-8 lg:min-h-[800px] lg:grid-cols-[minmax(0,1.18fr)_minmax(0,0.82fr)] lg:gap-16 lg:py-12`}>
        <figure data-parallax="0.06" style={d(220)} className="intro-clip relative mx-auto h-[340px] w-full max-w-[440px] overflow-hidden lg:order-2 lg:h-[580px] lg:max-w-[500px]">
          <Image
            src={asset(hero.photo)}
            alt={hero.photoAlt}
            width={960}
            height={1200}
            priority
            sizes="(min-width: 1024px) 500px, 100vw"
            style={d(220)}
            className="intro-zoom h-full w-full object-cover object-[50%_25%]"
          />
          <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink to-transparent" />
        </figure>

        <div className="flex min-w-0 flex-col items-start gap-6 lg:order-1">
          <p className="intro-up font-mono text-[12px] font-medium uppercase tracking-[0.08em] text-accent">
            {lang === "pl" ? "AI developer · Automatyzacje i integracje" : "AI developer · Automation and integrations"}
          </p>
          <h1 style={d(80)} className="intro-up max-w-[15ch] font-display text-[40px] font-extrabold leading-[1.02] tracking-[-0.025em] text-balance lg:text-[72px]">
            {hero.title}
          </h1>
          <p style={d(180)} className="intro-up hidden max-w-[54ch] text-[20px] leading-[155%] text-text-muted-on-dark lg:block">
            {hero.lead}
          </p>
          <p style={d(180)} className="intro-up max-w-[48ch] text-[17px] leading-[155%] text-text-muted-on-dark lg:hidden">
            {t.hero.leadShort}
          </p>
          <div style={d(280)} className="intro-up flex w-full flex-col gap-3 pt-1 sm:flex-row">
            <Link
              href={localePath(lang, "/#realizacje")}
              className="group inline-flex min-h-[48px] items-center justify-center gap-3 rounded-full bg-accent px-[22px] py-[14px] text-[16px] font-semibold text-on-accent transition-colors duration-200 hover:bg-[#ff8a3d] sm:w-auto"
            >
              {t.hero.primary}
              <Arrow dir="down" className="transition-transform duration-200 group-hover:translate-y-0.5" />
            </Link>
            <ContactLink
              href={localePath(lang, "/#kontakt")}
              className="group inline-flex min-h-[48px] items-center justify-center gap-3 rounded-full border border-border-on-dark px-[22px] py-[14px] text-[16px] font-semibold text-text-on-dark transition-colors duration-200 hover:border-text-muted-on-dark sm:w-auto"
            >
              {t.hero.secondary}
              <Arrow className="transition-transform duration-200 group-hover:translate-x-1" />
            </ContactLink>
          </div>
          <p style={d(360)} className="intro-up inline-flex items-center gap-2 rounded-full bg-ink-soft px-3 py-2 text-[13px] font-semibold text-text-on-dark">
            <span aria-hidden="true" className="relative size-2">
              <span className="absolute inset-0 animate-ping rounded-full bg-ok opacity-60 [animation-iteration-count:3] motion-reduce:hidden" />
              <span className="absolute inset-0 rounded-full bg-ok" />
            </span>
            <span className="hidden sm:inline">{hero.status}</span>
            <span className="sm:hidden">{t.hero.statusShort}</span>
          </p>
        </div>
      </div>

      <div className={`${container} pb-16 lg:pb-20`}>
        <dl className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              style={d(420 + index * 80)}
              className={`intro-up flex min-w-0 flex-col border-t border-border-on-dark py-6 pr-4 lg:border-t-0 lg:border-l lg:px-6 lg:py-2 ${index === 0 ? "lg:border-l-0 lg:pl-0" : ""}`}
            >
              <dt className="order-2 mt-2 text-[14px] leading-[145%] text-text-muted-on-dark">{stat.label}</dt>
              <dd className="order-1 font-display text-[36px] font-extrabold leading-none tracking-[-0.02em] text-accent lg:text-[44px]">
                <CountUp value={stat.value} delay={600 + index * 120} />
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
