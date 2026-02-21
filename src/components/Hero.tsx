import heroBg from "@/assets/hero-bg.jpg";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Biopharmaceutical molecular research"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-primary/80" />
      </div>

      {/* Content */}
      <div className="relative container max-w-7xl mx-auto px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-primary-foreground leading-tight mb-8">
            Advancing the Future of Biopharmaceutical Innovation
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 font-light leading-relaxed mb-12 max-w-2xl">
            At AMOGEN BIO PHARMA, we harness cutting-edge science to develop transformative
            therapies that address the world's most pressing unmet medical needs.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 text-sm uppercase tracking-wider px-8 py-6"
            >
              Explore Our Research
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-sm uppercase tracking-wider px-8 py-6"
            >
              About AMOGEN
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
