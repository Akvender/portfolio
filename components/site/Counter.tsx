"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "motion/react";
import { EASE_OUT } from "@/lib/motion";

/**
 * Licznik: odlicza od 0 do `to` przy wejściu w widok (~1.2 s, easeOut), tabular-nums.
 * Stan początkowy SSR = wartość docelowa (czytelny bez JS); animacja nadpisuje
 * ją dopiero w momencie wejścia w widok. Przy reduced-motion ustawia wartość od razu.
 */
export function Counter({
  to,
  suffix = "",
  duration = 1.2,
  className,
}: {
  to: number;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduce = useReducedMotion();
  const [value, setValue] = useState(to);

  useEffect(() => {
    if (!inView || reduce) return;
    const controls = animate(0, to, {
      duration,
      ease: [...EASE_OUT],
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, reduce, to, duration]);

  return (
    <span
      ref={ref}
      className={className}
      style={{ fontVariantNumeric: "tabular-nums" }}
    >
      {String(value).padStart(2, "0")}
      {suffix}
    </span>
  );
}
