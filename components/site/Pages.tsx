import { notFound } from "next/navigation";
import { Hero } from "@/components/home/Hero";
import { About } from "@/components/home/Sections";
import { SkillMap } from "@/components/home/SkillMap";
import { CaseHero, CaseSections, NextProject } from "@/components/case/Sections";
import { Contact } from "@/components/site/Contact";
import { pageMetadata } from "@/components/site/RootShell";
import type { Lang } from "@/content/i18n";
import { getNextProject, getProject, getProjects, projectSlugs } from "@/content/projects";

/** Widoki stron wspólne dla obu języków; pliki w app/(pl) i app/(en) tylko podają język. */

export function HomeView({ lang }: { lang: Lang }) {
  const projects = getProjects(lang).map(({ slug, title, description, flow, skills }) => ({ slug, title, description, flow, skills }));
  return (
    <>
      <Hero lang={lang} />
      <SkillMap lang={lang} projects={projects} />
      <About lang={lang} />
      <Contact lang={lang} />
    </>
  );
}

export const caseStaticParams = () => projectSlugs.map((slug) => ({ slug }));

export function caseMetadata(lang: Lang, slug: string) {
  const p = getProject(lang, slug);
  if (!p) return {};
  const meta = pageMetadata(lang, `/projekty/${slug}/`, p.title, p.description);
  return { ...meta, openGraph: { ...meta.openGraph, title: p.title, description: p.description } };
}

export function CaseView({ lang, slug }: { lang: Lang; slug: string }) {
  const project = getProject(lang, slug);
  if (!project) notFound();
  return (
    <>
      <CaseHero project={project} lang={lang} />
      <CaseSections sections={project.sections} lang={lang} />
      <NextProject project={getNextProject(lang, slug)} lang={lang} />
      <Contact lang={lang} />
    </>
  );
}
