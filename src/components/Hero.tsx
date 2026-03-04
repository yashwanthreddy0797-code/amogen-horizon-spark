import heroBg from "@/assets/hero-bg-green.png";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { TYPE, SPACING } from "@/typography";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: "#001965" }}>
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
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
          <h1 style={{ ...TYPE.display, color: "#ffffff" }} className="max-w-4xl">
            {t.hero.title}
          </h1>
          <p style={{ ...TYPE.bodyLg, color: "hsla(0, 0%, 100%, 0.75)", marginTop: SPACING.headingToSub }} className="max-w-2xl">
            {t.hero.description}
          </p>
        </motion.div>
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="absolute bottom-8 left-6 md:left-12 lg:left-16">
        <ArrowDown size={28} className="text-white animate-bounce-slow" />
      </motion.div>
    </section>
  );
};

export default Hero;
