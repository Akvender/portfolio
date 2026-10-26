import type { Project } from "./types";

/** Call-center z transkrypcją i analizą rozmów (OZE). Projekt okresowy pod konkretną ofertę; licznik obejmuje wszystkie rozmowy. */
export const projekt05: Project = {
  slug: "call-center-analiza-rozmow",
  number: "02",
  title: "Transkrypcja i analiza rozmów dla firmy z branży OZE",
  description: "Narzędzie call-center: rozmowy są transkrybowane, a modele językowe analizują ich treść. Skala: ponad 5000 rozmów w ciągu 3 miesięcy.",
  lead: "Call-center dla firmy z branży OZE, uruchomione na czas konkretnej, okresowej oferty. Rozmowy są transkrybowane, model językowy analizuje ich treść, a wyniki trafiają do bazy PostgreSQL.",
  year: "",
  tags: ["Call-center", "AI"],
  skills: ["speech", "llm", "agents", "twilio", "crm", "n8n", "make", "postgres", "docker", "vps", "linux", "monitoring", "api"],
  flow: ["Rozmowa (Twilio)", "Transkrypcja", "PostgreSQL i analiza AI", "Wnioski"],
  flowIcons: ["phone", "wave", "server", "tasks"],
  featured: true,
  meta: { client: "Firma z branży OZE", role: "Analiza rozmów przez model językowy, integracja z Twilio, serwer i wdrożenie", period: "", status: "Zakończony (projekt okresowy)", stack: "Twilio · n8n · PostgreSQL · Docker" },
  metrics: [{ value: 5000, suffix: "+", label: "wszystkich rozmów w ciągu 3 miesięcy" }],
  architecture: {
    columns: [
      { title: "Wejście", items: ["Rozmowy telefoniczne (Twilio)"] },
      { title: "Automatyzacja", items: ["n8n", "Transkrypcja"] },
      { title: "Dane i AI", items: ["Baza PostgreSQL", "Analiza treści przez model językowy"] },
      { title: "Wynik", items: ["Wnioski z rozmów"] },
    ],
    infra: "osobne serwisy w kontenerach Docker, VPS, Linux",
  },
  sections: [
    {
      type: "impact",
      title: "Mój zakres.",
      text: "Zbudowałem analizę rozmów opartą na modelu językowym, zintegrowałem rozwiązanie z Twilio i postawiłem całe zaplecze: serwer, kontenery i wdrożenie.",
    },
    {
      type: "impact",
      title: "Najpierw prototyp, potem wersja docelowa.",
      text: "Pierwsza wersja powstała na Make i Twilio, żeby szybko sprawdzić pomysł. Wersję docelową przeniosłem na n8n, bo jest bardziej elastyczny. Opiera się na n8n, Twilio i PostgreSQL, a poszczególne serwisy są w osobnych kontenerach Docker.",
    },
    {
      type: "results",
      title: "Skala.",
      intro: "Licznik obejmuje wszystkie rozmowy, które przeszły przez narzędzie. Pokazuje skalę, nie jakość analizy ani wyniki sprzedaży.",
      metrics: [{ value: 5000, suffix: "+", label: "wszystkich rozmów w ciągu 3 miesięcy" }],
      proofs: [],
    },
  ],
  // Wersja angielska
  en: {
    title: "Call transcription and analysis for a renewable-energy company",
    description: "A call-center tool: calls are transcribed and language models analyze what was said. Scale: over 5,000 calls in 3 months.",
    lead: "A call center for a renewable-energy company, set up for a specific, time-limited offer. Calls are transcribed, a language model analyzes what was said, and the results go into a PostgreSQL database.",
    tags: ["Call center", "AI"],
    flow: ["Call (Twilio)", "Transcription", "PostgreSQL and AI analysis", "Insights"],
    meta: { client: "Renewable-energy company", role: "Call analysis with a language model, Twilio integration, server and deployment", status: "Completed (time-limited project)", stack: "Twilio · n8n · PostgreSQL · Docker" },
    architecture: {
      columns: [
        { title: "Input", items: ["Phone calls (Twilio)"] },
        { title: "Automation", items: ["n8n", "Transcription"] },
        { title: "Data and AI", items: ["PostgreSQL database", "Content analysis by a language model"] },
        { title: "Output", items: ["Call insights"] },
      ],
      infra: "separate services in Docker containers, VPS, Linux",
    },
    sections: [
      {
        type: "impact",
        title: "My part.",
        text: "I built the call analysis on top of a language model, integrated the solution with Twilio and set up everything behind it: the server, the containers and the deployment.",
      },
      {
        type: "impact",
        title: "Prototype first, then the production version.",
        text: "The first version ran on Make and Twilio to test the idea quickly. I moved the production version to n8n because it is more flexible. It is built on n8n, Twilio and PostgreSQL, with each service in its own Docker container.",
      },
      {
        type: "results",
        title: "Scale.",
        intro: "The counter covers every call that went through the tool. It shows scale, not analysis quality or sales results.",
        metrics: [{ value: 5000, suffix: "+", label: "calls in total over 3 months" }],
        proofs: [],
      },
    ],
  },
};
