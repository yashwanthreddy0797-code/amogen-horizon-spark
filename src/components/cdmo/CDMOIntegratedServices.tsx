import ScrollReveal from "@/components/ScrollReveal";
import { ArrowRight, FlaskConical, Microscope, TestTubes, Scan } from "lucide-react";

interface ServiceCard {
  icon: typeof FlaskConical;
  title: string;
}

const services: ServiceCard[] = [
  { icon: FlaskConical, title: "Fermentation & Upstream" },
  { icon: Microscope, title: "Downstream Purification" },
  { icon: TestTubes, title: "Formulation & Fill-Finish" },
  { icon: Scan, title: "Process Development" },
];

const CDMOIntegratedServices = () => {
  return (
    <section className="py-0 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-4">
            <div className="flex gap-1">
              <span className="block w-8 h-[3px] bg-foreground rounded-full" />
              <span className="block w-8 h-[3px] bg-foreground rounded-full" />
              <span className="block w-4 h-[3px] bg-foreground rounded-full" />
            </div>
            <span className="text-sm font-medium text-muted-foreground tracking-wide">Services</span>
          </div>
        </ScrollReveal>

        <div className="relative min-h-[650px] mt-8">
          {/* SVG dotted arc passing through all 4 cards */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-0"
            viewBox="0 0 1000 650"
            preserveAspectRatio="xMidYMid meet"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M 100 120 Q 250 480, 500 500 Q 750 480, 900 120"
              stroke="hsl(var(--muted-foreground))"
              strokeWidth="1.2"
              strokeDasharray="5 5"
              opacity="0.25"
              fill="none"
            />
          </svg>

          {/* Center heading */}
          <div className="absolute top-[8%] left-1/2 -translate-x-1/2 text-center z-10">
            <ScrollReveal>
              <div className="w-10 h-10 rounded-full border border-muted-foreground/40 flex items-center justify-center mx-auto mb-4">
                <span className="text-sm text-muted-foreground">05</span>
              </div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-foreground leading-tight">
                Integrated<br />Services
              </h2>
            </ScrollReveal>
          </div>

          {/* Card 0 — top-left */}
          <div className="absolute top-0 left-0 md:left-[3%] z-10">
            <ServiceCardComponent card={services[0]} delay={0.1} />
          </div>

          {/* Card 1 — mid-left */}
          <div className="absolute top-[42%] left-[16%] md:left-[20%] z-10">
            <ServiceCardComponent card={services[1]} delay={0.3} />
          </div>

          {/* Card 2 — mid-right */}
          <div className="absolute top-[42%] right-[16%] md:right-[20%] z-10">
            <ServiceCardComponent card={services[2]} delay={0.5} />
          </div>

          {/* Card 3 — top-right */}
          <div className="absolute top-0 right-0 md:right-[3%] z-10">
            <ServiceCardComponent card={services[3]} delay={0.7} />
          </div>
        </div>
      </div>
    </section>
  );
};

const ServiceCardComponent = ({ card, delay }: { card: ServiceCard; delay: number }) => {
  const Icon = card.icon;
  return (
    <ScrollReveal delay={delay}>
      <div className="w-[160px] md:w-[180px] bg-card rounded-2xl p-5 shadow-sm border border-border/50 hover:shadow-lg transition-all duration-500 hover:-translate-y-1">
        <div className="w-full aspect-square rounded-xl bg-muted/50 flex items-center justify-center mb-3">
          <Icon size={36} className="text-muted-foreground" strokeWidth={1.2} />
        </div>
        <h3 className="text-sm font-semibold text-foreground leading-snug mb-3">{card.title}</h3>
        <button className="inline-flex items-center gap-1.5 bg-foreground text-background rounded-full px-4 py-2 text-xs font-medium hover:opacity-90 transition-opacity">
          <ArrowRight size={14} />
          View
        </button>
      </div>
    </ScrollReveal>
  );
};

export default CDMOIntegratedServices;
