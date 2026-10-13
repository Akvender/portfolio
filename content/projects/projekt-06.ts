import type { Project } from "./types";

export const projekt06: Project = {
  slug: "agenci-ai",
  number: "06",
  title: "Agenci AI do pracy na co dzień",
  description: "Zestaw agentów, którzy piszą i sprawdzają dokumentację, pilnują serwerów, robią research i układają plan tygodnia z nagrań głosowych.",
  lead: "Agentów AI buduję tam, gdzie powtarzalna praca polega na czytaniu, sprawdzaniu i porządkowaniu informacji. Każdy agent ma jedno zadanie i tylko takie uprawnienia, jakich do niego potrzebuje. Agent, który coś napisał, nie ocenia własnej pracy: robi to osobny agent.",
  year: "",
  tags: ["Agenci AI", "Narzędzia wewnętrzne"],
  skills: ["agents", "llm", "speech", "python", "api", "linux", "monitoring"],
  flow: ["Zadanie lub zmiana w kodzie", "Agent z wąskimi uprawnieniami", "Raport, dokumentacja lub plan"],
  flowIcons: ["tasks", "brain", "note"],
  featured: false,
  meta: { client: "", role: "", period: "", status: "Używane na co dzień", stack: "Claude Code · API modeli językowych · Linux" },
  metrics: [],
  en: {
    title: "AI agents for everyday work",
    description: "A set of agents that write and verify documentation, watch over servers, do research and turn voice recordings into a weekly plan.",
    lead: "I build AI agents where repetitive work means reading, checking and organizing information. Each agent has one job and only the permissions it needs for it. An agent never reviews its own output: a separate agent does that.",
    tags: ["AI agents", "Internal tools"],
    flow: ["Task or code change", "Agent with narrow permissions", "Report, documentation or plan"],
    meta: { status: "Used every day", stack: "Claude Code · Language-model APIs · Linux" },
    architecture: {"columns": [{"title": "Input", "items": ["Code changes", "Server status", "Research topic", "Voice recordings"]}, {"title": "Agents", "items": ["Documentation: reader, writer, verifier, fixer", "Server watchdog and morning brief", "Research and price comparison", "Weekly planning"]}, {"title": "Output", "items": ["Documentation checked against the code", "Status reports", "Reports with sources", "Weekly plan"]}], "infra": "Claude Code, my own Linux servers, read-only access by default"},
    sections: [
      {
        type: "results",
        title: "What they do",
        metrics: [],
        proofs: [
          "Documentation for code changes in four steps: one agent works out what needs describing, a second writes it, a third checks every claim against the code, and a fourth fixes only the mismatches it was given.",
          "A server watchdog checks resources, services, backups and updates and reports them in a table. It only has read access.",
          "A morning brief sums up server status, new changes in the repositories and open tasks in a few lines.",
          "A research agent goes through online sources and writes a report with sources, a reliability rating and a recommendation.",
          "A purchasing agent compares offers from many shops and calculates the total cost. It never buys anything or enters payment details.",
          "An agent that analyzes voice recordings and turns them into a weekly plan.",
          "Content from websites and logs is treated as data, not instructions, which protects the agents from prompt injection.",
        ],
      },
    ],
  },
  architecture: {"columns": [{"title": "Wejście", "items": ["Zmiany w kodzie", "Stan serwerów", "Temat do zbadania", "Nagrania głosowe"]}, {"title": "Agenci", "items": ["Dokumentacja: czytelnik, pisarz, weryfikator, poprawki", "Strażnik serwerów i poranny brief", "Research i porównywanie ofert", "Planowanie tygodnia"]}, {"title": "Wynik", "items": ["Dokumentacja sprawdzona z kodem", "Raporty o stanie serwerów", "Raporty ze źródłami", "Plan tygodnia"]}], "infra": "Claude Code, własne serwery z Linuksem, domyślnie dostęp tylko do odczytu"},
  sections: [
    {
      type: "results",
      title: "Co robią",
      metrics: [],
      proofs: [
        "Dokumentacja zmian w kodzie w czterech krokach: jeden agent ustala, co trzeba opisać, drugi pisze, trzeci sprawdza każde twierdzenie z kodem, a czwarty poprawia tylko zgłoszone rozbieżności.",
        "Strażnik serwerów sprawdza zasoby, usługi, kopie zapasowe i aktualizacje, a wynik podaje w tabeli. Ma dostęp tylko do odczytu.",
        "Poranny brief w kilku linijkach podsumowuje stan serwerów, nowe zmiany w repozytoriach i otwarte zadania.",
        "Agent research przegląda źródła w internecie i zapisuje raport ze źródłami, oceną ich wiarygodności i rekomendacją.",
        "Agent zakupowy porównuje oferty z wielu sklepów i liczy koszt całkowity. Nigdy nie kupuje i nie podaje danych płatniczych.",
        "Agent, który analizuje nagrania głosowe i układa z nich plan tygodnia.",
        "Treści ze stron i logów agenci traktują jako dane, a nie polecenia. To chroni ich przed prompt injection.",
      ],
    },
  ],
};
