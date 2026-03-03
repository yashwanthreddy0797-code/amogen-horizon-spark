import ScrollReveal from "@/components/ScrollReveal";
import { ArrowRight } from "lucide-react";
import aboutTeam from "@/assets/about-team.jpg";
import { TYPE, SPACING } from "@/typography";

const AboutCareers = () => {
  return (
    <ScrollReveal>
      <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <img src={aboutTeam} alt="AMOGEN team collaborating" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center max-w-3xl px-6">
            <h2 style={{ ...TYPE.h2, color: "white" }}>Find your place at AMOGEN</h2>
            <p style={{ ...TYPE.body, color: "rgba(255,255,255,0.8)", marginTop: SPACING.headingToSub }}>
              If you're ready to challenge the status quo and advance medicine — all in the name of health — join us. We need your help to do things that have never been done.
            </p>
            <a href="#" className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors rounded-md" style={{ ...TYPE.button, marginTop: SPACING.subToCta, padding: "14px 24px" }}>
              Explore careers <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
};

export default AboutCareers;
