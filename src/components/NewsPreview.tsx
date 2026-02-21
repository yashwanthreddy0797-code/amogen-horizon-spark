const newsItems = [
  {
    date: "February 10, 2026",
    headline: "AMOGEN BIO PHARMA Reports Positive Phase III Results for AMG-1012 in Advanced Solid Tumors",
    description:
      "Pivotal trial demonstrates statistically significant improvement in overall survival, meeting its primary endpoint.",
  },
  {
    date: "January 22, 2026",
    headline: "AMOGEN Expands Global Research Collaboration with Leading Academic Institutions",
    description:
      "New multi-year partnership aims to accelerate discovery of novel therapeutic targets in immunology.",
  },
  {
    date: "December 15, 2025",
    headline: "AMOGEN BIO PHARMA Announces FDA Fast Track Designation for AMG-4091",
    description:
      "Designation granted for the treatment of a rare genetic disorder affecting pediatric populations worldwide.",
  },
];

const NewsPreview = () => {
  return (
    <section id="news" className="py-20 lg:py-28 bg-background">
      <div className="container max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-accent font-medium mb-4">
            News & Media
          </p>
          <h2 className="text-3xl md:text-4xl font-display text-foreground font-semibold">
            Latest Updates
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <article
              key={item.headline}
              className="group border-t-2 border-border pt-6 hover:border-accent transition-colors duration-300"
            >
              <time className="text-xs uppercase tracking-[0.15em] text-muted-foreground font-medium">
                {item.date}
              </time>
              <h3 className="text-base font-semibold text-foreground mt-3 mb-3 leading-snug group-hover:text-accent transition-colors duration-200">
                {item.headline}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsPreview;
