import { useNavigate } from "react-router-dom";
import { TYPE, SPACING } from "@/typography";

const pipelineRows = [
  { name: "Semaglutide", indication: "Type 2 Diabetes / Obesity", phase: 85, color: "#4ADE80", milestone: "Phase III — 2025", strategy: { label: "Biosimilar", bg: "rgba(74,222,128,0.15)", color: "#4ADE80" } },
  { name: "Liraglutide", indication: "Type 2 Diabetes / Obesity", phase: 70, color: "#60A5FA", milestone: "Phase II — 2025", strategy: { label: "Biosimilar", bg: "rgba(96,165,250,0.15)", color: "#60A5FA" } },
  { name: "Tirzepatide", indication: "Type 2 Diabetes / Obesity", phase: 45, color: "#F472B6", milestone: "Preclinical — 2026", strategy: { label: "Biosimilar", bg: "rgba(244,114,182,0.15)", color: "#F472B6" } },
  { name: "Dulaglutide", indication: "Type 2 Diabetes", phase: 60, color: "#FBBF24", milestone: "Phase I — 2025", strategy: { label: "Biosimilar", bg: "rgba(251,191,36,0.15)", color: "#FBBF24" } },
  { name: "Insulin Degludec", indication: "Diabetes (Basal Insulin)", phase: 35, color: "#A78BFA", milestone: "Preclinical — 2026", strategy: { label: "Biosimilar", bg: "rgba(167,139,250,0.15)", color: "#A78BFA" } },
];

const PipelinePreview = () => {
  const navigate = useNavigate();

  return (
    <section id="pipeline" style={{ position: "relative", overflow: "hidden", minHeight: "100vh", display: "flex", alignItems: "flex-end", background: "linear-gradient(145deg, #1a1a6e 0%, #2d1b8e 20%, #3d2aaa 35%, #4a35c0 50%, #3525a0 65%, #1f1575 80%, #0f0a4a 100%)" }}>
      <div style={{ position: "absolute", inset: 0, opacity: 0.18, backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`, backgroundRepeat: "repeat", backgroundSize: "128px 128px", pointerEvents: "none" as const, zIndex: 0 }} />
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 40% 20%, rgba(100,80,255,0.35) 0%, transparent 60%)", pointerEvents: "none" as const, zIndex: 0 }} />

      <div style={{ position: "relative", zIndex: 1, display: "flex", width: "100%", maxWidth: "1400px", margin: "0 auto", alignItems: "flex-end" }}>
        <div style={{ flex: "0 0 42%", padding: "0 48px 80px" }}>
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
          <div style={{ background: "#FFFFFF", border: "1px solid rgba(0,0,0,0.08)", borderBottom: "none", borderRadius: "16px 16px 0 0", padding: `${SPACING.cardPadding} ${SPACING.cardPadding}`, marginRight: "-1px", width: "calc(100% + 1px)" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1.4fr 2fr 0.8fr 0.8fr", gap: "12px", marginBottom: "8px" }}>
              {["Program", "Progress", "Milestone", "Strategy"].map((h) => (
                <span key={h} style={{ ...TYPE.label, color: "rgba(0,0,0,0.4)" }}>{h}</span>
              ))}
            </div>
            {pipelineRows.map((row, i) => (
              <div key={row.name} style={{ display: "grid", gridTemplateColumns: "1.4fr 2fr 0.8fr 0.8fr", gap: "12px", alignItems: "center", padding: "16px 0", borderTop: "1px solid rgba(0,0,0,0.08)" }}>
                <div>
                  <span style={{ ...TYPE.bodySm, fontWeight: 500, color: "#1A1A1A", display: "block" }}>{row.name}</span>
                  <span style={{ ...TYPE.meta, fontSize: "12px", color: "rgba(0,0,0,0.5)" }}>{row.indication}</span>
                </div>
                <div>
                  <div style={{ width: "100%", height: "6px", borderRadius: "3px", background: "rgba(0,0,0,0.08)", overflow: "hidden" }}>
                    <div style={{ width: `${row.phase}%`, height: "100%", borderRadius: "3px", background: row.color, transition: "width 0.6s ease" }} />
                  </div>
                </div>
                <span style={{ ...TYPE.meta, fontSize: "12px", color: "rgba(0,0,0,0.6)" }}>{row.milestone}</span>
                <span style={{ ...TYPE.label, fontSize: "11px", fontWeight: 500, background: row.strategy.bg, color: row.strategy.color, padding: "4px 10px", borderRadius: "100px", opacity: 0.9, textAlign: "center", whiteSpace: "nowrap" }}>{row.strategy.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PipelinePreview;
