import type { ValueBlock } from "@/types/event";

/**
 * "Why QFF26" blocks.
 *
 * project.md section 12 defines these four blocks; the copy below is the
 * approved wording. `summary` is the line that stays visible under each title,
 * `body` is revealed when the block is opened, and `tag` closes the open panel
 * as mono metadata.
 */
export const values: ValueBlock[] = [
  {
    id: "builders",
    title: "Builders",
    summary: "For the people turning quantum into something real.",
    body: "Engineers, founders, developers, and researchers building the next generation of quantum systems. Share what you're building, find collaborators, leave with ideas worth shipping.",
    tag: "BUILDERS • BUILD • ITERATE",
    media: {
      src: "/images/values/builders.jpg",
      alt: "An engineer in lab gloves adjusting the gold-plated wiring stages of a dilution refrigerator.",
      placeholderLabel: "BUILDERS",
      width: 1533,
      height: 1026,
    },
    confirmed: true,
  },
  {
    id: "research",
    title: "Research",
    summary: "Where frontier ideas become working systems.",
    body: "Researchers from across quantum computing, cryptography, hardware, software, networking, and emerging quantum technologies. Share new work, challenge assumptions, move research closer to reality.",
    tag: "RESEARCH • FRONTIER TECHNOLOGY",
    media: {
      src: "/images/values/research.jpg",
      alt: "Researchers at a shared table with laptops while a colleague works through equations on a whiteboard.",
      placeholderLabel: "RESEARCH",
      width: 1536,
      height: 1024,
    },
    confirmed: true,
  },
  {
    id: "industry",
    title: "Industry",
    summary: "Research meeting the systems the world will actually use.",
    body: "A meeting point between frontier research and industry. Technology leaders, companies, investors, and practitioners exploring where quantum creates real-world value.",
    tag: "INDUSTRY • APPLICATIONS • OPPORTUNITY",
    media: {
      src: "/images/values/industry.jpg",
      alt: "Three people talking over coffee at a standing table during a conference networking break.",
      placeholderLabel: "INDUSTRY",
      width: 1536,
      height: 1024,
    },
    confirmed: true,
  },
  {
    id: "community",
    title: "Community",
    summary: "A community forming around the quantum future.",
    body: "More than a conference. A gathering of people who believe the quantum era should be built, not watched from the sidelines. Meet the people pushing the field forward.",
    tag: "COMMUNITY • CONNECTION • FUTURE",
    media: {
      src: "/images/values/community.jpg",
      alt: "A packed conference audience seen from behind, one attendee raising a hand to ask a question.",
      placeholderLabel: "COMMUNITY",
      width: 614,
      height: 408,
    },
    confirmed: true,
  },
];
