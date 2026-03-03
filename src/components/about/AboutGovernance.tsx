import ScrollReveal from "@/components/ScrollReveal";
import { Users, Scale, Eye } from "lucide-react";
import { TYPE, SPACING } from "@/typography";

const cards = [
  { icon: Users, title: "Board Oversight", description: "Independent board governance with specialized committees for audit, compliance, and scientific advisory oversight." },
  { icon: Scale, title: "Ethics & Compliance", description: "Comprehensive compliance programs ensuring adherence to global pharmaceutical regulations and ethical business practices." },
  { icon: Eye, title: "Transparency", description: "Open reporting on clinical trials, financial performance, and environmental impact to maintain stakeholder trust." },
];

const AboutGovernance = () => {
  return (
    <section id="governance" className="bg-section-cream" style={{ paddingTop: SPACING.sectionPy.desktop, paddingBottom: SPACING.sectionPy.desktop }}>
      <div className="mx-auto" style={{ maxWidth: SPACING.maxWidth, paddingLeft: SPACING.sectionPx, paddingRight: SPACING.sectionPx }}>
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto" style={{ marginBottom: "64px" }}>
            <p style={{ ...TYPE.label, color: "hsl(var(--primary))", marginBottom: SPACING.labelToH2 }}>Governance</p>
            <h2 style={TYPE.h2} className="text-foreground">Operating with integrity and accountability.</h2>
            <p style={{ ...TYPE.body, color: "hsl(var(--muted-foreground))", marginTop: SPACING.headingToSub }}>
              Strong governance is the foundation of everything we do. Our commitment to ethical conduct, regulatory compliance, and transparent decision-making ensures we earn the trust of patients, partners, and stakeholders worldwide.
            </p>
          </div>
        </ScrollReveal>
        <div className="grid sm:grid-cols-3" style={{ gap: SPACING.cardGap }}>
          {cards.map((item, i) => {
            const Icon = item.icon;
            return (
              <ScrollReveal key={item.title} delay={i * 0.1}>
                <div className="bg-card rounded-2xl shadow-sm h-full flex flex-col" style={{ padding: SPACING.cardPadding }}>
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <Icon size={24} className="text-primary" />
                  </div>
                  <h3 style={TYPE.h3} className="text-foreground mb-3">{item.title}</h3>
                  <p style={{ ...TYPE.bodySm, color: "hsl(var(--muted-foreground))" }} className="flex-1">{item.description}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutGovernance;
