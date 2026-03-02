import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

const items = [
  {
    num: "01",
    label: "Advanced Peptide Synthesis Platform",
    heading: "Versatile toolbox maximizing peptide production",
    body: "Our 15+ years of experience, and development of sophisticated solid-phase peptide synthesis (SPPS) tools & strategies, allow us to unlock full manufacturing potential — providing enhanced product yields and quality. We fine-tune the synthesis of your peptide by optimizing resin selection, coupling strategies, and purification protocols, paired with a robust and reliable analytical screening system.",
  },
  {
    num: "02",
    label: "Scalable & Cost-Efficient Manufacturing",
    heading: "Intensified processes considering safety, economy, and regulatory requirements",
    body: "In addition to improving efficiency by adopting continuous manufacturing approaches, major advantages of our scalable platform include a reduction in production costs and waste. This significantly reduces time-to-market and in turn lowers capital requirements for commercial-scale production. Further manufacturing savings are realized through our optimized purification protocols, increasing space-time yields across all GLP-1 analog programs.",
  },
  {
    num: "03",
    label: "Industry Proven & Regulatory Compliant",
    heading: "Comprehensively documented elements of a characterized toolbox simplifying regulatory procedures",
    body: "All components of AMOGEN's biosimilar development toolbox are thoroughly characterized and full documentation is readily available to support regulatory filings for your peptide candidate. Processes developed by AMOGEN have been used to produce biosimilar peptides for clinical applications including GLP-1 receptor agonists, as well as GMP products for clinical studies — meeting the requirements for regulatory filings (US, Europe, and ROW) for the relevant field of application.",
  },
];

const ScienceTechnologyAccordion = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Heading */}
        <h2
          className="text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold leading-tight mb-14 max-w-3xl"
          style={{ color: "#001965" }}
        >
          Enhance biosimilar peptide development with AMOGEN's proprietary platform
        </h2>

        {/* Card */}
        <div
          className="rounded-2xl p-8 md:p-12 lg:p-16"
          style={{ backgroundColor: "#F0EFED" }}
        >
          <div className="grid md:grid-cols-[minmax(280px,380px)_1fr] gap-10 lg:gap-16">
            {/* Left — accordion nav */}
            <div className="flex flex-col gap-2">
              {items.map((item, i) => {
                const isActive = active === i;
                return (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`text-left px-5 py-5 rounded-lg transition-all duration-300 flex items-center justify-between gap-4 ${
                      isActive
                        ? "bg-white shadow-sm"
                        : "bg-transparent"
                    }`}
                  >
                    <span
                      className={`text-xs md:text-sm font-bold uppercase tracking-wide leading-snug transition-colors duration-300 ${
                        isActive ? "" : "opacity-50"
                      }`}
                      style={{ color: "#001965" }}
                    >
                      {item.num} {item.label}
                    </span>
                    {isActive && (
                      <motion.span
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ArrowRight size={18} style={{ color: "#001965" }} />
                      </motion.span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Right — content */}
            <div className="min-h-[280px] flex items-start">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                >
                  <h3
                    className="text-2xl md:text-3xl font-extrabold leading-snug mb-6"
                    style={{ color: "#001965" }}
                  >
                    {items[active].heading}
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
                    {items[active].body}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScienceTechnologyAccordion;
