"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";
import { usePathname } from "next/navigation";
import { site } from "@/content/site";

type GoatCounter = { count?: (vars: { path: string }) => void };

/**
 * Licznik odwiedzin GoatCounter: bez ciasteczek i bez danych osobowych, więc bez banera zgody.
 * Działa tylko, gdy w content/site.ts jest ustawiony `goatcounter`. Liczy też przejścia między podstronami.
 */
export function Analytics() {
  const pathname = usePathname();
  const first = useRef(true);

  useEffect(() => {
    if (!site.goatcounter) return;
    // Pierwsze wejście liczy sam skrypt; kolejne przejścia w obrębie strony liczymy ręcznie.
    if (first.current) {
      first.current = false;
      return;
    }
    (window as unknown as { goatcounter?: GoatCounter }).goatcounter?.count?.({ path: location.pathname });
  }, [pathname]);

  if (!site.goatcounter) return null;
  return <Script data-goatcounter={`https://${site.goatcounter}.goatcounter.com/count`} src="https://gc.zgo.at/count.js" strategy="afterInteractive" />;
}
