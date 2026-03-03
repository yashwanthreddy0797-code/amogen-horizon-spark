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
    <div className="min-h-screen" style={{ backgroundColor: "#FAFAF8" }}>
      <Navbar />
      <main className="pt-32 md:pt-40 pb-0">
        {/* ── Header row ── */}
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <h1
              className="text-[2.8rem] md:text-[3.4rem] lg:text-[3.8rem] font-normal leading-[1.1] tracking-[-0.02em]"
              style={{ color: "#1A1A1A", fontFamily: "'Plus Jakarta Sans', serif" }}
            >
              The AMOGEN Blog
            </h1>
            {/* Search — Cohere style: bottom border only, uppercase placeholder */}
            <div className="relative w-full md:w-72">
              <input
                type="text"
                placeholder="SEARCH POSTS"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-1 pr-9 py-2.5 text-xs tracking-[0.15em] bg-transparent border-0 border-b border-[#D0D0D0] text-[#1A1A1A] placeholder:text-[#999] focus:outline-none focus:border-[#1A1A1A] transition-colors"
              />
              <Search size={15} className="absolute right-1 top-1/2 -translate-y-1/2 text-[#999]" />
            </div>
          </div>

          {/* ── Tabs — Cohere coral pills ── */}
          <div className="flex flex-wrap gap-2 mb-16">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="relative px-5 py-2 text-[15px] font-medium transition-all duration-200"
                style={{
                  color: activeTab === tab ? "#1A1A1A" : "#E07860",
                  backgroundColor: activeTab === tab ? "#FADDD6" : "transparent",
                  border: `1.5px solid ${activeTab === tab ? "#F0A090" : "#F0A090"}`,
                  borderRadius: "9999px",
                }}
              >
                {tab}
              </button>
            ))}
          </div>
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
            <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16">
              {filtered.length === 0 && (
                <p className="text-[#999] text-lg py-20 text-center">No articles found.</p>
              )}

              {/* ── Featured article — Cohere exact layout ── */}
              {featuredArticle && (
                <a href="#" className="group block mb-20">
                  <div className="grid lg:grid-cols-[1.15fr_1fr] gap-10 lg:gap-16 items-start">
                    {/* Image */}
                    <div className="rounded-lg overflow-hidden">
                      <img
                        src={featuredArticle.image}
                        alt={featuredArticle.title}
                        className="w-full h-[280px] lg:h-[360px] object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </div>
                    {/* Text */}
                    <div className="pt-2">
                      <p
                        className="text-[11px] mb-5 tracking-[0.12em] uppercase"
                        style={{ color: "#888" }}
                      >
                        AMOGEN Team — {featuredArticle.date}
                      </p>
                      <h2
                        className="text-[1.7rem] md:text-[2rem] lg:text-[2.3rem] font-normal leading-[1.2] tracking-[-0.01em] mb-6"
                        style={{ color: "#1A1A1A", fontFamily: "'Plus Jakarta Sans', serif" }}
                      >
                        {featuredArticle.title}
                      </h2>
                      <div className="flex flex-wrap gap-2 mb-8">
                        {featuredArticle.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] font-semibold uppercase tracking-[0.1em] px-3 py-1.5"
                            style={{
                              border: "1px solid #E0D8D0",
                              borderRadius: "4px",
                              color: "#1A1A1A",
                              backgroundColor: "#FDF5F0",
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <span
                        className="inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.12em] group-hover:gap-3 transition-all"
                        style={{
                          color: "#1A1A1A",
                          textDecoration: "underline",
                          textUnderlineOffset: "5px",
                          textDecorationThickness: "1px",
                        }}
                      >
                        Read full article <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </a>
              )}

              {/* ── Grid cards — Cohere style ── */}
              {gridArticles.length > 0 && (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 mb-28">
                  {gridArticles.map((article, i) => (
                    <ScrollReveal key={article.title + i} delay={i * 0.05}>
                      <a href="#" className="group block h-full">
                        {/* Image */}
                        <div className="rounded-lg overflow-hidden mb-5">
                          <img
                            src={article.image}
                            alt={article.title}
                            className="w-full h-[210px] object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                            loading="lazy"
                          />
                        </div>
                        {/* Meta */}
                        <p
                          className="text-[10px] mb-2.5 tracking-[0.12em] uppercase"
                          style={{ color: "#888" }}
                        >
                          AMOGEN Team — {article.date}
                        </p>
                        {/* Title */}
                        <h3
                          className="text-[1.05rem] md:text-[1.15rem] font-semibold leading-[1.35] mb-4"
                          style={{ color: "#1A1A1A" }}
                        >
                          {article.title}
                        </h3>
                        {/* Tags */}
                        <div className="flex flex-wrap gap-1.5 mb-5">
                          {article.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-[9px] font-semibold uppercase tracking-[0.1em] px-2.5 py-1"
                              style={{
                                border: "1px solid #E0D8D0",
                                borderRadius: "4px",
                                color: "#1A1A1A",
                                backgroundColor: "#FDF5F0",
                              }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        {/* Link */}
                        <span
                          className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] group-hover:gap-2.5 transition-all"
                          style={{
                            color: "#1A1A1A",
                            textDecoration: "underline",
                            textUnderlineOffset: "4px",
                            textDecorationThickness: "1px",
                          }}
                        >
                          Read full article <ArrowRight size={12} />
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
