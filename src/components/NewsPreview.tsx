import ScrollReveal from "@/components/ScrollReveal";
import { ArrowRight } from "lucide-react";

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
    <section id="news" className="py-24 lg:py-36 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <ScrollReveal>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-4">
            News & Media
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight max-w-2xl mb-16">
            Latest Updates
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {newsItems.map((item, i) => (
            <ScrollReveal key={item.headline} delay={i * 0.1}>
              <a href="#" className="group block">
                <time className="text-xs uppercase tracking-[0.15em] text-muted-foreground font-semibold">
                  {item.date}
                </time>
                <h3 className="text-lg font-bold text-foreground mt-4 mb-3 leading-snug group-hover:text-primary transition-colors duration-200">
                  {item.headline}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {item.description}
                </p>
                <div className="flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
                  <span>Read more</span>
                  <ArrowRight size={14} />
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsPreview;
