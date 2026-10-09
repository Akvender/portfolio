"use client";

import Image from "next/image";
import { useRef } from "react";
import { Icon } from "@/components/site/Icon";
import { asset } from "@/lib/ui";

type Proof = {
  src: string;
  width: number;
  height: number;
  alt: string;
  title: string;
  meta: string;
  text?: string;
  badge?: string;
};

/**
 * Certyfikat: duży herb z ikonką powiększenia + opis. Kliknięcie otwiera natywny <dialog>
 * (Esc, fokus i tło obsługuje przeglądarka) z pełnym, czytelnym certyfikatem i szczegółami.
 */
export function CertCard({ proof }: { proof: Proof }) {
  const ref = useRef<HTMLDialogElement>(null);
  const open = () => ref.current?.showModal();
  const close = () => ref.current?.close();
  const titleId = `cert-${proof.src.replace(/\W/g, "")}`;

  return (
    <div className="grid gap-6 border-t border-border pt-8 sm:grid-cols-[auto_minmax(0,1fr)] sm:items-center sm:gap-10">
      <button
        type="button"
        onClick={open}
        aria-label={`${proof.title} — pokaż certyfikat i szczegóły`}
        className="group relative grid size-36 cursor-pointer place-items-center rounded-xs border border-border bg-white transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:border-accent hover:shadow-[0_16px_32px_-20px_rgba(14,23,38,0.5)] md:size-44"
      >
        {proof.badge && (
          <Image src={asset(proof.badge)} alt="" width={192} height={192} className="size-28 transition-transform duration-300 group-hover:scale-105 md:size-36" />
        )}
        <span
          aria-hidden="true"
          className="absolute -right-2 -top-2 grid size-8 place-items-center rounded-full bg-ink text-text-on-dark shadow-md transition-colors duration-200 group-hover:bg-accent group-hover:text-on-accent"
        >
          <Icon name="expand" className="size-4" />
        </span>
      </button>

      <div className="flex flex-col gap-3">
        <h4 className="font-display text-[28px] font-bold leading-[1.1] tracking-[-0.025em]">{proof.title}</h4>
        <p className="text-[14px] font-medium text-text-muted">{proof.meta}</p>
        {proof.text && <p className="max-w-[56ch] text-[16px] leading-[160%] text-text-primary/85">{proof.text}</p>}
        <button
          type="button"
          onClick={open}
          className="group mt-1 inline-flex min-h-[44px] w-fit cursor-pointer items-center gap-2 text-[15px] font-semibold text-accent-strong underline decoration-accent/40 underline-offset-4 transition-colors hover:decoration-accent"
        >
          Zobacz certyfikat
          <Icon name="expand" className="size-4 transition-transform duration-200 group-hover:scale-110" />
        </button>
      </div>

      <dialog
        ref={ref}
        aria-labelledby={titleId}
        onClick={(e) => e.target === e.currentTarget && close()}
        className="cert-dialog m-auto max-h-[calc(100svh-32px)] w-[min(1100px,calc(100vw-32px))] overflow-y-auto rounded-xs bg-paper p-0 text-text-primary"
      >
        <div className="flex items-start justify-between gap-4 border-b border-border p-5 md:px-8">
          <div className="flex items-center gap-4">
            {proof.badge && <Image src={asset(proof.badge)} alt="" width={192} height={192} className="size-12" />}
            <div>
              <h2 id={titleId} className="font-display text-[22px] font-bold leading-tight md:text-[26px]">
                {proof.title}
              </h2>
              <p className="text-[14px] font-medium text-text-muted">{proof.meta}</p>
            </div>
          </div>
          <button
            type="button"
            onClick={close}
            aria-label="Zamknij"
            autoFocus
            className="grid size-11 shrink-0 cursor-pointer place-items-center rounded-xs border border-border transition-colors hover:border-ink hover:bg-paper-soft"
          >
            <Icon name="close" className="size-5" />
          </button>
        </div>
        <div className="flex flex-col gap-6 p-5 md:p-8">
          <Image src={asset(proof.src)} alt={proof.alt} width={proof.width} height={proof.height} sizes="(min-width: 1100px) 1036px, 100vw" className="w-full rounded-[2px] border border-border" />
          {proof.text && <p className="max-w-[70ch] text-[16px] leading-[165%] text-text-primary/85">{proof.text}</p>}
          <a
            href={asset(proof.src)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] w-fit items-center gap-2 text-[15px] font-semibold text-accent-strong underline decoration-accent/40 underline-offset-4 hover:decoration-accent"
          >
            Otwórz w pełnej rozdzielczości
            <Icon name="expand" className="size-4" />
          </a>
        </div>
      </dialog>
    </div>
  );
}
