import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "framer-motion";

const AboutAtGlance = () => {
  return (
    <section className="py-24 lg:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid lg:grid-cols-5 gap-16 lg:gap-20">
          {/* Left column — 3/5 */}
          <div className="lg:col-span-3">
            <ScrollReveal>
              <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold mb-6">
                Who We Are
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary leading-[1.1]">
                Amogen at a glance
              </h2>
              <p className="text-base md:text-lg text-muted-foreground mt-8 leading-relaxed max-w-2xl">
                Amogen Pharma India was founded in 2020 and is a generic company specialising in the development and manufacture of complex peptide and protein-based APIs and drug products for global pharmaceutical partners.
              </p>
            </ScrollReveal>

            {/* Strategy & Mission cards */}
            <div className="grid sm:grid-cols-2 gap-8 mt-16">
              <ScrollReveal delay={0.1}>
                <div className="relative">
                  {/* Decorative swirl */}
                  <svg className="absolute -top-8 -left-4 w-48 h-16 text-primary/20" viewBox="0 0 200 60" fill="none">
                    <path d="M10 50 Q60 -10 120 30 Q160 55 190 20" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none" />
                  </svg>
                  <h3 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight">
                    Our<br />strategy
                  </h3>
                  <div className="w-full h-px bg-border mt-6 mb-6" />
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    is to build a focused portfolio of high-value peptide and biologic biosimilars and partner globally for development, registration and long-term commercial supply.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div>
                  <h3 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight">
                    Our<br />Mission
                  </h3>
                  <div className="w-full h-px bg-border mt-6 mb-6" />
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    is to empower global pharmaceutical partners with exceptional peptides and biologics, leveraging best-in-class microbial fermentation technology.
                  </p>
                  <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
                    We bring together the <span className="text-primary font-semibold">right people</span> and the{" "}
                    <span className="text-primary font-semibold">right technology</span> at the{" "}
                    <span className="text-primary font-semibold">right time</span>.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* Right column — 2/5 — Stats */}
          <div className="lg:col-span-2">
            <div className="space-y-0">
              {/* Stat 1 */}
              <ScrollReveal delay={0.1}>
                <div className="py-8">
                  <span className="text-5xl md:text-6xl font-extrabold text-primary leading-none">70+</span>
                  <p className="text-sm font-bold text-foreground mt-3">Employees</p>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                    as of November 30, 2025, with 84% in research & development and manufacturing related functions.
                  </p>
                </div>
              </ScrollReveal>

              <div className="w-full h-px bg-border" />

              {/* Stat 2 */}
              <ScrollReveal delay={0.2}>
                <div className="py-8">
                  <span className="text-5xl md:text-6xl font-extrabold text-primary leading-none">15 years</span>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                    of average peptide R&D expertise among key personal with a validated platform that has delivered two drugs to market and a rich pipeline of clinical and pre-clinical programs.
                  </p>
                </div>
              </ScrollReveal>

              <div className="w-full h-px bg-border" />

              {/* Stat 3 */}
              <ScrollReveal delay={0.3}>
                <div className="py-8">
                  <span className="text-5xl md:text-6xl font-extrabold text-primary leading-none">980 Kg</span>
                  <p className="text-sm font-bold text-foreground mt-3">Total GLP-1 Volume</p>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                    To position ourselves as the global No.1 recombinant biomanufacturing hub, we are continuously expanding our capacity while upholding the highest standards of quality.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAtGlance;
