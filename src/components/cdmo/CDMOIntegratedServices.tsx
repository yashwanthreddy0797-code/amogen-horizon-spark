import ScrollReveal from "@/components/ScrollReveal";
import { ArrowRight } from "lucide-react";
import { FlaskConical, Microscope, Beaker, TestTubes, Scan } from "lucide-react";

interface ServiceCard {
  icon: typeof FlaskConical;
  title: string;
  gridArea: string;
  alignSelf?: string;
  justifySelf?: string;
}

const services: ServiceCard[] = [
  {
    icon: FlaskConical,
    title: "Fermentation & Upstream",
    gridArea: "1 / 1 / 2 / 2",
    alignSelf: "start",
    justifySelf: "start",
  },
  {
    icon: Microscope,
    title: "Downstream Purification",
    gridArea: "2 / 2 / 3 / 3",
    alignSelf: "center",
    justifySelf: "center",
  },
  {
    icon: Beaker,
    title: "Analytical & QC",
    gridArea: "2 / 3 / 3 / 4",
    alignSelf: "center",
    justifySelf: "center",
  },
  {
    icon: TestTubes,
    title: "Formulation & Fill-Finish",
    gridArea: "1 / 4 / 2 / 5",
    alignSelf: "start",
    justifySelf: "end",
  },
  {
    icon: Scan,
    title: "Process Development",
    gridArea: "3 / 1 / 4 / 2",
    alignSelf: "end",
    justifySelf: "start",
  },
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
        <div className="relative min-h-[700px] mt-8">
          {/* SVG dotted connector lines */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 1000 700"
            preserveAspectRatio="xMidYMid meet"
            fill="none"
            aria-hidden="true"
          >
            {/* Line from card 1 (top-left) down to card 2 (mid-left) */}
            <line x1="150" y1="220" x2="350" y2="380" stroke="hsl(var(--muted-foreground))" strokeWidth="1.5" strokeDasharray="6 6" opacity="0.3" />
            {/* Line from card 2 to card 3 */}
            <line x1="430" y1="440" x2="600" y2="380" stroke="hsl(var(--muted-foreground))" strokeWidth="1.5" strokeDasharray="6 6" opacity="0.3" />
            {/* Line from card 3 to card 4 (top-right) */}
            <line x1="680" y1="340" x2="850" y2="180" stroke="hsl(var(--muted-foreground))" strokeWidth="1.5" strokeDasharray="6 6" opacity="0.3" />
            {/* Line from card 2 down to card 5 */}
            <line x1="350" y1="480" x2="180" y2="580" stroke="hsl(var(--muted-foreground))" strokeWidth="1.5" strokeDasharray="6 6" opacity="0.3" />
            {/* Line from card 3 down */}
            <line x1="620" y1="480" x2="620" y2="650" stroke="hsl(var(--muted-foreground))" strokeWidth="1.5" strokeDasharray="6 6" opacity="0.3" />
          </svg>

          {/* Center heading */}
          <div className="absolute top-[10%] left-1/2 -translate-x-1/2 text-center z-10">
            <ScrollReveal>
              <div className="w-10 h-10 rounded-full border border-muted-foreground/40 flex items-center justify-center mx-auto mb-4">
                <span className="text-sm text-muted-foreground">05</span>
              </div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-foreground leading-tight">
                Integrated<br />Services
              </h2>
            </ScrollReveal>
          </div>

          {/* Card positions — scattered layout */}
          {/* Top-left */}
          <div className="absolute top-0 left-0 md:left-[2%]">
            <ServiceCardComponent card={services[0]} delay={0.1} />
          </div>

          {/* Top-right */}
          <div className="absolute top-0 right-0 md:right-[2%]">
            <ServiceCardComponent card={services[3]} delay={0.2} />
          </div>

          {/* Mid-left */}
          <div className="absolute top-[45%] left-[18%] md:left-[22%]">
            <ServiceCardComponent card={services[1]} delay={0.3} />
          </div>

          {/* Mid-right */}
          <div className="absolute top-[40%] right-[18%] md:right-[22%]">
            <ServiceCardComponent card={services[2]} delay={0.35} />
          </div>

          {/* Bottom-left */}
          <div className="absolute bottom-0 left-[4%] md:left-[8%]">
            <ServiceCardComponent card={services[4]} delay={0.4} />
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
      <div className="w-[200px] md:w-[220px] bg-card rounded-2xl p-6 shadow-sm border border-border/50 hover:shadow-md transition-shadow">
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
