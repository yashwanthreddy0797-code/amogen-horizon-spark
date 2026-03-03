import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { useLanguage } from "@/i18n/LanguageContext";
import { TYPE, SPACING } from "@/typography";

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
      if (containerRef.current) setItemWidth(containerRef.current.offsetWidth / visibleCount);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const next = () => setOffset((o) => Math.min(o + 1, maxOffset));
  const prev = () => setOffset((o) => Math.max(o - 1, 0));
  const totalPages = maxOffset + 1;

  return (
    <section className="bg-white overflow-hidden" style={{ paddingTop: SPACING.sectionPy.desktop, paddingBottom: SPACING.sectionPy.desktop }}>
      <div className="mx-auto" style={{ maxWidth: SPACING.maxWidth, paddingLeft: SPACING.sectionPx, paddingRight: SPACING.sectionPx }}>
        <ScrollReveal>
          <div style={{ marginBottom: "80px" }}>
            <h2 style={TYPE.h2} className="text-foreground">{rd.timelineTitle}</h2>
            <h3 style={{ ...TYPE.h2, fontStyle: "italic" }} className="text-foreground">{rd.timelineTitleEm}</h3>
          </div>
        </ScrollReveal>

        <div className="hidden md:block" ref={containerRef}>
          <div className="relative overflow-hidden">
            <div className="absolute left-0 right-0 z-0" style={{ top: "50%" }}>
              <div className="h-[6px] bg-timeline-red w-full rounded-full -translate-y-1/2" />
            </div>
            <div className="relative z-10 flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]" style={{ transform: `translateX(-${offset * itemWidth}px)`, width: `${milestones.length * itemWidth}px` }}>
              {milestones.map((m, i) => {
                const isTop = i % 2 === 0;
                return (
                  <div key={m.year} className="flex flex-col items-center flex-shrink-0" style={{ width: `${itemWidth}px` }}>
                    {isTop ? (
                      <div className="text-center mb-5 px-2 min-h-[100px] flex flex-col justify-end">
                        <p style={{ ...TYPE.h3, color: "hsl(var(--timeline-red))", marginBottom: "8px" }}>{m.year}</p>
                        <p style={TYPE.bodySm} className="text-foreground max-w-[240px] mx-auto">{m.event}</p>
                      </div>
                    ) : <div className="min-h-[100px]" />}
                    <div className="w-[180px] h-[180px] lg:w-[210px] lg:h-[210px] rounded-full overflow-hidden border-[5px] border-timeline-red shadow-xl flex-shrink-0 bg-background">
                      <img src={m.image} alt={`AMOGEN milestone ${m.year}`} className="w-full h-full object-cover" loading="lazy" />
                    </div>
                    {!isTop ? (
                      <div className="text-center mt-5 px-2 min-h-[100px]">
                        <p style={{ ...TYPE.h3, color: "hsl(var(--timeline-red))", marginBottom: "8px" }}>{m.year}</p>
                        <p style={TYPE.bodySm} className="text-foreground max-w-[240px] mx-auto">{m.event}</p>
                      </div>
                    ) : <div className="min-h-[100px]" />}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex items-center gap-4 mt-14">
            <button onClick={prev} disabled={offset === 0} className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors disabled:opacity-30" aria-label="Previous"><ChevronLeft size={18} className="text-foreground" /></button>
            <span style={TYPE.bodySm} className="text-foreground"><span className="font-bold underline underline-offset-4">{offset + 1}</span> of {totalPages}</span>
            <button onClick={next} disabled={offset >= maxOffset} className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors disabled:opacity-30" aria-label="Next"><ChevronRight size={18} className="text-foreground" /></button>
          </div>
        </div>

        <div className="md:hidden space-y-10">
          {milestones.map((m, i) => (
            <ScrollReveal key={m.year} delay={i * 0.08}>
              <div className="flex gap-5 items-start">
                <div className="w-20 h-20 rounded-full overflow-hidden border-[3px] border-timeline-red shrink-0">
                  <img src={m.image} alt={`Milestone ${m.year}`} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div>
                  <p style={{ ...TYPE.h3, color: "hsl(var(--timeline-red))" }}>{m.year}</p>
                  <p style={TYPE.bodySm} className="text-foreground mt-1">{m.event}</p>
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
