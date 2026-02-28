import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Factory,
  ShieldCheck,
  BarChart3,
  FileText,
  FlaskConical,
  Truck,
  Settings,
  CheckCircle,
  Clock,
  Users,
  Award,
  Send,
} from "lucide-react";
import manufacturing from "@/assets/manufacturing.jpg";
import facility1 from "@/assets/facility-1.jpg";
import facility2 from "@/assets/facility-2.jpg";
import facility3 from "@/assets/facility-3.jpg";
import researchCloseup from "@/assets/research-closeup.jpg";
import { useLanguage } from "@/i18n/LanguageContext";

const CDMO = () => {
  const { t } = useLanguage();
  const [activeRfpStep, setActiveRfpStep] = useState(0);

  // Manufacturing services
  const services = [
    {
      icon: FlaskConical,
      title: "Process Development",
      desc: "End-to-end process development from lab to commercial scale, including route scouting, optimization, and scale-up of peptide synthesis and purification workflows.",
    },
    {
      icon: Factory,
      title: "Commercial Manufacturing",
      desc: "cGMP manufacturing of peptide APIs via solid-phase peptide synthesis (SPPS) with annual capacity exceeding 980 kg across multiple production suites.",
    },
    {
      icon: Settings,
      title: "Formulation & Fill-Finish",
      desc: "Integrated formulation development, lyophilization, liquid preparation, and aseptic fill-finish for injectable peptide products including pen injector devices.",
    },
    {
      icon: ShieldCheck,
      title: "Analytical & QC Services",
      desc: "Comprehensive analytical method development, validation, and stability testing using HPLC, LC-MS, CD spectroscopy, and advanced bioassays.",
    },
    {
      icon: Truck,
      title: "Supply Chain & Logistics",
      desc: "Global supply chain management with cold-chain capabilities, serialization, and regulatory-compliant distribution across multiple jurisdictions.",
    },
    {
      icon: FileText,
      title: "Regulatory Support",
      desc: "CTD module preparation, DMF filing, and regulatory strategy for submissions across FDA, EMA, NMPA, and other global health authorities.",
    },
  ];

  // Capacity metrics
  const capacityMetrics = [
    { value: "980+", unit: "kg/yr", label: "Annual peptide API capacity", trend: "+35% YoY" },
    { value: "75,000", unit: "L", label: "Fermentation capacity", trend: "Operational" },
    { value: "6", unit: "suites", label: "cGMP production suites", trend: "2 expansion planned" },
    { value: "99.2%", unit: "", label: "Batch success rate", trend: "Last 12 months" },
  ];

  const capacityTimeline = [
    { year: "2024", capacity: "980 kg", milestone: "Full SPPS capacity operational" },
    { year: "2025", capacity: "1,500 kg", milestone: "Suite 5 & 6 commissioned" },
    { year: "2026", capacity: "2,500 kg", milestone: "New formulation wing online" },
    { year: "2027", capacity: "3,500 kg", milestone: "Fill-finish expansion complete" },
    { year: "2029", capacity: "5,000 kg", milestone: "Target capacity achieved" },
  ];

  // Quality systems
  const qualityPillars = [
    {
      icon: ShieldCheck,
      title: "cGMP Compliance",
      desc: "Fully compliant with current Good Manufacturing Practices across all production and quality operations, with continuous monitoring and improvement systems.",
    },
    {
      icon: Award,
      title: "Regulatory Inspections",
      desc: "Successful inspection track record across FDA, EMA, and NMPA. Our quality culture is built on proactive compliance and inspection readiness at all times.",
    },
    {
      icon: CheckCircle,
      title: "Quality by Design (QbD)",
      desc: "ICH Q8/Q9/Q10-aligned approach integrating risk assessment, design space definition, and control strategy throughout the product lifecycle.",
    },
    {
      icon: BarChart3,
      title: "Real-Time Monitoring",
      desc: "PAT-enabled process monitoring with real-time data analytics, ensuring consistent product quality and rapid deviation detection across all manufacturing stages.",
    },
  ];

  // RFP process steps
  const rfpSteps = [
    {
      step: "01",
      title: "Initial Inquiry",
      desc: "Submit your project details through our secure portal or contact our business development team. We'll assign a dedicated project lead within 48 hours.",
      timeline: "Day 1–2",
    },
    {
      step: "02",
      title: "Technical Assessment",
      desc: "Our scientific team evaluates feasibility, identifies process challenges, and prepares a preliminary scope including timeline, capacity, and regulatory pathway.",
      timeline: "Week 1–2",
    },
    {
      step: "03",
      title: "Proposal & Alignment",
      desc: "Receive a detailed technical and commercial proposal. We work collaboratively to align on scope, milestones, quality agreements, and pricing structure.",
      timeline: "Week 3–4",
    },
    {
      step: "04",
      title: "Contract & Kick-off",
      desc: "Finalize MSA, quality agreements, and project plans. A cross-functional kick-off meeting launches your program with clear deliverables and governance.",
      timeline: "Week 5–6",
    },
    {
      step: "05",
      title: "Execution & Delivery",
      desc: "Your dedicated project team executes the program with regular milestone reviews, transparent reporting, and proactive communication throughout.",
      timeline: "Ongoing",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* HERO */}
        <section className="relative min-h-[85vh] flex items-end overflow-hidden">
          <div className="absolute inset-0">
            <img src={manufacturing} alt="AMOGEN manufacturing facility" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-foreground/20" />
          </div>
          <div className="relative w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 pb-20 pt-40">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
              <p className="text-xs uppercase tracking-[0.25em] text-primary-foreground/60 font-semibold mb-4">
                <a href="/" className="hover:text-primary-foreground underline underline-offset-4">Home</a>
                <span className="mx-2">/</span>CDMO
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-primary-foreground leading-[1.05] max-w-5xl">
                Contract Development & Manufacturing
              </h1>
              <p className="mt-8 text-lg md:text-xl text-primary-foreground/80 max-w-2xl leading-relaxed font-light">
                World-class peptide manufacturing capabilities, from process development through commercial supply, built on a foundation of quality and scientific excellence.
              </p>
            </motion.div>
          </div>
        </section>

        {/* INTRO — WHY PARTNER */}
        <section className="py-24 lg:py-32 bg-background">
          <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-16 text-center">
            <ScrollReveal>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight">
                Your molecule. <em className="italic text-primary">Our expertise.</em>
              </h2>
              <p className="text-base md:text-lg text-muted-foreground mt-8 leading-relaxed max-w-2xl mx-auto">
                We combine deep peptide science with vertically integrated manufacturing to deliver your product from bench to market — faster, with uncompromising quality.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* MANUFACTURING SERVICES */}
        <section id="manufacturing-services" className="py-20 lg:py-28 bg-section-cream">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
            <ScrollReveal>
              <div className="max-w-3xl mb-16">
                <p className="text-xs uppercase tracking-[0.2em] text-primary font-bold mb-4">End-to-End Capabilities</p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight">
                  Manufacturing <em className="italic">services</em>
                </h2>
                <p className="text-base md:text-lg text-muted-foreground mt-6 leading-relaxed">
                  Integrated CDMO services spanning the full peptide product lifecycle — from early-stage development through commercial manufacturing and global supply.
                </p>
              </div>
            </ScrollReveal>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, i) => {
                const Icon = service.icon;
                return (
                  <ScrollReveal key={service.title} delay={i * 0.08}>
                    <div className="bg-card rounded-2xl p-8 shadow-sm h-full flex flex-col">
                      <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                        <Icon size={24} className="text-primary" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed flex-1">{service.desc}</p>
                      <a href="#" className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:underline mt-6">
                        Learn more <ArrowRight size={14} />
                      </a>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* FACILITY IMAGE BREAK */}
        <ScrollReveal>
          <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
            <img src={facility1} alt="AMOGEN manufacturing facility interior" className="w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-foreground/30" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center max-w-3xl px-6">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary-foreground leading-tight">
                  Built for <em className="italic">scale.</em> Designed for <em className="italic">quality.</em>
                </h2>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* CAPACITY DASHBOARD */}
        <section id="capacity-dashboard" className="py-20 lg:py-28 bg-background">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
            <ScrollReveal>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <p className="text-xs uppercase tracking-[0.2em] text-primary font-bold mb-4">Infrastructure</p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight">
                  Capacity <em className="italic">dashboard</em>
                </h2>
                <p className="text-base md:text-lg text-muted-foreground mt-6 leading-relaxed">
                  Real-time visibility into our manufacturing capacity and expansion roadmap, ensuring reliable supply for your programs.
                </p>
              </div>
            </ScrollReveal>

            {/* Key metrics */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
              {capacityMetrics.map((metric, i) => (
                <ScrollReveal key={metric.label} delay={i * 0.1}>
                  <div className="bg-card rounded-2xl p-8 shadow-sm text-center">
                    <p className="text-4xl md:text-5xl font-extrabold text-primary">
                      {metric.value}
                      {metric.unit && <span className="text-lg font-bold text-muted-foreground ml-1">{metric.unit}</span>}
                    </p>
                    <p className="text-sm font-medium text-foreground mt-3">{metric.label}</p>
                    <p className="text-xs text-primary font-semibold mt-2 uppercase tracking-wider">{metric.trend}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Expansion roadmap */}
            <ScrollReveal>
              <div className="max-w-3xl">
                <h3 className="text-2xl md:text-3xl font-extrabold text-foreground mb-10">
                  Expansion <em className="italic">roadmap</em>
                </h3>
              </div>
            </ScrollReveal>
            <div className="max-w-4xl">
              {capacityTimeline.map((item, i) => (
                <ScrollReveal key={item.year} delay={i * 0.08}>
                  <div className="flex gap-6 md:gap-10 mb-8 last:mb-0">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0">
                        <span className="text-xs font-bold text-primary-foreground">{item.year}</span>
                      </div>
                      {i < capacityTimeline.length - 1 && <div className="w-px flex-1 bg-border mt-3" />}
                    </div>
                    <div className="pt-2 pb-4">
                      <p className="text-2xl font-extrabold text-primary">{item.capacity}</p>
                      <p className="text-base text-muted-foreground leading-relaxed mt-1">{item.milestone}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* FACILITY IMAGES */}
        <div className="grid md:grid-cols-2 gap-0">
          <ScrollReveal>
            <div className="h-[300px] md:h-[400px] overflow-hidden">
              <img src={facility2} alt="AMOGEN cleanroom" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="h-[300px] md:h-[400px] overflow-hidden">
              <img src={facility3} alt="AMOGEN equipment" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </ScrollReveal>
        </div>

        {/* QUALITY SYSTEMS */}
        <section id="quality-systems" className="py-20 lg:py-28 bg-section-cream">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
              <ScrollReveal>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-primary font-bold mb-4">Quality Assurance</p>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight">
                    Quality <em className="italic">systems</em>
                  </h2>
                  <p className="text-base md:text-lg text-muted-foreground mt-6 leading-relaxed">
                    Quality is not a department — it's our culture. Every process, every batch, and every decision is guided by our unwavering commitment to patient safety and regulatory excellence.
                  </p>
                  <div className="mt-10 grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <p className="text-3xl font-extrabold text-primary">0</p>
                      <p className="text-xs text-muted-foreground mt-1">Critical findings in last 3 audits</p>
                    </div>
                    <div className="text-center">
                      <p className="text-3xl font-extrabold text-primary">100%</p>
                      <p className="text-xs text-muted-foreground mt-1">CAPA closure rate on time</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
              <div className="space-y-6">
                {qualityPillars.map((pillar, i) => {
                  const Icon = pillar.icon;
                  return (
                    <ScrollReveal key={pillar.title} delay={i * 0.1}>
                      <div className="bg-card rounded-2xl p-6 shadow-sm flex gap-5">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                          <Icon size={20} className="text-primary" />
                        </div>
                        <div>
                          <h3 className="text-base font-bold text-foreground mb-1.5">{pillar.title}</h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">{pillar.desc}</p>
                        </div>
                      </div>
                    </ScrollReveal>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* RFP PROCESS */}
        <section id="rfp-process" className="py-20 lg:py-28 bg-background">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
            <ScrollReveal>
              <div className="max-w-3xl mb-16">
                <p className="text-xs uppercase tracking-[0.2em] text-primary font-bold mb-4">Partner With Us</p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight">
                  RFP <em className="italic">process</em>
                </h2>
                <p className="text-base md:text-lg text-muted-foreground mt-6 leading-relaxed">
                  A transparent, structured engagement process designed to get your program started efficiently — from initial inquiry to project kick-off in as few as six weeks.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-16">
              {/* Step selector */}
              <div className="space-y-2">
                {rfpSteps.map((step, i) => (
                  <button
                    key={step.step}
                    onClick={() => setActiveRfpStep(i)}
                    className={`w-full text-left px-6 py-5 rounded-2xl transition-all duration-300 ${
                      activeRfpStep === i
                        ? "bg-primary text-primary-foreground shadow-lg"
                        : "bg-card text-foreground hover:bg-muted shadow-sm"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span className={`text-2xl font-extrabold ${activeRfpStep === i ? "text-primary-foreground/60" : "text-primary/40"}`}>
                        {step.step}
                      </span>
                      <div>
                        <p className="font-bold text-base">{step.title}</p>
                        <p className={`text-xs mt-0.5 ${activeRfpStep === i ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                          {step.timeline}
                        </p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Active step detail */}
              <div className="flex items-start">
                <motion.div
                  key={activeRfpStep}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="bg-card rounded-2xl p-10 shadow-sm w-full"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <span className="text-2xl font-extrabold text-primary">{rfpSteps[activeRfpStep].step}</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-extrabold text-foreground">{rfpSteps[activeRfpStep].title}</h3>
                      <p className="text-sm text-primary font-semibold">{rfpSteps[activeRfpStep].timeline}</p>
                    </div>
                  </div>
                  <p className="text-base text-muted-foreground leading-relaxed">{rfpSteps[activeRfpStep].desc}</p>
                </motion.div>
              </div>
            </div>

            {/* CTA */}
            <ScrollReveal>
              <div className="mt-20 text-center max-w-3xl mx-auto">
                <h3 className="text-2xl md:text-3xl font-extrabold text-foreground leading-tight">Ready to start your project?</h3>
                <p className="text-base text-muted-foreground mt-4 leading-relaxed">
                  Get in touch with our business development team. We'll respond within 48 hours with a dedicated project lead assigned to your inquiry.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                  <a href="#" className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
                    Submit RFP <Send size={14} />
                  </a>
                  <a href="#" className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold rounded-md border border-border text-foreground hover:bg-muted transition-colors">
                    Contact us <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* CLOSING QUOTE */}
        <section className="py-20 lg:py-28 bg-section-cream">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
            <ScrollReveal>
              <div className="text-center max-w-4xl mx-auto">
                <blockquote className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-foreground leading-tight italic">
                  "We don't just manufacture molecules — we build the partnerships and infrastructure that bring life-changing medicines to patients worldwide."
                </blockquote>
                <p className="text-sm font-medium text-muted-foreground mt-8 tracking-wide uppercase">AMOGEN Manufacturing Leadership</p>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CDMO;