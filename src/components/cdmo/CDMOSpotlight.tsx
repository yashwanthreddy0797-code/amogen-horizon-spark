import ScrollReveal from "@/components/ScrollReveal";
import facilityImg from "@/assets/facility-1.jpg";
import { ChevronRight } from "lucide-react";
import { TYPE, SPACING } from "@/typography";

const CDMOSpotlight = () => {
  return (
    <section className="py-0" style={{ backgroundColor: "#F0EFED" }}>
      <div className="mx-auto bg-white" style={{ maxWidth: SPACING.maxWidth, paddingLeft: SPACING.sectionPx, paddingRight: SPACING.sectionPx, paddingBottom: SPACING.sectionPy.desktop }}>
        <ScrollReveal>
          <div className="flex flex-col md:flex-row overflow-hidden rounded-sm">
            <div className="flex flex-col justify-center px-10 py-12 md:px-14 md:py-16 lg:px-16 lg:py-20 md:w-[45%]" style={{ backgroundColor: "#001965" }}>
              <span style={{ ...TYPE.label, color: "#8B9E3C", marginBottom: "24px" }}>Spotlight</span>
              <h3 style={{ ...TYPE.h3, color: "white", marginBottom: "24px" }}>Our site in Hyderabad, India</h3>
              <p style={{ ...TYPE.bodySm, color: "rgba(255,255,255,0.8)", marginBottom: "32px" }}>
                At our facility in Hyderabad, we operate flexible cell culture and purification trains for simultaneous large-scale biopharmaceutical contract manufacturing. The facility is dedicated to producing monoclonal antibodies, peptides, and other proteins from microbial and mammalian cell culture technology.
              </p>
              <a href="#" className="inline-flex items-center gap-1.5 text-white hover:text-white/80 transition-colors group" style={{ ...TYPE.bodySm, fontWeight: 600 }}>
                Read more <ChevronRight size={16} className="transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
            <div className="md:w-[55%] relative min-h-[280px] md:min-h-[400px]">
              <img src={facilityImg} alt="AMOGEN manufacturing facility in Hyderabad" className="w-full h-full object-cover" loading="lazy" />
              <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-sm">
                <span style={{ ...TYPE.meta, color: "rgba(255,255,255,0.9)" }}>AMOGEN Biopharma, Hyderabad, India</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CDMOSpotlight;
