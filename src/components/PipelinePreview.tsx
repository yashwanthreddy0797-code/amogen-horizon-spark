import { useNavigate } from "react-router-dom";

const pipelineRows = [
  {
    name: "Semaglutide",
    indication: "T2DM, Obesity",
    subIndication: "NASH, ASCVD, CKD slow Progression, PCOS (Off-Label)",
    phase: 85,
    gradient: "linear-gradient(90deg, #F472B6, #D946EF)",
    color: "#D946EF",
    milestone: "Clinical Phase -1 (Dec-2025)",
    strategy: { label: "FDF + Licensing", bg: "rgba(217,70,239,0.15)", color: "#D946EF" },
  },
  {
    name: "Liraglutide",
    indication: "T2DM & Obesity",
    phase: 65,
    gradient: "linear-gradient(90deg, #FB923C, #F97316)",
    color: "#F97316",
    milestone: "DMF (Dec-2025)",
    strategy: { label: "API + FDF", bg: "rgba(249,115,22,0.15)", color: "#F97316" },
  },
  {
    name: "Tirzepatide",
    indication: "T2DM & Obesity",
    phase: 45,
    gradient: "linear-gradient(90deg, #22D3EE, #06B6D4)",
    color: "#06B6D4",
    milestone: "DMF (Q2-2026)",
    strategy: { label: "API only", bg: "rgba(6,182,212,0.15)", color: "#06B6D4" },
  },
  {
    name: "Dulaglutide",
    indication: "T2DM",
    phase: 55,
    gradient: "linear-gradient(90deg, #60A5FA, #3B82F6)",
    color: "#3B82F6",
    milestone: "DMF (Q1-2026)",
    strategy: { label: "FDF + Licensing", bg: "rgba(59,130,246,0.15)", color: "#3B82F6" },
  },
  {
    name: "Insulin Degludec",
    indication: "Type 1 & 2 Diabetes",
    phase: 50,
    gradient: "linear-gradient(90deg, #A78BFA, #8B5CF6)",
    color: "#8B5CF6",
    milestone: "DMF (Jan-2026)",
    strategy: { label: "API + FDF", bg: "rgba(139,92,246,0.15)", color: "#8B5CF6" },
  },
  {
    name: "iDegLira",
    indication: "T2DM",
    phase: 50,
    gradient: "linear-gradient(90deg, #F472B6, #A78BFA)",
    color: "#C084FC",
    milestone: "Clinical Phase -1 (Q2-2026)",
    strategy: { label: "FDF + Licensing", bg: "rgba(192,132,252,0.15)", color: "#C084FC" },
  },
];

const headers = ["Program", "Indication", "Development", "Characterisation", "Pre-Clinical", "Key Milestone", "Strategy"];

