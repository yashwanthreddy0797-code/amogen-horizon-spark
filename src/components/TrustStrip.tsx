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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-[1.15]">
            Where peptide science meets{" "}
            <em className="font-extrabold italic">global scale.</em>
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.25}>
          <p className="text-lg text-muted-foreground mt-8 max-w-3xl mx-auto leading-relaxed">
            Transforming metabolic health by delivering cutting-edge GLP-1 peptide therapies and scalable manufacturing solutions.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default TrustStrip;
