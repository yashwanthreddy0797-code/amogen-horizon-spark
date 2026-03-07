import ScrollReveal from "@/components/ScrollReveal";
import { TYPE, SPACING } from "@/typography";
import cardBgImg from "@/assets/card-bg-blue.png";

const stats = [
  {
    value: "70",
    unit: "+",
    label: "Employees",
    description: "84% in research & development and manufacturing functions",
  },
  {
    value: "15",
    unit: " yrs",
    label: "Avg. R&D Expertise",
    description: "Among key personnel with a validated peptide platform",
  },
  {
    value: "980",
    unit: " Kg",
    label: "Total GLP-1 Volume",
    description: "Continuously expanding capacity with highest quality standards",
  },
];

const AboutAtGlance = () => {
  return (
    <section className="bg-card relative overflow-hidden" style={{ paddingTop: SPACING.sectionPy.desktop, paddingBottom: SPACING.sectionPy.desktop }}>
      <div className="mx-auto relative z-10" style={{ maxWidth: SPACING.maxWidth, paddingLeft: SPACING.sectionPx, paddingRight: SPACING.sectionPx }}>
        <ScrollReveal>
          <p style={{ ...TYPE.label, color: "hsl(var(--primary))", marginBottom: SPACING.labelToH2 }}>Who We Are</p>
          <h2 style={TYPE.h2} className="text-primary">Amogen at a glance</h2>
          <p style={{ ...TYPE.body, color: "hsl(var(--muted-foreground))", marginTop: SPACING.headingToSub }} className="max-w-3xl">
            Amogen Pharma India was founded in 2020 and is a generic company specialising in the development and manufacture of complex peptide and protein-based APIs and drug products for global pharmaceutical partners.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 mt-16" style={{ gap: "24px" }}>
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.12}>
              <div
                className="relative p-6 md:p-8 flex flex-col items-center justify-center text-center overflow-hidden"
                style={{
                  aspectRatio: "1 / 0.95",
                  borderRadius: "24px",
                  clipPath: "polygon(0 0, calc(100% - 60px) 0, 100% 60px, 100% 100%, 60px 100%, 0 calc(100% - 60px))",
                }}
              >
                {/* Background image */}
                <img
                  src={cardBgImg}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                  aria-hidden="true"
                />
                {/* Overlay for readability */}
                <div className="absolute inset-0 bg-black/10 pointer-events-none" />

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-baseline">
                    <span
                      style={{
                        fontFamily: TYPE.display.fontFamily,
                        fontSize: "clamp(44px, 5vw, 64px)",
                        fontWeight: 700,
                        lineHeight: 1,
                        letterSpacing: "-0.04em",
                        color: "#FFFFFF",
                      }}
                    >
                      {stat.value}
                    </span>
                    <span
                      style={{
                        fontFamily: TYPE.h2.fontFamily,
                        fontSize: "clamp(18px, 2vw, 28px)",
                        fontWeight: 500,
                        color: "#FFFFFF",
                        marginLeft: "2px",
                      }}
                    >
                      {stat.unit}
                    </span>
                  </div>
                  <p
                    style={{
                      fontFamily: TYPE.h3.fontFamily,
                      fontSize: "clamp(14px, 1.6vw, 18px)",
                      fontWeight: 600,
                      color: "#FFFFFF",
                      marginTop: "4px",
                    }}
                  >
                    {stat.label}
                  </p>
                  <p
                    style={{
                      ...TYPE.bodySm,
                      color: "hsla(0, 0%, 100%, 0.75)",
                      marginTop: "14px",
                    }}
                  >
                    {stat.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutAtGlance;
