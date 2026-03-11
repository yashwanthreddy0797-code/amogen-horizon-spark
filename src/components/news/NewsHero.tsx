import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { TYPE, SPACING } from "@/typography";

const NewsHero = () =>
  <section className="relative min-h-[85vh] flex items-end overflow-hidden" style={{ backgroundColor: "#D4D8DC" }}>
    <div className="relative z-10 w-full mx-auto pb-20 pt-40" style={{ maxWidth: SPACING.maxWidth, paddingLeft: SPACING.sectionPx, paddingRight: SPACING.sectionPx }}>
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
        <p style={{ ...TYPE.label, color: "#001965", opacity: 0.6, marginBottom: SPACING.labelToH2 }}>
          <Link to="/" className="hover:opacity-100 underline underline-offset-4" style={{ color: "#001965" }}>Home</Link>
          <span className="mx-2">/</span>News
        </p>
        <h1 style={{ ...TYPE.h1, color: "#001965" }} className="max-w-5xl">Latest from<br />Amogen.</h1>
        <p style={{ ...TYPE.bodyLg, color: "#001965", opacity: 0.75, marginTop: SPACING.headingToSub }} className="max-w-2xl">
          Research updates, press releases & company milestones.
        </p>
        <div className="flex flex-wrap gap-4" style={{ marginTop: SPACING.subToCta }}>
          <a href="#developments" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md border-2 border-[#001965] text-[#001965] transition-all duration-300 hover:bg-[#001965] hover:text-white" style={TYPE.button}>
            Explore <ArrowRight size={14} />
          </a>
        </div>
      </motion.div>
    </div>
  </section>;

export default NewsHero;
