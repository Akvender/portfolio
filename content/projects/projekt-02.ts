import type { Project } from "./types";

export const projekt02: Project = {
  slug: "generator-grafik-produktowych",
  number: "02",
  title: "Generator grafik produktowych dla e‑commerce",
  description: "Narzędzie, które z danych produktu tworzy grafiki do sklepu i reklam. Powstało nim 400 grafik.",
  lead: "Sklep internetowy z wąskiej, specjalistycznej branży potrzebował dużej liczby spójnych grafik produktowych. Zbudowałem narzędzie, które tworzy je z danych produktu przy użyciu modeli do generowania obrazów.",
  year: "",
  tags: ["E‑commerce", "AI generatywne"],
  skills: ["imagegen", "llm", "python", "api", "docker"],
  flow: ["Dane produktu", "Skrypt w Pythonie", "Model obrazów (API)", "Grafiki do sklepu"],
  flowIcons: ["box", "code", "sparkles", "image"],
  featured: false,
  meta: {"client": "Sklep internetowy", "role": "", "period": "", "status": "", "stack": "Python · API modeli obrazów"},
  metrics: [{"value": 400, "label": "grafik produktowych"}],
  en: {
    "title": "Product image generator for e‑commerce",
    "description": "A tool that turns product data into images for the store and ads. It has produced 400 images.",
    "lead": "An online store in a narrow, specialised niche needed a large number of consistent product images. I built a tool that creates them from product data using image-generation models.",
    "tags": [
      "E‑commerce",
      "Generative AI"
    ],
    "flow": ["Product data", "Python script", "Image model (API)", "Store images"],
    "meta": {
      "client": "Online store",
      "stack": "Python · image model APIs"
    },
    architecture: {"columns": [{"title": "Input", "items": ["Product data from the store"]}, {"title": "Processing", "items": ["Python script"]}, {"title": "AI", "items": ["Image-generation model API"]}, {"title": "Output", "items": ["Store images", "Ad images"]}], "infra": "Docker"},
    "sections": [
      {
        "type": "results",
        "title": "What was built",
        "metrics": [{"value": 400, "label": "product images"}],
        "proofs": [
          "An image-generation tool tailored to one specific industry.",
          "400 finished images for the store and for ads."
        ]
      }
    ]
  },
  architecture: {"columns": [{"title": "Wejście", "items": ["Dane produktu ze sklepu"]}, {"title": "Przetwarzanie", "items": ["Skrypt w Pythonie"]}, {"title": "AI", "items": ["API modelu do generowania obrazów"]}, {"title": "Wynik", "items": ["Grafiki do sklepu", "Grafiki do reklam"]}], "infra": "Docker"},
  sections: [
    {
      "type": "results",
      "title": "Co powstało",
      "metrics": [{"value": 400, "label": "grafik produktowych"}],
      "proofs": [
        "Narzędzie do generowania grafik produktowych dopasowane do jednej, specyficznej branży.",
        "400 gotowych grafik do sklepu i materiałów reklamowych."
      ]
    }
  ],
};
