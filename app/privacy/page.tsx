import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";
import { event } from "@/data/event";
import { privacy } from "@/data/legal";

export const metadata: Metadata = {
  title: privacy.title,
  description: privacy.summary,
  alternates: { canonical: `${event.urls.site}/privacy` },
  openGraph: {
    type: "article",
    url: `${event.urls.site}/privacy`,
    title: `${privacy.title} | ${event.shortName}`,
    description: privacy.summary,
  },
};

export default function PrivacyPage() {
  return <LegalPage doc={privacy} />;
}
