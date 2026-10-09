import type { Metadata } from "next";
import { JetBrains_Mono, Lato, Rubik } from "next/font/google";
import { Analytics } from "@/components/site/Analytics";
import { Nav } from "@/components/site/Nav";
import { Providers } from "@/components/site/Providers";
import { SocialRail } from "@/components/site/SocialRail";
import { type Lang, localePath, ui } from "@/content/i18n";
import { site } from "@/content/site";
import { container } from "@/lib/ui";

// Nagłówki: Rubik, tekst: Lato (wybór Roberta z porównania fontów).
const rubik = Rubik({ subsets: ["latin", "latin-ext"], variable: "--font-rubik", display: "swap" });
const lato = Lato({ subsets: ["latin", "latin-ext"], weight: ["400", "700", "900"], variable: "--font-lato", display: "swap" });
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
    openGraph: { type: "website", locale: t.ogLocale, siteName: site.name, url: absoluteUrl(localePath(lang, path)) },
  };
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
          <SocialRail lang={lang} />
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
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
