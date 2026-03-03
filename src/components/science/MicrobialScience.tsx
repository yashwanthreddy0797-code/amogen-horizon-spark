import ScrollReveal from "@/components/ScrollReveal";
import microbialChemBioImg from "@/assets/microbial-chemical-vs-bio.png";
import microbialAntibodiesImg from "@/assets/microbial-antibodies.jpg";
import microbialFacilitiesImg from "@/assets/microbial-facilities.jpg";
import microbialCapabilitiesImg from "@/assets/microbial-capabilities.jpg";
import { TYPE, SPACING } from "@/typography";

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
      <section className="bg-white" style={{ paddingTop: SPACING.sectionPy.desktop, paddingBottom: SPACING.sectionPy.desktop }}>
        <div className="mx-auto" style={{ maxWidth: SPACING.maxWidth, paddingLeft: SPACING.sectionPx, paddingRight: SPACING.sectionPx }}>
          <ScrollReveal>
            <div className="max-w-4xl mb-10">
              <p style={{ ...TYPE.label, color: "hsl(var(--primary))", marginBottom: SPACING.labelToH2 }}>Why Microbial</p>
              <h2 style={TYPE.h2} className="text-foreground">Microbial Manufacturing — <em className="italic">The Smarter Choice</em></h2>
              <p style={{ ...TYPE.body, color: "hsl(var(--muted-foreground))", marginTop: SPACING.headingToSub }}>
                Microbial expression systems offer significant advantages over traditional chemical synthesis and mammalian cell culture for producing complex biological molecules. Our E. coli and yeast platforms deliver higher yields, faster timelines, and lower manufacturing costs — without compromising quality.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="rounded-xl overflow-hidden border border-border/40 shadow-sm mt-6">
              <img src={microbialChemBioImg} alt="Comparison of chemical synthesis versus biological manufacturing approaches" className="w-full h-auto object-cover" loading="lazy" />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <div className="mt-16 grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 style={TYPE.h3} className="text-foreground mb-4">From Antibodies to Complex Proteins</h3>
                <p style={{ ...TYPE.body, color: "hsl(var(--muted-foreground))" }}>
                  Our microbial platforms are engineered to produce a wide range of molecule formats — from single-domain antibodies and nanobodies to complex multi-domain fusion proteins. With decades of experience in E. coli and yeast expression, we have optimized our systems for high-titer production, efficient refolding, and scalable purification.
                </p>
              </div>
              <div className="rounded-xl overflow-hidden border border-border/40 shadow-sm">
                <img src={microbialAntibodiesImg} alt="Microbial antibody production" className="w-full h-auto object-cover" loading="lazy" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-background" style={{ paddingTop: SPACING.sectionPy.desktop, paddingBottom: SPACING.sectionPy.desktop }}>
        <div className="mx-auto" style={{ maxWidth: SPACING.maxWidth, paddingLeft: SPACING.sectionPx, paddingRight: SPACING.sectionPx }}>
          <ScrollReveal>
            <div className="max-w-4xl mb-10">
              <h2 style={TYPE.h2} className="text-foreground">Our cGMP Facilities — Quality and Reliability</h2>
              <p style={{ ...TYPE.body, color: "hsl(var(--muted-foreground))", marginTop: SPACING.headingToSub }}>
                Our microbial manufacturing is comprised of two fermentation facilities, allowing for flexibility on cGMP scales from 200 L up to 4,500 L working volume — designed for high cell density processes.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="rounded-xl overflow-hidden border border-border/40 shadow-sm mt-6">
              <img src={microbialFacilitiesImg} alt="Microbial manufacturing facility" className="w-full h-auto object-cover" loading="lazy" />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p style={{ ...TYPE.body, color: "hsl(var(--muted-foreground))", marginTop: "40px" }} className="max-w-4xl">
              At the heart of our success lies strong abilities in protein refolding, as well as large-scale soluble expression and purification. We have commercial-scale purification columns up to 1.8 m in diameter, plus special techniques and explosion-proof facilities for hard-to-manufacture proteins and peptides.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="mt-12">
              <h3 style={{ ...TYPE.h3, marginBottom: "32px" }} className="text-foreground">Downstream Processing Capabilities</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3" style={{ gap: "16px" }}>
                {downstreamServices.map((service, i) => (
                  <div key={i} className="rounded-xl p-6 border border-primary/10 flex items-start gap-3" style={{ backgroundColor: "#F7F6F5" }}>
                    <span className="mt-1 w-2 h-2 rounded-full bg-primary shrink-0" />
                    <p style={{ ...TYPE.bodySm, fontWeight: 500 }} className="text-foreground">{service}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-white" style={{ paddingTop: SPACING.sectionPy.desktop, paddingBottom: SPACING.sectionPy.desktop }}>
        <div className="mx-auto" style={{ maxWidth: SPACING.maxWidth, paddingLeft: SPACING.sectionPx, paddingRight: SPACING.sectionPx }}>
          <ScrollReveal>
            <div className="max-w-4xl mb-10">
              <h2 style={TYPE.h2} className="text-foreground">Advanced Technology for Faster Delivery</h2>
              <p style={{ ...TYPE.body, color: "hsl(var(--muted-foreground))", marginTop: SPACING.headingToSub }}>
                Once the molecule format has been defined, our highly automated, high-throughput platforms can shorten time to clinical trial. Our SMART PROCESS DESIGN tool uses machine learning or mechanistic process models to simulate and optimize manufacturing processes.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="rounded-xl overflow-hidden border border-border/40 shadow-sm mt-6">
              <img src={microbialCapabilitiesImg} alt="Microbial capabilities" className="w-full h-auto object-cover" loading="lazy" />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default MicrobialScience;
