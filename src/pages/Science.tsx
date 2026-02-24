import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "framer-motion";
import { ArrowRight, FlaskConical, Microscope, Dna, TestTube, Beaker, Target } from "lucide-react";
import scienceHero from "@/assets/science-hero.jpg";
import sciencePatient from "@/assets/science-patient.jpg";
import scienceResearch from "@/assets/science-research.jpg";
import { useLanguage } from "@/i18n/LanguageContext";

const Science = () => {
  const { t } = useLanguage();

  const pipelineStats = [
    { phase: t.sciencePage.discovery, count: 3, color: "bg-primary/20" },
    { phase: t.sciencePage.preclinical, count: 2, color: "bg-primary/40" },
    { phase: t.sciencePage.phaseI, count: 2, color: "bg-primary/60" },
    { phase: t.sciencePage.phaseIII, count: 1, color: "bg-primary/80" },
    { phase: t.sciencePage.regulatory, count: 1, color: "bg-primary" },
  ];

  const therapeuticAreas = [
    { icon: Target, title: t.sciencePage.area1Title, description: t.sciencePage.area1Desc },
    { icon: Dna, title: t.sciencePage.area2Title, description: t.sciencePage.area2Desc },
    { icon: Microscope, title: t.sciencePage.area3Title, description: t.sciencePage.area3Desc },
  ];

  const technologyPlatforms = [
    { icon: FlaskConical, title: t.sciencePage.platform1Title, description: t.sciencePage.platform1Desc },
    { icon: Beaker, title: t.sciencePage.platform2Title, description: t.sciencePage.platform2Desc },
    { icon: TestTube, title: t.sciencePage.platform3Title, description: t.sciencePage.platform3Desc },
  ];

  const milestones = [
    { year: "2018", event: t.sciencePage.milestone1 },
    { year: "2020", event: t.sciencePage.milestone2 },
    { year: "2022", event: t.sciencePage.milestone3 },
    { year: "2024", event: t.sciencePage.milestone4 },
    { year: "2026", event: t.sciencePage.milestone5 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* HERO */}
        <section className="relative min-h-[85vh] flex items-end overflow-hidden">
          <div className="absolute inset-0">
            <img src={scienceHero} alt="AMOGEN scientist in laboratory" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-foreground/20" />
          </div>
          <div className="relative w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 pb-20 pt-40">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
              <p className="text-xs uppercase tracking-[0.25em] text-primary-foreground/60 font-semibold mb-4">
                <a href="/" className="hover:text-primary-foreground underline underline-offset-4">{t.sciencePage.breadcrumbHome}</a>
                <span className="mx-2">/</span>{t.sciencePage.breadcrumbScience}
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-primary-foreground leading-[1.05] max-w-5xl">{t.sciencePage.heroTitle}</h1>
              <p className="mt-8 text-lg md:text-xl text-primary-foreground/80 max-w-2xl leading-relaxed font-light">{t.sciencePage.heroDesc}</p>
            </motion.div>
          </div>
        </section>

        {/* GETTING MEDICINE FASTER */}
        <section className="py-24 lg:py-32 bg-background">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <ScrollReveal>
                <div>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight">
                    {t.sciencePage.fasterTitle}{" "}<em className="italic text-primary">{t.sciencePage.fasterTitleEm}</em>
                  </h2>
                  <p className="text-base md:text-lg text-muted-foreground mt-8 leading-relaxed">{t.sciencePage.fasterDesc}</p>
                  <a href="#pipeline" className="inline-flex items-center gap-2 px-6 py-3 mt-8 text-sm font-semibold rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">{t.sciencePage.viewPipeline} <ArrowRight size={14} /></a>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <div className="bg-card rounded-2xl p-8 shadow-sm" id="pipeline">
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-6">{t.sciencePage.pipelineOverviewLabel}</p>
                  <div className="space-y-4">
                    {pipelineStats.map((item) => (
                      <div key={item.phase} className="flex items-center gap-4">
                        <span className="text-sm font-medium text-foreground w-24 shrink-0">{item.phase}</span>
                        <div className="flex-1 bg-muted rounded-full h-8 overflow-hidden">
                          <motion.div className={`h-full ${item.color} rounded-full flex items-center justify-end pr-3`} initial={{ width: 0 }} whileInView={{ width: `${(item.count / 3) * 100}%` }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}>
                            <span className="text-xs font-bold text-foreground">{item.count}</span>
                          </motion.div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground mt-6">{t.sciencePage.dataAsOf}</p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* THERAPEUTIC AREAS */}
        <section className="py-20 lg:py-28 bg-section-cream">
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
                  </ScrollReveal>
                );
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

        {/* TECHNOLOGY PLATFORMS */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
            <ScrollReveal>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <p className="text-xs uppercase tracking-[0.2em] text-primary font-bold mb-4">{t.sciencePage.innovationLabel}</p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight">{t.sciencePage.techPlatformsTitle}</h2>
                <p className="text-base md:text-lg text-muted-foreground mt-6 leading-relaxed">{t.sciencePage.techPlatformsDesc}</p>
              </div>
            </ScrollReveal>
            <div className="grid lg:grid-cols-3 gap-8">
              {technologyPlatforms.map((platform, i) => {
                const Icon = platform.icon;
                return (
                  <ScrollReveal key={platform.title} delay={i * 0.1}>
                    <div className="bg-card rounded-2xl p-8 shadow-sm h-full">
                      <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6"><Icon size={24} className="text-primary" /></div>
                      <h3 className="text-xl font-bold text-foreground mb-3">{platform.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{platform.description}</p>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* R&D */}
        <section className="py-20 lg:py-28 bg-section-cream">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <ScrollReveal>
                <div className="rounded-3xl overflow-hidden">
                  <img src={scienceResearch} alt="AMOGEN research team" className="w-full h-[400px] lg:h-[500px] object-cover" loading="lazy" />
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6"><Microscope size={24} className="text-primary" /></div>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-foreground leading-tight">{t.sciencePage.rdTitle}</h3>
                  <p className="text-base text-muted-foreground mt-6 leading-relaxed">{t.sciencePage.rdDesc1}</p>
                  <p className="text-base text-muted-foreground mt-4 leading-relaxed">{t.sciencePage.rdDesc2}</p>
                  <a href="#" className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline mt-6">{t.sciencePage.exploreCapabilities} <ArrowRight size={14} /></a>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* TIMELINE */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
            <ScrollReveal>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <p className="text-xs uppercase tracking-[0.2em] text-primary font-bold mb-4">{t.sciencePage.historyLabel}</p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight">
                  {t.sciencePage.historyTitle}{" "}<em className="italic">{t.sciencePage.historyTitleEm}</em>
                </h2>
              </div>
            </ScrollReveal>
            <div className="max-w-3xl mx-auto">
              {milestones.map((milestone, i) => (
                <ScrollReveal key={milestone.year} delay={i * 0.08}>
                  <div className="flex gap-6 md:gap-10 mb-10 last:mb-0">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0">
                        <span className="text-xs font-bold text-primary-foreground">{milestone.year}</span>
                      </div>
                      {i < milestones.length - 1 && <div className="w-px flex-1 bg-border mt-3" />}
                    </div>
                    <div className="pt-2 pb-6">
                      <p className="text-base md:text-lg font-medium text-foreground leading-relaxed">{milestone.event}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* VISION QUOTE */}
        <section className="py-20 lg:py-28 bg-section-cream">
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
    </div>
  );
};

export default Science;
