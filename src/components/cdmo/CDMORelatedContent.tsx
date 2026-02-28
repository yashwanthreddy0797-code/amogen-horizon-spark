import ScrollReveal from "@/components/ScrollReveal";
import facility1 from "@/assets/facility-1.jpg";
import facility2 from "@/assets/facility-2.jpg";
import facility3 from "@/assets/facility-3.jpg";
import researchCloseup from "@/assets/research-closeup.jpg";

const articles = [
  {
    image: facility1,
    category: "Whitepapers",
    title: "Optimizing charge and N-glycan profiles for CHO-derived fusion proteins",
    date: "Sep 2025",
  },
  {
    image: facility2,
    category: "Insight",
    title: "Navigating the complexities of drug development with integrated platforms",
    date: "Aug 2025",
  },
  {
    image: facility3,
    category: "Insight",
    title: "How AMOGEN fosters CMC expertise and achieves client satisfaction",
    date: "Jun 2025",
  },
  {
    image: researchCloseup,
    category: "Webinars",
    title: "Advanced CLD: higher productivity with transposase and ADCC enhancements",
    date: "Apr 2025",
  },
];

const CDMORelatedContent = () => {
  return (
    <section className="py-20 lg:py-28 bg-section-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-12">
            Related Content
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {articles.map((article, i) => (
            <ScrollReveal key={article.title} delay={i * 0.08}>
              <a href="#" className="group block bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full">
                <div className="h-[180px] overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs font-bold text-primary uppercase tracking-wider mb-2">
                    {article.category}
                  </p>
                  <h3 className="text-sm font-bold text-foreground leading-snug line-clamp-3">
                    {article.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-3">{article.date}</p>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CDMORelatedContent;
