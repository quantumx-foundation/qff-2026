import type { MetadataRoute } from "next";
import { event } from "@/data/event";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: event.urls.site,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
