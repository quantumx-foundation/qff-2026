import type { Metadata } from "next";
import { GuidePage } from "@/components/layout/GuidePage";
import { event } from "@/data/event";
import { whyQiskit } from "@/data/guides";

export const metadata: Metadata = {
  title: whyQiskit.title,
  description: whyQiskit.summary,
  alternates: { canonical: `${event.urls.site}/why-qiskit` },
  openGraph: {
    type: "article",
    url: `${event.urls.site}/why-qiskit`,
    title: `${whyQiskit.title} | ${event.shortName}`,
    description: whyQiskit.summary,
  },
};

export default function WhyQiskitPage() {
  return <GuidePage doc={whyQiskit} />;
}
