import ScrollReveal from "@/components/ScrollReveal";
import productsImg from "@/assets/products-vials.jpg";
import { ArrowRight } from "lucide-react";
import { TYPE, SPACING } from "@/typography";

const ProductsBanner = () => {
  return (
    <section className="relative overflow-hidden min-h-[340px] md:min-h-[380px] flex items-center bg-footer-bg">
      <div className="hidden md:block absolute right-0 top-0 bottom-0 w-[45%]">
        <img src={productsImg} alt="Pharmaceutical vials" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-footer-bg border-0" />
      </div>

      <div className="mx-auto w-full" style={{ maxWidth: SPACING.maxWidth, paddingLeft: SPACING.sectionPx, paddingRight: SPACING.sectionPx }}>
        <ScrollReveal>
          <div className="relative z-10 w-full md:w-[50%] py-12 md:py-16">
            <p style={{ ...TYPE.label, color: "rgba(255,255,255,0.7)", marginBottom: "8px" }}>API AND FDF</p>
            <div className="w-full h-px bg-footer-foreground/20 mb-6" />
            <h2 style={{ ...TYPE.h2, color: "white", marginBottom: SPACING.headingToSub }}>Explore our API's</h2>
            <p style={{ ...TYPE.body, color: "rgba(255,255,255,0.7)", marginBottom: SPACING.subToCta }} className="max-w-lg">
              Check out a list of active pharmaceutical ingredients (APIs) and Finished Dosage Forms (FDFs) we offer
            </p>
            <a href="#" className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-footer-foreground text-footer-foreground hover:bg-footer-foreground hover:text-footer-bg transition-colors" style={TYPE.button}>
              <span>Learn More</span>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ProductsBanner;
