import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { TYPE, SPACING } from "@/typography";

interface PressRelease {
  title: string;
  date: string;
  category: string;
  excerpt: string;
}

const releases: PressRelease[] = [
  { title: "AMOGEN Reports Positive Phase III Results for Semaglutide Biosimilar AMG-S01", date: "02/10/2026", category: "Pipeline", excerpt: "Top-line data from the pivotal Phase III trial demonstrated biosimilarity to reference semaglutide across all primary and secondary endpoints, with a comparable safety and immunogenicity profile." },
  { title: "AMOGEN Expands Global Distribution Partnership with Leading European Pharma Group", date: "01/22/2026", category: "Partnership", excerpt: "The strategic partnership expands AMOGEN's commercial footprint across 12 European markets, providing broader patient access to affordable biosimilar medicines." },
  { title: "AMOGEN Announces Completion of Peptide Manufacturing Suite Expansion", date: "11/08/2025", category: "Manufacturing", excerpt: "The new GMP-compliant manufacturing suite doubles AMOGEN's solid-phase peptide synthesis capacity, supporting commercial-scale production of GLP-1 biosimilar candidates." },
];

const NewsPressReleases = () => (
  <section className="bg-section-cream" style={{ paddingTop: SPACING.sectionPy.desktop, paddingBottom: SPACING.sectionPy.desktop }}>
    <div className="mx-auto" style={{ maxWidth: SPACING.maxWidth, paddingLeft: SPACING.sectionPx, paddingRight: SPACING.sectionPx }}>
      <ScrollReveal>
        <div className="text-center mb-14">
          <p style={{ ...TYPE.label, color: "hsl(var(--muted-foreground))", marginBottom: SPACING.labelToH2 }}>Press Releases</p>
          <h2 style={{ ...TYPE.h2, fontStyle: "italic" }} className="text-foreground">The latest from AMOGEN</h2>
          <p style={{ ...TYPE.body, color: "hsl(var(--muted-foreground))", marginTop: SPACING.headingToSub }} className="max-w-xl mx-auto">
            Find information on our pipeline, clinical trials, company news, and more.
          </p>
          <a href="#" className="inline-flex items-center gap-2 mt-6 text-primary hover:gap-3 transition-all" style={{ ...TYPE.bodySm, fontWeight: 600 }}>
            See all press releases <ArrowRight size={16} />
          </a>
        </div>
      </ScrollReveal>

      <div className="divide-y divide-border">
        {releases.map((pr, i) => (
          <ScrollReveal key={pr.title} delay={i * 0.08}>
            <a href="#" className="group flex flex-col md:flex-row md:items-start gap-4 md:gap-10 py-8 first:pt-0 last:pb-0">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span style={{ ...TYPE.label, fontSize: "10px", fontWeight: 600 }} className="text-primary bg-primary/10 px-3 py-1 rounded-sm">{pr.category}</span>
                </div>
                <h3 style={TYPE.h3} className="text-foreground mb-2 group-hover:text-primary transition-colors">{pr.title}</h3>
                <p style={{ ...TYPE.bodySm, color: "hsl(var(--muted-foreground))" }} className="mb-3 max-w-2xl">{pr.excerpt}</p>
                <span className="inline-flex items-center gap-2 text-primary group-hover:gap-3 transition-all" style={{ ...TYPE.bodySm, fontWeight: 600 }}>
                  Read press release <ArrowRight size={14} />
                </span>
              </div>
              <p style={{ ...TYPE.bodySm, color: "hsl(var(--muted-foreground))" }} className="md:pt-1 md:min-w-[100px] md:text-right">{pr.date}</p>
            </a>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default NewsPressReleases;
