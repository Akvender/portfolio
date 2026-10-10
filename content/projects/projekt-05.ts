import type { Project } from "./types";

export const projekt05: Project = {
  slug: "call-center-analiza-rozmow",
  number: "05",
  title: "Call-center z transkrypcją i analizą rozmów",
  description: "Narzędzie call-center dla branży OZE: ponad 5000 przetworzonych rozmów z analizą treści i wnioskami.",
  lead: "Narzędzie do obsługi i analizy rozmów dla firmy z branży OZE. Rozmowy są transkrybowane, a modele językowe analizują ich treść i wyciągają wnioski. Prototyp powstał na Make i Twilio, wersja docelowa działa na n8n, Twilio i PostgreSQL, podzielona na serwisy w kontenerach Docker.",
  year: "",
  tags: ["Call-center", "AI"],
  skills: ["speech", "llm", "agents", "twilio", "crm", "n8n", "make", "postgres", "docker", "vps", "linux", "monitoring", "api"],
  flow: ["Rozmowa (Twilio)", "Transkrypcja", "PostgreSQL i analiza AI", "Wnioski"],
  flowIcons: ["phone", "wave", "server", "tasks"],
  featured: false,
  meta: {"client": "Firma z branży OZE", "role": "", "period": "", "status": "", "stack": "Twilio · n8n · PostgreSQL · Docker"},
  metrics: [{"value": 5000, "suffix": "+", "label": "przetworzonych rozmów"}],
  en: {
    "title": "Call center with transcription and call analysis",
    "description": "A call-center tool for a renewable-energy company: over 5,000 calls processed with content analysis and insights.",
    "lead": "A tool for handling and analysing calls for a renewable-energy company. Calls are transcribed, and language models analyse what was said and draw conclusions. The prototype ran on Make and Twilio; the production version runs on n8n, Twilio and PostgreSQL, split into services in Docker containers.",
    "tags": [
      "Call center",
      "AI"
    ],
    "flow": ["Call (Twilio)", "Transcription", "PostgreSQL and AI analysis", "Insights"],
    "meta": {
      "client": "Renewable-energy company",
      "stack": "Twilio · n8n · PostgreSQL · Docker"
    },
    "sections": [
      {
        "type": "results",
        "title": "What was built",
        "metrics": [
          {
            "value": 5000,
            "suffix": "+",
            "label": "calls processed"
          }
        ],
        "proofs": [
          "Call transcription and content analysis by language models, with insights for follow-up work.",
          "A prototype on Make and Twilio to validate the idea quickly.",
          "The production version: n8n, Twilio, a server and a PostgreSQL database, each in its own Docker container."
        ]
      }
    ]
  },
  sections: [
    {
      "type": "results",
      "title": "Co powstało",
      "metrics": [
        {
          "value": 5000,
          "suffix": "+",
          "label": "przetworzonych rozmów"
        }
      ],
      "proofs": [
        "Transkrypcja rozmów i analiza ich treści przez modele językowe, z wnioskami do dalszej pracy.",
        "Prototyp na Make i Twilio, który pozwolił szybko sprawdzić pomysł.",
        "Wersja docelowa: n8n, Twilio, serwer i baza PostgreSQL, wszystko w osobnych kontenerach Docker."
      ]
    }
  ],
};
