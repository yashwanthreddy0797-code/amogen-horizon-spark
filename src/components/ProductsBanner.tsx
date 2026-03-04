import ScrollReveal from "@/components/ScrollReveal";
import apiFdfImg from "@/assets/api-fdf-banner.jpg";
import { TYPE, SPACING } from "@/typography";

const ProductsBanner = () => {
  return (
    <section className="relative overflow-hidden min-h-[340px] md:min-h-[420px] flex items-stretch rounded-2xl mx-4 md:mx-8 mb-12">
      {/* Left: Text panel with diagonal clip */}
      <div
        className="relative z-10 w-full md:w-[55%] bg-background flex items-center rounded-l-2xl"
        style={{
          clipPath: "polygon(0 0, 100% 0, 85% 100%, 0 100%)",
        }}
      >
        <div className="w-full py-12 md:py-16 pr-16 md:pr-24" style={{ paddingLeft: SPACING.sectionPx, maxWidth: "700px" }}>
          <ScrollReveal>
            <p style={{ ...TYPE.label, color: "hsl(var(--muted-foreground))", marginBottom: "8px" }}>
              API AND FDF
            </p>
            <div className="w-16 h-px bg-border mb-6" />
            <h2 style={{ ...TYPE.h2, color: "hsl(var(--foreground))", marginBottom: SPACING.headingToSub }}>
              Explore our API's
            </h2>
            <p style={{ ...TYPE.body, color: "hsl(var(--muted-foreground))", marginBottom: SPACING.subToCta }} className="max-w-lg">
              Check out a list of active pharmaceutical ingredients (APIs) and Finished Dosage Forms (FDFs) we offer
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors"
              style={TYPE.button}
            >
              <span>Learn More</span>
            </a>
          </ScrollReveal>
        </div>
      </div>

      {/* Right: Image */}
      <div className="hidden md:block absolute right-0 top-0 bottom-0 w-[55%]">
        <img
          src={apiFdfImg}
          alt="Pharmaceutical API laboratory"
          className="w-full h-full object-cover"
          loading="lazy"
          width={1024}
          height={576}
          decoding="async"
        />
      </div>

      {/* Mobile fallback bg */}
      <div className="md:hidden absolute inset-0 -z-10">
        <img
          src={apiFdfImg}
          alt=""
          className="w-full h-full object-cover opacity-20"
          loading="lazy"
          aria-hidden="true"
        />
      </div>
    </section>
  );
};

export default ProductsBanner;
