import ScrollReveal from "@/components/ScrollReveal";
import microbialChemBioImg from "@/assets/microbial-chemical-vs-bio.png";
import microbialAntibodiesImg from "@/assets/microbial-antibodies.jpg";
import microbialFacilitiesImg from "@/assets/microbial-facilities.jpg";
import microbialCapabilitiesImg from "@/assets/microbial-capabilities.jpg";

const downstreamServices = [
  "Bulk lyophilization capabilities of proteins and peptides",
  "Proven track record in 'downstream-processing-only' services",
  "Intermediate materials that need further purification and/or conjugation",
  "Hormones or other recombinant proteins like virus-like particles from inclusion bodies or biomass",
  "Peptides from inclusion bodies, biomass, and those manufactured in solid-phase chemistry",
  "Large-scale conjugation services like PEGylation, PASylation, or HESylation for half-life extension",
];

const MicrobialScience = () => {
  return (
    <>
      {/* Why Microbial */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <ScrollReveal>
            <div className="max-w-4xl mb-10">
              <p className="text-xs uppercase tracking-[0.2em] text-primary font-bold mb-4">
                Why Microbial
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight">
                Microbial Manufacturing — <em className="italic">The Smarter Choice</em>
              </h2>
              <p className="text-base md:text-lg text-muted-foreground mt-6 leading-relaxed">
                Microbial expression systems offer significant advantages over traditional chemical synthesis and mammalian cell culture for producing complex biological molecules. Our E. coli and yeast platforms deliver higher yields, faster timelines, and lower manufacturing costs — without compromising quality.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="rounded-xl overflow-hidden border border-border/40 shadow-sm mt-6">
              <img
                src={microbialChemBioImg}
                alt="Comparison of chemical synthesis versus biological manufacturing approaches"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="mt-16 grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  From Antibodies to Complex Proteins
                </h3>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Our microbial platforms are engineered to produce a wide range of molecule formats — from single-domain antibodies and nanobodies to complex multi-domain fusion proteins. With decades of experience in E. coli and yeast expression, we have optimized our systems for high-titer production, efficient refolding, and scalable purification.
                </p>
              </div>
              <div className="rounded-xl overflow-hidden border border-border/40 shadow-sm">
                <img
                  src={microbialAntibodiesImg}
                  alt="Microbial antibody production and complex protein manufacturing"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>


      {/* cGMP Facilities */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <ScrollReveal>
            <div className="max-w-4xl mb-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight">
                Our cGMP Facilities — Quality and Reliability
              </h2>
              <p className="text-base md:text-lg text-muted-foreground mt-6 leading-relaxed">
                Our microbial manufacturing is comprised of two fermentation facilities, allowing for flexibility on cGMP scales from 200 L up to 4,500 L working volume — designed for high cell density processes. Both fermentation facilities are multi-licensed, with a strong manufacturing track record for global markets. Our extensive microbial downstream purification capabilities can handle a great variety of molecule formats, including <em>E. coli</em> and yeast systems.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="rounded-xl overflow-hidden border border-border/40 shadow-sm mt-6">
              <img
                src={microbialFacilitiesImg}
                alt="Microbial manufacturing facility capabilities including fermentation and downstream purification"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <p className="text-base md:text-lg text-muted-foreground mt-10 leading-relaxed max-w-4xl">
              At the heart of our success lies strong abilities in protein refolding, as well as large-scale soluble expression and purification. We have commercial-scale purification columns up to 1.8 m in diameter, plus special techniques (e.g., handling organic solvents, large-scale HPLC columns, bulk lyophilization) and explosion-proof facilities for hard-to-manufacture proteins and peptides. We also offer chemical modifications to prolong protein half-life, including PEGylation and albumin fusion.
            </p>
          </ScrollReveal>

          {/* Downstream Services Cards */}
          <ScrollReveal delay={0.2}>
            <div className="mt-12">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                Downstream Processing Capabilities
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {downstreamServices.map((service, i) => (
                  <div
                    key={i}
                    className="rounded-xl p-6 border border-primary/10 flex items-start gap-3"
                    style={{ backgroundColor: "#F7F6F5" }}
                  >
                    <span className="mt-1 w-2 h-2 rounded-full bg-primary shrink-0" />
                    <p className="text-sm font-medium text-foreground leading-relaxed">{service}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Advanced Technology for Faster Delivery */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <ScrollReveal>
            <div className="max-w-4xl mb-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight">
                Advanced Technology for Faster Delivery
              </h2>
              <p className="text-base md:text-lg text-muted-foreground mt-6 leading-relaxed">
                Once the molecule format has been defined, our highly automated, high-throughput platforms can shorten time to clinical trial. Our SMART PROCESS DESIGN tool uses machine learning or mechanistic process models to simulate and optimize manufacturing processes, helping us to predict the right process parameters for optimal output.
              </p>
              <p className="text-base md:text-lg text-muted-foreground mt-4 leading-relaxed">
                Our CASPON® fusion protein system, for non-platform molecules, includes a peptide fused to the N-terminus of the protein of interest and a highly specific protease to remove the tag after purification, leaving the authentic N-terminus of the target protein. This increases product yield (up to tenfold depending on the target molecule), enhances product solubility, provides a recognition sequence for the protease, and includes a histidine stretch for platform affinity purification.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="rounded-xl overflow-hidden border border-border/40 shadow-sm mt-6">
              <img
                src={microbialCapabilitiesImg}
                alt="Microbial capabilities including E. coli and yeast platforms, high-throughput development and commercial manufacturing"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default MicrobialScience;
