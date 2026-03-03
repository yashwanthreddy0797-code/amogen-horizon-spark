import ScrollReveal from "@/components/ScrollReveal";
import { useLanguage } from "@/i18n/LanguageContext";
import { TYPE, SPACING } from "@/typography";

const AboutHero = () => {
  const { t } = useLanguage();

  const cards = [
    { label: t.aboutHero.card1Label, value: t.aboutHero.card1Value, unit: t.aboutHero.card1Unit, description: t.aboutHero.card1Desc },
    { label: t.aboutHero.card2Label, value: t.aboutHero.card2Value, unit: t.aboutHero.card2Unit, description: t.aboutHero.card2Desc },
    { label: t.aboutHero.card3Label, value: t.aboutHero.card3Value, unit: t.aboutHero.card3Unit, description: t.aboutHero.card3Desc },
  ];

  return (
    <section className="bg-section-cream" style={{ paddingTop: SPACING.sectionPy.desktop, paddingBottom: "56px" }}>
      <div className="mx-auto text-center" style={{ maxWidth: "960px", paddingLeft: SPACING.sectionPx, paddingRight: SPACING.sectionPx }}>
        <ScrollReveal delay={0.1}>
          <h2 style={TYPE.h2} className="text-foreground">
            {t.aboutHero.heading}
            <em className="italic">{t.aboutHero.headingEm}</em>
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <p style={{ ...TYPE.bodyLg, color: "hsl(var(--muted-foreground))", marginTop: SPACING.headingToSub }} className="max-w-3xl mx-auto">
            {t.aboutHero.description}
          </p>
        </ScrollReveal>
      </div>
      <div className="mx-auto" style={{ maxWidth: SPACING.maxWidth, paddingLeft: SPACING.sectionPx, paddingRight: SPACING.sectionPx, marginTop: "64px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: SPACING.cardGap }} className="max-md:grid-cols-1">
          {cards.map((card, i) => (
            <ScrollReveal key={card.label} delay={0.15 + i * 0.1}>
              <div className="bg-card rounded-2xl shadow-sm h-full" style={{ padding: SPACING.cardPadding }}>
                <p style={{ ...TYPE.label, color: "hsl(var(--primary))", marginBottom: "32px" }}>{card.label}</p>
                <p className="text-foreground" style={{ marginBottom: "8px" }}>
                  <span style={{ ...TYPE.display, fontSize: "clamp(48px, 6vw, 72px)" }}>{card.value}</span>
                  {card.unit && <span style={{ ...TYPE.h2, marginLeft: "4px" }}>{card.unit}</span>}
                </p>
                <p style={{ ...TYPE.bodyLg, color: "hsl(var(--muted-foreground))", marginTop: "12px" }}>{card.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
