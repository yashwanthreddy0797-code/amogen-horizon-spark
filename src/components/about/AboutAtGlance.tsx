import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "framer-motion";

const AboutAtGlance = () => {
  return (
    <section className="py-24 lg:py-32 bg-card relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Large gradient circle — top right */}
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-[#2A918B]/20" />
        {/* Smaller accent circle — bottom left */}
        <div className="absolute -bottom-20 -left-20 w-[300px] h-[300px] rounded-full bg-[#2A918B]/15" />
        {/* Molecular / helix-inspired SVG — top right area */}
        <svg className="absolute top-16 right-12 w-64 h-64 text-[#2A918B]" viewBox="0 0 200 200" fill="none">
          <circle cx="40" cy="40" r="6" fill="currentColor" />
          <circle cx="100" cy="30" r="4" fill="currentColor" />
          <circle cx="160" cy="50" r="8" fill="currentColor" />
          <circle cx="60" cy="120" r="5" fill="currentColor" />
          <circle cx="140" cy="140" r="7" fill="currentColor" />
          <circle cx="100" cy="180" r="4" fill="currentColor" />
          <line x1="40" y1="40" x2="100" y2="30" stroke="currentColor" strokeWidth="1.5" />
          <line x1="100" y1="30" x2="160" y2="50" stroke="currentColor" strokeWidth="1.5" />
          <line x1="40" y1="40" x2="60" y2="120" stroke="currentColor" strokeWidth="1.5" />
          <line x1="160" y1="50" x2="140" y2="140" stroke="currentColor" strokeWidth="1.5" />
          <line x1="60" y1="120" x2="140" y2="140" stroke="currentColor" strokeWidth="1.5" />
          <line x1="140" y1="140" x2="100" y2="180" stroke="currentColor" strokeWidth="1.5" />
          <line x1="60" y1="120" x2="100" y2="180" stroke="currentColor" strokeWidth="1.5" />
        </svg>
        {/* Dotted grid pattern — bottom right */}
        <svg className="absolute bottom-8 right-8 w-48 h-48 text-[#2A918B]/20" viewBox="0 0 120 120" fill="currentColor">
          {[0, 1, 2, 3, 4, 5].map(row =>
            [0, 1, 2, 3, 4, 5].map(col => (
              <circle key={`${row}-${col}`} cx={10 + col * 20} cy={10 + row * 20} r="2" />
            ))
          )}
        </svg>
        {/* Subtle curved line — left side */}
        <svg className="absolute top-1/2 -left-4 w-32 h-64 -translate-y-1/2 text-[#2A918B]/20" viewBox="0 0 100 200" fill="none">
          <path d="M80 0 Q10 50 60 100 Q110 150 30 200" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        <ScrollReveal>
          <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold mb-6">
            Who We Are
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary leading-[1.1]">
            Amogen at a glance
          </h2>
          <p className="text-base md:text-lg text-muted-foreground mt-8 leading-relaxed max-w-3xl">
            Amogen Pharma India was founded in 2020 and is a generic company specialising in the development and manufacture of complex peptide and protein-based APIs and drug products for global pharmaceutical partners.
          </p>
        </ScrollReveal>

        {/* Stats — horizontal row */}
        <div className="grid md:grid-cols-[1fr_auto_1fr_auto_1fr] gap-0 mt-16">
          <ScrollReveal delay={0.1}>
            <div className="py-8 pr-8">
              <span className="text-5xl md:text-6xl font-extrabold text-primary leading-none">70+</span>
              <p className="text-sm font-bold text-foreground mt-3">Employees</p>
              <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                as of November 30, 2025, with 84% in research & development and manufacturing related functions.
              </p>
            </div>
          </ScrollReveal>

          <div className="hidden md:block w-px bg-border self-stretch" />

          <ScrollReveal delay={0.2}>
            <div className="py-8 px-8 border-t md:border-t-0 border-border">
              <span className="text-5xl md:text-6xl font-extrabold text-primary leading-none">15 years</span>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                of average peptide R&D expertise among key personal with a validated platform that has delivered two drugs to market and a rich pipeline of clinical and pre-clinical programs.
              </p>
            </div>
          </ScrollReveal>

          <div className="hidden md:block w-px bg-border self-stretch" />

          <ScrollReveal delay={0.3}>
            <div className="py-8 pl-8 border-t md:border-t-0 border-border">
              <span className="text-5xl md:text-6xl font-extrabold text-primary leading-none">980 Kg</span>
              <p className="text-sm font-bold text-foreground mt-3">Total GLP-1 Volume</p>
              <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                To position ourselves as the global No.1 recombinant biomanufacturing hub, we are continuously expanding our capacity while upholding the highest standards of quality.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default AboutAtGlance;
