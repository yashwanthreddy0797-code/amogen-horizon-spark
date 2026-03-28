import { useRef } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { motion, useScroll, useTransform } from "framer-motion";

import facility1Img from "@/assets/fermentors.png";
import facility3Img from "@/assets/bioinformatics-banner.jpg";
import sequenceEngImg from "@/assets/sequence-engineering.png";
import multiHostImg from "@/assets/multi-host-expression.png";
import strainCloneImg from "@/assets/strain-clone-dev.png";
import cellBankingImg from "@/assets/cell-banking.png";
import mediaSeedTrainImg from "@/assets/media-seed-train.png";
import scalableFermentationImg from "@/assets/scalable-fermentation.png";
import inclusionBodyImg from "@/assets/inclusion-body-recovery.png";
import integratedPurificationImg from "@/assets/integrated-purification.png";
import preSeedBioreactorImg from "@/assets/pre-seed-bioreactor.png";
import seedBioreactor1000lImg from "@/assets/seed-bioreactor-1000l.png";
import productionBioreactor10000lImg from "@/assets/production-bioreactor-10000l.png";
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
    instruments: [
      { name: "Pre-Seed Bioreactor (100L) x2", image: preSeedBioreactorImg },
      { name: "Seed Bioreactor (1000L) x4", image: seedBioreactor1000lImg },
      { name: "Production Bioreactor (10000L) x5", image: productionBioreactor10000lImg },
      { name: "Continuous Centrifuge", image: centrifugeImg },
      { name: "Downstream Purification", image: downstreamPurificationImg },
      { name: "Preparative Chromatography", image: prepChromatographyImg },
      { name: "Bulk Lyophilisation", image: bulkLyophilisationImg },
    ],
    details: [],
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
    image: facility3Img,
    instruments: [
      { name: "Sequence & Construct Engineering", image: sequenceEngImg },
      { name: "Multi-Host Expression Platforms", image: multiHostImg },
      { name: "Strain / Clone Development", image: strainCloneImg },
      { name: "Cell Banking & Stability Systems", image: cellBankingImg },
      { name: "Media & Seed Train Optimization", image: mediaSeedTrainImg },
      { name: "Scalable Fermentation Development", image: scalableFermentationImg },
      { name: "Soluble + Inclusion Body Recovery", image: inclusionBodyImg },
      { name: "Integrated Purification Platform", image: integratedPurificationImg },
    ],
    details: [],
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
const CARD_HEIGHT = 500;

interface StickyCardProps {
  card: typeof cards[number];
  index: number;
  isLast: boolean;
}

