import ScrollReveal from "@/components/ScrollReveal";
import { useLanguage } from "@/i18n/LanguageContext";

const AboutHero = () => {
  const { t } = useLanguage();

  const cards = [
    { label: t.aboutHero.card1Label, value: t.aboutHero.card1Value, unit: t.aboutHero.card1Unit, description: t.aboutHero.card1Desc },
    { label: t.aboutHero.card2Label, value: t.aboutHero.card2Value, unit: t.aboutHero.card2Unit, description: t.aboutHero.card2Desc },
    { label: t.aboutHero.card3Label, value: t.aboutHero.card3Value, unit: t.aboutHero.card3Unit, description: t.aboutHero.card3Desc },
  ];

  return (
    <section className="py-20 lg:py-28 bg-section-cream">
      <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-16 text-center">
        <ScrollReveal delay={0.1}>
          <h2 className="text-[36px] md:text-[40px] font-extrabold text-foreground leading-[1.2]">
            {t.aboutHero.heading}
            <em className="font-extrabold italic">{t.aboutHero.headingEm}</em>
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <p className="text-lg text-muted-foreground mt-8 max-w-3xl mx-auto leading-relaxed">
            {t.aboutHero.description}
          </p>
        </ScrollReveal>
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 mt-16">
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <ScrollReveal key={card.label} delay={0.15 + i * 0.1}>
              <div className="bg-card rounded-2xl p-12 shadow-sm h-full">
                <p className="text-sm uppercase tracking-[0.2em] text-primary font-bold mb-8">{card.label}</p>
                <p className="text-foreground mb-2">
                  <span className="text-6xl md:text-7xl font-extrabold">{card.value}</span>
                  {card.unit && <span className="text-3xl font-bold ml-1">{card.unit}</span>}
                </p>
                <p className="text-lg text-muted-foreground mt-3">{card.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
