import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { Plus, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import leaderRaju from "@/assets/leader-raju.png";
import leaderAkhilesh from "@/assets/leader-akhilesh.png";
import leaderKalyan from "@/assets/leader-kalyan.png";
import leaderHarmeet from "@/assets/leader-harmeet.png";
import leaderManpreet from "@/assets/leader-manpreet.png";

const leaders = [
  {
    name: "P.V.S.N. Raju",
    title: "Managing Director",
    bio: "Mr. Raju brings decades of visionary leadership in pharmaceutical manufacturing and business strategy, guiding AMOGEN's growth into a leading peptide biosimilar company.",
    photo: leaderRaju,
  },
  {
    name: "Akhilesh Raju",
    title: "Director – Business Development",
    bio: "Akhilesh drives AMOGEN's global partnerships and market expansion strategy, leveraging deep expertise in international pharmaceutical business development.",
    photo: leaderAkhilesh,
  },
  {
    name: "T. Devi Kalyan",
    title: "Director – Operations",
    bio: "With extensive experience in pharmaceutical operations, Kalyan oversees AMOGEN's manufacturing excellence and ensures the highest standards of quality and efficiency.",
    photo: leaderKalyan,
  },
  {
    name: "Harmeet Lamba",
    title: "Vice President – Quality",
    bio: "Harmeet leads quality assurance and regulatory compliance, bringing deep expertise in cGMP practices and international quality standards to AMOGEN's operations.",
    photo: leaderHarmeet,
  },
  {
    name: "Dr. Manpreet Singh",
    title: "Vice President – R&D",
    bio: "Dr. Singh heads research and development initiatives, driving innovation in peptide biosimilar formulation and analytical method development.",
    photo: leaderManpreet,
  },
];

const AboutLeadership = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="leadership" className="py-24 lg:py-32" style={{ backgroundColor: "#e8e4df" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Top rule */}
        <div className="border-t-2 border-foreground" />

        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20 pt-10">
          {/* Left – Label + Featured leader (Raju) */}
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground">Leadership</h2>
            <div className="mt-10">
              <div className="rounded-lg overflow-hidden mb-6">
                <img
                  src={leaders[0].photo}
                  alt={leaders[0].name}
                  className="w-full h-[300px] object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-foreground">{leaders[0].name}</h3>
              <p className="text-sm font-medium text-foreground/70 mt-1">{leaders[0].title}</p>
              <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
                {leaders[0].bio}
              </p>
            </div>
          </ScrollReveal>

          {/* Right – Accordion list (remaining leaders) */}
          <div>
            {leaders.slice(1).map((leader, i) => {
              const actualIndex = i + 1;
              const isOpen = openIndex === actualIndex;
              return (
                <div key={leader.name}>
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : actualIndex)}
                    className="w-full flex items-center justify-between py-5 text-left group"
                  >
                    <span className="text-xl md:text-2xl font-semibold text-foreground">
                      {leader.name}
                    </span>
                    <span className="w-10 h-10 rounded-full border border-foreground/40 flex items-center justify-center flex-shrink-0 ml-4 group-hover:border-foreground transition-colors">
                      {isOpen ? <X size={16} /> : <Plus size={16} />}
                    </span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pb-6 grid md:grid-cols-[1fr_200px] gap-6 items-start">
                          <div>
                            <p className="text-sm font-semibold text-foreground">{leader.title}</p>
                            <p className="text-sm text-muted-foreground mt-4 leading-relaxed max-w-lg">
                              {leader.bio}
                            </p>
                          </div>
                          <div className="rounded-lg overflow-hidden">
                            <img
                              src={leader.photo}
                              alt={leader.name}
                              className="w-full h-[240px] object-cover"
                            />
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Divider */}
                  <div className="border-b border-foreground/20" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutLeadership;
