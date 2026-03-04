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
        {/* Left — Image */}
        <div className="lg:w-1/2 min-h-[360px]">
          <img
            src={apiPlant}
            alt="AMOGEN API Plant 1 facility render"
            className="w-full h-full object-cover object-center"
            style={{ display: "block" }}
            loading="lazy"
          />
        </div>

        {/* Right — Content */}
        <div
          className="lg:w-1/2 flex flex-col justify-center"
          style={{ backgroundColor: "#F7F6F5", padding: "60px" }}
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
                marginBottom: "16px",
              }}
            >
              Manufacturing Capabilities
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <h2
              style={{
                fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif",
                fontSize: "clamp(28px, 4vw, 52px)",
                fontWeight: 600,
                lineHeight: 1.1,
                letterSpacing: "-0.025em",
                color: "#001965",
                marginBottom: "40px",
              }}
            >
              At a Glance
            </h2>
          </ScrollReveal>

          {/* Icon Grid — 2 columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: "20px", marginBottom: "40px" }}>
            {capabilities.map((cap, i) => (
              <ScrollReveal key={cap.label} delay={0.08 + i * 0.04}>
                <div className="flex items-center gap-3">
                  <cap.icon size={20} strokeWidth={1.5} style={{ color: "#001965", flexShrink: 0 }} />
                  <span
                    style={{
                      fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif",
                      fontSize: "14px",
                      fontWeight: 400,
                      lineHeight: 1.5,
                      color: "#333333",
                    }}
                  >
                    {cap.label}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Divider */}
          <div style={{ height: "1px", backgroundColor: "#2A918B", marginBottom: "32px" }} />

          {/* CTA */}
          <ScrollReveal delay={0.5}>
            <Link
              to="/cdmo"
              className="inline-flex items-center gap-2 rounded-full border transition-colors hover:bg-[#001965] hover:text-white"
              style={{
                borderColor: "#001965",
                color: "#001965",
                padding: "12px 28px",
                fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif",
                fontSize: "15px",
                fontWeight: 500,
                width: "fit-content",
              }}
            >
              Explore Our Manufacturing Platform
              <ArrowRight size={16} />
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ManufacturingGlance;
