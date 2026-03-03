import { useState } from "react";
import { ChevronLeft, ChevronRight, FlaskConical, Droplets, Beaker, TestTube, ShieldCheck, Syringe, Settings } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import { useLanguage } from "@/i18n/LanguageContext";
import { TYPE, SPACING } from "@/typography";

const ManufacturingProcess = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const { t } = useLanguage();

  const steps = [
    { title: t.manufacturing.step1Title, step: "STEP 01", description: t.manufacturing.step1Desc, icon: FlaskConical, tags: ["cGMP", "FDA", "EMA"] },
    { title: t.manufacturing.step2Title, step: "STEP 02", description: t.manufacturing.step2Desc, icon: Beaker, tags: ["cGMP", "FDA", "EMA"] },
    { title: t.manufacturing.step3Title, step: "STEP 03", description: t.manufacturing.step3Desc, icon: Droplets, tags: ["cGMP", "FDA", "EMA"] },
    { title: t.manufacturing.step4Title, step: "STEP 04", description: t.manufacturing.step4Desc, icon: TestTube, tags: ["cGMP", "FDA", "EMA"] },
    { title: t.manufacturing.step5Title, step: "STEP 05", description: t.manufacturing.step5Desc, icon: ShieldCheck, tags: ["cGMP", "FDA", "EMA"] },
    { title: t.manufacturing.step6Title, step: "STEP 06", description: t.manufacturing.step6Desc, icon: Syringe, tags: ["cGMP", "FDA", "EMA"] },
    { title: t.manufacturing.step7Title, step: "STEP 07", description: t.manufacturing.step7Desc, icon: Settings, tags: ["cGMP", "FDA", "EMA"] },
  ];

  const prev = () => { setDirection(-1); setActiveIndex((i) => (i === 0 ? steps.length - 1 : i - 1)); };
  const next = () => { setDirection(1); setActiveIndex((i) => (i === steps.length - 1 ? 0 : i + 1)); };

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
      <div key={`${position}-${index}`} className={`flex flex-col justify-between rounded-2xl border border-white/20 p-8 transition-all duration-500 min-h-[420px] ${isCenter ? "bg-white/15 backdrop-blur-md shadow-2xl scale-105 z-10" : "bg-white/8 backdrop-blur-sm opacity-70 scale-95"}`}>
        <div>
          <div className="flex items-start justify-between mb-1">
            <h3 style={{ ...TYPE.h3, color: "white" }} className="max-w-[75%]">{item.title}</h3>
            <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center shrink-0">
              <Icon size={18} className="text-white/80" />
            </div>
          </div>
          <p style={{ ...TYPE.label, color: "rgba(255,255,255,0.6)", marginBottom: "24px" }}>{item.step}</p>
          <div className="w-full h-px bg-white/20 mb-8" />
        </div>
        <div>
          <p style={{ ...TYPE.bodySm, color: "rgba(255,255,255,0.8)", marginBottom: "32px" }}>{item.description}</p>
          <div className="flex gap-2">
            {item.tags.map((tag) => (
              <span key={tag} style={{ ...TYPE.label, fontSize: "12px", color: "rgba(255,255,255,0.9)" }} className="bg-white/15 rounded-full px-4 py-1.5">{tag}</span>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="bg-background" style={{ paddingTop: SPACING.sectionPy.mobile, paddingBottom: "80px" }}>
      <div className="mx-auto" style={{ maxWidth: SPACING.maxWidth, paddingLeft: SPACING.sectionPx, paddingRight: SPACING.sectionPx }}>
        <ScrollReveal>
          <div className="text-center">
            <h2 style={{ ...TYPE.h2, textTransform: "uppercase" }} className="text-foreground tracking-tight">{t.manufacturing.title}</h2>
            <p style={{ ...TYPE.body, color: "hsl(var(--muted-foreground))", marginTop: SPACING.labelToH2 }}>{t.manufacturing.subtitle}</p>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <div className="text-center mt-12">
            <h3 style={TYPE.h3} className="text-foreground">{t.manufacturing.processTitle}</h3>
            <p style={{ ...TYPE.body, color: "hsl(var(--muted-foreground))", marginTop: "8px" }}>{t.manufacturing.processSubtitle}</p>
          </div>
        </ScrollReveal>
      </div>
      <div className="mt-12 bg-[#1a2352] rounded-2xl mx-6 md:mx-12 lg:mx-16 xl:mx-auto overflow-hidden" style={{ maxWidth: SPACING.maxWidth }}>
        <div className="relative py-16 px-4 md:px-16">
          <button onClick={prev} className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center transition-colors" aria-label="Previous step"><ChevronLeft size={20} className="text-white" /></button>
          <button onClick={next} className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center transition-colors" aria-label="Next step"><ChevronRight size={20} className="text-white" /></button>
          <div className="hidden md:block px-8 overflow-hidden">
            <AnimatePresence initial={false} mode="wait" custom={direction}>
              <motion.div key={activeIndex} custom={direction} variants={{ initial: (dir: number) => ({ x: dir > 0 ? "33%" : "-33%", opacity: 0.5 }), animate: { x: 0, opacity: 1 }, exit: (dir: number) => ({ x: dir > 0 ? "-33%" : "33%", opacity: 0.5 }) }} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }} className="grid grid-cols-3 gap-6">
                {renderCard(leftIdx, "left")}
                {renderCard(centerIdx, "center")}
                {renderCard(rightIdx, "right")}
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="md:hidden px-4 overflow-hidden">
            <AnimatePresence initial={false} mode="wait" custom={direction}>
              <motion.div key={activeIndex} custom={direction} variants={{ initial: (dir: number) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0 }), animate: { x: 0, opacity: 1 }, exit: (dir: number) => ({ x: dir > 0 ? "-100%" : "100%", opacity: 0 }) }} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}>
                {renderCard(centerIdx, "center")}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManufacturingProcess;
