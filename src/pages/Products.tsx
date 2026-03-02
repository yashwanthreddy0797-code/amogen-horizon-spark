import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
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
  "Launch",
];

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
  },
  {
    name: "Liraglutide",
    type: "Biosimilar Candidate",
    image: liraglutideImg,
    molecule: "Liraglutide",
    referenceProduct: "Victoza® / Saxenda®",
    therapeuticArea: "T2DM & Obesity",
    activeStages: 2,
  },
  {
    name: "Tirzepatide",
    type: "Biosimilar Candidate",
    image: tirzepatideImg,
    molecule: "Tirzepatide",
    referenceProduct: "Mounjaro® / Zepbound®",
    therapeuticArea: "T2DM & Obesity",
    activeStages: 1,
  },
  {
    name: "Dulaglutide",
    type: "Biosimilar Candidate",
    image: dulaglutideImg,
    molecule: "Dulaglutide",
    referenceProduct: "Trulicity®",
    therapeuticArea: "T2DM",
    activeStages: 1,
  },
  {
    name: "Insulin Degludec",
    type: "Biosimilar Candidate",
    molecule: "Insulin Degludec",
    referenceProduct: "Tresiba®",
    therapeuticArea: "Type 1 & 2 Diabetes",
    activeStages: 1,
  },
  {
    name: "iDegLira",
    type: "Biosimilar Candidate",
    molecule: "Insulin Degludec / Liraglutide",
    referenceProduct: "Xultophy®",
    therapeuticArea: "T2DM",
    activeStages: 1,
  },
];

const Products = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative h-[50vh] min-h-[380px] flex items-center justify-center overflow-hidden">
          <img
            src={productsVials}
            alt="Pharmaceutical products"
            className="absolute inset-0 w-full h-full object-cover"
          />
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

        {/* Product Cards */}
        {products.map((product, index) => {
          const isEven = index % 2 === 0;
          return (
            <section
              key={product.name}
              className={`py-16 lg:py-20 ${isEven ? "bg-section-cream" : "bg-background"}`}
            >
              <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
                <ScrollReveal>
                  <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-16 items-start">
                    {/* Left: Product info */}
                    <div>
                      <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary leading-tight">
                        {product.name}
                      </h2>
                      <p className="text-sm font-bold text-primary/70 mt-1 uppercase tracking-wide">
                        {product.type}
                      </p>

                      <div className="mt-8 space-y-4 border-t border-border pt-6">
                        <div className="flex gap-4">
                          <span className="text-sm font-semibold text-foreground w-40 shrink-0">
                            Molecule
                          </span>
                          <span className="text-sm text-primary font-medium">
                            {product.molecule}
                          </span>
                        </div>
                        <div className="flex gap-4">
                          <span className="text-sm font-semibold text-foreground w-40 shrink-0">
                            Reference Product
                          </span>
                          <span className="text-sm text-muted-foreground">
                            {product.referenceProduct}
                          </span>
                        </div>
                        <div className="flex gap-4">
                          <span className="text-sm font-semibold text-foreground w-40 shrink-0">
                            Therapeutic Area
                          </span>
                          <span className="text-sm text-muted-foreground">
                            {product.therapeuticArea}
                          </span>
                        </div>
                      </div>

                      {product.note && (
                        <p className="text-xs text-muted-foreground/70 italic mt-4 leading-relaxed">
                          {product.note}
                        </p>
                      )}

                      {product.image && (
                        <div className="mt-8 flex justify-center lg:justify-start">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="h-28 md:h-36 object-contain"
                            loading="lazy"
                          />
                        </div>
                      )}
                    </div>

                    {/* Right: Stage progress */}
                    <div className="flex flex-col justify-center">
                      <div className="flex gap-1 md:gap-2">
                        {stages.map((stage, si) => {
                          const isActive = si < product.activeStages;
                          return (
                            <div key={stage} className="flex-1 flex flex-col items-center gap-2">
                              <div
                                className={`w-full h-12 md:h-14 rounded-md flex items-center justify-center transition-colors ${
                                  isActive
                                    ? "bg-primary text-primary-foreground"
                                    : "bg-muted text-muted-foreground"
                                }`}
                              >
                                <span className="text-[10px] md:text-xs font-semibold text-center leading-tight px-1">
                                  {stage}
                                </span>
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      {/* Progress connector line */}
                      <div className="relative mt-4 mx-2">
                        <div className="h-1 bg-muted rounded-full" />
                        <div
                          className="absolute top-0 left-0 h-1 bg-primary rounded-full transition-all duration-700"
                          style={{
                            width: `${(product.activeStages / stages.length) * 100}%`,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </section>
          );
        })}
      </main>
      <Footer />
    </div>
  );
};

export default Products;
