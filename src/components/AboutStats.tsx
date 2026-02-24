import ScrollReveal from "@/components/ScrollReveal";
import { ArrowRight } from "lucide-react";
import manufacturingImg from "@/assets/manufacturing.jpg";
import researchCloseupImg from "@/assets/research-closeup.jpg";
import patientCareImg from "@/assets/patient-care.jpg";
import { useLanguage } from "@/i18n/LanguageContext";

const AboutStats = () => {
  const { t } = useLanguage();

  const stats = [
    { category: t.aboutStats.stat1Category, value: t.aboutStats.stat1Value, label: t.aboutStats.stat1Label },
    { category: t.aboutStats.stat2Category, value: t.aboutStats.stat2Value, label: t.aboutStats.stat2Label },
    { category: t.aboutStats.stat3Category, value: t.aboutStats.stat3Value, unit: t.aboutStats.stat3Unit, label: t.aboutStats.stat3Label },
  ];

  const cards = [
    { image: manufacturingImg, title: t.aboutStats.card1Title, description: t.aboutStats.card1Desc, cta: t.aboutStats.card1Cta, link: "#" },
    { image: researchCloseupImg, title: t.aboutStats.card2Title, description: t.aboutStats.card2Desc, cta: t.aboutStats.card2Cta, link: "#" },
    { image: patientCareImg, title: t.aboutStats.card3Title, description: t.aboutStats.card3Desc, cta: t.aboutStats.card3Cta, link: "#" },
  ];

  return (
    <section className="py-16 lg:py-20 bg-section-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-6">{t.aboutStats.label}</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight">
              {t.aboutStats.title}{" "}<em className="italic">{t.aboutStats.titleEm}</em>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mt-6 leading-relaxed">{t.aboutStats.description}</p>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.category} delay={i * 0.12}>
              <div className="bg-card rounded-2xl p-8 shadow-sm">
                <p className="text-xs uppercase tracking-[0.15em] font-bold text-primary mb-4">{stat.category}</p>
                <span className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-primary leading-none">
                  {stat.value}
                  {stat.unit && <span className="text-2xl md:text-3xl lg:text-4xl"> {stat.unit}</span>}
                </span>
                <p className="text-sm md:text-base font-medium text-muted-foreground mt-3">{stat.label}</p>
                <a href="#" className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:underline mt-4">
                  {t.aboutStats.learnMore} <span>→</span>
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {cards.map((card, i) => (
            <ScrollReveal key={card.title} delay={i * 0.1}>
              <div className="flex flex-col">
                <div className="rounded-2xl overflow-hidden mb-6">
                  <img src={card.image} alt={card.title} className="w-full h-[240px] md:h-[260px] object-cover" loading="lazy" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground leading-tight mb-3">{card.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{card.description}</p>
                <a href={card.link} className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:underline">
                  <span>{card.cta}</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutStats;
