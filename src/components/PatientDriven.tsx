import ScrollReveal from "@/components/ScrollReveal";
import { ArrowRight } from "lucide-react";
import { TYPE, SPACING } from "@/typography";

const cards = [
  {
    title: "Healthcare professionals",
    description: "Using science to make a difference in patients' lives",
    bg: "#D4D8DC",
    textColor: "#0B1E33",
  },
  {
    title: "Patients",
    description: "Incorporating the patient perspective",
    bg: "#001965",
    textColor: "#FFFFFF",
  },
  {
    title: "Partnerships",
    description: "Partnering with industry leaders and innovators",
    bg: "#0B736D",
    textColor: "#FFFFFF",
  },
];

const PatientDriven = () => {
  return (
    <section
      className="bg-background"
      style={{
        paddingTop: SPACING.sectionPy.desktop,
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
          className="grid md:grid-cols-3"
          style={{ gap: 0 }}
        >
          {cards.map((card, i) => (
            <ScrollReveal key={card.title} delay={i * 0.1}>
              <div
                className="relative flex flex-col justify-between"
                style={{
                  backgroundColor: card.bg,
                  color: card.textColor,
                  minHeight: 480,
                  padding: "36px",
                  borderRadius: i === 0 ? "20px 0 0 20px" : i === 2 ? "0 20px 20px 0" : "0",
                }}
              >
                <div>
                  <h3
                    style={{
                      ...TYPE.h3,
                      fontSize: "clamp(24px, 3vw, 32px)",
                      fontWeight: 500,
                      color: card.textColor,
                    }}
                  >
                    {card.title}
                  </h3>
                </div>
                <div className="flex items-end justify-between">
                  <p
                    style={{
                      ...TYPE.body,
                      color: card.textColor,
                      opacity: 0.85,
                      maxWidth: "260px",
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
                        card.textColor === "#FFFFFF"
                          ? "rgba(255,255,255,0.4)"
                          : "rgba(0,0,0,0.25)",
                    }}
                  >
                    <ArrowRight
                      size={16}
                      style={{ color: card.textColor }}
                    />
                  </button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PatientDriven;
