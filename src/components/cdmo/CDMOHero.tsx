import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { TYPE, SPACING } from "@/typography";

const CDMOHero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-end overflow-hidden" style={{ backgroundColor: "#ccc5bd" }}>
      <div className="relative z-10 w-full mx-auto pb-20 pt-40" style={{ maxWidth: SPACING.maxWidth, paddingLeft: SPACING.sectionPx, paddingRight: SPACING.sectionPx }}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
          <p style={{ ...TYPE.label, color: "#001965", opacity: 0.6, marginBottom: SPACING.labelToH2 }}>
            <a href="/" className="hover:opacity-100 underline underline-offset-4" style={{ color: "#001965" }}>Home</a>
            <span className="mx-2">/</span>Biopharma Development Services
          </p>
          <h1 style={{ ...TYPE.h1, color: "#001965" }} className="max-w-5xl">Agile. Flexible.<br />Focused on You.</h1>
          <p style={{ ...TYPE.bodyLg, color: "#001965", opacity: 0.75, marginTop: SPACING.headingToSub }} className="max-w-2xl">
            With a focus on commercialization, our biologics CDMO experts manage end-to-end development processes to reduce timelines and maintain regulatory-grade quality.
          </p>
          <div className="flex flex-wrap gap-4" style={{ marginTop: SPACING.subToCta }}>
            <a href="#rfp-process" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md border-2 border-[#001965] text-[#001965] transition-all duration-300 hover:bg-[#001965] hover:text-white" style={TYPE.button}>
              Contact Us <ArrowRight size={14} />
            </a>
            <a href="#" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md border-2 border-[#001965] text-[#001965] transition-all duration-300 hover:bg-[#001965] hover:text-white" style={TYPE.button}>
              Brochure <Download size={14} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CDMOHero;
