import { motion } from "framer-motion";
import { TYPE, SPACING } from "@/typography";
import { useLanguage } from "@/i18n/LanguageContext";
import facilityImg from "@/assets/facility-1.jpg";
import manufacturingImg from "@/assets/manufacturing.jpg";
import researchImg from "@/assets/research-lab.jpg";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section
      className="relative overflow-hidden"
      style={{ backgroundColor: "#001965" }}
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

      {/* Centered gradient panel */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.6 }}
        className="relative w-full mx-auto"
        style={{
          maxWidth: "1000px",
          paddingLeft: SPACING.sectionPx,
          paddingRight: SPACING.sectionPx,
        }}
      >
        <div
          className="relative mx-auto rounded-t-2xl overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #0B736D 0%, #2A918B 40%, #3ECFBF 100%)",
            height: "clamp(180px, 22vw, 280px)",
          }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
