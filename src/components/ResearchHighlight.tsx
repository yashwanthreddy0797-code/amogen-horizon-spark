import researchImg from "@/assets/research-lab.jpg";

const ResearchHighlight = () => {
  return (
    <section className="py-20 lg:py-28 bg-section-gray">
      <div className="container max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-accent font-medium mb-4">
              Innovation & Research
            </p>
            <h2 className="text-3xl md:text-4xl font-display text-foreground font-semibold mb-8 leading-tight">
              Science That Transforms Patient Lives
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-6">
              Our research programs are built on a deep understanding of disease biology,
              leveraging proprietary platforms in protein engineering, genomics, and
              translational medicine to bring differentiated therapies to patients faster.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              With over two decades of experience in drug development, our multidisciplinary
              teams work across discovery, preclinical, and clinical stages to ensure
              scientific rigor at every step.
            </p>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src={researchImg}
              alt="AMOGEN research laboratory"
              className="w-full h-[400px] lg:h-[500px] object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchHighlight;
