import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { TYPE, SPACING } from "@/typography";
import amogenLogo from "@/assets/AmogenLogoWhite.png";
import facilityImg from "@/assets/facility-1.jpg";
import manufacturingImg from "@/assets/manufacturing.jpg";
import researchImg from "@/assets/research-lab.jpg";

const slides = [
  {
    category: "MANUFACTURING",
    title: "State-of-the-Art Biosimilar Manufacturing",
    description:
      "75,000L fermentation capacity with industry-leading purity standards for complex GLP-1 agonists and insulin analogues.",
    cta: "Learn More",
    href: "/cdmo",
    image: facilityImg,
  },
  {
    category: "PIPELINE",
    title: "10 Active Biosimilar Programs in Development",
    description:
      "Advancing a robust pipeline of peptide biosimilars targeting diabetes, obesity, and immunology therapeutic areas.",
    cta: "View Pipeline",
    href: "/products",
    image: manufacturingImg,
  },
  {
    category: "SCIENCE",
    title: "Pioneering Microbial Fermentation Platform",
    description:
      "Our proprietary E. coli expression and chemical ligation platform delivers consistent quality at commercial scale.",
    cta: "Explore Science",
    href: "/science",
    image: researchImg,
  },
];

const Hero = () => {
  const { t } = useLanguage();
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -300 : 300, opacity: 0 }),
  };

  return (
    <section
      className="relative overflow-hidden"
      style={{ backgroundColor: "#0B736D" }}
    >
      {/* Top hero area — two-column grid, headline on the right */}
      <div
        className="relative w-full mx-auto pt-36 pb-16 md:pt-44 md:pb-20 grid grid-cols-1 md:grid-cols-[2fr_3fr] items-center"
        style={{
          maxWidth: SPACING.maxWidth,
          paddingLeft: SPACING.sectionPx,
          paddingRight: SPACING.sectionPx,
        }}
      >
        {/* Left column — logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="hidden md:flex items-start"
        >
          <img src={amogenLogo} alt="AMOGEN Pharma" className="w-auto" style={{ height: "clamp(56px, 7vw, 96px)" }} />
        </motion.div>

        {/* Right column — headline, right-aligned */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="md:text-right"
        >
          <h1
            style={{
              ...TYPE.display,
              fontSize: "clamp(28px, 4vw, 48px)",
              color: "#FFFFFF",
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 400,
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
            }}
          >
            {t.hero.title}
          </h1>
        </motion.div>
      </div>

      {/* Carousel section */}
      <div
        className="relative w-full mx-auto pb-8"
        style={{
          maxWidth: SPACING.maxWidth,
          paddingLeft: SPACING.sectionPx,
          paddingRight: SPACING.sectionPx,
        }}
      >
        <div className="relative w-full overflow-hidden rounded-2xl" style={{ minHeight: 380 }}>
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative w-full rounded-2xl overflow-hidden"
              style={{ minHeight: 380 }}
            >
              {/* Slide image */}
              <img
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Dark overlay for readability */}
              <div className="absolute inset-0 bg-black/40" />

              {/* Slide content */}
              <div className="relative z-10 flex flex-col justify-end h-full p-8 md:p-12" style={{ minHeight: 380 }}>
                {/* Badge */}
                <span
                  className="inline-block self-start"
                  style={{
                    backgroundColor: "#FFBD01",
                    color: "#0B1F3A",
                    fontSize: "10px",
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.15em",
                    padding: "5px 12px",
                    borderRadius: "4px",
                  }}
                >
                  ABOUT AMOGEN
                </span>

                {/* Headline */}
                <h2
                  style={{
                    fontSize: "clamp(28px, 3vw, 40px)",
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 300,
                    color: "#FFFFFF",
                    lineHeight: 1.1,
                    marginTop: "16px",
                  }}
                  className="max-w-xl"
                >
                  Precision biosimilars. Commercial scale.
                </h2>

                {/* Sub-copy */}
                <p
                  style={{
                    fontSize: "15px",
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 300,
                    color: "rgba(255,255,255,0.75)",
                    lineHeight: 1.6,
                    marginTop: "12px",
                    maxWidth: "460px",
                  }}
                >
                  Amogen manufactures GLP-1 agonists, insulin analogues and immunology biosimilars — with consistent purity at commercial scale.
                </p>

                {/* CTA Button */}
                <a
                  href={slide.href}
                  className="inline-flex items-center self-start transition-all hero-cta-mint"
                  style={{
                    marginTop: "24px",
                    background: "#3ECFBF",
                    border: "none",
                    color: "#000000",
                    fontSize: "12px",
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                    borderRadius: "999px",
                    padding: "14px 32px",
                  }}
                >
                  EXPLORE PIPELINE
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination & controls */}
        <div className="flex items-center justify-between mt-6 pb-6">
          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <ArrowDown size={24} className="text-white/60 animate-bounce-slow" />
          </motion.div>

          {/* Pagination center */}
          <div className="flex items-center gap-3">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > current ? 1 : -1);
                  setCurrent(i);
                }}
                className="transition-all"
                aria-label={`Go to slide ${i + 1}`}
              >
                <div
                  className="rounded-full transition-all"
                  style={{
                    width: i === current ? 28 : 8,
                    height: 8,
                    backgroundColor: i === current ? "#FFFFFF" : "rgba(255,255,255,0.35)",
                    borderRadius: 999,
                  }}
                />
              </button>
            ))}
            <span
              style={{
                ...TYPE.bodySm,
                color: "rgba(255,255,255,0.6)",
                marginLeft: 8,
              }}
            >
              {current + 1} of {slides.length}
            </span>
          </div>

          {/* Prev/Next */}
          <div className="flex items-center gap-2">
            <button
              onClick={prev}
              className="flex items-center gap-1 text-white/70 hover:text-white transition-colors"
              style={TYPE.bodySm}
            >
              <ChevronLeft size={18} />
              <span className="hidden sm:inline underline underline-offset-4">Previous</span>
            </button>
            <button
              onClick={next}
              className="flex items-center gap-1 text-white/70 hover:text-white transition-colors"
              style={TYPE.bodySm}
            >
              <span className="hidden sm:inline underline underline-offset-4">Next</span>
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
