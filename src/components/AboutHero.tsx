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

        {/* Stats Cards — Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
          {stats.map((stat, i) => (
            <ScrollReveal key={i} delay={0.1 + i * 0.08}>
              <div
                className="relative aspect-square rounded-2xl flex flex-col justify-between p-6 md:p-8 overflow-hidden"
                style={{
                  background: i === 0
                    ? "linear-gradient(145deg, hsl(213 80% 50%) 0%, hsl(213 80% 35%) 100%)"
                    : i === 1
                    ? "hsl(0 0% 96%)"
                    : i === 2
                    ? "hsl(220 15% 92%)"
                    : "linear-gradient(145deg, hsl(220 20% 14%) 0%, hsl(220 20% 8%) 100%)",
                }}
              >
                {/* Subtle decorative element */}
                <div
                  className="absolute opacity-10 rounded-full"
                  style={{
                    width: "120%",
                    height: "120%",
                    top: "40%",
                    left: "20%",
                    background: i === 0 || i === 3
                      ? "radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)"
                      : "radial-gradient(circle, hsl(213 80% 50% / 0.1) 0%, transparent 70%)",
                  }}
                />

                {/* Label */}
                <p
                  style={{
                    ...TYPE.label,
                    fontSize: "10px",
                    color: i === 0
                      ? "rgba(255,255,255,0.7)"
                      : i === 3
                      ? "rgba(255,255,255,0.5)"
                      : "hsl(220 10% 45%)",
                  }}
                >
                  {stat.description}
                </p>

                {/* Value */}
                <div>
                  <span
                    style={{
                      fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif",
                      fontSize: "clamp(36px, 5vw, 56px)",
                      fontWeight: 700,
                      lineHeight: 1,
                      letterSpacing: "-0.03em",
                      color: i === 0
                        ? "#fff"
                        : i === 3
                        ? "#3B97DE"
                        : "hsl(220 20% 10%)",
                    }}
                  >
                    {stat.value}
                  </span>
                  {stat.unit && (
                    <span
                      style={{
                        fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif",
                        fontSize: "clamp(18px, 2.5vw, 28px)",
                        fontWeight: 600,
                        color: i === 0
                          ? "rgba(255,255,255,0.8)"
                          : i === 3
                          ? "#3B97DE"
                          : "hsl(220 10% 45%)",
                        marginLeft: "2px",
                      }}
                    >
                      {stat.unit}
                    </span>
                  )}
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
