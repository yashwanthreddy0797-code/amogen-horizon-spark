import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { TYPE, SPACING } from "@/typography";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: "hsl(30 20% 96%)" }}>
      {/* Soft gradient blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large warm blob - left/center */}
        <div
          className="absolute"
          style={{
            width: "70vw",
            height: "70vw",
            maxWidth: "900px",
            maxHeight: "900px",
            left: "-5%",
            top: "-10%",
            borderRadius: "50%",
            background: "radial-gradient(circle at 40% 50%, hsla(45, 60%, 85%, 0.8), hsla(30, 70%, 88%, 0.5) 40%, hsla(15, 60%, 88%, 0.3) 65%, transparent 80%)",
            filter: "blur(40px)",
          }}
        />
        {/* Peach/pink accent blob - center right */}
        <div
          className="absolute"
          style={{
            width: "50vw",
            height: "50vw",
            maxWidth: "650px",
            maxHeight: "650px",
            right: "5%",
            bottom: "5%",
            borderRadius: "50%",
            background: "radial-gradient(circle at 50% 50%, hsla(20, 70%, 85%, 0.6), hsla(10, 60%, 88%, 0.3) 50%, transparent 75%)",
            filter: "blur(50px)",
          }}
        />
        {/* Subtle white/glass circle overlay */}
        <div
          className="absolute"
          style={{
            width: "45vw",
            height: "45vw",
            maxWidth: "580px",
            maxHeight: "580px",
            right: "15%",
            top: "5%",
            borderRadius: "50%",
            background: "radial-gradient(circle at 50% 50%, hsla(0, 0%, 100%, 0.5), hsla(0, 0%, 100%, 0.15) 50%, transparent 70%)",
            filter: "blur(30px)",
          }}
        />
        {/* Small warm accent */}
        <div
          className="absolute"
          style={{
            width: "30vw",
            height: "30vw",
            maxWidth: "400px",
            maxHeight: "400px",
            right: "20%",
            bottom: "15%",
            borderRadius: "50%",
            background: "radial-gradient(circle at 50% 50%, hsla(15, 80%, 80%, 0.4), transparent 60%)",
            filter: "blur(45px)",
          }}
        />
      </div>
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
