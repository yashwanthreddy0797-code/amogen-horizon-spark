import ScrollReveal from "@/components/ScrollReveal";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import rdBg from "@/assets/rd-highlights-bg.jpg";
import facilityImg from "@/assets/rd-facility.jpg";
import patientImg from "@/assets/patient-portrait.jpg";

const stats = [
  { label: "BIOSIMILAR PROGRAMS", value: "10", suffix: "+", description: "compounds, devices or indications in development individually or under collaboration or license agreement" },
  { type: "image" as const, src: facilityImg },
  { label: "PATIENT IMPACT", value: "570M", suffix: "+", description: "conditions treated across six therapeutic areas" },
  { type: "image" as const, src: patientImg },
  { label: "PIPELINE MARKET SIZE ", value: "$80B ", suffix: "", description: "new molecular entities in development" },
  { label: "CUTTING-EDGE FACILITIES", value: "9", suffix: "", description: "R&D centers and 14,000+ scientists and staff globally" },
  { label: "GLOBAL REACH", value: "375", suffix: "+", description: "clinical trials in 50+ countries" },
  { label: "INVESTMENT", value: "$10.8", suffix: "b", description: "R&D investment in 2024" },
];

const focusAreas = [
  { name: "Immunology", link: "/science" },
  { name: "Oncology", link: "/science" },
  { name: "Neuroscience", link: "/science" },
  { name: "Eye Care", link: "/science" },
  { name: "Aesthetics", link: "/science" },
  { name: "Other Specialties", link: "/science" },
];

const ProductsRDHighlights = () => {
  return (
    <>
      {/* At a Glance Header */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <ScrollReveal>
            <div className="grid md:grid-cols-2 gap-12 items-end">
              <div>
                <p className="text-xs font-bold tracking-[0.15em] uppercase text-foreground mb-4">
                  AMOGEN SCIENCE
                </p>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                  At a glance:
                </h2>
                <p className="text-2xl md:text-3xl font-semibold text-[#001965] mt-2">
                  R&D highlights
                </p>
              </div>
              <div className="md:text-right">
                <p className="text-base text-muted-foreground leading-relaxed max-w-lg md:ml-auto">
                  Our research drives scientific progress, accelerating discovery and advancement. Backed by the rigor to refine relentlessly and the resolve to stay focused to the finish.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats Bento Grid */}
      <section
        className="relative py-16 lg:py-24"
        style={{
          backgroundImage: `url(${rdBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <ScrollReveal>
            {/* Top row: 4 items */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-3">
              {stats.slice(0, 4).map((item, i) => {
                if ("type" in item && item.type === "image") {
                  return (
                    <div key={i} className="rounded-xl overflow-hidden aspect-square lg:aspect-auto lg:h-full">
                      <img
                        src={item.src}
                        alt=""
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  );
                }
                const stat = item as { label: string; value: string; suffix: string; description: string };
                return (
                  <div
                    key={i}
                    className="bg-white/90 backdrop-blur-sm rounded-xl p-6 lg:p-8 flex flex-col justify-between"
                    style={{ minHeight: "240px" }}
                  >
                    <p className="text-xs font-bold tracking-[0.1em] uppercase text-foreground">
                      {stat.label}
                    </p>
                    <div className="my-4">
                      <span className="text-5xl lg:text-6xl font-light text-[#001965]">
                        {stat.value}
                      </span>
                      <span className="text-2xl lg:text-3xl font-light text-[#001965]">
                        {stat.suffix}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {stat.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Bottom row: 4 stat items */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              {stats.slice(4).map((item, i) => {
                const stat = item as { label: string; value: string; suffix: string; description: string };
                return (
                  <div
                    key={i}
                    className="bg-white/90 backdrop-blur-sm rounded-xl p-6 lg:p-8 flex flex-col justify-between"
                    style={{ minHeight: "200px" }}
                  >
                    <p className="text-xs font-bold tracking-[0.1em] uppercase text-foreground">
                      {stat.label}
                    </p>
                    <div className="my-4">
                      <span className="text-5xl lg:text-6xl font-light text-[#001965]">
                        {stat.value}
                      </span>
                      <span className="text-2xl lg:text-3xl font-light text-[#001965]">
                        {stat.suffix}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {stat.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Core Focus Areas */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <ScrollReveal>
            <div className="grid md:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20">
              <div>
                <p className="text-xs font-bold tracking-[0.15em] uppercase text-foreground mb-6">
                  PRIORITIES
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight mb-6">
                  Core focus areas
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed">
                  We focus our expertise where we can make a meaningful difference, advancing bold research that aims to raise the standard of care and transform patient outcomes.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-x-8">
                {focusAreas.map((area) => (
                  <Link
                    key={area.name}
                    to={area.link}
                    className="flex items-center justify-between py-4 border-b border-border/60 group hover:border-[#001965] transition-colors"
                  >
                    <span className="text-sm font-semibold text-foreground group-hover:text-[#001965] transition-colors">
                      {area.name}
                    </span>
                    <ArrowRight size={16} className="text-muted-foreground group-hover:text-[#001965] transition-colors" />
                  </Link>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default ProductsRDHighlights;
