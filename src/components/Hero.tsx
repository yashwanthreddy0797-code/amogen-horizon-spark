import heroPortrait from "@/assets/hero-portrait.jpg";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useState, useEffect } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

const Hero = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const { t } = useLanguage();

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % t.hero.words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [t.hero.words.length]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroPortrait} alt="Patient looking hopeful" className="w-full h-full object-cover" loading="eager" width={1534} height={1080} decoding="async" fetchPriority="high" />
        <div className="absolute inset-0 bg-foreground/40" />
      </div>
      <div className="relative w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-primary-foreground leading-[1.05] max-w-4xl">
            {t.hero.title}
          </h1>
          <div className="h-[1.15em] relative overflow-hidden mt-1 text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-primary-foreground leading-[1.15]">
            <AnimatePresence mode="wait">
              <motion.span
                key={wordIndex}
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                exit={{ y: "-100%", opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                className="block"
              >
                {t.hero.words[wordIndex]}
              </motion.span>
            </AnimatePresence>
          </div>
          <p className="mt-8 text-lg md:text-xl text-primary-foreground/80 max-w-2xl leading-relaxed font-light">
            {t.hero.description}
          </p>
          <a href="#research" className="inline-flex items-center mt-5 px-5 py-2.5 text-sm font-medium rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
            {t.hero.cta}
          </a>
        </motion.div>
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="absolute bottom-8 left-6 md:left-12 lg:left-16">
        <ArrowDown size={28} className="text-primary-foreground animate-bounce-slow" />
      </motion.div>
    </section>
  );
};

export default Hero;
