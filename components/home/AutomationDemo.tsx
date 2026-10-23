"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";
import { Icon, type IconName } from "@/components/site/Icon";
import type { Lang } from "@/content/i18n";
import { container, h2, sectionY } from "@/lib/ui";

type Status = "idle" | "running" | "ok" | "error" | "retry";
type Step = { id: string; icon: IconName; name: { pl: string; en: string } };
type Event = { step: string; status: Status; log: { pl: string; en: string } };

const STEPS: Step[] = [
  { id: "form", icon: "form", name: { pl: "Formularz", en: "Lead form" } },
  { id: "n8n", icon: "cycle", name: { pl: "Webhook", en: "Webhook" } },
  { id: "check", icon: "check", name: { pl: "Walidacja danych", en: "Data validation" } },
  { id: "crm", icon: "users", name: { pl: "CRM", en: "CRM" } },
  { id: "sms", icon: "phone", name: { pl: "SMS", en: "Text message" } },
  { id: "mail", icon: "mail", name: { pl: "E-mail powitalny", en: "Welcome email" } },
  { id: "mon", icon: "pulse", name: { pl: "Monitoring", en: "Monitoring" } },
];

/** Przebieg zwykły: lead przechodzi przez wszystkie kroki. Dane są przykładowe. */
const HAPPY: Event[] = [
  { step: "form", status: "ok", log: { pl: "Nowe zgłoszenie: Anna K., tel. +48 *** *** 123", en: "New lead: Anna K., phone +48 *** *** 123" } },
  { step: "n8n", status: "ok", log: { pl: "Webhook odebrał zgłoszenie #4812", en: "Webhook received lead #4812" } },
  { step: "check", status: "ok", log: { pl: "Telefon i e-mail poprawne, brak duplikatu", en: "Phone and email valid, no duplicate" } },
  { step: "crm", status: "ok", log: { pl: "Kontakt utworzony, przypisany handlowiec", en: "Contact created, sales rep assigned" } },
  { step: "sms", status: "ok", log: { pl: "SMS wysłany: „Dziękujemy, oddzwonimy wkrótce”", en: "Text sent: “Thanks, we’ll call you back soon”" } },
  { step: "mail", status: "ok", log: { pl: "E-mail powitalny w kolejce wysyłki", en: "Welcome email queued" } },
  { step: "mon", status: "ok", log: { pl: "Metryka leads_total +1, wszystko działa", en: "leads_total +1, all good" } },
];

/** Przebieg z awarią: CRM nie odpowiada, workflow ponawia próbę i zgłasza alert. */
const FAILURE: Event[] = [
  HAPPY[0],
  HAPPY[1],
  HAPPY[2],
  { step: "crm", status: "error", log: { pl: "CRM nie odpowiada (504 timeout)", en: "CRM not responding (504 timeout)" } },
  { step: "crm", status: "retry", log: { pl: "Ponowna próba 1/3", en: "Retry 1/3" } },
  { step: "crm", status: "ok", log: { pl: "Kontakt utworzony przy drugiej próbie", en: "Contact created on the second attempt" } },
  HAPPY[4],
  HAPPY[5],
  { step: "mon", status: "ok", log: { pl: "Alert: chwilowa awaria CRM, kontakt utworzony po ponowieniu", en: "Alert: brief CRM outage, contact created after a retry" } },
];

const T = {
  pl: {
    title: "Zobacz automatyzację w akcji",
    lead: "Przykładowy przepływ tego typu: zgłoszenie z formularza trafia do CRM-u, klient dostaje SMS i e-mail, a monitoring pomaga wychwycić błędy. Kliknij i zobacz, co się dzieje krok po kroku, także wtedy, gdy coś po drodze padnie.",
    run: "Wyślij zgłoszenie",
    fail: "Symuluj awarię CRM",
    note: "Symulacja w przeglądarce, dane przykładowe.",
    log: "Dziennik",
    empty: "Kliknij przycisk, żeby uruchomić przepływ.",
    status: { idle: "czeka", running: "działa", ok: "gotowe", error: "błąd", retry: "ponawiam" },
  },
  en: {
    title: "See an automation in action",
    lead: "An example of this kind of flow: a form lead lands in the CRM, the customer gets a text and an email, and monitoring helps catch errors. Click to see what happens step by step, including when something fails along the way.",
    run: "Send a lead",
    fail: "Simulate a CRM outage",
    note: "Runs in your browser, sample data.",
    log: "Log",
    empty: "Click a button to run the flow.",
    status: { idle: "waiting", running: "running", ok: "done", error: "error", retry: "retrying" },
  },
} as const;

