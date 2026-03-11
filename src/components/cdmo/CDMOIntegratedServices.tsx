import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ArrowRight, X } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

import fermentationImg from "@/assets/service-fermentation.jpg";
import purificationImg from "@/assets/service-purification.jpg";
import fillFinishImg from "@/assets/service-fill-finish.jpg";
import processDevImg from "@/assets/service-process-dev.jpg";

interface ServiceCard {
  image: string;
  title: string;
  description: string;
  details: string[];
}

const services: ServiceCard[] = [
  {
    image: fermentationImg,
    title: "Fermentation & Upstream",
    description:
      "Our fermentation and upstream processing capabilities encompass state-of-the-art bioreactor systems ranging from bench-scale to commercial production volumes, enabling seamless scale-up of microbial and mammalian cell culture processes.",
    details: [
      "Fed-batch & continuous fermentation",
      "Microbial & mammalian cell culture",
      "Bench to 10,000L bioreactor scale",
      "Real-time PAT monitoring",
      "Media & feed optimization",
      "Seed train development",
    ],
  },
  {
    image: purificationImg,
    title: "Downstream Purification",
    description:
      "Our downstream purification team delivers robust, scalable processes using advanced chromatography, filtration, and separation technologies to achieve exceptional product purity and yield for biologics and biosimilars.",
    details: [
      "Affinity & ion exchange chromatography",
      "Tangential flow filtration (TFF)",
      "Continuous chromatography (MCSGP)",
      "Viral inactivation & nanofiltration",
      "Ultra/diafiltration",
      "Process analytical validation",
    ],
  },
  {
    image: fillFinishImg,
    title: "Formulation & Fill-Finish",
    description:
      "We provide comprehensive formulation development and aseptic fill-finish services for vials, pre-filled syringes, and lyophilized products under full cGMP compliance with integrated quality assurance.",
    details: [
      "Liquid & lyophilized formulations",
      "Pre-filled syringe filling",
      "Aseptic vial filling lines",
      "Visual inspection systems",
      "Container closure integrity testing",
      "Stability program management",
    ],
  },
  {
    image: processDevImg,
    title: "Process Development",
    description:
      "Our process development scientists leverage Design of Experiments (DoE) and Quality by Design (QbD) principles to develop robust, transferable manufacturing processes from early-stage through commercial production.",
    details: [
      "Clone selection & cell line development",
      "DoE-driven process optimization",
      "Tech transfer & scale-up",
      "Process characterization studies",
      "Analytical method development",
      "Regulatory filing support (IND/BLA)",
    ],
  },
];

const CDMOIntegratedServices = () => {
  const cardsRef = useRef(null);
  const cardsInView = useInView(cardsRef, { once: true, margin: "-60px" });
  const [selectedService, setSelectedService] = useState<ServiceCard | null>(null);

  return (
    <section className="bg-background relative overflow-hidden pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <ScrollReveal>
          <div />
        </ScrollReveal>

        <div ref={cardsRef} className="relative mt-8" style={{ height: "clamp(480px, 50vw, 580px)" }}>
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

          <CardReveal inView={cardsInView} index={0} className="absolute top-0 left-0 md:left-[3%] z-10">
            <ServiceCardComponent card={services[0]} onView={() => setSelectedService(services[0])} />
          </CardReveal>
          <CardReveal inView={cardsInView} index={1} className="absolute top-[42%] left-[16%] md:left-[20%] z-10">
            <ServiceCardComponent card={services[1]} onView={() => setSelectedService(services[1])} />
          </CardReveal>
          <CardReveal inView={cardsInView} index={2} className="absolute top-[42%] right-[16%] md:right-[20%] z-10">
            <ServiceCardComponent card={services[2]} onView={() => setSelectedService(services[2])} />
          </CardReveal>
          <CardReveal inView={cardsInView} index={3} className="absolute top-0 right-0 md:right-[3%] z-10">
            <ServiceCardComponent card={services[3]} onView={() => setSelectedService(services[3])} />
          </CardReveal>
        </div>
      </div>

      {/* Full-page detail overlay */}
      <AnimatePresence>
        {selectedService && (
          <ServiceDetailOverlay
            service={selectedService}
            onClose={() => setSelectedService(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

/* ---------- Detail Overlay ---------- */
const ServiceDetailOverlay = ({
  service,
  onClose,
}: {
  service: ServiceCard;
  onClose: () => void;
}) => (
  <motion.div
    className="fixed inset-0 z-[100] flex flex-col"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
  >
    {/* Backdrop */}
    <motion.div
      className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    />

    {/* Panel */}
    <motion.div
      className="relative z-10 bg-background m-4 md:m-8 lg:m-12 rounded-2xl overflow-hidden flex-1 flex flex-col shadow-2xl"
      initial={{ y: 60, opacity: 0, scale: 0.97 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      exit={{ y: 40, opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {/* Top bar */}
      <div className="flex items-center justify-between px-8 md:px-12 py-5 border-b border-border/40">
        <p className="text-xs tracking-widest uppercase text-muted-foreground">
          CDMO &nbsp;/&nbsp; Integrated Services &nbsp;/&nbsp;{" "}
          <span className="text-foreground font-medium">{service.title}</span>
        </p>
        <button
          onClick={onClose}
          className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
          aria-label="Close"
        >
          <X size={18} className="text-foreground" />
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-8 md:px-12 lg:px-16 py-10 md:py-16 scrollbar-hide" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left — Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src={service.image}
                alt={service.title}
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
          </motion.div>

          {/* Right — Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="flex flex-col gap-6"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight">
              {service.title}
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              {service.description}
            </p>

            <div className="mt-2">
              <h4 className="text-xs tracking-widest uppercase text-muted-foreground mb-4">
                Key Capabilities
              </h4>
              <ul className="space-y-3">
                {service.details.map((item, i) => (
                  <motion.li
                    key={item}
                    className="flex items-start gap-3 text-sm text-foreground"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 + i * 0.06, duration: 0.35 }}
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  </motion.div>
);

/* ---------- Card helpers ---------- */
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
    animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.92 }}
    transition={{ duration: 0.7, delay: index * 0.25, ease: [0.25, 0.1, 0.25, 1] }}
  >
    {children}
  </motion.div>
);

const ServiceCardComponent = ({ card, onView }: { card: ServiceCard; onView: () => void }) => (
  <div className="w-[160px] md:w-[180px] bg-card rounded-2xl p-5 shadow-sm border border-border/50 hover:shadow-lg transition-all duration-500 hover:-translate-y-1">
    <div className="w-full aspect-square rounded-xl overflow-hidden mb-3">
      <img src={card.image} alt={card.title} className="w-full h-full object-cover" loading="lazy" />
    </div>
    <h3 className="text-sm font-semibold text-foreground leading-snug mb-3">{card.title}</h3>
    <button
      onClick={onView}
      className="inline-flex items-center gap-1.5 bg-foreground text-background rounded-full px-4 py-2 text-xs font-medium hover:opacity-90 transition-opacity"
    >
      <ArrowRight size={14} />
      View
    </button>
  </div>
);

export default CDMOIntegratedServices;