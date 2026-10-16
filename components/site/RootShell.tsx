import type { Metadata } from "next";
import { JetBrains_Mono, Lato, Rubik } from "next/font/google";
import { Analytics } from "@/components/site/Analytics";
import { ContactDialog } from "@/components/site/ContactDialog";
import { Nav } from "@/components/site/Nav";
import { Providers } from "@/components/site/Providers";
import { type Lang, localePath, ui } from "@/content/i18n";
import { site } from "@/content/site";
import { container } from "@/lib/ui";

// Nagłówki: Rubik, tekst: Lato (wybór Roberta z porównania fontów).
const rubik = Rubik({ subsets: ["latin", "latin-ext"], variable: "--font-rubik", display: "swap" });
const lato = Lato({ subsets: ["latin", "latin-ext"], weight: ["400", "700"], variable: "--font-lato", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin", "latin-ext"], weight: ["400", "500"], variable: "--font-jetbrains-mono", display: "swap", preload: false });

export const fontClasses = `${rubik.variable} ${lato.variable} ${mono.variable}`;

/** Pełny adres strony z basePath (GitHub Pages: /portfolio). */
export const absoluteUrl = (path: string) => `${site.url}${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;

/** Metadane strony w danym języku + linki do wersji w drugim języku (hreflang). */
export function pageMetadata(lang: Lang, path: string, title?: string, description?: string): Metadata {
  const t = ui[lang];
  return {
    metadataBase: new URL(site.url),
    title: title ? `${title} — ${site.name}` : `${site.name} — ${t.meta.title}`,
    description: description ?? t.meta.description,
    alternates: {
      canonical: absoluteUrl(localePath(lang, path)),
      languages: { pl: absoluteUrl(localePath("pl", path)), en: absoluteUrl(localePath("en", path)), "x-default": absoluteUrl(path) },
    },
    openGraph: {
      type: "website",
      locale: t.ogLocale,
      alternateLocale: ui[lang === "pl" ? "en" : "pl"].ogLocale,
      siteName: site.name,
      url: absoluteUrl(localePath(lang, path)),
      title: title ?? `${site.name} — ${t.meta.title}`,
      description: description ?? t.meta.description,
      images: [ogImage(lang)],
    },
    // Tytuł i opis Twitter/X dziedziczy z openGraph.
    twitter: { card: "summary_large_image", images: [ogImage(lang).url] },
  };
}

/** Grafika podglądu linku (1200×630) w danym języku, z pełnym adresem. */
function ogImage(lang: Lang) {
  return { url: absoluteUrl(`/images/og-${lang}.png`), width: 1200, height: 630, alt: `${site.name} — ${ui[lang].meta.title}` };
}

/** Dane strukturalne strony profilu (schema.org ProfilePage + Person); tylko potwierdzone dane. */
export function profileJsonLd(lang: Lang) {
  const url = absoluteUrl(localePath(lang, "/"));
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    url,
    inLanguage: ui[lang].htmlLang,
    mainEntity: {
      "@type": "Person",
      name: site.name,
      jobTitle: "AI developer",
      url,
      image: absoluteUrl("/images/portrait-robert.webp"),
      email: site.email,
      sameAs: [site.linkedin, site.github, site.tryhackme].filter(Boolean),
    },
  };
}

/** Wstawia JSON-LD do HTML (znak „<” zamieniony, żeby treść nie zamknęła tagu script). */
export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}

/** Wspólna ramka strony dla obu języków: <html lang>, menu, boczny pasek, stopka. */
export function RootShell({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  const t = ui[lang];
  return (
    <html lang={t.htmlLang} className={fontClasses}>
      <head>
        {/* Bez JS: pokaż treść, którą motion renderuje z opacity 0 (stan startowy reveal). */}
        <noscript>
          <style>{`[style*="opacity:0"]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body>
        <a
          href="#main"
          className="sr-only z-[60] rounded-xs bg-ink px-4 py-3 font-semibold text-paper focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          {t.skipToContent}
        </a>
        <Providers>
          <Nav lang={lang} />
          <main id="main">{children}</main>
          <footer className="border-t border-border-on-dark bg-ink text-text-muted-on-dark">
            <div className={`${container} flex min-h-[72px] flex-wrap items-center justify-between gap-2 py-4 text-[14px]`}>
              <p>
                © {new Date().getFullYear()} {site.name}
              </p>
              <a href="#main" className="inline-flex min-h-[44px] items-center gap-2 font-semibold transition-colors hover:text-accent">
                {t.footer.top} <span aria-hidden="true">↑</span>
              </a>
            </div>
          </footer>
          <ContactDialog lang={lang} />
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
