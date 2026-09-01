import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Inter, Oxanium } from "next/font/google";
import "./globals.css";
import { DuotoneDefs } from "@/components/effects/DuotoneDefs";
import { event } from "@/data/event";

/**
 * Typography.
 *
 * Two voices from style.md — a modern grotesk for display and body, a
 * monospace for technical metadata — plus a squared techno face used only for
 * the wordmark, statistics and countdown, matching the reference's numerals.
 * All three are self-hosted through next/font, so no external font CSS is
 * fetched at runtime.
 */
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

/**
 * Hero face. A neo-grotesque with the tall x-height and angled ascender cuts of
 * the Apple system font, which Geist's more geometric forms do not carry.
 */
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const oxanium = Oxanium({
  variable: "--font-oxanium",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

const siteUrl = event.urls.site;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${event.shortName} — ${event.organisation}`,
    template: `%s — ${event.shortName}`,
  },
  description: `${event.shortName} is the ${event.organisation} event bringing research, builders, industry and community together around quantum technology. Dates and venue to be announced.`,
  applicationName: event.shortName,
  alternates: { canonical: siteUrl },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: `${event.shortName} — ${event.organisation}`,
    title: `${event.shortName} — ${event.organisation}`,
    description: `${event.shortName}. Dates and venue to be announced.`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${event.shortName} — ${event.organisation}`,
    description: `${event.shortName}. Dates and venue to be announced.`,
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
      className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${oxanium.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <DuotoneDefs />
        <a
          href="#main"
          className="label-mono sr-only font-bold focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:bg-qff-white focus:px-4 focus:py-3 focus:text-qff-black"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
