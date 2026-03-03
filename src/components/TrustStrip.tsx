import ScrollReveal from "@/components/ScrollReveal";
import { TYPE, SPACING } from "@/typography";

const TrustStrip = () => {
  return (
    <section id="about" className="bg-section-cream" style={{ paddingTop: SPACING.sectionPy.desktop, paddingBottom: "48px" }}>
      <div className="mx-auto text-center" style={{ maxWidth: "960px", paddingLeft: SPACING.sectionPx, paddingRight: SPACING.sectionPx }}>
        <ScrollReveal>
          <div style={{ marginBottom: "40px" }}>
            <span style={{ ...TYPE.body, fontWeight: 600 }} className="text-primary tracking-tight">
              AMOGEN
            </span>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <h2 style={TYPE.h2} className="text-foreground">
            Where peptide science meets{" "}
            <em className="italic">global scale.</em>
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.25}>
          <p style={{ ...TYPE.bodyLg, color: "hsl(var(--muted-foreground))", marginTop: SPACING.headingToSub }} className="max-w-3xl mx-auto">
            Transforming metabolic health by delivering cutting-edge GLP-1 peptide therapies and scalable manufacturing solutions.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default TrustStrip;
