import ScrollReveal from "@/components/ScrollReveal";
import { Mountain, Globe, TrendingUp } from "lucide-react";
import peopleChild from "@/assets/people-child.jpg";
import peopleWoman from "@/assets/people-woman.jpg";
import peopleElderly from "@/assets/people-elderly.jpg";
import peopleMan from "@/assets/people-man.jpg";
import peopleDoctor from "@/assets/people-doctor.jpg";

const missionItems = [
  {
    icon: Mountain,
    text: "Deliver exceptional value to stakeholders and better health outcomes to patients by becoming a leading global biosimilars developer by 2030.",
  },
  {
    icon: Globe,
    text: "Build deep capabilities in development and manufacturing to deliver quality and cost-effective biosimilars for patients across the globe.",
  },
  {
    icon: TrendingUp,
    text: "Create a sustainable and broad portfolio of biosimilars with a focus on peptide and protein-based therapies.",
  },
];

const AboutVisionMission = () => {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Left — Vision & Mission text */}
          <div>
            <ScrollReveal>
              <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold mb-4">
                Who We Are
              </p>
              <div className="w-[280px] h-[3px] bg-primary mb-12" />
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h3 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight mb-5">
                Our Vision
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed mb-16">
                Our vision is to improve the wellbeing of patients suffering from debilitating illnesses by providing them with access to high quality and cost-effective biosimilars.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <h3 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight mb-8">
                Our Mission
              </h3>
            </ScrollReveal>

            <div className="space-y-8">
              {missionItems.map((item, i) => (
                <ScrollReveal key={i} delay={0.25 + i * 0.1}>
                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                      <item.icon className="w-7 h-7 text-primary" />
                    </div>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed pt-1">
                      {item.text}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Right — Image mosaic */}
          <div className="hidden lg:block">
            <ScrollReveal delay={0.15}>
              <div className="grid grid-cols-5 grid-rows-6 gap-4 h-[700px]">
                {/* Small top-left */}
                <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden">
                  <img src={peopleChild} alt="Young patient" className="w-full h-full object-cover" />
                </div>
                {/* Large top-right */}
                <div className="col-span-3 row-span-3 rounded-2xl overflow-hidden">
                  <img src={peopleWoman} alt="Woman patient" className="w-full h-full object-cover" />
                </div>
                {/* Small middle-left */}
                <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden">
                  <img src={peopleElderly} alt="Elderly patient" className="w-full h-full object-cover" />
                </div>
                {/* Large bottom-left */}
                <div className="col-span-3 row-span-3 rounded-2xl overflow-hidden">
                  <img src={peopleMan} alt="Man smiling" className="w-full h-full object-cover" />
                </div>
                {/* Small bottom-right */}
                <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden">
                  <img src={peopleDoctor} alt="Doctor" className="w-full h-full object-cover" />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutVisionMission;
