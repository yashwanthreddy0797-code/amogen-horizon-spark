import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import researchLabImg from "@/assets/research-lab.jpg";
import manufacturingImg from "@/assets/manufacturing.jpg";
import scienceResearchImg from "@/assets/science-research.jpg";

const newsItems = [
  { image: researchLabImg },
  { image: manufacturingImg },
  { image: scienceResearchImg },
];

const NewsPreview = () => {
  const { t } = useLanguage();
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3;

  const items = [
    { date: t.newsPreview.news1Date, headline: t.newsPreview.news1Headline },
    { date: t.newsPreview.news2Date, headline: t.newsPreview.news2Headline },
    { date: t.newsPreview.news3Date, headline: t.newsPreview.news3Headline },
  ];

  return (
    <section id="news" className="pt-10 lg:pt-14 pb-24 lg:pb-36 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight mb-12">
            News and insights
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <ScrollReveal key={item.headline} delay={i * 0.1}>
              <a
                href="#"
                className="group block bg-muted/50 rounded-2xl overflow-hidden h-full flex flex-col"
              >
                {/* Card image */}
                <div className="p-4 pb-0">
                  <div className="rounded-xl overflow-hidden">
                    <img
                      src={newsItems[i].image}
                      alt={item.headline}
                      className="w-full h-[200px] object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Card content */}
                <div className="p-5 pt-4 flex flex-col flex-1">
                  <p className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground font-mono mb-3">
                    AMOGEN TEAM – {item.date}
                  </p>
                  <h3 className="text-base md:text-lg font-bold text-foreground leading-snug mb-auto">
                    {item.headline}
                  </h3>

                  {/* Read more footer */}
                  <div className="flex items-center justify-between mt-6 pt-4 border-t border-border/60">
                    <span className="text-sm font-medium text-foreground">
                      {t.newsPreview.readMore}
                    </span>
                    <ArrowRight
                      size={18}
                      className="text-muted-foreground group-hover:translate-x-1 transition-transform"
                    />
                  </div>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-4 mt-12">
          <button
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Previous page"
          >
            <ArrowLeft size={18} />
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`text-sm font-medium transition-colors ${
                currentPage === page
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {page}
            </button>
          ))}
          <button
            onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Next page"
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsPreview;
