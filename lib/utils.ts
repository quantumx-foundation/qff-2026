export type ClassValue = string | false | null | undefined;

/** Join conditional class names. Keeps component JSX readable without a dependency. */
export function cn(...classes: ClassValue[]): string {
  return classes.filter(Boolean).join(" ");
}

/**
 * Click handler for an in-page anchor that also closes the header menu.
 *
 * Closing the menu re-renders the header in the same task as the click, which
 * cancels the browser's smooth anchor scroll: the hash changes but the page
 * stays put. So the menu closes first and the scroll waits until that render
 * has landed. scrollIntoView without a behaviour follows the CSS
 * scroll-behavior, so reduced motion still jumps.
 */
export function jumpAfterClose(
  e: { preventDefault(): void },
  href: string,
  close: () => void,
): void {
  const target = document.querySelector(href);
  close();
  if (!target) return;
  e.preventDefault();
  history.pushState(null, "", href);
  requestAnimationFrame(() => requestAnimationFrame(() => target.scrollIntoView()));
}
