import ScrollReveal from "@/components/ScrollReveal";

const leaders = [
  {
    name: "P.V.S.N Raju",
    title: "Chairman & MD",
    years: "30+",
    education: "Seasoned Entrepreneur &\nEngineering Excellence",
    companies: [],
  },
  {
    name: "Harmeet Lamba",
    title: "Advisor",
    years: "30+",
    education: "MBA\nWharton BS",
    companies: ["Ranbaxy", "Dr. Reddy's"],
  },
  {
    name: "Dr. Manpreet Singh",
    title: "Vice President, BD",
    years: "16+",
    education: "PhD\nNIPER",
    companies: ["Dr. Reddy's", "Aurisco"],
  },
  {
    name: "P. Akhilesh Raju",
    title: "Chief Executive Officer",
    years: "6+",
    education: "MBA\nAnglia Ruskin",
    companies: ["Parcha Group"],
  },
  {
    name: "Dr. T Devi Kalyan",
    title: "Chief Operating Officer",
    years: "18+",
    education: "PhD\nDRDO",
    companies: ["Biological E", "Dr. Reddy's"],
  },
  {
    name: "Dr. A Vikram Kumar",
    title: "Vice President, Biologics",
    years: "16+",
    education: "PhD\nJNTU H",
    companies: ["Biological E", "Evolva Biotech"],
  },
];

const AboutLeadership = () => {
  return (
    <section id="leadership" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <ScrollReveal>
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-16">Leadership</h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
          {leaders.map((leader, i) => (
            <ScrollReveal key={leader.name} delay={i * 0.06}>
              <div className="border-l-[3px] border-primary pl-6 flex flex-col gap-5">
                {/* Name & Title */}
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-primary">{leader.name}</h3>
                  <p className="text-sm md:text-base text-primary/70 mt-1">{leader.title}</p>
                </div>

                {/* Years */}
                <div className="border-l-[3px] border-primary/30 pl-5">
                  <p className="text-4xl md:text-5xl font-bold text-primary">{leader.years}</p>
                  <p className="text-sm text-primary/70 mt-1">Years of experience</p>
                </div>

                {/* Education */}
                <div className="text-sm md:text-base text-primary font-medium whitespace-pre-line leading-relaxed">
                  {leader.education}
                </div>

                {/* Company tags */}
                {leader.companies.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-1">
                    {leader.companies.map((company) => (
                      <span
                        key={company}
                        className="text-xs px-3 py-1 border border-primary/40 text-primary rounded-sm"
                      >
                        {company}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutLeadership;
