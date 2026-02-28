import ScrollReveal from "@/components/ScrollReveal";
import sustainabilityImg from "@/assets/sustainability.jpg";

const stats = [
  { value: "25%", label: "Reduction in manufacturing waste through process optimization" },
  { value: "100%", label: "Renewable energy sourcing for our main facility" },
  { value: "50+", label: "Countries served through our global distribution network" },
  { value: "Zero", label: "Serious safety incidents in manufacturing operations" },
];

const AboutSustainability = () => {
  return (
    <section id="sustainability" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <ScrollReveal>
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold mb-6">Sustainability</p>
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
          {stats.map((stat, i) => (
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
  );
};

export default AboutSustainability;
