import ScrollReveal from "@/components/ScrollReveal";
import collageImg from "@/assets/people-collage.jpg";

const AboutCultureWay = () => {
  return (
    <section className="py-24 lg:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary leading-[1.1] max-w-3xl">
            Our culture is built on tradition… and dedication
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="mt-16 flex justify-center">
            <div
              className="text-[140px] sm:text-[200px] md:text-[280px] lg:text-[360px] xl:text-[420px] font-black leading-[0.85] tracking-tight select-none"
              style={{
                backgroundImage: `url(${collageImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                color: "transparent",
              }}
            >
              <span className="block">Way</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default AboutCultureWay;
