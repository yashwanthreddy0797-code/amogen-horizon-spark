import { useState } from "react";
import { ChevronLeft, ChevronRight, FlaskConical, Droplets, Beaker, TestTube, ShieldCheck, Syringe, Settings } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

const steps = [
  {
    title: "Strain / Cell-Line Development",
    step: "STEP 01",
    description: "Advanced cell line development and genetic engineering for optimal protein expression",
    icon: FlaskConical,
    tags: ["cGMP", "FDA", "EMA"],
  },
  {
    title: "Upstream Fermentation / Synthesis",
    step: "STEP 02",
    description: "Controlled fermentation processes ensuring high-yield protein production",
    icon: Beaker,
    tags: ["cGMP", "FDA", "EMA"],
  },
  {
    title: "Downstream Purification",
    step: "STEP 03",
    description: "Multi-step purification ensuring product purity and quality",
    icon: Droplets,
    tags: ["cGMP", "FDA", "EMA"],
  },
  {
    title: "Formulation & Lyophilization / Liquid Prep",
    step: "STEP 04",
    description: "Precise formulation and stabilization for optimal product shelf-life",
    icon: TestTube,
    tags: ["cGMP", "FDA", "EMA"],
  },
  {
    title: "QC / QA & Regulatory Release",
    step: "STEP 05",
    description: "Comprehensive quality control ensuring regulatory compliance and safety",
    icon: ShieldCheck,
    tags: ["cGMP", "FDA", "EMA"],
  },
  {
    title: "Fill–Finish (Pen injector)",
    step: "STEP 06",
    description: "Advanced fill-finish capabilities for patient-ready injection devices",
    icon: Syringe,
    tags: ["cGMP", "FDA", "EMA"],
  },
  {
    title: "Tech Transfer & Scale-up Support",
    step: "STEP 07",
    description: "Seamless technology transfer and scale-up support for global manufacturing",
    icon: Settings,
    tags: ["cGMP", "FDA", "EMA"],
  },
];

const ManufacturingProcess = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const prev = () => {
    setDirection(-1);
    setActiveIndex((i) => (i === 0 ? steps.length - 1 : i - 1));
  };
  const next = () => {
    setDirection(1);
    setActiveIndex((i) => (i === steps.length - 1 ? 0 : i + 1));
  };

  const getVisibleIndices = () => {
    const prevIdx = activeIndex === 0 ? steps.length - 1 : activeIndex - 1;
    const nextIdx = activeIndex === steps.length - 1 ? 0 : activeIndex + 1;
    return [prevIdx, activeIndex, nextIdx];
  };

  const [leftIdx, centerIdx, rightIdx] = getVisibleIndices();

  const renderCard = (index: number, position: "left" | "center" | "right") => {
    const item = steps[index];
    const Icon = item.icon;
    const isCenter = position === "center";

    return (
      <div
        key={`${position}-${index}`}
        className={`
          flex flex-col justify-between rounded-2xl border border-white/20 p-8
          transition-all duration-500 min-h-[420px]
          ${isCenter
            ? "bg-white/15 backdrop-blur-md shadow-2xl scale-105 z-10"
            : "bg-white/8 backdrop-blur-sm opacity-70 scale-95"
          }
        `}
      >
        <div>
          <div className="flex items-start justify-between mb-1">
            <h3 className="text-xl font-bold text-white leading-tight max-w-[75%]">
              {item.title}
            </h3>
            <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center shrink-0">
              <Icon size={18} className="text-white/80" />
            </div>
          </div>
          <p className="text-sm text-white/60 font-semibold mb-6">{item.step}</p>
          <div className="w-full h-px bg-white/20 mb-8" />
        </div>

        <div>
          <p className="text-sm text-white/80 leading-relaxed mb-8">
            {item.description}
          </p>
          <div className="flex gap-2">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-semibold text-white/90 bg-white/15 rounded-full px-4 py-1.5"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="py-16 lg:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <ScrollReveal>
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground tracking-tight uppercase">
              Manufacturing & Quality
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mt-4">
              Excellence in every stage of our integrated biosimilar manufacturing process
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="text-center mt-12">
            <h3 className="text-2xl font-bold text-foreground">Our Integrated Process</h3>
            <p className="text-base text-muted-foreground mt-2">7-Stage Manufacturing Excellence</p>
          </div>
        </ScrollReveal>
      </div>

      {/* Carousel on dark navy background */}
      <div className="mt-12 bg-[#1a2352] rounded-2xl mx-6 md:mx-12 lg:mx-16 xl:mx-auto max-w-7xl overflow-hidden">
        <div className="relative py-16 px-4 md:px-16">
          {/* Navigation arrows */}
          <button
            onClick={prev}
            className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center transition-colors"
            aria-label="Previous step"
          >
            <ChevronLeft size={20} className="text-white" />
          </button>
          <button
            onClick={next}
            className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center transition-colors"
            aria-label="Next step"
          >
            <ChevronRight size={20} className="text-white" />
          </button>

          {/* Cards */}
          <AnimatePresence mode="popLayout" custom={direction}>
            <div className="hidden md:grid grid-cols-3 gap-6 px-8">
              {[
                { idx: leftIdx, pos: "left" as const },
                { idx: centerIdx, pos: "center" as const },
                { idx: rightIdx, pos: "right" as const },
              ].map(({ idx, pos }) => (
                <motion.div
                  key={`${pos}-${idx}`}
                  custom={direction}
                  initial={{ opacity: 0, x: direction > 0 ? 80 : -80, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: direction > 0 ? -80 : 80, scale: 0.9 }}
                  transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  {renderCard(idx, pos)}
                </motion.div>
              ))}
            </div>
          </AnimatePresence>

          {/* Mobile: single card */}
          <AnimatePresence mode="popLayout" custom={direction}>
            <motion.div
              key={`mobile-${centerIdx}`}
              className="md:hidden px-4"
              custom={direction}
              initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            >
              {renderCard(centerIdx, "center")}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ManufacturingProcess;
