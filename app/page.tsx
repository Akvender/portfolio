import { Hero } from "@/components/home/Hero";
import { About } from "@/components/home/Sections";
import { SkillMap } from "@/components/home/SkillMap";
import { Contact } from "@/components/site/Contact";
import { projects } from "@/content/projects";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SkillMap projects={projects.map(({ slug, title, description, flow, skills }) => ({ slug, title, description, flow, skills }))} />
      <About />
      <Contact />
    </>
  );
}
