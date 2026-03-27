import ScrollReveal from "@/components/ScrollReveal";
import { Link } from "react-router-dom";
import { ArrowRight, Beaker, Filter, BarChart3, Snowflake, FlaskConical, Fingerprint, ThermometerSun, Microscope } from "lucide-react";
import apiPlant from "@/assets/api-plant1-render.png";
import { TYPE, SPACING } from "@/typography";

const capabilities = [
  { icon: Beaker, label: "Fermentation", detail: "5×15KL + 2×1KL" },
  { icon: Filter, label: "Downstream Purification" },
  { icon: BarChart3, label: "Preparative Chromatography" },
  { icon: Snowflake, label: "Bulk Lyophilisation" },
  { icon: FlaskConical, label: "Analytical Characterisation" },
  { icon: Fingerprint, label: "Peptide Mapping" },
  { icon: ThermometerSun, label: "ICH Stability Testing" },
  { icon: Microscope, label: "Cell-based Bioassay" },
];

const ManufacturingGlance = () => {
  return (
    <section className="w-full relative overflow-hidden" style={{ minHeight: "520px", borderRadius: "24px", margin: "0 16px", width: "calc(100% - 32px)" }}>
      {/* Full-width background image */}
      <img
        src={apiPlant}
        alt="AMOGEN API Plant 1 facility render"
        className="absolute inset-0 w-full h-full object-cover object-center"
        loading="lazy"
      />

      {/* Right fade gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(270deg, #F7F6F5 0%, #F7F6F5 25%, rgba(247,246,245,0.95) 35%, rgba(247,246,245,0.6) 45%, rgba(247,246,245,0.15) 58%, transparent 68%)",
        }}
      />

      {/* Content overlay — right aligned */}
      <div
        className="relative z-10 flex items-center justify-end"
        style={{
          paddingLeft: "48px",
          paddingRight: "clamp(32px, 5vw, 80px)",
          paddingTop: SPACING.sectionPy.desktop,
          paddingBottom: SPACING.sectionPy.desktop,
          minHeight: "520px",
        }}
      >
        <div style={{ maxWidth: "440px", marginLeft: "auto" }}>
          <ScrollReveal>
            <p
              style={{
                ...TYPE.label,
                color: "#2A918B",
                marginBottom: "16px",
              }}
            >
              Manufacturing Capabilities
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <h2
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "clamp(28px, 4vw, 44px)",
                fontWeight: 300,
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                color: "#001965",
                marginBottom: "40px",
              }}
            >
              At a Glance
            </h2>
          </ScrollReveal>

          {/* Capabilities list with icons */}
          <div className="flex flex-col" style={{ gap: "14px", marginBottom: "48px" }}>
            {capabilities.map((cap, i) => (
              <ScrollReveal key={cap.label} delay={0.08 + i * 0.03}>
                <div className="flex items-center gap-3">
                  <cap.icon size={20} strokeWidth={1.4} style={{ color: "#001965", flexShrink: 0 }} />
                  <div className="flex items-baseline gap-2">
                    <span
                      style={{
                        ...TYPE.body,
                        fontWeight: 500,
                        color: "#001965",
                      }}
                    >
                      {cap.label}
                    </span>
                    {cap.detail && (
                      <span
                        style={{
                          ...TYPE.bodySm,
                          fontSize: "13px",
                          fontWeight: 400,
                          color: "hsl(var(--muted-foreground))",
                        }}
                      >
                        {cap.detail}
                      </span>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* CTA */}
          <ScrollReveal delay={0.4}>
            <Link
              to="/cdmo"
              className="inline-flex items-center gap-3 transition-all hover:opacity-80"
              style={{
                backgroundColor: "#001965",
                color: "#ffffff",
                borderRadius: "999px",
                padding: "14px 32px 14px 16px",
                ...TYPE.button,
                width: "fit-content",
              }}
            >
              <span
                className="flex items-center justify-center rounded-full"
                style={{
                  width: "36px",
                  height: "36px",
                  backgroundColor: "rgba(255,255,255,0.15)",
                }}
              >
                <ArrowRight size={16} />
              </span>
              Explore Our Manufacturing Platform
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ManufacturingGlance;
