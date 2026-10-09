import Link from "next/link";
import { container, h1 } from "@/lib/ui";

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] items-center bg-ink pt-[104px] text-text-on-dark">
      <div className={container}>
        <h1 className={h1}>Tej strony nie ma.</h1>
        <Link href="/" className="mt-8 inline-flex min-h-[52px] items-center rounded-xs bg-paper px-7 font-semibold text-ink hover:bg-paper-soft">
          Wróć na stronę główną
        </Link>
      </div>
    </section>
  );
}
