import type { Metadata } from "next";
import { IBM_Plex_Mono, Inter } from "next/font/google";
import { Nav } from "@/components/site/Nav";
import { Providers } from "@/components/site/Providers";
import { site } from "@/content/site";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "latin-ext"], weight: ["400", "600", "800"], variable: "--font-inter", display: "swap" });
const plexMono = IBM_Plex_Mono({ subsets: ["latin", "latin-ext"], weight: ["400", "500"], variable: "--font-ibm-plex-mono", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} — AI i automatyzacje dla produkcji`, template: `%s — ${site.name}` },
  description: "Systemy wewnętrzne i automatyzacje z AI dla firm produkcyjnych. Wybrane realizacje i case study.",
  openGraph: { type: "website", locale: "pl_PL", siteName: site.name },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl" className={`${inter.variable} ${plexMono.variable}`}>
      <head>
        {/* Bez JS: pokaż treść, którą motion renderuje z opacity 0 (stan startowy reveal). */}
        <noscript>
          <style>{`[style*="opacity:0"]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body>
        <a
          href="#main"
          className="sr-only z-[60] rounded-sm bg-accent-amber px-4 py-3 font-semibold text-ink focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Przejdź do treści
        </a>
        <Providers>
          <Nav />
          <main id="main">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
