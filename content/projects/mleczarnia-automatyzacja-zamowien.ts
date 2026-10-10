import type { Project } from "./types";

/**
 * Projekt 01 — cyfrowa karta zamówień dla mleczarni.
 * Liczby i fakty z dokumentacji projektu.
 * Nazwy sklepów i ilości w tabeli są przykładowe.
 */
export const mleczarnia: Project = {
  slug: "mleczarnia-automatyzacja-zamowien",
  number: "01",
  title: "Cyfrowa karta zamówień dla mleczarni",
  description:
    "Jeden cyfrowy przepływ zamówienia: od telefonu, przez produkcję, do dokumentu WZ w Comarch Optima.",
  lead: "Mała, lokalna mleczarnia z województwa łódzkiego. Zamówienie przechodziło przez telefon, kartkę, skan, wydruk i ręczny wpis do Comarch. Budujemy system, który zamienia to w jeden cyfrowy przepływ — bez zmieniania tego, co działa.",
  year: "2026",
  tags: ["Produkcja spożywcza", "Integracja ERP", "Aplikacja webowa"],
  skills: ["erp", "api", "postgres", "docker", "linux"],
  flow: ["Telefon i kartka", "Cyfrowa karta", "Produkcja", "WZ w Comarch"],
  flowIcons: ["phone", "tablet", "factory", "document"],
  featured: true,
  meta: {
    client: "Mleczarnia, woj. łódzkie",
    role: "Analiza procesu i projekt systemu (we dwóch)",
    period: "2025–2026",
    status: "Prototyp",
    stack: "Node.js · TypeScript · Comarch Optima",
  },
  metrics: [
    { value: 41, label: "dokumentów WZ przeanalizowanych" },
    { value: 227, label: "sklepów w danych" },
    { value: 14, label: "tras dostaw" },
  ],
  /** Wersja angielska: to, co widać na liście i w nagłówku. Szczegóły (sections) dojdą razem z opisami projektów. */
  en: {
    title: "Digital order card for a dairy",
    description: "One digital order flow: from the phone call, through production, to the WZ delivery note in Comarch Optima.",
    lead: "A small local dairy in the Łódź region. Orders went from a phone call to a paper card, a scan, a printout and manual entry in Comarch. We are building a system that turns this into one digital flow, without changing what already works.",
    tags: [
      "Food production",
      "ERP integration",
      "Web app"
    ],
    flow: [
      "Phone and paper card",
      "Digital card",
      "Production",
      "WZ in Comarch"
    ],
    meta: {
      client: "Dairy, Łódź region",
      role: "Process analysis and system design (team of two)",
      status: "Prototype"
    }
  },
  sections: [
    {
      type: "problem",
      title: "Jedno zamówienie, przepisywane kilka razy.",
      intro:
        "Zamówienie przechodzi sześć kroków, zanim trafi do Comarch Optima. Te same dane są po drodze ręcznie przepisywane kilka razy.",
      steps: [
        { title: "Telefon", text: "Sklep dyktuje zamówienie do biura." },
        { title: "Kartka", text: "Biuro zapisuje je na papierowej karcie trasy." },
        { title: "Skan", text: "Karta jest skanowana." },
        { title: "Wydruk na produkcji", text: "Produkcja dostaje wydruk." },
        { title: "Telefon z wagą do biura", text: "Wagi produktów wracają do biura telefonicznie." },
        { title: "Ręczny wpis do Comarch Optima", text: "Biuro ręcznie wystawia dokumenty WZ." },
      ],
    },
    {
      type: "solution",
      title: "Jeden cyfrowy przepływ. Ekran, który wygląda jak kartka, którą znają.",
      intro:
        "Biuro wpisuje zamówienie na tablecie, produkcja widzi je od razu, dokumenty WZ trafiają do Comarch plikiem — bez przepisywania. Wiersze to sklepy jednej trasy, kolumny to produkty. Dane w tabeli są przykładowe.",
      table: {
        columns: ["Sklep / Produkt", "Mleko 2%", "Śmietana 18%", "Twaróg", "Jogurt nat."],
        rows: [
          ["Sklep Kowalski", "12", "6", "4", "8"],
          ["Delikatesy Zosia", "8", "4", "—", "6"],
          ["Sklep ABC", "20", "10", "8", "12"],
          ["Piekarnia Must", "6", "3", "2", "4"],
        ],
      },
      modules: [
        { title: "Biuro", text: "Wpisuje zamówienia, widzi status realizacji." },
        { title: "Laboratorium", text: "Bilans masy — wstrzymany do walidacji z laborantką." },
        { title: "Produkcja i magazyn", text: "Widzi zamówienia od razu, bez telefonów z wagą." },
        { title: "Zamówienia od dystrybutorów", text: "Osobny kanał wejścia danych do tego samego rdzenia." },
        { title: "Administrator", text: "Nadzoruje reguły, produkty, trasy i uprawnienia." },
      ],
    },
    {
      type: "results",
      title: "Sprawdzone na realnym procesie, nie na slajdzie.",
      intro:
        "Wspólnik na co dzień uczestniczy w zbieraniu i przetwarzaniu zamówień, więc słabe punkty obiegu wskazaliśmy z obserwacji i udziału w nim.",
      metrics: [
        { value: 41, label: "realnych dokumentów WZ" },
        { value: 22, suffix: "%", label: "WZ: płatnik i odbiorca to różne podmioty (ok.)" },
        { value: 14, label: "tras dostaw" },
        { value: 227, label: "sklepów" },
        { value: 34, label: "produkty, w tym 4 na wagę" },
      ],
      proofs: [
        "Import do Comarch Optima testowany na prawdziwych plikach, aż do skutku.",
        "Ceny tego samego produktu różnią się między klientami.",
        "Fundament systemu działa i ma testy, aplikacja biura jest w budowie.",
        "Zarząd chce zmiany, a pracownicy przyjęli pomysł z zaciekawieniem i chcą testować.",
        "Moduł laboratorium świadomie wstrzymany do potwierdzenia założeń przez laborantkę.",
      ],
      image: "/images/screen-wyniki.svg",
      imageAlt: "Zrzut: udany import WZ do Comarch (placeholder)",
    },
    {
      type: "approach",
      title: "Najpierw ludzie, potem technologia.",
      quote: "Kreska w polu karty zamówień znaczy „ten sklep świadomie nie zamawia”.",
      quoteAuthor:
        "Dla pracowników kreska i puste pole znaczą co innego, więc system nie może tej różnicy zgubić.",
      cards: [
        { title: "Biuro", text: "Wiersz karty: sklep z trasy × produkty." },
        { title: "Księgowość", text: "Dokument WZ przyjmowany przez Comarch Optima bez ręcznych poprawek." },
        { title: "Dystrybucja", text: "Część trasy dostaw: jedna karta to jedna trasa." },
        { title: "Technologia żywności", text: "Bilans masy: ile śmietanki i mleka chudego da partia mleka pod daną recepturę." },
      ],
    },
    {
      type: "impact",
      title: "Ludzie nie muszą bać się AI.",
      text: "Zmiana ma polegać na tym, że pracownik nadzoruje system, zamiast wykonywać powtarzalną pracę. Planujemy mini szkolenia z AI dla pracowników — na przykładach z ich własnej pracy.",
    },
    {
      type: "roadmap",
      title: "Co dalej",
      items: [
        { title: "Etap 1 w mleczarni", text: "Karta zamówień, wysyłka na produkcję, eksport WZ do Comarch, zestawienia sprzedaży." },
        { title: "Planowanie produkcji", text: "Moduł laboratorium i bilansu masy, po potwierdzeniu założeń przez laborantkę." },
        { title: "Kolejne zakłady", text: "Przetwórstwo spożywcze z własną dystrybucją — mamy kontakt do kolejnej mleczarni." },
      ],
    },
  ],
};
