import { useNavigate } from "react-router-dom";
import pipelineBg from "@/assets/pipeline-bg.jpg";
import pipelineTracker from "@/assets/pipeline-tracker.png";



const PipelinePreview = () => {
  const navigate = useNavigate();

  return (
    <section
      id="pipeline"
      className="relative h-screen min-h-[700px] overflow-hidden"
    >
      {/* Full-bleed background image */}
      <img
        src={pipelineBg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Dark overlay to ensure contrast */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at 30% 60%, rgba(10,42,26,0.7) 0%, rgba(3,8,16,0.85) 60%, rgba(2,5,9,0.95) 100%)",
        }}
      />

      {/* Noise overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
      />

      {/* Content wrapper */}
      <div className="relative z-[2] h-full w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex flex-col lg:flex-row h-full">
          {/* LEFT ZONE — bottom-anchored */}
          <div className="lg:w-[40%] flex flex-col justify-end pb-16 lg:pb-20 pt-32 lg:pt-0">
            <span
              className="text-[11px] uppercase tracking-[0.12em] font-medium"
              style={{ color: "#8A93B2", fontFamily: "'DM Sans', sans-serif" }}
            >
              Pipeline
            </span>

            <h2
              className="mt-4 text-5xl md:text-6xl lg:text-[72px] font-extrabold text-white leading-[1.0] max-w-[480px]"
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

          {/* RIGHT ZONE — pipeline image */}
          <div className="lg:w-[60%] flex items-center justify-center lg:justify-end py-8 lg:py-0">
            <div
              className="w-full lg:max-w-[750px] rounded-2xl overflow-hidden"
              style={{
                background: "rgba(255, 255, 255, 0.97)",
                boxShadow: "0 32px 80px rgba(0,0,0,0.5), 0 0 60px rgba(0,0,0,0.15)",
                borderRadius: "16px",
              }}
            >
              <img
                src={pipelineTracker}
                alt="Amogen Pipeline Tracker — Semaglutide, Liraglutide, Tirzepatide, Dulaglutide, Insulin Degludec, iDegLira"
                className="w-full h-auto block"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PipelinePreview;
