import type { Project } from "./types";
import { mleczarnia } from "./mleczarnia-automatyzacja-zamowien";
import { projekt02 } from "./projekt-02";
import { projekt03 } from "./projekt-03";
import { projekt04 } from "./projekt-04";
import { projekt05 } from "./projekt-05";

export type { Project } from "./types";

/** Kolejność = kolejność na stronie. Nowy projekt: nowy plik + jedna linia tutaj. */
export const projects: Project[] = [mleczarnia, projekt02, projekt03, projekt04, projekt05];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

/** Następny projekt cyklicznie. */
export function getNextProject(slug: string): Project {
  const i = projects.findIndex((p) => p.slug === slug);
  return projects[(i + 1) % projects.length];
}
