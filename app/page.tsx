import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingButton } from "@/components/layout/FloatingButton";
import { StructuredData } from "@/components/layout/StructuredData";

import { Hero } from "@/components/sections/Hero";
import { EventMeta } from "@/components/sections/EventMeta";
import { EditorialStatement } from "@/components/sections/EditorialStatement";
import { Stats } from "@/components/sections/Stats";
import { ValueSection } from "@/components/sections/ValueSection";
import { Program } from "@/components/sections/Program";
import { Speakers } from "@/components/sections/Speakers";
import { IdentityBand } from "@/components/sections/IdentityBand";
import { EventCarousel } from "@/components/sections/EventCarousel";
import { Testimonials } from "@/components/sections/Testimonials";
import { Announcements } from "@/components/sections/Announcements";
import { Partners } from "@/components/sections/Partners";
import { Involvement } from "@/components/sections/Involvement";
import { Faq } from "@/components/sections/Faq";

import { GlitchMarquee } from "@/components/effects/GlitchMarquee";
import { marqueeTop, marqueeMid } from "@/data/marquee";

/**
 * The homepage composes sections only. Section rhythm follows the reference:
 * black throughout, broken by the technical tickers at section transitions and
 * by the single purple interruption mid-page before the purple footer closes.
 */
export default function Home() {
  return (
    <>
      <StructuredData />
      <Header />

      <main id="main">
        <Hero />
        <EventMeta />
        <EditorialStatement />

        <GlitchMarquee tokens={marqueeTop} duration={95} />

        <Stats />
        <ValueSection />
        <Program />
        <Speakers />

        <IdentityBand />

        <GlitchMarquee tokens={marqueeMid} duration={110} reverse />

        <EventCarousel />
        <Testimonials />
        <Announcements />
        <Partners />
        <Involvement />
        <Faq />
      </main>

      <Footer />
      <FloatingButton />
    </>
  );
}
