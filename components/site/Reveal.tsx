"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";
import { reveal, staggerParent, inViewOptions } from "@/lib/motion";

/**
 * Reveal przy przewijaniu: opacity 0 → 1 + translateY 24 → 0, whileInView, raz.
 * Stan początkowy ustawiany przez motion (nie przez CSS) — bez JS treść
 * pozostaje widoczna (patrz <noscript> w layout.tsx).
 */
export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={inViewOptions}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

/** Rodzic ze staggerem dzieci (60–80 ms). Dzieci powinny być <RevealItem>. */
type Tag = "div" | "ol" | "ul" | "li";

export function RevealGroup({
  children,
  className,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: Tag;
}) {
  const M = motion[as];
  return (
    <M
      className={className}
      variants={staggerParent}
      initial="hidden"
      whileInView="visible"
      viewport={inViewOptions}
    >
      {children}
    </M>
  );
}

export function RevealItem({
  children,
  className,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: Tag;
}) {
  const M = motion[as];
  return (
    <M className={className} variants={reveal}>
      {children}
    </M>
  );
}
