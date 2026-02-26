import { useState, useRef, useEffect } from "react";
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

  const visibleCount = 4;
  const maxOffset = milestones.length - visibleCount;
  const [offset, setOffset] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [itemWidth, setItemWidth] = useState(0);

  useEffect(() => {
    const measure = () => {
      if (containerRef.current) {
        setItemWidth(containerRef.current.offsetWidth / visibleCount);
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const next = () => setOffset((o) => Math.min(o + 1, maxOffset));
  const prev = () => setOffset((o) => Math.max(o - 1, 0));

  const totalPages = maxOffset + 1;

  return (
    <section className="py-20 lg:py-28 bg-section-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <ScrollReveal>
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight">
              {rd.timelineTitle}
            </h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight italic">
              {rd.timelineTitleEm}
            </h3>
          </div>
        </ScrollReveal>

        {/* Desktop timeline — continuous sliding strip */}
        <div className="hidden md:block" ref={containerRef}>
          <div className="relative overflow-hidden">
            {/* Horizontal line through circle centers */}
            <div className="absolute left-0 right-0 z-0" style={{ top: "50%" }}>
              <div className="h-[6px] bg-timeline-red w-full rounded-full -translate-y-1/2" />
            </div>

            {/* Sliding strip */}
            <div
              className="relative z-10 flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{
                transform: `translateX(-${offset * itemWidth}px)`,
                width: `${milestones.length * itemWidth}px`,
              }}
            >
              {milestones.map((m, i) => {
                const isTop = i % 2 === 0;
                return (
                  <div
                    key={m.year}
                    className="flex flex-col items-center flex-shrink-0"
                    style={{ width: `${itemWidth}px` }}
                  >
                    {/* Text ABOVE for even indices */}
                    {isTop ? (
                      <div className="text-center mb-5 px-2 min-h-[100px] flex flex-col justify-end">
                        <p className="text-3xl lg:text-4xl font-extrabold text-timeline-red mb-2">{m.year}</p>
                        <p className="text-sm text-foreground leading-relaxed max-w-[240px] mx-auto">{m.event}</p>
                      </div>
                    ) : (
                      <div className="min-h-[100px]" />
                    )}

                    {/* Circle image */}
                    <div className="w-[180px] h-[180px] lg:w-[210px] lg:h-[210px] rounded-full overflow-hidden border-[5px] border-timeline-red shadow-xl flex-shrink-0 bg-background">
                      <img
                        src={m.image}
                        alt={`AMOGEN milestone ${m.year}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>

                    {/* Text BELOW for odd indices */}
                    {!isTop ? (
                      <div className="text-center mt-5 px-2 min-h-[100px]">
                        <p className="text-3xl lg:text-4xl font-extrabold text-timeline-red mb-2">{m.year}</p>
                        <p className="text-sm text-foreground leading-relaxed max-w-[240px] mx-auto">{m.event}</p>
                      </div>
                    ) : (
                      <div className="min-h-[100px]" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Pagination */}
          <div className="flex items-center gap-4 mt-14">
            <button
              onClick={prev}
              disabled={offset === 0}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors disabled:opacity-30"
              aria-label="Previous"
            >
              <ChevronLeft size={18} className="text-foreground" />
            </button>
            <span className="text-sm text-foreground font-medium">
              <span className="font-bold underline underline-offset-4">{offset + 1}</span>
              {" "}of {totalPages}
            </span>
            <button
              onClick={next}
              disabled={offset >= maxOffset}
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
