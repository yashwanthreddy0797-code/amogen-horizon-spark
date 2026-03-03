import ScrollReveal from "@/components/ScrollReveal";
import { ArrowRight } from "lucide-react";
import manufacturingImg from "@/assets/manufacturing.jpg";
import researchCloseupImg from "@/assets/research-closeup.jpg";
import patientCareImg from "@/assets/patient-care.jpg";
import { useLanguage } from "@/i18n/LanguageContext";
import { TYPE, SPACING } from "@/typography";

const AboutStats = () => {
  const { t } = useLanguage();

  const stats = [
    { category: t.aboutStats.stat1Category, value: t.aboutStats.stat1Value, label: t.aboutStats.stat1Label },
    { category: t.aboutStats.stat2Category, value: t.aboutStats.stat2Value, label: t.aboutStats.stat2Label },
    { category: t.aboutStats.stat3Category, value: t.aboutStats.stat3Value, unit: t.aboutStats.stat3Unit, label: t.aboutStats.stat3Label },
  ];

  const cards = [
    { image: manufacturingImg, title: t.aboutStats.card1Title, description: t.aboutStats.card1Desc, cta: t.aboutStats.card1Cta, link: "#" },
    { image: researchCloseupImg, title: t.aboutStats.card2Title, description: t.aboutStats.card2Desc, cta: t.aboutStats.card2Cta, link: "#" },
    { image: patientCareImg, title: t.aboutStats.card3Title, description: t.aboutStats.card3Desc, cta: t.aboutStats.card3Cta, link: "#" },
  ];

  return (
    <section className="bg-section-cream" style={{ paddingTop: SPACING.sectionPy.desktop, paddingBottom: SPACING.sectionPy.desktop }}>
      <div className="mx-auto" style={{ maxWidth: SPACING.maxWidth, paddingLeft: SPACING.sectionPx, paddingRight: SPACING.sectionPx }}>
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto">
            <p style={{ ...TYPE.label, color: "hsl(var(--muted-foreground))", marginBottom: SPACING.labelToH2 }}>{t.aboutStats.label}</p>
            <h2 style={TYPE.h2} className="text-foreground">
              {t.aboutStats.title}{" "}<em className="italic">{t.aboutStats.titleEm}</em>
            </h2>
            <p style={{ ...TYPE.body, color: "hsl(var(--muted-foreground))", marginTop: SPACING.headingToSub }}>{t.aboutStats.description}</p>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 mt-20" style={{ gap: SPACING.cardGap }}>
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.category} delay={i * 0.12}>
              <div className="bg-card rounded-2xl shadow-sm" style={{ padding: SPACING.cardPadding }}>
                <p style={{ ...TYPE.label, color: "hsl(var(--primary))", marginBottom: SPACING.labelToH2 }}>{stat.category}</p>
                <span style={{ ...TYPE.display, fontSize: "clamp(48px, 6vw, 72px)", color: "hsl(var(--primary))" }}>
                  {stat.value}
                  {stat.unit && <span style={{ ...TYPE.h2, fontSize: "clamp(20px, 3vw, 36px)" }}> {stat.unit}</span>}
                </span>
                <p style={{ ...TYPE.bodySm, color: "hsl(var(--muted-foreground))", marginTop: "12px" }}>{stat.label}</p>
                <a href="#" className="inline-flex items-center gap-1.5 text-primary hover:underline mt-4" style={{ ...TYPE.bodySm, fontWeight: 600 }}>
                  {t.aboutStats.learnMore} <span>→</span>
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <div className="grid md:grid-cols-3 mt-16" style={{ gap: SPACING.cardGap }}>
          {cards.map((card, i) => (
            <ScrollReveal key={card.title} delay={i * 0.1}>
              <div className="flex flex-col">
                <div className="rounded-2xl overflow-hidden mb-6">
                  <img src={card.image} alt={card.title} className="w-full h-[240px] md:h-[260px] object-cover" loading="lazy" />
                </div>
                <h3 style={TYPE.h3} className="text-foreground mb-3">{card.title}</h3>
                <p style={{ ...TYPE.bodySm, color: "hsl(var(--muted-foreground))" }} className="mb-4 flex-1">{card.description}</p>
                <a href={card.link} className="inline-flex items-center gap-1.5 text-primary hover:underline" style={{ ...TYPE.bodySm, fontWeight: 600 }}>
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
