import ScrollReveal from "@/components/ScrollReveal";
import { ArrowRight } from "lucide-react";

const capabilities = [
  { title: "Late\nDiscovery", desc: "Early-stage molecule optimization and developability assessment to de-risk your pipeline." },
  { title: "Cell Line\nDevelopment", desc: "Proprietary platform processes for high-expressing, stable cell line generation." },
  { title: "Process\nDevelopment", desc: "Scalable upstream and downstream process development from bench to commercial scale." },
  { title: "Analytical\nDevelopment", desc: "Comprehensive analytical method development, qualification, and transfer capabilities." },
  { title: "Non-GMP/CGMP\nManufacturing", desc: "Flexible manufacturing from non-GMP toxicology to CGMP clinical and commercial supply." },
];

const CDMOCapabilities = () => {
  return (
    <section id="manufacturing-services" className="py-20 lg:py-28 bg-section-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <ScrollReveal>
          <div className="max-w-4xl mb-14">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight">
              Biologics CDMO Development Capabilities
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mt-6 leading-relaxed max-w-3xl">
              Our integrated service offerings include: Late Discovery, Cell Line Development, Process Development, Analytical Development, and Non-GMP/CGMP Manufacturing — all to support faster IND filing.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {capabilities.map((cap, i) => (
            <ScrollReveal key={cap.title} delay={i * 0.06}>
              <a
                href="#"
                className="group bg-muted rounded-xl p-6 md:p-8 flex flex-col justify-between h-[180px] md:h-[200px] hover:bg-primary/5 transition-colors"
              >
                <h3 className="text-base md:text-lg font-bold text-primary whitespace-pre-line leading-snug">
                  {cap.title}
                </h3>
                <ArrowRight
                  size={18}
                  className="text-primary mt-auto self-end opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
                />
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CDMOCapabilities;
