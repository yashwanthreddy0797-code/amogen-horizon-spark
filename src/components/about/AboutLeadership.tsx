import ScrollReveal from "@/components/ScrollReveal";
import leaderRaju from "@/assets/leader-raju.png";
import leaderAkhilesh from "@/assets/leader-akhilesh.png";
import leaderKalyan from "@/assets/leader-kalyan.png";
import leaderHarmeet from "@/assets/leader-harmeet.png";
import leaderManpreet from "@/assets/leader-manpreet.png";

interface Leader {
  name: string;
  title: string;
  photo: string;
  experience: string;
  education?: string;
  almaMater?: string;
  previousCompanies?: string[];
}

const leaders: Leader[] = [
  {
    name: "P.V.S.N. Raju",
    title: "Chairman & MD",
    photo: leaderRaju,
    experience: "30+ Years",
    education: "Seasoned Entrepreneur & Engineering Excellence",
  },
  {
    name: "P. Akhilesh Raju",
    title: "Chief Executive Officer",
    photo: leaderAkhilesh,
    experience: "6+ Years",
    education: "MBA",
    almaMater: "Anglia Ruskin",
    previousCompanies: ["Pardha Group"],
  },
  {
    name: "Dr. T Devi Kalyan",
    title: "Chief Operating Officer",
    photo: leaderKalyan,
    experience: "18+ Years",
    education: "PhD",
    almaMater: "DRDO",
    previousCompanies: ["Biological E", "Dr. Reddy's"],
  },
  {
    name: "Harmeet Lamba",
    title: "Advisor",
    photo: leaderHarmeet,
    experience: "30+ Years",
    education: "MBA",
    almaMater: "Wharton BS",
    previousCompanies: ["Ranbaxy", "Dr. Reddy's"],
  },
  {
    name: "Dr. Manpreet Singh",
    title: "Vice President, BD",
    photo: leaderManpreet,
    experience: "16+ Years",
    education: "PhD",
    almaMater: "NIPER",
    previousCompanies: ["Dr. Reddy's", "Aurisco"],
  },
];

const AboutLeadership = () => {
  return (
    <section id="leadership" className="py-24 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <ScrollReveal>
          <p className="text-sm font-medium text-primary tracking-wide">Our People</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mt-4 leading-tight">Leadership</h2>
        </ScrollReveal>

        <div className="mt-16 -mx-6 md:-mx-12 lg:-mx-16">
          <div
            className="flex gap-12 overflow-x-auto px-6 md:px-12 lg:px-16 pb-6 scrollbar-hide"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {leaders.map((leader, i) => (
              <ScrollReveal key={leader.name} delay={i * 0.08}>
                <div
                  className="flex flex-col shrink-0"
                  style={{ width: "min(270px, 65vw)", scrollSnapAlign: "start" }}
                >
                  {/* Photo */}
                  <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-muted">
                    <img
                      src={leader.photo}
                      alt={leader.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Name */}
                  <h3 className="text-2xl md:text-3xl font-semibold text-foreground mt-5 leading-tight">
                    {leader.name}
                  </h3>

                  {/* Divider */}
                  <div className="border-t-2 border-foreground mt-4 pt-3" />

                  {/* Title */}
                  <p className="text-sm text-muted-foreground">{leader.title}</p>

                  {/* Experience */}
                  <p className="text-xs text-muted-foreground mt-2">{leader.experience} experience</p>

                  {/* Education / Alma Mater */}
                  {(leader.education || leader.almaMater) && (
                    <p className="text-xs text-muted-foreground mt-1">
                      {[leader.education, leader.almaMater].filter(Boolean).join(" · ")}
                    </p>
                  )}

                  {/* Previous Companies */}
                  {leader.previousCompanies && leader.previousCompanies.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {leader.previousCompanies.map((company) => (
                        <span
                          key={company}
                          className="text-[11px] font-medium text-primary border border-primary/30 rounded px-2 py-0.5"
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
      </div>
    </section>
  );
};

export default AboutLeadership;