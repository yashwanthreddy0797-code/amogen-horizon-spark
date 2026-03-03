import ScrollReveal from "@/components/ScrollReveal";
import { ArrowRight, Microscope, Handshake, TestTube } from "lucide-react";
import { TYPE, SPACING } from "@/typography";

const cards = [
  { icon: Microscope, title: "Science & Pipeline", description: "Explore our research programs and peptide development pipeline.", cta: "View pipeline" },
  { icon: Handshake, title: "Partnership Inquiries", description: "Learn about CDMO services and strategic collaboration opportunities.", cta: "Partner with us" },
  { icon: TestTube, title: "Product Information", description: "Get detailed information about AMOGEN therapeutics and biosimilars.", cta: "View products" },
];

const AboutHelp = () => {
  return (
    <section className="bg-section-cream" style={{ paddingTop: SPACING.sectionPy.desktop, paddingBottom: SPACING.sectionPy.desktop }}>
      <div className="mx-auto" style={{ maxWidth: SPACING.maxWidth, paddingLeft: SPACING.sectionPx, paddingRight: SPACING.sectionPx }}>
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto" style={{ marginBottom: "64px" }}>
            <h2 style={TYPE.h2} className="text-foreground">We're here to help</h2>
            <p style={{ ...TYPE.body, color: "hsl(var(--muted-foreground))", marginTop: SPACING.headingToSub }}>
              Whether you want to learn about our pipeline, partnership opportunities, or have a question about our therapeutics, please reach out.
            </p>
          </div>
        </ScrollReveal>
        <div className="grid sm:grid-cols-3" style={{ gap: SPACING.cardGap }}>
          {cards.map((item, i) => {
            const Icon = item.icon;
            return (
              <ScrollReveal key={item.title} delay={i * 0.1}>
                <div className="bg-card rounded-2xl shadow-sm h-full flex flex-col" style={{ padding: SPACING.cardPadding }}>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <Icon size={22} className="text-primary" />
                  </div>
                  <h3 style={TYPE.h3} className="text-foreground mb-3">{item.title}</h3>
                  <p style={{ ...TYPE.bodySm, color: "hsl(var(--muted-foreground))" }} className="flex-1 mb-4">{item.description}</p>
                  <a href="#" className="inline-flex items-center gap-1.5 text-primary hover:underline" style={{ ...TYPE.bodySm, fontWeight: 600 }}>
                    {item.cta} <ArrowRight size={14} />
                  </a>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutHelp;
