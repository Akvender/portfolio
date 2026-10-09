import type { Metadata } from "next";
import { fontClasses } from "@/components/site/RootShell";
import { ui } from "@/content/i18n";
import { container, h1 } from "@/lib/ui";
import "./globals.css";

export const metadata: Metadata = { title: "404" };

/** 404 dla obu języków naraz (dwa layouty językowe, więc strona błędu ma własny <html>). */
export default function GlobalNotFound() {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return (
    <html lang="pl" className={fontClasses}>
      <body>
        <main className="flex min-h-svh items-center bg-ink text-text-on-dark">
          <div className={`${container} grid gap-12 md:grid-cols-2`}>
            {(["pl", "en"] as const).map((lang) => (
              <div key={lang} lang={lang}>
                <h1 className={h1}>{ui[lang].notFound.title}</h1>
                <a
                  href={`${base}${lang === "pl" ? "/" : "/en/"}`}
                  className="mt-8 inline-flex min-h-[52px] items-center rounded-xs bg-accent px-7 font-semibold text-on-accent hover:bg-[#ff8a3d]"
                >
                  {ui[lang].notFound.back}
                </a>
              </div>
            ))}
          </div>
        </main>
      </body>
    </html>
  );
}
