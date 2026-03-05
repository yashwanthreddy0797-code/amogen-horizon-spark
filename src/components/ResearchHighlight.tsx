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
    // Deep indigo blue — card 1
    bg: "hsl(232, 60%, 30%)",
    headerBg: "hsl(232, 60%, 25%)",
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
    // Lavender purple — card 2
    bg: "hsl(255, 60%, 78%)",
    headerBg: "hsl(255, 60%, 72%)",
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
    // Very light periwinkle — card 3
    bg: "hsl(235, 45%, 92%)",
    headerBg: "hsl(235, 45%, 88%)",
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

      {/* Stacked sticky scroll cards */}
      <div className="relative" style={{ marginLeft: "24px", marginRight: "24px" }}>
        {cards.map((card, index) => {
          const stickyTop = 72 + index * CARD_HEADER_HEIGHT;
          const isLast = index === cards.length - 1;

          return (
            <div
              key={card.title}
              style={{
                // Each wrapper provides scroll height so the next card slides over
                height: isLast ? "auto" : "620px",
              }}
            >
              <div
                className="sticky"
                style={{
                  top: `${stickyTop}px`,
                  zIndex: index + 1,
                }}
              >
                <section
                  className="rounded-t-3xl"
                  style={{
                    background: card.bg,
                    minHeight: "520px",
                    boxShadow: "0 -4px 40px -12px rgba(0,0,0,0.12)",
                  }}
                >
                  {/* Persistent header strip — always visible when stacked */}
                  <div
                    className="flex items-center rounded-t-3xl px-8 md:px-12"
                    style={{
                      height: `${CARD_HEADER_HEIGHT}px`,
                      background: card.headerBg,
                    }}
                  >
                    <span
                      style={{
                        ...TYPE.label,
                        fontSize: "11px",
                        color: card.dark ? "hsla(0, 0%, 100%, 0.7)" : "hsla(227, 100%, 20%, 0.6)",
                      }}
                    >
                      {card.tag}
                    </span>
                  </div>

                  {/* Card body: text + image */}
                  <div
                    className="mx-auto grid md:grid-cols-[1fr_0.8fr] gap-0 items-center"
                    style={{ maxWidth: "1200px" }}
                  >
                    {/* Left: Text content */}
                    <div className="flex flex-col justify-center p-8 md:px-12 md:py-12">
                      <h3
                        style={{ ...TYPE.h2, fontSize: "clamp(28px, 3.5vw, 44px)" }}
                        className={card.dark ? "text-white" : "text-foreground"}
                      >
                        {card.title}
                      </h3>

                      <div className="mt-8 flex flex-col gap-3">
                        {card.details.map((detail, i) => (
                          <div key={i} className="flex items-center gap-3">
                            <div
                              className="w-1.5 h-1.5 rounded-full shrink-0"
                              style={{
                                background: card.dark ? "hsla(0, 0%, 100%, 0.5)" : "hsl(var(--primary))",
                              }}
                            />
                            <p
                              style={{ ...TYPE.bodySm, fontSize: "14px" }}
                              className={card.dark ? "text-white/80" : "text-muted-foreground"}
                            >
                              {detail}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Right: Image — contained with padding */}
                    <div className="relative p-4 md:p-8 flex items-center justify-center">
                      <div className="relative overflow-hidden rounded-2xl w-full" style={{ maxHeight: "340px", aspectRatio: "4/3" }}>
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
