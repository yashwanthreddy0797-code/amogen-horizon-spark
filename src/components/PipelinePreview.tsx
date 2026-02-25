import ScrollReveal from "@/components/ScrollReveal";
import { useLanguage } from "@/i18n/LanguageContext";

const pipelineData = [
  { candidate: "Semaglutide", indication: "T2DM, Obesity", note: "Other indications in trials: NASH, ASCVD, CKD slow Progression, PCOS (Off-Label)", progress: 95, color: "from-pink-500 via-purple-500 to-violet-500", accentColor: "bg-orange-500", milestone: "Clinical Phase -1", milestoneDate: "Dec-2025", strategy: "FDF + Licensing" },
  { candidate: "Liraglutide", indication: "T2DM & Obesity", progress: 75, color: "from-orange-400 via-yellow-400 to-yellow-300", accentColor: "bg-orange-500", milestone: "DMF", milestoneDate: "Dec-2025", strategy: "API + FDF" },
  { candidate: "Tirzepatide", indication: "T2DM & Obesity", progress: 50, color: "from-blue-600 via-cyan-400 to-cyan-300", accentColor: "bg-blue-500", milestone: "DMF", milestoneDate: "Q2-2026", strategy: "API only" },
  { candidate: "Dulaglutide", indication: "T2DM", progress: 50, color: "from-blue-700 via-blue-500 to-blue-400", accentColor: "bg-blue-500", milestone: "DMF", milestoneDate: "Q1-2026", strategy: "FDF + Licensing" },
  { candidate: "Insulin Degludec", indication: "Type 1 & 2 Diabetes", progress: 50, color: "from-blue-800 via-blue-500 to-indigo-400", accentColor: "bg-indigo-500", milestone: "DMF", milestoneDate: "Jan-2026", strategy: "API + FDF" },
  { candidate: "iDegLira", indication: "T2DM", progress: 50, color: "from-blue-700 via-purple-500 to-purple-400", accentColor: "bg-blue-500", milestone: "Clinical Phase -1", milestoneDate: "Q2-2026", strategy: "FDF + Licensing" },
];

const PipelinePreview = () => {
  const { t } = useLanguage();

  return (
    <section id="pipeline" className="pt-14 lg:pt-20 pb-10 lg:pb-14 bg-section-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <ScrollReveal>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight max-w-2xl">{t.pipeline.title}</h2>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl leading-relaxed">{t.pipeline.description}</p>
        </ScrollReveal>
        <div className="mt-16">
          <ScrollReveal>
            <div className="hidden lg:grid grid-cols-[1.2fr_1fr_2.5fr] gap-4 pb-4 border-b border-border">
              <span className="text-xs uppercase tracking-[0.15em] text-muted-foreground font-bold">{t.pipeline.program}</span>
              <span className="text-xs uppercase tracking-[0.15em] text-muted-foreground font-bold">{t.pipeline.indication}</span>
              <div className="grid grid-cols-4 text-center">
                <span className="text-xs uppercase tracking-[0.15em] text-muted-foreground font-bold leading-tight">{t.pipeline.technicalDev}</span>
                <span className="text-xs uppercase tracking-[0.15em] text-muted-foreground font-bold">{t.pipeline.manufacturing}</span>
                <span className="text-xs uppercase tracking-[0.15em] text-muted-foreground font-bold leading-tight">{t.pipeline.clinicalDev}</span>
                <span className="text-xs uppercase tracking-[0.15em] text-muted-foreground font-bold leading-tight">{t.pipeline.approvalProcess}</span>
              </div>
            </div>
          </ScrollReveal>
          {pipelineData.map((item, i) => (
            <ScrollReveal key={item.candidate} delay={i * 0.08}>
              <div className="grid lg:grid-cols-[1.2fr_1fr_2.5fr] gap-4 py-8 border-b border-border items-center">
                <div className="flex items-start gap-3">
                  <div className={`w-1 h-full min-h-[40px] rounded-full ${item.accentColor} shrink-0 mt-1`} />
                  <div>
                    <span className="text-lg font-bold text-foreground block">{item.candidate}</span>
                    {item.note && <span className="text-xs text-muted-foreground italic leading-snug block mt-1">{item.note}</span>}
                  </div>
                </div>
                <span className="text-sm text-muted-foreground italic">{item.indication}</span>
                <div className="w-full">
                  <div className="h-3 bg-border/60 rounded-full overflow-hidden">
                    <div className={`h-full rounded-full bg-gradient-to-r ${item.color} transition-all duration-1000`} style={{ width: `${item.progress}%` }} />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PipelinePreview;
