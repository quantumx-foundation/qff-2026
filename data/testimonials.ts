import type { Testimonial } from "@/types/event";

/**
 * Community quotes.
 *
 * Hidden until approved quotes exist: an empty list keeps the section off the
 * page (see Testimonials). project.md section 17 forbids inventing
 * testimonials, so the section stays off rather than running a marked
 * placeholder panel. Restore the placeholder from git when real quotes are
 * approved.
 */
export const testimonials: Testimonial[] = [];

export const testimonialsIntro = {
  label: "FROM THE COMMUNITY",
  heading: ["Highlights from the", "QFF26 community"],
};
