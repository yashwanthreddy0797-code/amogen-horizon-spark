import ScrollReveal from "@/components/ScrollReveal";

import facility1Img from "@/assets/fermentors.png";
import facility2Img from "@/assets/biologics-types.png";
import facility3Img from "@/assets/bioinformatics-banner.jpg";
import flaskCultureImg from "@/assets/flask-culture.png";
import waveBioreactorImg from "@/assets/wave-bioreactor.png";
import seedBioreactorImg from "@/assets/seed-bioreactor.png";
import seedBioreactor200lImg from "@/assets/seed-bioreactor-200l.png";
import productionBioreactorImg from "@/assets/production-bioreactor.png";
import centrifugeImg from "@/assets/centrifuge.png";
import downstreamPurificationImg from "@/assets/downstream-purification.png";
import prepChromatographyImg from "@/assets/prep-chromatography.png";
import bulkLyophilisationImg from "@/assets/bulk-lyophilisation.png";
import uhplcImg from "@/assets/uhplc.png";
import hplcUvImg from "@/assets/hplc-uv.png";
import lcMsImg from "@/assets/lc-ms.png";
import hrmsImg from "@/assets/hrms.png";
import secHplcImg from "@/assets/sec-hplc.png";
import qpcrImg from "@/assets/qpcr.png";
import microplateImg from "@/assets/microplate-reader.png";
import campImg from "@/assets/camp-bioassay.png";
import cdSpecImg from "@/assets/cd-spectrometry.png";
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
    bg: "rgba(204, 197, 189, 0.55)",
    blur: 20,
    headerBg: "rgba(204, 197, 189, 0.55)",
    accentColor: "#0B1E33",
    textColor: "#0B1E33",
    dark: false,
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
    bg: "rgba(204, 197, 189, 0.55)",
    blur: 25,
    headerBg: "rgba(204, 197, 189, 0.55)",
    accentColor: "#0B1E33",
    textColor: "#0B1E33",
    dark: false,
  },
  {
    title: "Analytical Capabilities",
    tag: "ANALYTICAL",
    image: facility3Img,
    instruments: [
      { name: "UHPLC", image: uhplcImg },
      { name: "HPLC-UV/PDA", image: hplcUvImg },
      { name: "LC–MS", image: lcMsImg },
      { name: "HRMS", image: hrmsImg },
      { name: "SEC-HPLC", image: secHplcImg },
      { name: "qPCR", image: qpcrImg },
      { name: "Microplate Reader", image: microplateImg },
      { name: "cAMP Bioassay", image: campImg },
      { name: "CD-Spectrometry", image: cdSpecImg },
    ],
    details: [],
    bg: "rgba(204, 197, 189, 0.55)",
    blur: 25,
    headerBg: "rgba(204, 197, 189, 0.55)",
    accentColor: "#0B1E33",
    textColor: "#0B1E33",
    dark: false,
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
          const stickyTop = 72 + index * CARD_HEADER_HEIGHT;
          const CARD_HEIGHT = 500;
          // Each card wrapper needs enough height for the card to scroll into sticky position
          // and then stay while the next card scrolls up
          const wrapperStyle: React.CSSProperties = index < cards.length - 1
            ? { height: `${CARD_HEIGHT}px`, marginBottom: "0px" }
            : { marginBottom: "0px" };

          const cardBgStyle: React.CSSProperties = {
            background: card.bg,
            backdropFilter: `blur(${card.blur}px)`,
            WebkitBackdropFilter: `blur(${card.blur}px)`,
            border: "none",
            boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
            height: `${CARD_HEIGHT}px`,
          };

          const headerStyle: React.CSSProperties = {
            height: `${CARD_HEADER_HEIGHT}px`,
            borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
          };

          return (
            <div
              key={card.title}
              className="sticky"
              style={{
                top: `${stickyTop}px`,
                zIndex: index + 1,
                ...wrapperStyle,
              }}
            >
              <section
                className="luxury-card rounded-3xl"
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
                  className="mx-auto gap-0"
                  style={{ maxWidth: "1200px", padding: card.instruments ? "4px 0 16px" : "16px 0 48px" }}
                >
                  {card.instruments ? (
                    <>
                      {/* Heading */}
                      <div className="px-8 md:px-12 pt-3 pb-4">
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
                      </div>
                      {/* Two-column instrument grid */}
                      <div className="grid grid-cols-2 gap-x-6 gap-y-2 px-8 md:px-12">
                        {card.instruments.map((inst) => (
                          <div
                            key={inst.name}
                            className="rounded-xl px-4 py-2.5 flex items-center gap-3"
                            style={{
                              background: "rgba(255, 255, 255, 0.7)",
                              backdropFilter: "blur(10px)",
                              border: "1px solid rgba(255, 255, 255, 0.5)",
                            }}
                          >
                            <img
                              src={inst.image}
                              alt={inst.name}
                              className="w-11 h-11 object-contain flex-shrink-0"
                              loading="lazy"
                              decoding="async"
                            />
                            <p style={{ ...TYPE.bodySm, fontSize: "13px", fontWeight: 600, color: "#0B1E33" }}>
                              {inst.name}
                            </p>
                          </div>
                        ))}
                      </div>
                    </>
                  ) : (
                    <div className="grid md:grid-cols-[1fr_0.8fr] gap-0 items-start">
                      {/* Left: Text content */}
                      <div className="flex flex-col justify-start p-8 md:px-12" style={{ paddingTop: "32px" }}>
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
                                style={{ background: card.accentColor }}
                              />
                              <p style={{ ...TYPE.bodySm, fontSize: "14px", color: card.dark ? "rgba(255,255,255,0.75)" : "rgba(11,30,51,0.7)" }}>
                                {detail}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Right: Image */}
                      <div className="relative p-4 md:p-6 flex items-start justify-center">
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
                  )}
                </div>
              </section>
            </div>
          );
        })}
      </div>

      {/* CTA row */}
      <div className="mx-auto" style={{ maxWidth: SPACING.maxWidth, paddingLeft: SPACING.sectionPx, paddingRight: SPACING.sectionPx }}>
        <div className="flex items-center justify-between py-6">
          <p style={{ ...TYPE.bodySm, color: "hsl(var(--muted-foreground))" }} className="hidden md:block">
            {"\n"}
          </p>
          <a
            href="/cdmo"
            className="inline-flex items-center gap-3 group/cta"
            style={TYPE.button}
          >
            <span className="text-foreground group-hover/cta:text-primary transition-colors">
              {t.research.cta}
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ResearchHighlight;
