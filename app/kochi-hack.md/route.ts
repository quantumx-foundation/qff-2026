import { hackDayMarkdown } from "@/lib/hackDayMarkdown";

/**
 * /kochi-hack.md: the Hack Day page as plain Markdown, for "View as Markdown"
 * and for anyone pasting the brief into a doc or an AI tool. Built once at
 * build time; kept out of search so it never competes with the page itself.
 */
export const dynamic = "force-static";

export function GET() {
  return new Response(hackDayMarkdown(), {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "X-Robots-Tag": "noindex",
    },
  });
}
