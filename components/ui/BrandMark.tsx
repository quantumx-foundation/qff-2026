import { cn } from "@/lib/utils";

/**
 * QuantumX Foundation mark.
 *
 * Traced from the official App-Icon artwork as vector geometry rather than
 * shipped as a raster, so it stays crisp at every size and inherits
 * `currentColor` — white in the header, black on the purple footer.
 *
 * Four straight-edged polygons with 180-degree rotational symmetry.
 * Source artwork is kept at /public/logos/quantumx-icon-black.png.
 */
export function BrandMark({
  className,
  title,
}: {
  className?: string;
  title?: string;
}) {
  return (
    <svg
      viewBox="0 0 789 617"
      width={789}
      height={617}
      className={cn("block w-auto", className)}
      fill="currentColor"
      role={title ? "img" : "presentation"}
      aria-hidden={title ? undefined : "true"}
      aria-label={title}
      focusable="false"
    >
      {title ? <title>{title}</title> : null}
      <path d="M0 0h193l214 214H0V0Z" />
      <path d="M383 0h213v405L383 192V0Z" />
      <path d="M193 214l213 213v190H193V214Z" />
      <path d="M382 404h407v213H596L382 404Z" />
    </svg>
  );
}
