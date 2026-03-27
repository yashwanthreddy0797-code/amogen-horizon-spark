import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import newsCard1 from "@/assets/news-gradient-1.jpg";
import newsCard2 from "@/assets/news-gradient-2.jpg";
import newsCard3 from "@/assets/news-gradient-3.jpg";
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
    <section id="news" style={{ background: "#FFFFFF", paddingTop: "40px", paddingBottom: SPACING.sectionPy.desktop }}>
      <div className="mx-auto" style={{ maxWidth: SPACING.maxWidth, paddingLeft: SPACING.sectionPx, paddingRight: SPACING.sectionPx }}>
        <ScrollReveal>
          <h2 style={{ ...TYPE.h2, marginBottom: "48px" }} className="text-foreground">News and insights</h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-3" style={{ gap: SPACING.cardGap }}>
          {items.map((item, i) => (
            <ScrollReveal key={item.headline} delay={i * 0.1}>
              <a href="#" className="group flex flex-col h-full rounded-[20px] overflow-hidden relative" style={{ backgroundColor: "rgba(204,197,189,0.35)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", border: "1px solid rgba(204,197,189,0.45)" }}>
                <div className="mx-3 mt-3 overflow-hidden rounded-[14px] border border-border/40 relative">
                  <img src={newsItems[i].image} alt={item.headline} className="w-full h-[195px] object-cover object-center group-hover:scale-105 transition-transform duration-500" loading="lazy" width={400} height={195} decoding="async" />
                  <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-sans tracking-[0.25em] text-sm font-light opacity-80 select-none pointer-events-none" style={{ fontFamily: "'Outfit', sans-serif", textShadow: "0 1px 8px rgba(0,0,0,0.2)" }}>AMOGEN</span>
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

        <div className="flex items-center justify-end gap-3 mt-12">
          <div className="relative w-48 h-[2px] bg-border/40 rounded-full overflow-hidden">
            <div
              className="absolute top-0 left-0 h-full rounded-full transition-all duration-500"
              style={{
                background: "hsl(var(--foreground))",
                width: `${(currentPage / totalPages) * 100}%`,
              }}
            />
          </div>
          <span style={{ ...TYPE.bodySm, fontSize: "12px", fontWeight: 400 }} className="text-muted-foreground">
            {currentPage} of {totalPages}
          </span>
        </div>
      </div>
    </section>
  );
};

export default NewsPreview;
