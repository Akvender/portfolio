/**
 * Okładka projektu narysowana z jego przepływu (project.flow): kroki na granacie, połączone
 * pomarańczowymi strzałkami, ostatni krok (efekt) wyróżniony. Używana, dopóki projekt nie ma
 * prawdziwego zrzutu (pole `cover`). Dwa układy: poziomy (od md) i pionowy (telefon), żeby
 * napisy były czytelne na każdym ekranie.
 */

/** Dzieli etykietę na maks. 2 linie po ~maxChars znaków (po słowach). */
function wrap(text: string, maxChars: number): string[] {
  const lines: string[] = [];
  for (const word of text.split(" ")) {
    const last = lines[lines.length - 1];
    if (last !== undefined && (last + " " + word).length <= maxChars) lines[lines.length - 1] = `${last} ${word}`;
    else lines.push(word);
  }
  return lines.length > 2 ? [lines[0], lines.slice(1).join(" ")] : lines;
}

type Node = { x: number; y: number; w: number; h: number };

function Diagram({ id, flow, caption, tags, W, H, nodes, font, maxChars, arrows }: {
  id: string; flow: string[]; caption: string; tags: string; W: number; H: number; nodes: Node[]; font: number; maxChars: number;
  arrows: string[];
}) {
  return (
    <svg viewBox={`0 0 ${W} ${H}`} aria-hidden="true" className="block h-auto w-full">
      <defs>
        <pattern id={`${id}-dots`} width="40" height="40" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="2" className="fill-border-on-dark" />
        </pattern>
        <marker id={`${id}-arrow`} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
          <path d="M0 0 10 5 0 10z" className="fill-accent" />
        </marker>
      </defs>
      <rect width={W} height={H} className="fill-ink" />
      <rect width={W} height={H} fill={`url(#${id}-dots)`} opacity="0.7" />
      <rect x="64" y="58" width="18" height="18" className="fill-accent" />
      <text x="96" y="76" className="fill-text-muted-on-dark font-display" fontSize="28" fontWeight="700" letterSpacing="1">
        {caption}
      </text>
      <text x="64" y={H - 56} className="fill-text-muted-on-dark font-display" fontSize="28" fontWeight="600">
        {tags}
      </text>

      {arrows.map((d, i) => (
        <g key={i}>
          <path d={d} className="stroke-border-on-dark" strokeWidth="4" fill="none" />
          <path d={d} className="flow-dash stroke-accent" strokeWidth="4" fill="none" strokeDasharray="10 16" markerEnd={`url(#${id}-arrow)`} />
        </g>
      ))}

      {flow.map((label, i) => {
        const n = nodes[i];
        const last = i === flow.length - 1;
        const lines = wrap(label, maxChars);
        const lh = font * 1.15;
        const top = n.y + n.h - 40 - (lines.length - 1) * lh;
        return (
          <g key={i}>
            <rect x={n.x} y={n.y} width={n.w} height={n.h} rx="10" className={last ? "fill-ink-soft stroke-accent" : "fill-ink-soft stroke-border-on-dark"} strokeWidth={last ? 4 : 2} />
            <text x={n.x + 32} y={n.y + 60} className="fill-accent font-display" fontSize="30" fontWeight="800">
              {String(i + 1).padStart(2, "0")}
            </text>
            <text className="fill-text-on-dark font-display" fontSize={font} fontWeight="800" letterSpacing="-0.5">
              {lines.map((l, j) => (
                <tspan key={j} x={n.x + 32} y={top + j * lh}>
                  {l}
                </tspan>
              ))}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

export function FlowCover({ id, flow, caption, label, tags = [] }: { id: string; flow: string[]; caption: string; label: string; tags?: string[] }) {
  const tagLine = tags.join("  ·  ");
  const n = flow.length;

  // Poziomo (16:9): kroki w jednym rzędzie.
  const W = 1600, H = 900, m = 64, gap = 72;
  const w = (W - 2 * m - gap * (n - 1)) / n, h = 300, y = 330;
  const row = flow.map((_, i) => ({ x: m + i * (w + gap), y, w, h }));
  const rowArrows = row.slice(1).map((b, i) => `M${row[i].x + w + 8} ${y + h / 2} H${b.x - 10}`);

  // Pionowo (telefon): kroki jeden pod drugim.
  const VW = 900, vh = 190, vgap = 70, vy0 = 130;
  const VH = vy0 + n * vh + (n - 1) * vgap + 130;
  const col = flow.map((_, i) => ({ x: 64, y: vy0 + i * (vh + vgap), w: VW - 128, h: vh }));
  const colArrows = col.slice(1).map((b, i) => `M${VW / 2} ${col[i].y + vh + 8} V${b.y - 10}`);

  return (
    <div role="img" aria-label={label} className="overflow-hidden rounded-xs">
      <div className="hidden md:block">
        <Diagram id={`${id}-h`} flow={flow} caption={caption} tags={tagLine} W={W} H={H} nodes={row} font={n > 3 ? 40 : 50} maxChars={n > 3 ? 12 : 16} arrows={rowArrows} />
      </div>
      <div className="md:hidden">
        <Diagram id={`${id}-v`} flow={flow} caption={caption} tags={tagLine} W={VW} H={VH} nodes={col} font={54} maxChars={24} arrows={colArrows} />
      </div>
    </div>
  );
}
