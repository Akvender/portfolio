"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";
import { Arrow } from "@/components/site/Arrow";
import { Icon, type IconName } from "@/components/site/Icon";
import type { Lang } from "@/content/i18n";
import { uiExtra } from "@/content/ui-extra";
import { container, h2 } from "@/lib/ui";

type Status = "idle" | "running" | "ok" | "error" | "retry";
type Step = { id: string; icon: IconName; name: { pl: string; en: string } };
type Event = { step: string; status: Status; log: { pl: string; en: string } };
type LogEntry = { time: string; text: string; status: Status };

const STEPS: Step[] = [
  { id: "form", icon: "form", name: { pl: "Formularz", en: "Lead form" } },
  { id: "check", icon: "check", name: { pl: "Walidacja danych", en: "Data validation" } },
  { id: "crm", icon: "users", name: { pl: "CRM", en: "CRM" } },
  { id: "sms", icon: "phone", name: { pl: "SMS", en: "Text message" } },
  { id: "mail", icon: "mail", name: { pl: "E-mail powitalny", en: "Welcome email" } },
  { id: "mon", icon: "pulse", name: { pl: "Monitoring", en: "Monitoring" } },
];

const HAPPY: Event[] = [
  { step: "form", status: "ok", log: { pl: "Formularz: nowe zgłoszenie (Anna K.)", en: "Form: new lead (Anna K.)" } },
  { step: "check", status: "ok", log: { pl: "Walidacja: telefon i e-mail poprawne", en: "Validation: phone and email are correct" } },
  { step: "crm", status: "ok", log: { pl: "CRM: kontakt utworzony", en: "CRM: contact created" } },
  { step: "sms", status: "ok", log: { pl: "SMS: wiadomość wysłana", en: "Text: message sent" } },
  { step: "mail", status: "ok", log: { pl: "E-mail powitalny w kolejce", en: "Welcome email queued" } },
  { step: "mon", status: "ok", log: { pl: "Metryka leads_total +1, wszystko działa", en: "leads_total +1, all good" } },
];

const FAILURE: Event[] = [
  HAPPY[0],
  HAPPY[1],
  { step: "crm", status: "error", log: { pl: "CRM nie odpowiada (504 timeout)", en: "CRM not responding (504 timeout)" } },
  { step: "crm", status: "retry", log: { pl: "Ponowna próba 1/3", en: "Retry 1/3" } },
  { step: "crm", status: "ok", log: { pl: "CRM: kontakt utworzony po ponowieniu", en: "CRM: contact created after a retry" } },
  HAPPY[3],
  HAPPY[4],
  { step: "mon", status: "ok", log: { pl: "Alert: chwilowa awaria CRM, kontakt utworzony", en: "Alert: brief CRM outage, contact created" } },
];

const T = {
  pl: {
    title: "Kliknij i zobacz, co dzieje się krok po kroku.",
    lead: "Przykładowy przepływ: zgłoszenie z formularza trafia do CRM-u, klient dostaje SMS i e-mail, a monitoring pilnuje błędów. Symulacja w przeglądarce, dane przykładowe.",
    run: "Wyślij zgłoszenie",
    fail: "Symuluj awarię CRM",
    note: "Symulacja w przeglądarce, dane przykładowe.",
    log: "Dziennik",
    empty: "Kliknij „Wyślij zgłoszenie”, żeby uruchomić przepływ od nowa.",
    starting: "Uruchamiam przepływ…",
    status: { idle: "czeka", running: "w toku", ok: "gotowe", error: "błąd", retry: "ponawiam" },
  },
  en: {
    title: "Click and see what happens step by step.",
    lead: "An example flow: a form lead lands in the CRM, the customer gets a text and an email, and monitoring catches errors. It runs in your browser with sample data.",
    run: "Send a lead",
    fail: "Simulate a CRM outage",
    note: "Runs in your browser, sample data.",
    log: "Log",
    empty: "Click “Send a lead” to run the flow again.",
    starting: "Starting the flow…",
    status: { idle: "waiting", running: "running", ok: "done", error: "error", retry: "retrying" },
  },
} as const;

const initialLog = (lang: Lang): LogEntry[] => [
  { time: "10:42:01", text: HAPPY[0].log[lang], status: "ok" },
  { time: "10:42:01", text: HAPPY[1].log[lang], status: "ok" },
  { time: "10:42:02", text: lang === "pl" ? "CRM: zapisuję kontakt…" : "CRM: saving contact…", status: "running" },
  { time: "—", text: T[lang].empty, status: "idle" },
];

