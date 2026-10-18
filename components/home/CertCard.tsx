"use client";

import Image from "next/image";
import { useRef } from "react";
import { Arrow } from "@/components/site/Arrow";
import { Icon } from "@/components/site/Icon";
import type { UI } from "@/content/i18n";
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

export function CertCard({ proof, t }: { proof: Proof; t: UI["cert"] }) {
  const ref = useRef<HTMLDialogElement>(null);
  const open = () => ref.current?.showModal();
  const close = () => ref.current?.close();
  const titleId = `cert-${proof.src.replace(/\W/g, "")}`;

  return (
    <article className="flex h-full flex-col rounded-lg border border-border bg-white p-6">
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-display text-[21px] font-bold leading-[1.15] tracking-[-0.015em]">{proof.title}</h3>
        {proof.badge && <Image src={asset(proof.badge)} alt="" width={192} height={192} className="size-12 shrink-0" />}
      </div>
      <p className="mt-3 font-mono text-[11px] leading-[145%] text-text-muted">{proof.meta}</p>
      {proof.text && <p className="mt-4 text-[15px] leading-[160%] text-text-muted">{proof.text}</p>}
      <button
        type="button"
        onClick={open}
        aria-label={`${proof.title} — ${t.open}`}
        className="group mt-auto inline-flex min-h-[48px] w-fit cursor-pointer items-center gap-2 pt-3 text-[15px] font-semibold text-text-primary"
      >
        {t.see}<Arrow className="text-accent transition-transform duration-200 group-hover:translate-x-1" />
      </button>

      <dialog
        ref={ref}
        aria-labelledby={titleId}
        onClick={(event) => event.target === event.currentTarget && close()}
        className="cert-dialog m-auto max-h-[calc(100svh-32px)] w-[min(1100px,calc(100vw-32px))] overflow-y-auto rounded-lg bg-paper p-0 text-text-primary"
      >
        <div className="flex items-start justify-between gap-4 border-b border-border p-5 md:px-8">
          <div className="flex items-center gap-4">
            {proof.badge && <Image src={asset(proof.badge)} alt="" width={192} height={192} className="size-12" />}
            <div>
              <h2 id={titleId} className="font-display text-[22px] font-bold leading-tight md:text-[26px]">{proof.title}</h2>
              <p className="text-[14px] font-medium text-text-muted">{proof.meta}</p>
            </div>
          </div>
          <button
            type="button"
            onClick={close}
            aria-label={t.close}
            autoFocus
            className="grid size-12 shrink-0 cursor-pointer place-items-center rounded-full border border-border transition-colors hover:border-ink hover:bg-paper-soft"
          >
            <Icon name="close" className="size-5" />
          </button>
        </div>
        <div className="flex flex-col gap-6 p-5 md:p-8">
          <Image src={asset(proof.src)} alt={proof.alt} width={proof.width} height={proof.height} sizes="(min-width: 1100px) 1036px, 100vw" className="w-full rounded-[2px] border border-border" />
          {proof.text && <p className="max-w-[70ch] text-[16px] leading-[165%] text-text-primary">{proof.text}</p>}
          <a href={asset(proof.src)} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[48px] w-fit items-center gap-2 text-[15px] font-semibold text-text-primary underline underline-offset-4">
            {t.full}<Icon name="expand" className="size-4 text-accent" />
          </a>
        </div>
      </dialog>
    </article>
  );
}
