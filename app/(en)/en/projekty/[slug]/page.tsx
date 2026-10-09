import { CaseView, caseMetadata, caseStaticParams } from "@/components/site/Pages";

export const dynamicParams = false;
export const generateStaticParams = caseStaticParams;

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  return caseMetadata("en", (await params).slug);
}

export default async function CaseStudyPage({ params }: Props) {
  return <CaseView lang="en" slug={(await params).slug} />;
}
