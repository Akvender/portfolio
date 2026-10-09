/**
 * Słownik umiejętności do interaktywnej mapy na stronie głównej.
 * Projekty wskazują umiejętności po `id`.
 */
export const skillGroups = [
  {
    title: "AI i modele językowe",
    icon: "brain",
    skills: [
      { id: "llm", label: "API OpenAI i Anthropic" },
      { id: "agents", label: "Agenci AI" },
      { id: "bots", label: "Chatboty i voiceboty" },
      { id: "speech", label: "Transkrypcja rozmów" },
      { id: "imagegen", label: "Generowanie grafik" },
    ],
  },
  {
    title: "Automatyzacje i integracje",
    icon: "cycle",
    skills: [
      { id: "n8n", label: "n8n" },
      { id: "make", label: "Make i Zapier" },
      { id: "crm", label: "Integracje CRM" },
      { id: "erp", label: "Integracje ERP" },
      { id: "leads", label: "Lejki leadów" },
    ],
  },
  {
    title: "Kod i infrastruktura",
    icon: "code",
    skills: [
      { id: "python", label: "Python" },
      { id: "api", label: "REST API" },
      { id: "docker", label: "Docker i serwery" },
      { id: "monitoring", label: "Monitoring i obsługa błędów" },
    ],
  },
  {
    title: "Marketing techniczny",
    icon: "pulse",
    skills: [{ id: "meta", label: "Meta Pixel i Conversions API" }],
  },
] as const;

export type SkillId = (typeof skillGroups)[number]["skills"][number]["id"];
