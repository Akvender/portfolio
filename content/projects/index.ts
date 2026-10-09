import type { Lang } from "../i18n";
import type { Project } from "./types";
import { mleczarnia } from "./mleczarnia-automatyzacja-zamowien";
import { projekt02 } from "./projekt-02";
import { projekt03 } from "./projekt-03";
import { projekt04 } from "./projekt-04";
import { projekt05 } from "./projekt-05";
import { projekt06 } from "./projekt-06";

export type { Project } from "./types";

/** Kolejność = kolejność na stronie. Nowy projekt: nowy plik + jedna linia tutaj. */
const projects: Project[] = [mleczarnia, projekt02, projekt03, projekt04, projekt05, projekt06];

/** Projekt w danym języku. `translated` = szczegóły case study są w tym języku. */
export type LocalizedProject = Omit<Project, "en"> & { translated: boolean };

function localize({ en, ...p }: Project, lang: Lang): LocalizedProject {
  if (lang === "pl" || !en) return { ...p, translated: lang === "pl" };
  return { ...p, ...en, meta: { ...p.meta, ...en.meta }, sections: en.sections ?? p.sections, translated: !!en.sections };
}

export const getProjects = (lang: Lang) => projects.map((p) => localize(p, lang));

export const getProject = (lang: Lang, slug: string) => getProjects(lang).find((p) => p.slug === slug);

/** Następny projekt cyklicznie. */
export function getNextProject(lang: Lang, slug: string) {
  const list = getProjects(lang);
  return list[(list.findIndex((p) => p.slug === slug) + 1) % list.length];
}

export const projectSlugs = projects.map((p) => p.slug);
