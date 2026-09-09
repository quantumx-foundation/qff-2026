import type { Metadata, Viewport } from "next";
import { Fira_Code, Geist } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import { DuotoneDefs } from "@/components/effects/DuotoneDefs";
import { event, GA_MEASUREMENT_ID } from "@/data/event";

/**
 * Typography.
 *
 * Two voices, matching the Qiskit Fall Fest 2026 material: Fira Code carries
 * every display line, the hero, section headings, statistics and all
 * technical metadata, and a grotesk carries body copy only, because
 * monospace is markedly slower to read at paragraph length.
 *
 * Both are self-hosted through next/font, so no external font CSS is fetched
 * at runtime.
 */
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const siteUrl = event.urls.site;

/** Shared by the Open Graph and Twitter cards, which show the same preview. */
const SHARE_DESCRIPTION = `${event.expansion} ${event.year} by IBM Quantum, hosted by ${event.organisation}. Five events from 10 October, in ${event.city}, Kochi and online.`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${event.shortName} | ${event.organisation}`,
    template: `%s | ${event.shortName}`,
  },
  description: `${event.organisation} hosts the ${event.expansion} ${event.year}, IBM Quantum's annual quantum computing festival. Five events from 10 October, in ${event.city}, Kochi and online, bringing research, builders, industry and community together.`,
  applicationName: event.shortName,
  alternates: { canonical: siteUrl },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: `${event.shortName} | ${event.organisation}`,
    title: `${event.shortName} | ${event.organisation}`,
    // Kept to roughly two lines: WhatsApp, Slack and iMessage truncate a link
    // preview well before the full description, so the host, the programme and
    // the date have to land in the first sentence.
    description: SHARE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: `${event.shortName} | ${event.organisation}`,
    description: SHARE_DESCRIPTION,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${firaCode.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <DuotoneDefs />
        <a
          href="#main"
          className="label-mono sr-only font-bold focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:bg-inverse focus:px-4 focus:py-3 focus:text-on-inverse"
        >
          Skip to content
        </a>
        {children}
      </body>
      {/* Loads gtag.js after hydration rather than blocking first paint, which
          is what the raw snippet in the <head> would do. Placed outside <body>
          as the Next guide specifies. Note this sets Google's _ga cookies and
          fetches from a third party, which is why the privacy page says so. */}
      <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />
    </html>
  );
}
