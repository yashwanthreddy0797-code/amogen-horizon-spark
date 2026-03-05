import ScrollReveal from "@/components/ScrollReveal";
import { ArrowRight, FlaskConical, Microscope, Beaker, TestTubes, Scan } from "lucide-react";

interface ServiceCard {
  icon: typeof FlaskConical;
  title: string;
}

const services: ServiceCard[] = [
  { icon: FlaskConical, title: "Fermentation & Upstream" },
  { icon: Microscope, title: "Downstream Purification" },
  { icon: Beaker, title: "Analytical & QC" },
  { icon: TestTubes, title: "Formulation & Fill-Finish" },
  { icon: Scan, title: "Process Development" },
];

/* Card positions on an arc — top-left, mid-left, center-bottom, mid-right, top-right */
const cardPositions = [
  { top: "0%", left: "0%", mdLeft: "2%" },
  { top: "38%", left: "12%", mdLeft: "16%" },
  { top: "58%", left: "50%", mdLeft: "50%", translate: true },
  { top: "38%", right: "12%", mdRight: "16%" },
  { top: "0%", right: "0%", mdRight: "2%" },
];

const CDMOIntegratedServices = () => {
  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Section header */}
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

        {/* Main layout */}
        <div className="relative min-h-[750px] mt-8">
          {/* SVG dotted connector lines forming a semi-circle arc */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-0"
            viewBox="0 0 1000 750"
            preserveAspectRatio="xMidYMid meet"
            fill="none"
            aria-hidden="true"
          >
            {/* Arc from card 0 (top-left) → card 1 (mid-left) */}
            <line x1="140" y1="200" x2="240" y2="380" stroke="hsl(var(--muted-foreground))" strokeWidth="1.2" strokeDasharray="5 5" opacity="0.25" />
            {/* Arc from card 1 (mid-left) → card 2 (center-bottom) */}
            <line x1="310" y1="440" x2="470" y2="540" stroke="hsl(var(--muted-foreground))" strokeWidth="1.2" strokeDasharray="5 5" opacity="0.25" />
            {/* Arc from card 2 (center-bottom) → card 3 (mid-right) */}
            <line x1="530" y1="540" x2="700" y2="440" stroke="hsl(var(--muted-foreground))" strokeWidth="1.2" strokeDasharray="5 5" opacity="0.25" />
            {/* Arc from card 3 (mid-right) → card 4 (top-right) */}
            <line x1="770" y1="380" x2="870" y2="200" stroke="hsl(var(--muted-foreground))" strokeWidth="1.2" strokeDasharray="5 5" opacity="0.25" />
          </svg>

          {/* Center heading */}
          <div className="absolute top-[12%] left-1/2 -translate-x-1/2 text-center z-10">
            <ScrollReveal>
              <div className="w-10 h-10 rounded-full border border-muted-foreground/40 flex items-center justify-center mx-auto mb-4">
                <span className="text-sm text-muted-foreground">05</span>
              </div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-foreground leading-tight">
                Integrated<br />Services
              </h2>
            </ScrollReveal>
          </div>

          {/* Cards on arc — each with increasing delay for staggered reveal */}
          {/* Card 0 — top-left */}
          <div className="absolute top-0 left-0 md:left-[2%] z-10">
            <ServiceCardComponent card={services[0]} delay={0.1} />
          </div>

          {/* Card 1 — mid-left */}
          <div className="absolute top-[38%] left-[12%] md:left-[16%] z-10">
            <ServiceCardComponent card={services[1]} delay={0.25} />
          </div>

          {/* Card 2 — center-bottom (lowest point of arc) */}
          <div className="absolute top-[58%] left-1/2 -translate-x-1/2 z-10">
            <ServiceCardComponent card={services[2]} delay={0.4} />
          </div>

          {/* Card 3 — mid-right */}
          <div className="absolute top-[38%] right-[12%] md:right-[16%] z-10">
            <ServiceCardComponent card={services[3]} delay={0.55} />
          </div>

          {/* Card 4 — top-right */}
          <div className="absolute top-0 right-0 md:right-[2%] z-10">
            <ServiceCardComponent card={services[4]} delay={0.7} />
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
      <div className="w-[200px] md:w-[220px] bg-card rounded-2xl p-6 shadow-sm border border-border/50 hover:shadow-lg transition-all duration-500 hover:-translate-y-1">
        <div className="w-full aspect-square rounded-xl bg-muted/50 flex items-center justify-center mb-4">
          <Icon size={48} className="text-muted-foreground" strokeWidth={1.2} />
        </div>
        <h3 className="text-base font-semibold text-foreground leading-snug mb-4">{card.title}</h3>
        <button className="inline-flex items-center gap-2 bg-foreground text-background rounded-full px-5 py-2.5 text-sm font-medium hover:opacity-90 transition-opacity">
          <ArrowRight size={16} />
          View
        </button>
      </div>
    </ScrollReveal>
  );
};

export default CDMOIntegratedServices;