const PipelinePreview = () => {
  const navigate = useNavigate();

  return (
    <section
      id="pipeline"
      style={{
        position: "relative",
        overflow: "hidden",
        minHeight: "100vh",
        display: "flex",
        alignItems: "flex-end",
        background:
          "linear-gradient(145deg, #1a1a6e 0%, #2d1b8e 20%, #3d2aaa 35%, #4a35c0 50%, #3525a0 65%, #1f1575 80%, #0f0a4a 100%)",
      }}
    >
      {/* Grain noise overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.18,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
          pointerEvents: "none" as const,
          zIndex: 0,
        }}
      />

      {/* Radial light bloom */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at 40% 20%, rgba(100,80,255,0.35) 0%, transparent 60%)",
          pointerEvents: "none" as const,
          zIndex: 0,
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          width: "100%",
          minHeight: "100vh",
          alignItems: "flex-end",
        }}
      >
        {/* LEFT COLUMN */}
        <div
          style={{
            flex: "0 0 42%",
            padding: "0 48px 80px",
            alignSelf: "flex-end",
          }}
        >
          <p
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "11px",
              letterSpacing: "0.14em",
              color: "rgba(255,255,255,0.5)",
              marginBottom: "20px",
              textTransform: "uppercase",
            }}
          >
            Pipeline
          </p>

          <h2
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 300,
              fontSize: "clamp(48px, 6vw, 80px)",
              letterSpacing: "-0.03em",
              lineHeight: 1.0,
              color: "#FFFFFF",
              marginBottom: "24px",
            }}
          >
            Our Biosimilar
            <br />
            Pipeline.
          </h2>

          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "16px",
              fontWeight: 300,
              color: "rgba(255,255,255,0.6)",
              lineHeight: 1.65,
              maxWidth: "380px",
              marginBottom: "40px",
            }}
          >
            Focused on high-barrier biosimilars where our fermentation and
            chemical ligation platform delivers a structural cost and quality
            advantage.
          </p>

          <button
            onClick={() => navigate("/products")}
            style={{
              background: "#FFFFFF",
              color: "#1A1A1A",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "15px",
              fontWeight: 500,
              padding: "14px 28px",
              borderRadius: "100px",
              border: "none",
              cursor: "pointer",
            }}
          >
            View Full Pipeline →
          </button>
        </div>

        {/* RIGHT COLUMN — starts at ~50% and bleeds to right edge */}
        <div
          style={{
            position: "absolute",
            left: "46%",
            right: 0,
            bottom: 0,
            top: "auto",
          }}
        >
          <div
            style={{
              background: "rgba(10, 12, 16, 0.72)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderBottom: "none",
              borderRight: "none",
              borderRadius: "16px 0 0 0",
              padding: "24px 28px",
              overflowX: "auto",
            }}
          >
            {/* Table header */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1.2fr 1fr 1.8fr 0.6fr 0.6fr 1.2fr 1fr",
                gap: "12px",
                marginBottom: "8px",
                minWidth: "700px",
              }}
            >
              {headers.map((h) => (
                <span
                  key={h}
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "10px",
                    color: "rgba(255,255,255,0.4)",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                  }}
                >
                  {h}
                </span>
              ))}
            </div>

            {/* Rows */}
            {pipelineRows.map((row, i) => (
              <div
                key={row.name}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1.2fr 1fr 1.8fr 0.6fr 0.6fr 1.2fr 1fr",
                  gap: "12px",
                  alignItems: "center",
                  padding: "14px 0",
                  borderTop: "1px solid rgba(255,255,255,0.06)",
                  minWidth: "700px",
                }}
              >
                {/* Program */}
                <div>
                  <span
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "13px",
                      fontWeight: 500,
                      color: "#FFFFFF",
                      display: "block",
                    }}
                  >
                    {row.name}
                  </span>
                </div>

                {/* Indication */}
                <div>
                  <span
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "12px",
                      color: "rgba(255,255,255,0.6)",
                      display: "block",
                    }}
                  >
                    {row.indication}
                  </span>
                  {row.subIndication && (
                    <span
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "10px",
                        color: "rgba(255,255,255,0.35)",
                        display: "block",
                        marginTop: "2px",
                        lineHeight: 1.3,
                      }}
                    >
                      {row.subIndication}
                    </span>
                  )}
                </div>

                {/* Development progress bar — spans Development + Characterisation + Pre-Clinical visually */}
                <div style={{ gridColumn: "3 / 6" }}>
                  <div
                    style={{
                      width: "100%",
                      height: "6px",
                      borderRadius: "3px",
                      background: "rgba(255,255,255,0.08)",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        width: `${row.phase}%`,
                        height: "100%",
                        borderRadius: "3px",
                        background: row.gradient,
                        transition: "width 0.6s ease",
                      }}
                    />
                  </div>
                </div>

                {/* Key Milestone */}
                <span
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "11px",
                    color: "rgba(255,255,255,0.7)",
                    whiteSpace: "nowrap",
                  }}
                >
                  {row.milestone}
                </span>

                {/* Strategy pill */}
                <span
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "10px",
                    fontWeight: 500,
                    background: row.strategy.bg,
                    color: row.strategy.color,
                    padding: "4px 10px",
                    borderRadius: "100px",
                    opacity: 0.9,
                    textAlign: "center",
                    whiteSpace: "nowrap",
                  }}
                >
                  {row.strategy.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PipelinePreview;
