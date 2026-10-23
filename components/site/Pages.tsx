import { notFound } from "next/navigation";
import { AutomationDemo } from "@/components/home/AutomationDemo";
import { Featured } from "@/components/home/Featured";
import { Hero } from "@/components/home/Hero";
import { About } from "@/components/home/Sections";
import { SkillMap } from "@/components/home/SkillMap";
import { Architecture } from "@/components/case/Architecture";
import { CaseHero, CaseSections, NextProject } from "@/components/case/Sections";
import { Contact } from "@/components/site/Contact";
import { pageMetadata } from "@/components/site/RootShell";
import { type Lang, ui } from "@/content/i18n";
import { getNextProject, getProject, getProjects, projectSlugs } from "@/content/projects";

/** Widoki stron wspólne dla obu języków; pliki w app/(pl) i app/(en) tylko podają język. */

export function HomeView({ lang }: { lang: Lang }) {
  const all = getProjects(lang);
  const projects = all.map(({ slug, title, description, flow, skills, meta }) => ({ slug, title, description, flow, skills, status: meta.status }));
  // Wyróżnione realizacje (pole `featured`) pokazujemy osobno pod hero; pełna lista zostaje w mapie umiejętności.
  const featured = all.filter((p) => p.featured).map(({ slug, title, description, meta }) => ({ slug, title, description, status: meta.status }));
  return (
    <>
      <Hero lang={lang} />
      <Featured lang={lang} projects={featured} total={all.length} />
      <SkillMap lang={lang} projects={projects} />
      <AutomationDemo lang={lang} />
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
      {/* Gdy projekt ma schemat architektury, hero nie rysuje drugiego, podobnego schematu przepływu. */}
      <CaseHero project={project} lang={lang} showFlow={!project.architecture} />
      {project.architecture && <Architecture data={project.architecture} title={ui[lang].case.architecture} infraLabel={ui[lang].case.infra} />}
      <CaseSections sections={project.sections} lang={lang} />
      <NextProject project={getNextProject(lang, slug)} lang={lang} />
      <Contact lang={lang} compact />
    </>
  );
}
