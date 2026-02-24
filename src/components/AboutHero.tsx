import ScrollReveal from "@/components/ScrollReveal";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const cards = [
  {
    label: "Microbial Fermentation",
    value: "75,000",
    unit: "L",
    description: "Integrated Capacity",
  },
  {
    label: "Peptide Innovation",
    value: "5 +",
    unit: "",
    description: "complex peptide programs",
  },
  {
    label: "GLP-1 Capacity",
    value: "5",
    unit: "T",
    description: "Capacity target by 2029",
  },
];

const AboutHero = () => {
  return (
    <section className="py-20 lg:py-28 bg-section-cream">
      <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-16 text-center">
        <ScrollReveal delay={0.1}>
          <h2 className="text-[36px] md:text-[40px] font-extrabold text-foreground leading-[1.2]">
            We manufacture with precision.
            <em className="font-extrabold italic"> Because the right molecule, made wrong, helps no one.</em>
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <p className="text-lg text-muted-foreground mt-8 max-w-3xl mx-auto leading-relaxed">
            Our research focuses on developing life-changing medicines for everyone, regardless of
            their condition's prevalence or complexity. And we know our biggest advancements are
            still ahead of us.
          </p>
        </ScrollReveal>
      </div>

      {/* Stat cards */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 mt-16">
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <ScrollReveal key={card.label} delay={0.15 + i * 0.1}>
              <div className="bg-card rounded-2xl p-8 shadow-sm h-full">
                <p className="text-xs uppercase tracking-[0.2em] text-primary font-bold mb-6">
                  {card.label}
                </p>
                <p className="text-foreground mb-1">
                  <span className="text-5xl md:text-6xl font-extrabold">{card.value}</span>
                  {card.unit && (
                    <span className="text-2xl font-bold ml-1">{card.unit}</span>
                  )}
                </p>
                <p className="text-base text-muted-foreground mt-2 mb-6">{card.description}</p>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary transition-colors group"
                >
                  Learn more
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
