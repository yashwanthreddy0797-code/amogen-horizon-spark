import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "framer-motion";
import { ArrowRight, FlaskConical, Handshake, Globe, ShieldCheck, Beaker, TestTube, Microscope, Factory, Leaf } from "lucide-react";
import aboutHero from "@/assets/about-hero.jpg";
import aboutTeam from "@/assets/about-team.jpg";
import sustainabilityImg from "@/assets/sustainability.jpg";
import researchLabImg from "@/assets/research-lab.jpg";

/* ── Data ── */

const impactPillars = [
  {
    num: "01",
    icon: FlaskConical,
    title: "Advance peptide therapeutics",
    link: "#science",
  },
  {
    num: "02",
    icon: Globe,
    title: "Expand global patient access",
    link: "#access",
  },
  {
    num: "03",
    icon: Handshake,
    title: "Build strategic partnerships",
    link: "#partnerships",
  },
  {
    num: "04",
    icon: Leaf,
    title: "Operate sustainably & responsibly",
    link: "#sustainability",
  },
  {
    num: "05",
    icon: ShieldCheck,
    title: "Ensure uncompromising quality",
    link: "#quality",
  },
];

const coreValues = [
  {
    icon: FlaskConical,
    title: "Scientific Excellence",
    description: "Pioneering breakthrough research in peptide therapeutics and biosimilar development",
  },
  {
    icon: Handshake,
    title: "Collaborative Innovation",
    description: "Building strategic partnerships that accelerate global access to life-changing treatments",
  },
  {
    icon: Globe,
    title: "Global Impact",
    description: "Committed to making cutting-edge therapies accessible to patients worldwide",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    description: "Maintaining the highest standards of safety, efficacy, and regulatory compliance",
  },
];

const platformHighlights = [
  "Solid-Phase Peptide Synthesis (SPPS) expertise",
  "Advanced purification and characterization techniques",
  "Comprehensive analytical method development",
  "Scalable manufacturing from research to commercial production",
  "Quality-by-design approach to process development",
  "Regulatory CMC package preparation and submission support",
];

const facilities = [
  "200L SPPS reactors for large-scale synthesis",
  "Class 100,000 cleanroom facilities",
  "3x Industrial lyophilizers (100 kg/batch capacity)",
  "Advanced HPLC and LC-MS analytical suites",
  "Automated peptide synthesizers",
  "Temperature-controlled storage and logistics",
];

const sustainabilityStats = [
  { value: "25%", label: "Reduction in manufacturing waste through process optimization" },
  { value: "100%", label: "Renewable energy sourcing for our main facility" },
  { value: "50+", label: "Countries served through our global distribution network" },
  { value: "Zero", label: "Serious safety incidents in manufacturing operations" },
];

