import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";

import facility1Img from "@/assets/facility-1.jpg";
import facility2Img from "@/assets/facility-2.jpg";
import facility3Img from "@/assets/facility-3.jpg";
import { ArrowRight, Plus, Minus, FlaskConical, Pill, Microscope } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { motion } from "framer-motion";

const facilities = [
  {
    title: "Facility 1",
    subtitle: "30 kL",
    image: facility1Img,
    details: [
      { label: "5 kL", type: "Stainless steel", count: "x6", icon: FlaskConical },
    ],
  },
  {
    title: "Facility 2",
    subtitle: "155 kL",
    image: facility2Img,
    details: [
      { label: "15 kL", type: "Stainless steel", count: "x10", icon: FlaskConical },
      { label: "1 kL", type: "Single-use", count: "x3", icon: Microscope },
      { label: "1 kL", type: "Stainless steel", count: "x2", icon: FlaskConical },
    ],
    footnote: "*N-1 Perfusion",
  },
  {
    title: "Facility 3",
    subtitle: "180 kL",
    image: facility3Img,
    details: [
      { label: "15 kL", type: "Stainless steel", count: "x12", icon: FlaskConical },
    ],
    footnote: "*N-1 Perfusion",
  },
];

const FacilityCard = ({ facility, isExpanded, onToggle }: {
  facility: typeof facilities[0];
  isExpanded: boolean;
  onToggle: () => void;
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="rounded-2xl overflow-hidden cursor-pointer relative flex flex-col"
      style={{ minHeight: 420 }}
      onClick={onToggle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Base card - always rendered */}
      <div className="flex flex-col h-full" style={{ minHeight: 420 }}>
        <div className="overflow-hidden h-[260px]">
          <img
            src={facility.image}
            alt={facility.title}
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            loading="lazy"
          />
        </div>
        <div
          className={`flex-1 flex flex-col justify-between p-6 transition-all duration-500 ease-out ${
            hovered && !isExpanded ? "bg-footer-bg -translate-y-3" : "bg-secondary translate-y-0"
          }`}
        >
          <div>
            <h3 className={`text-xl font-bold transition-colors duration-300 ${hovered && !isExpanded ? "text-footer-foreground" : "text-foreground"}`}>
              {facility.title}
            </h3>
            <p className={`text-sm transition-colors duration-300 ${hovered && !isExpanded ? "text-footer-foreground/70" : "text-muted-foreground"}`}>
              {facility.subtitle}
            </p>
          </div>
          <div className="flex justify-end">
            <Plus className={`transition-colors duration-300 ${hovered && !isExpanded ? "text-footer-foreground" : "text-footer-bg"}`} size={24} />
          </div>
        </div>
      </div>

      {/* Expanded blue panel - slides up from bottom */}
      <motion.div
        className="absolute inset-x-0 bottom-0 bg-footer-bg text-footer-foreground rounded-2xl p-6 flex flex-col"
        initial={{ y: "100%" }}
        animate={{ y: isExpanded ? "0%" : "100%" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        style={{ minHeight: 420, height: "100%" }}
      >
        <div className="mb-6">
          <h3 className="text-xl font-bold">{facility.title}</h3>
          <p className="text-sm text-primary-foreground/70">{facility.subtitle}</p>
        </div>
        <div className="flex-1 flex flex-col gap-4">
          {facility.details.map((detail, i) => {
            const Icon = detail.icon;
            return (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Icon size={28} strokeWidth={1.5} className="text-primary-foreground/80" />
                  <div>
                    <p className="text-sm font-bold">{detail.label}</p>
                    <p className="text-xs text-primary-foreground/70">{detail.type}</p>
                  </div>
                </div>
                <span className="text-2xl font-bold">{detail.count}</span>
              </div>
            );
          })}
        </div>
        <div className="flex items-center justify-between mt-4">
          {facility.footnote && (
            <p className="text-xs text-primary-foreground/60">{facility.footnote}</p>
          )}
          <div className="flex justify-end flex-1">
            <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
              <Minus size={18} />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const ResearchHighlight = () => {
  const { t } = useLanguage();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="pt-10 lg:pt-14 pb-10 lg:pb-14 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <ScrollReveal>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-4">{t.research.label}</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight max-w-3xl mb-4">
            {t.research.title}{" "}<em className="italic">{t.research.titleEm}</em>
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed max-w-2xl mb-10">{t.research.description}</p>
        </ScrollReveal>
        {/* Facility Cards */}
        <ScrollReveal delay={0.15}>
          <div className="grid md:grid-cols-3 gap-5">
            {facilities.map((facility, i) => (
              <FacilityCard
                key={facility.title}
                facility={facility}
                isExpanded={expandedIndex === i}
                onToggle={() => handleToggle(i)}
              />
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.25}>
          <div className="mt-10">
            <a href="#" className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-md bg-footer-bg text-footer-foreground hover:bg-footer-bg/90 transition-colors">
              <span>{t.research.cta}</span>
              <ArrowRight size={14} />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ResearchHighlight;
