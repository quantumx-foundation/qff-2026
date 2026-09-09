import { event } from "./event";

/**
 * Community band.
 *
 * The copy is the published Discord invitation from the QFF26 event listings,
 * not new marketing prose. The destination resolves from `event.socials` so
 * there is one Discord URL in the codebase: if the invite is ever rotated, it
 * changes in `data/event.ts` and every reference follows.
 *
 * `null` when no Discord handle is listed, which hides the section, the same
 * empty-data convention every other section uses.
 */
const discord = event.socials.find((s) => s.icon === "discord") ?? null;

export const community = discord
  ? {
      label: "COMMUNITY",
      heading: ["Join the QFF26", "Discord"],
      body: "Stay on top of event updates and connect with folks in the quantum tech space: mentors, speakers, and everyone else building through the festival.",
      cta: { label: "Join Discord server", href: discord.href },
    }
  : null;
