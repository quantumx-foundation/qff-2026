import { event } from "@/data/event";
import { TBD } from "@/types/event";

/**
 * Schema.org Event data.
 *
 * tech.md section 20 allows structured data only for confirmed information.
 * Nothing is emitted until a start date exists, and each optional block is
 * gated on its own value, so unconfirmed facts never reach search results.
 *
 * QFF26 is hybrid, so it declares mixed attendance with both a physical place
 * and a virtual location.
 */
export function StructuredData() {
  if (!event.startsAt) return null;

  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.name,
    startDate: event.startsAt,
    url: event.urls.site,
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/MixedEventAttendanceMode",
    organizer: {
      "@type": "Organization",
      name: event.organisation,
      url: event.urls.site,
    },
  };

  if (event.endsAt) data.endDate = event.endsAt;

  const locations: Array<Record<string, unknown>> = [];

  if (event.city !== TBD) {
    locations.push({
      "@type": "Place",
      name: event.city,
      address: {
        "@type": "PostalAddress",
        addressLocality: event.city,
        ...(event.country ? { addressCountry: event.country } : {}),
      },
    });
  }

  // Remote attendance points at the event site until a stream URL is confirmed.
  locations.push({ "@type": "VirtualLocation", url: event.urls.site });

  if (locations.length) data.location = locations;

  return (
    <script
      type="application/ld+json"
      // Serialised from a typed object literal, never from user input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
