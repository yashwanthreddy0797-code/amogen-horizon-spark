import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

interface PressRelease {
  title: string;
  date: string;
  category: string;
  excerpt: string;
}

const releases: PressRelease[] = [
  {
    title:
      "AMOGEN Reports Positive Phase III Results for Semaglutide Biosimilar AMG-S01",
    date: "02/10/2026",
    category: "Pipeline",
    excerpt:
      "Top-line data from the pivotal Phase III trial demonstrated biosimilarity to reference semaglutide across all primary and secondary endpoints, with a comparable safety and immunogenicity profile.",
  },
  {
    title:
      "AMOGEN Expands Global Distribution Partnership with Leading European Pharma Group",
    date: "01/22/2026",
    category: "Partnership",
    excerpt:
      "The strategic partnership expands AMOGEN's commercial footprint across 12 European markets, providing broader patient access to affordable biosimilar medicines.",
  },
  {
    title:
      "AMOGEN Announces Completion of Peptide Manufacturing Suite Expansion",
    date: "11/08/2025",
    category: "Manufacturing",
    excerpt:
      "The new GMP-compliant manufacturing suite doubles AMOGEN's solid-phase peptide synthesis capacity, supporting commercial-scale production of GLP-1 biosimilar candidates.",
  },
];

const NewsPressReleases = () => (
  <section className="py-20 lg:py-28 bg-section-cream">
    <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
      <ScrollReveal>
        <div className="text-center mb-14">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Press Releases
          </p>
          <h2
            className="text-[2.5rem] md:text-[3.2rem] lg:text-[3.8rem] italic leading-[1.1] text-foreground"
          >
            The latest from AMOGEN
          </h2>
          <p className="text-base md:text-lg text-muted-foreground mt-5 max-w-xl mx-auto">
            Find information on our pipeline, clinical trials, company news, and more.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-primary hover:gap-3 transition-all"
          >
            See all press releases <ArrowRight size={16} />
          </a>
        </div>
      </ScrollReveal>

      {/* Press release list */}
      <div className="divide-y divide-border">
        {releases.map((pr, i) => (
          <ScrollReveal key={pr.title} delay={i * 0.08}>
            <a
              href="#"
              className="group flex flex-col md:flex-row md:items-start gap-4 md:gap-10 py-8 first:pt-0 last:pb-0"
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-primary bg-primary/10 px-3 py-1 rounded-sm">
                    {pr.category}
                  </span>
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-foreground leading-snug mb-2 group-hover:text-primary transition-colors">
                  {pr.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3 max-w-2xl">
                  {pr.excerpt}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
                  Read press release <ArrowRight size={14} />
                </span>
              </div>
              <p className="text-sm text-muted-foreground md:pt-1 md:min-w-[100px] md:text-right">
                {pr.date}
              </p>
            </a>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default NewsPressReleases;
