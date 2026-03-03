import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "framer-motion";
import { Microscope, FlaskConical, Syringe } from "lucide-react";
import { TYPE, SPACING } from "@/typography";

const services = [
  { label: "Mammalian\ncell culture", color: "#b1d5f2", icon: Microscope, expandTitle: "Mammalian manufacturing", expandDesc: "Our mammalian cell culture capabilities include CHO and other expression systems for producing monoclonal antibodies, bispecifics, and fusion proteins at clinical and commercial scale." },
  { label: "Microbial\nfermentation", color: "#E8D44D", icon: FlaskConical, expandTitle: "Microbial manufacturing", expandDesc: "Leveraging E. coli and yeast expression systems with fermentation scales from 200 L to 4,500 L, our microbial platform delivers recombinant proteins, peptides, and antibody fragments with industry-leading speed." },
  { label: "Aseptic\nfilling", color: "#C8C2E8", icon: Syringe, expandTitle: "Aseptic filling", expandDesc: "State-of-the-art aseptic filling lines for vials, pre-filled syringes, and cartridges — fully integrated with our drug substance manufacturing for seamless tech transfer and accelerated timelines." },
];

const CDMOServicesOverview = () => {
  const [flipped, setFlipped] = useState<number | null>(null);

  return (
    <section style={{ backgroundColor: "#F0EFED", paddingTop: SPACING.sectionPy.desktop, paddingBottom: SPACING.sectionPy.desktop }}>
      <div className="mx-auto" style={{ maxWidth: SPACING.maxWidth, paddingLeft: SPACING.sectionPx, paddingRight: SPACING.sectionPx }}>
        <ScrollReveal>
          <div className="max-w-4xl mb-6">
            <h2 style={{ ...TYPE.h2, color: "#001965" }}>Bringing your biologics to life.</h2>
            <p style={{ ...TYPE.body, color: "hsl(var(--muted-foreground))", marginTop: SPACING.headingToSub }}>
              At AMOGEN, we specialize in <strong className="text-foreground">manufacturing peptide-based therapeutics</strong> as well as <strong className="text-foreground">recombinant proteins</strong>. In collaboration with our partners, we manufacture innovative therapies for some of the world's most challenging diseases.
            </p>
            <p style={{ ...TYPE.bodySm, color: "hsl(var(--muted-foreground))", marginTop: "16px" }}>Want to know more about the services we offer? Scroll down below.</p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p style={{ ...TYPE.h3, fontWeight: 600, color: "#001965", marginTop: "48px", marginBottom: "64px" }} className="max-w-4xl">
            We offer the full spectrum of contract manufacturing services for your late-stage biopharmaceutical products.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 lg:gap-12">
          {services.map((svc, i) => {
            const isFlipped = flipped === i;
            const Icon = svc.icon;
            return (
              <ScrollReveal key={i} delay={i * 0.12}>
                <div className="flex flex-col items-center">
                  <div className="relative w-[240px] h-[240px] md:w-[260px] md:h-[260px] lg:w-[300px] lg:h-[300px] cursor-pointer" style={{ perspective: "800px" }} onMouseEnter={() => setFlipped(i)} onMouseLeave={() => setFlipped(null)} onClick={() => setFlipped(isFlipped ? null : i)}>
                    <motion.div className="absolute inset-0" style={{ transformStyle: "preserve-3d" }} animate={{ rotateY: isFlipped ? 180 : 0 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
                      <div className="absolute inset-0 rounded-full flex items-center justify-center" style={{ backgroundColor: svc.color, backfaceVisibility: "hidden" }}>
                        <span style={{ ...TYPE.h3, fontWeight: 600, color: "#001965" }} className="text-center whitespace-pre-line px-6">{svc.label}</span>
                      </div>
                      <div className="absolute inset-0 rounded-full flex flex-col items-center justify-center gap-3" style={{ backgroundColor: svc.color, backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}>
                        <motion.div animate={isFlipped ? { scale: [0.8, 1.1, 1], opacity: [0, 1] } : {}} transition={{ duration: 0.5, delay: 0.2 }}>
                          <Icon size={56} strokeWidth={1.4} style={{ color: "#001965" }} />
                        </motion.div>
                        <motion.p style={{ ...TYPE.bodySm, fontWeight: 600, color: "#001965" }} className="text-center px-8" animate={isFlipped ? { opacity: [0, 1], y: [8, 0] } : {}} transition={{ duration: 0.4, delay: 0.35 }}>
                          {svc.expandDesc.slice(0, 90)}…
                        </motion.p>
                      </div>
                    </motion.div>
                  </div>
                  <div className="w-full max-w-[300px] h-px mt-6 mb-4" style={{ backgroundColor: "#001965" }} />
                  <button className="flex items-center justify-between w-full max-w-[300px] group" onClick={() => setFlipped(isFlipped ? null : i)}>
                    <span style={{ ...TYPE.bodySm, fontWeight: 600, color: "#001965" }}>{svc.expandTitle}</span>
                    <motion.svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#001965" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" animate={{ rotate: isFlipped ? 180 : 0 }} transition={{ duration: 0.3 }}><path d="M6 9l6 6 6-6" /></motion.svg>
                  </button>
                  <motion.div className="w-full max-w-[300px] overflow-hidden" initial={false} animate={{ height: isFlipped ? "auto" : 0, opacity: isFlipped ? 1 : 0 }} transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}>
                    <div className="h-px w-full mb-4" style={{ backgroundColor: "#001965" }} />
                    <p style={{ ...TYPE.bodySm, color: "hsl(var(--muted-foreground))" }} className="pb-2">{svc.expandDesc}</p>
                  </motion.div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CDMOServicesOverview;
