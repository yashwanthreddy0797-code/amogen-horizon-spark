import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

import fermentationImg from "@/assets/service-fermentation.jpg";
import purificationImg from "@/assets/service-purification.jpg";
import fillFinishImg from "@/assets/service-fill-finish.jpg";
import processDevImg from "@/assets/service-process-dev.jpg";

interface ServiceCard {
  image: string;
  title: string;
}

const services: ServiceCard[] = [
  { image: fermentationImg, title: "Fermentation & Upstream" },
  { image: purificationImg, title: "Downstream Purification" },
  { image: fillFinishImg, title: "Formulation & Fill-Finish" },
  { image: processDevImg, title: "Process Development" },
];

const CDMOIntegratedServices = () => {
  const cardsRef = useRef(null);
  const cardsInView = useInView(cardsRef, { once: true, margin: "-60px" });

  return (
    <section className="bg-background relative overflow-hidden pb-8">
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

        <div ref={cardsRef} className="relative mt-8" style={{ height: "clamp(480px, 50vw, 580px)" }}>
          {/* SVG dotted arc */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-0"
            viewBox="0 0 1000 580"
            preserveAspectRatio="xMidYMid meet"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M 80 100 Q 250 440, 500 460 Q 750 440, 920 100"
              stroke="hsl(var(--muted-foreground))"
              strokeWidth="1.2"
              strokeDasharray="5 5"
              opacity="0.25"
              fill="none"
            />
          </svg>

          {/* Center heading */}
          <div className="absolute top-[6%] left-1/2 -translate-x-1/2 text-center z-10">
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
          <CardReveal inView={cardsInView} index={0} className="absolute top-0 left-0 md:left-[3%] z-10">
            <ServiceCardComponent card={services[0]} />
          </CardReveal>

          {/* Card 1 — mid-left */}
          <CardReveal inView={cardsInView} index={1} className="absolute top-[42%] left-[16%] md:left-[20%] z-10">
            <ServiceCardComponent card={services[1]} />
          </CardReveal>

          {/* Card 2 — mid-right */}
          <CardReveal inView={cardsInView} index={2} className="absolute top-[42%] right-[16%] md:right-[20%] z-10">
            <ServiceCardComponent card={services[2]} />
          </CardReveal>

          {/* Card 3 — top-right */}
          <CardReveal inView={cardsInView} index={3} className="absolute top-0 right-0 md:right-[3%] z-10">
            <ServiceCardComponent card={services[3]} />
          </CardReveal>
        </div>
      </div>
    </section>
  );
};

const CardReveal = ({
  children,
  inView,
  index,
  className,
}: {
  children: React.ReactNode;
  inView: boolean;
  index: number;
  className?: string;
}) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 50, scale: 0.92 }}
    animate={
      inView
        ? { opacity: 1, y: 0, scale: 1 }
        : { opacity: 0, y: 50, scale: 0.92 }
    }
    transition={{
      duration: 0.7,
      delay: index * 0.25,
      ease: [0.25, 0.1, 0.25, 1],
    }}
  >
    {children}
  </motion.div>
);

const ServiceCardComponent = ({ card }: { card: ServiceCard }) => {
  return (
    <div className="w-[160px] md:w-[180px] bg-card rounded-2xl p-5 shadow-sm border border-border/50 hover:shadow-lg transition-all duration-500 hover:-translate-y-1">
      <div className="w-full aspect-square rounded-xl overflow-hidden mb-3">
        <img
          src={card.image}
          alt={card.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <h3 className="text-sm font-semibold text-foreground leading-snug mb-3">{card.title}</h3>
      <button className="inline-flex items-center gap-1.5 bg-foreground text-background rounded-full px-4 py-2 text-xs font-medium hover:opacity-90 transition-opacity">
        <ArrowRight size={14} />
        View
      </button>
    </div>
  );
};

export default CDMOIntegratedServices;
