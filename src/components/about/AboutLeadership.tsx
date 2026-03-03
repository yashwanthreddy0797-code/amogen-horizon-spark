import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { Plus, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import leaderRaju from "@/assets/leader-raju.png";
import leaderAkhilesh from "@/assets/leader-akhilesh.png";
import leaderKalyan from "@/assets/leader-kalyan.png";
import leaderHarmeet from "@/assets/leader-harmeet.png";
import leaderManpreet from "@/assets/leader-manpreet.png";

interface Leader {
  name: string;
  title: string;
  photo: string;
  stat: string;
  statLabel: string;
  bio?: string;
  education?: string;
  almaMater?: string;
  previousCompanies?: string[];
}

const leaders: Leader[] = [
  {
    name: "P.V.S.N. Raju",
    title: "Chairman & MD",
    stat: "30+",
    statLabel: "Years of experience",
    bio: "Seasoned Entrepreneur & Engineering Excellence",
    photo: leaderRaju,
  },
  {
    name: "P. Akhilesh Raju",
    title: "Chief Executive Officer",
    stat: "6+",
    statLabel: "Years of experience",
    education: "MBA",
    almaMater: "Anglia Ruskin",
    previousCompanies: ["Pardha Group"],
    photo: leaderAkhilesh,
  },
  {
    name: "Dr. T Devi Kalyan",
    title: "Chief Operating Officer",
    stat: "18+",
    statLabel: "Years of experience",
    education: "PhD",
    almaMater: "DRDO",
    previousCompanies: ["Biological E", "Dr. Reddy's"],
    photo: leaderKalyan,
  },
  {
    name: "Harmeet Lamba",
    title: "Advisor",
    stat: "30+",
    statLabel: "Years of experience",
    education: "MBA",
    almaMater: "Wharton BS",
    previousCompanies: ["Ranbaxy", "Dr. Reddy's"],
    photo: leaderHarmeet,
  },
  {
    name: "Dr. Manpreet Singh",
    title: "Vice President, BD",
    stat: "16+",
    statLabel: "Years of experience",
    education: "PhD",
    almaMater: "NIPER",
    previousCompanies: ["Dr. Reddy's", "Aurisco"],
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
          {/* Left – Label */}
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground">Leadership</h2>
          </ScrollReveal>

          {/* Right – Accordion list */}
          <div>
            {leaders.map((leader, i) => {
              const isOpen = openIndex === i;
              return (
                <div key={leader.name}>
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
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
                            <p className="text-base font-semibold text-primary">{leader.title}</p>
                            <div className="mt-6">
                              <p className="text-4xl font-semibold text-foreground">{leader.stat}</p>
                              <p className="text-sm font-semibold text-foreground mt-1">{leader.statLabel}</p>
                            </div>
                            {leader.bio && (
                              <p className="text-sm font-semibold text-foreground mt-5 leading-relaxed max-w-lg">
                                {leader.bio}
                              </p>
                            )}
                            {leader.education && (
                              <div className="mt-5">
                                <p className="text-sm font-semibold text-foreground">{leader.education}</p>
                                <p className="text-sm font-semibold text-foreground">{leader.almaMater}</p>
                              </div>
                            )}
                            {leader.previousCompanies && leader.previousCompanies.length > 0 && (
                              <div className="flex flex-wrap gap-2 mt-5">
                                {leader.previousCompanies.map((company) => (
                                  <span
                                    key={company}
                                    className="text-xs font-medium text-primary border border-primary/40 rounded px-3 py-1"
                                  >
                                    {company}
                                  </span>
                                ))}
                              </div>
                            )}
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
