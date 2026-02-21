import ScrollReveal from "@/components/ScrollReveal";

const stats = [
  { value: "25+", label: "Years making medicine" },
  { value: "40+", label: "Patented therapies" },
  { value: "5", label: "Therapeutic areas" },
];

const AboutStats = () => {
  return (
    <section className="py-24 lg:py-36 bg-section-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <ScrollReveal>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-4">
            About AMOGEN
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight max-w-3xl">
            Our job is to put health{" "}
            <em className="italic">above all.</em>
          </h2>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl leading-relaxed">
            Our research focuses on developing life-changing medicines for everyone,
            regardless of their condition's prevalence or complexity. And we know our
            biggest advancements are still ahead of us.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-3 gap-8 mt-20">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.12}>
              <div className="text-center md:text-left">
                <span className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-primary">
                  {stat.value}
                </span>
                <p className="text-base md:text-lg font-semibold text-foreground mt-3">
                  {stat.label}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutStats;
