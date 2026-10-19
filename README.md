# Portfolio: Robert Świeboda

Strona z projektami i umiejętnościami (automatyzacje, integracje, narzędzia z AI), w wersji polskiej i angielskiej.

Na żywo: https://akvender.github.io/portfolio/

## Technologie
- Next.js 15 (App Router, static export), React 19, TypeScript
- Tailwind CSS 4, motion, lenis
- GitHub Pages, deploy przez GitHub Actions (`.github/workflows/deploy.yml`)

## Struktura
- `content/`: treści strony (`site.ts`, `skills.ts`, `projects/*.ts`) i teksty interfejsu (`i18n.ts`). Zmiana treści nie wymaga ruszania komponentów.
- `app/`: trasy `(pl)` i `(en)`, sitemap i robots.
- `components/`: komponenty strony głównej (`home/`), case studies (`case/`) i wspólne (`site/`).
- `public/images/`: obrazy publikowane na stronie.

## Uruchomienie
```bash
npm ci
npm run dev        # http://localhost:3000
npm run lint
npm run typecheck
npm run build      # wynik w out/
```

Przy buildzie produkcyjnym workflow ustawia `NEXT_PUBLIC_SITE_URL` i `NEXT_PUBLIC_BASE_PATH` (adres i ścieżka GitHub Pages).

## Projekty klientów
Opisy projektów komercyjnych są zanonimizowane. Kod tych projektów jest w repozytoriach prywatnych.
