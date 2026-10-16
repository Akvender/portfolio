import type { Project } from "./types";

/**
 * Agenci AI. Szczegółowo pokazany jeden przypadek: dokumentacja zmian w kodzie w czterech rolach.
 * Agenci to konfiguracja Claude Code (pliki definicji), nie własne środowisko uruchomieniowe.
 * Agent devops nie jest publikowany, bo czeka na konto bez sudo.
 */
export const projekt06: Project = {
  slug: "agenci-ai",
  number: "05",
  title: "Agenci AI do pracy na co dzień",
  description: "Zestaw agentów, którzy piszą i sprawdzają dokumentację, pilnują serwerów, robią research i układają plan tygodnia z nagrań głosowych.",
  lead: "Agentów AI buduję tam, gdzie powtarzalna praca polega na czytaniu, sprawdzaniu i porządkowaniu informacji. Każdy agent ma jedno zadanie i tylko takie uprawnienia, jakich do niego potrzebuje. W dokumentacji zmian agent, który pisze, nie ocenia własnej pracy: robi to osobny agent.",
  year: "",
  tags: ["Agenci AI", "Narzędzia wewnętrzne"],
  skills: ["agents", "llm", "speech", "python", "api", "linux", "monitoring"],
  flow: ["Zadanie lub zmiana w kodzie", "Agent z wąskimi uprawnieniami", "Raport, dokumentacja lub plan"],
  flowIcons: ["tasks", "brain", "note"],
  featured: false,
  meta: { client: "", role: "", period: "", status: "Używane na co dzień", stack: "Claude Code · API modeli językowych · Linux" },
  metrics: [],
  architecture: {
    columns: [
      { title: "Wejście", items: ["Zmiana w kodzie (pull request)"] },
      { title: "Agenci", items: ["Czytelnik", "Pisarz", "Weryfikator i skrypt sprawdzający", "Poprawki"] },
      { title: "Wynik", items: ["Dokumentacja sprawdzona z kodem"] },
    ],
    infra: "Claude Code: pliki definicji agentów, bez własnego środowiska uruchomieniowego",
  },
  sections: [
    {
      type: "solution",
      title: "Przykład z bliska: dokumentacja zmian w kodzie.",
      modulesTitle: "Role agentów",
      intro: "Zadanie: do zmiany w kodzie przygotować dokumentację, której twierdzenia zgadzają się z kodem. Pracę dzielę na cztery role, a każda dostaje tylko to, czego potrzebuje do swojego kroku. Agentów konfiguruję w Claude Code; nie piszę dla nich własnego środowiska uruchomieniowego.",
      modules: [
        { title: "Czytelnik", text: "Ustala, co w zmianie trzeba opisać." },
        { title: "Pisarz", text: "Pisze dokumentację na tej podstawie." },
        { title: "Weryfikator", text: "Uruchamia deterministyczny skrypt sprawdzający i porównuje każde twierdzenie z kodem." },
        { title: "Poprawki", text: "Poprawia tylko rozbieżności zgłoszone przez weryfikatora." },
      ],
    },
    {
      type: "impact",
      title: "Weryfikacja to kontrola, nie gwarancja.",
      text: "Autor tekstu nie ocenia własnej pracy. Rozbieżności między dokumentacją a kodem ma wychwycić osobny weryfikator razem ze skryptem. To dodatkowy mechanizm kontroli. Nie gwarantuje, że dokumentacja jest bezbłędna.",
    },
    {
      type: "results",
      title: "Pozostali agenci.",
      metrics: [],
      proofs: [
        "Strażnik serwerów sprawdza zasoby, usługi, kopie zapasowe i aktualizacje, a wynik podaje w tabeli. Ma dostęp tylko do odczytu.",
        "Agent research przegląda źródła w internecie i zapisuje raport ze źródłami, oceną ich wiarygodności i rekomendacją.",
        "Agent zakupowy porównuje oferty z wielu sklepów i liczy koszt całkowity. Nigdy nie kupuje i nie podaje danych płatniczych.",
        "Agent, który analizuje nagrania głosowe i układa z nich plan tygodnia.",
        "Poranny brief ma w kilku linijkach podsumowywać stan serwerów, zmiany w repozytoriach z ostatniej doby i nowe raporty. Czeka na wybór kanału powiadomień.",
        "Treści ze stron i logów agenci traktują jako dane, a nie polecenia. Ograniczone uprawnienia i oddzielenie treści od instrukcji zmniejszają ryzyko prompt injection.",
      ],
    },
  ],
  // Wersja angielska
  en: {
    title: "AI agents for everyday work",
    description: "A set of agents that write and verify documentation, watch over servers, do research and turn voice recordings into a weekly plan.",
    lead: "I build AI agents where repetitive work means reading, checking and organizing information. Each agent has one job and only the permissions it needs for it. In the documentation workflow, the agent that writes never reviews its own output: a separate agent does that.",
    tags: ["AI agents", "Internal tools"],
    flow: ["Task or code change", "Agent with narrow permissions", "Report, documentation or plan"],
    meta: { status: "Used every day", stack: "Claude Code · Language-model APIs · Linux" },
    architecture: {
      columns: [
        { title: "Input", items: ["Code change (pull request)"] },
        { title: "Agents", items: ["Reader", "Writer", "Verifier and check script", "Fixer"] },
        { title: "Output", items: ["Documentation checked against the code"] },
      ],
      infra: "Claude Code: agent definition files, no custom runtime",
    },
    sections: [
      {
        type: "solution",
        title: "A closer look: documenting code changes.",
        modulesTitle: "Agent roles",
        intro: "The task: for a code change, produce documentation whose claims match the code. I split the work into four roles, and each one gets only what it needs for its step. I configure the agents in Claude Code; I don't write a custom runtime for them.",
        modules: [
          { title: "Reader", text: "Works out what in the change needs describing." },
          { title: "Writer", text: "Writes the documentation based on that." },
          { title: "Verifier", text: "Runs a deterministic check script and compares every claim with the code." },
          { title: "Fixer", text: "Fixes only the mismatches the verifier reported." },
        ],
      },
      {
        type: "impact",
        title: "Verification is a check, not a guarantee.",
        text: "The author of the text never reviews its own work. A separate verifier, together with a script, is there to catch mismatches between the documentation and the code. It is an extra control mechanism. It does not guarantee the documentation is error-free.",
      },
      {
        type: "results",
        title: "The other agents.",
        metrics: [],
        proofs: [
          "A server watchdog checks resources, services, backups and updates and reports them in a table. It only has read access.",
          "A research agent goes through online sources and writes a report with sources, a reliability rating and a recommendation.",
          "A purchasing agent compares offers from many shops and calculates the total cost. It never buys anything or enters payment details.",
          "An agent that analyzes voice recordings and turns them into a weekly plan.",
          "A morning brief is meant to sum up server status, repository changes from the last 24 hours and new reports in a few lines. It is waiting for a notification channel to be chosen.",
          "Agents treat content from websites and logs as data, not instructions. Limited permissions and keeping content separate from instructions reduce the risk of prompt injection.",
        ],
      },
    ],
  },
};
