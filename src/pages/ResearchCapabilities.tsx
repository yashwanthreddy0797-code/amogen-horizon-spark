import { useState, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import HistoryTimeline from "@/components/HistoryTimeline";
import { motion } from "framer-motion";
import { ArrowRight, Microscope, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

import rdHero from "@/assets/rd-hero.jpg";
import rdLabHands from "@/assets/rd-lab-hands.jpg";
import rdPatientAlzheimer from "@/assets/rd-patient-alzheimer.jpg";
import rdPatientCardio from "@/assets/rd-patient-cardio.jpg";
import rdPatientImmunology from "@/assets/rd-patient-immunology.jpg";
import rdPatientPain from "@/assets/rd-patient-pain.jpg";
import scienceResearch from "@/assets/science-research.jpg";
import sciencePatient from "@/assets/science-patient.jpg";

const ResearchCapabilities = () => {
  const { t } = useLanguage();
  const rd = t.rdPage;

  // Therapeutic areas carousel
  const therapeuticAreas = [
    { title: rd.area1Title, desc: rd.area1Desc, image: rdPatientAlzheimer },
    { title: rd.area2Title, desc: rd.area2Desc, image: rdPatientCardio },
    { title: rd.area3Title, desc: rd.area3Desc, image: sciencePatient },
    { title: rd.area4Title, desc: rd.area4Desc, image: rdPatientImmunology },
    { title: rd.area5Title, desc: rd.area5Desc, image: rdPatientPain },
    { title: rd.area6Title, desc: rd.area6Desc, image: scienceResearch },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => setCurrentSlide((prev) => Math.min(prev + 1, therapeuticAreas.length - 1));
  const prevSlide = () => setCurrentSlide((prev) => Math.max(prev - 1, 0));

  // Champions
  const champions = [
    { name: rd.champion1Name, role: rd.champion1Role },
    { name: rd.champion2Name, role: rd.champion2Role },
    { name: rd.champion3Name, role: rd.champion3Role },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* HERO */}
        <section className="relative min-h-[85vh] flex items-end overflow-hidden">
          <div className="absolute inset-0">
            <img src={rdHero} alt="AMOGEN research laboratory" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-foreground/20" />
          </div>
          <div className="relative w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 pb-20 pt-40">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
              <p className="text-xs uppercase tracking-[0.25em] text-primary-foreground/60 font-semibold mb-4">
                <a href="/" className="hover:text-primary-foreground underline underline-offset-4">{rd.breadcrumbHome}</a>
                <span className="mx-2">/</span>
                <a href="/science" className="hover:text-primary-foreground underline underline-offset-4">{rd.breadcrumbScience}</a>
                <span className="mx-2">/</span>{rd.breadcrumbRD}
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-primary-foreground leading-[1.05] max-w-5xl">{rd.heroTitle}</h1>
            </motion.div>
          </div>
        </section>

        {/* BOLD SCIENCE HAPPENS HERE */}
        <section className="py-24 lg:py-32 bg-background">
          <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-16 text-center">
            <ScrollReveal>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight">
                {rd.boldTitle} <em className="italic text-primary">{rd.boldTitleEm}</em> {rd.boldTitleEnd}
              </h2>
              <p className="text-base md:text-lg text-muted-foreground mt-8 leading-relaxed max-w-2xl mx-auto">{rd.boldDesc}</p>
            </ScrollReveal>
          </div>
        </section>

        {/* CALLED TO DISCOVER */}
        <section className="py-20 lg:py-28 bg-section-cream">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
            <ScrollReveal>
              <div className="flex items-start gap-6 max-w-3xl">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                  <Microscope size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-foreground leading-tight">{rd.discoverTitle}</h3>
                  <p className="text-base md:text-lg text-muted-foreground mt-6 leading-relaxed">{rd.discoverDesc}</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* NOT SLOWING DOWN - STATS */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight text-center mb-4">
                {rd.statsTitle} <em className="italic">{rd.statsTitleEm}</em>
              </h2>
              <p className="text-base text-muted-foreground text-center max-w-2xl mx-auto mb-16">{rd.statsSubtitle}</p>
            </ScrollReveal>
            <div className="grid md:grid-cols-3 gap-10">
              {[
                { value: rd.stat1Value, desc: rd.stat1Desc },
                { value: rd.stat2Value, desc: rd.stat2Desc },
                { value: rd.stat3Value, desc: rd.stat3Desc },
              ].map((stat, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className="text-center">
                    <p className="text-5xl md:text-6xl font-extrabold text-primary">{stat.value}</p>
                    <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{stat.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* IMAGE BREAK */}
        <ScrollReveal>
          <div className="relative h-[40vh] md:h-[50vh] overflow-hidden">
            <img src={rdLabHands} alt="AMOGEN scientist with equipment" className="w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-foreground/20" />
          </div>
        </ScrollReveal>

        {/* BOLD IDEAS TO GAME-CHANGING TREATMENTS */}
        <section className="py-20 lg:py-28 bg-section-cream">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
            <ScrollReveal>
              <div className="max-w-3xl">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-foreground leading-tight">{rd.boldIdeasTitle}</h3>
                <p className="text-base md:text-lg text-muted-foreground mt-6 leading-relaxed">{rd.boldIdeasDesc}</p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* CORE AREAS OF INNOVATION - CAROUSEL */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight mb-4">
                {rd.coreAreasTitle} <em className="italic">{rd.coreAreasTitleEm}</em>
              </h2>
              <p className="text-base text-muted-foreground max-w-2xl mb-12">{rd.coreAreasDesc}</p>
            </ScrollReveal>

            <div className="relative">
              <div ref={carouselRef} className="overflow-hidden">
                <motion.div
                  className="flex gap-6"
                  animate={{ x: `-${currentSlide * (100 / 3)}%` }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  {therapeuticAreas.map((area, i) => (
                    <div key={i} className="min-w-[calc(33.333%-16px)] flex-shrink-0 hidden md:block">
                      <div className="rounded-2xl overflow-hidden bg-card shadow-sm h-full">
                        <div className="h-[300px] overflow-hidden">
                          <img src={area.image} alt={area.title} className="w-full h-full object-cover" loading="lazy" />
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-bold text-foreground mb-3">{area.title}</h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">{area.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>

                {/* Mobile: stacked */}
                <div className="md:hidden flex flex-col gap-6">
                  {therapeuticAreas.map((area, i) => (
                    <div key={i} className="rounded-2xl overflow-hidden bg-card shadow-sm">
                      <div className="h-[220px] overflow-hidden">
                        <img src={area.image} alt={area.title} className="w-full h-full object-cover" loading="lazy" />
                      </div>
                      <div className="p-6">
                        <h3 className="text-lg font-bold text-foreground mb-2">{area.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{area.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Carousel controls */}
              <div className="hidden md:flex items-center gap-4 mt-8">
                <button
                  onClick={prevSlide}
                  disabled={currentSlide === 0}
                  className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors disabled:opacity-30"
                >
                  <ChevronLeft size={20} className="text-foreground" />
                </button>
                <span className="text-sm text-muted-foreground">
                  {currentSlide + 1} of {therapeuticAreas.length - 2}
                </span>
                <button
                  onClick={nextSlide}
                  disabled={currentSlide >= therapeuticAreas.length - 3}
                  className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors disabled:opacity-30"
                >
                  <ChevronRight size={20} className="text-foreground" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* GAME-CHANGING MOMENTS TIMELINE */}
        <HistoryTimeline />

        {/* CLOSING CTA */}
        <section className="py-20 lg:py-28 bg-section-cream">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
            <ScrollReveal>
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight">{rd.ctaTitle}</h2>
                <p className="text-base md:text-lg text-muted-foreground mt-6 leading-relaxed">{rd.ctaDesc}</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
                  <a href="/science" className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
                    {rd.ctaBtn1} <ArrowRight size={14} />
                  </a>
                  <a href="#" className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold rounded-md border border-border text-foreground hover:bg-muted transition-colors">
                    {rd.ctaBtn2} <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ResearchCapabilities;
