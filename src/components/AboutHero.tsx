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
        {/* Two-column layout */}
        <div className="grid md:grid-cols-[1fr_1fr] gap-16 items-end">
          {/* Left: Label + Headline */}
          <div>
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
                }}
              >
                {t.aboutHero.heading}
                <em className="italic" style={{ color: "hsl(var(--primary))", fontStyle: "italic" }}>
                  {t.aboutHero.headingEm}
                </em>
              </h2>
            </ScrollReveal>
          </div>

          {/* Right: Description */}
          <div>
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
        </div>

        {/* Divider */}
        <div style={{ height: "1px", background: "hsl(var(--border))", marginTop: "64px", marginBottom: "48px" }} />

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {stats.map((stat, i) => (
            <ScrollReveal key={i} delay={0.15 + i * 0.06}>
              <div className="relative">
                <div className="flex items-baseline gap-1">
                  <span
                    style={{
                      fontFamily: TYPE.display.fontFamily,
                      fontSize: "clamp(40px, 5vw, 56px)",
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
                        fontSize: "clamp(16px, 2vw, 22px)",
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
                    marginTop: "10px",
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
    </section>
  );
};

export default AboutHero;
