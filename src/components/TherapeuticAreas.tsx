import ScrollReveal from "@/components/ScrollReveal";
import { ArrowRight } from "lucide-react";
import liraglutideImg from "@/assets/liraglutide.png";
import tirzepatideImg from "@/assets/tirzepatide.png";
import dulaglutideImg from "@/assets/dulaglutide.png";
import semaglutideImg from "@/assets/semaglutide.png";
import { TYPE, SPACING } from "@/typography";

const areas = [
  { title: "Liraglutide", description: "First-generation GLP-1 receptor agonist for type 2 diabetes and chronic weight management.", image: liraglutideImg },
  { title: "Tirzepatide", description: "Dual GIP/GLP-1 receptor agonist delivering superior glycemic control and weight reduction outcomes.", image: tirzepatideImg },
  { title: "Dulaglutide", description: "Once-weekly GLP-1 agonist with proven cardiovascular risk reduction in type 2 diabetes patients.", image: dulaglutideImg },
  { title: "Semaglutide", description: "Next-generation GLP-1 analog with oral and injectable formulations for metabolic indications.", image: semaglutideImg },
];

const TherapeuticAreas = () => {
  return (
    <section id="therapeutic-areas" className="bg-background" style={{ paddingTop: "48px", paddingBottom: "80px" }}>
      <div className="mx-auto" style={{ maxWidth: SPACING.maxWidth, paddingLeft: SPACING.sectionPx, paddingRight: SPACING.sectionPx }}>
        <ScrollReveal>
          <p style={{ ...TYPE.label, color: "hsl(var(--muted-foreground))", marginBottom: SPACING.labelToH2 }}>Pipeline & Product Portfolio</p>
          <h2 style={TYPE.h2} className="text-foreground max-w-2xl">Our molecule portfolio.</h2>
          <p style={{ ...TYPE.bodyLg, color: "hsl(var(--muted-foreground))", marginTop: SPACING.headingToSub }} className="max-w-2xl">
            From development through commercialization, our GLP-1 portfolio addresses the full spectrum of metabolic health needs.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 mt-16" style={{ gap: SPACING.cardGap }}>
          {areas.map((area, i) => (
            <ScrollReveal key={area.title} delay={i * 0.1}>
              <a href="#" className="group block relative rounded-2xl overflow-hidden h-[380px] cursor-pointer">
                <img src={area.image} alt={area.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 style={{ ...TYPE.h3, color: "white" }} className="mb-2">{area.title}</h3>
                  <div className="flex items-center gap-2 text-primary-foreground/80 group-hover:text-primary-foreground transition-colors" style={TYPE.bodySm}>
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
