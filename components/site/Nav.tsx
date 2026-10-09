"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { container } from "@/lib/ui";
import { site } from "@/content/site";

const LINKS = [
  { id: "umiejetnosci", label: "Umiejętności i projekty", href: "/#umiejetnosci" },
  { id: "o-mnie", label: "O mnie", href: "/#o-mnie" },
] as const;

/**
 * Sticky nav na jasnym tle; po przewinięciu pojawia się cienka linia.
 * Aktywny link podkreślony przesuwanym wskaźnikiem (layoutId), scroll-spy na Home.
 * Mobile: pełnoekranowe menu (Esc zamyka, focus management).
 */
export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy tylko na stronie głównej.
  useEffect(() => {
    if (pathname !== "/") {
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
  }, [pathname]);

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
          ? "border-b border-border bg-paper"
          : "border-b border-transparent bg-paper"
      }`}
    >
      {/* Tymczasowo: informacja, że strona jest w budowie. Usuń ten pasek i zmień 104px → 72px w sekcjach. */}
      <p className="flex h-8 items-center justify-center bg-ink px-4 text-center text-[13px] font-medium text-text-on-dark">
        Strona w budowie — część treści to jeszcze wypełniacze.
      </p>
      <nav
        aria-label="Nawigacja główna"
        className={`${container} flex h-[72px] items-center justify-between`}
      >
        <Link
          href="/"
          className="font-display text-[19px] font-extrabold tracking-[-0.03em] text-ink"
          onClick={() => setOpen(false)}
        >
          {site.name}
        </Link>

        {/* Desktop */}
        <ul className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <li key={link.id} className="relative">
              <Link
                href={link.href}
                className={`inline-flex min-h-[44px] items-center text-[15px] transition-colors duration-200 ${
                  active === link.id
                    ? "text-ink"
                    : "text-text-muted hover:text-ink"
                }`}
              >
                {link.label}
              </Link>
              {active === link.id && (
                <motion.span
                  layoutId="nav-indicator"
                  className="absolute inset-x-0 bottom-[6px] h-[2px] bg-ink"
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                />
              )}
            </li>
          ))}
          <li>
            <Link
              href="/#kontakt"
              className="inline-flex min-h-[44px] items-center rounded-xs bg-ink px-5 text-[15px] font-semibold text-text-on-dark transition-colors duration-200 hover:bg-ink-soft"
            >
              Napisz do mnie
            </Link>
          </li>
        </ul>

        {/* Mobile: przycisk kontaktu zawsze widoczny + przełącznik menu */}
        <div className="flex items-center gap-1 md:hidden">
        <Link
          href="/#kontakt"
          onClick={() => setOpen(false)}
          className="inline-flex min-h-[40px] items-center rounded-xs bg-ink px-3.5 text-[14px] font-semibold text-text-on-dark"
        >
          Napisz
        </Link>
        <button
          ref={toggleRef}
          type="button"
          aria-expanded={open}
          aria-controls="menu-mobilne"
          aria-label={open ? "Zamknij menu" : "Otwórz menu"}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center text-ink md:hidden"
        >
          <span aria-hidden="true" className="text-[15px] font-semibold">
            {open ? "Zamknij" : "Menu"}
          </span>
        </button>
        </div>
      </nav>

      {/* Menu mobilne — pełnoekranowe */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="menu-mobilne"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-[104px] z-40 bg-paper md:hidden"
          >
            <ul className={`${container} flex flex-col gap-2 pt-8`}>
              {LINKS.map((link, i) => (
                <li key={link.id}>
                  <Link
                    ref={i === 0 ? firstLinkRef : undefined}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex min-h-[56px] items-center border-b border-border font-display text-[28px] font-bold tracking-[-0.03em] text-ink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-6">
                <Link
                  href="/#kontakt"
                  onClick={() => setOpen(false)}
                  className="inline-flex min-h-[52px] w-full items-center justify-center rounded-xs bg-ink px-5 text-[16px] font-semibold text-text-on-dark transition-colors duration-200 hover:bg-ink-soft"
                >
                  Napisz do mnie
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
