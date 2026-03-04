import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";

import facility1Img from "@/assets/facility-1.jpg";
import facility2Img from "@/assets/facility-2.jpg";
import facility3Img from "@/assets/facility-3.jpg";
import { ArrowRight, Plus, Minus, FlaskConical, Pill, Microscope } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { motion } from "framer-motion";
import { TYPE, SPACING } from "@/typography";

const facilities = [
  {
    title: "Facility",
    subtitle: "30 kL",
    tag: "API Manufacturing",
    image: facility1Img,
    details: [
      { label: "5 kL", type: "Stainless steel", count: "x6", icon: FlaskConical },
    ],
  },
  {
    title: "R&D",
    subtitle: "155 kL",
    tag: "Research & Development",
    image: facility2Img,
    details: [
      { label: "15 kL", type: "Stainless steel", count: "x10", icon: FlaskConical },
      { label: "1 kL", type: "Single-use", count: "x3", icon: Microscope },
      { label: "1 kL", type: "Stainless steel", count: "x2", icon: FlaskConical },
    ],
    footnote: "*N-1 Perfusion",
  },
  {
    title: "Analytics",
    subtitle: "180 kL",
    tag: "Formulation",
    image: facility3Img,
    details: [
      { label: "15 kL", type: "Stainless steel", count: "x12", icon: FlaskConical },
    ],
    footnote: "*N-1 Perfusion",
  },
];

const FacilityCard = ({ facility, isExpanded, onToggle, index }: {
  facility: typeof facilities[0];
  isExpanded: boolean;
  onToggle: () => void;
  index: number;
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="rounded-2xl overflow-hidden cursor-pointer relative flex flex-col group"
      style={{ minHeight: 440 }}
      onClick={onToggle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Main card face */}
      <div className="flex flex-col h-full" style={{ minHeight: 440 }}>
        <div className="overflow-hidden h-[280px] relative">
          <img
            src={facility.image}
            alt={facility.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          {/* Tag overlay */}
          <div className="absolute top-4 left-4">
            <span
              className="px-3 py-1.5 rounded-full text-footer-foreground backdrop-blur-md"
              style={{
                ...TYPE.label,
                fontSize: "10px",
                background: "hsla(227, 100%, 20%, 0.75)",
              }}
            >
              {facility.tag}
            </span>
          </div>
        </div>

        {/* Bottom panel */}
        <div
          className={`flex-1 flex flex-col justify-between p-6 transition-all duration-500 ease-out ${
            hovered && !isExpanded
              ? "bg-footer-bg -translate-y-3"
              : "bg-secondary translate-y-0"
          }`}
        >
          <div>
            <h3
              style={TYPE.h3}
              className={`transition-colors duration-300 ${
                hovered && !isExpanded ? "text-footer-foreground" : "text-foreground"
              }`}
            >
              {facility.title}
            </h3>
            <p
              style={TYPE.bodySm}
              className={`transition-colors duration-300 ${
                hovered && !isExpanded ? "text-footer-foreground/70" : "text-muted-foreground"
              }`}
            >
              {facility.subtitle}
            </p>
          </div>
          <div className="flex justify-end">
            <Plus
              className={`transition-colors duration-300 ${
                hovered && !isExpanded ? "text-footer-foreground" : "text-footer-bg"
              }`}
              size={24}
            />
          </div>
        </div>
      </div>

      {/* Expanded detail overlay — slides up */}
      <motion.div
        className="absolute inset-x-0 bottom-0 bg-footer-bg text-footer-foreground rounded-2xl p-6 flex flex-col"
        initial={{ y: "100%" }}
        animate={{ y: isExpanded ? "0%" : "100%" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        style={{ minHeight: 440, height: "100%" }}
      >
        <div className="mb-6">
          <h3 style={TYPE.h3}>{facility.title}</h3>
          <p style={TYPE.bodySm} className="text-primary-foreground/70">
            {facility.subtitle}
          </p>
        </div>
        <div className="flex-1 flex flex-col gap-4">
          {facility.details.map((detail, i) => {
            const Icon = detail.icon;
            return (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Icon size={28} strokeWidth={1.5} className="text-primary-foreground/80" />
                  <div>
                    <p style={{ ...TYPE.bodySm, fontWeight: 600 }}>{detail.label}</p>
                    <p style={{ ...TYPE.bodySm, fontSize: "12px" }} className="text-primary-foreground/70">
                      {detail.type}
                    </p>
                  </div>
                </div>
                <span style={{ ...TYPE.h3, fontSize: "24px" }}>{detail.count}</span>
              </div>
            );
          })}
        </div>
        <div className="flex items-center justify-between mt-4">
          {facility.footnote && (
            <p style={{ ...TYPE.bodySm, fontSize: "12px" }} className="text-primary-foreground/60">
              {facility.footnote}
            </p>
          )}
          <div className="flex justify-end flex-1">
            <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
              <Minus size={18} />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ResearchHighlight = () => {
  const { t } = useLanguage();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="bg-background relative overflow-hidden" style={{ paddingTop: "96px", paddingBottom: "64px" }}>
      {/* Subtle decorative element */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-[0.03] pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)", transform: "translate(30%, -40%)" }}
      />

      <div className="mx-auto" style={{ maxWidth: SPACING.maxWidth, paddingLeft: SPACING.sectionPx, paddingRight: SPACING.sectionPx }}>
        {/* Two-column header layout */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-end mb-16">
          <ScrollReveal>
            <div>
              <p
                style={{ ...TYPE.label, color: "hsl(var(--muted-foreground))", marginBottom: SPACING.labelToH2 }}
              >
                {t.research.label}
              </p>
              <h2 style={TYPE.h2} className="text-foreground">
                {t.research.title}{" "}
                <em className="italic">{t.research.titleEm}</em>
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="md:text-right">
              <p
                style={{ ...TYPE.body, color: "hsl(var(--muted-foreground))" }}
                className="max-w-md md:ml-auto"
              >
                {t.research.description}
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Thin separator line */}
        <ScrollReveal delay={0.12}>
          <div className="w-full h-px bg-border mb-10" />
        </ScrollReveal>

        {/* Facility cards */}
        <div className="grid md:grid-cols-3" style={{ gap: SPACING.cardGap }}>
          {facilities.map((facility, i) => (
            <FacilityCard
              key={facility.title}
              facility={facility}
              isExpanded={expandedIndex === i}
              onToggle={() => handleToggle(i)}
              index={i}
            />
          ))}
        </div>

        {/* CTA row */}
        <ScrollReveal delay={0.25}>
          <div className="flex items-center justify-between mt-12 pt-8 border-t border-border">
            <p style={{ ...TYPE.bodySm, color: "hsl(var(--muted-foreground))" }} className="hidden md:block">
              World-class infrastructure across 3 facilities
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-3 group/cta"
              style={TYPE.button}
            >
              <span className="text-foreground group-hover/cta:text-primary transition-colors">
                {t.research.cta}
              </span>
              <span className="w-10 h-10 rounded-full bg-footer-bg text-footer-foreground flex items-center justify-center group-hover/cta:bg-primary transition-colors">
                <ArrowRight size={16} />
              </span>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ResearchHighlight;
