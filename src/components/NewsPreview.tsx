import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import newsCard1 from "@/assets/news-card-1.png";
import newsCard2 from "@/assets/news-card-2.png";
import newsCard3 from "@/assets/news-card-3.png";
import { TYPE, SPACING } from "@/typography";

const newsItems = [
  { image: newsCard1 },
  { image: newsCard2 },
  { image: newsCard3 },
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
    <section id="news" className="bg-background" style={{ paddingTop: "40px", paddingBottom: SPACING.sectionPy.desktop }}>
      <div className="mx-auto" style={{ maxWidth: SPACING.maxWidth, paddingLeft: SPACING.sectionPx, paddingRight: SPACING.sectionPx }}>
        <ScrollReveal>
          <h2 style={{ ...TYPE.h2, marginBottom: "48px" }} className="text-foreground">News and insights</h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-3" style={{ gap: SPACING.cardGap }}>
          {items.map((item, i) => (
            <ScrollReveal key={item.headline} delay={i * 0.1}>
              <a href="#" className="group flex flex-col h-full rounded-[20px] overflow-hidden relative" style={{ backgroundColor: "#F0EFED" }}>
                <div className="overflow-hidden rounded-t-[20px]">
                  <img src={newsItems[i].image} alt={item.headline} className="w-full h-[195px] object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" width={400} height={230} decoding="async" />
                </div>
                <div className="px-5 pt-6 flex-1">
                  <p style={{ ...TYPE.meta, fontSize: "10px", color: "hsl(var(--muted-foreground))", marginBottom: "10px" }}>
                    AMOGEN TEAM &nbsp;–&nbsp; {item.date}
                  </p>
                  <h3 style={{ ...TYPE.bodySm, fontWeight: 500 }} className="text-foreground">{item.headline}</h3>
                </div>
                <div className="relative mt-6 h-14">
                  <div className="absolute inset-0" style={{ backgroundColor: "hsl(var(--background))", clipPath: "polygon(0 40%, 65% 40%, 75% 0%, 100% 0%, 100% 100%, 0 100%)" }} />
                  <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between px-5 pb-4">
                    <span style={{ ...TYPE.bodySm, fontSize: "12px", fontWeight: 500 }} className="text-foreground">{t.newsPreview.readMore}</span>
                    <span className="text-muted-foreground text-xl group-hover:translate-x-1 transition-transform leading-none">→</span>
                  </div>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>

        <div className="flex items-center justify-center gap-4 mt-12">
          <button onClick={() => setCurrentPage(Math.max(1, currentPage - 1))} className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Previous page"><ArrowLeft size={18} /></button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button key={page} onClick={() => setCurrentPage(page)} className={`transition-colors ${currentPage === page ? "text-primary" : "text-muted-foreground hover:text-foreground"}`} style={{ ...TYPE.bodySm, fontWeight: 500 }}>{page}</button>
          ))}
          <button onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))} className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Next page"><ArrowRight size={18} /></button>
        </div>
      </div>
    </section>
  );
};

export default NewsPreview;
