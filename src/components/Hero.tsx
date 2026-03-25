import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { TYPE, SPACING } from "@/typography";
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
      {/* Top hero area — logo left, heading right */}
      <div
        className="relative w-full mx-auto pt-36 pb-16 md:pt-44 md:pb-20"
        style={{
          maxWidth: SPACING.maxWidth,
          paddingLeft: SPACING.sectionPx,
          paddingRight: SPACING.sectionPx,
        }}
      >
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          {/* Left — brand tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="md:max-w-[280px] shrink-0"
          >
            <p
              style={{
                ...TYPE.bodyLg,
                color: "#FFFFFF",
                opacity: 0.7,
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 300,
              }}
            >
              Precision biosimilars. <br />Commercial scale.
            </p>
          </motion.div>

          {/* Right — main headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="md:max-w-[700px] md:text-right"
          >
            <h1
              style={{
                ...TYPE.display,
                color: "#FFFFFF",
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 300,
              }}
            >
              {t.hero.title}
            </h1>
          </motion.div>
        </div>
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
                {/* Category badge */}
                <span
                  className="inline-block px-3 py-1 rounded-sm text-[#001965] mb-4 self-start"
                  style={{
                    ...TYPE.label,
                    backgroundColor: "#F5C518",
                    fontSize: "11px",
                    letterSpacing: "0.1em",
                  }}
                >
                  {slide.category}
                </span>

                <h2
                  style={{
                    ...TYPE.h1,
                    color: "#FFFFFF",
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 300,
                  }}
                  className="max-w-xl mb-4"
                >
                  {slide.title}
                </h2>

                <p
                  style={{
                    ...TYPE.body,
                    color: "#FFFFFF",
                    opacity: 0.85,
                    fontFamily: "'Outfit', sans-serif",
                  }}
                  className="max-w-lg mb-8"
                >
                  {slide.description}
                </p>

                {/* CTA Button */}
                <a
                  href={slide.href}
                  className="inline-flex items-center gap-2 self-start px-7 py-3.5 rounded-full text-[#001965] font-medium transition-all hover:brightness-110"
                  style={{
                    backgroundColor: "#0B736D",
                    ...TYPE.button,
                    color: "#FFFFFF",
                  }}
                >
                  {slide.cta}
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
