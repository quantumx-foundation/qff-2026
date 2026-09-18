import type { Metadata } from "next";
import { GuidePage } from "@/components/layout/GuidePage";
import { event } from "@/data/event";
import { resources } from "@/data/guides";

export const metadata: Metadata = {
  title: resources.title,
  description: resources.summary,
  alternates: { canonical: `${event.urls.site}/resources` },
  openGraph: {
    type: "article",
    url: `${event.urls.site}/resources`,
    title: `${resources.title} | ${event.shortName}`,
    description: resources.summary,
  },
};

export default function ResourcesPage() {
  return <GuidePage doc={resources} />;
}
