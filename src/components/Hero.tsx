import heroBg from "@/assets/hero-bg-blue.jpg";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { TYPE, SPACING } from "@/typography";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        loading="eager"
        decoding="async"
        fetchPriority="high"
      />
      {/* Full blur overlay */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        background: "hsla(220, 60%, 95%, 0.35)"
      }} />
      <div className="relative w-full mx-auto py-32" style={{ maxWidth: SPACING.maxWidth, paddingLeft: SPACING.sectionPx, paddingRight: SPACING.sectionPx }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {/* Blue backdrop behind text */}
          <div className="inline-block rounded-xl px-6 py-4" style={{ background: "hsla(222, 100%, 20%, 0.12)", backdropFilter: "blur(12px)" }}>
            <h1 style={{ ...TYPE.display, color: "#001965", fontFamily: "'Outfit', sans-serif", fontWeight: 300 }} className="max-w-4xl">
              {t.hero.title}
            </h1>
            <p style={{ ...TYPE.bodyLg, color: "#001965", opacity: 0.8, marginTop: SPACING.headingToSub, fontFamily: "'Outfit', sans-serif", fontWeight: 300 }} className="max-w-2xl">
              {t.hero.description}
            </p>
          </div>
        </motion.div>
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="absolute bottom-8 left-6 md:left-12 lg:left-16">
        <ArrowDown size={28} className="text-foreground animate-bounce-slow" />
      </motion.div>
    </section>
  );
};

export default Hero;
