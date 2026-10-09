/** Typowany schemat danych case study. Dodanie nowego projektu = nowy plik w tym katalogu. */

export type Metric = {
  /** Wartość liczbowa (animowany licznik). Placeholder: 0 → renderowane jako „00”. */
  value: number;
  suffix?: string;
  label: string;
};

export type CaseMeta = {
  client: string;
  role: string;
  period: string;
  status: string;
  stack: string;
};

export type ProblemSection = {
  type: "problem";
  title: string;
  intro?: string;
  steps: { title: string; text: string }[];
};

export type SolutionSection = {
  type: "solution";
  title: string;
  intro?: string;
  /** Makieta tabeli zamówień — wiersze pojawiają się kolejno, komórki „—” podświetlają się bursztynem. */
  table?: { columns: string[]; rows: string[][] };
  modules: { title: string; text: string }[];
  image?: string;
  imageAlt?: string;
};

export type ResultsSection = {
  type: "results";
  title: string;
  intro?: string;
  metrics: Metric[];
  proofs: string[];
  image?: string;
  imageAlt?: string;
};

export type ApproachSection = {
  type: "approach";
  title: string;
  quote: string;
  quoteAuthor?: string;
  cards: { title: string; text: string }[];
};

/** Blok opcjonalny (ramka 23:307) — renderowany tylko, gdy case go ma. */
export type ImpactSection = {
  type: "impact";
  title: string;
  text: string;
};

/** Blok opcjonalny (ramka 23:307) — renderowany tylko, gdy case go ma. */
export type RoadmapSection = {
  type: "roadmap";
  title: string;
  items: { title: string; text: string }[];
};

export type CaseSection =
  | ProblemSection
  | SolutionSection
  | ResultsSection
  | ApproachSection
  | ImpactSection
  | RoadmapSection;

export type Project = {
  slug: string;
  /** Numeracja w stylu Figmy: „01”, „02”, … */
  number: string;
  title: string;
  /** Krótki opis na kartę (1 zdanie). */
  description: string;
  lead: string;
  year: string;
  tags: string[];
  featured: boolean;
  /** Ścieżka pod public/ — łatwa do podmiany na finalną okładkę. */
  cover: string;
  coverAlt: string;
  meta: CaseMeta;
  /** 3 metryki na kartę wyróżnioną. */
  metrics: Metric[];
  sections: CaseSection[];
};
