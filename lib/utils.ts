export type ClassValue = string | false | null | undefined;

/** Join conditional class names. Keeps component JSX readable without a dependency. */
export function cn(...classes: ClassValue[]): string {
  return classes.filter(Boolean).join(" ");
}
