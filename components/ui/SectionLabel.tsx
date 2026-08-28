import { cn } from "@/lib/utils";

/** Small uppercase mono label that opens most sections in the reference. */
export function SectionLabel({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={cn("label-mono text-qff-white/70", className)}>{children}</p>
  );
}

/** Marked placeholder note, e.g. "FINAL FIGURES TO BE CONFIRMED". */
export function PendingNote({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "label-mono-sm inline-flex items-center gap-2 text-qff-white/40",
        className,
      )}
    >
      <span aria-hidden="true" className="inline-block h-1.5 w-1.5 bg-qff-purple" />
      {children}
    </p>
  );
}
