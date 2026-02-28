import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "framer-motion";
import { Send, ArrowRight } from "lucide-react";

const rfpSteps = [
  {
    step: "01",
    title: "Initial Inquiry",
    desc: "Submit your project details through our secure portal or contact our business development team. We'll assign a dedicated project lead within 48 hours.",
    timeline: "Day 1–2",
  },
  {
    step: "02",
    title: "Technical Assessment",
    desc: "Our scientific team evaluates feasibility, identifies process challenges, and prepares a preliminary scope including timeline, capacity, and regulatory pathway.",
    timeline: "Week 1–2",
  },
  {
    step: "03",
    title: "Proposal & Alignment",
    desc: "Receive a detailed technical and commercial proposal. We work collaboratively to align on scope, milestones, quality agreements, and pricing structure.",
    timeline: "Week 3–4",
  },
  {
    step: "04",
    title: "Contract & Kick-off",
    desc: "Finalize MSA, quality agreements, and project plans. A cross-functional kick-off meeting launches your program with clear deliverables and governance.",
    timeline: "Week 5–6",
  },
  {
    step: "05",
    title: "Execution & Delivery",
    desc: "Your dedicated project team executes the program with regular milestone reviews, transparent reporting, and proactive communication throughout.",
    timeline: "Ongoing",
  },
];

const CDMORfpProcess = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="rfp-process" className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <ScrollReveal>
          <div className="max-w-3xl mb-16">
            <p className="text-xs uppercase tracking-[0.2em] text-primary font-bold mb-4">Partner With Us</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight">
              RFP <em className="italic">Process</em>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mt-6 leading-relaxed">
              A transparent, structured engagement process designed to get your program started efficiently — from initial inquiry to project kick-off in as few as six weeks.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-16">
          <div className="space-y-2">
            {rfpSteps.map((step, i) => (
              <button
                key={step.step}
                onClick={() => setActiveStep(i)}
                className={`w-full text-left px-6 py-5 rounded-2xl transition-all duration-300 ${
                  activeStep === i
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-card text-foreground hover:bg-muted shadow-sm"
                }`}
              >
                <div className="flex items-center gap-4">
                  <span className={`text-2xl font-extrabold ${activeStep === i ? "text-primary-foreground/60" : "text-primary/40"}`}>
                    {step.step}
                  </span>
                  <div>
                    <p className="font-bold text-base">{step.title}</p>
                    <p className={`text-xs mt-0.5 ${activeStep === i ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                      {step.timeline}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="flex items-start">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-card rounded-2xl p-10 shadow-sm w-full"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl font-extrabold text-primary">{rfpSteps[activeStep].step}</span>
                </div>
                <div>
                  <h3 className="text-2xl font-extrabold text-foreground">{rfpSteps[activeStep].title}</h3>
                  <p className="text-sm text-primary font-semibold">{rfpSteps[activeStep].timeline}</p>
                </div>
              </div>
              <p className="text-base text-muted-foreground leading-relaxed">{rfpSteps[activeStep].desc}</p>
            </motion.div>
          </div>
        </div>

        <ScrollReveal>
          <div className="mt-20 text-center max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-extrabold text-foreground leading-tight">Ready to start your project?</h3>
            <p className="text-base text-muted-foreground mt-4 leading-relaxed">
              Get in touch with our business development team. We'll respond within 48 hours with a dedicated project lead assigned to your inquiry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <a href="#" className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
                Submit RFP <Send size={14} />
              </a>
              <a href="#" className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold rounded-md border border-border text-foreground hover:bg-muted transition-colors">
                Contact us <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CDMORfpProcess;
