import ScrollReveal from "@/components/ScrollReveal";
import { useLanguage } from "@/i18n/LanguageContext";
import { motion } from "framer-motion";
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
    <section className="relative bg-footer-bg overflow-hidden">
      {/* Subtle gradient overlay for depth */}
      <div className="absolute inset-0 opacity-30" style={{
        background: "radial-gradient(ellipse at 20% 50%, hsl(213 80% 35% / 0.4) 0%, transparent 60%), radial-gradient(ellipse at 80% 80%, hsl(227 100% 30% / 0.3) 0%, transparent 50%)"
      }} />

      <div
        className="relative mx-auto"
        style={{
          maxWidth: SPACING.maxWidth,
          paddingLeft: SPACING.sectionPx,
          paddingRight: SPACING.sectionPx,
          paddingTop: "80px",
          paddingBottom: "80px",
        }}
      >
        {/* Tagline */}
        <ScrollReveal>
          <div className="max-w-3xl mb-16 md:mb-20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-[#3B97DE]" />
              <p style={{ ...TYPE.label, color: "#3B97DE" }}>
                Our Platform
              </p>
            </div>
            <h2
              style={{
                ...TYPE.h2,
                color: "hsl(var(--footer-foreground))",
                lineHeight: 1.15,
              }}
            >
              {t.aboutHero.heading}
              <em className="italic not-italic" style={{ color: "rgba(255,255,255,0.5)" }}>
                {t.aboutHero.headingEm}
              </em>
            </h2>
          </div>
        </ScrollReveal>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
          {stats.map((stat, i) => (
            <ScrollReveal key={i} delay={0.1 + i * 0.08}>
              <div
                className={`relative py-8 md:py-0 ${
                  i < stats.length - 1 ? "md:border-r md:border-white/10" : ""
                } ${i < 2 ? "border-b md:border-b-0 border-white/10" : ""}`}
                style={{
                  paddingLeft: i === 0 ? 0 : undefined,
                  paddingRight: i === stats.length - 1 ? 0 : undefined,
                }}
              >
                <div className={`${i > 0 ? "md:pl-8 lg:pl-10" : ""} ${i < stats.length - 1 ? "md:pr-8 lg:pr-10" : ""}`}>
                  <p className="mb-2">
                    <span
                      style={{
                        fontFamily: "'DM Mono', 'Courier New', monospace",
                        fontSize: "clamp(40px, 5vw, 64px)",
                        fontWeight: 400,
                        lineHeight: 1,
                        letterSpacing: "-0.02em",
                        color: "#3B97DE",
                      }}
                    >
                      {stat.value}
                    </span>
                    {stat.unit && (
                      <span
                        style={{
                          fontFamily: "'DM Mono', 'Courier New', monospace",
                          fontSize: "clamp(20px, 2.5vw, 32px)",
                          fontWeight: 400,
                          color: "#3B97DE",
                          marginLeft: "2px",
                        }}
                      >
                        {stat.unit}
                      </span>
                    )}
                  </p>
                  <p
                    style={{
                      ...TYPE.bodySm,
                      color: "rgba(255,255,255,0.45)",
                      lineHeight: 1.5,
                    }}
                  >
                    {stat.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
