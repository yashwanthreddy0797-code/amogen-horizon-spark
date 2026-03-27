import { motion } from "framer-motion";
import { TYPE, SPACING } from "@/typography";
import { useLanguage } from "@/i18n/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <div className="relative">
      {/* Background split: top half blue, bottom half white */}
      <div className="absolute inset-0">
        <div className="h-1/2" style={{ backgroundColor: "#001965" }} />
        <div className="h-1/2" style={{ backgroundColor: "#FFFFFF" }} />
      </div>

      {/* True Blue section with text */}
      <div
        className="relative"
        style={{ backgroundColor: "#001965" }}
      >
        <div
          className="relative w-full mx-auto"
          style={{
            maxWidth: SPACING.maxWidth,
            paddingLeft: SPACING.sectionPx,
            paddingRight: SPACING.sectionPx,
            paddingTop: "clamp(130px, 16vh, 200px)",
            paddingBottom: "60px",
          }}
        >
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
      </div>

      {/* Gradient panel centered across the blue/white split */}
      <div className="relative" style={{ backgroundColor: "transparent" }}>
        {/* Background split behind the panel */}
        <div className="absolute inset-0">
          <div className="h-1/2" style={{ backgroundColor: "#001965" }} />
          <div className="h-1/2" style={{ backgroundColor: "#FFFFFF" }} />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="relative w-full mx-auto"
          style={{
            maxWidth: "1000px",
            paddingLeft: SPACING.sectionPx,
            paddingRight: SPACING.sectionPx,
            paddingTop: "20px",
            paddingBottom: "32px",
          }}
        >
          <div
            className="relative mx-auto rounded-2xl overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #0B736D 0%, #2A918B 40%, #3ECFBF 100%)",
              height: "clamp(300px, 38vw, 480px)",
            }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
