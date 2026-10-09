import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter, JetBrains_Mono } from "next/font/google";
import { Nav } from "@/components/site/Nav";
import { Providers } from "@/components/site/Providers";
import { site } from "@/content/site";
import { container } from "@/lib/ui";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "latin-ext"], variable: "--font-inter", display: "swap" });
const display = Bricolage_Grotesque({ subsets: ["latin", "latin-ext"], variable: "--font-bricolage", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin", "latin-ext"], weight: ["400", "500"], variable: "--font-jetbrains-mono", display: "swap", preload: false });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} — AI developer, freelancer`, template: `%s — ${site.name}` },
  description: "Robert Świeboda, AI developer i freelancer: agenci AI, integracje, automatyzacje. Umiejętności, projekty i certyfikaty.",
  openGraph: { type: "website", locale: "pl_PL", siteName: site.name },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl" className={`${inter.variable} ${display.variable} ${mono.variable}`}>
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
          <main id="main">{children}</main>
          <footer className="border-t border-border-on-dark bg-ink text-text-muted-on-dark">
            <div className={`${container} flex min-h-[72px] flex-wrap items-center justify-between gap-2 py-4 text-[14px]`}>
              <p>
                © {new Date().getFullYear()} {site.name}
              </p>
              <p>AI developer · freelancer</p>
            </div>
          </footer>
        </Providers>
      </body>
    </html>
  );
}
