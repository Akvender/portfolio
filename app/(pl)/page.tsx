import { HomeView } from "@/components/site/Pages";
import { JsonLd, profileJsonLd } from "@/components/site/RootShell";

export default function HomePage() {
  return (
    <>
      <JsonLd data={profileJsonLd("pl")} />
      <HomeView lang="pl" />
    </>
  );
}
