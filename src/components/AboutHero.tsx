import ScrollReveal from "@/components/ScrollReveal";
import { ArrowRight, Cpu, FlaskConical, Factory } from "lucide-react";
import { Link } from "react-router-dom";

const cards = [
  {
    icon: Cpu,
    title: "Technology Edge",
    description:
      "Advanced Solid Phase Peptide Synthesis (SPPS) platforms and proprietary analytical methods delivering best-in-class purity and yield.",
  },
  {
    icon: FlaskConical,
    title: "Peptide Innovation",
    description:
      "Deep expertise across GLP-1, GIP, and dual-agonist molecules — from early discovery through clinical-stage development.",
  },
  {
    icon: Factory,
    title: "Manufacturing Scale",
    description:
      "900+ Kg/yr GLP-1 API capacity with 200L reactors, 24/7 fermentation, and cGMP-ready infrastructure for global supply.",
  },
];

const AboutHero = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <ScrollReveal>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-4">
            About AMOGEN
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-[1.1] max-w-3xl">
            Our job is to put health<br />
            <span className="italic">above all.</span>
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <p className="text-lg text-muted-foreground mt-8 max-w-2xl leading-relaxed">
            AMOGEN is pioneering affordable access to advanced peptide therapeutics — 
            from GLP-1 biosimilars to next-generation metabolic medicines — through 
            world-class science and scalable manufacturing.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.3}>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 mt-8 text-sm font-semibold text-primary hover:text-primary/80 transition-colors group"
          >
            Learn more about us
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </ScrollReveal>

        {/* Three feature cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {cards.map((card, i) => (
            <ScrollReveal key={card.title} delay={0.15 + i * 0.1}>
              <div className="bg-card rounded-2xl p-8 shadow-sm border border-border hover:shadow-md transition-shadow h-full">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  <card.icon size={24} className="text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">{card.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{card.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
