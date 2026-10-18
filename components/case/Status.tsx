export function StatusBadge({ status, label, dark = false, className = "" }: { status: string; label: string; dark?: boolean; className?: string }) {
  if (!status) return null;
  return (
    <span
      className={`inline-flex w-fit max-w-full items-center gap-2 rounded-full border border-border-on-dark bg-ink-soft px-3 py-1.5 text-[13px] font-semibold leading-[1.3] text-text-on-dark ${className}`}
    >
      <span aria-hidden="true" className="size-2 shrink-0 rounded-full bg-ok" />
      <span className="sr-only">{label}: </span>
      <span className="min-w-0 [overflow-wrap:anywhere]">{status}</span>
    </span>
  );
}
