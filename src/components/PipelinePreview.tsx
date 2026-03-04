import { useNavigate } from "react-router-dom";
import { TYPE, SPACING } from "@/typography";

const pipelineRows = [
  {
    name: "Semaglutide",
    indication: "T2DM, Obesity",
    note: "Other indications in trials: NASH, ASCVD, CKD slow Progression, PCOS (Off-Label)",
    progress: 95,
    gradient: "linear-gradient(90deg, #EF4444 0%, #A855F7 100%)",
    milestone: "Clinical Phase -1",
    milestoneDate: "Dec-2025",
    strategy: "FDF + Licensing",
    accent: "#F97316",
  },
  {
    name: "Liraglutide",
    indication: "T2DM & Obesity",
    progress: 75,
    gradient: "linear-gradient(90deg, #F97316 0%, #EAB308 100%)",
    milestone: "DMF",
    milestoneDate: "Dec-2025",
    strategy: "API + FDF",
    accent: "#F97316",
  },
  {
    name: "Tirzepatide",
    indication: "T2DM & Obesity",
    progress: 55,
    gradient: "linear-gradient(90deg, #06B6D4 0%, #3B82F6 100%)",
    milestone: "DMF",
    milestoneDate: "Q2-2026",
    strategy: "API only",
    accent: "#3B82F6",
  },
  {
    name: "Dulaglutide",
    indication: "T2DM",
    progress: 45,
    gradient: "linear-gradient(90deg, #1E3A5F 0%, #3B82F6 100%)",
    milestone: "DMF",
    milestoneDate: "Q1-2026",
    strategy: "FDF + Licensing",
    accent: "#3B82F6",
  },
  {
    name: "Insulin\nDegludec",
    indication: "Type 1 & 2 Diabetes",
    progress: 50,
    gradient: "linear-gradient(90deg, #4C1D95 0%, #7C3AED 100%)",
    milestone: "DMF",
    milestoneDate: "Jan-2026",
    strategy: "API + FDF",
    accent: "#EC4899",
  },
  {
    name: "iDegLira",
    indication: "T2DM",
    progress: 50,
    gradient: "linear-gradient(90deg, #1E3A5F 0%, #3B82F6 100%)",
    milestone: "Clinical Phase -1",
    milestoneDate: "Q2-2026",
    strategy: "FDF + Licensing",
    accent: "#3B82F6",
  },
];

const phaseHeaders = ["Development", "Characterisation", "Pre-Clinical"];

