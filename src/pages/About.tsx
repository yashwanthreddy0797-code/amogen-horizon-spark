import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "framer-motion";
import { ArrowRight, FlaskConical, Handshake, Globe, ShieldCheck, Beaker, TestTube, Microscope, Factory, Leaf } from "lucide-react";
import aboutHero from "@/assets/about-hero.jpg";
import aboutTeam from "@/assets/about-team.jpg";
import sustainabilityImg from "@/assets/sustainability.jpg";
import { useLanguage } from "@/i18n/LanguageContext";

const About = () => {
  const { t } = useLanguage();

  const impactPillars = [
    { num: "01", icon: FlaskConical, title: t.aboutPage.pillar1, link: "#science" },
    { num: "02", icon: Globe, title: t.aboutPage.pillar2, link: "#access" },
    { num: "03", icon: Handshake, title: t.aboutPage.pillar3, link: "#partnerships" },
    { num: "04", icon: Leaf, title: t.aboutPage.pillar4, link: "#sustainability" },
    { num: "05", icon: ShieldCheck, title: t.aboutPage.pillar5, link: "#quality" },
  ];

  const coreValues = [
    { icon: FlaskConical, title: t.aboutPage.scientificExcellence, description: t.aboutPage.scientificExcellenceDesc },
    { icon: Handshake, title: t.aboutPage.collaborativeInnovation, description: t.aboutPage.collaborativeInnovationDesc },
    { icon: Globe, title: t.aboutPage.globalImpact, description: t.aboutPage.globalImpactDesc },
    { icon: ShieldCheck, title: t.aboutPage.qualityAssurance, description: t.aboutPage.qualityAssuranceDesc },
  ];

  const sustainabilityStats = [
    { value: t.aboutPage.sustStat1Value, label: t.aboutPage.sustStat1Label },
    { value: t.aboutPage.sustStat2Value, label: t.aboutPage.sustStat2Label },
    { value: t.aboutPage.sustStat3Value, label: t.aboutPage.sustStat3Label },
    { value: t.aboutPage.sustStat4Value, label: t.aboutPage.sustStat4Label },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* HERO */}
        <section className="relative min-h-[85vh] flex items-end overflow-hidden">
          <div className="absolute inset-0">
            <img src={aboutHero} alt="AMOGEN research laboratory" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-foreground/20" />
          </div>
          <div className="relative w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 pb-20 pt-40">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
              <p className="text-xs uppercase tracking-[0.25em] text-primary-foreground/60 font-semibold mb-4">
                <a href="/" className="hover:text-primary-foreground underline underline-offset-4">{t.aboutPage.breadcrumbHome}</a>
                <span className="mx-2">/</span>
                {t.aboutPage.breadcrumbAbout}
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-primary-foreground leading-[1.05] max-w-5xl">{t.aboutPage.heroTitle}</h1>
              <p className="mt-8 text-lg md:text-xl text-primary-foreground/80 max-w-2xl leading-relaxed font-light">{t.aboutPage.heroDesc}</p>
            </motion.div>
          </div>
        </section>

        {/* PURPOSE */}
        <section className="py-24 lg:py-32 bg-background">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
            <ScrollReveal>
              <div className="text-center">
                <span className="text-2xl md:text-3xl font-bold tracking-tight text-primary">AMOGEN</span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-8 leading-tight max-w-4xl mx-auto">
                  {t.aboutPage.purposeTitle}{" "}<em className="italic">{t.aboutPage.purposeTitleEm}</em>
                </h2>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div className="max-w-3xl mx-auto mt-10">
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-center">{t.aboutPage.purposeDesc1}</p>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-center mt-6">{t.aboutPage.purposeDesc2}</p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* IMPACT PILLARS */}
        <section className="py-20 lg:py-24 bg-section-cream">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
            <ScrollReveal>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight">{t.aboutPage.impactTitle}</h2>
                <p className="text-base md:text-lg text-muted-foreground mt-6 leading-relaxed">{t.aboutPage.impactDesc}</p>
              </div>
            </ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {impactPillars.map((pillar, i) => {
                const Icon = pillar.icon;
                return (
                  <ScrollReveal key={pillar.num} delay={i * 0.08}>
                    <div className="bg-card rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-5"><Icon size={20} className="text-primary" /></div>
                      <span className="text-xs font-bold text-primary tracking-wider">{pillar.num}</span>
                      <h3 className="text-lg font-bold text-foreground mt-2 leading-snug flex-1">{pillar.title}</h3>
                      <a href={pillar.link} className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:underline mt-4">{t.aboutPage.learnMore} <ArrowRight size={14} /></a>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* MISSION */}
        <section className="py-20 lg:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <ScrollReveal>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-primary font-bold mb-4">{t.aboutPage.missionLabel}</p>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight">
                    <em className="italic">{t.aboutPage.missionTitle}</em>{t.aboutPage.missionTitleEm}
                  </h2>
                  <p className="text-base md:text-lg text-muted-foreground mt-8 leading-relaxed">{t.aboutPage.missionDesc}</p>
                  <a href="#pipeline" className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline mt-6">{t.aboutPage.explorePipeline} <ArrowRight size={14} /></a>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { val: t.aboutPage.stat1, lbl: t.aboutPage.stat1Label },
                    { val: t.aboutPage.stat2, lbl: t.aboutPage.stat2Label },
                    { val: t.aboutPage.stat3, lbl: t.aboutPage.stat3Label },
                    { val: t.aboutPage.stat4, lbl: t.aboutPage.stat4Label },
                  ].map((s) => (
                    <div key={s.val} className="bg-card rounded-2xl p-8 shadow-sm">
                      <span className="text-4xl md:text-5xl font-extrabold text-primary leading-none">{s.val}</span>
                      <p className="text-sm font-medium text-muted-foreground mt-3">{s.lbl}</p>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* WHAT WE DO */}
        <section className="py-16 lg:py-20 bg-section-cream">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
            <ScrollReveal>
              <div className="max-w-3xl">
                <p className="text-xs uppercase tracking-[0.2em] text-primary font-bold mb-4">{t.aboutPage.whatWeDoLabel}</p>
                <h2 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight">{t.aboutPage.whatWeDoTitle}</h2>
                <p className="text-base md:text-lg text-muted-foreground mt-6 leading-relaxed">{t.aboutPage.whatWeDoDesc}</p>
              </div>
            </ScrollReveal>
            <div className="grid md:grid-cols-2 gap-6 mt-12">
              {[t.aboutPage.whatWeDo1, t.aboutPage.whatWeDo2, t.aboutPage.whatWeDo3, t.aboutPage.whatWeDo4].map((item, i) => (
                <ScrollReveal key={i} delay={i * 0.08}>
                  <div className="flex items-start gap-4 bg-card rounded-2xl p-6 shadow-sm">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                    <p className="text-sm md:text-base font-medium text-foreground leading-relaxed">{item}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
            <ScrollReveal delay={0.2}>
              <a href="#" className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline mt-8">{t.aboutPage.exploreWhatDrives} <ArrowRight size={14} /></a>
            </ScrollReveal>
          </div>
        </section>

        {/* CORE VALUES */}
        <section className="py-20 lg:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
            <ScrollReveal>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <p className="text-xs uppercase tracking-[0.2em] text-primary font-bold mb-4">{t.aboutPage.coreValuesLabel}</p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight">{t.aboutPage.coreValuesTitle}</h2>
              </div>
            </ScrollReveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {coreValues.map((value, i) => {
                const Icon = value.icon;
                return (
                  <ScrollReveal key={value.title} delay={i * 0.1}>
                    <div className="bg-card rounded-2xl p-8 shadow-sm h-full flex flex-col">
                      <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6"><Icon size={24} className="text-primary" /></div>
                      <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed flex-1">{value.description}</p>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* SCIENTIFIC APPROACH */}
        <section className="py-20 lg:py-24 bg-section-cream" id="science">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
            <ScrollReveal>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <p className="text-xs uppercase tracking-[0.2em] text-primary font-bold mb-4">{t.aboutPage.sciApproachLabel}</p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight">{t.aboutPage.sciApproachTitle}</h2>
                <p className="text-base md:text-lg text-muted-foreground mt-6 leading-relaxed">{t.aboutPage.sciApproachDesc}</p>
              </div>
            </ScrollReveal>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              <ScrollReveal>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-3"><Beaker size={20} className="text-primary" />{t.aboutPage.platformHighlightsTitle}</h3>
                  <ul className="space-y-4">
                    {t.aboutPage.platformHighlights.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        <span className="text-sm md:text-base text-muted-foreground leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-3"><Factory size={20} className="text-primary" />{t.aboutPage.facilitiesTitle}</h3>
                  <ul className="space-y-4">
                    {t.aboutPage.facilities.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        <span className="text-sm md:text-base text-muted-foreground leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* TEAM IMAGE */}
        <ScrollReveal>
          <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
            <img src={aboutTeam} alt="AMOGEN team collaborating" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-foreground/30" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center max-w-3xl px-6">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary-foreground leading-tight">{t.aboutPage.findYourPlace}</h2>
                <p className="text-base md:text-lg text-primary-foreground/80 mt-6 leading-relaxed">{t.aboutPage.findYourPlaceDesc}</p>
                <a href="#" className="inline-flex items-center gap-2 mt-8 px-6 py-3 text-sm font-bold rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">{t.aboutPage.exploreCareers} <ArrowRight size={14} /></a>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* SUSTAINABILITY */}
        <section className="py-20 lg:py-24 bg-background" id="sustainability">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <ScrollReveal>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-primary font-bold mb-4">{t.aboutPage.sustainabilityLabel}</p>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight">{t.aboutPage.sustainabilityTitle}</h2>
                  <p className="text-base md:text-lg text-muted-foreground mt-6 leading-relaxed">{t.aboutPage.sustainabilityDesc}</p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <div className="rounded-2xl overflow-hidden">
                  <img src={sustainabilityImg} alt="Sustainable manufacturing facility" className="w-full h-[320px] object-cover" loading="lazy" />
                </div>
              </ScrollReveal>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
              {sustainabilityStats.map((stat, i) => (
                <ScrollReveal key={stat.value} delay={i * 0.08}>
                  <div className="bg-card rounded-2xl p-8 shadow-sm text-center">
                    <span className="text-4xl md:text-5xl font-extrabold text-primary leading-none">{stat.value}</span>
                    <p className="text-sm text-muted-foreground mt-4 leading-relaxed">{stat.label}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* HELP */}
        <section className="py-20 lg:py-24 bg-section-cream">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
            <ScrollReveal>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight">{t.aboutPage.helpTitle}</h2>
                <p className="text-base md:text-lg text-muted-foreground mt-6 leading-relaxed">{t.aboutPage.helpDesc}</p>
              </div>
            </ScrollReveal>
            <div className="grid sm:grid-cols-3 gap-8">
              {[
                { icon: Microscope, title: t.aboutPage.helpSciTitle, description: t.aboutPage.helpSciDesc, cta: t.aboutPage.helpSciCta },
                { icon: Handshake, title: t.aboutPage.helpPartnerTitle, description: t.aboutPage.helpPartnerDesc, cta: t.aboutPage.helpPartnerCta },
                { icon: TestTube, title: t.aboutPage.helpProductTitle, description: t.aboutPage.helpProductDesc, cta: t.aboutPage.helpProductCta },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <ScrollReveal key={item.title} delay={i * 0.1}>
                    <div className="bg-card rounded-2xl p-8 shadow-sm h-full flex flex-col">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6"><Icon size={22} className="text-primary" /></div>
                      <h3 className="text-lg font-bold text-foreground mb-3">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">{item.description}</p>
                      <a href="#" className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:underline">{item.cta} <ArrowRight size={14} /></a>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
