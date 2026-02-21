import ScrollReveal from "@/components/ScrollReveal";
import researchLabImg from "@/assets/research-lab.jpg";
import { ArrowRight } from "lucide-react";

const ResearchHighlight = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <ScrollReveal>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-4">
            Innovation & Research
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight max-w-3xl mb-4">
            Science that transforms{" "}
            <em className="italic">patient lives</em>
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed max-w-2xl mb-10">
            Our research programs are built on a deep understanding of disease biology,
            leveraging proprietary platforms in protein engineering, genomics, and
            translational medicine to bring differentiated therapies to patients faster.
          </p>
        </ScrollReveal>

        {/* Full-width image card with overlay text */}
        <ScrollReveal delay={0.15}>
          <div className="relative rounded-3xl overflow-hidden">
            <img
              src={researchLabImg}
              alt="AMOGEN research laboratory"
              className="w-full h-[420px] md:h-[520px] lg:h-[600px] object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 lg:p-16">
              <p className="text-base text-primary-foreground/70 leading-relaxed max-w-xl mb-6">
                With over two decades of experience in drug development, our multidisciplinary
                teams work across discovery, preclinical, and clinical stages to ensure
                scientific rigor at every step.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                <span>Explore our research</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ResearchHighlight;
