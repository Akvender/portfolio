"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Arrow } from "@/components/site/Arrow";
import { ContactLink } from "@/components/site/ContactLink";
import { type Lang, localePath, switchPath, ui } from "@/content/i18n";
import { site } from "@/content/site";
import { uiExtra } from "@/content/ui-extra";
import { container } from "@/lib/ui";

export function Nav({ lang }: { lang: Lang }) {
  const t = ui[lang].nav;
  const x = uiExtra[lang].nav;
  const other: Lang = lang === "pl" ? "en" : "pl";
  const links = [
    { id: "realizacje", label: x.work, href: localePath(lang, "/#realizacje") },
    { id: "umiejetnosci", label: x.skills, href: localePath(lang, "/#umiejetnosci") },
    { id: "o-mnie", label: x.about, href: localePath(lang, "/#o-mnie") },
  ];
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.documentElement.style.overflow = "hidden";
    const outside = Array.from(document.querySelectorAll<HTMLElement>("body > a, main, footer"));
    outside.forEach((element) => element.setAttribute("inert", ""));
    firstLinkRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
      outside.forEach((element) => element.removeAttribute("inert"));
      toggleRef.current?.focus();
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border-on-dark bg-ink">
      <nav aria-label={t.label} className={`${container} flex h-20 items-center justify-between lg:h-24`}>
        <Link
          href={localePath(lang, "/")}
          aria-label={`${site.name}, ${t.home}`}
          className="flex min-h-[48px] items-center font-display text-[18px] font-bold tracking-[-0.015em] text-text-on-dark"
          onClick={() => setOpen(false)}
        >
          {site.name}
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <li key={link.id}>
              <Link href={link.href} className="inline-flex min-h-[48px] items-center text-[15px] font-semibold text-text-on-dark transition-colors duration-200 hover:text-text-muted-on-dark">
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href={switchPath(pathname, other)}
              hrefLang={other}
              lang={other}
              aria-label={`${other.toUpperCase()} — ${t.switchTo}`}
              className="inline-flex min-h-[48px] min-w-[48px] items-center justify-center text-[14px] font-semibold text-text-muted-on-dark transition-colors duration-200 hover:text-text-on-dark"
            >
              {other.toUpperCase()}
            </Link>
          </li>
          <li>
            <ContactLink
              href={localePath(lang, "/#kontakt")}
              className="group inline-flex min-h-[48px] items-center gap-3 rounded-full border border-border-on-dark px-[22px] py-[14px] text-[15px] font-semibold text-text-on-dark transition-colors duration-200 hover:border-text-muted-on-dark"
            >
              {t.contact}<Arrow className="text-accent transition-transform duration-200 group-hover:translate-x-1" />
            </ContactLink>
          </li>
        </ul>

        <button
          ref={toggleRef}
          type="button"
          aria-expanded={open}
          aria-controls="menu-mobilne"
          aria-label={open ? t.menuClose : t.menuOpen}
          onClick={() => setOpen((value) => !value)}
          className="grid size-12 cursor-pointer place-items-center rounded-full border border-border-on-dark text-text-on-dark lg:hidden"
        >
          <span aria-hidden="true" className="flex w-5 flex-col gap-[5px]">
            <span className={`h-px bg-current transition-transform duration-200 ${open ? "translate-y-[6px] rotate-45" : ""}`} />
            <span className={`h-px bg-current transition-opacity duration-200 ${open ? "opacity-0" : ""}`} />
            <span className={`h-px bg-current transition-transform duration-200 ${open ? "-translate-y-[6px] -rotate-45" : ""}`} />
          </span>
        </button>
      </nav>

      {open && (
        <div id="menu-mobilne" role="dialog" aria-modal="true" aria-label={t.menu} className="fixed inset-0 top-20 z-40 bg-ink lg:hidden">
          <ul className={`${container} flex flex-col pt-6`}>
            {links.map((link, index) => (
              <li key={link.id}>
                <Link
                  ref={index === 0 ? firstLinkRef : undefined}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-[64px] items-center border-b border-border-on-dark font-display text-[28px] font-bold tracking-[-0.02em] text-text-on-dark"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href={switchPath(pathname, other)}
                hrefLang={other}
                lang={other}
                onClick={() => setOpen(false)}
                className="flex min-h-[56px] items-center border-b border-border-on-dark text-[18px] font-semibold text-text-muted-on-dark"
              >
                {t.switchTo}
              </Link>
            </li>
            <li className="pt-6">
              <ContactLink
                href={localePath(lang, "/#kontakt")}
                onOpen={() => setOpen(false)}
                className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full bg-accent px-[22px] py-[14px] text-[16px] font-semibold text-on-accent"
              >
                {t.contact}<Arrow />
              </ContactLink>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
