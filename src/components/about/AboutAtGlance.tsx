import ScrollReveal from "@/components/ScrollReveal";
import { Factory, FlaskConical, Beaker } from "lucide-react";
import { TYPE, SPACING } from "@/typography";

const stats = [
  {
    icon: Factory,
    value: "70",
    unit: "+",
    label: "Employees",
    description: "84% in research & development and manufacturing functions",
    bg: "hsl(230, 40%, 94%)",
    iconBg: "hsl(230, 40%, 88%)",
    textColor: "hsl(var(--primary))",
    descColor: "hsl(var(--muted-foreground))",
    dark: false,
  },
  {
    icon: FlaskConical,
    value: "15",
    unit: " yrs",
    label: "Avg. R&D Expertise",
    description: "Among key personnel with a validated peptide platform",
    bg: "hsl(230, 35%, 88%)",
    iconBg: "hsl(230, 35%, 82%)",
    textColor: "hsl(var(--primary))",
    descColor: "hsl(var(--muted-foreground))",
    dark: false,
  },
  {
    icon: Beaker,
    value: "980",
    unit: " Kg",
    label: "Total GLP-1 Volume",
    description: "Continuously expanding capacity with highest quality standards",
    bg: "linear-gradient(135deg, hsl(232, 60%, 42%), hsl(260, 60%, 55%))",
    iconBg: "hsla(0, 0%, 100%, 0.15)",
    textColor: "#FFFFFF",
    descColor: "hsla(0, 0%, 100%, 0.7)",
    dark: true,
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

        <div className="grid md:grid-cols-3 mt-16" style={{ gap: SPACING.cardGap }}>
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            const isGradient = stat.bg.startsWith("linear");
            return (
              <ScrollReveal key={stat.label} delay={i * 0.12}>
                <div
                  className="rounded-2xl p-8 flex flex-col justify-between min-h-[300px]"
                  style={{ background: stat.bg }}
                >
                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-8"
                    style={{ background: stat.iconBg }}
                  >
                    <Icon size={22} style={{ color: stat.textColor }} strokeWidth={1.8} />
                  </div>

                  {/* Stat */}
                  <div className="mt-auto">
                    <div className="flex items-baseline">
                      <span
                        style={{
                          fontFamily: TYPE.display.fontFamily,
                          fontSize: "clamp(56px, 7vw, 80px)",
                          fontWeight: 700,
                          lineHeight: 1,
                          letterSpacing: "-0.04em",
                          color: stat.textColor,
                        }}
                      >
                        {stat.value}
                      </span>
                      <span
                        style={{
                          fontFamily: TYPE.h2.fontFamily,
                          fontSize: "clamp(24px, 3vw, 36px)",
                          fontWeight: 500,
                          color: stat.textColor,
                          marginLeft: "2px",
                        }}
                      >
                        {stat.unit}
                      </span>
                    </div>
                    <p
                      style={{
                        fontFamily: TYPE.h3.fontFamily,
                        fontSize: "clamp(16px, 2vw, 20px)",
                        fontWeight: 600,
                        color: stat.textColor,
                        marginTop: "4px",
                      }}
                    >
                      {stat.label}
                    </p>
                    <p
                      style={{
                        ...TYPE.bodySm,
                        color: stat.descColor,
                        marginTop: "16px",
                      }}
                    >
                      {stat.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutAtGlance;
