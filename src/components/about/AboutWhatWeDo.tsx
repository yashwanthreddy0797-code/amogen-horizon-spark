import ScrollReveal from "@/components/ScrollReveal";
import { TYPE, SPACING } from "@/typography";

const categories = [
  {
    tag: "GLP-1 AGONISTS",
    molecules: ["Semaglutide · Liraglutide", "Tirzepatide · Dulaglutide"],
    method: "Fermentation + Chemical Ligation",
  },
  {
    tag: "INSULIN ANALOGS",
    molecules: ["Insulin Degludec", "Insulin Aspart", "Insulin Degludec + Aspart"],
    method: "Recombinant DNA Fermentation",
  },
  {
    tag: "IMMUNOLOGY",
    molecules: ["Certolizumab", "Anakinra"],
    method: "Recombinant DNA Fermentation",
  },
];

const markets = ["CDSCO (India)", "EMA", "US FDA", "GCC", "ASEAN"];

const AboutWhatWeDo = () => {
  return (
    <section id="what-we-do" className="bg-background" style={{ paddingTop: SPACING.sectionPy.desktop, paddingBottom: SPACING.sectionPy.desktop }}>
      <div className="mx-auto" style={{ maxWidth: SPACING.maxWidth, paddingLeft: SPACING.sectionPx, paddingRight: SPACING.sectionPx }}>
        {/* Header */}
        <ScrollReveal>
          <p style={{ ...TYPE.label, color: "hsl(var(--primary))", marginBottom: SPACING.labelToH2 }}>What We Do</p>
          <h2 style={TYPE.h2} className="text-foreground">Peptide and Biologic Biosimilars</h2>
        </ScrollReveal>

        {/* Body copy */}
        <ScrollReveal delay={0.1}>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 mt-10">
            <p style={{ ...TYPE.body, color: "hsl(var(--muted-foreground))" }}>
              Biosimilars are highly similar versions of approved biologic medicines — developed once the innovator's patent expires. Unlike small molecule generics, biosimilars require full analytical characterisation, pre-clinical development, and regulatory approval to demonstrate equivalence to the reference product.
            </p>
            <p style={{ ...TYPE.body, color: "hsl(var(--muted-foreground))" }}>
              Amogen develops biosimilars across three molecule classes — each requiring a different manufacturing approach, and each underserved in the markets we target.
            </p>
          </div>
        </ScrollReveal>

        {/* Category cards */}
        <div className="grid md:grid-cols-3 mt-16" style={{ gap: SPACING.cardGap }}>
          {categories.map((cat, i) => (
            <ScrollReveal key={cat.tag} delay={i * 0.1}>
              <div
                className="rounded-2xl border border-border bg-card flex flex-col justify-between"
                style={{ padding: SPACING.cardPadding, minHeight: "260px" }}
              >
                <div>
                  <p style={{ ...TYPE.label, color: "hsl(var(--primary))", marginBottom: "20px" }}>{cat.tag}</p>
                  <div className="space-y-1">
                    {cat.molecules.map((m) => (
                      <p key={m} style={{ ...TYPE.body, fontWeight: 500 }} className="text-foreground">{m}</p>
                    ))}
                  </div>
                </div>
                <div className="mt-8 pt-5 border-t border-border">
                  <p style={{ ...TYPE.bodySm, color: "hsl(var(--muted-foreground))" }}>{cat.method}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Regulatory markets */}
        <ScrollReveal delay={0.2}>
          <div className="mt-12 flex flex-wrap items-center gap-3">
            <span style={{ ...TYPE.label, color: "hsl(var(--muted-foreground))" }}>Target regulatory markets:</span>
            {markets.map((m, i) => (
              <span key={m} style={{ ...TYPE.bodySm, color: "hsl(var(--foreground))", fontWeight: 500 }}>
                {m}{i < markets.length - 1 && <span className="ml-3 text-border">·</span>}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default AboutWhatWeDo;