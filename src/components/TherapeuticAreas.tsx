const areas = [
  {
    title: "Oncology",
    description:
      "Developing next-generation targeted therapies and immuno-oncology treatments to advance precision medicine in cancer care.",
  },
  {
    title: "Immunology",
    description:
      "Pioneering novel approaches to modulate the immune system for autoimmune and inflammatory conditions.",
  },
  {
    title: "Neurology",
    description:
      "Advancing research in neurodegenerative diseases with a focus on disease-modifying therapies and biomarker-driven development.",
  },
  {
    title: "Rare Diseases",
    description:
      "Addressing critical unmet needs in orphan indications through innovative biologics and gene-based therapeutics.",
  },
];

const TherapeuticAreas = () => {
  return (
    <section id="therapeutic-areas" className="py-20 lg:py-28 bg-section-gray">
      <div className="container max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-accent font-medium mb-4">
            Therapeutic Areas
          </p>
          <h2 className="text-3xl md:text-4xl font-display text-foreground font-semibold">
            Our Areas of Focus
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {areas.map((area) => (
            <div
              key={area.title}
              className="bg-card border border-border p-8 hover:border-accent/30 transition-colors duration-300"
            >
              <h3 className="text-lg font-semibold text-foreground mb-4 tracking-wide">
                {area.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TherapeuticAreas;
