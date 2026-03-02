import ScrollReveal from "@/components/ScrollReveal";
import { FlaskConical, Factory, Cpu, Microscope, ShieldCheck, Beaker } from "lucide-react";
import microbialChemBioImg from "@/assets/microbial-chemical-vs-bio.png";
import microbialAntibodiesImg from "@/assets/microbial-antibodies.jpg";
import microbialFacilitiesImg from "@/assets/microbial-facilities.jpg";
import microbialCapabilitiesImg from "@/assets/microbial-capabilities.jpg";
import microbialThoughtLeadershipImg from "@/assets/microbial-thought-leadership.jpg";

const idealPartnerPoints = [
{
  icon: FlaskConical,
  text: "Proven technical expertise and in-house capabilities for diverse molecule formats manufactured in E. coli and yeast systems."
},
{
  icon: Factory,
  text: "Collaboration partner for sustainable late-stage and commercial manufacturing from our microbial facilities."
},
{
  icon: ShieldCheck,
  text: "Long-standing experience with a track record of 20 microbial commercial products brought to the market together with our partners."
},
{
  icon: Beaker,
  text: "Microbial capabilities reflect global market: 300 L and 2 × 6,000 L for commercial microbial manufacturing."
},
{
  icon: Cpu,
  text: "Digital Twin and Artificial Intelligence for fast transfers and process optimization."
},
{
  icon: Microscope,
  text: "All analytical methods in-house: Microbiology, Cell & Molecular Biology, Raw Material Testing, TOC & Photometry, Chromatography and Virology."
}];


const downstreamServices = [
"Bulk lyophilization capabilities of proteins and peptides",
"Proven track record in 'downstream-processing-only' services",
"Intermediate materials that need further purification and/or conjugation",
"Hormones or other recombinant proteins like virus-like particles from inclusion bodies or biomass",
"Peptides from inclusion bodies, biomass, and those manufactured in solid-phase chemistry",
"Large-scale conjugation services like PEGylation, PASylation, or HESylation for half-life extension"];


const CDMOMicrobialExpertise = () => {
  return (
    <>
      {/* Section 1: Expertise and Excellence */}
      























      {/* Section 5: Thought Leadership */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <ScrollReveal>
            <div className="max-w-3xl mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground leading-tight">
                Microbial Thought Leadership
              </h2>
              <p className="text-sm md:text-base text-muted-foreground mt-4 leading-relaxed">
                We are proud to be one of the thought leaders in the microbial technology space. Take a look at our featured expert content pieces on microbial or adjacent topics.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="rounded-2xl overflow-hidden mt-6" style={{ backgroundColor: "#001965" }}>
              <div className="grid md:grid-cols-2">
                {/* Left: Image */}
                <div className="h-64 md:h-auto">
                  <img
                    src={microbialThoughtLeadershipImg}
                    alt="Laboratory expert examining vials"
                    className="w-full h-full object-cover"
                    loading="lazy" />
                </div>

                {/* Right: Featured content */}
                <div className="p-8 md:p-10 lg:p-12 flex flex-col justify-center">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-6">
                    Featured Expert Content
                  </h3>

                  <div className="space-y-8">
                    <div>
                      <p className="text-sm md:text-base text-white/80 leading-relaxed">
                        Advancements in microbial manufacturing of biopharmaceuticals
                      </p>
                      <button className="mt-3 inline-flex items-center gap-1 text-sm font-semibold px-5 py-2 rounded-md transition-colors bg-primary-foreground text-accent">
                        Read more &gt;
                      </button>
                    </div>

                    <div>
                      <p className="text-sm md:text-base text-white/80 leading-relaxed">
                        Setting the standard with plasmid DNA production
                      </p>
                      <button className="mt-3 inline-flex items-center gap-1 text-sm font-semibold px-5 py-2 rounded-md transition-colors bg-primary-foreground text-accent">
                        Read more &gt;
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 6: An Ideal Partner */}
      
































    </>);

};

export default CDMOMicrobialExpertise;