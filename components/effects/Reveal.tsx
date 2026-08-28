"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

/**
 * Level 2 motion: a single scroll-triggered reveal used across every section
 * so entrances share one timing curve. Opacity plus a short rise, once only.
 */

type Props = {
  children: ReactNode;
  /** Stagger index; 60ms apart, matching the reference's restrained cadence. */
  index?: number;
  className?: string;
  as?: "div" | "li" | "section";
};

export function Reveal({ children, index = 0, className, as = "div" }: Props) {
  const reduced = useReducedMotion();
  const Component = motion[as];

  return (
    <Component
      className={className}
      initial={reduced ? { opacity: 0 } : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{
        duration: reduced ? 0.2 : 0.5,
        delay: reduced ? 0 : index * 0.06,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </Component>
  );
}
