import ScrollReveal from "@/components/ScrollReveal";

// Gantt-style timeline data: each bar has start month, end month, label, and row
const bars = [
  { label: "VC*", startMonth: 1, endMonth: 1.5, row: 0 },
  { label: "Cell Line Development", startMonth: 2, endMonth: 4, row: 0 },
  { label: "Process Development", startMonth: 4, endMonth: 8, row: 1 },
  { label: "Non-GMP DS", startMonth: 5, endMonth: 7, row: 2 },
  { label: "DP", startMonth: 8, endMonth: 8.5, row: 2 },
  { label: "Analytical Tech Transfer", startMonth: 7, endMonth: 9, row: 3 },
  { label: "CGMP DS", startMonth: 8, endMonth: 9.5, row: 4 },
  { label: "CGMP DP", startMonth: 10, endMonth: 10.5, row: 4 },
  { label: "Regulatory Documentation", startMonth: 8, endMonth: 11, row: 5 },
];

const milestones = [
  { label: "CGMP DS\nLot Release", month: 10, row: 1 },
  { label: "CGMP DP\nLot Release", month: 11, row: 3 },
];

const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const totalMonths = 11;
const rowCount = 6;

const CDMOTimeline = () => {
  const getLeft = (month: number) => `${((month - 0.5) / (totalMonths + 0.5)) * 100}%`;
  const getWidth = (start: number, end: number) =>
    `${((end - start) / (totalMonths + 0.5)) * 100}%`;

  return (
    <section id="capacity-dashboard" className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <ScrollReveal>
          <div className="max-w-4xl mb-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight">
              Accelerated Biologics Development Timeline
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mt-4 leading-relaxed">
              11 months from CLD to IND (Investigational New Drug Application)
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          {/* Desktop Gantt chart */}
          <div className="hidden md:block mt-10">
            {/* Header bar */}
            <div className="bg-primary rounded-lg py-3 px-6 mb-6">
              <p className="text-primary-foreground font-bold text-center text-lg">
                Standard Timeline <span className="font-normal">(Months)</span>
              </p>
            </div>

            {/* Month labels */}
            <div className="relative h-8 mb-2">
              {months.map((m) => (
                <div
                  key={m}
                  className="absolute text-sm font-semibold text-foreground text-center"
                  style={{
                    left: getLeft(m),
                    transform: "translateX(-50%)",
                  }}
                >
                  {m}
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="h-px bg-primary/30 mb-4" />

            {/* Gantt rows */}
            <div className="relative" style={{ height: `${rowCount * 48 + 20}px` }}>
              {/* Grid lines */}
              {months.map((m) => (
                <div
                  key={m}
                  className="absolute top-0 bottom-0 w-px bg-border/40"
                  style={{ left: getLeft(m) }}
                />
              ))}

              {/* Bars */}
              {bars.map((bar, i) => (
                <div
                  key={i}
                  className="absolute h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center px-3 text-xs font-semibold text-foreground whitespace-nowrap overflow-hidden"
                  style={{
                    left: getLeft(bar.startMonth),
                    width: getWidth(bar.startMonth, bar.endMonth),
                    top: `${bar.row * 48}px`,
                  }}
                >
                  {bar.label}
                </div>
              ))}

              {/* Milestones */}
              {milestones.map((ms, i) => (
                <div
                  key={i}
                  className="absolute flex flex-col items-center"
                  style={{
                    left: getLeft(ms.month),
                    top: `${ms.row * 48}px`,
                    transform: "translateX(-50%)",
                  }}
                >
                  <div className="text-xs text-muted-foreground whitespace-pre-line text-center leading-tight mb-1">
                    {ms.label}
                  </div>
                  <div className="w-3 h-3 rounded-full border-2 border-primary bg-background" />
                </div>
              ))}

              {/* IND filing callout */}
              <div
                className="absolute flex flex-col items-center"
                style={{
                  left: getLeft(11),
                  top: `${2 * 48}px`,
                  transform: "translateX(-50%)",
                }}
              >
                <p className="text-xs text-primary font-semibold">VC to IND filing</p>
                <p className="text-2xl font-extrabold text-primary">11 <span className="text-sm font-semibold">months</span></p>
                <div className="w-4 h-4 rounded-full border-2 border-primary bg-background mt-1" />
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-primary/30 mt-4 mb-4" />

            <p className="text-xs text-muted-foreground">*VC: Vector Construction</p>
          </div>

          {/* Mobile: simplified list */}
          <div className="md:hidden mt-8 space-y-4">
            <div className="bg-primary rounded-lg py-3 px-6">
              <p className="text-primary-foreground font-bold text-center text-sm">
                Standard Timeline (Months)
              </p>
            </div>
            {[
              { phase: "VC*", time: "Month 1" },
              { phase: "Cell Line Development", time: "Months 2–4" },
              { phase: "Process Development", time: "Months 4–8" },
              { phase: "Non-GMP DS", time: "Months 5–7" },
              { phase: "Analytical Tech Transfer", time: "Months 7–9" },
              { phase: "CGMP DS", time: "Months 8–9.5" },
              { phase: "DP", time: "Month 8" },
              { phase: "CGMP DP", time: "Month 10" },
              { phase: "Regulatory Documentation", time: "Months 8–11" },
            ].map((item) => (
              <div key={item.phase} className="flex justify-between items-center bg-primary/5 rounded-lg px-5 py-3">
                <span className="text-sm font-semibold text-foreground">{item.phase}</span>
                <span className="text-xs text-primary font-bold">{item.time}</span>
              </div>
            ))}
            <div className="text-center py-4">
              <p className="text-xs text-primary font-semibold">VC to IND filing</p>
              <p className="text-3xl font-extrabold text-primary">11 <span className="text-sm">months</span></p>
            </div>
            <p className="text-xs text-muted-foreground">*VC: Vector Construction</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CDMOTimeline;
