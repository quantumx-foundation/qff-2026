import { ImageResponse } from "next/og";
import { event } from "@/data/event";

export const alt = `${event.shortName} — ${event.organisation}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Social sharing image. Rendered at build time from the same tokens as the
 * page, so it never falls out of sync with the event configuration.
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#000000",
          padding: 72,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <svg width="60" height="47" viewBox="0 0 789 617" fill="#a16af3">
            <path d="M0 0h193l214 214H0V0Z" />
            <path d="M383 0h213v405L383 192V0Z" />
            <path d="M193 214l213 213v190H193V214Z" />
            <path d="M382 404h407v213H596L382 404Z" />
          </svg>
          <span
            style={{
              color: "#ffffff",
              fontSize: 40,
              fontWeight: 700,
              letterSpacing: -1,
            }}
          >
            {event.shortName}
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <span
            style={{
              color: "#ffffff",
              fontSize: 78,
              fontWeight: 700,
              letterSpacing: -3,
              lineHeight: 1.02,
              maxWidth: 900,
            }}
          >
            {event.organisation}
          </span>
          <span style={{ color: "#a16af3", fontSize: 26, letterSpacing: 3 }}>
            {event.registrationStatus.toUpperCase()}
          </span>
        </div>

        <div style={{ display: "flex", height: 14, width: "100%" }}>
          <div style={{ flex: 6, background: "#a16af3" }} />
          <div style={{ flex: 18, background: "#000000" }} />
          <div style={{ flex: 12, background: "#a16af3" }} />
          <div style={{ flex: 13, background: "#000000" }} />
          <div style={{ flex: 8, background: "#a16af3" }} />
        </div>
      </div>
    ),
    size,
  );
}
