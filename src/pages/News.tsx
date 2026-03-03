import { useState, useMemo } from "react";
import { Search, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import researchLab from "@/assets/research-lab.jpg";
import scienceResearch from "@/assets/science-research.jpg";
import manufacturing from "@/assets/manufacturing.jpg";
import rdHero from "@/assets/rd-hero.jpg";
import facility1 from "@/assets/facility-1.jpg";
import patientCare from "@/assets/patient-care.jpg";
import rdLabHands from "@/assets/rd-lab-hands.jpg";
import researchCloseup from "@/assets/research-closeup.jpg";
import scienceHero from "@/assets/science-hero.jpg";

/* ─── Data ─── */
type Tag = "All" | "Newsroom" | "Science" | "Manufacturing" | "Pipeline" | "People" | "Partnership";

interface Article {
  image: string;
  date: string;
  title: string;
  tags: Tag[];
  featured?: boolean;
}

const articles: Article[] = [
  {
    image: researchLab,
    date: "Feb 10, 2026",
    title: "AMOGEN Reports Positive Phase III Results for Semaglutide Biosimilar AMG-S01",
    tags: ["Newsroom", "Pipeline"],
    featured: true,
  },
  {
    image: manufacturing,
    date: "Jan 22, 2026",
    title: "AMOGEN Expands Global Distribution Partnership with Leading European Pharma Group",
    tags: ["Newsroom", "Partnership"],
  },
  {
    image: scienceResearch,
    date: "Dec 28, 2025",
    title: "The Global Biosimilar Landscape: Opportunities and Regulatory Pathways in 2026",
    tags: ["Science"],
  },
  {
    image: rdHero,
    date: "Dec 15, 2025",
    title: "AMOGEN Receives FDA Acknowledgment for Liraglutide Biosimilar IND Submission",
    tags: ["Newsroom", "Pipeline"],
  },
  {
    image: facility1,
    date: "Nov 18, 2025",
    title: "Comparability Studies in Biosimilar Development: Analytical Strategies for Demonstrating Similarity",
    tags: ["Science", "Manufacturing"],
  },
  {
    image: patientCare,
    date: "Nov 8, 2025",
    title: "AMOGEN Announces Completion of Manufacturing Suite Expansion",
    tags: ["Manufacturing", "Newsroom"],
  },
  {
    image: rdLabHands,
    date: "Oct 20, 2025",
    title: "AMOGEN Bio Pharma Appoints New Chief Scientific Officer",
    tags: ["People", "Newsroom"],
  },
  {
    image: researchCloseup,
    date: "Sep 5, 2025",
    title: "AMOGEN Initiates Phase I Study for Tirzepatide Biosimilar Candidate",
    tags: ["Pipeline", "Newsroom"],
  },
  {
    image: scienceHero,
    date: "Aug 12, 2025",
    title: "The Science Behind GLP-1 Receptor Agonists: How Peptide Therapeutics Are Transforming Metabolic Care",
    tags: ["Science"],
  },
  {
    image: manufacturing,
    date: "Jul 30, 2025",
    title: "Scaling Up Solid-Phase Peptide Synthesis: Challenges and Innovations at Commercial Scale",
    tags: ["Manufacturing", "Science"],
  },
  {
    image: patientCare,
    date: "Jul 10, 2025",
    title: "Inside AMOGEN: Building a Culture of Scientific Excellence and Innovation",
    tags: ["People"],
  },
  {
    image: facility1,
    date: "Jun 22, 2025",
    title: "AMOGEN Recognized as 'Emerging CDMO Leader' by PharmSource Annual Report",
    tags: ["Newsroom", "Partnership"],
  },
];

const tabs: Tag[] = ["All", "Newsroom", "Science", "Manufacturing", "Pipeline", "People", "Partnership"];

/* ─── Component ─── */
const News = () => {
  const [activeTab, setActiveTab] = useState<Tag>("All");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    let list = articles;
    if (activeTab !== "All") {
      list = list.filter((a) => a.tags.includes(activeTab));
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter((a) => a.title.toLowerCase().includes(q));
    }
    return list;
  }, [activeTab, search]);

  const featuredArticle = filtered.find((a) => a.featured) || filtered[0];
  const gridArticles = filtered.filter((a) => a !== featuredArticle);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-28 md:pt-36 pb-0">
        {/* ── Header ── */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-foreground leading-[1.05]">
                The AMOGEN Blog
              </h1>
              {/* Search */}
              <div className="relative w-full md:w-80">
                <input
                  type="text"
                  placeholder="Search posts"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-4 pr-10 py-3 text-sm border border-border rounded-lg bg-card text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
                <Search size={16} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
              </div>
            </div>
          </ScrollReveal>

          {/* ── Tabs (Cohere-style coral pills) ── */}
          <ScrollReveal delay={0.05}>
            <div className="flex flex-wrap gap-2.5 mb-16">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2.5 text-base font-medium rounded-full border transition-all duration-200 ${
                    activeTab === tab
                      ? "border-[#E8725A] text-[#E8725A] bg-[#E8725A]/5"
                      : "border-border text-foreground/70 hover:text-foreground hover:border-foreground/30"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* ── Content ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab + search}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
          >
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
              {filtered.length === 0 && (
                <p className="text-muted-foreground text-lg py-20 text-center">No articles found.</p>
              )}

              {/* Featured article — Cohere style: image left, text right, no card bg */}
              {featuredArticle && (
                <a href="#" className="group block mb-16">
                  <div className="grid lg:grid-cols-[1.2fr_1fr] gap-8 lg:gap-14 items-center">
                    <div className="rounded-xl overflow-hidden h-[280px] lg:h-[380px]">
                      <img
                        src={featuredArticle.image}
                        alt={featuredArticle.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-5 uppercase tracking-[0.15em]">
                        AMOGEN Team — {featuredArticle.date}
                      </p>
                      <h2 className="text-2xl md:text-3xl lg:text-[2.5rem] font-extrabold text-foreground leading-[1.15] mb-6 group-hover:text-primary transition-colors">
                        {featuredArticle.title}
                      </h2>
                      <div className="flex flex-wrap gap-2 mb-7">
                        {featuredArticle.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded border border-foreground/20 text-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.12em] text-foreground group-hover:gap-3 transition-all underline underline-offset-4 decoration-1">
                        Read full article <ArrowRight size={15} />
                      </span>
                    </div>
                  </div>
                </a>
              )}

              {/* Grid — Cohere style: no card bg, image → meta → title → tags → link */}
              {gridArticles.length > 0 && (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14 mb-24">
                  {gridArticles.map((article, i) => (
                    <ScrollReveal key={article.title + i} delay={i * 0.06}>
                      <a href="#" className="group block h-full">
                        <div className="rounded-xl overflow-hidden h-[220px] mb-5">
                          <img
                            src={article.image}
                            alt={article.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            loading="lazy"
                          />
                        </div>
                        <p className="text-xs text-muted-foreground mb-3 uppercase tracking-[0.15em]">
                          AMOGEN Team — {article.date}
                        </p>
                        <h3 className="text-lg font-bold text-foreground leading-snug mb-4 group-hover:text-primary transition-colors">
                          {article.title}
                        </h3>
                        <div className="flex flex-wrap gap-1.5 mb-5">
                          {article.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded border border-foreground/20 text-foreground"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.12em] text-foreground group-hover:gap-2.5 transition-all underline underline-offset-4 decoration-1">
                          Read full article <ArrowRight size={13} />
                        </span>
                      </a>
                    </ScrollReveal>
                  ))}
                </div>
              )}
            </div>

            {/* ── Newsletter CTA ── */}
            <section className="py-20 lg:py-28 bg-section-cream">
              <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
                <ScrollReveal>
                  <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight">
                      Stay <em className="italic">informed</em>
                    </h2>
                    <p className="text-base md:text-lg text-muted-foreground mt-6 leading-relaxed">
                      Subscribe to receive the latest press releases, pipeline updates, and scientific insights from AMOGEN Bio Pharma directly to your inbox.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center mt-10 max-w-lg mx-auto">
                      <input
                        type="email"
                        placeholder="Enter your email address"
                        className="flex-1 px-5 py-4 text-sm rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                      />
                      <button className="px-8 py-4 text-sm font-semibold rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors whitespace-nowrap">
                        Subscribe
                      </button>
                    </div>
                    <p className="text-xs text-muted-foreground mt-4">We respect your privacy. Unsubscribe at any time.</p>
                  </div>
                </ScrollReveal>
              </div>
            </section>
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};

export default News;
