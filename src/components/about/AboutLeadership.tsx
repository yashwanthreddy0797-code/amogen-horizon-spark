import ScrollReveal from "@/components/ScrollReveal";
import { ArrowRight } from "lucide-react";
import aboutTeam from "@/assets/about-team.jpg";

const AboutLeadership = () => {
  return (
    <section id="leadership" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <ScrollReveal>
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold mb-6">Leadership</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight">
                Guided by experienced leaders.
              </h2>
              <p className="text-base md:text-lg text-muted-foreground mt-6 leading-relaxed">
                Our leadership team brings together decades of experience in biotechnology, pharmaceutical manufacturing, and global business development.
              </p>
              <a href="/about/leadership" className="inline-flex items-center gap-2 mt-8 px-6 py-3 text-sm font-bold rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
                Meet our leadership team <ArrowRight size={14} />
              </a>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <div className="rounded-2xl overflow-hidden">
              <img src={aboutTeam} alt="AMOGEN leadership team" className="w-full h-[360px] object-cover" loading="lazy" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default AboutLeadership;
