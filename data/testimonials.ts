import type { Testimonial } from "@/types/event";
import { CONTENT_PLACEHOLDER } from "@/types/event";

/**
 * Community quotes.
 *
 * project.md section 17 forbids inventing testimonials. A single explicitly
 * marked placeholder panel holds the composition until approved quotes exist;
 * emptying this array hides the section entirely.
 */
export const testimonials: Testimonial[] = [
  {
    id: "placeholder-1",
    quote: CONTENT_PLACEHOLDER,
    handle: null,
    name: "Awaiting approved quote",
    role: null,
    media: {
      src: null,
      alt: "",
      placeholderLabel: "COMMUNITY",
      width: 1400,
      height: 1000,
    },
    confirmed: false,
  },
];

export const testimonialsIntro = {
  label: "FROM THE COMMUNITY",
  heading: ["Highlights from the", "QFF26 community"],
};
