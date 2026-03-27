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

const facilities = [
  { name: "API Plant 1", capacity: "77 KL" },
  { name: "API Plant 2", capacity: "45 KL" },
  { name: "Formulation Facility", capacity: "30 KL" },
];

const ManufacturingGlance = () => {
  return (
    <section
      className="w-full"
      style={{
        background: "linear-gradient(180deg, #F7F6F5 0%, #EFEEE9 100%)",
        paddingTop: SPACING.sectionPy.desktop,
        paddingBottom: SPACING.sectionPy.desktop,
      }}
    >
      <div
        className="mx-auto"
        style={{
          maxWidth: SPACING.maxWidth,
          paddingLeft: SPACING.sectionPx,
          paddingRight: SPACING.sectionPx,
        }}
      >
        {/* Top Row — Hero Stat + Facility Image */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 mb-20">
          {/* Left — Big stat & facility breakdown */}
          <div className="lg:w-1/2">
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
              <p
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "clamp(14px, 1.5vw, 16px)",
                  fontWeight: 400,
                  color: "#001965",
                  marginBottom: "8px",
                  letterSpacing: "0.02em",
                }}
              >
                Total capacity
              </p>
              <h2
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "clamp(64px, 10vw, 120px)",
                  fontWeight: 300,
                  lineHeight: 1,
                  letterSpacing: "-0.04em",
                  color: "#001965",
                  marginBottom: "40px",
                }}
              >
                152 <span style={{ fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 300 }}>kL</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="flex items-end gap-4 flex-wrap">
                {facilities.map((f, i) => (
                  <div key={f.name} className="flex items-end gap-4">
                    {i > 0 && (
                      <span
                        style={{
                          fontFamily: "'Outfit', sans-serif",
                          fontSize: "clamp(28px, 4vw, 40px)",
                          fontWeight: 200,
                          color: "#001965",
                          opacity: 0.3,
                          lineHeight: 1,
                        }}
                      >
                        +
                      </span>
                    )}
                    <div>
                      <p
                        style={{
                          fontFamily: "'Outfit', sans-serif",
                          fontSize: "13px",
                          fontWeight: 400,
                          color: "hsl(var(--muted-foreground))",
                          marginBottom: "4px",
                        }}
                      >
                        {f.name}
                      </p>
                      <p
                        style={{
                          fontFamily: "'Outfit', sans-serif",
                          fontSize: "clamp(28px, 4vw, 44px)",
                          fontWeight: 300,
                          lineHeight: 1,
                          letterSpacing: "-0.03em",
                          color: "#001965",
                        }}
                      >
                        {f.capacity}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Right — Facility Image */}
          <div className="lg:w-1/2">
            <ScrollReveal delay={0.15}>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={apiPlant}
                  alt="AMOGEN API Plant 1 facility render"
                  className="w-full h-auto object-cover object-center"
                  style={{ display: "block", minHeight: "280px", maxHeight: "400px" }}
                  loading="lazy"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, #001965 20%, #001965 80%, transparent)", opacity: 0.08, marginBottom: "56px" }} />

        {/* Bottom — Capability Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4" style={{ gap: "40px 32px", marginBottom: "56px" }}>
          {capabilities.map((cap, i) => (
            <ScrollReveal key={cap.label} delay={0.12 + i * 0.04}>
              <div className="flex flex-col items-center text-center gap-3">
                <div
                  className="flex items-center justify-center rounded-xl"
                  style={{
                    width: "56px",
                    height: "56px",
                    backgroundColor: "rgba(0, 25, 101, 0.06)",
                  }}
                >
                  <cap.icon size={26} strokeWidth={1.3} style={{ color: "#001965" }} />
                </div>
                <div>
                  <p
                    style={{
                      ...TYPE.bodySm,
                      fontWeight: 600,
                      color: "#001965",
                      lineHeight: 1.3,
                    }}
                  >
                    {cap.label}
                  </p>
                  {cap.detail && (
                    <p
                      style={{
                        ...TYPE.bodySm,
                        fontSize: "12px",
                        fontWeight: 400,
                        color: "hsl(var(--muted-foreground))",
                        marginTop: "2px",
                      }}
                    >
                      {cap.detail}
                    </p>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal delay={0.5}>
          <div className="flex justify-center">
            <Link
              to="/cdmo"
              className="inline-flex items-center gap-3 transition-all hover:opacity-80 hover:scale-[1.02]"
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
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ManufacturingGlance;