const PipelinePreview = () => {
  const navigate = useNavigate();

  return (
    <section id="pipeline" style={{ position: "relative", overflow: "hidden", minHeight: "100vh", display: "flex", alignItems: "flex-end", background: "linear-gradient(145deg, #1a1a6e 0%, #2d1b8e 20%, #3d2aaa 35%, #4a35c0 50%, #3525a0 65%, #1f1575 80%, #0f0a4a 100%)" }}>
      <div style={{ position: "absolute", inset: 0, opacity: 0.18, backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`, backgroundRepeat: "repeat", backgroundSize: "128px 128px", pointerEvents: "none" as const, zIndex: 0 }} />
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 40% 20%, rgba(100,80,255,0.35) 0%, transparent 60%)", pointerEvents: "none" as const, zIndex: 0 }} />

      <div style={{ position: "relative", zIndex: 1, display: "flex", width: "100%", maxWidth: "1400px", margin: "0 auto", alignItems: "flex-end" }}>
        <div style={{ flex: "0 0 32%", padding: "0 48px 80px" }}>
          <p style={{ ...TYPE.label, color: "rgba(255,255,255,0.5)", marginBottom: SPACING.labelToH2 }}>Pipeline</p>
          <h2 style={{ ...TYPE.h1, color: "#FFFFFF", marginBottom: SPACING.headingToSub }}>Our Biosimilar<br />Pipeline.</h2>
          <p style={{ ...TYPE.body, color: "rgba(255,255,255,0.6)", marginBottom: SPACING.subToCta }} className="max-w-[380px]">
            Focused on high-barrier biosimilars where our fermentation and chemical ligation platform delivers a structural cost and quality advantage.
          </p>
          <button onClick={() => navigate("/products")} style={{ ...TYPE.button, background: "#FFFFFF", color: "#1A1A1A", padding: "14px 28px", borderRadius: "100px", border: "none", cursor: "pointer" }}>
            View Full Pipeline →
          </button>
        </div>

        <div style={{ flex: 1, padding: "48px 0 0", alignSelf: "flex-end" }}>
          <div style={{ background: "#FFFFFF", border: "1px solid rgba(0,0,0,0.08)", borderBottom: "none", borderRadius: "16px 16px 0 0", padding: "28px 32px", marginRight: "-1px", width: "calc(100% + 1px)" }}>
            {/* Header row */}
            <div style={{ display: "grid", gridTemplateColumns: "180px 1fr 140px", gap: "16px", alignItems: "end", marginBottom: "8px", paddingBottom: "12px", borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
              <span style={{ ...TYPE.label, color: "rgba(0,0,0,0.4)", fontSize: "11px" }}>Program</span>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "0", position: "relative" }}>
                {phaseHeaders.map((h, i) => (
                  <span key={h} style={{ ...TYPE.label, color: "rgba(0,0,0,0.4)", fontSize: "10px", textAlign: "center" }}>{h}</span>
                ))}
              </div>
              <span style={{ ...TYPE.label, color: "rgba(0,0,0,0.4)", fontSize: "11px" }}>Key Milestone</span>
            </div>

            {/* Data rows */}
            {pipelineRows.map((row) => (
              <div key={row.name} style={{ display: "grid", gridTemplateColumns: "180px 1fr 140px", gap: "16px", alignItems: "center", padding: "18px 0", borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
                {/* Program + Indication */}
                <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                  <div style={{ width: "3px", borderRadius: "2px", background: row.accent, alignSelf: "stretch", minHeight: "32px", flexShrink: 0 }} />
                  <div>
                    <span style={{ ...TYPE.bodySm, fontWeight: 600, color: "#1A1A1A", display: "block", whiteSpace: "pre-line", lineHeight: 1.3 }}>{row.name}</span>
                    <span style={{ fontSize: "12px", color: "rgba(0,0,0,0.45)", fontStyle: "italic", display: "block", marginTop: "2px" }}>{row.indication}</span>
                    {row.note && (
                      <span style={{ fontSize: "10px", fontStyle: "italic", color: "rgba(0,0,0,0.35)", display: "block", marginTop: "3px", lineHeight: 1.4 }}>{row.note}</span>
                    )}
                  </div>
                </div>

                {/* Progress bar with breakpoints */}
                <div style={{ position: "relative" }}>
                  <div style={{ width: "100%", height: "10px", borderRadius: "5px", background: "rgba(0,0,0,0.06)", position: "relative", display: "flex" }}>
                    {/* Three segments with white gaps */}
                    {[0, 1, 2].map((seg) => {
                      const segStart = seg * 33.33;
                      const segEnd = (seg + 1) * 33.33;
                      const fillEnd = Math.min(row.progress, segEnd);
                      const fillWidth = Math.max(0, fillEnd - segStart);
                      const segWidth = 33.33;
                      const fillPercent = (fillWidth / segWidth) * 100;
                      return (
                        <div key={seg} style={{ flex: 1, height: "10px", background: "rgba(0,0,0,0.06)", overflow: "hidden", borderRadius: "5px", marginLeft: seg > 0 ? "2px" : "0" }}>
                          <div style={{ width: `${fillPercent}%`, height: "100%", background: row.gradient, backgroundSize: "300% 100%", backgroundPosition: seg === 0 ? "0% 0%" : seg === 1 ? "50% 0%" : "100% 0%", transition: "width 0.8s ease" }} />
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Key Milestone */}
                <div>
                  <span style={{ fontSize: "13px", fontWeight: 600, color: "#3B82F6", display: "block", lineHeight: 1.3 }}>{row.milestone}</span>
                  <span style={{ fontSize: "11px", color: "rgba(0,0,0,0.4)" }}>({row.milestoneDate})</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PipelinePreview;
