import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { Arrow } from "./Arrow";
import { cn } from "@/lib/utils";

/**
 * Buttons follow the reference exactly: sharp corners, uppercase mono with wide
 * tracking, and a diagonal arrow. Hover inverts and nudges the arrow, no glow,
 * scale or gradient.
 *
 * Every variant is written in semantic tokens, so the same button reads as
 * plum-on-white on the page and white-on-plum inside an `.on-dark` band with
 * nothing passed at the call site. `onBand` is for the reverse case: a button
 * on a band whose ground is already the inverse colour.
 */

type Variant = "primary" | "secondary" | "onBand";

const BASE =
  "group inline-flex items-center justify-center gap-2.5 whitespace-nowrap px-5 py-3 label-mono font-bold transition-colors duration-200";

const VARIANTS: Record<Variant, string> = {
  primary:
    "bg-inverse text-on-inverse hover:bg-accent hover:text-on-inverse",
  secondary:
    "border border-ink text-ink hover:bg-inverse hover:text-on-inverse",
  onBand:
    "bg-raised text-ink hover:bg-inverse hover:text-on-inverse",
};

type Props = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  showArrow?: boolean;
  /** Rendered before the label, e.g. the play glyph on the recap CTA. */
  leading?: ReactNode;
} & Omit<ComponentProps<"a">, "href" | "children" | "className">;

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
  // An in-page jump. next/link treats a click on the hash the URL already
  // carries as a no-op, so "View program" did nothing once you were sitting at
  // /#program. A plain anchor hands the jump back to the browser, which
  // re-scrolls to the target every time.
  const inPage = href.startsWith("#");
  const content = (
    <>
      {leading}
      <span>{children}</span>
      {showArrow ? (
        <Arrow className="transition-transform duration-200 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
      ) : null}
    </>
  );

  const classes = cn(BASE, VARIANTS[variant], className);

  if (inPage) {
    return (
      <a href={href} className={classes} {...rest}>
        {content}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={classes}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      {...rest}
    >
      {content}
    </Link>
  );
}
