import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { Arrow } from "./Arrow";
import { cn } from "@/lib/utils";

/**
 * Buttons follow the reference exactly: sharp corners, uppercase mono with wide
 * tracking, and a diagonal arrow. Primary is white on black; secondary is a
 * 1px full-white rule on transparent. Hover inverts and nudges the arrow — no
 * glow, scale or gradient.
 */

type Variant = "primary" | "secondary" | "onPurple";

const BASE =
  "group inline-flex items-center justify-center gap-2.5 whitespace-nowrap px-5 py-3 label-mono font-bold transition-colors duration-200";

const VARIANTS: Record<Variant, string> = {
  primary:
    "bg-qff-white text-qff-black hover:bg-qff-purple hover:text-qff-black",
  secondary:
    "border border-qff-white/95 text-qff-white hover:bg-qff-white hover:text-qff-black",
  onPurple:
    "bg-qff-black text-qff-white hover:bg-qff-white hover:text-qff-black",
};

type Props = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  showArrow?: boolean;
  /** Rendered before the label, e.g. the play glyph on the recap CTA. */
  leading?: ReactNode;
} & Omit<ComponentProps<typeof Link>, "href" | "children" | "className">;

export function Button({
  href,
  children,
  variant = "primary",
  className,
  showArrow = true,
  leading,
  ...rest
}: Props) {
  const external = href.startsWith("http");
  const content = (
    <>
      {leading}
      <span>{children}</span>
      {showArrow ? (
        <Arrow className="transition-transform duration-200 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
      ) : null}
    </>
  );

  return (
    <Link
      href={href}
      className={cn(BASE, VARIANTS[variant], className)}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      {...rest}
    >
      {content}
    </Link>
  );
}
