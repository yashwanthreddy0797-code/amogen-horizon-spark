import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import scienceResearch from "@/assets/science-research.jpg";
import manufacturing from "@/assets/manufacturing.jpg";
import rdHero from "@/assets/rd-hero.jpg";

interface Story {
  image: string;
  title: string;
  date: string;
  description: string;
}

const featured: Story = {
  image: scienceResearch,
  title: "What to Know About AMOGEN's Semaglutide Biosimilar: AMG-S01",
  date: "02/10/2026",
  description:
    "Discover frequently asked and common questions about AMG-S01, AMOGEN's semaglutide biosimilar candidate currently in Phase III clinical trials for type 2 diabetes and obesity.",
};

const stories: Story[] = [
  {
    image: manufacturing,
    title: "Breaking Ground on AMOGEN's New Peptide Manufacturing Facility",
    date: "01/22/2026",
    description:
      "AMOGEN's new state-of-the-art manufacturing facility is designed to scale peptide production. Learn how this expansion supports our growing pipeline.",
  },
  {
    image: rdHero,
    title: "AMOGEN Receives FDA Acknowledgment for Liraglutide Biosimilar IND",
    date: "12/15/2025",
    description:
      "The FDA has acknowledged AMOGEN's IND submission for our liraglutide biosimilar candidate, marking a key regulatory milestone.",
  },
];

const NewsDevelopments = () => (
  <section className="py-20 lg:py-28 bg-background">
    <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
      {/* Section header — centered */}
      <ScrollReveal>
        <div className="text-center mb-14">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Developments
          </p>
          <h2
            className="text-[2.5rem] md:text-[3.2rem] lg:text-[3.8rem] font-light italic leading-[1.1] text-foreground"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            What we're doing
          </h2>
          <p className="text-base md:text-lg text-muted-foreground mt-5 max-w-xl mx-auto">
            Explore press releases, stories, media materials, and more.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-primary hover:gap-3 transition-all"
          >
            See all stories <ArrowRight size={16} />
          </a>
        </div>
      </ScrollReveal>

      {/* Featured story — large card */}
      <ScrollReveal>
        <a href="#" className="group block mb-12">
          <div className="relative rounded-2xl overflow-hidden">
            <img
              src={featured.image}
              alt={featured.title}
              className="w-full h-[320px] md:h-[420px] object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <h3
                className="text-xl md:text-2xl lg:text-3xl font-semibold text-white leading-snug mb-3 max-w-2xl"
              >
                {featured.title}
              </h3>
              <p className="text-sm text-white/80 max-w-xl leading-relaxed mb-5 hidden md:block">
                {featured.description}
              </p>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-white group-hover:gap-3 transition-all">
                Read the story <ArrowRight size={15} />
              </span>
            </div>
          </div>
        </a>
      </ScrollReveal>

      {/* Two smaller story cards */}
      <div className="grid md:grid-cols-2 gap-8">
        {stories.map((story, i) => (
          <ScrollReveal key={story.title} delay={i * 0.1}>
            <a href="#" className="group block h-full">
              <div className="rounded-2xl overflow-hidden bg-card border border-border h-full flex flex-col">
                <div className="overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-[220px] object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-6 md:p-8 flex flex-col flex-1">
                  <h4 className="text-lg md:text-xl font-semibold text-foreground leading-snug mb-3">
                    {story.title}
                  </h4>
                  <p className="text-xs text-muted-foreground mb-3">{story.date}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
                    {story.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
                    Read the story <ArrowRight size={15} />
                  </span>
                </div>
              </div>
            </a>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default NewsDevelopments;
