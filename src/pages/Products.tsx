import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import ProductsCDMOBanner from "@/components/products/ProductsCDMOBanner";
import semaglutideImg from "@/assets/semaglutide.png";
import liraglutideImg from "@/assets/liraglutide.png";
import tirzepatideImg from "@/assets/tirzepatide.png";
import dulaglutideImg from "@/assets/dulaglutide.png";
import productsVials from "@/assets/products-vials.jpg";

const stages = [
"Technical Development",
"Manufacturing",
"Clinical Development",
"Approval Process",
"Launch"];


const products = [
{
  name: "Semaglutide",
  type: "Biosimilar Candidate",
  image: semaglutideImg,
  molecule: "Semaglutide",
  referenceProduct: "Ozempic® / Wegovy®",
  therapeuticArea: "T2DM, Obesity",
  note: "Other indications in trials: NASH, ASCVD, CKD slow Progression, PCOS (Off-Label)",
  activeStages: 4,
  gradient: "linear-gradient(90deg, #EF4444 0%, #A855F7 100%)"
},
{
  name: "Liraglutide",
  type: "Biosimilar Candidate",
  image: liraglutideImg,
  molecule: "Liraglutide",
  referenceProduct: "Victoza® / Saxenda®",
  therapeuticArea: "T2DM & Obesity",
  activeStages: 2,
  gradient: "linear-gradient(90deg, #F97316 0%, #EAB308 100%)"
},
{
  name: "Tirzepatide",
  type: "Biosimilar Candidate",
  image: tirzepatideImg,
  molecule: "Tirzepatide",
  referenceProduct: "Mounjaro® / Zepbound®",
  therapeuticArea: "T2DM & Obesity",
  activeStages: 1,
  gradient: "linear-gradient(90deg, #0EA5E9 0%, #6366F1 100%)"
},
{
  name: "Dulaglutide",
  type: "Biosimilar Candidate",
  image: dulaglutideImg,
  molecule: "Dulaglutide",
  referenceProduct: "Trulicity®",
  therapeuticArea: "T2DM",
  activeStages: 1,
  gradient: "linear-gradient(90deg, #059669 0%, #34D399 100%)"
},
{
  name: "Insulin Degludec",
  type: "Biosimilar Candidate",
  molecule: "Insulin Degludec",
  referenceProduct: "Tresiba®",
  therapeuticArea: "Type 1 & 2 Diabetes",
  activeStages: 1,
  gradient: "linear-gradient(90deg, #4C1D95 0%, #7C3AED 100%)"
},
{
  name: "iDegLira",
  type: "Biosimilar Candidate",
  molecule: "Insulin Degludec / Liraglutide",
  referenceProduct: "Xultophy®",
  therapeuticArea: "T2DM",
  activeStages: 1,
  gradient: "linear-gradient(90deg, #0E7490 0%, #3B82F6 100%)"
}];


const Products = () => {
  return (
    <div className="min-h-screen bg-background" id="products-page">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative h-[50vh] min-h-[380px] flex items-center justify-center overflow-hidden" style={{ backgroundColor: "#D5CDE8" }}>
          <img
            src={productsVials}
            alt="Pharmaceutical products"
            className="absolute inset-0 w-full h-full object-cover" />
          
          <div className="absolute inset-0 bg-footer-bg/70" />
          <div className="relative z-10 text-center px-6">
            <ScrollReveal>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-footer-foreground leading-tight">
                Our Pipeline
              </h1>
              <p className="text-base md:text-lg text-footer-foreground/80 mt-4 max-w-2xl mx-auto leading-relaxed">
                We challenge ourselves to rethink the way medicines are developed,
                and are investing now to bring more value to patients in the future.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Intro */}
        <section className="py-16 lg:py-20 bg-background">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
            <ScrollReveal>
              <p className="text-xl md:text-2xl font-semibold text-foreground max-w-4xl leading-relaxed">
                We strive for constant innovation and we are putting our passion
                and expertise to work in new therapeutic areas.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Product Cards - Stacked Sticky Scroll */}
        <div className="relative">
          {products.map((product, index) => {
            const isEven = index % 2 === 0;
            const isLast = index === products.length - 1;
            return (
              <div
                key={product.name}
                className={`${isLast ? "relative" : "sticky"}`}
                style={{
                  top: isLast ? undefined : `${80 + index * 8}px`,
                  zIndex: index + 1,
                }}
              >
                <section
                  className={`py-16 lg:py-24 ${isEven ? "bg-[#F0EFED]" : "bg-background"} rounded-t-3xl shadow-[0_-8px_30px_-12px_rgba(0,0,0,0.15)] transition-shadow`}
                  style={{ minHeight: "auto" }}
                >
                  <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
                    <ScrollReveal>
                      <div className="grid lg:grid-cols-[0.6fr_1.4fr] gap-10 lg:gap-16 items-center">
                        {/* Left: Product info */}
                        <div>
                          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-primary leading-[0.95] tracking-tight">
                            {product.name}
                          </h2>
                          <p className="text-sm md:text-base font-semibold text-primary/80 mt-1.5 italic">
                            {product.type}
                          </p>

                          <div className="mt-5 space-y-2 border-t border-border/60 pt-4">
                            <div className="flex items-baseline">
                              <span className="text-xs font-bold text-foreground w-36 shrink-0">
                                Molecule
                              </span>
                              <span className="text-xs text-muted-foreground border-l border-border/60 pl-3">
                                {product.molecule}
                              </span>
                            </div>
                            <div className="flex items-baseline">
                              <span className="text-xs font-bold text-foreground w-36 shrink-0">
                                Reference Product
                              </span>
                              <span className="text-xs text-muted-foreground border-l border-border/60 pl-3">
                                {product.referenceProduct}
                              </span>
                            </div>
                            <div className="flex items-baseline">
                              <span className="text-xs font-bold text-foreground w-36 shrink-0">
                                Therapeutic Area
                              </span>
                              <span className="text-xs text-muted-foreground border-l border-border/60 pl-3">
                                {product.therapeuticArea}
                              </span>
                            </div>
                          </div>

                          {product.note &&
                            <p className="text-[11px] text-muted-foreground/60 italic mt-3 leading-relaxed">
                              {product.note}
                            </p>
                          }
                        </div>

                        {/* Right: Stage progress */}
                        <div className="flex flex-col justify-center">
                          <div className="flex gap-[2px]">
                            {stages.map((stage, si) => {
                              const isActive = si < product.activeStages;
                              return (
                                <div
                                  key={stage}
                                  className={`flex-1 h-14 md:h-16 flex items-center justify-center transition-colors rounded-[3px]`}
                                  style={isActive
                                    ? { background: product.gradient, backgroundSize: `${stages.length * 100}% 100%`, backgroundPosition: `${(si / (stages.length - 1)) * 100}% 0%` }
                                    : undefined
                                  }
                                >
                                  <span className={`text-[10px] md:text-xs font-semibold text-center leading-tight px-1 ${isActive ? "text-white" : "text-muted-foreground"}`}>
                                    {stage}
                                  </span>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </ScrollReveal>
                  </div>
                </section>
              </div>
            );
          })}
        </div>
        <div className="py-16" />
        <ProductsCDMOBanner />
      </main>
      <Footer />
    </div>);

};

export default Products;