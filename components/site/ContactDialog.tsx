"use client";

import { useEffect, useId, useRef, useState } from "react";
import { Arrow } from "@/components/site/Arrow";
import { Icon } from "@/components/site/Icon";
import { type Lang, ui } from "@/content/i18n";
import { site } from "@/content/site";

const OPEN_EVENT = "contact-open";

/** Otwiera okno kontaktu. Zwraca false, gdy okna nie ma na stronie (wtedy link działa normalnie). */
export function openContact(topic?: number) {
  if (!document.getElementById("okno-kontaktu")) return false;
  window.dispatchEvent(new CustomEvent(OPEN_EVENT, { detail: topic ?? null }));
  return true;
}

const mailto = (subject: string, body: string) =>
  `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

/**
 * Okno „Napisz do mnie”: temat, kilka zdań i gotowy e-mail w programie pocztowym.
 * Bez serwera: wiadomość otwiera się w poczcie odwiedzającego, a gdyby się nie otworzyła,
 * można ją skopiować razem z adresem. Natywny <dialog> daje Esc, pułapkę fokusu i tło.
 */
export function ContactDialog({ lang }: { lang: Lang }) {
  const t = ui[lang].contact;
  const f = ui[lang].contactForm;
  const ref = useRef<HTMLDialogElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const [topic, setTopic] = useState(0);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const [ready, setReady] = useState(false);
  const [copied, setCopied] = useState<"message" | "email" | null>(null);
  const ids = { title: useId(), message: useId(), name: useId(), error: useId() };

  const subject = `${t.topics[topic].subject}${name.trim() ? ` · ${name.trim()}` : ""}`;

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    const onOpen = (e: Event) => {
      const detail = (e as CustomEvent<number | null>).detail;
      if (detail !== null) setTopic(detail);
      setReady(false);
      setError(false);
      dialog.showModal();
      window.dispatchEvent(new CustomEvent("scroll-lock", { detail: true }));
      // Na telefonie nie wysuwaj od razu klawiatury.
      if (window.matchMedia("(min-width: 768px)").matches) messageRef.current?.focus();
    };
    const onClose = () => window.dispatchEvent(new CustomEvent("scroll-lock", { detail: false }));
    window.addEventListener(OPEN_EVENT, onOpen);
    dialog.addEventListener("close", onClose);
    return () => {
      window.removeEventListener(OPEN_EVENT, onOpen);
      dialog.removeEventListener("close", onClose);
    };
  }, []);

  const copy = async (what: "message" | "email") => {
    const text = what === "email" ? site.email : `${site.email}\n${subject}\n\n${message.trim()}`;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(what);
      setTimeout(() => setCopied(null), 2500);
    } catch {
      /* schowek niedostępny: adres i tak jest widoczny do zaznaczenia */
    }
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) {
      setError(true);
      messageRef.current?.focus();
      return;
    }
    window.location.href = mailto(subject, message.trim());
    setReady(true);
  };

  const field =
    "w-full rounded-xs border border-border-on-dark bg-ink-strong px-4 py-3 text-[16px] text-text-on-dark placeholder:text-text-muted-on-dark/70 transition-colors focus:border-accent focus:outline-none";

  return (
    <dialog
      ref={ref}
      id="okno-kontaktu"
      aria-labelledby={ids.title}
      data-lenis-prevent
      onClick={(e) => e.target === ref.current && ref.current?.close()}
      className="contact-dialog m-0 ml-auto h-dvh max-h-dvh w-full max-w-[560px] overflow-y-auto overscroll-contain border-l border-border-on-dark bg-ink p-0 text-text-on-dark backdrop:bg-ink-strong/70"
    >
      <div className="flex min-h-full flex-col gap-8 px-6 py-6 sm:px-10 sm:py-8">
        <div className="flex items-start justify-between gap-6">
          <h2 id={ids.title} className="font-display text-[clamp(28px,4vw,40px)] font-extrabold leading-[1.05] tracking-[-0.025em]">
            {ready ? f.readyTitle : f.title}
          </h2>
          <button
            type="button"
            onClick={() => ref.current?.close()}
            aria-label={f.close}
            className="-mr-2 inline-flex size-11 shrink-0 cursor-pointer items-center justify-center rounded-xs text-text-muted-on-dark transition-colors hover:text-accent"
          >
            <Icon name="close" className="size-6" />
          </button>
        </div>

        {ready ? (
          <div className="flex flex-col gap-6">
            <p className="text-[17px] leading-[160%] text-text-muted-on-dark">{f.readyText}</p>
            <p className="font-mono text-[15px] text-text-on-dark select-all">{site.email}</p>
            <div className="rounded-xs border border-border-on-dark bg-ink-strong p-4 text-[15px] leading-[160%]">
              <p className="font-semibold">{subject}</p>
              <p className="mt-2 whitespace-pre-line text-text-muted-on-dark">{message.trim()}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => copy("message")}
                className="inline-flex min-h-[52px] cursor-pointer items-center gap-2 rounded-xs bg-accent px-6 text-[16px] font-semibold text-on-accent transition-colors hover:bg-[#ff8a3d]"
              >
                <Icon name={copied === "message" ? "check" : "copy"} className="size-[18px]" />
                {copied === "message" ? t.copied : f.copyMessage}
              </button>
              <button
                type="button"
                onClick={() => setReady(false)}
                className="inline-flex min-h-[52px] cursor-pointer items-center rounded-xs border border-border-on-dark px-6 text-[16px] font-semibold transition-colors hover:border-text-muted-on-dark"
              >
                {f.edit}
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={submit} noValidate className="flex flex-col gap-7">
            <p className="-mt-3 text-[17px] leading-[160%] text-text-muted-on-dark">{f.lead}</p>

            <fieldset className="flex flex-col gap-3">
              <legend className="mb-3 text-[14px] font-semibold">{f.topic}</legend>
              <div className="flex flex-wrap gap-2">
                {t.topics.map((tp, i) => (
                  <label
                    key={tp.subject}
                    className="cursor-pointer rounded-xs border border-border-on-dark px-4 py-2.5 text-[15px] font-semibold transition-colors hover:border-text-muted-on-dark has-[:checked]:border-accent has-[:checked]:bg-accent has-[:checked]:text-on-accent has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-accent"
                  >
                    <input type="radio" name="temat" className="sr-only" checked={topic === i} onChange={() => setTopic(i)} />
                    {tp.label}
                  </label>
                ))}
              </div>
            </fieldset>

            <div className="flex flex-col gap-2">
              <label htmlFor={ids.message} className="text-[14px] font-semibold">
                {f.message}
              </label>
              <textarea
                ref={messageRef}
                id={ids.message}
                rows={6}
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                  if (error) setError(false);
                }}
                placeholder={t.topics[topic].hint}
                aria-invalid={error}
                aria-describedby={error ? ids.error : undefined}
                className={`${field} min-h-[160px] resize-y leading-[150%]`}
              />
              {error && (
                <p id={ids.error} className="text-[14px] font-semibold text-accent">
                  {f.empty}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor={ids.name} className="text-[14px] font-semibold">
                {f.name}
              </label>
              <input id={ids.name} type="text" autoComplete="organization" value={name} onChange={(e) => setName(e.target.value)} className={field} />
            </div>

            <button
              type="submit"
              className="group inline-flex min-h-[56px] cursor-pointer items-center justify-center gap-3 self-start rounded-xs bg-accent px-7 text-[16px] font-semibold text-on-accent transition-[background-color,transform] duration-200 hover:bg-[#ff8a3d] active:scale-[0.98]"
            >
              {f.submit}
              <Arrow className="transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </form>
        )}

        <div className="mt-auto flex flex-col gap-3 border-t border-border-on-dark pt-6">
          <p className="text-[14px] font-semibold text-text-muted-on-dark">{f.or}</p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[15px] font-semibold">
            <button type="button" onClick={() => copy("email")} className="inline-flex min-h-[44px] cursor-pointer items-center gap-2 transition-colors hover:text-accent">
              <Icon name={copied === "email" ? "check" : "copy"} className="size-[18px] text-text-muted-on-dark" />
              {copied === "email" ? t.copied : t.copy}
            </button>
            {site.linkedin && (
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[44px] items-center gap-2 transition-colors hover:text-accent">
                LinkedIn
                <Arrow dir="up-right" />
              </a>
            )}
          </div>
          <p aria-live="polite" className="sr-only">
            {copied ? t.copied : ""}
          </p>
        </div>
      </div>
    </dialog>
  );
}
