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
  activeStages: 4
},
{
  name: "Liraglutide",
  type: "Biosimilar Candidate",
  image: liraglutideImg,
  molecule: "Liraglutide",
  referenceProduct: "Victoza® / Saxenda®",
  therapeuticArea: "T2DM & Obesity",
  activeStages: 2
},
{
  name: "Tirzepatide",
  type: "Biosimilar Candidate",
  image: tirzepatideImg,
  molecule: "Tirzepatide",
  referenceProduct: "Mounjaro® / Zepbound®",
  therapeuticArea: "T2DM & Obesity",
  activeStages: 1
},
{
  name: "Dulaglutide",
  type: "Biosimilar Candidate",
  image: dulaglutideImg,
  molecule: "Dulaglutide",
  referenceProduct: "Trulicity®",
  therapeuticArea: "T2DM",
  activeStages: 1
},
{
  name: "Insulin Degludec",
  type: "Biosimilar Candidate",
  molecule: "Insulin Degludec",
  referenceProduct: "Tresiba®",
  therapeuticArea: "Type 1 & 2 Diabetes",
  activeStages: 1
},
{
  name: "iDegLira",
  type: "Biosimilar Candidate",
  molecule: "Insulin Degludec / Liraglutide",
  referenceProduct: "Xultophy®",
  therapeuticArea: "T2DM",
  activeStages: 1
}];


const Products = () => {
  return (
    <div className="min-h-screen bg-background" id="products-page">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative h-[50vh] min-h-[380px] flex items-center justify-center overflow-hidden">
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

        {/* Product Cards */}
        {products.map((product, index) => {
          const isEven = index % 2 === 0;
          return (
            <section
              key={product.name}
              className={`py-16 lg:py-24 ${isEven ? "bg-[#F0EFED]" : "bg-background"}`}>
              
              <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
                <ScrollReveal>
                  <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-20 items-center">
                    {/* Left: Product info */}
                    <div>
                      <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-primary leading-[0.95] tracking-tight">
                        {product.name}
                      </h2>
                      <p className="text-lg md:text-xl font-semibold text-primary/80 mt-2 italic">
                        {product.type}
                      </p>

                      <div className="mt-8 space-y-3 border-t border-border/60 pt-6">
                        <div className="flex items-baseline">
                          <span className="text-sm font-bold text-foreground w-44 shrink-0">
                            Molecule
                          </span>
                          <span className="text-sm text-muted-foreground border-l border-border/60 pl-4">
                            {product.molecule}
                          </span>
                        </div>
                        <div className="flex items-baseline">
                          <span className="text-sm font-bold text-foreground w-44 shrink-0">
                            Reference Product
                          </span>
                          <span className="text-sm text-muted-foreground border-l border-border/60 pl-4">
                            {product.referenceProduct}
                          </span>
                        </div>
                        <div className="flex items-baseline">
                          <span className="text-sm font-bold text-foreground w-44 shrink-0">
                            Therapeutic Area
                          </span>
                          <span className="text-sm text-muted-foreground border-l border-border/60 pl-4">
                            {product.therapeuticArea}
                          </span>
                        </div>
                      </div>

                      {product.note &&
                        <p className="text-xs text-muted-foreground/60 italic mt-4 leading-relaxed">
                          {product.note}
                        </p>
                      }
                    </div>

                    {/* Right: Stage progress */}
                    <div className="flex flex-col justify-center">
                      <div className="flex gap-[3px]">
                        {stages.map((stage, si) => {
                          const isActive = si < product.activeStages;
                          return (
                            <div
                              key={stage}
                              className={`flex-1 h-14 md:h-16 flex items-center justify-center transition-colors rounded-[4px] ${
                                isActive
                                  ? "bg-primary text-primary-foreground"
                                  : "bg-muted text-muted-foreground"
                              }`}
                            >
                              <span className="text-xs md:text-sm font-semibold text-center leading-tight px-1">
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
            </section>);

        })}
      </main>
      <Footer />
    </div>);

};

export default Products;