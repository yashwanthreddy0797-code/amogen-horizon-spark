import ScrollReveal from "@/components/ScrollReveal";
import researchLabImg from "@/assets/research-lab.jpg";
import manufacturingImg from "@/assets/manufacturing.jpg";

const AboutWhatWeDo = () => {
  return (
    <section id="what-we-do" className="py-24 lg:py-32 bg-[#f0eeeb]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 space-y-24 lg:space-y-32">
        {/* Row 1: Text left, Image right */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <ScrollReveal>
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight">
                Pioneering biosimilars
              </h2>
              <p className="text-base md:text-lg text-muted-foreground mt-6 leading-relaxed">
                Biosimilars are 'new' versions of a type of medicine called biologics. These are powerful medicines made from living cells. They can transform the lives of patients with life-threatening or debilitating diseases such as cancer, diabetes and arthritis.
              </p>
              <p className="text-base md:text-lg text-muted-foreground mt-4 leading-relaxed">
                At Amogen, we are very proud to be the pioneer in this area. We started our first biosimilar development program and we were among the first companies to receive approval for a biosimilar in key global markets.
              </p>
              <a
                href="#"
                className="inline-flex items-center mt-8 px-6 py-2.5 text-sm font-semibold rounded-full border-2 border-primary text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
              >
                Learn more
              </a>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <div className="rounded-2xl overflow-hidden">
              <img
                src={researchLabImg}
                alt="Scientists working in research laboratory"
                className="w-full h-[360px] lg:h-[420px] object-cover"
                loading="lazy"
              />
            </div>
          </ScrollReveal>
        </div>

        {/* Row 2: Image left, Text right */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <ScrollReveal>
            <div className="rounded-2xl overflow-hidden lg:order-none order-last">
              <img
                src={manufacturingImg}
                alt="Manufacturing facility with quality control"
                className="w-full h-[360px] lg:h-[420px] object-cover"
                loading="lazy"
              />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight">
                High-quality generics
              </h2>
              <p className="text-base md:text-lg text-muted-foreground mt-6 leading-relaxed">
                Generic medicines contain the same active ingredients as the reference medicines, with identical quality and safety profiles.
              </p>
              <p className="text-base md:text-lg text-muted-foreground mt-4 leading-relaxed">
                With a portfolio of quality generic medicines, including an unrivalled offering of more than 50 critical generic antibiotics, we're involved in almost every major disease area.
              </p>
              <a
                href="#"
                className="inline-flex items-center mt-8 px-6 py-2.5 text-sm font-semibold rounded-full border-2 border-primary text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
              >
                Learn more
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default AboutWhatWeDo;
