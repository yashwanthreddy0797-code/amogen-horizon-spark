import ScrollReveal from "@/components/ScrollReveal";
import { ArrowRight } from "lucide-react";
import manufacturing from "@/assets/manufacturing.jpg";

const solutions = [
  {
    title: "Simplified IND",
    desc: "Expedite timeline focused on IND Phase 1 by utilizing AMOGEN's proprietary platform processes.",
  },
  {
    title: "Comprehensive IND",
    desc: "Leverage wider scopes of study to mitigate the risk for development and ensure robust submissions.",
  },
  {
    title: "Enhanced CMC",
    desc: "Replace cell line/process/formulation to improve key features and product quality attributes.",
  },
];

const CDMOSolutions = () => {
  return (
    <section id="quality-systems" className="py-20 lg:py-28 bg-section-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <ScrollReveal>
          <div className="max-w-4xl mb-14">
            <p className="text-xs uppercase tracking-[0.2em] text-primary font-bold mb-4">
              Customized Solutions
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight">
              Customized CMC Development Solutions
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left — Image + branding */}
          <ScrollReveal>
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <img
                src={manufacturing}
                alt="CMC Development Solutions"
                className="w-full h-[300px] md:h-[400px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-2xl font-extrabold text-primary-foreground">
                  SelecTailor™
                </h3>
                <p className="text-sm text-primary-foreground/80 mt-1">
                  Tailored CMC packages and IND support to accelerate early development
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Right — Description + cards */}
          <div>
            <ScrollReveal delay={0.1}>
              <p className="text-base text-muted-foreground leading-relaxed mb-4">
                Equipped with a full suite of biopharma development and CMC services, AMOGEN provides tailored solutions aligned with your development strategy. Through SelecTailor™, you gain access to deep expertise in cell line development, analytical development, and process development — all designed to streamline your path from gene to IND.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed mb-10">
                Every biologics development journey is unique and complex. Our team leverages proprietary platform processes and a diverse service portfolio to help you de-risk early-phase development while minimizing time and cost.
              </p>
            </ScrollReveal>

            <div className="space-y-4">
              {solutions.map((sol, i) => (
                <ScrollReveal key={sol.title} delay={0.15 + i * 0.08}>
                  <div className="bg-card rounded-xl p-6 shadow-sm border border-border/50">
                    <h4 className="text-lg font-bold text-primary mb-2">{sol.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{sol.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <ScrollReveal>
          <div className="mt-16 bg-primary rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl md:text-2xl font-extrabold text-primary-foreground">
                Contact us to accelerate your development journey.
              </h3>
            </div>
            <a
              href="#rfp-process"
              className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold rounded-md bg-primary-foreground text-primary hover:bg-primary-foreground/90 transition-colors shrink-0"
            >
              Contact Us <ArrowRight size={14} />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CDMOSolutions;
