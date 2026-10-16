import Link from "next/link";
import { StatusBadge } from "@/components/case/Status";
import { Arrow } from "@/components/site/Arrow";
import { RevealGroup, RevealItem, Reveal } from "@/components/site/Reveal";
import { type Lang, localePath } from "@/content/i18n";
import { uiExtra } from "@/content/ui-extra";
import { container, h2 } from "@/lib/ui";

export type FeaturedProject = { slug: string; title: string; description: string; status: string };

/**
 * Wybrane realizacje: krótki pas trzech projektów (pole `featured`) ze statusem, tuż pod hero.
 * Pełna lista sześciu zostaje w mapie umiejętności poniżej.
 */
export function Featured({ projects, total, lang }: { projects: FeaturedProject[]; total: number; lang: Lang }) {
  const t = uiExtra[lang];
  if (projects.length === 0) return null;
  return (
    <section id="realizacje" aria-labelledby="realizacje-tytul" className="scroll-mt-[72px] bg-paper">
      <div className={`${container} flex flex-col gap-10 py-12 md:py-16 lg:py-20`}>
        <Reveal className="grid gap-4 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:items-end lg:gap-16">
          <h2 id="realizacje-tytul" className={`${h2} mark-heading text-balance`}>{t.featured.title}</h2>
          <div className="flex flex-col items-start gap-3">
            <p className="max-w-[52ch] text-[16px] leading-[155%] text-text-muted">{t.featured.lead}</p>
            <Link
              href={localePath(lang, "/#umiejetnosci")}
              className="group inline-flex min-h-[44px] items-center gap-2 text-[15px] font-semibold underline decoration-ink/30 underline-offset-4 transition-colors hover:decoration-ink"
            >
              {t.featured.all(total)}
              <Arrow dir="down" className="transition-transform duration-200 group-hover:translate-y-0.5" />
            </Link>
          </div>
        </Reveal>

        <RevealGroup as="ul" className="grid gap-4 md:grid-cols-3">
          {projects.map((p) => (
            <RevealItem as="li" key={p.slug} className="group relative flex min-w-0 flex-col gap-4 rounded-xs border border-border bg-white p-6 transition-colors duration-300 hover:border-ink focus-within:border-ink">
              <StatusBadge status={p.status} label={t.status} />
              <h3 className="font-display text-[22px] font-bold leading-[1.15] tracking-[-0.012em] text-balance [overflow-wrap:anywhere]">
                {/* Link na tytule, klikalna cała karta przez ::after. */}
                <Link href={localePath(lang, `/projekty/${p.slug}/`)} className="after:absolute after:inset-0 after:content-['']">
                  {p.title}
                </Link>
              </h3>
              <p className="text-[15px] leading-[150%] text-text-muted">{p.description}</p>
              <span aria-hidden="true" className="mt-auto inline-flex items-center gap-2 pt-2 text-[15px] font-semibold">
                {t.featured.open}
                <Arrow className="transition-transform duration-200 group-hover:translate-x-1" />
              </span>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
