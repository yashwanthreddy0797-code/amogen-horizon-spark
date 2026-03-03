import { useState, useRef, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import HistoryTimeline from "@/components/HistoryTimeline";
import MicrobialScience from "@/components/science/MicrobialScience";
import { motion } from "framer-motion";
import {
  ArrowRight,
  FlaskConical,
  Microscope,
  Dna,
  TestTube,
  Beaker,
  Target,
  BookOpen,
  BarChart3,
  FileText,
  ChevronLeft,
  ChevronRight } from
"lucide-react";
import scienceHero from "@/assets/science-hero.jpg";
import sciencePatient from "@/assets/science-patient.jpg";
import scienceResearch from "@/assets/science-research.jpg";
import rdLabHands from "@/assets/rd-lab-hands.jpg";
import rdPatientAlzheimer from "@/assets/rd-patient-alzheimer.jpg";
import rdPatientCardio from "@/assets/rd-patient-cardio.jpg";
import rdPatientImmunology from "@/assets/rd-patient-immunology.jpg";
import rdPatientPain from "@/assets/rd-patient-pain.jpg";
import { useLanguage } from "@/i18n/LanguageContext";
import ScienceTechnologyAccordion from "@/components/science/ScienceTechnologyAccordion";

const Science = () => {
  const { t } = useLanguage();
  const rd = t.rdPage;

  const pipelineStats = [
  { phase: t.sciencePage.discovery, count: 3, color: "bg-primary/20" },
  { phase: t.sciencePage.preclinical, count: 2, color: "bg-primary/40" },
  { phase: t.sciencePage.phaseI, count: 2, color: "bg-primary/60" },
  { phase: t.sciencePage.phaseIII, count: 1, color: "bg-primary/80" },
  { phase: t.sciencePage.regulatory, count: 1, color: "bg-primary" }];


  const therapeuticAreas = [
  { icon: Target, title: t.sciencePage.area1Title, description: t.sciencePage.area1Desc },
  { icon: Dna, title: t.sciencePage.area2Title, description: t.sciencePage.area2Desc },
  { icon: Microscope, title: t.sciencePage.area3Title, description: t.sciencePage.area3Desc }];


  const technologyPlatforms = [
  { icon: FlaskConical, title: t.sciencePage.platform1Title, description: t.sciencePage.platform1Desc },
  { icon: Beaker, title: t.sciencePage.platform2Title, description: t.sciencePage.platform2Desc },
  { icon: TestTube, title: t.sciencePage.platform3Title, description: t.sciencePage.platform3Desc }];


  // Core areas of innovation carousel (from R&D page)
  const coreAreas = [
  { title: rd.area1Title, desc: rd.area1Desc, image: rdPatientAlzheimer },
  { title: rd.area2Title, desc: rd.area2Desc, image: rdPatientCardio },
  { title: rd.area3Title, desc: rd.area3Desc, image: sciencePatient },
  { title: rd.area4Title, desc: rd.area4Desc, image: rdPatientImmunology },
  { title: rd.area5Title, desc: rd.area5Desc, image: rdPatientPain },
  { title: rd.area6Title, desc: rd.area6Desc, image: scienceResearch }];


  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [carouselItemWidth, setCarouselItemWidth] = useState(0);

  useEffect(() => {
    const measure = () => {
      if (carouselRef.current) {
        setCarouselItemWidth(carouselRef.current.offsetWidth / 3);
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => Math.min(prev + 1, coreAreas.length - 3));
  const prevSlide = () => setCurrentSlide((prev) => Math.max(prev - 1, 0));

  // Publications data
  const publications = [
  {
    title: "Comparative Analytical Characterization of Semaglutide Biosimilar AMG-S01",
    journal: "Journal of Pharmaceutical Sciences",
    year: "2025",
    type: "Research Article"
  },
  {
    title: "Process Development and Scale-Up of GLP-1 Receptor Agonist Peptides via SPPS",
    journal: "Biotechnology & Bioengineering",
    year: "2024",
    type: "Research Article"
  },
  {
    title: "Forced Degradation and Stability Studies of Liraglutide Biosimilar Formulations",
    journal: "European Journal of Pharmaceutics",
    year: "2024",
    type: "Technical Report"
  },
  {
    title: "Immunogenicity Assessment Framework for Peptide Biosimilars: A Regulatory Perspective",
    journal: "BioDrugs",
    year: "2025",
    type: "Review"
  }];


  // Comparability data
  const comparabilityMetrics = [
  { label: "Structural Similarity", value: "99.7%", desc: "Primary & higher-order structure match vs. reference" },
  { label: "Functional Bioequivalence", value: "98.5%", desc: "Receptor binding and cell-based bioassay concordance" },
  { label: "Purity Profile", value: "≥99.0%", desc: "HPLC purity across all manufactured batches" },
  { label: "Stability Match", value: "36 mo", desc: "Equivalent shelf-life demonstrated under ICH conditions" }];


  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        {/* HERO */}
        <section className="relative min-h-[85vh] flex items-end overflow-hidden" style={{ backgroundColor: "#88C59F" }}>
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          <div className="relative w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 pb-20 pt-40">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
              <p className="text-xs uppercase tracking-[0.25em] text-primary-foreground/60 font-semibold mb-4">
                <a href="/" className="hover:text-primary-foreground underline underline-offset-4">{t.sciencePage.breadcrumbHome}</a>
                <span className="mx-2">/</span>{t.sciencePage.breadcrumbScience}
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-primary-foreground leading-[1.05] max-w-5xl">{t.sciencePage.heroTitle}</h1>
              <p className="mt-8 text-lg md:text-xl text-primary-foreground/80 max-w-2xl leading-relaxed">{t.sciencePage.heroDesc}</p>
            </motion.div>
          </div>
        </section>

        {/* GETTING MEDICINE FASTER */}
        































        

        {/* THERAPEUTIC AREAS */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
            <ScrollReveal>
              <div className="max-w-3xl">
                <p className="text-xs uppercase tracking-[0.2em] text-primary font-bold mb-4">{t.sciencePage.therapeuticLabel}</p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight">
                  {t.sciencePage.therapeuticTitle}{" "}<em className="italic">{t.sciencePage.therapeuticTitleEm}</em>
                </h2>
                <p className="text-base md:text-lg text-muted-foreground mt-6 leading-relaxed">{t.sciencePage.therapeuticDesc}</p>
              </div>
            </ScrollReveal>
            <div className="grid md:grid-cols-3 gap-8 mt-14">
              {therapeuticAreas.map((area, i) => {
                const Icon = area.icon;
                return (
                  <ScrollReveal key={area.title} delay={i * 0.1}>
                    <div className="bg-card rounded-2xl p-8 shadow-sm h-full flex flex-col">
                      <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6"><Icon size={24} className="text-primary" /></div>
                      <h3 className="text-xl font-bold text-foreground mb-3">{area.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed flex-1">{area.description}</p>
                      <a href="#" className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:underline mt-6">{t.sciencePage.learnMore} <ArrowRight size={14} /></a>
                    </div>
                  </ScrollReveal>);

              })}
            </div>
          </div>
        </section>

        {/* IMAGE BREAK */}
        <ScrollReveal>
          <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
            <img src={sciencePatient} alt="Patient looking hopeful" className="w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-foreground/30" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center max-w-3xl px-6">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary-foreground leading-tight">
                  {t.sciencePage.imageBreakTitle}{" "}<em className="italic">{t.sciencePage.imageBreakTitleEm}</em>
                </h2>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* TECHNOLOGY STACK */}
        























        

        {/* TECHNOLOGY ACCORDION */}
        <ScienceTechnologyAccordion />

        {/* COMPARABILITY DATA */}
        <section id="comparability-data" className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
            <ScrollReveal>
              <div className="max-w-3xl mb-16">
                <p className="text-xs uppercase tracking-[0.2em] text-primary font-bold mb-4">Analytical Excellence</p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight">
                  Comparability <em className="italic">data</em>
                </h2>
                <p className="text-base md:text-lg text-muted-foreground mt-6 leading-relaxed">
                  Comprehensive head-to-head analytical, functional, and clinical comparability studies demonstrating biosimilarity to reference products across all critical quality attributes.
                </p>
              </div>
            </ScrollReveal>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {comparabilityMetrics.map((metric, i) =>
              <ScrollReveal key={metric.label} delay={i * 0.1}>
                  <div className="bg-card rounded-2xl p-8 shadow-sm h-full text-center">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                      <BarChart3 size={24} className="text-primary" />
                    </div>
                    <p className="text-4xl font-semibold text-primary mb-2">{metric.value}</p>
                    <h3 className="text-base font-bold text-foreground mb-2">{metric.label}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{metric.desc}</p>
                  </div>
                </ScrollReveal>
              )}
            </div>
          </div>
        </section>

        {/* RESEARCH CAPABILITIES */}
        

































        

        {/* LAB IMAGE BREAK */}
        <ScrollReveal>
          <div className="relative h-[40vh] md:h-[50vh] overflow-hidden rounded-xl mx-6 md:mx-12 lg:mx-16">
            <img src={rdLabHands} alt="Researcher working in laboratory" className="w-full h-full object-cover" loading="lazy" />
          </div>
        </ScrollReveal>

        {/* CORE AREAS OF INNOVATION — CAROUSEL */}
        
























































        

        {/* MICROBIAL SCIENCE SECTIONS */}
        <MicrobialScience />

        {/* PUBLICATIONS */}
        <section id="publications" className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
            <ScrollReveal>
              <div className="max-w-3xl mb-16">
                <p className="text-xs uppercase tracking-[0.2em] text-primary font-bold mb-4">Scientific Literature</p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight">
                  Publications
                </h2>
                <p className="text-base md:text-lg text-muted-foreground mt-6 leading-relaxed">
                  Peer-reviewed research and technical publications from the AMOGEN science team, advancing knowledge in peptide therapeutics and biosimilar development.
                </p>
              </div>
            </ScrollReveal>
            <div className="grid md:grid-cols-2 gap-6">
              {publications.map((pub, i) =>
              <ScrollReveal key={i} delay={i * 0.08}>
                  <div className="bg-card rounded-2xl p-8 shadow-sm h-full flex flex-col">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <BookOpen size={18} className="text-primary" />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-wider text-primary">{pub.type}</span>
                      <span className="text-xs text-muted-foreground ml-auto">{pub.year}</span>
                    </div>
                    <h3 className="text-base font-bold text-foreground mb-3 leading-snug flex-1">{pub.title}</h3>
                    <p className="text-sm text-muted-foreground italic">{pub.journal}</p>
                    <a href="#" className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:underline mt-4">
                      Read paper <ArrowRight size={14} />
                    </a>
                  </div>
                </ScrollReveal>
              )}
            </div>
          </div>
        </section>

        {/* GAME-CHANGING MOMENTS TIMELINE */}
        <HistoryTimeline />

        {/* VISION QUOTE */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
            <ScrollReveal>
              <div className="text-center max-w-4xl mx-auto">
                <blockquote className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-foreground leading-tight italic">{t.sciencePage.visionQuote}</blockquote>
                <p className="text-sm font-medium text-muted-foreground mt-8 tracking-wide uppercase">{t.sciencePage.visionAuthor}</p>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>);

};

export default Science;