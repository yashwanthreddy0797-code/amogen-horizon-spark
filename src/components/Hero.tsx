import { motion } from "framer-motion";
import { TYPE, SPACING } from "@/typography";
import { useLanguage } from "@/i18n/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <>
      {/* True Blue top half */}
      <section
        className="relative overflow-hidden"
        style={{ backgroundColor: "#001965", paddingBottom: "clamp(160px, 20vw, 260px)" }}
      >
        {/* Text content */}
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
      </section>

      {/* Gradient panel that straddles blue/white */}
      <div className="relative" style={{ backgroundColor: "#FFFFFF" }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="relative w-full mx-auto"
          style={{
            maxWidth: "1000px",
            paddingLeft: SPACING.sectionPx,
            paddingRight: SPACING.sectionPx,
            marginTop: "clamp(-160px, -20vw, -260px)",
            paddingBottom: "clamp(60px, 8vw, 100px)",
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
    </>
  );
};

export default Hero;
