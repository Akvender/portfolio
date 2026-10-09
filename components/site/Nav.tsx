"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion, useScroll } from "motion/react";
import { Arrow } from "@/components/site/Arrow";
import { container } from "@/lib/ui";
import { site } from "@/content/site";
import { type Lang, localePath, switchPath, ui } from "@/content/i18n";

/**
 * Sticky nav na jasnym tle; po przewinięciu pojawia się cienka linia.
 * Aktywny link podkreślony przesuwanym wskaźnikiem (layoutId), scroll-spy na Home.
 * Mobile: pełnoekranowe menu (Esc zamyka, focus management).
 */
export function Nav({ lang }: { lang: Lang }) {
  const t = ui[lang].nav;
  const other: Lang = lang === "pl" ? "en" : "pl";
  const LINKS = [
    { id: "umiejetnosci", label: t.skills, href: localePath(lang, "/#umiejetnosci") },
    { id: "o-mnie", label: t.about, href: localePath(lang, "/#o-mnie") },
  ];
  const pathname = usePathname();
  const isHome = pathname === "/" || pathname === "/en" || pathname === "/en/";
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy tylko na stronie głównej.
  useEffect(() => {
    if (!isHome) {
      setActive(null);
      return;
    }
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(
      (el): el is HTMLElement => el !== null,
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps -- LINKS zależy tylko od języka
  }, [pathname, isHome]);

  // Menu mobilne: Esc zamyka, blokada scrolla, focus management.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.documentElement.style.overflow = "hidden";
    // Treść pod menu jest nieaktywna, więc Tab nie ucieka za nakładkę.
    const main = document.getElementById("main");
    main?.setAttribute("inert", "");
    firstLinkRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
      main?.removeAttribute("inert");
      toggleRef.current?.focus();
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-300 ${
        scrolled || open
          ? "border-b border-border-on-dark bg-ink"
          : "border-b border-transparent bg-ink"
      }`}
    >
      {/* Tymczasowo: informacja, że strona jest w budowie. Usuń ten pasek i zmień 104px → 72px w sekcjach. */}
      <p className="flex h-8 items-center justify-center bg-ink-strong px-4 text-center text-[13px] font-medium text-text-muted-on-dark">
        {ui[lang].banner}
      </p>
      <nav
        aria-label={t.label}
        className={`${container} flex h-[72px] items-center justify-between`}
      >
        {/* Logo: imię i nazwisko złożone w dwie linie przy pionowej kresce. */}
        <Link
          href={localePath(lang, "/")}
          aria-label={`${site.name} — ${t.home}`}
          className="flex items-stretch gap-2.5 text-text-on-dark"
          onClick={() => setOpen(false)}
        >
          <span aria-hidden="true" className="w-[3px] bg-accent" />
          <span aria-hidden="true" className="flex flex-col font-display text-[15px] font-bold uppercase leading-[1.05] tracking-[0.02em]">
            <span>Robert</span>
            <span>Świeboda</span>
          </span>
        </Link>

        {/* Desktop */}
        <ul className="hidden items-center gap-6 md:flex">
          {LINKS.map((link) => (
            <li key={link.id} className="relative">
              {/* Kreska nad linkiem; aktywna sekcja ma ją w kolorze akcentu i grubszą. */}
              <span aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-border-on-dark" />
              {active === link.id && (
                <motion.span
                  layoutId="nav-indicator"
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-[2px] bg-accent"
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                />
              )}
              <Link
                href={link.href}
                className={`group flex min-h-[44px] min-w-[150px] items-center justify-between gap-4 pt-1 text-[15px] font-semibold transition-colors duration-200 ${
                  active === link.id ? "text-text-on-dark" : "text-text-muted-on-dark hover:text-text-on-dark"
                }`}
              >
                {link.label}
                <Arrow dir="down" className="w-3 transition-transform duration-200 group-hover:translate-y-0.5" />
              </Link>
            </li>
          ))}
          <li>
            <Link
              href={switchPath(pathname, other)}
              hrefLang={other}
              lang={other}
              aria-label={t.switchTo}
              className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-xs text-[14px] font-bold tracking-[0.04em] text-text-muted-on-dark transition-colors duration-200 hover:text-accent"
            >
              {other.toUpperCase()}
            </Link>
          </li>
          <li>
            <Link
              href={localePath(lang, "/#kontakt")}
              className="inline-flex min-h-[44px] items-center rounded-xs border border-border-on-dark px-5 text-[15px] font-semibold text-text-on-dark transition-colors duration-200 hover:border-accent hover:text-accent"
            >
              {t.contact}
            </Link>
          </li>
        </ul>

        {/* Mobile: przycisk kontaktu zawsze widoczny + przełącznik menu */}
        <div className="flex items-center gap-3 md:hidden">
        <Link
          href={localePath(lang, "/#kontakt")}
          onClick={() => setOpen(false)}
          className="inline-flex min-h-[44px] items-center rounded-xs border border-border-on-dark px-3.5 text-[14px] font-semibold text-text-on-dark"
        >
          {t.contactShort}
        </Link>
        <button
          ref={toggleRef}
          type="button"
          aria-expanded={open}
          aria-controls="menu-mobilne"
          aria-label={open ? t.menuClose : t.menuOpen}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center text-text-on-dark md:hidden"
        >
          <span aria-hidden="true" className="text-[15px] font-semibold">
            {open ? t.close : t.menu}
          </span>
        </button>
        </div>
      </nav>

      {/* Postęp przewijania: cienka linia w kolorze akcentu prowadzi wzrok przez stronę. */}
      {!reduce && (
        <motion.div aria-hidden="true" style={{ scaleX: scrollYProgress }} className="absolute inset-x-0 bottom-[-1px] h-[2px] origin-left bg-accent" />
      )}

      {/* Menu mobilne — pełnoekranowe */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="menu-mobilne"
            role="dialog"
            aria-modal="true"
            aria-label={t.menu}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-[104px] z-40 bg-ink md:hidden"
          >
            <ul className={`${container} flex flex-col gap-2 pt-8`}>
              {LINKS.map((link, i) => (
                <li key={link.id}>
                  <Link
                    ref={i === 0 ? firstLinkRef : undefined}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex min-h-[56px] items-center border-b border-border-on-dark font-display text-[28px] font-bold tracking-[-0.03em] text-text-on-dark"
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
                <Link
                  href={localePath(lang, "/#kontakt")}
                  onClick={() => setOpen(false)}
                  className="inline-flex min-h-[52px] w-full items-center justify-center rounded-xs bg-accent px-5 text-[16px] font-semibold text-on-accent transition-colors duration-200 hover:bg-[#ff8a3d]"
                >
                  {t.contact}
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