/* ── Component ── */

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* ═══════════ HERO ═══════════ */}
        <section className="relative min-h-[85vh] flex items-end overflow-hidden">
          <div className="absolute inset-0">
            <img src={aboutHero} alt="AMOGEN research laboratory" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-foreground/20" />
          </div>
          <div className="relative w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 pb-20 pt-40">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
              <p className="text-xs uppercase tracking-[0.25em] text-primary-foreground/60 font-semibold mb-4">
                <a href="/" className="hover:text-primary-foreground underline underline-offset-4">Home</a>
                <span className="mx-2">/</span>
                About
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-primary-foreground leading-[1.05] max-w-5xl">
                Pioneering the Future of Peptide Therapeutics.
              </h1>
              <p className="mt-8 text-lg md:text-xl text-primary-foreground/80 max-w-2xl leading-relaxed font-light">
                Advancing breakthrough science to deliver life-changing treatments for diabetes and metabolic diseases worldwide.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ═══════════ LOGO + PURPOSE TAGLINE (Lilly-style centered) ═══════════ */}
        <section className="py-24 lg:py-32 bg-background">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
            <ScrollReveal>
              <div className="text-center">
                <span className="text-2xl md:text-3xl font-bold tracking-tight text-primary">AMOGEN</span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-8 leading-tight max-w-4xl mx-auto">
                  Our job is to put health{" "}
                  <em className="italic">above all.</em>
                </h2>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="max-w-3xl mx-auto mt-10">
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-center">
                  We're in relentless pursuit of breakthroughs that change patients' lives. We innovate every day to make diabetes care more accessible and effective through cutting-edge peptide therapeutics.
                </p>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-center mt-6">
                  Our mission drives us to develop high-quality, affordable biosimilar solutions that expand global patient access to life-changing treatments.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ═══════════ NUMBERED IMPACT PILLARS (like Lilly's 01-05) ═══════════ */}
        <section className="py-20 lg:py-24 bg-section-cream">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
            <ScrollReveal>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight">
                  Do what it takes to fight for health.
                </h2>
                <p className="text-base md:text-lg text-muted-foreground mt-6 leading-relaxed">
                  We develop and manufacture next-generation peptide therapeutics, focusing on GLP-1 analogs for diabetes and obesity treatment with uncompromising quality and global reach.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {impactPillars.map((pillar, i) => {
                const Icon = pillar.icon;
                return (
                  <ScrollReveal key={pillar.num} delay={i * 0.08}>
                    <div className="bg-card rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                        <Icon size={20} className="text-primary" />
                      </div>
                      <span className="text-xs font-bold text-primary tracking-wider">{pillar.num}</span>
                      <h3 className="text-lg font-bold text-foreground mt-2 leading-snug flex-1">{pillar.title}</h3>
                      <a href={pillar.link} className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:underline mt-4">
                        Learn more <ArrowRight size={14} />
                      </a>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* ═══════════ MISSION STATEMENT + WHAT WE DO (split layout like Lilly) ═══════════ */}
        <section className="py-20 lg:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <ScrollReveal>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-primary font-bold mb-4">Mission Statement</p>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight">
                    <em className="italic">Treatments work</em> when people who need them can get them.
                  </h2>
                  <p className="text-base md:text-lg text-muted-foreground mt-8 leading-relaxed">
                    To deliver high-quality, affordable Semaglutide biosimilar that expands global patient access to effective diabetes management.
                  </p>
                  <a href="#pipeline" className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline mt-6">
                    Explore our pipeline <ArrowRight size={14} />
                  </a>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.15}>
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-card rounded-2xl p-8 shadow-sm">
                    <span className="text-4xl md:text-5xl font-extrabold text-primary leading-none">5+</span>
                    <p className="text-sm font-medium text-muted-foreground mt-3">breakthrough peptide programs</p>
                  </div>
                  <div className="bg-card rounded-2xl p-8 shadow-sm">
                    <span className="text-4xl md:text-5xl font-extrabold text-primary leading-none">15+</span>
                    <p className="text-sm font-medium text-muted-foreground mt-3">years combined biotech leadership</p>
                  </div>
                  <div className="bg-card rounded-2xl p-8 shadow-sm">
                    <span className="text-4xl md:text-5xl font-extrabold text-primary leading-none">980</span>
                    <p className="text-sm font-medium text-muted-foreground mt-3">kg+ annual SPPS capacity</p>
                  </div>
                  <div className="bg-card rounded-2xl p-8 shadow-sm">
                    <span className="text-4xl md:text-5xl font-extrabold text-primary leading-none">3</span>
                    <p className="text-sm font-medium text-muted-foreground mt-3">regulatory jurisdictions (FDA, EMA, NMPA)</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ═══════════ WHAT WE DO HIGHLIGHTS ═══════════ */}
        <section className="py-16 lg:py-20 bg-section-cream">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
            <ScrollReveal>
              <div className="max-w-3xl">
                <p className="text-xs uppercase tracking-[0.2em] text-primary font-bold mb-4">What We Do</p>
                <h2 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight">
                  We're powered by purpose.
                </h2>
                <p className="text-base md:text-lg text-muted-foreground mt-6 leading-relaxed">
                  We develop and manufacture next-generation peptide therapeutics, focusing on GLP-1 analogs for diabetes and obesity treatment with uncompromising quality and global reach.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-6 mt-12">
              {[
                "Global leader in peptide therapeutics with 5+ breakthrough programs",
                "Strategic partnerships across North America, Europe, and Asia-Pacific",
                "Advanced SPPS manufacturing capabilities with 980kg+ annual capacity",
                "Regulatory compliance across FDA, EMA, and NMPA jurisdictions",
              ].map((item, i) => (
                <ScrollReveal key={i} delay={i * 0.08}>
                  <div className="flex items-start gap-4 bg-card rounded-2xl p-6 shadow-sm">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                    <p className="text-sm md:text-base font-medium text-foreground leading-relaxed">{item}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={0.2}>
              <a href="#" className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline mt-8">
                Explore what drives us <ArrowRight size={14} />
              </a>
            </ScrollReveal>
          </div>
        </section>

        {/* ═══════════ CORE VALUES ═══════════ */}
        <section className="py-20 lg:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
            <ScrollReveal>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <p className="text-xs uppercase tracking-[0.2em] text-primary font-bold mb-4">Our Core Values</p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight">
                  Patient First · Scientific Excellence · Affordability · Integrity
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {coreValues.map((value, i) => {
                const Icon = value.icon;
                return (
                  <ScrollReveal key={value.title} delay={i * 0.1}>
                    <div className="bg-card rounded-2xl p-8 shadow-sm h-full flex flex-col">
                      <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                        <Icon size={24} className="text-primary" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed flex-1">{value.description}</p>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* ═══════════ SCIENTIFIC APPROACH (full-width image + content like Lilly) ═══════════ */}
        <section className="py-20 lg:py-24 bg-section-cream" id="science">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
            <ScrollReveal>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <p className="text-xs uppercase tracking-[0.2em] text-primary font-bold mb-4">Our Scientific Approach</p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight">
                  Scientific Excellence Drives Everything We Do
                </h2>
                <p className="text-base md:text-lg text-muted-foreground mt-6 leading-relaxed">
                  Our commitment to the highest standards of research, development, and manufacturing ensures that every treatment we develop meets the rigorous requirements of global regulatory agencies.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              <ScrollReveal>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-3">
                    <Beaker size={20} className="text-primary" />
                    Platform Highlights
                  </h3>
                  <ul className="space-y-4">
                    {platformHighlights.map((item) => (
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
                  <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-3">
                    <Factory size={20} className="text-primary" />
                    Facilities & Equipment
                  </h3>
                  <ul className="space-y-4">
                    {facilities.map((item) => (
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

        {/* ═══════════ FULL-WIDTH IMAGE BREAK (like Lilly) ═══════════ */}
        <ScrollReveal>
          <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
            <img src={aboutTeam} alt="AMOGEN team collaborating" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-foreground/30" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center max-w-3xl px-6">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary-foreground leading-tight">
                  Find your place at AMOGEN
                </h2>
                <p className="text-base md:text-lg text-primary-foreground/80 mt-6 leading-relaxed">
                  If you're ready to advance medicine and change lives through peptide innovation—join us.
                </p>
                <a href="#" className="inline-flex items-center gap-2 mt-8 px-6 py-3 text-sm font-bold rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
                  Explore careers <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* ═══════════ SUSTAINABILITY ═══════════ */}
        <section className="py-20 lg:py-24 bg-background" id="sustainability">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <ScrollReveal>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-primary font-bold mb-4">Sustainability in Practice</p>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight">
                    We're committed to sustainable practices that benefit both patients and the planet.
                  </h2>
                  <p className="text-base md:text-lg text-muted-foreground mt-6 leading-relaxed">
                    Through responsible innovation, we minimize our environmental footprint while maximizing our positive impact on global health.
                  </p>
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

        {/* ═══════════ CONTACT / HELP SECTION (like Lilly's "We're here to help") ═══════════ */}
        <section className="py-20 lg:py-24 bg-section-cream">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
            <ScrollReveal>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight">
                  We're here to help
                </h2>
                <p className="text-base md:text-lg text-muted-foreground mt-6 leading-relaxed">
                  Whether you want to learn about our pipeline, partnership opportunities, or have a question about our therapeutics, please reach out.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid sm:grid-cols-3 gap-8">
              {[
                {
                  icon: Microscope,
                  title: "Science & Pipeline",
                  description: "Explore our research programs and peptide development pipeline.",
                  cta: "View pipeline",
                },
                {
                  icon: Handshake,
                  title: "Partnership Inquiries",
                  description: "Learn about CDMO services and strategic collaboration opportunities.",
                  cta: "Partner with us",
                },
                {
                  icon: TestTube,
                  title: "Product Information",
                  description: "Get detailed information about AMOGEN therapeutics and biosimilars.",
                  cta: "View products",
                },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <ScrollReveal key={item.title} delay={i * 0.1}>
                    <div className="bg-card rounded-2xl p-8 shadow-sm h-full flex flex-col">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                        <Icon size={22} className="text-primary" />
                      </div>
                      <h3 className="text-lg font-bold text-foreground mb-3">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">{item.description}</p>
                      <a href="#" className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:underline">
                        {item.cta} <ArrowRight size={14} />
                      </a>
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
