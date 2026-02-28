import ScrollReveal from "@/components/ScrollReveal";
import productsImg from "@/assets/products-vials.jpg";
import { ArrowRight } from "lucide-react";

const ProductsBanner = () => {
  return (
    <section className="relative overflow-hidden min-h-[340px] md:min-h-[380px] flex items-center bg-footer-bg">
      {/* Image - right side, full bleed */}
      <div className="hidden md:block absolute right-0 top-0 bottom-0 w-[45%]">
        <img
          src={productsImg}
          alt="Pharmaceutical vials"
          className="w-full h-full object-cover"
          loading="lazy" />

        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-footer-bg border-0" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full">
        <ScrollReveal>
          {/* Content - left side */}
          <div className="relative z-10 w-full md:w-[50%] py-12 md:py-16">
            <p className="text-xs uppercase tracking-[0.2em] text-footer-foreground/70 font-semibold mb-2">
              APIs and FDFs
            </p>
            <div className="w-full h-px bg-footer-foreground/20 mb-6" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-footer-foreground leading-tight mb-5">Explore our API's

            </h2>
            <p className="text-base text-footer-foreground/70 leading-relaxed max-w-lg mb-8">
              Check out a list of active pharmaceutical ingredients (APIs) and Finished Dosage Forms (FDFs) we offer
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold rounded-full border-2 border-footer-foreground text-footer-foreground hover:bg-footer-foreground hover:text-footer-bg transition-colors">
              <span>
              </span>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>);
};

export default ProductsBanner;