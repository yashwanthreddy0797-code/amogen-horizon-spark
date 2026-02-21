import ScrollReveal from "@/components/ScrollReveal";
import { ArrowRight } from "lucide-react";
import manufacturingImg from "@/assets/manufacturing.jpg";
import researchCloseupImg from "@/assets/research-closeup.jpg";
import patientCareImg from "@/assets/patient-care.jpg";

const stats = [
  { category: "Technology Edge", value: "24/7", label: "proprietary fermentation platform" },
  { category: "Peptide Innovation", value: "5 +", label: "complex peptide programs" },
  { category: "Manufacturing Scale", value: "900 Kg/yr", label: "annual GLP-1 API capacity" },
];

const cards = [
  {
    image: manufacturingImg,
    title: "Medicine starts with safety",
    description:
      "Thousands of professionals work every day to make sure AMOGEN medicine is made consistently and with the highest quality. Manufacturing and quality are some of the most important parts of our process.",
    cta: "Examine our process",
    link: "#",
  },
  {
    image: researchCloseupImg,
    title: "Protect yourself from counterfeits",
    description:
      "We give you the information you need to better protect yourself against counterfeit, fake and unsafe or untested products.",
    cta: "How to spot counterfeits",
    link: "#",
  },
  {
    image: patientCareImg,
    title: "The hope of medicine for every body",
    description:
      "We may one day be able to make medicine that's tailored to an individual's biology using new treatments made from their own genetic code. See what today's research means for the medicine of tomorrow.",
    cta: "What is genetic medicine",
    link: "#",
  },
];

const AboutStats = () => {
  return (
    <section className="py-16 lg:py-20 bg-section-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Centered headline & description */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-6">
              About AMOGEN
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight">
              Our job is to put health{" "}
              <em className="italic">above all.</em>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mt-6 leading-relaxed">
              Our research focuses on developing life-changing medicines for everyone,
              regardless of their condition's prevalence or complexity. And we know our
              biggest advancements are still ahead of us.
            </p>
          </div>
        </ScrollReveal>

        {/* Stats row with top borders */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.category} delay={i * 0.12}>
              <div className="bg-card rounded-2xl p-8 shadow-sm">
                <p className="text-xs uppercase tracking-[0.15em] font-bold text-primary mb-4">
                  {stat.category}
                </p>
                <span className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-primary leading-none">
                  {stat.value}
                </span>
                <p className="text-sm md:text-base font-medium text-muted-foreground mt-3">
                  {stat.label}
                </p>
                <a href="#" className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:underline mt-4">
                  Learn more <span>→</span>
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Three editorial cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {cards.map((card, i) => (
            <ScrollReveal key={card.title} delay={i * 0.1}>
              <div className="flex flex-col">
                <div className="rounded-2xl overflow-hidden mb-6">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-[240px] md:h-[260px] object-cover"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground leading-tight mb-3">
                  {card.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                  {card.description}
                </p>
                <a
                  href={card.link}
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:underline"
                >
                  <span>{card.cta}</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutStats;
