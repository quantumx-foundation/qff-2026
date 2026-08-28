import type { ValueBlock } from "@/types/event";
import { CONTENT_PLACEHOLDER } from "@/types/event";

/**
 * "Why QFF26" blocks.
 *
 * project.md section 12 defines these four as structural placeholders until
 * final approved copy is provided. Titles follow that structure; bodies are
 * explicit placeholders and are marked unconfirmed.
 */
export const values: ValueBlock[] = [
  {
    id: "research",
    title: "Research",
    body: CONTENT_PLACEHOLDER,
    media: {
      src: null,
      alt: "",
      placeholderLabel: "RESEARCH",
      width: 1200,
      height: 900,
    },
    confirmed: false,
  },
  {
    id: "builders",
    title: "Builders",
    body: CONTENT_PLACEHOLDER,
    media: {
      src: null,
      alt: "",
      placeholderLabel: "BUILDERS",
      width: 1200,
      height: 900,
    },
    confirmed: false,
  },
  {
    id: "industry",
    title: "Industry",
    body: CONTENT_PLACEHOLDER,
    media: {
      src: null,
      alt: "",
      placeholderLabel: "INDUSTRY",
      width: 1200,
      height: 900,
    },
    confirmed: false,
  },
  {
    id: "community",
    title: "Community",
    body: CONTENT_PLACEHOLDER,
    media: {
      src: null,
      alt: "",
      placeholderLabel: "COMMUNITY",
      width: 1200,
      height: 900,
    },
    confirmed: false,
  },
];
