/**
 * Słownik umiejętności do interaktywnej mapy na stronie głównej (nazwy w obu językach).
 * Projekty wskazują umiejętności po `id`.
 */
export const skillGroups = [
  {
    title: { pl: "AI i modele językowe", en: "AI and language models" },
    icon: "brain",
    skills: [
      { id: "llm", label: { pl: "API OpenAI i Anthropic", en: "OpenAI and Anthropic APIs" } },
      { id: "agents", label: { pl: "Agenci AI", en: "AI agents" } },
      { id: "bots", label: { pl: "Chatboty i voiceboty", en: "Chatbots and voicebots" } },
      { id: "speech", label: { pl: "Transkrypcja rozmów", en: "Call transcription" } },
      { id: "imagegen", label: { pl: "Generowanie grafik", en: "Image generation" } },
    ],
  },
  {
    title: { pl: "Automatyzacje i integracje", en: "Automations and integrations" },
    icon: "cycle",
    skills: [
      { id: "n8n", label: { pl: "n8n", en: "n8n" } },
      { id: "make", label: { pl: "Make i Zapier", en: "Make and Zapier" } },
      { id: "crm", label: { pl: "Integracje CRM", en: "CRM integrations" } },
      { id: "erp", label: { pl: "Integracje ERP", en: "ERP integrations" } },
      { id: "leads", label: { pl: "Lejki leadów", en: "Lead funnels" } },
    ],
  },
  {
    title: { pl: "Kod i infrastruktura", en: "Code and infrastructure" },
    icon: "code",
    skills: [
      { id: "python", label: { pl: "Python", en: "Python" } },
      { id: "api", label: { pl: "REST API", en: "REST APIs" } },
      { id: "docker", label: { pl: "Docker i serwery", en: "Docker and servers" } },
      { id: "monitoring", label: { pl: "Monitoring i obsługa błędów", en: "Monitoring and error handling" } },
    ],
  },
  {
    title: { pl: "Marketing techniczny", en: "Technical marketing" },
    icon: "pulse",
    skills: [{ id: "meta", label: { pl: "Meta Pixel i Conversions API", en: "Meta Pixel and Conversions API" } }],
  },
] as const;

export type SkillId = (typeof skillGroups)[number]["skills"][number]["id"];
