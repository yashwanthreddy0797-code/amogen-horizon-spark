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
    // Midnight Navy with Gold accents
    bg: "#0A192F",
    headerBg: "rgba(8, 20, 38, 0.95)",
    accentColor: "#D4AF37",
    dark: true,
    cardStyle: "midnight" as const,
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
    // Glassmorphism with Charcoal base
    bg: "rgba(54, 69, 79, 0.75)",
    headerBg: "rgba(54, 69, 79, 0.85)",
    accentColor: "rgba(255, 255, 255, 0.6)",
    dark: true,
    cardStyle: "glass" as const,
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
    // Deep Emerald with topographic texture
    bg: "#043927",
    headerBg: "rgba(3, 46, 31, 0.95)",
    accentColor: "#6BCB77",
    dark: true,
    cardStyle: "emerald" as const,
  },
];

const CARD_HEADER_HEIGHT = 48;

/* Topographic SVG pattern for card 3 */
const topoPattern = `url("data:image/svg+xml,%3Csvg width='600' height='600' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='rgba(255,255,255,0.06)' stroke-width='1'%3E%3Cellipse cx='300' cy='300' rx='280' ry='200'/%3E%3Cellipse cx='300' cy='300' rx='240' ry='170'/%3E%3Cellipse cx='300' cy='300' rx='200' ry='140'/%3E%3Cellipse cx='300' cy='300' rx='160' ry='110'/%3E%3Cellipse cx='300' cy='300' rx='120' ry='80'/%3E%3Cellipse cx='300' cy='300' rx='80' ry='50'/%3E%3Cellipse cx='300' cy='300' rx='40' ry='25'/%3E%3Cellipse cx='150' cy='450' rx='180' ry='120'/%3E%3Cellipse cx='150' cy='450' rx='140' ry='90'/%3E%3Cellipse cx='150' cy='450' rx='100' ry='60'/%3E%3Cellipse cx='450' cy='150' rx='160' ry='110'/%3E%3Cellipse cx='450' cy='150' rx='120' ry='80'/%3E%3Cellipse cx='450' cy='150' rx='80' ry='50'/%3E%3C/g%3E%3C/svg%3E")`;

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

          const cardBgStyle: React.CSSProperties = card.cardStyle === "glass"
            ? {
                background: card.bg,
                backdropFilter: "blur(25px)",
                WebkitBackdropFilter: "blur(25px)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                boxShadow: "0 -4px 40px -12px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)",
              }
            : card.cardStyle === "emerald"
            ? {
                background: card.bg,
                backgroundImage: topoPattern,
                backgroundSize: "600px 600px",
                boxShadow: "0 -4px 40px -12px rgba(0,0,0,0.25)",
              }
            : {
                background: card.bg,
                boxShadow: "0 -4px 40px -12px rgba(0,0,0,0.3)",
              };

          const headerStyle: React.CSSProperties = card.cardStyle === "glass"
            ? {
                height: `${CARD_HEADER_HEIGHT}px`,
                background: card.headerBg,
                backdropFilter: "blur(25px)",
                borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
              }
            : {
                height: `${CARD_HEADER_HEIGHT}px`,
                background: card.headerBg,
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
                      color: card.cardStyle === "midnight"
                        ? "#D4AF37"
                        : card.cardStyle === "emerald"
                        ? "rgba(107, 203, 119, 0.7)"
                        : "rgba(255, 255, 255, 0.5)",
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
                      }}
                      className="text-white"
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
                            style={{ ...TYPE.bodySm, fontSize: "14px" }}
                            className="text-white/75"
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
