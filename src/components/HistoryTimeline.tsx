import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { useLanguage } from "@/i18n/LanguageContext";

import researchLab from "@/assets/research-lab.jpg";
import manufacturing from "@/assets/manufacturing.jpg";
import scienceResearch from "@/assets/science-research.jpg";
import rdLabHands from "@/assets/rd-lab-hands.jpg";
import productsVials from "@/assets/products-vials.jpg";
import researchCloseup from "@/assets/research-closeup.jpg";
import rdHero from "@/assets/rd-hero.jpg";

const HistoryTimeline = () => {
  const { t } = useLanguage();
  const rd = t.rdPage;

  const milestones = [
    { year: rd.timeline1Year, event: rd.timeline1, image: researchLab },
    { year: rd.timeline2Year, event: rd.timeline2, image: manufacturing },
    { year: rd.timeline3Year, event: rd.timeline3, image: scienceResearch },
    { year: rd.timeline4Year, event: rd.timeline4, image: rdLabHands },
    { year: rd.timeline5Year, event: rd.timeline5, image: productsVials },
    { year: rd.timeline6Year, event: rd.timeline6, image: researchCloseup },
    { year: rd.timeline7Year, event: rd.timeline7, image: rdHero },
  ];

  // Show 4 items per page on desktop
  const itemsPerPage = 4;
  const totalPages = Math.ceil(milestones.length / 2); // 2 milestones visible per "row" (top+bottom)
  const [currentPage, setCurrentPage] = useState(0);
  const maxPage = Math.ceil(milestones.length / itemsPerPage) - 1;

  const nextPage = () => setCurrentPage((p) => Math.min(p + 1, maxPage));
  const prevPage = () => setCurrentPage((p) => Math.max(p - 1, 0));

  // Get visible milestones for current page
  const startIdx = currentPage * itemsPerPage;
  const visibleMilestones = milestones.slice(startIdx, startIdx + itemsPerPage);

  return (
    <section className="py-20 lg:py-28 bg-section-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <ScrollReveal>
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight">
              {rd.timelineTitle}
            </h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight italic">
              {rd.timelineTitleEm}
            </h3>
          </div>
        </ScrollReveal>

        {/* Desktop timeline */}
        <div className="hidden md:block">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              {/* Top row: year + text for odd-indexed items (0, 2 = positions 1, 3) */}
              <div className="grid grid-cols-4 gap-0 mb-6">
                {visibleMilestones.map((m, i) => (
                  <div key={m.year} className="px-4">
                    {i % 2 === 0 ? (
                      <div className="min-h-[120px]">
                        <p className="text-3xl lg:text-4xl font-extrabold text-timeline-red mb-3">
                          {m.year}
                        </p>
                        <p className="text-sm text-foreground leading-relaxed max-w-[280px]">
                          {m.event}
                        </p>
                      </div>
                    ) : (
                      <div className="min-h-[120px]" />
                    )}
                  </div>
                ))}
              </div>

              {/* Red line with circular images */}
              <div className="relative">
                {/* The red line */}
                <div className="absolute top-1/2 left-0 right-0 h-[6px] bg-timeline-red -translate-y-1/2 z-0" />
                
                {/* Curved entry on left */}
                {currentPage === 0 && (
                  <div className="absolute -left-8 top-1/2 -translate-y-1/2 w-16 h-32 z-0">
                    <svg viewBox="0 0 64 128" fill="none" className="w-full h-full">
                      <path
                        d="M0 128 C0 80, 32 64, 64 64"
                        stroke="hsl(var(--timeline-red))"
                        strokeWidth="6"
                        fill="none"
                      />
                    </svg>
                  </div>
                )}

                {/* Continuation line on right */}
                {currentPage < maxPage && (
                  <div className="absolute -right-6 top-1/2 -translate-y-1/2 w-12 h-[6px] bg-timeline-red z-0" />
                )}

                <div className="grid grid-cols-4 gap-0 relative z-10">
                  {visibleMilestones.map((m, i) => (
                    <div key={m.year} className="flex justify-center">
                      <div className="w-[180px] h-[180px] lg:w-[220px] lg:h-[220px] rounded-full overflow-hidden border-[5px] border-background shadow-lg">
                        <img
                          src={m.image}
                          alt={`AMOGEN milestone ${m.year}`}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom row: year + text for even-indexed items (1, 3 = positions 2, 4) */}
              <div className="grid grid-cols-4 gap-0 mt-6">
                {visibleMilestones.map((m, i) => (
                  <div key={m.year} className="px-4">
                    {i % 2 === 1 ? (
                      <div className="min-h-[120px]">
                        <p className="text-3xl lg:text-4xl font-extrabold text-timeline-red mb-3">
                          {m.year}
                        </p>
                        <p className="text-sm text-foreground leading-relaxed max-w-[280px]">
                          {m.event}
                        </p>
                      </div>
                    ) : (
                      <div className="min-h-[120px]" />
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Pagination */}
          <div className="flex items-center gap-4 mt-10">
            <button
              onClick={prevPage}
              disabled={currentPage === 0}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors disabled:opacity-30"
              aria-label="Previous"
            >
              <ChevronLeft size={18} className="text-foreground" />
            </button>
            <span className="text-sm text-foreground font-medium">
              <span className="font-bold underline underline-offset-4">{currentPage + 1}</span>
              {" "}of {maxPage + 1}
            </span>
            <button
              onClick={nextPage}
              disabled={currentPage >= maxPage}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors disabled:opacity-30"
              aria-label="Next"
            >
              <ChevronRight size={18} className="text-foreground" />
            </button>
          </div>
        </div>

        {/* Mobile: vertical stack */}
        <div className="md:hidden space-y-10">
          {milestones.map((m, i) => (
            <ScrollReveal key={m.year} delay={i * 0.08}>
              <div className="flex gap-5 items-start">
                <div className="w-20 h-20 rounded-full overflow-hidden border-[3px] border-timeline-red shrink-0">
                  <img src={m.image} alt={`Milestone ${m.year}`} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div>
                  <p className="text-2xl font-extrabold text-timeline-red">{m.year}</p>
                  <p className="text-sm text-foreground leading-relaxed mt-1">{m.event}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HistoryTimeline;
