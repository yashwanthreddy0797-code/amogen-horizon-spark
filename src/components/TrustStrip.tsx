import ScrollReveal from "@/components/ScrollReveal";

const TrustStrip = () => {
  return (
    <section id="about" className="py-24 lg:py-36 bg-section-cream">
      <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-16 text-center">
        <ScrollReveal>
          <div className="mb-10">
            <span className="inline-block text-base font-bold text-primary tracking-tight">
              AMOGEN
            </span>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <h2 className="text-3xl lg:text-5xl font-extrabold text-foreground leading-[1.15] md:text-6xl">
            A biopharma company should do more{" "}
            <em className="font-extrabold italic">than just make medicine.</em>
          </h2>
        </ScrollReveal>
      </div>
    </section>);

};

export default TrustStrip;