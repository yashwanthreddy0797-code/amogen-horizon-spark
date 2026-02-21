import ScrollReveal from "@/components/ScrollReveal";

const pipelineData = [
  { candidate: "AMG-1012", phase: "Phase III", area: "Oncology", progress: 85 },
  { candidate: "AMG-2045", phase: "Phase II", area: "Immunology", progress: 60 },
  { candidate: "AMG-3078", phase: "Phase I", area: "Neurology", progress: 35 },
  { candidate: "AMG-4091", phase: "Preclinical", area: "Rare Diseases", progress: 15 },
  { candidate: "AMG-5023", phase: "Phase II", area: "Oncology", progress: 55 },
];

const PipelinePreview = () => {
  return (
    <section id="pipeline" className="py-20 lg:py-28 bg-section-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <ScrollReveal>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-4">
            Pipeline
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight max-w-2xl">
            Our Clinical Pipeline
          </h2>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl leading-relaxed">
            From discovery through regulatory approval, our pipeline represents our commitment to advancing transformative therapies.
          </p>
        </ScrollReveal>

        <div className="mt-16 space-y-0">
          {/* Table header */}
          <ScrollReveal>
            <div className="hidden md:grid grid-cols-4 gap-4 pb-5 border-b border-border">
              <span className="text-xs uppercase tracking-[0.15em] text-muted-foreground font-bold">
                Drug Candidate
              </span>
              <span className="text-xs uppercase tracking-[0.15em] text-muted-foreground font-bold">
                Phase
              </span>
              <span className="text-xs uppercase tracking-[0.15em] text-muted-foreground font-bold">
                Therapeutic Area
              </span>
              <span className="text-xs uppercase tracking-[0.15em] text-muted-foreground font-bold">
                Progress
              </span>
            </div>
          </ScrollReveal>

          {/* Rows */}
          {pipelineData.map((item, i) => (
            <ScrollReveal key={item.candidate} delay={i * 0.08}>
              <div className="grid md:grid-cols-4 gap-4 py-6 border-b border-border items-center group hover:bg-card/50 transition-colors -mx-4 px-4 rounded-lg">
                <span className="text-lg font-bold text-foreground">
                  {item.candidate}
                </span>
                <span>
                  <span className="inline-block text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full bg-primary/10 text-primary">
                    {item.phase}
                  </span>
                </span>
                <span className="text-sm text-muted-foreground font-medium">
                  {item.area}
                </span>
                <div className="flex items-center gap-3">
                  <div className="flex-1 h-2 bg-border rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full transition-all duration-1000"
                      style={{ width: `${item.progress}%` }}
                    />
                  </div>
                  <span className="text-xs font-bold text-muted-foreground w-8">
                    {item.progress}%
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PipelinePreview;
