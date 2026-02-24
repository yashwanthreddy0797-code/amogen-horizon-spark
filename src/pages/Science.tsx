import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "framer-motion";
import { ArrowRight, FlaskConical, Microscope, Dna, TestTube, Beaker, Target } from "lucide-react";
import scienceHero from "@/assets/science-hero.jpg";
import sciencePatient from "@/assets/science-patient.jpg";
import scienceResearch from "@/assets/science-research.jpg";
import researchCloseup from "@/assets/research-closeup.jpg";

/* ── Data ── */

const pipelineStats = [
  { phase: "Discovery", count: 3, color: "bg-primary/20" },
  { phase: "Preclinical", count: 2, color: "bg-primary/40" },
  { phase: "Phase I/II", count: 2, color: "bg-primary/60" },
  { phase: "Phase III", count: 1, color: "bg-primary/80" },
  { phase: "Regulatory", count: 1, color: "bg-primary" },
];

const therapeuticAreas = [
  {
    icon: Target,
    title: "Diabetes & Metabolic Disorders",
    description:
      "Developing next-generation GLP-1 receptor agonists and dual-agonist peptides for improved glycemic control and weight management.",
  },
  {
    icon: Dna,
    title: "Obesity & Cardiometabolic Health",
    description:
      "Pioneering peptide-based therapies that address the root causes of obesity and its downstream cardiovascular complications.",
  },
  {
    icon: Microscope,
    title: "Endocrinology",
    description:
      "Advancing targeted peptide therapeutics for hormonal disorders with improved efficacy, stability, and patient convenience.",
  },
];

const technologyPlatforms = [
  {
    icon: FlaskConical,
    title: "Solid-Phase Peptide Synthesis",
    description:
      "Proprietary SPPS platforms enabling rapid, high-purity synthesis of complex peptide sequences at commercial scale.",
  },
  {
    icon: Beaker,
    title: "Formulation & Delivery",
    description:
      "Advanced formulation technologies including sustained-release injectables and novel delivery systems for improved patient compliance.",
  },
  {
    icon: TestTube,
    title: "Analytical Excellence",
    description:
      "State-of-the-art characterization and comparability studies using HPLC, LC-MS, and advanced bioassays to ensure biosimilar quality.",
  },
];

const milestones = [
  { year: "2018", event: "AMOGEN Bio Pharma founded with a vision to democratize peptide therapeutics" },
  { year: "2020", event: "First Semaglutide biosimilar program initiated; SPPS facility operational" },
  { year: "2022", event: "Expanded manufacturing to 980 kg+ annual capacity; Liraglutide program launched" },
  { year: "2024", event: "Tirzepatide and Dulaglutide programs entered development; global partnerships established" },
  { year: "2026", event: "Regulatory submissions advancing across FDA, EMA, and NMPA jurisdictions" },
];

/* ── Component ── */

