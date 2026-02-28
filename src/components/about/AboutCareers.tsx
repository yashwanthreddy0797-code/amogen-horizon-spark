import ScrollReveal from "@/components/ScrollReveal";
import { ArrowRight } from "lucide-react";
import aboutTeam from "@/assets/about-team.jpg";

const AboutCareers = () => {
  return (
    <ScrollReveal>
      <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <img src={aboutTeam} alt="AMOGEN team collaborating" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center max-w-3xl px-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary-foreground leading-tight">
              Find your place at AMOGEN
            </h2>
            <p className="text-base md:text-lg text-primary-foreground/80 mt-6 leading-relaxed">
              If you're ready to challenge the status quo and advance medicine — all in the name of health — join us. We need your help to do things that have never been done.
            </p>
            <a href="#" className="inline-flex items-center gap-2 mt-8 px-6 py-3 text-sm font-bold rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
              Explore careers <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
};

export default AboutCareers;
