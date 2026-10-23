import type { Project } from "./types";

/**
 * Cyfrowa karta zamówień dla mleczarni. Projekt we dwóch, zaczynamy wdrożenie; opis w budowie.
 * Liczby i fakty z dokumentacji projektu.
 * Nazwy sklepów i ilości w tabeli są przykładowe.
 */
export const mleczarnia: Project = {
  slug: "mleczarnia-automatyzacja-zamowien",
  number: "03",
  title: "Cyfrowa karta zamówień dla mleczarni",
  description: "Projektujemy cyfrowy obieg zamówień dla mleczarni, od karty zamówienia po import dokumentów WZ do Comarch Optima.",
  lead: "Mała, lokalna mleczarnia z województwa łódzkiego. Zamówienie przechodzi przez telefon, kartkę, skan, wydruk i ręczny wpis do Comarch. Budujemy system, który zamienia to w jeden cyfrowy obieg, bez zmieniania tego, co działa.",
  year: "2026",
  tags: ["Produkcja spożywcza", "Integracja ERP", "Aplikacja webowa"],
  skills: ["erp", "postgres", "docker", "linux"],
  flow: ["Telefon i kartka", "Cyfrowa karta", "Produkcja", "WZ w Comarch"],
  flowIcons: ["phone", "tablet", "factory", "document"],
  featured: true,
  meta: {
    client: "Mleczarnia, woj. łódzkie",
    role: "Analiza procesu i projekt systemu (we dwóch)",
    period: "2025–2026",
    status: "Zaczynamy wdrożenie",
    stack: "Node.js · TypeScript · Comarch Optima",
  },
  metrics: [
    { value: 41, label: "dokumentów WZ przeanalizowanych" },
    { value: 227, label: "sklepów w danych" },
    { value: 14, label: "tras dostaw" },
  ],
  architecture: {
    columns: [
      { title: "Wejście", items: ["Zamówienia telefoniczne", "Karta trasy"] },
      { title: "Aplikacja", items: ["Aplikacja webowa (Node.js, TypeScript)", "Moduły: biuro, produkcja, dystrybucja"] },
      { title: "Wynik", items: ["Plik importu WZ do Comarch Optima"] },
    ],
    infra: "serwer, Docker, Linux",
  },
  sections: [
    {
      type: "problem",
      title: "Jedno zamówienie, przepisywane kilka razy.",
      intro: "Zamówienie przechodzi przez sześć etapów, zanim trafi do Comarch Optima. Te same dane są po drodze ręcznie przepisywane kilka razy.",
      steps: [
        { title: "Telefon", text: "Sklep dyktuje zamówienie do biura." },
        { title: "Kartka", text: "Biuro zapisuje je na papierowej karcie trasy." },
        { title: "Skan", text: "Karta jest skanowana." },
        { title: "Wydruk na produkcji", text: "Produkcja dostaje wydruk." },
        { title: "Telefon z wagami do biura", text: "Produkcja podaje biuru wagi produktów przez telefon." },
        { title: "Ręczny wpis do Comarch Optima", text: "Biuro ręcznie wystawia dokumenty WZ." },
      ],
    },
    {
      type: "solution",
      title: "Jeden cyfrowy obieg. Na ekranie ta sama karta, którą pracownicy znają z papieru.",
      intro: "Docelowo biuro wpisuje zamówienie na tablecie, produkcja widzi je od razu, a dokumenty WZ trafiają do Comarch Optima w pliku importu, bez przepisywania. Wiersze to sklepy jednej trasy, kolumny to produkty. Dane w tabeli są przykładowe.",
      table: {
        columns: ["Sklep / Produkt", "Mleko 2%", "Śmietana 18%", "Twaróg", "Jogurt nat."],
        rows: [
          ["Sklep Kowalski", "12", "6", "4", "8"],
          ["Delikatesy Zosia", "8", "4", "—", "6"],
          ["Sklep ABC", "20", "10", "8", "12"],
          ["Piekarnia Must", "6", "3", "2", "4"],
        ],
      },
      modulesTitle: "Moduły systemu (docelowo)",
      modules: [
        { title: "Biuro", text: "Wpisuje zamówienia, widzi status realizacji. W budowie." },
        { title: "Laboratorium", text: "Bilans masy. Wstrzymany do walidacji z laborantką." },
        { title: "Produkcja i magazyn", text: "Widzi zamówienia od razu, bez telefonów z wagą." },
        { title: "Zamówienia od dystrybutorów", text: "Osobny kanał wejścia danych do tego samego rdzenia." },
        { title: "Administrator", text: "Nadzoruje reguły, produkty, trasy i uprawnienia." },
      ],
    },
    {
      type: "results",
      title: "Co już sprawdziliśmy na realnym procesie.",
      intro: "Drugi programista w projekcie na co dzień uczestniczy w zbieraniu i przetwarzaniu zamówień, więc słabe punkty obiegu wskazaliśmy z obserwacji i udziału w nim. Liczby opisują dane, na których pracujemy, a nie efekty wdrożenia.",
      metrics: [
        { value: 41, label: "realnych dokumentów WZ" },
        { value: 22, suffix: "%", label: "dokumentów WZ z różnym płatnikiem i odbiorcą (w przybliżeniu)" },
        { value: 14, label: "tras dostaw" },
        { value: 227, label: "sklepów" },
        { value: 34, label: "produkty, w tym 4 na wagę" },
      ],
      proofs: [
        "Import plikowy WZ do Comarch Optima przetestowany na prawdziwych plikach, aż zadziałał bez błędów. To import pliku, nie bezpośrednia integracja przez API.",
        "Ustaliliśmy, że ceny tego samego produktu różnią się między klientami, i system musi to uwzględniać.",
        "Fundament systemu działa i ma testy.",
        "Zarząd chce zmiany, a pracownicy przyjęli pomysł z zaciekawieniem i chcą testować.",
      ],
    },
    {
      type: "impact",
      title: "Co jest jeszcze w budowie.",
      text: "Aplikacja biura jest w budowie. Moduł laboratorium świadomie wstrzymaliśmy, dopóki laborantka nie potwierdzi założeń bilansu masy. Prototyp nie korzysta jeszcze z AI.",
    },
    {
      type: "approach",
      title: "Najpierw ludzie, potem technologia.",
      quote: "Kreska w polu karty zamówień znaczy „ten sklep świadomie nie zamawia”.",
      quoteAuthor: "Dla pracowników kreska i puste pole znaczą co innego, więc system nie może tej różnicy zgubić.",
      cards: [
        { title: "Biuro", text: "Wiersz karty: sklep z trasy × produkty." },
        { title: "Księgowość", text: "Dokument WZ przyjmowany przez Comarch Optima bez ręcznych poprawek." },
        { title: "Dystrybucja", text: "Część trasy dostaw: jedna karta to jedna trasa." },
        { title: "Technologia żywności", text: "Bilans masy: ile śmietanki i mleka chudego da partia mleka pod daną recepturę." },
      ],
    },
    {
      type: "roadmap",
      title: "Plany na kolejne etapy",
      items: [
        { title: "Etap 1 w mleczarni", text: "Karta zamówień, wysyłka na produkcję, plik importu WZ do Comarch Optima, zestawienia sprzedaży." },
        { title: "Planowanie produkcji", text: "Moduł laboratorium i bilansu masy, po potwierdzeniu założeń przez laborantkę." },
        { title: "Kolejne zakłady", text: "Przetwórstwo spożywcze z własną dystrybucją. Mamy kontakt do kolejnej mleczarni." },
        { title: "Krótkie szkolenia z AI", text: "Dla pracowników, na przykładach z ich własnej pracy. Pracownik ma nadzorować system, a nie wykonywać powtarzalną pracę." },
      ],
    },
  ],
  // Wersja angielska: to, co widać na liście i w nagłówku. Szczegóły (sections) dojdą razem z opisem projektu.
  en: {
    title: "Digital order card for a dairy",
    description: "We are designing a digital order flow for a dairy, from the order card to importing WZ delivery notes into Comarch Optima.",
    lead: "A small local dairy in the Łódź region. An order goes from a phone call to a paper card, a scan, a printout and manual entry in Comarch. We are building a system that turns this into one digital flow, without changing what already works.",
    tags: ["Food production", "ERP integration", "Web app"],
    flow: ["Phone and paper card", "Digital card", "Production", "WZ in Comarch"],
    meta: {
      client: "Dairy, Łódź region",
      role: "Process analysis and system design (team of two)",
      status: "Starting deployment",
    },
    architecture: {
      columns: [
        { title: "Input", items: ["Phone orders", "Route card"] },
        { title: "Application", items: ["Web app (Node.js, TypeScript)", "Modules: office, production, distribution"] },
        { title: "Output", items: ["WZ import file for Comarch Optima"] },
      ],
      infra: "server, Docker, Linux",
    },
  },
};
