import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import researchCloseup from "@/assets/research-closeup.jpg";

const CDMOHero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full py-32 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground font-semibold mb-6">
              Biopharma Development Services
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-primary leading-[1.05]">
              Agile. Flexible.
              <br />
              Focused on You.
            </h1>
            <p className="mt-8 text-base md:text-lg text-muted-foreground max-w-lg leading-relaxed">
              With a focus on commercialization, our biologics CDMO experts manage end-to-end development processes to reduce timelines and maintain regulatory-grade quality.
            </p>
            <div className="flex flex-wrap gap-4 mt-10">
              <a
                href="#rfp-process"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-md border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                Contact Us <ArrowRight size={14} />
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-md border-2 border-border text-foreground hover:bg-muted transition-colors"
              >
                Brochure <Download size={14} />
              </a>
            </div>
          </motion.div>

          {/* Right — Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="w-[320px] h-[320px] md:w-[420px] md:h-[420px] rounded-full overflow-hidden shadow-2xl">
              <img
                src={researchCloseup}
                alt="Biologics development"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CDMOHero;
