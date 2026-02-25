import ScrollReveal from "@/components/ScrollReveal";
import { useLanguage } from "@/i18n/LanguageContext";

/* Each stage gets a fill from 0–100. Stages: techDev, manufacturing, clinicalDev, approval */
const pipelineData = [
  { candidate: "Semaglutide", indication: "T2DM, Obesity", note: "Other indications in trials: NASH, ASCVD, CKD slow Progression, PCOS (Off-Label)", stages: [100, 100, 100, 60] },
  { candidate: "Liraglutide", indication: "T2DM & Obesity", stages: [100, 30, 0, 0] },
  { candidate: "Tirzepatide", indication: "T2DM & Obesity", stages: [60, 0, 0, 0] },
  { candidate: "Dulaglutide", indication: "T2DM", stages: [60, 0, 0, 0] },
  { candidate: "Insulin Degludec", indication: "Type 1 & 2 Diabetes", stages: [50, 0, 0, 0] },
  { candidate: "iDegLira", indication: "T2DM", stages: [30, 0, 0, 0] },
];

const PipelinePreview = () => {
  const { t } = useLanguage();

  return (
    <section id="pipeline" className="pt-14 lg:pt-20 pb-10 lg:pb-14 bg-section-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight max-w-2xl">{t.pipeline.title}</h2>
          <p className="text-lg text-white/70 mt-6 max-w-2xl leading-relaxed">{t.pipeline.description}</p>
        </ScrollReveal>

        {/* True Blue pipeline table */}
        <div className="mt-16 bg-footer-bg rounded-2xl px-8 md:px-12 py-10">
          <ScrollReveal>
            <div className="hidden lg:grid grid-cols-[1.2fr_2.5fr] gap-6 pb-4 border-b border-footer-foreground/20">
              <span className="text-xs uppercase tracking-[0.15em] text-footer-foreground/60 font-bold">{t.pipeline.program}</span>
              <div className="grid grid-cols-4 gap-4">
                <span className="text-xs uppercase tracking-[0.15em] text-footer-foreground/60 font-bold leading-tight">{t.pipeline.technicalDev}</span>
                <span className="text-xs uppercase tracking-[0.15em] text-footer-foreground/60 font-bold">{t.pipeline.manufacturing}</span>
                <span className="text-xs uppercase tracking-[0.15em] text-footer-foreground/60 font-bold leading-tight">{t.pipeline.clinicalDev}</span>
                <span className="text-xs uppercase tracking-[0.15em] text-footer-foreground/60 font-bold leading-tight">{t.pipeline.approvalProcess}</span>
              </div>
            </div>
          </ScrollReveal>
          {pipelineData.map((item, i) => (
            <ScrollReveal key={item.candidate} delay={i * 0.08}>
              <div className="grid lg:grid-cols-[1.2fr_2.5fr] gap-6 py-10 border-b border-footer-foreground/20 last:border-b-0 items-center">
                <div>
                  <span className="text-lg font-bold text-footer-foreground block">{item.candidate}</span>
                  <span className="text-sm text-footer-foreground/60 block mt-0.5">{item.indication}</span>
                  {item.note && <span className="text-xs text-footer-foreground/50 italic leading-snug block mt-1">{item.note}</span>}
                </div>
                <div className="grid grid-cols-4 gap-4 items-center">
                  {item.stages.map((fill, si) => (
                    <div key={si} className="h-[5px] bg-footer-foreground/20 rounded-full overflow-hidden">
                      {fill > 0 && (
                        <div
                          className="h-full rounded-full bg-teal-400 transition-all duration-1000"
                          style={{ width: `${fill}%` }}
                        />
                      )}
                    </div>
                  ))}
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
