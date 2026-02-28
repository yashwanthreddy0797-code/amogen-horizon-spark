import ScrollReveal from "@/components/ScrollReveal";
import { Users, Scale, Eye } from "lucide-react";

const cards = [
  { icon: Users, title: "Board Oversight", description: "Independent board governance with specialized committees for audit, compliance, and scientific advisory oversight." },
  { icon: Scale, title: "Ethics & Compliance", description: "Comprehensive compliance programs ensuring adherence to global pharmaceutical regulations and ethical business practices." },
  { icon: Eye, title: "Transparency", description: "Open reporting on clinical trials, financial performance, and environmental impact to maintain stakeholder trust." },
];

const AboutGovernance = () => {
  return (
    <section id="governance" className="py-24 lg:py-32 bg-section-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold mb-6">Governance</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight">
              Operating with integrity and accountability.
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mt-6 leading-relaxed">
              Strong governance is the foundation of everything we do. Our commitment to ethical conduct, regulatory compliance, and transparent decision-making ensures we earn the trust of patients, partners, and stakeholders worldwide.
            </p>
          </div>
        </ScrollReveal>
        <div className="grid sm:grid-cols-3 gap-8">
          {cards.map((item, i) => {
            const Icon = item.icon;
            return (
              <ScrollReveal key={item.title} delay={i * 0.1}>
                <div className="bg-card rounded-2xl p-8 shadow-sm h-full flex flex-col">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <Icon size={24} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">{item.description}</p>
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