const Science = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* ═══════════ HERO ═══════════ */}
        <section className="relative min-h-[85vh] flex items-end overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={scienceHero}
              alt="AMOGEN scientist in laboratory"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-foreground/20" />
          </div>
          <div className="relative w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 pb-20 pt-40">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-xs uppercase tracking-[0.25em] text-primary-foreground/60 font-semibold mb-4">
                <a href="/" className="hover:text-primary-foreground underline underline-offset-4">
                  Home
                </a>
                <span className="mx-2">/</span>
                Science
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-primary-foreground leading-[1.05] max-w-5xl">
                We use the best science to fight for better medicine.
              </h1>
              <p className="mt-8 text-lg md:text-xl text-primary-foreground/80 max-w-2xl leading-relaxed font-light">
                We work to make medicine safer, better, and accessible. See how
                we're dedicated to finding solutions to even the toughest
                challenges.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ═══════════ GETTING MEDICINE FASTER ═══════════ */}
        <section className="py-24 lg:py-32 bg-background">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <ScrollReveal>
                <div>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight">
                    Getting medicine to patients{" "}
                    <em className="italic text-primary">faster.</em>
                  </h2>
                  <p className="text-base md:text-lg text-muted-foreground mt-8 leading-relaxed">
                    Our mission is to develop the next generation of peptide
                    therapeutics that change the way metabolic disease is treated
                    today. Through our accelerated development programs, we're
                    bringing high-quality biosimilars to patients who need them
                    most.
                  </p>
                  <a
                    href="#pipeline"
                    className="inline-flex items-center gap-2 px-6 py-3 mt-8 text-sm font-semibold rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                  >
                    View pipeline <ArrowRight size={14} />
                  </a>
                </div>
              </ScrollReveal>

              {/* Pipeline bar chart */}
              <ScrollReveal delay={0.15}>
                <div className="bg-card rounded-2xl p-8 shadow-sm" id="pipeline">
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-6">
                    Pipeline Overview
                  </p>
                  <div className="space-y-4">
                    {pipelineStats.map((item) => (
                      <div key={item.phase} className="flex items-center gap-4">
                        <span className="text-sm font-medium text-foreground w-24 shrink-0">
                          {item.phase}
                        </span>
                        <div className="flex-1 bg-muted rounded-full h-8 overflow-hidden">
                          <motion.div
                            className={`h-full ${item.color} rounded-full flex items-center justify-end pr-3`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${(item.count / 3) * 100}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                          >
                            <span className="text-xs font-bold text-foreground">
                              {item.count}
                            </span>
                          </motion.div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground mt-6">
                    Data as of February 2026.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ═══════════ THERAPEUTIC AREAS ═══════════ */}
        <section className="py-20 lg:py-28 bg-section-cream">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
            <ScrollReveal>
              <div className="max-w-3xl">
                <p className="text-xs uppercase tracking-[0.2em] text-primary font-bold mb-4">
                  Therapeutic Focus
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight">
                  Every condition is untreatable{" "}
                  <em className="italic">until it isn't.</em>
                </h2>
                <p className="text-base md:text-lg text-muted-foreground mt-6 leading-relaxed">
                  We continually work to defeat some of the toughest healthcare
                  challenges, focusing on areas where peptide therapeutics can
                  make the greatest impact.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-8 mt-14">
              {therapeuticAreas.map((area, i) => {
                const Icon = area.icon;
                return (
                  <ScrollReveal key={area.title} delay={i * 0.1}>
                    <div className="bg-card rounded-2xl p-8 shadow-sm h-full flex flex-col">
                      <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                        <Icon size={24} className="text-primary" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-3">
                        {area.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                        {area.description}
                      </p>
                      <a
                        href="#"
                        className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:underline mt-6"
                      >
                        Learn more <ArrowRight size={14} />
                      </a>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* ═══════════ FULL-WIDTH IMAGE BREAK ═══════════ */}
        <ScrollReveal>
          <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
            <img
              src={sciencePatient}
              alt="Patient looking hopeful"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-foreground/30" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center max-w-3xl px-6">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary-foreground leading-tight">
                  Science that transforms{" "}
                  <em className="italic">patient lives.</em>
                </h2>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* ═══════════ TECHNOLOGY PLATFORMS ═══════════ */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
            <ScrollReveal>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <p className="text-xs uppercase tracking-[0.2em] text-primary font-bold mb-4">
                  Innovation
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight">
                  Our Technology Platforms
                </h2>
                <p className="text-base md:text-lg text-muted-foreground mt-6 leading-relaxed">
                  Proprietary platforms powering the development of
                  next-generation peptide therapeutics from discovery through
                  commercial manufacturing.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid lg:grid-cols-3 gap-8">
              {technologyPlatforms.map((platform, i) => {
                const Icon = platform.icon;
                return (
                  <ScrollReveal key={platform.title} delay={i * 0.1}>
                    <div className="bg-card rounded-2xl p-8 shadow-sm h-full">
                      <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                        <Icon size={24} className="text-primary" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-3">
                        {platform.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {platform.description}
                      </p>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* ═══════════ RESEARCH IMAGE + CLINICAL TRIALS ═══════════ */}
        <section className="py-20 lg:py-28 bg-section-cream">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <ScrollReveal>
                <div className="rounded-3xl overflow-hidden">
                  <img
                    src={scienceResearch}
                    alt="AMOGEN research team"
                    className="w-full h-[400px] lg:h-[500px] object-cover"
                    loading="lazy"
                  />
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.15}>
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <Microscope size={24} className="text-primary" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-foreground leading-tight">
                    Research & Development Excellence
                  </h3>
                  <p className="text-base text-muted-foreground mt-6 leading-relaxed">
                    Our multidisciplinary R&D teams work across discovery,
                    process development, and analytical characterization to
                    deliver biosimilar peptide candidates that meet the highest
                    standards of quality and efficacy.
                  </p>
                  <p className="text-base text-muted-foreground mt-4 leading-relaxed">
                    We invest in comprehensive comparability studies and
                    cutting-edge analytical methods to demonstrate biosimilarity
                    across structural, functional, and clinical endpoints.
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline mt-6"
                  >
                    Explore our capabilities <ArrowRight size={14} />
                  </a>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ═══════════ TIMELINE / MILESTONES ═══════════ */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
            <ScrollReveal>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <p className="text-xs uppercase tracking-[0.2em] text-primary font-bold mb-4">
                  Our History
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight">
                  Fighting for health across{" "}
                  <em className="italic">generations.</em>
                </h2>
              </div>
            </ScrollReveal>

            <div className="max-w-3xl mx-auto">
              {milestones.map((milestone, i) => (
                <ScrollReveal key={milestone.year} delay={i * 0.08}>
                  <div className="flex gap-6 md:gap-10 mb-10 last:mb-0">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0">
                        <span className="text-xs font-bold text-primary-foreground">
                          {milestone.year}
                        </span>
                      </div>
                      {i < milestones.length - 1 && (
                        <div className="w-px flex-1 bg-border mt-3" />
                      )}
                    </div>
                    <div className="pt-2 pb-6">
                      <p className="text-base md:text-lg font-medium text-foreground leading-relaxed">
                        {milestone.event}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ VISION QUOTE ═══════════ */}
        <section className="py-20 lg:py-28 bg-section-cream">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
            <ScrollReveal>
              <div className="text-center max-w-4xl mx-auto">
                <blockquote className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-foreground leading-tight italic">
                  "Our commitment to science is a commitment to patients — every
                  breakthrough brings us closer to a world where effective
                  treatment is accessible to all."
                </blockquote>
                <p className="text-sm font-medium text-muted-foreground mt-8 tracking-wide uppercase">
                  AMOGEN Scientific Leadership
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Science;
