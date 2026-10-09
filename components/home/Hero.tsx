import Image from "next/image";
import Link from "next/link";
import { Arrow } from "@/components/site/Arrow";
import { ToolsMarquee } from "@/components/home/ToolsMarquee";
import { hero, site } from "@/content/site";
import { asset, container } from "@/lib/ui";

/**
 * Hero = wizytówka na granacie: po lewej co robię i dwie akcje, po prawej karta-identyfikator
 * (portret + imię, rola, status, e-mail). Mieści się na pierwszym ekranie 1440×900.
 * Jedyny pomarańczowy przycisk na ekranie to główna akcja (prowadzi do umiejętności).
 * Wejście w czystym CSS (klasy .intro-*), bez czekania na hydrację (LCP).
 */
export function Hero() {
  const d = (ms: number) => ({ "--d": `${ms}ms` }) as React.CSSProperties;
  const hasPhoto = !hero.photo.includes("placeholder");
  const portrait = "aspect-[4/3] w-full md:aspect-[4/5] md:max-h-[42svh]";

  return (
    <section className="flex min-h-[100svh] flex-col overflow-x-clip bg-ink pt-[104px] text-text-on-dark">
      <div className={`${container} grid flex-1 items-center gap-12 py-10 md:py-14 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:gap-20`}>
        <div className="flex flex-col gap-7">
          <h1
            className="intro-up max-w-[18ch] font-display text-[clamp(40px,4.6vw,66px)] font-extrabold leading-[1] tracking-[-0.03em] text-balance"
            style={d(60)}
          >
            {hero.title}
          </h1>
          <p className="intro-up max-w-[52ch] text-[17px] leading-[160%] text-text-on-dark/80 md:text-[18px]" style={d(180)}>
            {hero.lead}
          </p>
          <div className="intro-up flex flex-wrap items-center gap-3 pt-1" style={d(280)}>
            <Link
              href="/#umiejetnosci"
              className="group inline-flex min-h-[52px] items-center gap-3 rounded-xs bg-accent px-6 text-[16px] font-semibold text-on-accent transition-[background-color,transform] duration-200 hover:bg-[#ff8a3d] active:scale-[0.98]"
            >
              Zobacz, co potrafię
              <Arrow dir="down" className="transition-transform duration-200 group-hover:translate-y-0.5" />
            </Link>
            <Link
              href="/#kontakt"
              className="inline-flex min-h-[52px] items-center rounded-xs border border-border-on-dark px-6 text-[16px] font-semibold transition-colors duration-200 hover:border-text-muted-on-dark active:bg-ink-soft"
            >
              Napisz do mnie
            </Link>
          </div>
        </div>

        <figure className="intro-clip mx-auto w-full max-w-[440px] lg:mx-0 lg:justify-self-end" style={d(220)}>
          <div className="overflow-hidden rounded-xs border border-border-on-dark bg-ink-soft shadow-[0_40px_80px_-40px_rgba(0,0,0,0.7)]">
            {hasPhoto ? (
              <div className="relative isolate bg-ink-soft">
                <Image
                  src={asset(hero.photo)}
                  alt={hero.photoAlt}
                  width={960}
                  height={1200}
                  priority
                  sizes="(min-width: 1024px) 440px, 90vw"
                  className={`${portrait} object-cover object-[50%_30%] mix-blend-screen`}
                />
                {/* Screen na granacie: czerń zdjęcia staje się granatem karty, ciepłe tony twarzy zostają. */}
                <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink-soft to-transparent" />
              </div>
            ) : (
              <div
                role="img"
                aria-label={hero.photoAlt}
                className={`${portrait} flex items-center justify-center font-display text-[clamp(88px,11vw,152px)] font-extrabold tracking-[-0.05em] text-text-on-dark/90`}
              >
                RŚ
              </div>
            )}
            <figcaption className="flex flex-col gap-4 p-6">
              <div>
                <p className="font-display text-[24px] font-extrabold leading-tight tracking-[-0.02em]">{site.name}</p>
                <p className="mt-1 text-[15px] text-text-muted-on-dark">AI developer · freelancer</p>
              </div>
              <p className="flex items-center gap-2.5 text-[15px] font-semibold">
                <span aria-hidden="true" className="relative flex size-2.5">
                  <span className="absolute inset-0 animate-ping rounded-full bg-accent opacity-60 [animation-iteration-count:3] motion-reduce:hidden" />
                  <span className="relative size-2.5 rounded-full bg-accent" />
                </span>
                {hero.status}
              </p>
              <a
                href={`mailto:${site.email}`}
                className="-mb-2 inline-flex min-h-[44px] items-center border-t border-border-on-dark pt-2 text-[15px] text-text-muted-on-dark transition-colors hover:text-accent"
              >
                {site.email}
              </a>
            </figcaption>
          </div>
        </figure>
      </div>

      <div className={`${container} intro-up pb-8`} style={d(380)}>
        <div className="flex flex-col gap-4 border-t border-border-on-dark pt-6 md:flex-row md:items-center md:gap-10">
          <p className="shrink-0 text-[14px] font-semibold text-text-muted-on-dark">Na co dzień pracuję z</p>
          <ToolsMarquee />
          <Link href="/#umiejetnosci" className="group hidden min-h-[44px] shrink-0 items-center gap-2 text-[14px] font-semibold text-text-muted-on-dark hover:text-accent lg:inline-flex">
            Przewiń dalej
            <Arrow dir="down" className="animate-[nudge_2.4s_ease-in-out_3] transition-transform duration-200 group-hover:translate-y-0.5 motion-reduce:animate-none" />
          </Link>
        </div>
      </div>
    </section>
  );
}
