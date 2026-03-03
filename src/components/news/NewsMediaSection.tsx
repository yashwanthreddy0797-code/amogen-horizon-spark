import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const NewsMediaSection = () => (
  <section className="py-20 lg:py-28 bg-background">
    <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
      <ScrollReveal>
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Media
          </p>
          <h2
            className="text-[2.5rem] md:text-[3.2rem] lg:text-[3.8rem] italic leading-[1.1] text-foreground"
          >
            Brand & media resources
          </h2>
          <p className="text-base md:text-lg text-muted-foreground mt-5">
            Access a variety of multimedia materials—including fact sheets, infographics, photos, and more—to support stories in development.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-primary hover:gap-3 transition-all"
          >
            Explore media resources <ArrowRight size={16} />
          </a>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default NewsMediaSection;
