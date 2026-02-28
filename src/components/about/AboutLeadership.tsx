import ScrollReveal from "@/components/ScrollReveal";

interface Leader {
  name: string;
  title: string;
  stat: string;
  statLabel: string;
  education: string;
  institution: string;
  tags: string[];
}

const leaders: Leader[] = [
  {
    name: "P.V.S.N Raju",
    title: "Chairman & MD",
    stat: "30+",
    statLabel: "Years of experience",
    education: "Seasoned Entrepreneur &\nEngineering Excellence",
    institution: "",
    tags: [],
  },
  {
    name: "Harmeet Lamba",
    title: "Advisor",
    stat: "30+",
    statLabel: "Years of experience",
    education: "MBA",
    institution: "Wharton BS",
    tags: ["Ranbaxy", "Dr. Reddy's"],
  },
  {
    name: "Dr. Manpreet Singh",
    title: "Vice President, BD",
    stat: "16+",
    statLabel: "Years of experience",
    education: "PhD",
    institution: "NIPER",
    tags: ["Dr. Reddy's", "Aurisco"],
  },
  {
    name: "P. Akhilesh Raju",
    title: "Chief Executive Officer",
    stat: "6+",
    statLabel: "Years of experience",
    education: "MBA",
    institution: "Anglia Ruskin",
    tags: ["Pardha Group"],
  },
  {
    name: "Dr. T Devi Kalyan",
    title: "Chief Operating Officer",
    stat: "18+",
    statLabel: "Years of experience",
    education: "PhD",
    institution: "DRDO",
    tags: ["Biological E", "Dr. Reddy's"],
  },
  {
    name: "Dr. A Vikram Kumar",
    title: "Vice President, Biologics",
    stat: "16+",
    statLabel: "Years of experience",
    education: "PhD",
    institution: "JNTU H",
    tags: ["Biological E", "Evolva Biotech"],
  },
];

const AboutLeadership = () => {
  return (
    <section id="leadership" className="py-24 lg:py-32" style={{ backgroundColor: "#e8e4df" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Top rule */}
        <div className="border-t-2 border-foreground" />

        <div className="pt-10">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-12">Leadership</h2>
          </ScrollReveal>

          {/* Card grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {leaders.map((leader, i) => (
              <ScrollReveal key={leader.name} delay={i * 0.06}>
                <div className="border-t-2 border-primary pt-6 pb-8 h-full flex flex-col">
                  {/* Left accent line container */}
                  <div className="pl-5 border-l-[3px] border-primary/60 flex flex-col flex-1">
                    <h3 className="text-2xl md:text-3xl font-extrabold" style={{ color: "#001965" }}>
                      {leader.name}
                    </h3>
                    <p className="text-base font-medium mt-1" style={{ color: "#3366cc" }}>
                      {leader.title}
                    </p>

                    {/* Stat */}
                    <p className="text-4xl md:text-5xl font-extrabold mt-6" style={{ color: "#001965" }}>
                      {leader.stat}
                    </p>
                    <p className="text-sm font-semibold mt-1" style={{ color: "#001965" }}>
                      {leader.statLabel}
                    </p>

                    {/* Education */}
                    <p className="text-sm font-semibold mt-5 whitespace-pre-line" style={{ color: "#001965" }}>
                      {leader.education}
                    </p>
                    {leader.institution && (
                      <p className="text-sm font-semibold" style={{ color: "#001965" }}>
                        {leader.institution}
                      </p>
                    )}

                    {/* Tags */}
                    {leader.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-6">
                        {leader.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-3 py-1.5 border rounded font-medium"
                            style={{ borderColor: "#001965", color: "#001965" }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutLeadership;
