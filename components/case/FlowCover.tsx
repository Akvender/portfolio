import { PATHS, type IconName } from "@/components/site/Icon";

/**
 * Okładka projektu w stylu kanwy n8n, w barwach strony: kroki `flow` jako kafelki-węzły z ikoną,
 * podpis pod spodem, punkty połączeń (kółko = wyjście, prostokąt = wejście), połączenia z płynącą
 * „paczką danych”. Pierwszy węzeł to wyzwalacz (zaokrąglony z lewej, błyskawica), ostatni to efekt
 * (pomarańczowa obwódka, ✓). Używana, dopóki projekt nie ma prawdziwego zrzutu (pole `cover`).
 * Dwa układy: poziomy (od md) i pionowy (telefon).
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

/** Prostokąt z osobnymi promieniami z lewej i z prawej (wyzwalacz: mocno zaokrąglony z lewej). */
const shape = (x: number, y: number, s: number, rl: number, rr: number) =>
  `M${x + rl} ${y}H${x + s - rr}A${rr} ${rr} 0 0 1 ${x + s} ${y + rr}V${y + s - rr}A${rr} ${rr} 0 0 1 ${x + s - rr} ${y + s}` +
  `H${x + rl}A${rl} ${rl} 0 0 1 ${x} ${y + s - rl}V${y + rl}A${rl} ${rl} 0 0 1 ${x + rl} ${y}Z`;

function Glyph({ name, x, y, size, className }: { name: IconName; x: number; y: number; size: number; className: string }) {
  return (
    <svg x={x} y={y} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d={PATHS[name]} />
    </svg>
  );
}

type Pos = { x: number; y: number };
type Layout = { W: number; H: number; S: number; nodes: Pos[]; vertical: boolean; font: number; maxChars: number };

