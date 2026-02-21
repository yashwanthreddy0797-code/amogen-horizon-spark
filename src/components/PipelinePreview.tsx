const pipelineData = [
  { candidate: "AMG-1012", phase: "Phase III", area: "Oncology" },
  { candidate: "AMG-2045", phase: "Phase II", area: "Immunology" },
  { candidate: "AMG-3078", phase: "Phase I", area: "Neurology" },
  { candidate: "AMG-4091", phase: "Preclinical", area: "Rare Diseases" },
  { candidate: "AMG-5023", phase: "Phase II", area: "Oncology" },
];

const phaseColor = (phase: string) => {
  if (phase === "Phase III") return "bg-accent/20 text-accent";
  if (phase === "Phase II") return "bg-primary/10 text-primary";
  if (phase === "Phase I") return "bg-muted text-muted-foreground";
  return "bg-muted text-muted-foreground";
};

const PipelinePreview = () => {
  return (
    <section id="pipeline" className="py-20 lg:py-28 bg-background">
      <div className="container max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-accent font-medium mb-4">
            Pipeline
          </p>
          <h2 className="text-3xl md:text-4xl font-display text-foreground font-semibold">
            Our Clinical Pipeline
          </h2>
        </div>

        {/* Table header */}
        <div className="hidden md:grid grid-cols-3 gap-4 pb-4 border-b border-border mb-2">
          <span className="text-xs uppercase tracking-[0.15em] text-muted-foreground font-semibold">
            Drug Candidate
          </span>
          <span className="text-xs uppercase tracking-[0.15em] text-muted-foreground font-semibold">
            Phase
          </span>
          <span className="text-xs uppercase tracking-[0.15em] text-muted-foreground font-semibold">
            Therapeutic Area
          </span>
        </div>

        {/* Rows */}
        {pipelineData.map((item) => (
          <div
            key={item.candidate}
            className="grid md:grid-cols-3 gap-4 py-5 border-b border-border items-center"
          >
            <span className="text-base font-semibold text-foreground tracking-wide">
              {item.candidate}
            </span>
            <span>
              <span
                className={`inline-block text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-sm ${phaseColor(item.phase)}`}
              >
                {item.phase}
              </span>
            </span>
            <span className="text-sm text-muted-foreground">{item.area}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PipelinePreview;
