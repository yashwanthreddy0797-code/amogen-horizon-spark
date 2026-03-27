import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { ArrowRight } from "lucide-react";
import { TYPE, SPACING } from "@/typography";
import cardHealthcare from "@/assets/card-healthcare.jpg";
import cardPatients from "@/assets/card-patients.jpg";
import cardPartnerships from "@/assets/card-partnerships.jpg";

const cards = [
  {
    title: "Healthcare\nprofessionals",
    description: "Using science to make a difference in patients' lives",
    bg: "#D4D8DC",
    textColor: "#0B1E33",
    image: cardHealthcare,
  },
  {
    title: "Patients",
    description: "Incorporating the patient perspective",
    bg: "#001965",
    textColor: "#FFFFFF",
    image: cardPatients,
  },
  {
    title: "Partnerships",
    description: "Partnering with industry leaders and innovators",
    bg: "#0B736D",
    textColor: "#FFFFFF",
    image: cardPartnerships,
  },
];

const PatientDriven = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      className="bg-background"
      style={{
        paddingTop: 0,
        paddingBottom: SPACING.sectionPy.desktop,
      }}
    >
      <div
        className="mx-auto"
        style={{
          maxWidth: SPACING.maxWidth,
          paddingLeft: SPACING.sectionPx,
          paddingRight: SPACING.sectionPx,
        }}
      >
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-14">
            <h2
              style={{
                ...TYPE.h2,
                fontWeight: 300,
                letterSpacing: "-0.03em",
              }}
              className="text-foreground max-w-md"
            >
              Patient Driven,
              <br />
              Lasting Impact.
            </h2>
            <p
              style={{
                ...TYPE.body,
                color: "hsl(var(--muted-foreground))",
              }}
              className="max-w-sm md:pt-2"
            >
              We're making a real impact with healthcare professionals, patients
              and partners.
            </p>
          </div>
        </ScrollReveal>

        <div
          style={{
            display: "flex",
            gap: 0,
            height: 520,
            width: "100%",
          }}
        >
          {cards.map((card, i) => {
            const isHovered = hoveredIndex === i;
            const someHovered = hoveredIndex !== null;

            return (
              <div key={card.title} style={{ flex: isHovered ? 3 : someHovered ? 1 : 1, transition: "flex 0.85s cubic-bezier(0.16, 1, 0.3, 1)", minWidth: 0, height: "100%" }}>
              <ScrollReveal delay={i * 0.1} className="h-full">
                <div
                  className="relative overflow-hidden cursor-pointer h-full w-full"
                  style={{
                    backgroundColor: card.bg,
                    color: card.textColor,
                    borderRadius: "20px",
                    transition: "all 0.85s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Background image - visible on hover */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      opacity: isHovered ? 1 : 0,
                      transition: "opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
                      zIndex: 0,
                    }}
                  >
                    <img
                      src={card.image}
                      alt={card.title}
                      loading="lazy"
                      width={800}
                      height={1000}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background:
                          "linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.15) 50%, rgba(0,0,0,0.02) 100%)",
                      }}
                    />
                  </div>

                  {/* Content */}
                  <div
                    className="flex flex-col justify-between h-full"
                    style={{
                      position: "relative",
                      zIndex: 1,
                      padding: "36px",
                    }}
                  >
                    <div>
                      <h3
                        style={{
                          ...TYPE.h3,
                          fontSize: "clamp(20px, 2.5vw, 32px)",
                          fontWeight: 500,
                          color: isHovered ? "#FFFFFF" : card.textColor,
                          transition: "color 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
                          wordBreak: "break-word",
                          overflowWrap: "break-word",
                          hyphens: "auto",
                        }}
                      >
                        {card.title}
                      </h3>
                    </div>
                    <div className="flex items-end justify-between">
                      <p
                        style={{
                          ...TYPE.body,
                          color: isHovered ? "#FFFFFF" : card.textColor,
                          opacity: 0.85,
                          maxWidth: "260px",
                          transition: "color 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
                        }}
                      >
                        {card.description}
                      </p>
                      <button
                        className="flex items-center justify-center rounded-full border shrink-0"
                        style={{
                          width: 40,
                          height: 40,
                          borderColor:
                            isHovered || card.textColor === "#FFFFFF"
                              ? "rgba(255,255,255,0.4)"
                              : "rgba(0,0,0,0.25)",
                          backgroundColor: isHovered
                            ? "rgba(100, 220, 200, 0.7)"
                            : "transparent",
                          transition: "all 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
                        }}
                      >
                        <ArrowRight
                          size={16}
                          style={{
                            color: isHovered ? "#FFFFFF" : card.textColor,
                            transition: "color 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
                          }}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PatientDriven;
