import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";
import { event } from "@/data/event";
import { terms } from "@/data/legal";

export const metadata: Metadata = {
  title: terms.title,
  description: terms.summary,
  alternates: { canonical: `${event.urls.site}/terms` },
  openGraph: {
    type: "article",
    url: `${event.urls.site}/terms`,
    title: `${terms.title} | ${event.shortName}`,
    description: terms.summary,
  },
};

export default function TermsPage() {
  return <LegalPage doc={terms} />;
}
