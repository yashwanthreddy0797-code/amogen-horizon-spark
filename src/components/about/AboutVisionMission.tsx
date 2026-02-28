import ScrollReveal from "@/components/ScrollReveal";

const AboutVisionMission = () => {
  return (
    <section className="relative py-32 lg:py-44 bg-[#f0eeeb] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        <div className="max-w-2xl">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.3em] text-foreground/50 font-medium mb-8" style={{ fontFamily: "monospace" }}>
              OUR MISSION
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-[28px] md:text-[34px] lg:text-[40px] font-medium text-foreground/70 leading-[1.35]">
              Our vision is to improve the wellbeing of patients suffering from debilitating illnesses. We're committed to realizing that potential by delivering high quality, cost-effective biosimilars and scalable peptide manufacturing that reaches markets that need them the most.
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* Abstract gradient blobs */}
      <div className="absolute top-0 right-0 w-[55%] h-full pointer-events-none" aria-hidden="true">
        {/* Blob 1 — top right, purple-orange */}
        <div
          className="absolute"
          style={{
            top: "5%",
            right: "15%",
            width: "220px",
            height: "200px",
            borderRadius: "42% 58% 70% 30% / 45% 45% 55% 55%",
            background: "linear-gradient(135deg, #e8845c 0%, #c77dba 40%, #b88dd9 70%, #9a7fe0 100%)",
            filter: "blur(1px)",
            opacity: 0.9,
          }}
        />
        {/* Blob 2 — top center, pink-purple */}
        <div
          className="absolute"
          style={{
            top: "0%",
            right: "30%",
            width: "180px",
            height: "170px",
            borderRadius: "50% 50% 40% 60% / 60% 40% 60% 40%",
            background: "linear-gradient(160deg, #d88cc4 0%, #c78dd9 50%, #a98ae8 100%)",
            filter: "blur(1px)",
            opacity: 0.85,
          }}
        />
        {/* Blob 3 — right edge, blue */}
        <div
          className="absolute"
          style={{
            top: "20%",
            right: "-2%",
            width: "160px",
            height: "200px",
            borderRadius: "40% 60% 55% 45% / 50% 45% 55% 50%",
            background: "linear-gradient(200deg, #7ba4e8 0%, #5b7de0 50%, #4a5fd0 100%)",
            filter: "blur(1px)",
            opacity: 0.9,
          }}
        />
        {/* Blob 4 — center, large dark purple-blue */}
        <div
          className="absolute"
          style={{
            top: "30%",
            right: "12%",
            width: "260px",
            height: "240px",
            borderRadius: "55% 45% 50% 50% / 45% 55% 45% 55%",
            background: "linear-gradient(180deg, #8a6cc7 0%, #5c4da0 30%, #2c2860 70%, #1a1a4a 100%)",
            filter: "blur(1px)",
            opacity: 0.9,
          }}
        />
        {/* Blob 5 — bottom, large blue-purple */}
        <div
          className="absolute"
          style={{
            bottom: "0%",
            right: "18%",
            width: "300px",
            height: "260px",
            borderRadius: "50% 50% 45% 55% / 40% 60% 40% 60%",
            background: "linear-gradient(160deg, #7b6cc7 0%, #4a5aaa 30%, #2a3878 60%, #1e2a60 100%)",
            filter: "blur(1px)",
            opacity: 0.9,
          }}
        />
        {/* Grainy texture overlay */}
        <svg className="absolute inset-0 w-full h-full opacity-40 mix-blend-overlay" aria-hidden="true">
          <filter id="grain">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#grain)" />
        </svg>
      </div>
    </section>
  );
};

export default AboutVisionMission;
