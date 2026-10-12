"use client";

import Link from "next/link";
import { openContact } from "@/components/site/ContactDialog";

/**
 * Link „Napisz do mnie”: otwiera okno kontaktu. Bez JS (albo gdy okna nie ma)
 * działa jak zwykły link do sekcji kontaktu.
 */
export function ContactLink({
  href,
  topic,
  onOpen,
  className,
  children,
}: {
  href: string;
  topic?: number;
  onOpen?: () => void;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      aria-haspopup="dialog"
      onClick={(e) => {
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
        if (openContact(topic)) {
          e.preventDefault();
          onOpen?.();
        }
      }}
      className={className}
    >
      {children}
    </Link>
  );
}
