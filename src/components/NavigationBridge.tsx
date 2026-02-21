import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import { ArrowRight } from "lucide-react";

const cards = [
  {
    title: "Products & Pipeline",
    description:
      "Advancing GLP-1 peptide biosimilars through scalable development and manufacturing.",
    link: "/products",
    cta: "Get started",
  },
  {
    title: "CDMO Manufacturing",
    description:
      "Integrated development, fermentation platforms, and global-scale fill-finish solutions.",
    link: "/cdmo",
    cta: "Get medicine",
  },
  {
    title: "Science & Technology",
    description:
      "Comparability research, publications, and next-generation peptide engineering.",
    link: "/science",
    cta: "View trials",
  },
];

const NavigationBridge = () => {
  return (
    <section className="py-24 lg:py-36 bg-section-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid md:grid-cols-3 gap-x-12 gap-y-16">
          {cards.map((card, i) => (
            <ScrollReveal key={card.title} delay={i * 0.1}>
              <div className="flex flex-col gap-6">
                <h3 className="text-2xl font-bold text-foreground leading-tight">
                  {card.title}
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {card.description}
                </p>
                <div>
                  <Link
                    to={card.link}
                    className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                  >
                    <span>{card.cta}</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NavigationBridge;
