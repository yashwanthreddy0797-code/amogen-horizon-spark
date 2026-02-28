import ScrollReveal from "@/components/ScrollReveal";
import { ArrowRight, Microscope, Handshake, TestTube } from "lucide-react";

const cards = [
  { icon: Microscope, title: "Science & Pipeline", description: "Explore our research programs and peptide development pipeline.", cta: "View pipeline" },
  { icon: Handshake, title: "Partnership Inquiries", description: "Learn about CDMO services and strategic collaboration opportunities.", cta: "Partner with us" },
  { icon: TestTube, title: "Product Information", description: "Get detailed information about AMOGEN therapeutics and biosimilars.", cta: "View products" },
];

const AboutHelp = () => {
  return (
    <section className="py-24 lg:py-32 bg-section-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight">We're here to help</h2>
            <p className="text-base md:text-lg text-muted-foreground mt-6 leading-relaxed">
              Whether you want to learn about our pipeline, partnership opportunities, or have a question about our therapeutics, please reach out.
            </p>
          </div>
        </ScrollReveal>
        <div className="grid sm:grid-cols-3 gap-8">
          {cards.map((item, i) => {
            const Icon = item.icon;
            return (
              <ScrollReveal key={item.title} delay={i * 0.1}>
                <div className="bg-card rounded-2xl p-8 shadow-sm h-full flex flex-col">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <Icon size={22} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">{item.description}</p>
                  <a href="#" className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:underline">
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
