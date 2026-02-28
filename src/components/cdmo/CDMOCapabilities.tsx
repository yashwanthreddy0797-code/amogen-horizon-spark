import ScrollReveal from "@/components/ScrollReveal";
import { ArrowRight, Microscope, Dna, FlaskConical, ScanSearch, Factory } from "lucide-react";

const capabilities = [
  { title: "Late\nDiscovery", desc: "Early-stage molecule optimization and developability assessment to de-risk your pipeline.", icon: Microscope },
  { title: "Cell Line\nDevelopment", desc: "Proprietary platform processes for high-expressing, stable cell line generation.", icon: Dna },
  { title: "Process\nDevelopment", desc: "Scalable upstream and downstream process development from bench to commercial scale.", icon: FlaskConical },
  { title: "Analytical\nDevelopment", desc: "Comprehensive analytical method development, qualification, and transfer capabilities.", icon: ScanSearch },
  { title: "Non-GMP/CGMP\nManufacturing", desc: "Flexible manufacturing from non-GMP toxicology to CGMP clinical and commercial supply.", icon: Factory },
];

const CDMOCapabilities = () => {
  return (
    <section id="manufacturing-services" className="py-20 lg:py-28 bg-white">
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
                className="group rounded-xl p-6 md:p-8 flex flex-col h-[200px] md:h-[220px] hover:opacity-80 transition-colors" style={{ backgroundColor: "#ccc5bd" }}
              >
                <cap.icon size={40} className="text-[#001965] opacity-70" />
                <div className="mt-auto flex items-end justify-between">
                  <h3 className="text-base md:text-lg font-bold text-[#001965] whitespace-pre-line leading-snug">
                    {cap.title}
                  </h3>
                  <ArrowRight
                    size={18}
                    className="text-[#001965] opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all flex-shrink-0 mb-0.5"
                  />
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CDMOCapabilities;
