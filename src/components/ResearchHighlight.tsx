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
    tag: "API Manufacturing",
    image: facility1Img,
    details: [
      "Microbial Fermentors",
      "Continuous Centrifuge",
      "Downstream Purification",
      "Preparative Chromatography",
      "Bulk Lyophilisation",
    ],
    bg: "hsl(var(--secondary))",
  },
  {
    title: "R&D Capabilities",
    tag: "Research & Development",
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
    bg: "hsl(227, 100%, 20%)",
  },
  {
    title: "Analytical Capabilities",
    tag: "Analytical",
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
    bg: "hsl(var(--secondary))",
  },
];

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
      <div className="relative">
        {cards.map((card, index) => {
          const isDark = index === 1; // Middle card is dark

          return (
            <div
              key={card.title}
              className="sticky"
              style={{
                top: `${80 + index * 8}px`,
                zIndex: index + 1,
              }}
            >
              <section
                className="rounded-t-3xl shadow-[0_-8px_30px_-12px_rgba(0,0,0,0.15)] transition-shadow"
                style={{
                  background: card.bg,
                  minHeight: "480px",
                }}
              >
                <div
                  className="mx-auto grid md:grid-cols-2 gap-0"
                  style={{ maxWidth: "1200px" }}
                >
                  {/* Left: Text content */}
                  <div className="flex flex-col justify-center p-10 md:p-16">
                    <span
                      className="inline-block px-3 py-1.5 rounded-full mb-6 w-fit"
                      style={{
                        ...TYPE.label,
                        fontSize: "10px",
                        background: isDark ? "hsla(0, 0%, 100%, 0.12)" : "hsla(227, 100%, 20%, 0.08)",
                        color: isDark ? "hsla(0, 0%, 100%, 0.8)" : "hsl(var(--foreground))",
                      }}
                    >
                      {card.tag}
                    </span>

                    <h3
                      style={{ ...TYPE.h2, fontSize: "clamp(26px, 3.5vw, 40px)" }}
                      className={isDark ? "text-white" : "text-foreground"}
                    >
                      {card.title}
                    </h3>

                    <div className="mt-8 flex flex-col gap-3">
                      {card.details.map((detail, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-3"
                        >
                          <div
                            className="w-1.5 h-1.5 rounded-full shrink-0"
                            style={{
                              background: isDark ? "hsla(0, 0%, 100%, 0.5)" : "hsl(var(--primary))",
                            }}
                          />
                          <p
                            style={{ ...TYPE.bodySm, fontSize: "14px" }}
                            className={isDark ? "text-white/80" : "text-muted-foreground"}
                          >
                            {detail}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right: Image */}
                  <div className="relative overflow-hidden rounded-tr-3xl min-h-[300px] md:min-h-[480px]">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
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