const statusClass: Record<Status, string> = {
  idle: "border-border bg-white text-text-muted",
  running: "border-accent bg-white text-ink",
  ok: "border-border bg-white text-ink",
  error: "border-red-700 bg-red-50 text-red-800",
  retry: "border-accent bg-white text-ink",
};

export function AutomationDemo({ lang }: { lang: Lang }) {
  const t = T[lang];
  const reduce = useReducedMotion();
  const [state, setState] = useState<Record<string, Status>>({ form: "ok", check: "ok", crm: "running" });
  const [log, setLog] = useState<LogEntry[]>(() => initialLog(lang));
  const [running, setRunning] = useState(false);
  const timers = useRef<number[]>([]);
  const logRef = useRef<HTMLOListElement>(null);

  useEffect(() => () => timers.current.forEach(clearTimeout), []);
  useEffect(() => {
    const element = logRef.current;
    if (element) element.scrollTop = element.scrollHeight;
  }, [log]);

  const play = (events: Event[]) => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
    setState({});
    setLog([{ time: "—", text: t.starting, status: "running" }]);
    setRunning(true);
    const step = reduce ? 0 : 650;
    const start = Date.now();
    events.forEach((event, index) => {
      timers.current.push(
        window.setTimeout(() => {
          setState((current) => ({ ...current, [event.step]: event.status === "ok" ? "running" : event.status }));
        }, index * step),
        window.setTimeout(() => {
          setState((current) => ({ ...current, [event.step]: event.status }));
          const elapsed = Date.now() - start;
          setLog((current) => [...current, { time: `+${(elapsed / 1000).toFixed(2)} s`, text: event.log[lang], status: event.status }]);
          if (index === events.length - 1) setRunning(false);
        }, index * step + (reduce ? 0 : step * 0.6)),
      );
    });
  };

  return (
    <section id="demo" className="scroll-mt-24 bg-paper-soft text-text-primary">
      <div className={`${container} py-16 md:py-20 lg:py-24`}>
        <p className="mb-4 font-mono text-[12px] font-medium uppercase tracking-[0.08em] text-text-muted">{uiExtra[lang].eyebrow.demo}</p>
        <h2 data-reveal="blur" className={`${h2} max-w-[22ch] text-balance`}>{t.title}</h2>
        <p className="mt-4 hidden max-w-[62ch] text-[17px] leading-[155%] text-text-muted lg:block">{t.lead}</p>

        <div className="mt-10 grid gap-5 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:gap-x-6">
          <ol className="flex flex-col gap-2.5">
            {STEPS.map((step) => {
              const status = state[step.id] ?? "idle";
              return (
                <li key={step.id} className={`flex min-h-[48px] items-center gap-3 rounded-md border px-4 py-2 transition-colors duration-200 ${statusClass[status]}`}>
                  <span className="flex-1 text-[15px] font-semibold">{step.name[lang]}</span>
                  <span className="font-mono text-[11px] font-medium">{t.status[status]}</span>
                </li>
              );
            })}
          </ol>

          <div className="flex min-h-[300px] flex-col rounded-xl bg-ink p-5 text-text-on-dark lg:row-span-2 lg:min-h-[400px]">
            <p className="mb-4 font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-text-muted-on-dark">{t.log}</p>
            <ol ref={logRef} aria-live="polite" className="flex max-h-[360px] flex-col gap-2.5 overflow-y-auto font-mono text-[12px] leading-[1.5]">
              {log.map((entry, index) => (
                <li key={`${entry.time}-${index}`} className="flex gap-3">
                  <span className="shrink-0 tabular-nums text-text-muted-on-dark">{entry.time}</span>
                  <span className={entry.status === "error" ? "text-red-300" : entry.status === "retry" || entry.status === "running" ? "text-accent" : undefined}>{entry.text}</span>
                </li>
              ))}
            </ol>
          </div>

          <div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => play(HAPPY)}
                disabled={running}
                className="group inline-flex min-h-[48px] cursor-pointer items-center justify-center gap-2 rounded-full bg-accent px-[22px] py-[14px] text-[15px] font-semibold text-on-accent transition-opacity disabled:cursor-wait disabled:opacity-60"
              >
                {t.run}<Arrow className="transition-transform duration-200 group-hover:translate-x-1" />
              </button>
              <button
                type="button"
                onClick={() => play(FAILURE)}
                disabled={running}
                className="group inline-flex min-h-[48px] cursor-pointer items-center justify-center gap-2 rounded-full border border-border px-[22px] py-[14px] text-[15px] font-semibold transition-colors hover:border-ink disabled:cursor-wait disabled:opacity-60"
              >
                {t.fail}<Arrow className="transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>
            <p className="mt-3 text-[13px] text-text-muted">{t.note}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
