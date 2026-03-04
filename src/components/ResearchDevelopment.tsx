import ScrollReveal from "@/components/ScrollReveal";
import { TYPE, SPACING } from "@/typography";
import rdLabImg from "@/assets/rd-lab-hands.jpg";

const bulletPoints = [
  "Automated lab fermenters and disposable cell containers of up to 40L",
  "Off-gas in-line analysis",
  "Standardized data control system",
  "Analytical equipment including HPLC, UPLC, SEC, GC, various MS detectors and physico-chemical TNA methods for nitrosamines",
  "DSP equipment including microfiltration, nanofiltration, automated chemical reactors, tangential flow filtration and a Kühni column for liquid extraction",
  "Organic-phase hemi-synthesis chemistry",
];

const AboutResearchDevelopment = () => {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        backgroundColor: "hsl(var(--primary))",
        paddingTop: SPACING.sectionPy.desktop,
        paddingBottom: SPACING.sectionPy.desktop,
      }}
    >
      <div
        className="mx-auto grid md:grid-cols-2 items-start"
        style={{
          maxWidth: SPACING.maxWidth,
          paddingLeft: SPACING.sectionPx,
          paddingRight: SPACING.sectionPx,
          gap: "64px",
        }}
      >
        {/* Left — Image */}
        <ScrollReveal>
          <div className="rounded-2xl overflow-hidden">
            <img
              src={rdLabImg}
              alt="Researcher working in laboratory"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        </ScrollReveal>

        {/* Right — Content */}
        <ScrollReveal delay={0.1}>
          <div>
            <h2
              style={{ ...TYPE.h2, color: "white" }}
              className="mb-6"
            >
              Research &{"\n"}Development
            </h2>

            <p
              style={{ ...TYPE.body, color: "hsla(0, 0%, 100%, 0.85)" }}
              className="mb-4"
            >
              State-of-the-art labs and a 10 m³ pilot plant combine to drive our proactive, early-stage development agenda. Our special facilities include a dedicated proteins and enzymes unit and a Center of Excellence developing high-yield antibiotic strains.
            </p>

            <p
              style={{ ...TYPE.body, color: "hsla(0, 0%, 100%, 0.85)" }}
              className="mb-10"
            >
              Both of our fermentation manufacturing sites enjoy long-standing, successful regulatory track records and operate under cGMP regulations and FDA approval.
            </p>

            {/* Bullet list */}
            <ul className="flex flex-col gap-5">
              {bulletPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span
                    className="mt-2 w-2 h-2 rounded-full flex-shrink-0"
                    style={{ backgroundColor: "hsla(0, 0%, 100%, 0.5)" }}
                  />
                  <span style={{ ...TYPE.body, color: "hsla(0, 0%, 100%, 0.9)" }}>
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default AboutResearchDevelopment;
