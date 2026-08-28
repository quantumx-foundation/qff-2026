import type { MetadataRoute } from "next";
import { event } from "@/data/event";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${event.urls.site}/sitemap.xml`,
    host: event.urls.site,
  };
}
