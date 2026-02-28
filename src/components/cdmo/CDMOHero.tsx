import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import manufacturing from "@/assets/manufacturing.jpg";

const CDMOHero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-end overflow-hidden">
      <div className="absolute inset-0">
        <img src={manufacturing} alt="AMOGEN manufacturing facility" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-foreground/20" />
      </div>
      <div className="relative w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 pb-20 pt-40">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
          <p className="text-xs uppercase tracking-[0.25em] text-primary-foreground/60 font-semibold mb-4">
            <a href="/" className="hover:text-primary-foreground underline underline-offset-4">Home</a>
            <span className="mx-2">/</span>Biopharma Development Services
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-primary-foreground leading-[1.05] max-w-5xl">
            Agile. Flexible.<br />Focused on You.
          </h1>
          <p className="mt-8 text-lg md:text-xl text-primary-foreground/80 max-w-2xl leading-relaxed font-light">
            With a focus on commercialization, our biologics CDMO experts manage end-to-end development processes to reduce timelines and maintain regulatory-grade quality.
          </p>
          <div className="flex flex-wrap gap-4 mt-10">
            <a
              href="#rfp-process"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-md border-2 border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
            >
              Contact Us <ArrowRight size={14} />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-md border-2 border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
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
