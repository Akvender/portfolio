import { Reveal } from "@/components/site/Reveal";
import type { CaseVideo as CaseVideoData } from "@/content/projects/types";
import { asset, container, h2 } from "@/lib/ui";

/**
 * Film „jak to działa” na podstronie projektu, pod schematem architektury.
 * Schemat pokazuje, z czego system jest zbudowany, a film, jak przez niego płynie zgłoszenie.
 * Bez autoodtwarzania: film ma muzykę, więc startuje dopiero po kliknięciu.
 */
export function CaseVideo({ data, title }: { data: CaseVideoData; title: string }) {
  return (
    // Sekcja stoi tuż pod schematem architektury (też bg-paper), więc górny odstęp daje już on.
    <section className="bg-paper pb-12 md:pb-16 lg:pb-24">
      <div className={`${container} flex flex-col gap-10`}>
        <Reveal>
          <h2 className={`${h2} mark-heading text-balance`}>{title}</h2>
        </Reveal>
        <Reveal>
          <video
            className="aspect-video w-full rounded-xs border border-border bg-ink"
            controls
            playsInline
            preload="none"
            poster={asset(data.poster)}
            aria-label={data.label}
          >
            <source src={asset(`${data.src}.webm`)} type="video/webm" />
            <source src={asset(`${data.src}.mp4`)} type="video/mp4" />
          </video>
        </Reveal>
      </div>
    </section>
  );
}
