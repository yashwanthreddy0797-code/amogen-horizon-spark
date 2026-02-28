import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import researchLabImg from "@/assets/research-lab.jpg";
import { CheckCircle2 } from "lucide-react";

interface BenefitCategory {
  title: string;
  items: string[];
}

const categories: BenefitCategory[] = [
  {
    title: "What are peptide biosimilars",
    items: [
      "Six weeks' paid vacation",
      "Equity / stock options",
      "RRSP, 401(k), and Pension Scheme contributions",
    ],
  },
  {
    title: "USFDA",
    items: [
      "Comprehensive medical coverage",
      "Dental and vision plans",
      "Mental health support programs",
    ],
  },
  {
    title: "EMA",
    items: [
      "Continuous learning opportunities",
      "Leadership development programs",
      "Global mobility and exchange",
    ],
  },
];

const AboutWhatWeDo = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="what-we-do" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Header */}
        <ScrollReveal>
          <p className="text-xs uppercase tracking-[0.3em] font-semibold text-muted-foreground mb-3">
            What we do
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight mb-16">
            Peptide Biosimilars
          </h2>
        </ScrollReveal>

        {/* Content grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Image */}
          <ScrollReveal>
            <div className="rounded-2xl overflow-hidden">
              <img
                src={researchLabImg}
                alt="Team working in research lab"
                className="w-full h-[380px] lg:h-[440px] object-cover"
                loading="lazy"
              />
            </div>
          </ScrollReveal>

          {/* Right: Accordion list */}
          <ScrollReveal delay={0.15}>
            <div className="flex flex-col justify-center h-full">
              {categories.map((cat, i) => {
                const isOpen = openIndex === i;
                return (
                  <div key={cat.title}>
                    {/* Gradient line for the open item */}
                    {i === 0 || isOpen ? (
                      <div
                        className={`h-[3px] w-full ${
                          isOpen
                            ? "bg-gradient-to-r from-destructive to-primary"
                            : "bg-border"
                        }`}
                      />
                    ) : (
                      <div className="h-px w-full bg-border" />
                    )}

                    <button
                      onClick={() => setOpenIndex(isOpen ? -1 : i)}
                      className="w-full text-left py-5 cursor-pointer"
                    >
                      <h3
                        className={`text-xl md:text-2xl font-bold transition-colors ${
                          isOpen ? "text-foreground" : "text-foreground/70"
                        }`}
                      >
                        {cat.title}
                      </h3>
                    </button>

                    {/* Expandable content */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        isOpen ? "max-h-60 opacity-100 pb-6" : "max-h-0 opacity-0"
                      }`}
                    >
                      <ul className="space-y-3">
                        {cat.items.map((item) => (
                          <li
                            key={item}
                            className="flex items-center gap-3 text-muted-foreground text-sm md:text-base"
                          >
                            <CheckCircle2 size={18} className="text-muted-foreground/60 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
              {/* Bottom border */}
              <div className="h-px w-full bg-border" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default AboutWhatWeDo;
