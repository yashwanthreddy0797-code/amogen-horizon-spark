import ScrollReveal from "@/components/ScrollReveal";
import { ArrowRight } from "lucide-react";
import manufacturingImg from "@/assets/manufacturing.jpg";
import patientCareImg from "@/assets/patient-care.jpg";
import researchCloseupImg from "@/assets/research-closeup.jpg";
import { TYPE, SPACING } from "@/typography";

const cards = [
  {
    title: "Medicine starts with safety",
    description: "Thousands of employees work every day to make sure AMOGEN medicine is made consistently and with the highest quality.",
    cta: "Examine our process",
    image: manufacturingImg,
  },
  {
    title: "Pioneering clinical trials",
    description: "Clinical trials need patients to help medicine get better. We make participating accessible and transparent.",
    cta: "View trials",
    image: patientCareImg,
  },
  {
    title: "The hope of medicine for every body",
    description: "We may one day be able to make medicine tailored to an individual's biology using new treatments made from their own genetic code.",
    cta: "What is genetic medicine",
    image: researchCloseupImg,
  },
];

const EditorialCards = () => {
  return (
    <section className="bg-background" style={{ paddingTop: SPACING.sectionPy.desktop, paddingBottom: SPACING.sectionPy.desktop }}>
      <div className="mx-auto" style={{ maxWidth: SPACING.maxWidth, paddingLeft: SPACING.sectionPx, paddingRight: SPACING.sectionPx }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: SPACING.cardGap }} className="max-md:grid-cols-1">
          {cards.map((card, i) => (
            <ScrollReveal key={card.title} delay={i * 0.1}>
              <a href="#" className="group block rounded-2xl overflow-hidden bg-card">
                <div className="overflow-hidden h-[280px]">
                  <img src={card.image} alt={card.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                </div>
                <div style={{ padding: SPACING.cardPadding }}>
                  <h3 style={TYPE.h3} className="text-foreground mb-3">{card.title}</h3>
                  <p style={{ ...TYPE.bodySm, color: "hsl(var(--muted-foreground))", marginBottom: SPACING.headingToSub }}>{card.description}</p>
                  <div className="flex items-center gap-2 text-primary group-hover:gap-3 transition-all" style={TYPE.bodySm}>
                    <span style={{ fontWeight: 600 }}>{card.cta}</span>
                    <ArrowRight size={14} />
                  </div>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EditorialCards;
