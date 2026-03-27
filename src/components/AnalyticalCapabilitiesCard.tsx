import { useRef } from "react";
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
}: AnalyticalCapabilitiesCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={cardRef} className="analytical-card-scroll relative">
      <style>{`
        @keyframes shrink-to-eyebrow {
          0% {
            font-size: 36px;
            font-weight: 400;
            letter-spacing: 0.02em;
            opacity: 1;
            color: ${textColor};
          }
          100% {
            font-size: 11px;
            font-weight: 500;
            letter-spacing: 0.18em;
            opacity: 0.75;
            color: hsl(var(--primary));
          }
        }
        .analytical-heading {
          position: sticky;
          top: 0;
          z-index: 5;
          text-transform: uppercase;
          animation: shrink-to-eyebrow linear both;
          animation-timeline: scroll(nearest);
          animation-range: 0% 40%;
          transform-origin: left center;
          white-space: nowrap;
        }
      `}</style>

      {/* Sticky heading that animates to eyebrow */}
      <div className="px-8 md:px-12 pt-3 pb-4">
        <h3
          className="analytical-heading"
          style={{
            fontFamily: TYPE.h2.fontFamily,
            lineHeight: 1.1,
          }}
        >
          {title}
        </h3>
      </div>

      {/* Two-column instrument grid */}
      <div className="grid grid-cols-2 gap-x-6 gap-y-2 px-8 md:px-12 pb-4">
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
