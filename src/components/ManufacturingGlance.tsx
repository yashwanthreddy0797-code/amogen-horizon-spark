import ScrollReveal from "@/components/ScrollReveal";
import { Link } from "react-router-dom";
import { ArrowRight, Beaker, Filter, BarChart3, Snowflake, FlaskConical, Fingerprint, ThermometerSun, Microscope } from "lucide-react";
import apiPlant from "@/assets/api-plant1-render.png";

const capabilities = [
  { icon: Beaker, label: "Fermentation — 5×15KL + 2×1KL" },
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
    <section className="w-full">
      <div className="flex flex-col lg:flex-row">
        {/* Left — Image Card */}
        <div className="lg:w-1/2 flex items-center justify-center" style={{ padding: "clamp(24px, 4vw, 56px)", backgroundColor: "#F7F6F5" }}>
          <div className="w-full h-full rounded-2xl overflow-hidden shadow-lg" style={{ minHeight: "360px" }}>
            <img
              src={apiPlant}
              alt="AMOGEN API Plant 1 facility render"
              className="w-full h-full object-cover object-center"
              style={{ display: "block" }}
              loading="lazy"
            />
          </div>
        </div>

        {/* Right — Content */}
        <div
          className="lg:w-1/2 flex flex-col justify-center"
          style={{ backgroundColor: "#F7F6F5", padding: "clamp(40px, 5vw, 80px)" }}
        >
          <ScrollReveal>
            <p
              style={{
                fontFamily: "'DM Mono', 'Courier New', monospace",
                fontSize: "11px",
                fontWeight: 400,
                lineHeight: 1.4,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#2A918B",
                marginBottom: "20px",
              }}
            >
              Manufacturing Capabilities
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <h2
              style={{
                fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif",
                fontSize: "clamp(32px, 4vw, 56px)",
                fontWeight: 600,
                lineHeight: 1.1,
                letterSpacing: "-0.025em",
                color: "#001965",
                marginBottom: "48px",
              }}
            >
              At a Glance
            </h2>
          </ScrollReveal>

          {/* Icon Grid — 2 columns, matching reference layout */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2"
            style={{ gap: "32px 48px", marginBottom: "48px" }}
          >
            {capabilities.map((cap, i) => (
              <ScrollReveal key={cap.label} delay={0.08 + i * 0.04}>
                <div className="flex items-center gap-4">
                  <div
                    className="flex items-center justify-center flex-shrink-0"
                    style={{ width: "36px", height: "36px" }}
                  >
                    <cap.icon
                      size={28}
                      strokeWidth={1.2}
                      style={{ color: "#001965" }}
                    />
                  </div>
                  <span
                    style={{
                      fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif",
                      fontSize: "15px",
                      fontWeight: 500,
                      lineHeight: 1.4,
                      color: "#1a1a1a",
                    }}
                  >
                    {cap.label}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Divider */}
          <div style={{ height: "1px", backgroundColor: "#2A918B", opacity: 0.4, marginBottom: "36px" }} />

          {/* CTA — dark pill button matching reference */}
          <ScrollReveal delay={0.5}>
            <Link
              to="/cdmo"
              className="inline-flex items-center gap-3 transition-opacity hover:opacity-80"
              style={{
                backgroundColor: "#001965",
                color: "#ffffff",
                borderRadius: "999px",
                padding: "14px 32px 14px 16px",
                fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif",
                fontSize: "15px",
                fontWeight: 500,
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
