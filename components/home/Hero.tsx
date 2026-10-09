import Image from "next/image";
import Link from "next/link";
import { Arrow } from "@/components/site/Arrow";
import { hero, tools } from "@/content/site";
import { asset, container } from "@/lib/ui";

/**
 * Hero — wejście w czystym CSS (klasy .intro-*), żeby animacja ruszała od pierwszego
 * malowania, bez czekania na hydrację (LCP). Nagłówek na całą szerokość, pod nim
 * lead z akcjami i zdjęcie na jasnoszarym polu.
 */
export function Hero() {
  const d = (ms: number) => ({ "--d": `${ms}ms` }) as React.CSSProperties;
  return (
    <section className="overflow-x-clip bg-paper pt-[104px]">
      <div className={`${container} pb-16 pt-14 md:pt-20 lg:pb-24`}>
        <h1
          className="intro-up max-w-[17ch] font-display text-[clamp(38px,7.2vw,96px)] font-extrabold leading-[0.98] tracking-[-0.025em] text-balance"
          style={d(60)}
        >
          {hero.title}
        </h1>

        <div className="mt-12 grid gap-10 lg:mt-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-center lg:gap-16">
          <div className="intro-up flex flex-col gap-8" style={d(260)}>
            <p className="max-w-[56ch] text-[17px] leading-[160%] text-text-primary/80 md:text-[18px]">{hero.lead}</p>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/#kontakt"
                className="group inline-flex min-h-[52px] items-center gap-3 rounded-xs bg-ink px-6 text-[16px] font-semibold text-text-on-dark transition-colors duration-200 hover:bg-ink-soft"
              >
                Napisz do mnie
                <Arrow className="transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/#umiejetnosci"
                className="inline-flex min-h-[52px] items-center rounded-xs border border-ink/25 px-6 text-[16px] font-semibold transition-colors duration-200 hover:border-ink"
              >
                Zobacz, co potrafię
              </Link>
            </div>
            <p className="flex items-center gap-3 text-[15px] font-medium">
              <span aria-hidden="true" className="relative flex size-2.5">
                <span className="absolute inset-0 animate-ping rounded-full bg-mark opacity-40 motion-reduce:hidden" />
                <span className="relative size-2.5 rounded-full bg-mark" />
              </span>
              {hero.status}
            </p>
          </div>

          <div className="intro-clip relative pb-4 pr-4 md:pb-6 md:pr-6" style={d(380)}>
            <div className="absolute bottom-0 left-4 right-0 top-4 rounded-xs bg-mark md:left-6 md:top-6" aria-hidden="true" />
            <Image
              src={asset(hero.photo)}
              alt={hero.photoAlt}
              width={1200}
              height={900}
              priority
              sizes="(min-width: 1024px) 600px, 100vw"
              className="relative aspect-[4/3] w-full rounded-xs object-cover"
            />
          </div>
        </div>

        <div className="intro-up mt-16 flex flex-col gap-4 border-t border-border pt-6 md:flex-row md:items-center md:gap-10 lg:mt-20" style={d(480)}>
          <p className="shrink-0 text-[14px] font-semibold text-text-muted">Na co dzień pracuję z</p>
          <ul className="flex flex-wrap items-center gap-x-8 gap-y-3">
            {tools.map((t) => (
              <li key={t} className="font-display text-[20px] font-bold tracking-[-0.01em] text-ink/70">
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
