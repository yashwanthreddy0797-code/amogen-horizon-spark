import ScrollReveal from "@/components/ScrollReveal";
import { ArrowRight } from "lucide-react";
import manufacturingImg from "@/assets/manufacturing.jpg";
import patientCareImg from "@/assets/patient-care.jpg";
import researchCloseupImg from "@/assets/research-closeup.jpg";

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
    <section className="py-24 lg:py-36 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid md:grid-cols-3 gap-5">
          {cards.map((card, i) => (
            <ScrollReveal key={card.title} delay={i * 0.1}>
              <a
                href="#"
                className="group block rounded-2xl overflow-hidden bg-card"
              >
                <div className="overflow-hidden h-[280px]">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-7">
                  <h3 className="text-xl font-bold text-foreground mb-3 leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                    {card.description}
                  </p>
                  <div className="flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
                    <span>{card.cta}</span>
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
