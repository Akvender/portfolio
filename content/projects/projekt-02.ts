import type { Project } from "./types";

/** Generator grafik produktowych. Bez galerii, dopóki nie ma zgody na publikację grafik klienta. */
export const projekt02: Project = {
  slug: "generator-grafik-produktowych",
  number: "04",
  title: "Generator grafik produktowych dla e-commerce",
  description: "Zbudowałem narzędzie, które generuje grafiki do sklepu i reklam na podstawie danych produktu. Powstało dzięki niemu 400 grafik.",
  lead: "Sklep internetowy z wąskiej, specjalistycznej branży potrzebował dużej liczby spójnych grafik produktowych. Zbudowałem narzędzie, które tworzy je z danych produktu przy użyciu modeli do generowania obrazów.",
  year: "",
  tags: ["E-commerce", "AI generatywne"],
  skills: ["imagegen", "llm", "python", "api", "docker"],
  flow: ["Dane produktu", "Skrypt w Pythonie", "Model obrazów (API)", "Grafiki do sklepu"],
  flowIcons: ["box", "code", "sparkles", "image"],
  featured: false,
  meta: { client: "Sklep internetowy", role: "", period: "", status: "", stack: "Python · API modeli obrazów" },
  metrics: [{ value: 400, label: "grafik produktowych" }],
  architecture: {
    columns: [
      { title: "Wejście", items: ["Dane produktu ze sklepu"] },
      { title: "Przetwarzanie", items: ["Skrypt w Pythonie"] },
      { title: "AI", items: ["API modelu do generowania obrazów"] },
      { title: "Wynik", items: ["Grafiki do sklepu", "Grafiki do reklam"] },
    ],
    infra: "Docker",
  },
  sections: [
    {
      type: "results",
      title: "Co powstało.",
      intro: "Narzędzie jest dopasowane do jednej, specjalistycznej branży sklepu.",
      metrics: [{ value: 400, label: "grafik do sklepu i reklam" }],
      proofs: [],
    },
  ],
  // Wersja angielska
  en: {
    title: "Product image generator for e-commerce",
    description: "I built a tool that generates images for the store and ads from product data. It has produced 400 images.",
    lead: "An online store in a narrow, specialized niche needed a large number of consistent product images. I built a tool that creates them from product data using image-generation models.",
    tags: ["E-commerce", "Generative AI"],
    flow: ["Product data", "Python script", "Image model (API)", "Store images"],
    meta: { client: "Online store", stack: "Python · image model APIs" },
    architecture: {
      columns: [
        { title: "Input", items: ["Product data from the store"] },
        { title: "Processing", items: ["Python script"] },
        { title: "AI", items: ["Image-generation model API"] },
        { title: "Output", items: ["Store images", "Ad images"] },
      ],
      infra: "Docker",
    },
    sections: [
      {
        type: "results",
        title: "What was built.",
        intro: "The tool is tailored to the store's specialized niche.",
        metrics: [{ value: 400, label: "images for the store and ads" }],
        proofs: [],
      },
    ],
  },
};
