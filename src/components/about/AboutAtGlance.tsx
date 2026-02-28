import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "framer-motion";

const AboutAtGlance = () => {
  return (
    <section className="py-24 lg:py-32 bg-card relative overflow-hidden">
      {/* Decorative sweeping golden line */}
      <svg
        className="absolute top-12 left-0 w-full h-[200px] pointer-events-none"
        viewBox="0 0 1400 200"
        fill="none"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M-20 180 Q200 20 500 60 Q800 100 1000 30 Q1200 -20 1420 50"
          stroke="#D4A017"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
        />
      </svg>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        <ScrollReveal>
          <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold mb-6">
            Who We Are
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary leading-[1.1]">
            Amogen at a glance
          </h2>
          <p className="text-base md:text-lg text-muted-foreground mt-8 leading-relaxed max-w-3xl">
            Amogen Pharma India was founded in 2020 and is a generic company specialising in the development and manufacture of complex peptide and protein-based APIs and drug products for global pharmaceutical partners.
          </p>
        </ScrollReveal>

        {/* Stats — horizontal row */}
        <div className="grid md:grid-cols-[1fr_auto_1fr_auto_1fr] gap-0 mt-16">
          <ScrollReveal delay={0.1}>
            <div className="py-8 pr-8">
              <span className="text-5xl md:text-6xl font-extrabold text-primary leading-none">70+</span>
              <p className="text-sm font-bold text-foreground mt-3">Employees</p>
              <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                as of November 30, 2025, with 84% in research & development and manufacturing related functions.
              </p>
            </div>
          </ScrollReveal>

          <div className="hidden md:block w-px bg-border self-stretch" />

          <ScrollReveal delay={0.2}>
            <div className="py-8 px-8 border-t md:border-t-0 border-border">
              <span className="text-5xl md:text-6xl font-extrabold text-primary leading-none">15 years</span>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                of average peptide R&D expertise among key personal with a validated platform that has delivered two drugs to market and a rich pipeline of clinical and pre-clinical programs.
              </p>
            </div>
          </ScrollReveal>

          <div className="hidden md:block w-px bg-border self-stretch" />

          <ScrollReveal delay={0.3}>
            <div className="py-8 pl-8 border-t md:border-t-0 border-border">
              <span className="text-5xl md:text-6xl font-extrabold text-primary leading-none">980 Kg</span>
              <p className="text-sm font-bold text-foreground mt-3">Total GLP-1 Volume</p>
              <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                To position ourselves as the global No.1 recombinant biomanufacturing hub, we are continuously expanding our capacity while upholding the highest standards of quality.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default AboutAtGlance;
