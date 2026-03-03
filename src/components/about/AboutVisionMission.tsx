import ScrollReveal from "@/components/ScrollReveal";
import missionBlobs from "@/assets/mission-blobs.png";
import { TYPE, SPACING } from "@/typography";

const AboutVisionMission = () => {
  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: "#f0eeeb", paddingTop: SPACING.sectionPy.desktop, paddingBottom: SPACING.sectionPy.desktop }}>
      <div className="mx-auto relative z-10" style={{ maxWidth: SPACING.maxWidth, paddingLeft: SPACING.sectionPx, paddingRight: SPACING.sectionPx }}>
        <div className="max-w-xl space-y-16">
          <div>
            <ScrollReveal>
              <p style={{ ...TYPE.label, color: "hsl(var(--foreground) / 0.5)", marginBottom: SPACING.headingToSub }}>OUR VISION</p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p style={{ ...TYPE.bodyLg, color: "hsl(var(--foreground) / 0.7)" }}>
                To improve the wellbeing of patients suffering from debilitating illnesses. We're committed to realizing that potential by delivering high quality, cost-effective biosimilars and scalable peptide manufacturing that reaches markets that need them the most.
              </p>
            </ScrollReveal>
          </div>

          <div>
            <ScrollReveal delay={0.2}>
              <p style={{ ...TYPE.label, color: "hsl(var(--foreground) / 0.5)", marginBottom: SPACING.headingToSub }}>OUR MISSION</p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <p style={{ ...TYPE.bodyLg, color: "hsl(var(--foreground) / 0.7)" }}>
                To become a globally trusted partner in peptide-based therapeutics by combining scientific excellence with scalable manufacturing — making life-changing medicines accessible and affordable for patients everywhere.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </div>

      <div className="absolute top-1/2 -translate-y-1/2 right-0 w-[45%] h-[90%] pointer-events-none hidden lg:block" aria-hidden="true">
        <img src={missionBlobs} alt="" className="w-full h-full object-contain object-center" />
      </div>
    </section>
  );
};

export default AboutVisionMission;
