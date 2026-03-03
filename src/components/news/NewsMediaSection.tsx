import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { TYPE, SPACING } from "@/typography";

const NewsMediaSection = () => (
  <section className="bg-background" style={{ paddingTop: SPACING.sectionPy.desktop, paddingBottom: SPACING.sectionPy.desktop }}>
    <div className="mx-auto" style={{ maxWidth: SPACING.maxWidth, paddingLeft: SPACING.sectionPx, paddingRight: SPACING.sectionPx }}>
      <ScrollReveal>
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p style={{ ...TYPE.label, color: "hsl(var(--muted-foreground))", marginBottom: SPACING.labelToH2 }}>Media</p>
          <h2 style={{ ...TYPE.h2, fontStyle: "italic" }} className="text-foreground">Brand & media resources</h2>
          <p style={{ ...TYPE.body, color: "hsl(var(--muted-foreground))", marginTop: SPACING.headingToSub }}>
            Access a variety of multimedia materials—including fact sheets, infographics, photos, and more—to support stories in development.
          </p>
          <a href="#" className="inline-flex items-center gap-2 mt-6 text-primary hover:gap-3 transition-all" style={{ ...TYPE.bodySm, fontWeight: 600 }}>
            Explore media resources <ArrowRight size={16} />
          </a>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default NewsMediaSection;
