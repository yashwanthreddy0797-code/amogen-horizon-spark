import heroBgDna from "@/assets/hero-bg-dna.jpg";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { TYPE, SPACING } from "@/typography";

const Hero = () => {
  const { t } = useLanguage();


  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
      <img
        src={heroBgDna}
        alt="DNA molecular structure"
        className="absolute right-0 top-0 h-full w-[65%] object-contain object-right-top pointer-events-none"
        loading="eager"
        decoding="async"
        fetchPriority="high"
      />
      <div className="relative w-full mx-auto py-32" style={{ maxWidth: SPACING.maxWidth, paddingLeft: SPACING.sectionPx, paddingRight: SPACING.sectionPx }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h1 style={{ ...TYPE.display, color: "hsl(var(--foreground))" }} className="max-w-4xl">
            {t.hero.title}
          </h1>
          <p style={{ ...TYPE.bodyLg, color: "hsl(var(--muted-foreground))", marginTop: SPACING.headingToSub }} className="max-w-2xl">
            {t.hero.description}
          </p>
        </motion.div>
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="absolute bottom-8 left-6 md:left-12 lg:left-16">
        <ArrowDown size={28} className="text-foreground animate-bounce-slow" />
      </motion.div>
    </section>
  );
};

export default Hero;
