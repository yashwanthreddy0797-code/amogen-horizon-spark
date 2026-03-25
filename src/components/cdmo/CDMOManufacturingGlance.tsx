import ScrollReveal from "@/components/ScrollReveal";
import { Beaker, Filter, BarChart3, Snowflake, FlaskConical, Fingerprint, ThermometerSun, Microscope } from "lucide-react";
import apiPlant from "@/assets/api-plant1-render.png";
import { TYPE, SPACING } from "@/typography";

const capabilities = [
  { icon: Beaker, label: "Fermentation", detail: "5×15KL + 2×1KL capacity" },
  { icon: Filter, label: "Downstream Purification", detail: "Multi-step chromatographic workflows" },
  { icon: BarChart3, label: "Preparative Chromatography", detail: "Large-scale column purification" },
  { icon: Snowflake, label: "Bulk Lyophilisation", detail: "Freeze-drying at commercial scale" },
  { icon: FlaskConical, label: "Analytical Characterisation", detail: "Full physicochemical profiling" },
  { icon: Fingerprint, label: "Peptide Mapping", detail: "LC-MS based sequence confirmation" },
  { icon: ThermometerSun, label: "ICH Stability Testing", detail: "Long-term & accelerated programs" },
  { icon: Microscope, label: "Cell-based Bioassay", detail: "Potency & functional assay suites" },
];

const CDMOManufacturingGlance = () => {
  return (
    <section style={{ backgroundColor: "#F0EFED" }}>
      <div
        className="mx-auto"
        style={{
          maxWidth: SPACING.maxWidth,
          paddingLeft: SPACING.sectionPx,
          paddingRight: SPACING.sectionPx,
          paddingTop: SPACING.sectionPy.desktop,
          paddingBottom: SPACING.sectionPy.desktop,
        }}
      >

        {/* Image banner — wide with rounded corners */}
        <ScrollReveal delay={0.1}>
          <div
            className="w-full overflow-hidden rounded-2xl shadow-lg mb-14"
            style={{ maxHeight: "380px" }}
          >
            <img
              src={apiPlant}
              alt="AMOGEN API Plant 1 facility render"
              className="w-full h-full object-cover object-center"
              style={{ display: "block", minHeight: "280px" }}
              loading="lazy"
            />
          </div>
        </ScrollReveal>

        {/* Capabilities — 2×4 card grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4" style={{ gap: "32px 48px" }}>
          {capabilities.map((cap, i) => (
            <ScrollReveal key={cap.label} delay={0.12 + i * 0.06}>
              <div className="flex flex-col items-center text-center gap-3">
                <cap.icon size={30} strokeWidth={1.3} style={{ color: "#001965" }} />
                <div>
                  <p
                    style={{
                      fontFamily: TYPE.bodySm.fontFamily,
                      fontSize: "14px",
                      fontWeight: 600,
                      lineHeight: 1.3,
                      color: "#001965",
                    }}
                  >
                    {cap.label}
                  </p>
                  <p
                    style={{
                      fontFamily: TYPE.bodySm.fontFamily,
                      fontSize: "12px",
                      fontWeight: 400,
                      lineHeight: 1.4,
                      color: "hsl(var(--muted-foreground))",
                      marginTop: "4px",
                    }}
                  >
                    {cap.detail}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CDMOManufacturingGlance;
