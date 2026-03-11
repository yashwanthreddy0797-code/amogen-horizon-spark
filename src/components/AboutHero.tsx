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
    <section className="relative overflow-hidden" style={{ background: "linear-gradient(180deg, hsl(var(--background)) 0%, #f0eeeb 100%)" }}>
      <div
        className="mx-auto relative z-10"
        style={{
          maxWidth: SPACING.maxWidth,
          paddingLeft: SPACING.sectionPx,
          paddingRight: SPACING.sectionPx,
          paddingTop: "120px",
          paddingBottom: "96px",
        }}
      >
        {/* Two-column layout: content left, stats right */}
        <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-16">
          {/* Left: Label + Headline + Description */}
          <div className="flex flex-col justify-center">
            <ScrollReveal>
              <p
                style={{
                  ...TYPE.label,
                  color: "hsl(var(--primary))",
                  marginBottom: SPACING.labelToH2,
                }}
              >
                Our Platform
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.05}>
              <h2
                style={{
                  ...TYPE.h1,
                  color: "hsl(var(--primary))",
                  lineHeight: 1.05,
                  marginBottom: "28px",
                }}
              >
                {t.aboutHero.heading}
                <span style={{ color: "hsl(var(--primary))" }}>
                  {t.aboutHero.headingEm}
                </span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p
                style={{
                  ...TYPE.bodyLg,
                  color: "hsl(var(--muted-foreground))",
                  maxWidth: "480px",
                }}
              >
                We manufacture with precision. Because the right molecule, made wrong, helps no one.
              </p>
            </ScrollReveal>
          </div>

          {/* Right: Stats stacked vertically */}
          <div className="flex flex-col gap-0">
            {stats.map((stat, i) => (
              <ScrollReveal key={i} delay={0.12 + i * 0.06}>
                <div
                  style={{
                    borderTop: i === 0 ? "1px solid hsl(var(--border))" : "none",
                    borderBottom: "1px solid hsl(var(--border))",
                    padding: "24px 0",
                    paddingLeft: "20%",
                  }}
                >
                  <div className="flex items-baseline gap-1">
                    <span
                      style={{
                        fontFamily: TYPE.display.fontFamily,
                        fontSize: "clamp(36px, 4vw, 48px)",
                        fontWeight: 700,
                        letterSpacing: "-0.03em",
                        color: "hsl(var(--primary))",
                        lineHeight: 1,
                      }}
                    >
                      {stat.value}
                    </span>
                    {stat.unit && (
                      <span
                        style={{
                          fontFamily: TYPE.h3.fontFamily,
                          fontSize: "clamp(14px, 1.5vw, 18px)",
                          fontWeight: 500,
                          color: "hsl(var(--primary))",
                        }}
                      >
                        {stat.unit}
                      </span>
                    )}
                  </div>
                  <p
                    style={{
                      ...TYPE.bodySm,
                      color: "hsl(var(--muted-foreground))",
                      marginTop: "6px",
                      lineHeight: 1.5,
                    }}
                  >
                    {stat.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