const statusClass: Record<Status, string> = {
  idle: "border-border bg-white text-text-muted",
  running: "border-accent bg-accent/10 text-ink",
  ok: "border-ink bg-ink text-text-on-dark",
  error: "border-red-700 bg-red-50 text-red-800",
  retry: "border-accent bg-accent/15 text-ink",
};

export function AutomationDemo({ lang }: { lang: Lang }) {
  const t = T[lang];
  const reduce = useReducedMotion();
  const [state, setState] = useState<Record<string, Status>>({});
  const [log, setLog] = useState<{ time: string; text: string; status: Status }[]>([]);
  const [running, setRunning] = useState(false);
  const timers = useRef<number[]>([]);
  const logRef = useRef<HTMLOListElement>(null);

  useEffect(() => () => timers.current.forEach(clearTimeout), []);
  useEffect(() => {
    // Przewijaj tylko sam dziennik, nigdy całą stronę.
    const el = logRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [log]);

  const play = (events: Event[]) => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
    setState({});
    setLog([]);
    setRunning(true);
    const step = reduce ? 0 : 650;
    const start = Date.now();
    events.forEach((e, i) => {
      timers.current.push(
        window.setTimeout(() => {
          setState((s) => ({ ...s, [e.step]: e.status === "ok" ? "running" : e.status }));
        }, i * step),
        window.setTimeout(() => {
          setState((s) => ({ ...s, [e.step]: e.status }));
          const ms = Date.now() - start;
          setLog((l) => [...l, { time: `+${(ms / 1000).toFixed(2)} s`, text: e.log[lang], status: e.status }]);
          if (i === events.length - 1) setRunning(false);
        }, i * step + (reduce ? 0 : step * 0.6)),
      );
    });
  };

  return (
    <section id="demo" className="scroll-mt-[72px] bg-paper">
      <div className={`${container} ${sectionY} grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16`}>
        <div className="flex flex-col gap-6">
          <h2 className={`${h2} mark-heading text-balance`}>{t.title}</h2>
          <p className="max-w-[52ch] text-[17px] leading-[165%] text-text-primary/85">{t.lead}</p>
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => play(HAPPY)}
              disabled={running}
              className="inline-flex min-h-[48px] cursor-pointer items-center gap-2 rounded-xs bg-accent px-5 text-[15px] font-semibold text-on-accent transition-opacity disabled:cursor-wait disabled:opacity-60"
            >
              <Icon name="bolt" className="size-4" />
              {t.run}
            </button>
            <button
              type="button"
              onClick={() => play(FAILURE)}
              disabled={running}
              className="inline-flex min-h-[48px] cursor-pointer items-center gap-2 rounded-xs border border-ink/30 px-5 text-[15px] font-semibold transition-colors hover:border-ink disabled:cursor-wait disabled:opacity-60"
            >
              <Icon name="pulse" className="size-4" />
              {t.fail}
            </button>
          </div>
          <p className="text-[14px] text-text-muted">{t.note}</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
          <ol className="flex flex-col gap-2">
            {STEPS.map((s) => {
              const st = state[s.id] ?? "idle";
              return (
                <li key={s.id} className={`flex items-center gap-3 rounded-xs border px-3 py-2.5 transition-colors duration-300 ${statusClass[st]}`}>
                  <Icon name={s.icon} className="size-5 shrink-0" />
                  <span className="flex-1 text-[15px] font-semibold">{s.name[lang]}</span>
                  <span className="text-[12px] font-semibold">{t.status[st]}</span>
                </li>
              );
            })}
          </ol>
          <div aria-live="polite" className="flex min-h-[280px] flex-col rounded-xs bg-ink p-4 text-text-on-dark">
            <p className="mb-3 text-[13px] font-semibold text-text-muted-on-dark">{t.log}</p>
            {log.length === 0 ? (
              <p className="text-[14px] text-text-muted-on-dark">{t.empty}</p>
            ) : (
              <ol ref={logRef} className="flex max-h-[320px] flex-col gap-2 overflow-y-auto font-mono text-[12.5px] leading-[1.5]">
                {log.map((l, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="shrink-0 tabular-nums text-text-muted-on-dark">{l.time}</span>
                    <span className={l.status === "error" ? "text-red-300" : l.status === "retry" ? "text-accent" : undefined}>{l.text}</span>
                  </li>
                ))}
              </ol>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
