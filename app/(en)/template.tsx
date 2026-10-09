/** Remontowany przy każdej nawigacji — CSS-owy fade + slide 16 px jako przejście między stronami. */
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page-enter">{children}</div>;
}
