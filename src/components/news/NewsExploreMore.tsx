import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import facility1 from "@/assets/facility-1.jpg";
import patientCare from "@/assets/patient-care.jpg";
import productsVials from "@/assets/products-vials.jpg";

interface ExploreCard {
  image: string;
  title: string;
  description: string;
  linkText: string;
}

const cards: ExploreCard[] = [
  {
    image: facility1,
    title: "Key facts",
    description:
      "Since our founding, we've pioneered discoveries and biosimilar medicines to help make life better for patients around the world.",
    linkText: "Learn more about AMOGEN",
  },
  {
    image: patientCare,
    title: "Therapeutic areas",
    description:
      "Learn more about the therapeutic areas we serve, explore care options, and hear about our commitment to patient access.",
    linkText: "View all therapeutic areas",
  },
  {
    image: productsVials,
    title: "Our pipeline",
    description:
      "View our growing portfolio of biosimilar candidates in development across metabolic, immunology, and oncology.",
    linkText: "View our pipeline",
  },
];

const NewsExploreMore = () => (
  <section className="py-20 lg:py-28 bg-section-cream">
    <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
      <ScrollReveal>
        <h2
          className="text-2xl md:text-3xl font-semibold text-foreground mb-12 text-center"
        >
          Explore More
        </h2>
      </ScrollReveal>

      <div className="grid md:grid-cols-3 gap-8">
        {cards.map((card, i) => (
          <ScrollReveal key={card.title} delay={i * 0.1}>
            <a href="#" className="group block h-full">
              <div className="rounded-2xl overflow-hidden bg-card border border-border h-full flex flex-col">
                <div className="overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-[200px] object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 md:p-8 flex flex-col flex-1">
                  <h4 className="text-lg font-semibold text-foreground mb-3">
                    {card.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
                    {card.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
                    {card.linkText} <ArrowRight size={15} />
                  </span>
                </div>
              </div>
            </a>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default NewsExploreMore;
