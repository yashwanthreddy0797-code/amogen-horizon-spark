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

      {/* Centered image showcase */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.6 }}
        className="relative w-full mx-auto"
        style={{
          maxWidth: "1000px",
          paddingLeft: SPACING.sectionPx,
          paddingRight: SPACING.sectionPx,
          paddingBottom: "0",
        }}
      >
        <div
          className="relative mx-auto grid grid-cols-1 md:grid-cols-3 gap-3 rounded-t-2xl overflow-hidden"
          style={{
            background: "rgba(255,255,255,0.08)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderBottom: "none",
            padding: "12px 12px 0 12px",
          }}
        >
          {[
            { img: facilityImg, label: "Manufacturing" },
            { img: manufacturingImg, label: "Pipeline" },
            { img: researchImg, label: "Research" },
          ].map((item, i) => (
            <div key={i} className="relative rounded-t-xl overflow-hidden" style={{ aspectRatio: "4/3" }}>
              <img
                src={item.img}
                alt={item.label}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <span
                className="absolute bottom-3 left-4"
                style={{
                  ...TYPE.label,
                  color: "rgba(255,255,255,0.85)",
                  fontSize: "10px",
                }}
              >
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
