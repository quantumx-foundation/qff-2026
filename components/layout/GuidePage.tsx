import Link from "next/link";
import { SubpageHeader } from "@/components/layout/SubpageHeader";
import { Footer } from "@/components/layout/Footer";
import { Arrow } from "@/components/ui/Arrow";
import type { GuideDocument } from "@/types/event";

/**
 * Renderer for the longer footer pages, Resources and Why Qiskit.
 *
 * The same quiet treatment as LegalPage, title, standfirst and a closing row
 * of destinations, with titled sections between them. Each section rules off
 * with a hairline so a list of links and a paragraph read as the same unit.
 */

function GuideLink({ label, href }: { label: string; href: string }) {
  const external = href.startsWith("http");
  return (
    <Link
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="group inline-flex items-center gap-2 label-mono font-bold text-muted transition-colors duration-200 hover:text-ink"
    >
      {label}
      <Arrow className="transition-transform duration-200 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
    </Link>
  );
}

export function GuidePage({ doc }: { doc: GuideDocument }) {
  return (
    <>
      <SubpageHeader />

      <main id="main" className="bg-ground">
        <div className="container-editorial py-20 sm:py-28 lg:py-36">
          <h1 className="text-hero max-w-[16ch]">{doc.title}</h1>

          <p className="mt-10 max-w-[68ch] text-faq text-muted lg:mt-12">
            {doc.summary}
          </p>

          <div className="mt-14 flex flex-col lg:mt-16">
            {doc.sections.map((section) => (
              <section
                key={section.heading}
                className="hairline-t grid gap-6 py-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-12"
              >
                <h2 className="text-h3 text-ink">{section.heading}</h2>

                <div className="flex max-w-[68ch] flex-col gap-6">
                  {section.body?.map((paragraph, i) => (
                    <p key={i} className="text-faq text-muted">
                      {paragraph}
                    </p>
                  ))}

                  {section.links && (
                    <ul className="flex flex-col gap-4">
                      {section.links.map((link) => (
                        <li key={link.href}>
                          <GuideLink {...link} />
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </section>
            ))}
          </div>

          <ul className="hairline-t flex flex-wrap gap-x-8 gap-y-4 pt-8">
            {doc.links.map((link) => (
              <li key={link.href}>
                <GuideLink {...link} />
              </li>
            ))}
          </ul>
        </div>
      </main>

      <Footer />
    </>
  );
}
