import { useNavigate } from "react-router-dom";

const pipelineRows = [
  { name: "Semaglutide Biosimilar", indication: "GLP-1 · T2DM, Obesity", bars: [80, 50, 20, 5], dimmed: false },
  { name: "Liraglutide Biosimilar", indication: "GLP-1 · T2DM, CVD", bars: [70, 40, 10, 0], dimmed: false },
  { name: "Insulin Glargine", indication: "Long-acting Insulin Analogue", bars: [90, 60, 30, 10], dimmed: false },
  { name: "Insulin Aspart", indication: "Rapid-acting Insulin Analogue", bars: [85, 55, 25, 5], dimmed: false },
  { name: "Undisclosed Immunology", indication: "Details available under NDA", bars: [40, 10, 0, 0], dimmed: true },
];

const columns = ["TECH DEV", "MFG SCALE-UP", "PRE-CLINICAL", "REGULATORY"];

const PipelinePreview = () => {
  const navigate = useNavigate();

  return (
    <section
      id="pipeline"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: "radial-gradient(ellipse at 40% 50%, #050D1F 0%, #020509 100%)",
      }}
    >
      {/* Noise overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
      />

      <div className="relative z-[2] w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-16 lg:py-0">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12 gap-12">
          {/* LEFT ZONE */}
          <div className="lg:w-[40%] flex flex-col justify-end">
            <span
              className="text-[11px] uppercase tracking-[0.12em] font-medium"
              style={{ color: "#8A93B2", fontFamily: "'DM Sans', sans-serif" }}
            >
              Pipeline
            </span>

            <h2
              className="mt-4 text-4xl md:text-5xl lg:text-[56px] font-bold text-white leading-[1.05] max-w-[420px]"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Our Biosimilar
              <br />
              Pipeline.
            </h2>

            <p
              className="mt-5 text-[17px] font-light leading-relaxed max-w-[380px]"
              style={{ color: "#8A93B2", fontFamily: "'DM Sans', sans-serif" }}
            >
              Focused on high-barrier biosimilars where our fermentation and chemical
              ligation platform delivers a structural cost and quality advantage.
            </p>

            <button
              onClick={() => navigate("/products")}
              className="mt-8 self-start px-7 py-3 bg-white text-[#050D1F] text-sm font-semibold rounded-full hover:bg-white/90 transition-colors cursor-pointer"
            >
              View Full Pipeline →
            </button>
          </div>

          {/* RIGHT ZONE */}
          <div className="lg:w-[60%] flex justify-center lg:justify-end">
            <div
              className="w-full lg:max-w-[680px] rounded-2xl"
              style={{
                background: "rgba(10, 18, 50, 0.85)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                border: "1px solid rgba(255, 119, 89, 0.25)",
                borderTop: "2px solid #FF7759",
                boxShadow: "0 24px 80px rgba(0,0,0,0.5), 0 0 40px rgba(255,119,89,0.06)",
                padding: "28px 32px",
              }}
            >
              {/* Panel header */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-white text-lg font-semibold" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  Pipeline Tracker
                </span>
                <span
                  className="text-[11px] px-3 py-1 rounded-full"
                  style={{
                    color: "#FF7759",
                    border: "1px solid rgba(255, 119, 89, 0.4)",
                    fontFamily: "monospace",
                  }}
                >
                  5 Programmes
                </span>
              </div>

              {/* Column headers */}
              <div className="grid grid-cols-[1.4fr_repeat(4,1fr)] gap-3 pb-3" style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                <span className="text-[11px] uppercase tracking-[0.1em]" style={{ color: "#8A93B2", fontFamily: "monospace" }}>
                  Candidate
                </span>
                {columns.map((col) => (
                  <span key={col} className="text-[10px] md:text-[11px] uppercase tracking-[0.1em] text-center" style={{ color: "#8A93B2", fontFamily: "monospace" }}>
                    {col}
                  </span>
                ))}
              </div>

              {/* Rows */}
              {pipelineRows.map((row, i) => (
                <div
                  key={row.name}
                  className="grid grid-cols-[1.4fr_repeat(4,1fr)] gap-3 py-4 items-center"
                  style={{
                    borderBottom: i < pipelineRows.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none",
                    opacity: row.dimmed ? 0.55 : 1,
                  }}
                >
                  <div>
                    <span className="text-white text-[14px] font-semibold block leading-tight" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      {row.name}
                    </span>
                    <span className="text-[12px] block mt-0.5" style={{ color: "#8A93B2", fontFamily: "'DM Sans', sans-serif" }}>
                      {row.indication}
                    </span>
                  </div>
                  {row.bars.map((fill, bi) => (
                    <div key={bi} className="flex items-center justify-center px-1">
                      <div className="w-full h-[4px] rounded-[2px]" style={{ background: "rgba(255,255,255,0.08)" }}>
                        {fill > 0 && (
                          <div
                            className="h-full rounded-[2px] transition-all duration-700"
                            style={{
                              width: `${fill}%`,
                              background: "#FF7759",
                            }}
                          />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ))}

              {/* Panel footer */}
              <div className="flex items-center justify-between mt-4 pt-3" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                <span className="text-[11px]" style={{ color: "#8A93B2", fontFamily: "monospace" }}>
                  Last updated: Q1 2026
                </span>
                <span
                  className="text-[11px] font-medium cursor-pointer hover:underline"
                  style={{ color: "#FF7759", fontFamily: "'DM Sans', sans-serif" }}
                  onClick={() => navigate("/partner-with-us")}
                >
                  Partner for access →
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PipelinePreview;
