import ScrollReveal from "@/components/ScrollReveal";
import missionBlobs from "@/assets/mission-blobs.png";

const AboutVisionMission = () => {
  return (
    <section className="relative py-28 lg:py-36 bg-[#f0eeeb] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        <div className="max-w-xl">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.3em] text-foreground/50 font-medium mb-6" style={{ fontFamily: "monospace" }}>
              OUR MISSION
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-[22px] md:text-[26px] lg:text-[30px] font-medium text-foreground/70 leading-[1.4]">
              Our vision is to improve the wellbeing of patients suffering from debilitating illnesses. We're committed to realizing that potential by delivering high quality, cost-effective biosimilars and scalable peptide manufacturing that reaches markets that need them the most.
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* Blob image */}
      <div className="absolute top-1/2 -translate-y-1/2 right-0 w-[45%] h-[90%] pointer-events-none hidden lg:block" aria-hidden="true">
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
