import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";
import { event } from "@/data/event";
import { codeOfConduct } from "@/data/legal";

export const metadata: Metadata = {
  title: codeOfConduct.title,
  description: codeOfConduct.summary,
  alternates: { canonical: `${event.urls.site}/code-of-conduct` },
  openGraph: {
    type: "article",
    url: `${event.urls.site}/code-of-conduct`,
    title: `${codeOfConduct.title} | ${event.shortName}`,
    description: codeOfConduct.summary,
  },
};

export default function CodeOfConductPage() {
  return <LegalPage doc={codeOfConduct} />;
}
