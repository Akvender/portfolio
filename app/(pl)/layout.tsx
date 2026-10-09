import { RootShell, pageMetadata } from "@/components/site/RootShell";
import "../globals.css";

export const metadata = pageMetadata("pl", "/");

export default function PolishLayout({ children }: { children: React.ReactNode }) {
  return <RootShell lang="pl">{children}</RootShell>;
}
