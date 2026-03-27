import { motion } from "framer-motion";
import { TYPE, SPACING } from "@/typography";
import { useLanguage } from "@/i18n/LanguageContext";
import amogenLogo from "@/assets/AmogenLogoWhite.png";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section
      className="relative overflow-hidden"
      style={{ backgroundColor: "#001965" }}
    >
      <div
        className="relative w-full mx-auto flex flex-col justify-center"
        style={{
          maxWidth: SPACING.maxWidth,
          paddingLeft: SPACING.sectionPx,
          paddingRight: SPACING.sectionPx,
          paddingTop: "clamp(140px, 18vh, 220px)",
          paddingBottom: "clamp(140px, 18vh, 220px)",
        }}
      >
        {/* Logo + Label row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="flex items-center gap-5 mb-8"
        >
          <img
            src={amogenLogo}
            alt="AMOGEN"
            className="w-auto"
            style={{ height: "clamp(48px, 6vw, 72px)" }}
          />
          <span
            style={{
              ...TYPE.label,
              color: "rgba(255,255,255,0.5)",
              fontSize: "13px",
              letterSpacing: "0.18em",
            }}
          >
            AMOGEN PHARMA
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="max-w-4xl"
          style={{
            ...TYPE.display,
            color: "#FFFFFF",
            fontWeight: 300,
            letterSpacing: "-0.03em",
          }}
        >
          {t.hero.title}
        </motion.h1>
      </div>
    </section>
  );
};

export default Hero;
