import Image from "next/image";
import Link from "next/link";
import { hero } from "@/content/site";
import { asset, container, h1, sectionLabel } from "@/lib/ui";

/**
 * Hero — wejście w czystym CSS (klasy .intro-*), żeby animacja ruszała od pierwszego
 * malowania, bez czekania na hydrację (LCP). H1 słowo po słowie z maski.
 */
export function Hero() {
  const words = hero.title.split(" ");
  return (
    <section className="bg-ink pt-[72px] text-text-on-dark">
      <div className={`${container} grid items-center gap-12 py-16 lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:py-24`}>
        <div>
          <p className={`${sectionLabel} intro-up text-accent-amber`} style={{ "--d": "0ms" } as React.CSSProperties}>
            {hero.label}
          </p>
          <h1 className={`${h1} mt-5 max-w-[16ch]`}>
            {words.map((w, i) => (
              <span key={i} className="inline-block overflow-hidden pb-[0.08em] align-bottom">
                <span className="intro-mask inline-block" style={{ "--d": `${120 + i * 50}ms` } as React.CSSProperties}>
                  {w}
                  {i < words.length - 1 ? " " : ""}
                </span>
              </span>
            ))}
          </h1>
          <p
            className="intro-up mt-6 max-w-[52ch] text-[17px] leading-[160%] text-text-muted-on-dark"
            style={{ "--d": "450ms" } as React.CSSProperties}
          >
            {hero.lead}
          </p>
          <div className="intro-up mt-10 flex flex-wrap gap-4" style={{ "--d": "560ms" } as React.CSSProperties}>
            <Link
              href="/#projekty"
              className="group inline-flex min-h-[52px] items-center gap-2 rounded-full bg-accent-green px-7 text-[16px] font-semibold transition-colors duration-200 hover:bg-accent-green-dark"
            >
              Zobacz projekty
              <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </Link>
            <Link
              href="/#kontakt"
              className="inline-flex min-h-[52px] items-center rounded-full border border-border-on-dark px-7 text-[16px] font-semibold transition-colors duration-200 hover:bg-ink-soft"
            >
              Napisz do nas
            </Link>
          </div>
        </div>
        <div className="intro-clip overflow-hidden rounded-lg" style={{ "--d": "300ms" } as React.CSSProperties}>
          <Image
            src={asset(hero.photo)}
            alt={hero.photoAlt}
            width={1200}
            height={900}
            priority
            sizes="(min-width: 1024px) 560px, 100vw"
            className="intro-zoom aspect-[4/3] w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
