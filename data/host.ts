import type { PartnerLogo } from "@/types/event";

/**
 * Host band.
 *
 * QFF26 is QuantumX's edition of IBM's Qiskit Fall Fest, so the two marks are
 * locked up as host and programme rather than listed among the partners. The
 * IBM Quantum mark is the same on-dark artwork the partner roster carries; the
 * QuantumX wordmark is trimmed to its ink so both size from their own mark.
 */
export const hostBand = {
  label: "QISKIT FALL FEST 2026",
  /** Split so the programme name can carry the purple accent. */
  lead: "Happy to host this year's",
  accent: "Qiskit Fall Fest",
  marks: {
    programme: {
      name: "IBM Quantum",
      logo: {
        src: "/images/partners/ibm-quantum.png",
        width: 800,
        height: 109,
      } satisfies PartnerLogo,
    },
    host: {
      name: "QuantumX",
      logo: {
        src: "/logos/quantumx-white.png",
        width: 800,
        height: 118,
      } satisfies PartnerLogo,
    },
  },
};
