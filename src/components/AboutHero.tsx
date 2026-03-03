import ScrollReveal from "@/components/ScrollReveal";
import { useLanguage } from "@/i18n/LanguageContext";
import { TYPE, SPACING } from "@/typography";

const AboutHero = () => {
  const { t } = useLanguage();

  const stats = [
    { value: t.aboutHero.card1Value, unit: t.aboutHero.card1Unit, description: t.aboutHero.card1Desc },
    { value: t.aboutHero.card2Value, unit: t.aboutHero.card2Unit, description: t.aboutHero.card2Desc },
    { value: t.aboutHero.card3Value, unit: t.aboutHero.card3Unit, description: t.aboutHero.card3Desc },
    { value: t.aboutHero.card4Value, unit: t.aboutHero.card4Unit, description: t.aboutHero.card4Desc },
  ];

  return (
    <section style={{ backgroundColor: "white", paddingTop: SPACING.sectionPy.desktop, paddingBottom: SPACING.sectionPy.desktop }}>
      <div
        className="mx-auto"
        style={{
          maxWidth: SPACING.maxWidth,
          paddingLeft: SPACING.sectionPx,
          paddingRight: SPACING.sectionPx,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "80px",
          alignItems: "center",
        }}
      >
        {/* Left: Headline + Body */}
        <div className="max-md:col-span-2">
          <ScrollReveal delay={0.1}>
            <h2 style={{ ...TYPE.h2, color: "#1a1a1a" }}>
              {t.aboutHero.heading}
              <em className="italic" style={{ color: "rgba(0,0,0,0.6)" }}>{t.aboutHero.headingEm}</em>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p style={{ ...TYPE.bodyLg, color: "rgba(0,0,0,0.6)", marginTop: SPACING.headingToSub }}>
              {t.aboutHero.description}
            </p>
          </ScrollReveal>
        </div>

        {/* Right: 2×2 Stats Grid */}
        <div
          className="max-md:col-span-2"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px 64px" }}
        >
          {stats.map((stat, i) => (
            <ScrollReveal key={i} delay={0.15 + i * 0.1}>
              <div>
                <p style={{ marginBottom: "8px" }}>
                  <span
                    style={{
                      fontFamily: "'DM Mono', 'Courier New', monospace",
                      fontSize: "clamp(48px, 6vw, 80px)",
                      fontWeight: 400,
                      lineHeight: 1,
                      letterSpacing: "-0.02em",
                      color: "#8B9E3C",
                    }}
                  >
                    {stat.value}
                  </span>
                  {stat.unit && (
                    <span
                      style={{
                        fontFamily: "'DM Mono', 'Courier New', monospace",
                        fontSize: "clamp(28px, 3vw, 40px)",
                        fontWeight: 400,
                        color: "#8B9E3C",
                        marginLeft: "4px",
                      }}
                    >
                      {stat.unit}
                    </span>
                  )}
                </p>
                <p style={{ ...TYPE.body, color: "rgba(0,0,0,0.55)" }}>{stat.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Mobile responsive override */}
      <style>{`
        @media (max-width: 768px) {
          section > div[style] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutHero;
