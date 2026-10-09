/** Cienka strzałka (SVG, kolor z currentColor) w miejsce znaków →, ↗, ↓. */
const ROTATE = { right: 0, "up-right": -45, down: 90 } as const;

export function Arrow({ dir = "right", className = "" }: { dir?: keyof typeof ROTATE; className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 10"
      width="16"
      height="10"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="square"
      className={`inline-block shrink-0 ${className}`}
      style={ROTATE[dir] ? { rotate: `${ROTATE[dir]}deg` } : undefined}
    >
      <path d="M0 5h14M10 1l4 4-4 4" />
    </svg>
  );
}
