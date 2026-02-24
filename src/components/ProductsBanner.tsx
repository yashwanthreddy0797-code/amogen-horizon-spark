import ScrollReveal from "@/components/ScrollReveal";
import productsImg from "@/assets/products-vials.jpg";
import { ArrowRight } from "lucide-react";

const ProductsBanner = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <ScrollReveal>
          <div className="relative rounded-3xl overflow-hidden min-h-[340px] md:min-h-[380px] flex items-center"
            style={{
              background: "linear-gradient(135deg, hsl(270 20% 95%) 0%, hsl(180 30% 92%) 100%)",
            }}
          >
            {/* Image - left side */}
            <div className="hidden md:block absolute left-0 top-0 bottom-0 w-[45%]">
              <img
                src={productsImg}
                alt="Pharmaceutical vials"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[hsl(270_20%_95%)]" />
            </div>

            {/* Content - right side */}
            <div className="relative z-10 ml-auto w-full md:w-[55%] p-8 md:p-12 lg:p-16">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-2">
                APIs and FDFs
              </p>
              <div className="w-full h-px bg-foreground/20 mb-6" />
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight mb-5">
                Our products
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed max-w-lg mb-8">
                Check out a list of active pharmaceutical ingredients (APIs) and Finished Dosage Forms (FDFs) we offer
              </p>
              <div className="flex flex-wrap items-center gap-6">
                <span className="text-sm text-muted-foreground">Contact our sales team to learn more</span>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-full border border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors"
                >
                  <span>Our products</span>
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ProductsBanner;
