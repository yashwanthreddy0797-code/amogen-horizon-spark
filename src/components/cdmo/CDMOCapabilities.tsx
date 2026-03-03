import ScrollReveal from "@/components/ScrollReveal";
import { ArrowRight, Microscope, Dna, FlaskConical, ScanSearch, Factory } from "lucide-react";
import { TYPE, SPACING } from "@/typography";

const capabilities = [
  { title: "Late\nDiscovery", desc: "Early-stage molecule optimization and developability assessment to de-risk your pipeline.", icon: Microscope },
  { title: "Cell Line\nDevelopment", desc: "Proprietary platform processes for high-expressing, stable cell line generation.", icon: Dna },
  { title: "Process\nDevelopment", desc: "Scalable upstream and downstream process development from bench to commercial scale.", icon: FlaskConical },
  { title: "Analytical\nDevelopment", desc: "Comprehensive analytical method development, qualification, and transfer capabilities.", icon: ScanSearch },
  { title: "Non-GMP/CGMP\nManufacturing", desc: "Flexible manufacturing from non-GMP toxicology to CGMP clinical and commercial supply.", icon: Factory },
];

const CDMOCapabilities = () => {
  return (
    <section id="manufacturing-services" className="bg-white" style={{ paddingTop: SPACING.sectionPy.desktop, paddingBottom: SPACING.sectionPy.desktop }}>
      <div className="mx-auto" style={{ maxWidth: SPACING.maxWidth, paddingLeft: SPACING.sectionPx, paddingRight: SPACING.sectionPx }}>
        <ScrollReveal>
          <div className="max-w-4xl mb-14">
            <h2 style={TYPE.h2} className="text-foreground">Biologics CDMO Development Capabilities</h2>
            <p style={{ ...TYPE.body, color: "hsl(var(--muted-foreground))", marginTop: SPACING.headingToSub }} className="max-w-3xl">
              Our integrated service offerings include: Late Discovery, Cell Line Development, Process Development, Analytical Development, and Non-GMP/CGMP Manufacturing — all to support faster IND filing.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5" style={{ gap: "16px" }}>
          {capabilities.map((cap, i) => (
            <ScrollReveal key={cap.title} delay={i * 0.06}>
              <a href="#" className="group rounded-xl p-6 md:p-8 flex flex-col h-[200px] md:h-[220px] hover:opacity-80 transition-colors" style={{ backgroundColor: "#ccc5bd" }}>
                <cap.icon size={40} className="text-[#001965]" />
                <div className="mt-auto flex items-end justify-between">
                  <h3 style={{ ...TYPE.bodySm, fontWeight: 600, color: "#001965" }} className="whitespace-pre-line leading-snug">{cap.title}</h3>
                  <ArrowRight size={18} className="text-[#001965] opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all flex-shrink-0 mb-0.5" />
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
