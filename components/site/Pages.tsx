import { notFound } from "next/navigation";
import { Architecture } from "@/components/case/Architecture";
import { CaseHero, CaseSections, NextProject } from "@/components/case/Sections";
import { AutomationDemo } from "@/components/home/AutomationDemo";
import { Featured } from "@/components/home/Featured";
import { Hero } from "@/components/home/Hero";
import { About } from "@/components/home/Sections";
import { SkillMap } from "@/components/home/SkillMap";
import { DemoStory } from "@/components/motion/DemoStory";
import { Contact } from "@/components/site/Contact";
import { pageMetadata } from "@/components/site/RootShell";
import { type Lang, ui } from "@/content/i18n";
import { getNextProject, getProject, getProjects, projectSlugs } from "@/content/projects";

export function HomeView({ lang }: { lang: Lang }) {
  const all = getProjects(lang);
  const projects = all.map(({ slug, title, description, flow, skills, meta }) => ({ slug, title, description, flow, skills, status: meta.status }));
  const featured = all.filter((project) => project.featured);
  const others = all.filter((project) => !project.featured);
  return (
    <>
      <Hero lang={lang} />
      <Featured lang={lang} projects={featured} others={others} total={all.length} />
      <SkillMap lang={lang} projects={projects} />
      <DemoStory lang={lang} />
      <AutomationDemo lang={lang} />
      <About lang={lang} />
      <Contact lang={lang} />
    </>
  );
}

export const caseStaticParams = () => projectSlugs.map((slug) => ({ slug }));

export function caseMetadata(lang: Lang, slug: string) {
  const project = getProject(lang, slug);
  if (!project) return {};
  const meta = pageMetadata(lang, `/projekty/${slug}/`, project.title, project.description);
  return { ...meta, openGraph: { ...meta.openGraph, title: project.title, description: project.description } };
}

export function CaseView({ lang, slug }: { lang: Lang; slug: string }) {
  const project = getProject(lang, slug);
  if (!project) notFound();
  return (
    <>
      <CaseHero project={project} lang={lang} showFlow={!project.architecture} />
      {project.architecture && <Architecture data={project.architecture} title={ui[lang].case.architecture} infraLabel={ui[lang].case.infra} />}
      <CaseSections sections={project.sections} lang={lang} />
      <NextProject project={getNextProject(lang, slug)} lang={lang} />
      <Contact lang={lang} compact />
    </>
  );
}
