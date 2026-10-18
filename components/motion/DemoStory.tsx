"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "motion/react";
import { Arrow } from "@/components/site/Arrow";
import { type Lang, localePath } from "@/content/i18n";
import { uiExtra } from "@/content/ui-extra";
import { MOTION_EASE } from "@/lib/motion-tokens";

/**
 * Sekcja przed interaktywnym demo, ruch sterowany przewijaniem (storyboard „Notely”, Figma v2):
 * napis w tle płynie wolniej (parallax), poświata rośnie, karty wjeżdżają od dołu z obrotem 3D
 * i rozkładają się w wachlarz, słowa hasła przechodzą z rozmycia do ostrości.
 * Przy prefers-reduced-motion: statyczna klatka końcowa, zwykła wysokość sekcji.
 */

/** Krzywa Béziera tylko po osi y (szybki start, długie hamowanie) — wystarcza do mapowania postępu przewijania. */
const ease = (t: number) => {
  const [, y1, , y2] = MOTION_EASE;
  const u = 1 - t;
  return 3 * u * u * t * y1 + 3 * u * t * t * y2 + t * t * t;
};

const CARD_LAYOUT = [
  { pos: "left-[5%] top-[42%] z-30 w-[62%] bg-accent text-ink", rotate: -6, depth: 0 },
  { pos: "left-[24%] top-[25%] z-20 w-[58%] bg-white text-ink", rotate: 2, depth: -40 },
  { pos: "left-[43%] top-[12%] z-10 w-[52%] bg-paper text-ink", rotate: 8, depth: -80 },
];

type StoryCard = { title: string; meta: string; text: string };

function CardBody({ card }: { card: StoryCard }) {
  return (
    <>
      <p className="font-mono text-[10px] font-medium uppercase tracking-[0.08em]">{card.meta}</p>
      <h3 className="mt-3 font-display text-[24px] font-bold">{card.title}</h3>
      <p className="mt-2 text-[12px] font-semibold">{card.text}</p>
      <span aria-hidden="true" className="mt-5 block h-1 w-3/4 rounded-full bg-ink" />
    </>
  );
}

/** Postęp 0..1 w przedziale [a, b] przewijania, z krzywą wejścia. */
const seg = (v: number, a: number, b: number, curve = false) => {
  const t = Math.min(1, Math.max(0, (v - a) / (b - a)));
  return curve ? ease(t) : t;
};

/** Przy prefers-reduced-motion CSS wymusza klatkę końcową (działa też przed hydratacją). */
const reducedFinal = "motion-reduce:!opacity-100 motion-reduce:![filter:none]";

const cardClass = "absolute rounded-xl p-5 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.65),0_4px_10px_rgba(0,0,0,0.25)]";

function Card({ p, index, card }: { p: MotionValue<number>; index: number; card: StoryCard }) {
  const l = CARD_LAYOUT[index];
  const start = 0.18 + index * 0.08;
  const y = useTransform(p, (v) => 140 * (1 - seg(v, start, start + 0.22, true)));
  const rotateX = useTransform(p, (v) => 28 * (1 - seg(v, start, start + 0.22, true)));
  const opacity = useTransform(p, (v) => seg(v, start, start + 0.12));
  // wachlarz: karty najpierw leżą prosto, potem obracają się do pozycji końcowej i rozchodzą w głąb
  const rotate = useTransform(p, (v) => l.rotate * seg(v, 0.5, 0.72, true));
  const z = useTransform(p, (v) => l.depth * seg(v, 0.5, 0.72, true));
  return (
    <motion.article
      data-anim="card"
      data-anim-index={index}
      style={{ y, rotateX, rotate, z, opacity, ["--r" as string]: `${l.rotate}deg` }}
      className={`${cardClass} ${l.pos} ${reducedFinal} motion-reduce:![transform:rotate(var(--r))]`}
    >
      <CardBody card={card} />
    </motion.article>
  );
}

