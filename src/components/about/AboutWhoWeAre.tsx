import ScrollReveal from "@/components/ScrollReveal";
import { ArrowRight } from "lucide-react";
import researchLabImg from "@/assets/research-lab.jpg";

const AboutWhoWeAre = () => {
  return (
    <section id="who-we-are" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <ScrollReveal>
          <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold mb-6">Who We Are</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight max-w-3xl">
            We're powered by purpose.
          </h2>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mt-14 items-center">
          <ScrollReveal delay={0.1}>
            <div className="space-y-6">
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Around the world, our team of dedicated professionals is united by a single mission — putting health above all. Learn more about what drives our passion and purpose.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                We're in relentless pursuit of breakthroughs that change patients' lives. We innovate every day to make diabetes care more accessible and effective through cutting-edge peptide therapeutics.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Our mission drives us to develop high-quality, affordable biosimilar solutions that expand global patient access to life-changing treatments.
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline mt-4">
                Explore what drives us <ArrowRight size={14} />
              </a>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="rounded-2xl overflow-hidden">
              <img src={researchLabImg} alt="AMOGEN research team" className="w-full h-[400px] object-cover" loading="lazy" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default AboutWhoWeAre;
