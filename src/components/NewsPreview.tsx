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

        <div className="grid md:grid-cols-3 gap-5 lg:gap-6">
          {items.map((item, i) => (
            <ScrollReveal key={item.headline} delay={i * 0.1}>
              <a
                href="#"
                className="group flex flex-col h-full rounded-[20px] overflow-hidden relative"
                style={{ backgroundColor: "#F0EFED" }}
              >
                {/* Card image */}
                <div className="p-4 pb-0">
                  <div className="rounded-xl overflow-hidden">
                    <img
                      src={newsItems[i].image}
                      alt={item.headline}
                      className="w-full h-[195px] object-cover group-hover:scale-105 transition-transform duration-500"
                      style={{ borderRadius: "12px" }}
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Meta & Headline */}
                <div className="px-5 pt-6 flex-1">
                  <p className="text-[9.5px] uppercase tracking-[0.12em] text-muted-foreground font-mono mb-2.5 leading-none">
                    AMOGEN TEAM &nbsp;–&nbsp; {item.date}
                  </p>
                  <h3 className="text-sm md:text-[15px] font-medium text-foreground leading-[1.4]">
                    {item.headline}
                  </h3>
                </div>

                {/* Bottom section with corner notch */}
                <div className="relative mt-6 h-14">
                  {/* Background with bottom-right notch via clip-path */}
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundColor: "hsl(var(--background))",
                      clipPath: "polygon(0 40%, 65% 40%, 75% 0%, 100% 0%, 100% 100%, 0 100%)",
                    }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between px-5 pb-4">
                    <span className="text-xs font-medium text-foreground">
                      {t.newsPreview.readMore}
                    </span>
                    <span className="text-muted-foreground text-xl group-hover:translate-x-1 transition-transform leading-none">
                      →
                    </span>
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
