import ScrollReveal from "@/components/ScrollReveal";
import { ArrowRight } from "lucide-react";
import liraglutideImg from "@/assets/liraglutide.png";
import tirzepatideImg from "@/assets/tirzepatide.png";
import dulaglutideImg from "@/assets/dulaglutide.png";
import semaglutideImg from "@/assets/semaglutide.png";

const areas = [
  {
    title: "Liraglutide",
    description: "First-generation GLP-1 receptor agonist for type 2 diabetes and chronic weight management.",
    image: liraglutideImg,
  },
  {
    title: "Tirzepatide",
    description: "Dual GIP/GLP-1 receptor agonist delivering superior glycemic control and weight reduction outcomes.",
    image: tirzepatideImg,
  },
  {
    title: "Dulaglutide",
    description: "Once-weekly GLP-1 agonist with proven cardiovascular risk reduction in type 2 diabetes patients.",
    image: dulaglutideImg,
  },
  {
    title: "Semaglutide",
    description: "Next-generation GLP-1 analog with oral and injectable formulations for metabolic indications.",
    image: semaglutideImg,
  },
];

const TherapeuticAreas = () => {
  return (
    <section id="therapeutic-areas" className="py-24 lg:py-36 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <ScrollReveal>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-4">
            Pipeline & Product Portfolio
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight max-w-2xl">
            Our molecule portfolio.
          </h2>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl leading-relaxed">
            From development through commercialization, our GLP-1 portfolio addresses the full spectrum of metabolic health needs.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-16">
          {areas.map((area, i) => (
            <ScrollReveal key={area.title} delay={i * 0.1}>
              <a
                href="#"
                className="group block relative rounded-2xl overflow-hidden h-[380px] cursor-pointer"
              >
                <img
                  src={area.image}
                  alt={area.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-primary-foreground mb-2">
                    {area.title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm font-medium text-primary-foreground/80 group-hover:text-primary-foreground transition-colors">
                    <span>Explore Condition</span>
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
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

export default TherapeuticAreas;
