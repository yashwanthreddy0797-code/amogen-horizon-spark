import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { motion, AnimatePresence } from "framer-motion";
import facility1Img from "@/assets/facility-1.jpg";
import facility2Img from "@/assets/facility-2.jpg";
import facility3Img from "@/assets/facility-3.jpg";

const cards = [
  {
    title: "Integrated Peptide\nSupply",
    image: facility1Img,
    heading: "Integrated Peptide Supply",
    bullets: [
      "End-to-end peptide supply from development through commercial manufacturing",
      "Seamless integration of API synthesis, purification, and isolation under one roof",
      "Dedicated project management and regulatory support for accelerated timelines",
      "Flexible capacity allocation to meet evolving demand across clinical and commercial phases",
    ],
  },
  {
    title: "Scientific\nExpertise",
    image: facility2Img,
    heading: "Scientific Expertise",
    bullets: [
      "Deep expertise in peptide chemistry spanning over two decades of innovation",
      "Cross-functional teams of chemists, engineers, and analytical scientists",
      "Proprietary process optimization methodologies for yield and purity improvements",
      "Continuous investment in next-generation peptide synthesis technologies",
    ],
  },
  {
    title: "Proven Peptide\nManufacturing",
    image: facility3Img,
    heading: "Proven Peptide Manufacturing",
    sections: [
      {
        subtitle: "Solid-Phase Peptide Synthesis (SPPS)",
        bullets: [
          "Automated fully GMP reactors ranging from 12 L to 10,000 L to produce grams to multi-100-kilogram quantities per batch under cGMP with dedicated peptide lines",
          "Robust and efficient production of large-scale commercial peptides embedded into large-volume solvent & waste-handling logistics, warehouse & site infrastructure",
        ],
      },
      {
        subtitle: "Liquid-Phase Peptide Synthesis (LPPS)",
        bullets: [
          "Technology of choice for cost-effective large-scale manufacturing of short peptides or structures not easily prepared by SPPS",
          "Hybrid fragment coupling of shorter SPPS-generated sequences in solution",
          "Cyclization manufacturing of commercial peptides containing a single or multiple disulfide bridges or cyclized lactam peptides",
        ],
      },
      {
        subtitle: "TAG-Assisted Peptide Synthesis (TAPS)",
        bullets: [
          "Advantages of SPPS & LPPS combined in one approach",
          "Substantial reduction of PMI (>90% less solvents and >50% less raw materials)",
          "Standard small molecule manufacturing equipment used",
          "Bottleneck in the upstream peptide specific manufacturing assets eliminated",
          "Aggregation-prone peptides easier to handle with TAPS than conventional SPPS",
        ],
      },
      {
        subtitle: "Purification",
        bullets: [
          "Reach or exceed the required purity at any scale, leveraging preparative High-Pressure Liquid Chromatography (HPLC) technology",
          "Automated reverse-phase HPLC with columns up to 100 cm in diameter, supported by different ion exchange chromatography columns",
        ],
      },
      {
        subtitle: "Isolation",
        bullets: [
          "Traditional final isolation using lyophilization or spray drying",
          "Alternate isolation technique via precipitation process reduces cost and improves API handling at the drug product site with easy scale-up and transfer",
          "Ability to precipitate any peptide upon request (including long peptides with more than 35 amino acids)",
        ],
      },
    ],
  },
];

const CDMOPeptideCards = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const activeCard = activeIndex !== null ? cards[activeIndex] : null;

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <ScrollReveal>
          <div className="max-w-4xl mb-14">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight">
              Peptide Manufacturing Excellence
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mt-6 leading-relaxed max-w-3xl">
              From discovery to commercial supply, our integrated peptide capabilities deliver quality, scale, and speed across every stage of development.
            </p>
          </div>
        </ScrollReveal>

        {/* Cards grid */}
        <ScrollReveal delay={0.1}>
          <div className="grid md:grid-cols-3 gap-8 relative">
            {cards.map((card, i) => {
              const isActive = activeIndex === i;
              return (
                <div key={card.heading} className="flex flex-col items-center">
                  <button
                    onClick={() => handleClick(i)}
                    className="group w-full focus:outline-none"
                  >
                    <div
                      className={`overflow-hidden rounded-lg aspect-[4/3] mb-5 border-2 transition-colors duration-300 ${
                        isActive ? "border-[#001965]" : "border-transparent"
                      }`}
                    >
                      <img
                        src={card.image}
                        alt={card.heading}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <h3
                      className={`text-lg md:text-xl font-bold leading-snug text-center whitespace-pre-line transition-colors duration-300 ${
                        isActive ? "text-[#8B9E3C]" : "text-[#001965]"
                      }`}
                    >
                      {card.title}
                    </h3>
                  </button>
                </div>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Expandable detail panel */}
        <AnimatePresence mode="wait">
          {activeCard && activeIndex !== null && (
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="relative mt-8">
                {/* Triangle pointer */}
                <div
                  className="absolute -top-4 h-0 w-0 border-l-[16px] border-r-[16px] border-b-[16px] border-l-transparent border-r-transparent border-b-[#001965] transition-all duration-300"
                  style={{
                    left: `calc(${(activeIndex * 100) / 3 + 100 / 6}% - 16px)`,
                  }}
                />

                {/* Content panel */}
                <div className="bg-[#001965] text-white rounded-xl p-8 md:p-12">
                  <h3 className="text-2xl md:text-3xl font-bold mb-8">
                    {activeCard.heading}
                  </h3>

                  {"sections" in activeCard && activeCard.sections ? (
                    <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
                      {activeCard.sections.map((section) => (
                        <div key={section.subtitle}>
                          <h4 className="text-lg font-semibold text-[#8B9E3C] mb-3">
                            {section.subtitle}
                          </h4>
                          <ul className="space-y-2">
                            {section.bullets.map((bullet, j) => (
                              <li
                                key={j}
                                className="flex items-start gap-2 text-sm text-white/85 leading-relaxed"
                              >
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/50 shrink-0" />
                                {bullet}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <ul className="space-y-3 max-w-3xl">
                      {"bullets" in activeCard &&
                        activeCard.bullets?.map((bullet, j) => (
                          <li
                            key={j}
                            className="flex items-start gap-2 text-sm text-white/85 leading-relaxed"
                          >
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/50 shrink-0" />
                            {bullet}
                          </li>
                        ))}
                    </ul>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default CDMOPeptideCards;
