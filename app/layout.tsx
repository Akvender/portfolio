import type { Metadata } from "next";
import { JetBrains_Mono, Lato, Rubik } from "next/font/google";
import { Nav } from "@/components/site/Nav";
import { Providers } from "@/components/site/Providers";
import { SocialRail } from "@/components/site/SocialRail";
import { site } from "@/content/site";
import { container } from "@/lib/ui";
import "./globals.css";

// Nagłówki: Rubik, tekst: Lato (wybór Roberta z porównania fontów).
const rubik = Rubik({ subsets: ["latin", "latin-ext"], variable: "--font-rubik", display: "swap" });
const lato = Lato({ subsets: ["latin", "latin-ext"], weight: ["400", "700", "900"], variable: "--font-lato", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin", "latin-ext"], weight: ["400", "500"], variable: "--font-jetbrains-mono", display: "swap", preload: false });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} — AI developer, freelancer`, template: `%s — ${site.name}` },
  description: "Robert Świeboda, AI developer i freelancer: agenci AI, integracje, automatyzacje. Umiejętności, projekty i certyfikaty.",
  openGraph: { type: "website", locale: "pl_PL", siteName: site.name },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl" className={`${rubik.variable} ${lato.variable} ${mono.variable}`}>
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
          Przejdź do treści
        </a>
        <Providers>
          <Nav />
          <SocialRail />
          <main id="main">{children}</main>
          <footer className="border-t border-border-on-dark bg-ink text-text-muted-on-dark">
            <div className={`${container} flex min-h-[72px] flex-wrap items-center justify-between gap-2 py-4 text-[14px]`}>
              <p>
                © {new Date().getFullYear()} {site.name}
              </p>
              <a href="#main" className="inline-flex min-h-[44px] items-center gap-2 font-semibold transition-colors hover:text-accent">
                Wróć na górę <span aria-hidden="true">↑</span>
              </a>
            </div>
          </footer>
        </Providers>
      </body>
    </html>
  );
}
