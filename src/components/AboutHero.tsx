import ScrollReveal from "@/components/ScrollReveal";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const AboutHero = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <ScrollReveal>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-4">
            About AMOGEN
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-[1.1] max-w-3xl">
            Our job is to put health<br />
            <span className="italic">above all.</span>
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <p className="text-lg text-muted-foreground mt-8 max-w-2xl leading-relaxed">
            AMOGEN is pioneering affordable access to advanced peptide therapeutics — 
            from GLP-1 biosimilars to next-generation metabolic medicines — through 
            world-class science and scalable manufacturing.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.3}>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 mt-8 text-sm font-semibold text-primary hover:text-primary/80 transition-colors group"
          >
            Learn more about us
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default AboutHero;
