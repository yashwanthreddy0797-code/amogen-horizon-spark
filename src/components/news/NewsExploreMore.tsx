import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import facility1 from "@/assets/facility-1.jpg";
import patientCare from "@/assets/patient-care.jpg";
import productsVials from "@/assets/products-vials.jpg";
import { TYPE, SPACING } from "@/typography";

const cards = [
  { image: facility1, title: "Key facts", description: "Since our founding, we've pioneered discoveries and biosimilar medicines to help make life better for patients around the world.", linkText: "Learn more about AMOGEN" },
  { image: patientCare, title: "Therapeutic areas", description: "Learn more about the therapeutic areas we serve, explore care options, and hear about our commitment to patient access.", linkText: "View all therapeutic areas" },
  { image: productsVials, title: "Our pipeline", description: "View our growing portfolio of biosimilar candidates in development across metabolic, immunology, and oncology.", linkText: "View our pipeline" },
];

const NewsExploreMore = () => (
  <section className="bg-section-cream" style={{ paddingTop: SPACING.sectionPy.desktop, paddingBottom: SPACING.sectionPy.desktop }}>
    <div className="mx-auto" style={{ maxWidth: SPACING.maxWidth, paddingLeft: SPACING.sectionPx, paddingRight: SPACING.sectionPx }}>
      <ScrollReveal>
        <h2 style={{ ...TYPE.h2, marginBottom: "48px" }} className="text-foreground text-center">Explore More</h2>
      </ScrollReveal>

      <div className="grid md:grid-cols-3" style={{ gap: SPACING.cardGap }}>
        {cards.map((card, i) => (
          <ScrollReveal key={card.title} delay={i * 0.1}>
            <a href="#" className="group block h-full">
              <div className="rounded-2xl overflow-hidden bg-card border border-border h-full flex flex-col">
                <div className="overflow-hidden">
                  <img src={card.image} alt={card.title} className="w-full h-[200px] object-cover transition-transform duration-700 group-hover:scale-[1.03]" loading="lazy" />
                </div>
                <div className="flex flex-col flex-1" style={{ padding: SPACING.cardPadding }}>
                  <h4 style={TYPE.h3} className="text-foreground mb-3">{card.title}</h4>
                  <p style={{ ...TYPE.bodySm, color: "hsl(var(--muted-foreground))" }} className="mb-5 flex-1">{card.description}</p>
                  <span className="inline-flex items-center gap-2 text-primary group-hover:gap-3 transition-all" style={{ ...TYPE.bodySm, fontWeight: 600 }}>
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
