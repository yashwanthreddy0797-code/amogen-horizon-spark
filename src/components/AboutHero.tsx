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
    <section className="bg-section-cream">
      <div
        className="mx-auto text-center"
        style={{
          maxWidth: SPACING.maxWidth,
          paddingLeft: SPACING.sectionPx,
          paddingRight: SPACING.sectionPx,
          paddingTop: "96px",
          paddingBottom: "96px",
        }}
      >
        {/* Label */}
        <ScrollReveal>
          <p
            style={{
              ...TYPE.meta,
              color: "hsl(var(--muted-foreground))",
              marginBottom: "32px",
            }}
          >
            Our Platform
          </p>
        </ScrollReveal>

        {/* Headline */}
        <ScrollReveal delay={0.05}>
          <h2
            style={{
              ...TYPE.h2,
              color: "hsl(var(--foreground))",
              maxWidth: "900px",
              marginLeft: "auto",
              marginRight: "auto",
              marginBottom: "32px",
            }}
          >
            {t.aboutHero.heading}
            <em className="italic" style={{ color: "hsl(var(--foreground))" }}>
              {t.aboutHero.headingEm}
            </em>
          </h2>
        </ScrollReveal>

        {/* Description */}
        <ScrollReveal delay={0.1}>
          <p
            style={{
              ...TYPE.bodyLg,
              color: "hsl(var(--muted-foreground))",
              maxWidth: "720px",
              marginLeft: "auto",
              marginRight: "auto",
              marginBottom: "64px",
            }}
          >
            We manufacture with precision. Because the right molecule, made wrong, helps no one.
          </p>
        </ScrollReveal>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0">
          {stats.map((stat, i) => (
            <ScrollReveal key={i} delay={0.15 + i * 0.06}>
              <div
                className="text-left md:px-8 first:md:pl-0 last:md:pr-0"
                style={{ borderTop: "2px solid hsl(var(--border))" }}
              >
                <div className="pt-6">
                  <span
                    style={{
                      ...TYPE.h1,
                      fontWeight: 700,
                      letterSpacing: "-0.03em",
                      color: "hsl(var(--foreground))",
                      lineHeight: 1,
                    }}
                  >
                    {stat.value}
                  </span>
                  {stat.unit && (
                    <span
                      style={{
                        ...TYPE.h3,
                        fontWeight: 600,
                        color: "hsl(var(--foreground))",
                        marginLeft: "2px",
                      }}
                    >
                      {stat.unit}
                    </span>
                  )}
                </div>
                <p
                  style={{
                    ...TYPE.body,
                    color: "hsl(var(--muted-foreground))",
                    marginTop: "8px",
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
