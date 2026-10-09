"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { EASE_OUT, STAGGER } from "@/lib/motion";
import { asset } from "@/lib/ui";

/** Okładka CaseHero z delikatnym parallaxem (max 8%), tylko desktop i bez reduced motion. */
export function ParallaxCover({ src, alt }: { src: string; alt: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);
  return (
    <div ref={ref} className="intro-clip overflow-hidden rounded-lg" style={{ "--d": "350ms" } as React.CSSProperties}>
      <motion.div style={reduce ? undefined : { y }} className="lg:scale-[1.08] max-lg:!transform-none">
        <Image src={asset(src)} alt={alt} width={1600} height={1000} priority sizes="(min-width: 1280px) 1248px, 100vw" className="aspect-[16/9] w-full object-cover" />
      </motion.div>
    </div>
  );
}

/** Makieta karty zamówień: wiersze pojawiają się kolejno, „—” podświetla się bursztynem. */
export function OrderTable({ columns, rows }: { columns: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[560px] border-collapse font-mono text-[13px]">
        <thead>
          <tr className="text-left text-text-muted">
            {columns.map((c) => (
              <th key={c} scope="col" className="border-b border-border px-3 py-2 font-medium">{c}</th>
            ))}
          </tr>
        </thead>
        <motion.tbody initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} transition={{ staggerChildren: STAGGER * 1.5 }}>
          {rows.map((row, r) => (
            <motion.tr
              key={r}
              variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE_OUT } } }}
              className="bg-white"
            >
              {row.map((cell, c) =>
                c === 0 ? (
                  <th key={c} scope="row" className="border-b border-border px-3 py-2.5 text-left font-sans font-normal">{cell}</th>
                ) : (
                  <td key={c} className="border-b border-border px-3 py-2.5">
                    {cell === "—" ? (
                      <motion.span
                        title="Sklep świadomie nie zamawia"
                        className="-mx-1.5 rounded-xs px-1.5 py-0.5 font-bold"
                        variants={{ hidden: { backgroundColor: "rgba(201,123,61,0)" }, visible: { backgroundColor: "rgba(201,123,61,0.22)", transition: { delay: 0.9, duration: 0.6 } } }}
                      >
                        —
                      </motion.span>
                    ) : (
                      cell
                    )}
                  </td>
                ),
              )}
            </motion.tr>
          ))}
        </motion.tbody>
      </table>
    </div>
  );
}
