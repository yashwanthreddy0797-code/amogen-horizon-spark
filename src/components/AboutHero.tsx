import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { useLanguage } from "@/i18n/LanguageContext";
import { TYPE, SPACING } from "@/typography";
import platformMfgImg from "@/assets/platform-manufacturing.jpg";
import platformSciImg from "@/assets/platform-science.jpg";

const AboutHero = () => {
  const { t } = useLanguage();

  return (
    <section
      className="relative overflow-hidden"
      style={{ backgroundColor: "#0A1628" }}
    >
      <div
        className="mx-auto relative z-10"
        style={{
          maxWidth: SPACING.maxWidth,
          paddingLeft: SPACING.sectionPx,
          paddingRight: SPACING.sectionPx,
          paddingTop: "96px",
          paddingBottom: "96px",
        }}
      >
        {/* Section heading */}
        <ScrollReveal>
          <h2
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "clamp(32px, 4vw, 52px)",
              fontWeight: 300,
              color: "#FFFFFF",
              lineHeight: 1.15,
              marginBottom: "48px",
              maxWidth: "700px",
            }}
          >
            We manufacture with precision.
            <br />
            <span style={{ color: "rgba(255,255,255,0.55)" }}>
              Because the right molecule, made wrong, helps no one.
            </span>
          </h2>
        </ScrollReveal>

        {/* Bento grid — row 1: large image card + small stat card */}
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-4">
          {/* Card 1 — Manufacturing image + stat */}
          <ScrollReveal delay={0.05}>
            <div
              className="relative rounded-2xl overflow-hidden group"
              style={{ minHeight: 380 }}
            >
              <img
                src={platformMfgImg}
                alt="Manufacturing facility"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                width={960}
                height={640}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="relative z-10 flex flex-col justify-end h-full p-8" style={{ minHeight: 380 }}>
                <div className="flex items-baseline gap-1 mb-2">
                  <span
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "clamp(40px, 5vw, 56px)",
                      fontWeight: 700,
                      color: "#FFFFFF",
                      lineHeight: 1,
                      letterSpacing: "-0.03em",
                    }}
                  >
                    {t.aboutHero.card1Value}
                  </span>
                  {t.aboutHero.card1Unit && (
                    <span
                      style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: "20px",
                        fontWeight: 500,
                        color: "#FFFFFF",
                      }}
                    >
                      {t.aboutHero.card1Unit}
                    </span>
                  )}
                </div>
                <p
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "16px",
                    fontWeight: 400,
                    color: "rgba(255,255,255,0.7)",
                    lineHeight: 1.5,
                    maxWidth: 420,
                    marginBottom: "16px",
                  }}
                >
                  {t.aboutHero.card1Desc}
                </p>
                <a
                  href="/cdmo"
                  className="inline-flex items-center gap-1.5 text-white/80 hover:text-white transition-colors"
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "13px",
                    fontWeight: 500,
                    textDecoration: "underline",
                    textUnderlineOffset: "4px",
                  }}
                >
                  Learn more <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 2 — Pipeline stat (icon card) */}
          <ScrollReveal delay={0.1}>
            <div
              className="relative rounded-2xl overflow-hidden flex flex-col justify-between p-8"
              style={{
                minHeight: 380,
                border: "1px solid rgba(255,255,255,0.1)",
                backgroundColor: "rgba(255,255,255,0.03)",
              }}
            >
              {/* Decorative icon */}
              <div className="mb-auto">
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
                  <circle cx="28" cy="28" r="3" fill="#3ECFBF" />
                  <circle cx="28" cy="28" r="12" stroke="#3ECFBF" strokeWidth="1" opacity="0.5" />
                  <circle cx="28" cy="28" r="22" stroke="#3ECFBF" strokeWidth="0.5" opacity="0.25" />
                  <line x1="28" y1="6" x2="28" y2="16" stroke="#3ECFBF" strokeWidth="0.8" opacity="0.6" />
                  <line x1="28" y1="40" x2="28" y2="50" stroke="#3ECFBF" strokeWidth="0.8" opacity="0.6" />
                  <line x1="6" y1="28" x2="16" y2="28" stroke="#3ECFBF" strokeWidth="0.8" opacity="0.6" />
                  <line x1="40" y1="28" x2="50" y2="28" stroke="#3ECFBF" strokeWidth="0.8" opacity="0.6" />
                </svg>
              </div>

              <div>
                <div className="flex items-baseline gap-1 mb-2">
                  <span
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "clamp(40px, 5vw, 56px)",
                      fontWeight: 700,
                      color: "#FFFFFF",
                      lineHeight: 1,
                      letterSpacing: "-0.03em",
                    }}
                  >
                    {t.aboutHero.card2Value}
                  </span>
                </div>
                <p
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "18px",
                    fontWeight: 500,
                    color: "#FFFFFF",
                    marginBottom: "8px",
                  }}
                >
                  {t.aboutHero.card2Desc}
                </p>
                <p
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "14px",
                    fontWeight: 400,
                    color: "rgba(255,255,255,0.5)",
                    lineHeight: 1.5,
                  }}
                >
                  Advancing a robust pipeline targeting diabetes, obesity, and immunology.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Bento grid — row 2: small stat card + large image card */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4 mt-4">
          {/* Card 3 — Capacity stat (icon card) */}
          <ScrollReveal delay={0.15}>
            <div
              className="relative rounded-2xl overflow-hidden flex flex-col justify-between p-8"
              style={{
                minHeight: 380,
                border: "1px solid rgba(255,255,255,0.1)",
                backgroundColor: "rgba(255,255,255,0.03)",
              }}
            >
              {/* Decorative element */}
              <div className="mb-auto flex items-center gap-2">
                <div style={{ width: 24, height: 6, backgroundColor: "#3ECFBF", borderRadius: 3, opacity: 0.5 }} />
                <div style={{ width: 40, height: 6, backgroundColor: "#3ECFBF", borderRadius: 3 }} />
                <div style={{ width: 16, height: 6, backgroundColor: "#3ECFBF", borderRadius: 3, opacity: 0.3 }} />
              </div>

              <div>
                <div className="flex items-baseline gap-1 mb-2">
                  <span
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "clamp(40px, 5vw, 56px)",
                      fontWeight: 700,
                      color: "#FFFFFF",
                      lineHeight: 1,
                      letterSpacing: "-0.03em",
                    }}
                  >
                    {t.aboutHero.card3Value}
                  </span>
                  {t.aboutHero.card3Unit && (
                    <span
                      style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: "20px",
                        fontWeight: 500,
                        color: "#FFFFFF",
                      }}
                    >
                      {t.aboutHero.card3Unit}
                    </span>
                  )}
                </div>
                <p
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "18px",
                    fontWeight: 500,
                    color: "#FFFFFF",
                    marginBottom: "8px",
                  }}
                >
                  {t.aboutHero.card3Desc}
                </p>
                <p
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "14px",
                    fontWeight: 400,
                    color: "rgba(255,255,255,0.5)",
                    lineHeight: 1.5,
                  }}
                >
                  Scaling microbial fermentation to meet global biosimilar demand.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 4 — Science image + team stat */}
          <ScrollReveal delay={0.2}>
            <div
              className="relative rounded-2xl overflow-hidden group"
              style={{ minHeight: 380 }}
            >
              <img
                src={platformSciImg}
                alt="Research scientist"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                width={960}
                height={640}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="relative z-10 flex flex-col justify-end h-full p-8" style={{ minHeight: 380 }}>
                <div className="flex items-baseline gap-1 mb-2">
                  <span
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "clamp(40px, 5vw, 56px)",
                      fontWeight: 700,
                      color: "#FFFFFF",
                      lineHeight: 1,
                      letterSpacing: "-0.03em",
                    }}
                  >
                    {t.aboutHero.card4Value}
                  </span>
                </div>
                <p
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "16px",
                    fontWeight: 400,
                    color: "rgba(255,255,255,0.7)",
                    lineHeight: 1.5,
                    maxWidth: 420,
                    marginBottom: "16px",
                  }}
                >
                  {t.aboutHero.card4Desc}
                </p>
                <a
                  href="/about"
                  className="inline-flex items-center gap-1.5 text-white/80 hover:text-white transition-colors"
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "13px",
                    fontWeight: 500,
                    textDecoration: "underline",
                    textUnderlineOffset: "4px",
                  }}
                >
                  Learn more <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
