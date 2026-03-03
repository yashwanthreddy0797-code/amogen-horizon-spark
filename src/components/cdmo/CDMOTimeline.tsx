import ScrollReveal from "@/components/ScrollReveal";
import { TYPE, SPACING } from "@/typography";

const bars = [
  { label: "VC*", startMonth: 1, endMonth: 1.5, row: 0 },
  { label: "Cell Line Development", startMonth: 2, endMonth: 4, row: 0 },
  { label: "Process Development", startMonth: 4, endMonth: 8, row: 1 },
  { label: "Non-GMP DS", startMonth: 5, endMonth: 7.5, row: 2 },
  { label: "DP", startMonth: 8, endMonth: 8.5, row: 2 },
  { label: "Analytical Tech Transfer", startMonth: 7, endMonth: 9, row: 3 },
  { label: "CGMP DS", startMonth: 8, endMonth: 9.5, row: 4 },
  { label: "CGMP DP", startMonth: 10, endMonth: 10.8, row: 4 },
  { label: "Regulatory Documentation", startMonth: 8, endMonth: 11, row: 5 },
];

const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const totalMonths = 12.5;
const rowCount = 6;

const CDMOTimeline = () => {
  const getLeft = (month: number) => `${(month - 0.5) / (totalMonths + 0.5) * 100}%`;

  return (
    <section id="capacity-dashboard" style={{ backgroundColor: "#F7F6F5", paddingTop: "80px", paddingBottom: "24px" }}>
      <div className="mx-auto" style={{ maxWidth: SPACING.maxWidth, paddingLeft: SPACING.sectionPx, paddingRight: SPACING.sectionPx }}>
        <ScrollReveal>
          <div className="max-w-4xl mb-6">
            <h2 style={TYPE.h2} className="text-foreground">Accelerated Biologics Development Timeline</h2>
            <p style={{ ...TYPE.body, color: "hsl(var(--muted-foreground))", marginTop: SPACING.labelToH2 }}>11 months from CLD to IND (Investigational New Drug Application)</p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="hidden md:block mt-10">
            <div className="rounded-lg py-3 px-6 mb-6" style={{ backgroundColor: "#001965" }}>
              <p style={{ ...TYPE.body, fontWeight: 600, color: "white", textAlign: "center" }}>Standard Timeline <span style={{ fontWeight: 400 }}>(Months)</span></p>
            </div>
            <div className="relative h-8 mb-2">
              {months.map((m) =>
                <div key={m} className="absolute text-center" style={{ ...TYPE.bodySm, fontWeight: 600, left: getLeft(m), transform: "translateX(-50%)" }}>{m}</div>
              )}
            </div>
            <div className="h-px bg-[#001965]/30 mb-4" />
            <div className="relative" style={{ height: `${rowCount * 48 + 20}px` }}>
              {months.map((m) => <div key={m} className="absolute top-0 bottom-0 w-px bg-border/40" style={{ left: getLeft(m) }} />)}
              {bars.map((bar, i) => {
                const left = (bar.startMonth - 0.5) / (totalMonths + 0.5) * 100;
                const width = (bar.endMonth - bar.startMonth) / (totalMonths + 0.5) * 100;
                return (
                  <div key={i} className="absolute h-9 rounded-full bg-[#001965]/8 border border-[#001965]/15 flex items-center justify-center px-4 whitespace-nowrap text-center" style={{ ...TYPE.bodySm, fontSize: "12px", fontWeight: 600, color: "#001965", left: `${left}%`, width: `max(${width}%, fit-content)`, top: `${bar.row * 48}px` }}>
                    {bar.label}
                  </div>
                );
              })}
              <div className="absolute flex flex-col items-center" style={{ left: getLeft(10.5), top: `${0.5 * 48}px`, transform: "translateX(-50%)" }}>
                <div style={{ ...TYPE.meta, fontSize: "11px", color: "#001965", opacity: 0.6 }} className="whitespace-pre-line text-center leading-tight mb-1">CGMP DS{"\n"}Lot Release</div>
                <div className="w-3.5 h-3.5 rounded-full border-2 border-[#001965] bg-white" />
              </div>
              <div className="absolute flex flex-col items-center" style={{ left: getLeft(11.5), top: `${1.5 * 48}px`, transform: "translateX(-50%)" }}>
                <p style={{ ...TYPE.meta, fontSize: "12px", color: "#001965", fontWeight: 600 }}>VC to IND filing</p>
                <p style={{ ...TYPE.h3, fontSize: "24px", color: "#001965" }}>11 <span style={{ ...TYPE.bodySm, fontWeight: 600 }}>months</span></p>
              </div>
              <div className="absolute flex flex-col items-center" style={{ left: getLeft(11.5), top: `${3.2 * 48}px`, transform: "translateX(-50%)" }}>
                <div style={{ ...TYPE.meta, fontSize: "11px", color: "#001965", opacity: 0.6 }} className="whitespace-pre-line text-center leading-tight mb-1">CGMP DP{"\n"}Lot Release</div>
                <div className="w-3.5 h-3.5 rounded-full border-2 border-[#001965] bg-white" />
              </div>
            </div>
            <div className="h-px bg-[#001965]/30 mt-4 mb-4" />
            <p style={{ ...TYPE.bodySm, fontSize: "12px", color: "hsl(var(--muted-foreground))" }}>*VC: Vector Construction</p>
          </div>

          <div className="md:hidden mt-8 space-y-4">
            <div className="rounded-lg py-3 px-6" style={{ backgroundColor: "#001965" }}>
              <p style={{ ...TYPE.bodySm, fontWeight: 600, color: "white", textAlign: "center" }}>Standard Timeline (Months)</p>
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
            ].map((item) =>
              <div key={item.phase} className="flex justify-between items-center bg-[#001965]/5 rounded-lg px-5 py-3">
                <span style={{ ...TYPE.bodySm, fontWeight: 600 }} className="text-foreground">{item.phase}</span>
                <span style={{ ...TYPE.label, color: "#001965" }}>{item.time}</span>
              </div>
            )}
            <div className="text-center py-4">
              <p style={{ ...TYPE.meta, color: "#001965", fontWeight: 600 }}>VC to IND filing</p>
              <p style={{ ...TYPE.h2, color: "#001965" }}>11 <span style={TYPE.bodySm}>months</span></p>
            </div>
            <p style={{ ...TYPE.bodySm, fontSize: "12px", color: "hsl(var(--muted-foreground))" }}>*VC: Vector Construction</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CDMOTimeline;
