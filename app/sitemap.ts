import type { MetadataRoute } from "next";
import { event } from "@/data/event";

/** The footer documents change rarely; the homepage carries the event news. */
const DOCUMENT_PATHS = ["/terms", "/privacy", "/code-of-conduct", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: event.urls.site,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...DOCUMENT_PATHS.map((path) => ({
      url: `${event.urls.site}${path}`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    })),
  ];
}
