import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "framer-motion";
import { TYPE, SPACING } from "@/typography";

const AboutAtGlance = () => {
  return (
    <section className="bg-card relative overflow-hidden" style={{ paddingTop: SPACING.sectionPy.desktop, paddingBottom: SPACING.sectionPy.desktop }}>
      <div className="mx-auto relative z-10" style={{ maxWidth: SPACING.maxWidth, paddingLeft: SPACING.sectionPx, paddingRight: SPACING.sectionPx }}>
        <ScrollReveal>
          <p style={{ ...TYPE.label, color: "hsl(var(--primary))", marginBottom: SPACING.labelToH2 }}>Who We Are</p>
          <h2 style={TYPE.h2} className="text-primary">Amogen at a glance</h2>
          <p style={{ ...TYPE.body, color: "hsl(var(--muted-foreground))", marginTop: SPACING.headingToSub }} className="max-w-3xl">
            Amogen Pharma India was founded in 2020 and is a generic company specialising in the development and manufacture of complex peptide and protein-based APIs and drug products for global pharmaceutical partners.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-[1fr_auto_1fr_auto_1fr] gap-0 mt-16">
          <ScrollReveal delay={0.1}>
            <div className="py-8 pr-8">
              <span style={{ ...TYPE.display, fontSize: "clamp(48px, 6vw, 64px)", color: "hsl(var(--primary))" }}>70+</span>
              <p style={{ ...TYPE.bodySm, fontWeight: 600, marginTop: "12px" }} className="text-foreground">Employees</p>
              <p style={{ ...TYPE.bodySm, color: "hsl(var(--muted-foreground))", marginTop: "4px" }}>
                as of November 30, 2025, with 84% in research & development and manufacturing related functions.
              </p>
            </div>
          </ScrollReveal>

          <div className="hidden md:block w-px bg-border self-stretch" />

          <ScrollReveal delay={0.2}>
            <div className="py-8 px-8 border-t md:border-t-0 border-border">
              <span style={{ ...TYPE.display, fontSize: "clamp(48px, 6vw, 64px)", color: "hsl(var(--primary))" }}>15 years</span>
              <p style={{ ...TYPE.bodySm, color: "hsl(var(--muted-foreground))", marginTop: "12px" }}>
                of average peptide R&D expertise among key personal with a validated platform that has delivered two drugs to market and a rich pipeline of clinical and pre-clinical programs.
              </p>
            </div>
          </ScrollReveal>

          <div className="hidden md:block w-px bg-border self-stretch" />

          <ScrollReveal delay={0.3}>
            <div className="py-8 pl-8 border-t md:border-t-0 border-border">
              <span style={{ ...TYPE.display, fontSize: "clamp(48px, 6vw, 64px)", color: "hsl(var(--primary))" }}>980 Kg</span>
              <p style={{ ...TYPE.bodySm, fontWeight: 600, marginTop: "12px" }} className="text-foreground">Total GLP-1 Volume</p>
              <p style={{ ...TYPE.bodySm, color: "hsl(var(--muted-foreground))", marginTop: "4px" }}>
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