const StickyCard = ({ card, index, isLast }: StickyCardProps) => {
  // Ref on the scroll spacer (the tall non-sticky wrapper), not the sticky element
  const spacerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: spacerRef,
    offset: ["start start", "end start"],
  });

  const shouldAnimate = !isLast;
  const stickyTop = 72 + index * CARD_HEADER_HEIGHT;

  // Animation: heading moves from its title position (y=52) up into eyebrow slot (y=0)
  // Triggers in the second half of scroll progress when the next card is overlapping
  const headingY = useTransform(scrollYProgress, [0.4, 0.75], [52, 0]);
  const headingScale = useTransform(scrollYProgress, [0.4, 0.75], [1, 0.34]);
  const eyebrowFade = useTransform(scrollYProgress, [0.4, 0.6], [1, 0]);

  const eyebrowStyle: React.CSSProperties = {
    ...TYPE.label,
    fontSize: "11px",
    letterSpacing: "0.25em",
    color: card.accentColor,
  };

  const titleStyle: React.CSSProperties = {
    ...TYPE.h2,
    fontSize: "clamp(26px, 3vw, 40px)",
    letterSpacing: "0.02em",
    color: card.textColor,
  };

  const cardBgStyle: React.CSSProperties = {
    background: card.bg,
    backdropFilter: `blur(${card.blur}px)`,
    WebkitBackdropFilter: `blur(${card.blur}px)`,
    border: "none",
    boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
    height: `${CARD_HEIGHT}px`,
  };

  return (
    // Layer 1: Scroll spacer — tall div that gives scroll room for the sticky effect
    <div
      ref={spacerRef}
      style={{
        height: isLast ? `${CARD_HEIGHT}px` : `${CARD_HEIGHT + 200}px`,
      }}
    >
      {/* Layer 2: Sticky shell — only handles position:sticky and z-index */}
      <div
        className="sticky"
        style={{
          top: `${stickyTop}px`,
          zIndex: cards.length - index,
        }}
      >
        {/* Layer 3: Card surface — rounded, clipped, contains all content */}
        <section
          className="luxury-card relative rounded-3xl"
          style={{ overflow: "hidden" }}
        >
          <div className="rounded-3xl" style={cardBgStyle}>
            {/* Header area with eyebrow + heading animation */}
            {shouldAnimate ? (
              // Animated header: eyebrow and heading share the same coordinate space
              <div
                className="relative px-8 md:px-12"
                style={{ height: "100px" }}
              >
                {/* Eyebrow — fades out as heading arrives */}
                <motion.span
                  style={{
                    ...eyebrowStyle,
                    position: "absolute",
                    left: 32,
                    top: 14,
                    opacity: eyebrowFade,
                  }}
                >
                  {card.tag}
                </motion.span>

                {/* Heading — starts at y=52 (title position), animates to y=0 (eyebrow position) */}
                <motion.h3
                  style={{
                    ...titleStyle,
                    position: "absolute",
                    left: 32,
                    top: 14,
                    margin: 0,
                    lineHeight: 1,
                    y: headingY,
                    scale: headingScale,
                    transformOrigin: "top left",
                  }}
                >
                  {card.title}
                </motion.h3>
              </div>
            ) : (
              // Static header for the last card (no animation needed)
              <>
                <div
                  className="flex items-center rounded-t-3xl px-8 md:px-12"
                  style={{
                    height: `${CARD_HEADER_HEIGHT}px`,
                    borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
                  }}
                >
                  <span style={eyebrowStyle}>{card.tag}</span>
                </div>
                <div className="px-8 md:px-12 pt-1 pb-3">
                  <h3 style={titleStyle}>{card.title}</h3>
                </div>
              </>
            )}

            {/* Instruments grid */}
            <div
              className="mx-auto"
              style={{
                maxWidth: "1200px",
                padding: shouldAnimate ? "8px 0 16px" : "0px 0 16px",
              }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-2.5 px-4 sm:px-8 md:px-12">
                {card.instruments.map((inst) => (
                  <div
                    key={inst.name}
                    className="rounded-xl px-4 py-3 flex items-center justify-center gap-4"
                    style={{
                      background: "rgba(255, 255, 255, 0.7)",
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(255, 255, 255, 0.5)",
                    }}
                  >
                    <img
                      src={inst.image}
                      alt={inst.name}
                      className="w-14 h-14 object-contain flex-shrink-0"
                      loading="lazy"
                      decoding="async"
                    />
                    <p style={{ ...TYPE.bodySm, fontSize: "13px", fontWeight: 600, color: "#0B1E33" }}>
                      {inst.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

const ResearchHighlight = () => {
  const { t } = useLanguage();

  return (
    <section className="relative" style={{ paddingTop: "96px", paddingBottom: "0px", background: "#FFFFFF" }}>
      {/* Subtle decorative element */}
      <div
        className="absolute top-0 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full opacity-[0.03] pointer-events-none"
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
              <h2 style={TYPE.h2} className="text-foreground whitespace-pre-line">
                {t.research.title}{" "}
                <em className="italic">{t.research.titleEm}</em>
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="md:text-right">
              <p
                style={{ ...TYPE.body, color: "hsl(var(--muted-foreground))" }}
                className="max-w-md md:ml-auto whitespace-pre-line"
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
          overflow: visible;
        }
        .luxury-card__clip {
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
      <div className="relative mx-4 sm:mx-6">
        {cards.map((card, index) => (
          <StickyCard
            key={card.title}
            card={card}
            index={index}
            isLast={index === cards.length - 1}
          />
        ))}
      </div>

      {/* Careers CTA Banner */}
      <ScrollReveal delay={0.1}>
        <div
          className="mx-6 mt-0 rounded-b-3xl overflow-hidden"
          style={{
            background: "#FFFFFF",
            padding: "clamp(40px, 5vw, 64px) clamp(32px, 4vw, 64px)",
          }}
        >
          <div className="grid md:grid-cols-[2fr_1fr] gap-8 items-end" style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div className="flex items-start gap-4">
              <div
                className="w-5 h-5 rounded-full flex-shrink-0 mt-3"
                style={{ background: "#001965" }}
              />
              <h3
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "clamp(28px, 4vw, 48px)",
                  fontWeight: 300,
                  color: "#001965",
                  lineHeight: 1.15,
                  letterSpacing: "-0.02em",
                }}
              >
                Science with us — we're looking for extra[not]ordinary® minds.
              </h3>
            </div>
            <div className="flex flex-col gap-4">
              <p
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "14px",
                  fontWeight: 400,
                  color: "rgba(0,25,101,0.7)",
                  lineHeight: 1.6,
                }}
              >
                Are you looking for a new challenge? Do you want to make a real difference in the world? We might just be the right match.
              </p>
              <a
                href="/partner"
                className="inline-flex items-center gap-2 group/careers"
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "#001965",
                  textDecoration: "underline",
                  textUnderlineOffset: "4px",
                }}
              >
                Visit Careers
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full border border-[#001965]/30 group-hover/careers:bg-[#001965]/10 transition-colors">
                   <ArrowRight size={12} />
                </span>
              </a>
            </div>
          </div>
        </div>
      </ScrollReveal>

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
