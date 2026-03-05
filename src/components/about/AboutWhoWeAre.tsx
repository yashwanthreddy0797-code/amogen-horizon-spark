import ScrollReveal from "@/components/ScrollReveal";
import { ArrowRight } from "lucide-react";
import researchLabImg from "@/assets/research-lab.jpg";
import { TYPE, SPACING } from "@/typography";

const pillars = [
  { number: "01", title: "Purpose-Driven", desc: "Every molecule we manufacture serves a patient waiting for a better life." },
  { number: "02", title: "Science-First", desc: "Rigorous R&D and analytical precision guide every decision we make." },
  { number: "03", title: "Global Reach", desc: "Building partnerships that bring affordable biosimilars to markets worldwide." },
];

const AboutWhoWeAre = () => {
  return (
    <section
      id="who-we-are"
      className="relative overflow-hidden"
      style={{
        backgroundColor: "#001965",
        paddingTop: SPACING.sectionPy.desktop,
        paddingBottom: SPACING.sectionPy.desktop,
      }}
    >
      <div
        className="mx-auto relative z-10"
        style={{ maxWidth: SPACING.maxWidth, paddingLeft: SPACING.sectionPx, paddingRight: SPACING.sectionPx }}
      >
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left — Image with accent border */}
          <ScrollReveal delay={0.1}>
            <div className="relative">
              <div
                className="absolute -inset-3 rounded-3xl opacity-20"
                style={{ border: "1px solid rgba(255,255,255,0.25)" }}
              />
              <div className="rounded-2xl overflow-hidden">
                <img
                  src={researchLabImg}
                  alt="AMOGEN research team working in laboratory"
                  className="w-full h-[420px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Right — Content */}
          <div>
            <ScrollReveal>
              <p
                style={{
                  ...TYPE.label,
                  color: "rgba(255,255,255,0.5)",
                  marginBottom: SPACING.labelToH2,
                }}
              >
                Who We Are
              </p>
              <h2
                style={{ ...TYPE.h2, color: "#FFFFFF" }}
              >
                We're powered by{" "}
                <em className="italic" style={{ color: "#b1d5f2" }}>purpose.</em>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p
                style={{
                  ...TYPE.body,
                  color: "rgba(255,255,255,0.7)",
                  marginTop: "24px",
                  maxWidth: "480px",
                }}
              >
                Around the world, our team of dedicated professionals is united by a single mission — putting health above all. We innovate every day to make diabetes care more accessible through cutting-edge peptide therapeutics.
              </p>
            </ScrollReveal>

            {/* Pillars */}
            <div className="mt-10 space-y-0">
              {pillars.map((p, i) => (
                <ScrollReveal key={p.number} delay={0.15 + i * 0.08}>
                  <div
                    className="flex gap-5 items-start"
                    style={{
                      borderTop: "1px solid rgba(255,255,255,0.12)",
                      padding: "20px 0",
                    }}
                  >
                    <span
                      style={{
                        ...TYPE.label,
                        color: "#b1d5f2",
                        fontSize: "10px",
                        marginTop: "4px",
                        flexShrink: 0,
                      }}
                    >
                      {p.number}
                    </span>
                    <div>
                      <p style={{ ...TYPE.bodySm, fontWeight: 600, color: "#FFFFFF" }}>
                        {p.title}
                      </p>
                      <p style={{ ...TYPE.bodySm, color: "rgba(255,255,255,0.55)", marginTop: "4px" }}>
                        {p.desc}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={0.4}>
              <a
                href="#"
                className="inline-flex items-center gap-2 mt-6 transition-opacity hover:opacity-80"
                style={{ ...TYPE.bodySm, fontWeight: 600, color: "#b1d5f2" }}
              >
                Explore what drives us <ArrowRight size={14} />
              </a>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutWhoWeAre;
