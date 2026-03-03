import ScrollReveal from "@/components/ScrollReveal";
import collageImg from "@/assets/people-collage.jpg";
import { TYPE, SPACING } from "@/typography";

const AboutCultureWay = () => {
  return (
    <section className="bg-card" style={{ paddingTop: SPACING.sectionPy.desktop, paddingBottom: SPACING.sectionPy.desktop }}>
      <div className="mx-auto" style={{ maxWidth: SPACING.maxWidth, paddingLeft: SPACING.sectionPx, paddingRight: SPACING.sectionPx }}>
        <ScrollReveal>
          <h2 style={TYPE.h2} className="text-primary max-w-3xl">
            Our culture is built on tradition… and dedication
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2} className="overflow-visible">
          <div className="mt-16 flex justify-center overflow-visible px-2 md:px-4">
            <div
              className="inline-block text-[140px] sm:text-[200px] md:text-[280px] lg:text-[360px] xl:text-[420px] leading-[0.95] tracking-tight select-none pb-6 pr-2"
              style={{
                fontFamily: TYPE.display.fontFamily,
                fontWeight: 900,
                backgroundImage: `url(${collageImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                color: "transparent",
              }}
            >
              <span className="block">Way</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default AboutCultureWay;
