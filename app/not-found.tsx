import Link from "next/link";
import { container, h1, sectionLabel } from "@/lib/ui";

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] items-center bg-ink pt-[72px] text-text-on-dark">
      <div className={container}>
        <p className={`${sectionLabel} text-accent-amber`}>Błąd 404</p>
        <h1 className={`${h1} mt-4`}>Tej strony nie ma.</h1>
        <Link href="/" className="mt-8 inline-flex min-h-[52px] items-center rounded-full bg-accent-green px-7 font-semibold hover:bg-accent-green-dark">
          Wróć na stronę główną
        </Link>
      </div>
    </section>
  );
}
