import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/content/projects";
import { asset } from "@/lib/ui";

/**
 * Karta case study (siatka). Hover: okładka scale 1.04 w masce, karta +4 px,
 * strzałka → przesuwa się o 4 px, miękki cień. Same transform/opacity — CSS.
 */
export function CaseCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projekty/${project.slug}/`}
      className="group flex h-full flex-col rounded-lg border border-border bg-white p-5 transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_24px_60px_-24px_rgba(20,22,26,0.3)] md:p-6"
    >
      <div className="overflow-hidden rounded-[12px]">
        <Image
          src={project.cover}
          alt={project.coverAlt}
          width={1600}
          height={1000}
          sizes="(min-width: 1024px) 600px, (min-width: 768px) 50vw, 100vw"
          className="aspect-[8/5] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        />
      </div>
      <div className="flex flex-1 flex-col pt-5">
        <p className="font-mono text-[12.5px] font-medium uppercase tracking-[1.5px] text-accent-amber">
          {project.number} — {project.year}
        </p>
        <h3 className="mt-2 text-[22px] font-semibold leading-[130%] text-text-primary">
          {project.title}
        </h3>
        <p className="mt-2 text-base leading-[155%] text-text-muted">
          {project.description}
        </p>
        <p className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border px-3 py-1 font-mono text-[12px] uppercase tracking-[1px] text-text-muted"
            >
              {tag}
            </span>
          ))}
        </p>
        <p className="mt-auto pt-5 text-[15px] font-semibold text-accent-green">
          Zobacz case study{" "}
          <span
            aria-hidden="true"
            className="inline-block transition-transform duration-200 group-hover:translate-x-1"
          >
            →
          </span>
        </p>
      </div>
    </Link>
  );
}
