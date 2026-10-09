import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getNextProject, getProject, projects } from "@/content/projects";
import { CaseHero, CaseSections, NextProject } from "@/components/case/Sections";
import { Contact } from "@/components/site/Contact";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.description,
    openGraph: { title: project.title, description: project.description, images: [project.cover] },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  return (
    <>
      <CaseHero project={project} />
      <CaseSections sections={project.sections} />
      <NextProject project={getNextProject(slug)} />
      <Contact />
    </>
  );
}
