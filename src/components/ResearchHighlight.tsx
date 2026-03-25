import ScrollReveal from "@/components/ScrollReveal";

import facility1Img from "@/assets/facility-1.jpg";
import facility2Img from "@/assets/biologics-infographic.png";
import facility3Img from "@/assets/bioinformatics-banner.jpg";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { TYPE, SPACING } from "@/typography";

const cards = [
  {
    title: "Manufacturing Capacity",
    tag: "API MANUFACTURING",
    image: facility1Img,
    details: [
      "Microbial Fermentors",
      "Continuous Centrifuge",
      "Downstream Purification",
      "Preparative Chromatography",
      "Bulk Lyophilisation",
    ],
    bg: "rgba(0, 25, 101, 0.7)",
    blur: 20,
    headerBg: "rgba(0, 25, 101, 0.85)",
    accentColor: "#FFFFFF",
    textColor: "white",
    dark: true,
  },
  {
    title: "R&D Capabilities",
    tag: "RESEARCH & DEVELOPMENT",
    image: facility2Img,
    details: [
      "Sequence & Construct Engineering",
      "Multi-Host Expression Platforms",
      "Strain / Clone Development",
      "Cell Banking & Stability Systems",
      "Media & Seed Train Optimization",
      "Scalable Fermentation Development",
      "Soluble + Inclusion Body Recovery",
      "Integrated Purification Platform",
    ],
    bg: "rgba(229, 231, 235, 0.4)",
    blur: 30,
    headerBg: "rgba(229, 231, 235, 0.55)",
    accentColor: "#0B1E33",
    textColor: "#0B1E33",
    dark: false,
  },
  {
    title: "Analytical Capabilities",
    tag: "ANALYTICAL",
    image: facility3Img,
    details: [
      "UHPLC",
      "HPLC-UV/PDA",
      "LC–MS",
      "HRMS",
      "SEC-HPLC",
      "qPCR",
      "Microplate Reader",
      "cAMP Bioassay",
      "CD-Spectrometry",
    ],
    bg: "rgba(0, 163, 173, 0.6)",
    blur: 25,
    headerBg: "rgba(0, 163, 173, 0.75)",
    accentColor: "#FFFFFF",
    textColor: "white",
    dark: true,
  },
];

const CARD_HEADER_HEIGHT = 48;


const ResearchHighlight = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-background relative" style={{ paddingTop: "96px", paddingBottom: "0px" }}>
      {/* Subtle decorative element */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-[0.03] pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)", transform: "translate(0, -40%)" }}
      />

      <div className="mx-auto" style={{ maxWidth: SPACING.maxWidth, paddingLeft: SPACING.sectionPx, paddingRight: SPACING.sectionPx }}>
        {/* Two-column header layout */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-end mb-16">
          <ScrollReveal>
            <div>
              <p style={{ ...TYPE.label, color: "hsl(var(--muted-foreground))", marginBottom: SPACING.labelToH2 }}>
                {t.research.label}
              </p>
              <h2 style={TYPE.h2} className="text-foreground">
                {t.research.title}{" "}
                <em className="italic">{t.research.titleEm}</em>
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="md:text-right">
              <p
                style={{ ...TYPE.body, color: "hsl(var(--muted-foreground))" }}
                className="max-w-md md:ml-auto"
              >
                {t.research.description}
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Thin separator line */}
        <ScrollReveal delay={0.12}>
          <div className="w-full h-px bg-border mb-10" />
        </ScrollReveal>
      </div>

      {/* Shimmer hover CSS */}
      <style>{`
        .luxury-card {
          position: relative;
          overflow: hidden;
        }
        .luxury-card::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 50%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.04),
            rgba(255, 255, 255, 0.08),
            rgba(255, 255, 255, 0.04),
            transparent
          );
          transition: left 0.8s ease;
          pointer-events: none;
          z-index: 2;
        }
        .luxury-card:hover::after {
          left: 100%;
        }
      `}</style>

      {/* Stacked sticky scroll cards */}
      <div className="relative" style={{ marginLeft: "24px", marginRight: "24px" }}>
        {cards.map((card, index) => {
          const isLast = index === cards.length - 1;

          const cardBgStyle: React.CSSProperties = {
            background: card.bg,
            backdropFilter: `blur(${card.blur}px)`,
            WebkitBackdropFilter: `blur(${card.blur}px)`,
            border: "1px solid rgba(255, 255, 255, 0.15)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.08)",
          };

          const headerStyle: React.CSSProperties = {
            height: `${CARD_HEADER_HEIGHT}px`,
            borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
          };

          return (
            <div
              key={card.title}
              className={isLast ? "relative" : "sticky"}
              style={{
                top: isLast ? undefined : `${72 + index * CARD_HEADER_HEIGHT}px`,
                zIndex: index + 1,
                marginBottom: isLast ? 0 : `${CARD_HEADER_HEIGHT}px`,
              }}
            >
              <section
                className="rounded-t-3xl luxury-card"
                style={cardBgStyle}
              >
                {/* Persistent header strip */}
                <div
                  className="flex items-center rounded-t-3xl px-8 md:px-12"
                  style={headerStyle}
                >
                  <span
                    style={{
                      ...TYPE.label,
                      fontSize: "11px",
                      letterSpacing: "0.25em",
                      color: card.accentColor,
                    }}
                  >
                    {card.tag}
                  </span>
                </div>

                {/* Card body: text + image */}
                <div
                  className="mx-auto grid md:grid-cols-[1fr_0.8fr] gap-0 items-start"
                  style={{ maxWidth: "1200px", padding: "16px 0 48px" }}
                >
                  {/* Left: Text content */}
                  <div className="flex flex-col justify-center p-8 md:px-12 md:py-8">
                    <h3
                      style={{
                        ...TYPE.h2,
                        fontSize: "clamp(28px, 3.5vw, 44px)",
                        letterSpacing: "0.02em",
                        color: card.textColor,
                      }}
                    >
                      {card.title}
                    </h3>

                    <div className="mt-6 flex flex-col gap-2.5">
                      {card.details.map((detail, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div
                            className="w-1.5 h-1.5 rounded-full shrink-0"
                            style={{
                              background: card.accentColor,
                            }}
                          />
                          <p
                            style={{ ...TYPE.bodySm, fontSize: "14px", color: card.dark ? "rgba(255,255,255,0.75)" : "rgba(11,30,51,0.7)" }}
                          >
                            {detail}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right: Image */}
                  <div className="relative p-4 md:p-8 flex items-center justify-center">
                    <div className="relative overflow-hidden rounded-2xl w-full" style={{ maxHeight: "320px", aspectRatio: "4/3" }}>
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  </div>
                </div>
              </section>
            </div>
          );
        })}
      </div>

      {/* CTA row */}
      <div className="mx-auto" style={{ maxWidth: SPACING.maxWidth, paddingLeft: SPACING.sectionPx, paddingRight: SPACING.sectionPx }}>
        <div className="flex items-center justify-between py-12">
          <p style={{ ...TYPE.bodySm, color: "hsl(var(--muted-foreground))" }} className="hidden md:block">
            World-class infrastructure across 3 facilities
          </p>
          <a
            href="/cdmo"
            className="inline-flex items-center gap-3 group/cta"
            style={TYPE.button}
          >
            <span className="text-foreground group-hover/cta:text-primary transition-colors">
              {t.research.cta}
            </span>
            <span className="w-10 h-10 rounded-full bg-footer-bg text-footer-foreground flex items-center justify-center group-hover/cta:bg-primary transition-colors">
              <ArrowRight size={16} />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ResearchHighlight;
