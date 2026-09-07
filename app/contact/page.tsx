import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";
import { event } from "@/data/event";
import { contact } from "@/data/legal";

export const metadata: Metadata = {
  title: contact.title,
  description: contact.summary,
  alternates: { canonical: `${event.urls.site}/contact` },
  openGraph: {
    type: "article",
    url: `${event.urls.site}/contact`,
    title: `${contact.title} | ${event.shortName}`,
    description: contact.summary,
  },
};

export default function ContactPage() {
  return <LegalPage doc={contact} />;
}
