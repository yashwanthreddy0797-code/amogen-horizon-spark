import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "framer-motion";
import { User } from "lucide-react";
import leadershipHero from "@/assets/leadership-hero.jpg";
import leaderRaju from "@/assets/leader-raju.png";
import leaderAkhilesh from "@/assets/leader-akhilesh.png";
import leaderKalyan from "@/assets/leader-kalyan.png";
import leaderHarmeet from "@/assets/leader-harmeet.png";

/* ── Leadership Data ── */

const leaders = [
  {
    name: "P.V.S.N. Raju",
    title: "Chairman",
    bio: "Visionary leader with decades of experience in pharmaceutical innovation, guiding AMOGEN's strategic direction and governance with a commitment to advancing global healthcare.",
    photo: leaderRaju,
  },
  {
    name: "Akhilesh Raju",
    title: "Chief Executive Officer",
    bio: "Driving AMOGEN's mission to deliver high-quality, affordable peptide therapeutics through bold scientific strategy and operational excellence across global markets.",
    photo: leaderAkhilesh,
  },
  {
    name: "T. Devi Kalyan",
    title: "Chief Operating Officer",
    bio: "Overseeing end-to-end operations from manufacturing to supply chain, ensuring AMOGEN delivers on its promise of quality, scalability, and regulatory compliance worldwide.",
    photo: leaderKalyan,
  },
  {
    name: "Mr. Harmeet Lamba",
    title: "Advisor",
    bio: "Bringing deep industry expertise and strategic counsel to AMOGEN's growth trajectory, advising on market expansion, partnerships, and long-term business development.",
    photo: leaderHarmeet,
  },
  {
    name: "Dr. Manpreet Singh",
    title: "President, Business Development",
    bio: "Leading AMOGEN's global business development initiatives, forging strategic partnerships across North America, Europe, and Asia-Pacific to accelerate patient access.",
    photo: null,
  },
];

/* ── Component ── */

const Leadership = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* ═══════════ HERO ═══════════ */}
        <section className="relative min-h-[70vh] flex items-end overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={leadershipHero}
              alt="AMOGEN scientific laboratory"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-foreground/20" />
          </div>
          <div className="relative w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 pb-20 pt-40">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-xs uppercase tracking-[0.25em] text-primary-foreground/60 font-semibold mb-4">
                <a
                  href="/"
                  className="hover:text-primary-foreground underline underline-offset-4"
                >
                  Home
                </a>
                <span className="mx-2">/</span>
                <a
                  href="/about"
                  className="hover:text-primary-foreground underline underline-offset-4"
                >
                  About
                </a>
                <span className="mx-2">/</span>
                Leadership
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-primary-foreground leading-[1.05] max-w-4xl">
                Who we are
              </h1>
            </motion.div>
          </div>
        </section>

        {/* ═══════════ MEET OUR TEAM ═══════════ */}
        <section className="py-24 lg:py-32 bg-background">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
            <ScrollReveal>
              <div className="text-center max-w-3xl mx-auto">
                <p className="text-sm font-medium text-muted-foreground tracking-wide">
                  AMOGEN Leadership
                </p>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mt-4 leading-tight">
                  Meet our team
                </h2>
                <p className="text-base md:text-lg text-muted-foreground mt-6 leading-relaxed max-w-2xl mx-auto">
                  Our leadership team brings together decades of experience in
                  biotechnology, pharmaceutical manufacturing, and global
                  business development to advance AMOGEN's mission of making
                  life-changing treatments accessible worldwide.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ═══════════ LEADER CARDS ═══════════ */}
        <section className="pb-24 lg:pb-32 bg-background">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {leaders.map((leader, i) => (
                <ScrollReveal key={leader.name} delay={i * 0.08}>
                  <div className="group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                    <div className="relative aspect-square bg-muted flex items-center justify-center overflow-hidden">
                      {leader.photo ? (
                        <img src={leader.photo} alt={leader.name} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-24 h-24 rounded-full bg-border flex items-center justify-center">
                          <User size={40} className="text-muted-foreground/50" />
                        </div>
                      )}
                      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* Info */}
                    <div className="p-8 flex flex-col flex-1">
                      <h3 className="text-xl font-bold text-foreground">
                        {leader.name}
                      </h3>
                      <p className="text-sm font-medium text-primary mt-1">
                        {leader.title}
                      </p>
                      <p className="text-sm text-muted-foreground mt-4 leading-relaxed flex-1">
                        {leader.bio}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ VISION QUOTE ═══════════ */}
        <section className="py-20 lg:py-28 bg-section-cream">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
            <ScrollReveal>
              <div className="text-center max-w-4xl mx-auto">
                <blockquote className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-foreground leading-tight italic">
                  "Our leadership is united by a single purpose — to advance
                  peptide therapeutics that transform the lives of patients
                  worldwide."
                </blockquote>
                <p className="text-sm font-medium text-muted-foreground mt-8 tracking-wide uppercase">
                  AMOGEN Leadership Team
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Leadership;
