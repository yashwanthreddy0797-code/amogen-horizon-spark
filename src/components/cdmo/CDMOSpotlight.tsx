import ScrollReveal from "@/components/ScrollReveal";
import facilityImg from "@/assets/facility-1.jpg";
import { ChevronRight } from "lucide-react";

const CDMOSpotlight = () => {
  return (
    <section className="py-0" style={{ backgroundColor: "#F0EFED" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 pb-16 lg:pb-24 bg-white">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row overflow-hidden rounded-sm">
            {/* Left – dark text panel */}
            <div
              className="flex flex-col justify-center px-10 py-12 md:px-14 md:py-16 lg:px-16 lg:py-20 md:w-[45%]"
              style={{ backgroundColor: "#001965" }}>
              
              <span
                className="text-xs font-bold tracking-[0.2em] uppercase mb-6"
                style={{ color: "#8B9E3C" }}>
                
                Spotlight
              </span>
              <h3 className="text-2xl md:text-3xl lg:text-[2rem] font-extrabold leading-tight text-white mb-6">
                Our site in Hyderabad, India
              </h3>
              <p className="text-sm md:text-[0.95rem] leading-relaxed text-white/80 mb-8">
                At our facility in Hyderabad, we operate flexible cell culture
                and purification trains for simultaneous large-scale
                biopharmaceutical contract manufacturing. The facility is
                dedicated to producing monoclonal antibodies, peptides, and
                other proteins from microbial and mammalian cell culture
                technology.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-white hover:text-white/80 transition-colors group">
                
                Read more
                <ChevronRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5" />
                
              </a>
            </div>

            {/* Right – image */}
            <div className="md:w-[55%] relative min-h-[280px] md:min-h-[400px]">
              <img
                src={facilityImg}
                alt="AMOGEN manufacturing facility in Hyderabad"
                className="w-full h-full object-cover"
                loading="lazy"
                width={640}
                height={448}
                decoding="async" />
              
              {/* Caption overlay */}
              <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-sm">
                <span className="text-xs text-white/90 font-medium">
                  AMOGEN Biopharma, Hyderabad, India
                </span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>);

};

export default CDMOSpotlight;