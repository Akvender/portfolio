"use client";

import { Arrow } from "@/components/site/Arrow";
import { openContact, profiles } from "@/components/site/ContactDialog";
import { Icon } from "@/components/site/Icon";
import { type Lang, ui } from "@/content/i18n";
import { site } from "@/content/site";
import { uiExtra } from "@/content/ui-extra";
import { container, h2 } from "@/lib/ui";

const btnBase = "group inline-flex min-h-[48px] cursor-pointer items-center justify-center gap-3 rounded-full px-[22px] py-[14px] text-[16px] font-semibold transition-colors duration-200";
const btnOutline = `${btnBase} border border-border-on-dark text-text-on-dark hover:border-text-muted-on-dark`;
const mail = (subject?: string) => `mailto:${site.email}${subject ? `?subject=${encodeURIComponent(subject)}` : ""}`;

function Profiles() {
  return profiles.map((profile) => (
    <a key={profile.name} href={profile.href} target="_blank" rel="noopener noreferrer" className={btnOutline}>
      {profile.icon && <Icon name={profile.icon} className="size-[18px]" />}
      {profile.name}<Arrow dir="up-right" className="text-accent" />
    </a>
  ));
}

export function Contact({ lang, compact = false }: { lang: Lang; compact?: boolean }) {
  const t = ui[lang].contact;
  const x = uiExtra[lang];
  const write = (
    <a href={mail()} aria-haspopup="dialog" onClick={(event) => openContact() && event.preventDefault()} className={`${btnBase} bg-accent text-on-accent hover:bg-[#ff8a3d]`}>
      {t.write}<Arrow className="transition-transform duration-200 group-hover:translate-x-1" />
    </a>
  );

  if (compact) {
    return (
      <section id="kontakt" className="scroll-mt-24 bg-ink text-text-on-dark">
        <div className={`${container} flex flex-col gap-8 py-16 xl:flex-row xl:items-end xl:justify-between xl:gap-16`}>
          <div>
            <h2 data-reveal="blur" className={`${h2} max-w-[22ch] text-balance`}>{t.title}</h2>
            <p className="mt-4 max-w-[52ch] text-[17px] leading-[160%] text-text-muted-on-dark">{x.contactCompact.lead}</p>
          </div>
          <div className="flex min-w-0 flex-wrap items-center gap-3 xl:justify-end">{write}<Profiles /></div>
        </div>
      </section>
    );
  }

  return (
    <section id="kontakt" className="scroll-mt-24 bg-ink text-text-on-dark">
      <div className={`${container} grid gap-12 py-16 md:py-20 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-20 lg:py-24`}>
        <div className="min-w-0">
          <p className="mb-4 font-mono text-[12px] font-medium uppercase tracking-[0.08em] text-accent">{x.eyebrow.contact}</p>
          <h2 data-reveal="blur" className={`${h2} max-w-[18ch] text-balance`}>{t.title}</h2>
          <p className="mt-5 max-w-[50ch] text-[18px] leading-[160%] text-text-muted-on-dark">{x.contactCompact.lead}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {write}
            <a href={mail()} className={`${btnOutline} max-w-full`}>
              <span className="min-w-0 text-[15px] font-medium [overflow-wrap:anywhere]">{site.email}</span>
              <Arrow className="shrink-0 text-accent transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        <div>
          <p className="text-[14px] font-semibold text-text-muted-on-dark">{t.topicsLabel}</p>
          <ul className="mt-4 flex flex-col border-t border-border-on-dark">
            {t.topics.map((topic, index) => (
              <li key={topic.label} data-reveal="">
                <a
                  href={mail(topic.subject)}
                  aria-haspopup="dialog"
                  onClick={(event) => openContact(index) && event.preventDefault()}
                  className="group flex min-h-[64px] items-center justify-between gap-4 border-b border-border-on-dark py-3 text-[18px] font-semibold transition-colors duration-200 hover:text-text-muted-on-dark"
                >
                  {topic.label}<Arrow className="shrink-0 text-accent transition-transform duration-200 group-hover:translate-x-1" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
