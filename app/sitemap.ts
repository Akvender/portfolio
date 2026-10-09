import type { MetadataRoute } from "next";
import { projectSlugs } from "@/content/projects";
import { localePath, langs } from "@/content/i18n";
import { site } from "@/content/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = `${site.url}${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}`;
  const paths = ["/", ...projectSlugs.map((s) => `/projekty/${s}/`)];
  // Każda strona w obu językach, z linkami do drugiej wersji (hreflang).
  return langs.flatMap((lang) =>
    paths.map((p) => ({
      url: `${base}${localePath(lang, p)}`,
      priority: p === "/" ? 1 : 0.8,
      alternates: { languages: { pl: `${base}${localePath("pl", p)}`, en: `${base}${localePath("en", p)}` } },
    })),
  );
}
