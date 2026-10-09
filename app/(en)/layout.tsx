import { RootShell, pageMetadata } from "@/components/site/RootShell";
import "../globals.css";

export const metadata = pageMetadata("en", "/");

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return <RootShell lang="en">{children}</RootShell>;
}
