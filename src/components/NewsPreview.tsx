import ScrollReveal from "@/components/ScrollReveal";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const NewsPreview = () => {
  const { t } = useLanguage();

  const newsItems = [
    { date: t.newsPreview.news1Date, headline: t.newsPreview.news1Headline, description: t.newsPreview.news1Desc },
    { date: t.newsPreview.news2Date, headline: t.newsPreview.news2Headline, description: t.newsPreview.news2Desc },
    { date: t.newsPreview.news3Date, headline: t.newsPreview.news3Headline, description: t.newsPreview.news3Desc },
  ];

  return (
    <section id="news" className="py-24 lg:py-36 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <ScrollReveal>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-4">{t.newsPreview.label}</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight max-w-2xl mb-16">{t.newsPreview.title}</h2>
        </ScrollReveal>
        <div className="grid md:grid-cols-3 gap-8">
          {newsItems.map((item, i) => (
            <ScrollReveal key={item.headline} delay={i * 0.1}>
              <a href="#" className="group block">
                <time className="text-xs uppercase tracking-[0.15em] text-muted-foreground font-semibold">{item.date}</time>
                <h3 className="text-lg font-bold text-foreground mt-4 mb-3 leading-snug group-hover:text-primary transition-colors duration-200">{item.headline}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{item.description}</p>
                <div className="flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
                  <span>{t.newsPreview.readMore}</span>
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
