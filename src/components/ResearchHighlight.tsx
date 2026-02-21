import ScrollReveal from "@/components/ScrollReveal";
import researchLabImg from "@/assets/research-lab.jpg";
import { ArrowRight } from "lucide-react";

const ResearchHighlight = () => {
  return (
    <section className="py-24 lg:py-36 bg-primary">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <ScrollReveal>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-primary-foreground/50 font-semibold mb-6">
                Innovation & Research
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary-foreground leading-tight mb-8">
                Science that transforms{" "}
                <em className="italic">patient lives</em>
              </h2>
              <p className="text-base text-primary-foreground/70 leading-relaxed mb-6">
                Our research programs are built on a deep understanding of disease biology,
                leveraging proprietary platforms in protein engineering, genomics, and
                translational medicine to bring differentiated therapies to patients faster.
              </p>
              <p className="text-base text-primary-foreground/70 leading-relaxed mb-10">
                With over two decades of experience in drug development, our multidisciplinary
                teams work across discovery, preclinical, and clinical stages to ensure
                scientific rigor at every step.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-sm font-bold text-primary-foreground hover:gap-3 transition-all"
              >
                <span>Explore our research</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </ScrollReveal>

          {/* Image */}
          <ScrollReveal delay={0.2}>
            <div className="rounded-2xl overflow-hidden">
              <img
                src={researchLabImg}
                alt="AMOGEN research laboratory"
                className="w-full h-[400px] lg:h-[520px] object-cover"
                loading="lazy"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ResearchHighlight;
