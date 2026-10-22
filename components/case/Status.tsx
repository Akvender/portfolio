/** Etykieta statusu projektu (np. „Wdrożony, utrzymywany”, „Prototyp w rozwoju”). Pusty status = nic. */
export function StatusBadge({ status, label, dark = false, className = "" }: { status: string; label: string; dark?: boolean; className?: string }) {
  if (!status) return null;
  return (
    <span
      className={`inline-flex w-fit max-w-full items-center gap-2 rounded-xs border px-2.5 py-1 text-[13px] font-semibold leading-[1.3] ${
        dark ? "border-border-on-dark text-text-on-dark" : "border-border bg-paper text-text-primary"
      } ${className}`}
    >
      <span aria-hidden="true" className="size-2 shrink-0 bg-accent" />
      <span className="sr-only">{label}: </span>
      <span className="min-w-0 [overflow-wrap:anywhere]">{status}</span>
    </span>
  );
}
