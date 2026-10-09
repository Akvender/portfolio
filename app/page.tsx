import { Hero } from "@/components/home/Hero";
import { Highlights, Services, Team, Work } from "@/components/home/Sections";
import { Contact } from "@/components/site/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Highlights />
      <Work />
      <Services />
      <Team />
      <Contact />
    </>
  );
}
