import ScrollReveal from "@/components/ScrollReveal";

// Gantt-style timeline data: each bar has start month, end month, label, and row
const bars = [
{ label: "VC*", startMonth: 1, endMonth: 1.5, row: 0 },
{ label: "Cell Line Development", startMonth: 2, endMonth: 4, row: 0 },
{ label: "Process Development", startMonth: 4, endMonth: 8, row: 1 },
{ label: "Non-GMP DS", startMonth: 5, endMonth: 7.5, row: 2 },
{ label: "DP", startMonth: 8, endMonth: 8.5, row: 2 },
{ label: "Analytical Tech Transfer", startMonth: 7, endMonth: 9, row: 3 },
{ label: "CGMP DS", startMonth: 8, endMonth: 9.5, row: 4 },
{ label: "CGMP DP", startMonth: 10, endMonth: 10.8, row: 4 },
{ label: "Regulatory Documentation", startMonth: 8, endMonth: 11, row: 5 }];


const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const totalMonths = 12.5;
const rowCount = 6;

const CDMOTimeline = () => {
  const getLeft = (month: number) => `${(month - 0.5) / (totalMonths + 0.5) * 100}%`;
  const getWidth = (start: number, end: number) =>
  `${(end - start) / (totalMonths + 0.5) * 100}%`;

  return (
    <section id="capacity-dashboard" className="py-20 lg:py-[25px]" style={{ backgroundColor: "#F7F6F5" }}>
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
            <div className="rounded-lg py-3 px-6 mb-6" style={{ backgroundColor: "#001965" }}>
              <p className="text-white font-bold text-center text-lg">
                Standard Timeline <span className="font-normal">(Months)</span>
              </p>
            </div>

            {/* Month labels */}
            <div className="relative h-8 mb-2">
              {months.map((m) =>
              <div
                key={m}
                className="absolute text-sm font-semibold text-foreground text-center"
                style={{
                  left: getLeft(m),
                  transform: "translateX(-50%)"
                }}>

                  {m}
                </div>
              )}
            </div>

            {/* Divider */}
            <div className="h-px bg-[#001965]/30 mb-4" />

            {/* Gantt rows */}
            <div className="relative" style={{ height: `${rowCount * 48 + 20}px` }}>
              {/* Grid lines */}
              {months.map((m) =>
              <div
                key={m}
                className="absolute top-0 bottom-0 w-px bg-border/40"
                style={{ left: getLeft(m) }} />

              )}

              {/* Bars */}
              {bars.map((bar, i) => {
                const left = (bar.startMonth - 0.5) / (totalMonths + 0.5) * 100;
                const width = (bar.endMonth - bar.startMonth) / (totalMonths + 0.5) * 100;
                return (
                  <div
                    key={i}
                    className="absolute h-9 rounded-full bg-[#001965]/8 border border-[#001965]/15 flex items-center justify-center px-4 text-xs font-semibold text-[#001965] whitespace-nowrap text-center"
                    style={{
                      left: `${left}%`,
                      width: `max(${width}%, fit-content)`,
                      top: `${bar.row * 48}px`
                    }}>

                    {bar.label}
                  </div>);

              })}

              {/* CGMP DS Lot Release */}
              <div
                className="absolute flex flex-col items-center"
                style={{
                  left: getLeft(10.5),
                  top: `${0.5 * 48}px`,
                  transform: "translateX(-50%)"
                }}>

                <div className="text-xs text-[#001965]/60 whitespace-pre-line text-center leading-tight mb-1">
                  CGMP DS{"\n"}Lot Release
                </div>
                <div className="w-3.5 h-3.5 rounded-full border-2 border-[#001965] bg-white" />
              </div>

              {/* VC to IND filing callout */}
              <div
                className="absolute flex flex-col items-center"
                style={{
                  left: getLeft(11.5),
                  top: `${1.5 * 48}px`,
                  transform: "translateX(-50%)"
                }}>

                <p className="text-xs text-[#001965] font-semibold">VC to IND filing</p>
                <p className="text-2xl font-semibold text-[#001965]">11 <span className="text-sm font-semibold">months</span></p>
              </div>

              {/* CGMP DP Lot Release */}
              <div
                className="absolute flex flex-col items-center"
                style={{
                  left: getLeft(11.5),
                  top: `${3.2 * 48}px`,
                  transform: "translateX(-50%)"
                }}>

                <div className="text-xs text-[#001965]/60 whitespace-pre-line text-center leading-tight mb-1">
                  CGMP DP{"\n"}Lot Release
                </div>
                <div className="w-3.5 h-3.5 rounded-full border-2 border-[#001965] bg-white" />
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-[#001965]/30 mt-4 mb-4" />

            <p className="text-xs text-muted-foreground">*VC: Vector Construction</p>
          </div>

          {/* Mobile: simplified list */}
          <div className="md:hidden mt-8 space-y-4">
            <div className="rounded-lg py-3 px-6" style={{ backgroundColor: "#001965" }}>
              <p className="text-white font-bold text-center text-sm">
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
            { phase: "Regulatory Documentation", time: "Months 8–11" }].
            map((item) =>
            <div key={item.phase} className="flex justify-between items-center bg-[#001965]/5 rounded-lg px-5 py-3">
                <span className="text-sm font-semibold text-foreground">{item.phase}</span>
                <span className="text-xs text-[#001965] font-bold">{item.time}</span>
              </div>
            )}
            <div className="text-center py-4">
              <p className="text-xs text-[#001965] font-semibold">VC to IND filing</p>
              <p className="text-3xl font-semibold text-[#001965]">11 <span className="text-sm">months</span></p>
            </div>
            <p className="text-xs text-muted-foreground">*VC: Vector Construction</p>
          </div>
        </ScrollReveal>
      </div>
    </section>);

};

export default CDMOTimeline;