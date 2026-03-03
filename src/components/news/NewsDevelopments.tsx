import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import scienceResearch from "@/assets/science-research.jpg";
import manufacturing from "@/assets/manufacturing.jpg";
import rdHero from "@/assets/rd-hero.jpg";
import { TYPE, SPACING } from "@/typography";

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
  description: "Discover frequently asked and common questions about AMG-S01, AMOGEN's semaglutide biosimilar candidate currently in Phase III clinical trials for type 2 diabetes and obesity.",
};

const stories: Story[] = [
  { image: manufacturing, title: "Breaking Ground on AMOGEN's New Peptide Manufacturing Facility", date: "01/22/2026", description: "AMOGEN's new state-of-the-art manufacturing facility is designed to scale peptide production. Learn how this expansion supports our growing pipeline." },
  { image: rdHero, title: "AMOGEN Receives FDA Acknowledgment for Liraglutide Biosimilar IND", date: "12/15/2025", description: "The FDA has acknowledged AMOGEN's IND submission for our liraglutide biosimilar candidate, marking a key regulatory milestone." },
];

const NewsDevelopments = () =>
<section className="bg-background" style={{ paddingTop: SPACING.sectionPy.desktop, paddingBottom: SPACING.sectionPy.desktop }}>
    <div className="mx-auto" style={{ maxWidth: SPACING.maxWidth, paddingLeft: SPACING.sectionPx, paddingRight: SPACING.sectionPx }}>
      <ScrollReveal>
        <div className="text-center" style={{ marginBottom: "80px" }}>
          <p style={{ ...TYPE.label, color: "hsl(var(--foreground))", marginBottom: SPACING.labelToH2 }}>Developments</p>
          <h2 style={{ ...TYPE.h2, fontStyle: "italic" }} className="text-foreground mb-8">What we're doing</h2>
          <p style={{ ...TYPE.body, color: "hsl(var(--muted-foreground))", marginBottom: SPACING.subToCta }} className="max-w-xl mx-auto">
            Explore press releases, stories, media materials, and more.
          </p>
          <a href="#" className="inline-flex items-center gap-3 px-10 py-4 text-white rounded-full hover:opacity-90 transition-opacity" style={{ ...TYPE.button, backgroundColor: "hsl(5, 70%, 48%)" }}>
            See all stories <ArrowRight size={18} />
          </a>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <a href="#" className="group block mb-12">
          <div className="relative rounded-2xl overflow-hidden">
            <img src={featured.image} alt={featured.title} className="w-full h-[320px] md:h-[420px] object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <h3 style={{ ...TYPE.h3, color: "white" }} className="mb-3 max-w-2xl">{featured.title}</h3>
              <p style={{ ...TYPE.bodySm, color: "rgba(255,255,255,0.8)" }} className="max-w-xl mb-5 hidden md:block">{featured.description}</p>
              <span className="inline-flex items-center gap-2 text-white group-hover:gap-3 transition-all" style={{ ...TYPE.bodySm, fontWeight: 600 }}>
                Read the story <ArrowRight size={15} />
              </span>
            </div>
          </div>
        </a>
      </ScrollReveal>

      <div className="grid md:grid-cols-2" style={{ gap: SPACING.cardGap }}>
        {stories.map((story, i) =>
          <ScrollReveal key={story.title} delay={i * 0.1}>
            <a href="#" className="group block h-full">
              <div className="rounded-2xl overflow-hidden bg-card border border-border h-full flex flex-col">
                <div className="overflow-hidden">
                  <img src={story.image} alt={story.title} className="w-full h-[220px] object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
                </div>
                <div className="flex flex-col flex-1" style={{ padding: SPACING.cardPadding }}>
                  <h4 style={TYPE.h3} className="text-foreground mb-3">{story.title}</h4>
                  <p style={{ ...TYPE.meta, color: "hsl(var(--muted-foreground))", marginBottom: "12px" }}>{story.date}</p>
                  <p style={{ ...TYPE.bodySm, color: "hsl(var(--muted-foreground))" }} className="mb-5 flex-1">{story.description}</p>
                  <span className="inline-flex items-center gap-2 text-primary group-hover:gap-3 transition-all" style={{ ...TYPE.bodySm, fontWeight: 600 }}>
                    Read the story <ArrowRight size={15} />
                  </span>
                </div>
              </div>
            </a>
          </ScrollReveal>
        )}
      </div>
    </div>
  </section>;

export default NewsDevelopments;
