import { useRef, useState, useEffect, useCallback } from "react";
import { TYPE } from "@/typography";

interface Instrument {
  name: string;
  image: string;
}

interface AnalyticalCapabilitiesCardProps {
  title: string;
  instruments: Instrument[];
  textColor: string;
  accentColor: string;
}

const AnalyticalCapabilitiesCard = ({
  title,
  instruments,
  textColor,
  accentColor,
}: AnalyticalCapabilitiesCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0); // 0 = full heading, 1 = eyebrow

  const handleScroll = useCallback(() => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const cardHeight = rect.height;
    // How far the card top has scrolled past viewport top
    // We want transition to happen as user scrolls through the card
    // Trigger: 0% at card visible, 100% at 40% scrolled through
    const scrolled = -rect.top + 72; // offset for sticky top
    const triggerEnd = cardHeight * 0.4;
    const raw = Math.max(0, Math.min(1, scrolled / triggerEnd));
    setProgress(raw);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Interpolate values based on progress
  const fontSize = 36 - progress * (36 - 11); // 36px → 11px
  const fontWeight = progress < 0.5 ? 400 : 500;
  const letterSpacing = 0.02 + progress * (0.18 - 0.02); // 0.02em → 0.18em
  const opacity = 1 - progress * 0.25; // 1 → 0.75
  const textTransform = progress > 0.5 ? "uppercase" : "none";
  // Color transition: from textColor to teal
  const color = progress > 0.5 ? "hsl(var(--primary))" : textColor;
  // Move heading up: from normal position to eyebrow position
  const translateY = -progress * 20; // moves up 20px

  return (
    <div ref={cardRef}>
      {/* Animated heading that becomes eyebrow */}
      <div className="px-8 md:px-12 pt-3 pb-4" style={{ position: "relative" }}>
        <h3
          style={{
            fontFamily: TYPE.h2.fontFamily,
            fontSize: `${fontSize}px`,
            fontWeight,
            lineHeight: 1.1,
            letterSpacing: `${letterSpacing}em`,
            color,
            opacity,
            textTransform: textTransform as React.CSSProperties["textTransform"],
            transform: `translateY(${translateY}px)`,
            transition: "font-size 300ms cubic-bezier(0.4, 0, 0.2, 1), letter-spacing 300ms cubic-bezier(0.4, 0, 0.2, 1), color 300ms cubic-bezier(0.4, 0, 0.2, 1), opacity 300ms cubic-bezier(0.4, 0, 0.2, 1), transform 300ms cubic-bezier(0.4, 0, 0.2, 1)",
            transformOrigin: "left center",
            whiteSpace: "nowrap",
          }}
        >
          {title}
        </h3>
      </div>
      {/* Two-column instrument grid */}
      <div className="grid grid-cols-2 gap-x-6 gap-y-2 px-8 md:px-12">
        {instruments.map((inst) => (
          <div
            key={inst.name}
            className="rounded-xl px-4 py-2.5 flex items-center gap-3"
            style={{
              background: "rgba(255, 255, 255, 0.7)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.5)",
            }}
          >
            <img
              src={inst.image}
              alt={inst.name}
              className="w-11 h-11 object-contain flex-shrink-0"
              loading="lazy"
              decoding="async"
            />
            <p style={{ ...TYPE.bodySm, fontSize: "13px", fontWeight: 600, color: "#0B1E33" }}>
              {inst.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnalyticalCapabilitiesCard;
