import ScrollReveal from "@/components/ScrollReveal";
import { ArrowRight } from "lucide-react";
import careersBannerBlue from "@/assets/careers-banner-blue.jpg";
import { TYPE, SPACING } from "@/typography";

const AboutCareers = () => {
  return (
    <section className="relative overflow-hidden min-h-[260px] md:min-h-[320px] flex items-stretch rounded-2xl mx-4 md:mx-8 mb-12 border border-border">
      {/* Left: Text panel with diagonal clip */}
      <div
        className="relative z-10 w-full md:w-[55%] bg-background flex items-center rounded-l-2xl"
        style={{
          clipPath: "polygon(0 0, 100% 0, 85% 100%, 0 100%)",
        }}
      >
        <div className="w-full py-12 md:py-16 pr-16 md:pr-24" style={{ paddingLeft: SPACING.sectionPx, maxWidth: "700px" }}>
          <ScrollReveal>
            <p style={{ ...TYPE.label, color: "hsl(var(--muted-foreground))", marginBottom: "8px" }}>
              CAREERS
            </p>
            <div className="w-16 h-px bg-border mb-6" />
            <h2 style={{ ...TYPE.h2, color: "hsl(var(--foreground))", marginBottom: SPACING.headingToSub }}>
              Find your place at AMOGEN
            </h2>
            <p style={{ ...TYPE.body, color: "hsl(var(--muted-foreground))", marginBottom: SPACING.subToCta }} className="max-w-lg">
              If you're ready to challenge the status quo and advance medicine — all in the name of health — join us. We need your help to do things that have never been done.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors"
              style={TYPE.button}
            >
              <span>Explore Careers</span>
              <ArrowRight size={14} />
            </a>
          </ScrollReveal>
        </div>
      </div>

      {/* Right: Image */}
      <div className="hidden md:block absolute right-0 top-0 bottom-0 w-[55%]">
        <img
          src={careersBannerBlue}
          alt="AMOGEN team collaborating"
          className="w-full h-full object-cover"
          loading="lazy"
          width={1024}
          height={576}
          decoding="async"
        />
      </div>

      {/* Mobile fallback bg */}
      <div className="md:hidden absolute inset-0 -z-10">
        <img
          src={careersBannerBlue}
          alt=""
          className="w-full h-full object-cover opacity-20"
          loading="lazy"
          aria-hidden="true"
        />
      </div>
    </section>
  );
};

export default AboutCareers;