function Word({ p, index, count, word }: { p: MotionValue<number>; index: number; count: number; word: string }) {
  const start = 0.62 + (index / count) * 0.2;
  const filter = useTransform(p, (v) => `blur(${14 * (1 - seg(v, start, start + 0.12))}px)`);
  const opacity = useTransform(p, (v) => 0.25 + 0.75 * seg(v, start, start + 0.12));
  const y = useTransform(p, (v) => 12 * (1 - seg(v, start, start + 0.12, true)));
  return (
    <motion.span data-anim="blur-words" data-anim-index={index} style={{ filter, opacity, y }} className={`inline-block ${reducedFinal} motion-reduce:![transform:none]`}>
      {word}
    </motion.span>
  );
}

export function DemoStory({ lang }: { lang: Lang }) {
  const t = uiExtra[lang].story;
  const ref = useRef<HTMLElement>(null);
  const still = !!useReducedMotion();
  const { scrollYProgress: p } = useScroll({ target: ref, offset: ["start start", "end end"] });

  const bgX = useTransform(p, (v) => `${10 - 32 * seg(v, 0, 1)}%`);
  const glowScale = useTransform(p, (v) => 0.55 + 0.55 * seg(v, 0, 0.6, true));
  const glowOpacity = useTransform(p, (v) => 0.2 + 0.6 * seg(v, 0, 0.4));
  const panelOpacity = useTransform(p, (v) => seg(v, 0.55, 0.75));

  const words = t.title.split(" ");

  return (
    <section ref={ref} aria-labelledby="demo-story-title" className="relative h-[250vh] max-md:h-[200vh] motion-reduce:h-auto">
      <div className="sticky top-0 h-screen overflow-hidden bg-paper-soft motion-reduce:relative motion-reduce:h-auto">
        <div className="grid h-full grid-rows-[minmax(0,1fr)_auto] lg:grid-cols-2 lg:grid-rows-1 motion-reduce:min-h-[720px]">
          <div className="relative min-h-0 overflow-hidden bg-ink">
            <motion.p
              aria-hidden="true"
              data-anim="arc-title"
              data-anim-index="0"
              style={still ? undefined : { x: bgX }}
              className="absolute inset-x-0 top-[12%] whitespace-nowrap text-center font-display text-[13vw] font-extrabold tracking-[-0.05em] text-text-on-dark/[0.04] lg:text-[7vw]"
            >
              {t.backgroundWord}
            </motion.p>
            <motion.div
              aria-hidden="true"
              data-anim="bg-parallax"
              data-anim-index="0"
              style={still ? undefined : { scale: glowScale, opacity: glowOpacity }}
              className="absolute bottom-[-12%] right-[-8%] size-[65%] rounded-full bg-accent/80 blur-[90px]"
            />
            <div data-anim="card-stack" data-anim-index="0" className="absolute inset-0 mx-auto max-w-[620px] [perspective:1200px] [transform-style:preserve-3d]">
              {t.cards.map((card, index) =>
                still ? (
                  <article
                    key={card.title}
                    data-anim="card"
                    data-anim-index={index}
                    style={{ transform: `rotate(${CARD_LAYOUT[index].rotate}deg)` }}
                    className={`${cardClass} ${CARD_LAYOUT[index].pos}`}
                  >
                    <CardBody card={card} />
                  </article>
                ) : (
                  <Card key={card.title} p={p} index={index} card={card} />
                ),
              )}
            </div>
          </div>

          <motion.div style={still ? undefined : { opacity: panelOpacity }} className={`${reducedFinal} flex items-center bg-paper-soft px-5 py-10 md:px-12 lg:px-16`}>
            <div>
              <h2 id="demo-story-title" className="max-w-[15ch] font-display text-[36px] font-extrabold leading-[1.08] tracking-[-0.025em] text-ink lg:text-[48px]">
                {words.map((word, index) => (
                  <span key={`${word}-${index}`}>
                    {still ? (
                      <span data-anim="blur-words" data-anim-index={index} className="inline-block">
                        {word}
                      </span>
                    ) : (
                      <Word p={p} index={index} count={words.length} word={word} />
                    )}
                    {index < words.length - 1 ? " " : ""}
                  </span>
                ))}
              </h2>
              <Link href={localePath(lang, "/#demo")} className="group mt-6 inline-flex min-h-[48px] items-center gap-3 text-[18px] font-semibold text-text-muted">
                {t.subtitle}
                <Arrow dir="down" className="text-accent transition-transform duration-200 group-hover:translate-y-1" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
