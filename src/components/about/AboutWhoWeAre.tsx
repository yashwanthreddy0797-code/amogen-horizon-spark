import ScrollReveal from "@/components/ScrollReveal";
import { ArrowRight } from "lucide-react";
import researchLabImg from "@/assets/research-lab.jpg";
import { TYPE, SPACING } from "@/typography";

const AboutWhoWeAre = () => {
  return (
    <section id="who-we-are" className="bg-background" style={{ paddingTop: SPACING.sectionPy.desktop, paddingBottom: SPACING.sectionPy.desktop }}>
      <div className="mx-auto" style={{ maxWidth: SPACING.maxWidth, paddingLeft: SPACING.sectionPx, paddingRight: SPACING.sectionPx }}>
        <ScrollReveal>
          <p style={{ ...TYPE.label, color: "hsl(var(--primary))", marginBottom: SPACING.labelToH2 }}>Who We Are</p>
          <h2 style={TYPE.h2} className="text-foreground max-w-3xl">We're powered by purpose.</h2>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mt-14 items-center">
          <ScrollReveal delay={0.1}>
            <div className="space-y-6">
              <p style={{ ...TYPE.body, color: "hsl(var(--muted-foreground))" }}>
                Around the world, our team of dedicated professionals is united by a single mission — putting health above all. Learn more about what drives our passion and purpose.
              </p>
              <p style={{ ...TYPE.body, color: "hsl(var(--muted-foreground))" }}>
                We're in relentless pursuit of breakthroughs that change patients' lives. We innovate every day to make diabetes care more accessible and effective through cutting-edge peptide therapeutics.
              </p>
              <p style={{ ...TYPE.body, color: "hsl(var(--muted-foreground))" }}>
                Our mission drives us to develop high-quality, affordable biosimilar solutions that expand global patient access to life-changing treatments.
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-primary hover:underline mt-4" style={{ ...TYPE.bodySm, fontWeight: 600 }}>
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
