"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { container } from "@/lib/ui";
import { site } from "@/content/site";

const LINKS = [
  { id: "projekty", label: "Projekty", href: "/#projekty" },
  { id: "uslugi", label: "Usługi", href: "/#uslugi" },
  { id: "proces", label: "Proces", href: "/#proces" },
  { id: "zespol", label: "Zespół", href: "/#zespol" },
] as const;

/**
 * Sticky nav: po przewinięciu tło z blur + cienka linia.
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
    firstLinkRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
      toggleRef.current?.focus();
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300 ${
        scrolled || open
          ? "border-b border-border-on-dark bg-ink/80 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <nav
        aria-label="Nawigacja główna"
        className={`${container} flex h-[72px] items-center justify-between`}
      >
        <Link
          href="/"
          className="font-mono text-[14px] font-medium uppercase tracking-[1.5px] text-text-on-dark"
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
                    ? "text-text-on-dark"
                    : "text-text-muted-on-dark hover:text-text-on-dark"
                }`}
              >
                {link.label}
              </Link>
              {active === link.id && (
                <motion.span
                  layoutId="nav-indicator"
                  className="absolute inset-x-0 bottom-[6px] h-[2px] bg-accent-amber"
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                />
              )}
            </li>
          ))}
          <li>
            <Link
              href="/#kontakt"
              className="inline-flex min-h-[44px] items-center rounded-full bg-accent-green px-5 text-[15px] font-semibold text-text-on-dark transition-colors duration-200 hover:bg-accent-green-dark"
            >
              Kontakt
            </Link>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          ref={toggleRef}
          type="button"
          aria-expanded={open}
          aria-controls="menu-mobilne"
          aria-label={open ? "Zamknij menu" : "Otwórz menu"}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center text-text-on-dark md:hidden"
        >
          <span aria-hidden="true" className="font-mono text-[13px] uppercase tracking-[1.5px]">
            {open ? "Zamknij" : "Menu"}
          </span>
        </button>
      </nav>

      {/* Menu mobilne — pełnoekranowe */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="menu-mobilne"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-[72px] z-40 bg-ink md:hidden"
          >
            <ul className={`${container} flex flex-col gap-2 pt-8`}>
              {LINKS.map((link, i) => (
                <li key={link.id}>
                  <Link
                    ref={i === 0 ? firstLinkRef : undefined}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex min-h-[56px] items-center border-b border-border-on-dark text-[28px] font-bold text-text-on-dark"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-6">
                <Link
                  href="/#kontakt"
                  onClick={() => setOpen(false)}
                  className="inline-flex min-h-[52px] w-full items-center justify-center rounded-full bg-accent-green px-5 text-[16px] font-semibold text-text-on-dark transition-colors duration-200 hover:bg-accent-green-dark"
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
