import { cn } from "@/lib/utils";

/**
 * Section headings are set as explicit lines so break points match the
 * reference rather than being left to the browser.
 */
export function SectionHeading({
  lines,
  id,
  className,
  as: Tag = "h2",
}: {
  lines: string[];
  id?: string;
  className?: string;
  as?: "h2" | "h3";
}) {
  return (
    <Tag id={id} className={cn("text-h2 text-balance", className)}>
      {lines.map((line, i) => (
        <span key={i} className="block">
          {line}
        </span>
      ))}
    </Tag>
  );
}
