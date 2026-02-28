import ScrollReveal from "@/components/ScrollReveal";

const AboutWhatWeDo = () => {
  const stats = [
    { val: "5+", lbl: "breakthrough peptide programs in development" },
    { val: "15+", lbl: "years combined biotech leadership" },
  ];

  const capabilities = [
    "Global leader in peptide therapeutics with 5+ breakthrough programs",
    "Strategic partnerships across North America, Europe, and Asia-Pacific",
    "Advanced SPPS manufacturing capabilities with 980kg+ annual capacity",
    "Regulatory compliance across FDA, EMA, and NMPA jurisdictions",
  ];

  return (
    <section id="what-we-do" className="py-24 lg:py-32 bg-section-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <ScrollReveal>
          <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold mb-6">What We Do</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight max-w-3xl">
            <em className="italic">Treatments work</em> when people who need them can get them.
          </h2>
          <p className="text-base md:text-lg text-muted-foreground mt-6 leading-relaxed max-w-3xl">
            Too many people lack access to the medicines and care they need. We're finding new solutions and addressing more challenges by working with health organizations, providers, regulators, and governments.
          </p>
        </ScrollReveal>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-6 mt-14">
          {stats.map((s) => (
            <ScrollReveal key={s.val}>
              <div className="bg-card rounded-2xl p-8 shadow-sm">
                <span className="text-5xl md:text-6xl font-extrabold text-primary leading-none">{s.val}</span>
                <p className="text-sm font-medium text-muted-foreground mt-3">{s.lbl}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Capabilities */}
        <div className="grid md:grid-cols-2 gap-6 mt-10">
          {capabilities.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <div className="flex items-start gap-4 bg-card rounded-2xl p-6 shadow-sm">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                <p className="text-sm md:text-base font-medium text-foreground leading-relaxed">{item}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutWhatWeDo;
