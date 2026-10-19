"use client";

import { useEffect } from "react";

/**
 * Warstwa ruchu sterowana przewijaniem dla całej strony (działa w każdej przeglądarce z JS).
 * Każdemu elementowi z [data-reveal] ustawia --p (0 → 1, postęp wejścia w ekran), a elementom
 * z [data-parallax="0.15"] przesunięcie --py. Wygląd ruchu jest w CSS (globals.css, klasa .ml-on).
 * Bez JS albo przy prefers-reduced-motion klasa .ml-on nie jest dodawana i wszystko stoi w stanie końcowym.
 */
export function MotionLayer() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const root = document.documentElement;
    const reveals = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const parallax = Array.from(document.querySelectorAll<HTMLElement>("[data-parallax]"));
    const index = new Map<HTMLElement, number>();
    // kolejność w obrębie rodzica = opóźnienie (24 px przewinięcia na element)
    for (const el of reveals) {
      const sibs = Array.from(el.parentElement?.children ?? []).filter((c) => c.hasAttribute("data-reveal"));
      index.set(el, Math.max(0, sibs.indexOf(el)));
    }
    let frame = 0;
    const update = () => {
      frame = 0;
      const vh = window.innerHeight;
      const range = vh < 700 ? 160 : 220;
      for (const el of reveals) {
        const top = el.getBoundingClientRect().top;
        const p = Math.min(1, Math.max(0, (vh - top - (index.get(el) ?? 0) * 24) / range));
        el.style.setProperty("--p", p.toFixed(3));
      }
      for (const el of parallax) {
        const r = el.getBoundingClientRect();
        const speed = Number(el.dataset.parallax) || 0.1;
        el.style.setProperty("--py", `${((r.top + r.height / 2 - vh / 2) * -speed).toFixed(1)}px`);
      }
      const max = root.scrollHeight - vh;
      root.style.setProperty("--scroll", max > 0 ? (window.scrollY / max).toFixed(4) : "0");
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    root.classList.add("ml-on");
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
      root.classList.remove("ml-on");
    };
  }, []);
  return null;
}
