import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

const CDMOHero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-end overflow-hidden" style={{ backgroundColor: "#ccc5bd" }}>
      {/* Decorative wavy squiggle */}
      <svg
        className="absolute bottom-[15%] left-0 w-full pointer-events-none opacity-30"
        viewBox="0 0 1400 300"
        fill="none"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M-40 250 Q100 50 240 200 Q380 350 520 150 Q660 -50 800 200 Q940 350 1080 150 Q1220 -50 1440 150"
          stroke="white"
          strokeWidth="80"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 pb-20 pt-40">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
          <p className="text-xs uppercase tracking-[0.25em] font-semibold mb-4" style={{ color: "#001965", opacity: 0.6 }}>
            <a href="/" className="hover:opacity-100 underline underline-offset-4" style={{ color: "#001965" }}>Home</a>
            <span className="mx-2">/</span>Biopharma Development Services
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-[1.05] max-w-5xl" style={{ color: "#001965" }}>
            Agile. Flexible.<br />Focused on You.
          </h1>
          <p className="mt-8 text-lg md:text-xl max-w-2xl leading-relaxed font-light" style={{ color: "#001965", opacity: 0.75 }}>
            With a focus on commercialization, our biologics CDMO experts manage end-to-end development processes to reduce timelines and maintain regulatory-grade quality.
          </p>
          <div className="flex flex-wrap gap-4 mt-10">
            <a
              href="#rfp-process"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-md border-2 border-[#001965] text-[#001965] transition-all duration-300 hover:bg-[#001965] hover:text-white"
            >
              Contact Us <ArrowRight size={14} />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-md border-2 border-[#001965] text-[#001965] transition-all duration-300 hover:bg-[#001965] hover:text-white"
            >
              Brochure <Download size={14} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CDMOHero;