function Canvas({ id, flow, icons, caption, tags, ends, L }: { id: string; flow: string[]; icons: IconName[]; caption: string; tags: string; ends: [string, string]; L: Layout }) {
  const { W, H, S, nodes, vertical, font, maxChars } = L;
  const last = flow.length - 1;
  // Punkty połączeń: wyjście (kółko) i wejście (prostokąt) na bokach węzła; w pionie — dół i góra.
  const out = (p: Pos) => (vertical ? { x: p.x + S / 2, y: p.y + S } : { x: p.x + S, y: p.y + S / 2 });
  const inn = (p: Pos) => (vertical ? { x: p.x + S / 2, y: p.y } : { x: p.x, y: p.y + S / 2 });
  const links = nodes.slice(1).map((b, i) => {
    const a = out(nodes[i]), c = inn(b);
    const d = vertical
      ? `M${a.x} ${a.y + 10}C${a.x} ${(a.y + c.y) / 2} ${c.x} ${(a.y + c.y) / 2} ${c.x} ${c.y - 8}`
      : `M${a.x + 10} ${a.y}C${(a.x + c.x) / 2} ${a.y} ${(a.x + c.x) / 2} ${c.y} ${c.x - 8} ${c.y}`;
    return { d, a, c };
  });

  return (
    <svg viewBox={`0 0 ${W} ${H}`} aria-hidden="true" className="block h-auto w-full">
      <defs>
        <pattern id={`${id}-dots`} width="32" height="32" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.6" className="fill-border-on-dark" />
        </pattern>
      </defs>
      <rect width={W} height={H} className="fill-ink" />
      <rect width={W} height={H} fill={`url(#${id}-dots)`} />

      <rect x="56" y="52" width="16" height="16" className="fill-accent" />
      <text x="86" y="68" className="fill-text-muted-on-dark font-display" fontSize="26" fontWeight="700">{caption}</text>
      <text x="56" y={H - 48} className="fill-text-muted-on-dark font-display" fontSize="24" fontWeight="600">{tags}</text>

      {links.map(({ d }, i) => (
        <g key={i}>
          <path d={d} className="stroke-text-muted-on-dark" strokeOpacity="0.55" strokeWidth="3" fill="none" />
          {/* „Paczka danych” płynąca do kolejnego węzła; przy reduced motion schowana (CSS). */}
          <circle r="7" className="flow-dot fill-accent">
            <animateMotion dur="1.8s" repeatCount="indefinite" begin={`${i * 0.6}s`} path={d} />
          </circle>
        </g>
      ))}

      {nodes.map((p, i) => {
        const isFirst = i === 0, isLast = i === last;
        const o = out(p), n = inn(p);
        const lines = wrap(flow[i], maxChars);
        const lh = font * 1.15;
        const icon = S * 0.42;
        return (
          <g key={i}>
            <path
              d={shape(p.x, p.y, S, isFirst ? S * 0.42 : 16, 16)}
              className={isLast ? "fill-ink-soft stroke-accent" : "fill-ink-soft stroke-border-on-dark"}
              strokeWidth={isLast ? 4 : 2.5}
            />
            <Glyph name={icons[i] ?? "bolt"} x={p.x + (S - icon) / 2} y={p.y + (S - icon) / 2} size={icon} className={isLast ? "text-accent" : "text-text-on-dark"} />
            {/* Wejście (prostokąt) i wyjście (kółko) jak w n8n. */}
            {!isFirst && (vertical
              ? <rect x={n.x - 12} y={n.y - 5} width="24" height="10" rx="3" className="fill-text-muted-on-dark" />
              : <rect x={n.x - 5} y={n.y - 12} width="10" height="24" rx="3" className="fill-text-muted-on-dark" />)}
            {!isLast && <circle cx={o.x} cy={o.y} r="8" className="fill-ink stroke-text-muted-on-dark" strokeWidth="3" />}
            {/* Wyzwalacz: błyskawica obok; efekt: znaczek ✓. */}
            {isFirst && <Glyph name="bolt" x={vertical ? p.x - 46 : p.x - 2} y={vertical ? p.y + 8 : p.y - 46} size={34} className="text-accent" />}
            {isLast && (
              <g>
                <circle cx={p.x + S - 6} cy={p.y + 6} r="20" className="fill-accent" />
                <Glyph name="check" x={p.x + S - 20} y={p.y - 8} size={28} className="text-ink" />
              </g>
            )}
            <text className="fill-text-on-dark font-display" fontSize={font} fontWeight="700" textAnchor={vertical ? "start" : "middle"}>
              {lines.map((l, j) => (
                <tspan
                  key={j}
                  x={vertical ? p.x + S + 40 : p.x + S / 2}
                  y={vertical ? p.y + S / 2 + font * 0.35 - ((lines.length - 1) * lh) / 2 + j * lh + (isFirst ? 18 : 0) : p.y + S + 56 + j * lh}
                >
                  {l}
                </tspan>
              ))}
            </text>
            {/* Małe etykiety „Start” / „Efekt” pod pierwszym i ostatnim węzłem. */}
            {(isFirst || isLast) && (
              <text
                x={vertical ? p.x + S + 40 : p.x + S / 2}
                y={vertical ? p.y + S / 2 - font * 0.55 - ((lines.length - 1) * lh) / 2 + (isFirst ? 18 : 0) : p.y + S + 56 + lines.length * lh + 2}
                textAnchor={vertical ? "start" : "middle"}
                className={isLast ? "fill-accent font-display" : "fill-text-muted-on-dark font-display"}
                fontSize={vertical ? 28 : 24}
                fontWeight="700"
              >
                {isFirst ? ends[0] : ends[1]}
              </text>
            )}
          </g>
        );
      })}
    </svg>
  );
}

export function FlowCover({ id, flow, icons, caption, label, ends, tags = [] }: {
  id: string; flow: string[]; icons: IconName[]; caption: string; label: string; ends: [string, string]; tags?: string[];
}) {
  const n = flow.length;
  const tagLine = tags.join("  ·  ");

  // Poziomo (16:9): węzły w jednym rzędzie, podpisy pod spodem.
  const W = 1600, H = 900, S = 170, m = 150;
  const step = (W - 2 * m - S) / Math.max(n - 1, 1);
  const horizontal: Layout = {
    W, H, S, vertical: false,
    nodes: flow.map((_, i) => ({ x: m + i * step, y: 320 })),
    font: 34, maxChars: Math.floor((step - 40) / 19),
  };

  // Pionowo (telefon): węzły jeden pod drugim, podpisy z prawej.
  const VS = 150, vgap = 90, top = 130;
  const vertical: Layout = {
    W: 900, H: top + n * VS + (n - 1) * vgap + 120, S: VS, vertical: true,
    nodes: flow.map((_, i) => ({ x: 90, y: top + i * (VS + vgap) })),
    font: 46, maxChars: 22,
  };

  return (
    <div role="img" aria-label={label} className="overflow-hidden rounded-xs">
      <div className="hidden md:block">
        <Canvas id={`${id}-h`} flow={flow} icons={icons} caption={caption} tags={tagLine} ends={ends} L={horizontal} />
      </div>
      <div className="md:hidden">
        <Canvas id={`${id}-v`} flow={flow} icons={icons} caption={caption} tags={tagLine} ends={ends} L={vertical} />
      </div>
    </div>
  );
}
