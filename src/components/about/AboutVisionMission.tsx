import ScrollReveal from "@/components/ScrollReveal";
import missionBlobs from "@/assets/mission-blobs.png";

const AboutVisionMission = () => {
  return (
    <section className="relative py-24 lg:py-32 bg-[#f0eeeb] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        <div className="max-w-xl space-y-16">
          {/* Our Vision */}
          <div>
            <ScrollReveal>
              <p
                className="text-xs uppercase tracking-[0.3em] text-foreground/50 font-medium mb-5"
                style={{ fontFamily: "monospace" }}
              >
                OUR VISION
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-lg md:text-xl lg:text-[22px] font-medium text-foreground/70 leading-[1.5]">
                Our vision is to improve the wellbeing of patients suffering
                from debilitating illnesses. We're committed to realizing that
                potential by delivering high quality, cost-effective biosimilars
                and scalable peptide manufacturing that reaches markets that need
                them the most.
              </p>
            </ScrollReveal>
          </div>

          {/* Our Mission */}
          <div>
            <ScrollReveal delay={0.2}>
              <p
                className="text-xs uppercase tracking-[0.3em] text-foreground/50 font-medium mb-5"
                style={{ fontFamily: "monospace" }}
              >
                OUR MISSION
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <p className="text-lg md:text-xl lg:text-[22px] font-medium text-foreground/70 leading-[1.5]">
                To become a globally trusted partner in peptide-based
                therapeutics by combining scientific excellence with scalable
                manufacturing — making life-changing medicines accessible and
                affordable for patients everywhere.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Blob image */}
      <div
        className="absolute top-1/2 -translate-y-1/2 right-0 w-[45%] h-[90%] pointer-events-none hidden lg:block"
        aria-hidden="true"
      >
        <img
          src={missionBlobs}
          alt=""
          className="w-full h-full object-contain object-center"
        />
      </div>
    </section>
  );
};

export default AboutVisionMission;
