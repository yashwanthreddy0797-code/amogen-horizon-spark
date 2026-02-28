import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  FileText,
  BookOpen,
  Newspaper,
  Download,
  ExternalLink,
  Clock,
  Tag,
  ChevronRight,
} from "lucide-react";
import researchLab from "@/assets/research-lab.jpg";
import scienceResearch from "@/assets/science-research.jpg";
import manufacturing from "@/assets/manufacturing.jpg";
import rdHero from "@/assets/rd-hero.jpg";
import facility1 from "@/assets/facility-1.jpg";
import patientCare from "@/assets/patient-care.jpg";
import { useLanguage } from "@/i18n/LanguageContext";

const News = () => {
  const { t } = useLanguage();
  const [activeBlogCategory, setActiveBlogCategory] = useState("All");

  // Press releases
  const pressReleases = [
    {
      date: "February 10, 2026",
      tag: "Clinical",
      title: "AMOGEN BIO PHARMA Reports Positive Phase III Results for Semaglutide Biosimilar AMG-S01",
      desc: "Pivotal trial demonstrates pharmacokinetic bioequivalence and comparable immunogenicity to reference product, meeting all primary and secondary endpoints.",
      featured: true,
      image: researchLab,
    },
    {
      date: "January 22, 2026",
      tag: "Partnership",
      title: "AMOGEN Expands Global Distribution Partnership with Leading European Pharma Group",
      desc: "Multi-year agreement secures commercial distribution across 15 EU markets for AMOGEN's GLP-1 biosimilar portfolio.",
    },
    {
      date: "December 15, 2025",
      tag: "Regulatory",
      title: "AMOGEN Receives FDA Acknowledgment for Liraglutide Biosimilar IND Submission",
      desc: "FDA acknowledges receipt of Investigational New Drug application for AMG-L02, clearing the path for Phase I clinical studies.",
    },
    {
      date: "November 8, 2025",
      tag: "Manufacturing",
      title: "AMOGEN Announces Completion of Manufacturing Suite Expansion",
      desc: "New state-of-the-art SPPS production suite increases annual peptide API capacity by 35%, supporting growing global demand.",
    },
    {
      date: "October 20, 2025",
      tag: "Corporate",
      title: "AMOGEN Bio Pharma Appoints New Chief Scientific Officer",
      desc: "Dr. Kavitha Nair joins from a leading global biotech, bringing 20+ years of peptide drug development experience.",
    },
    {
      date: "September 5, 2025",
      tag: "Clinical",
      title: "AMOGEN Initiates Phase I Study for Tirzepatide Biosimilar Candidate",
      desc: "First-in-human study evaluating safety, tolerability, and pharmacokinetics of AMG-T03 in healthy volunteers.",
    },
  ];

  // Blog posts
  const blogCategories = ["All", "Science", "Manufacturing", "Industry", "People"];

  const blogPosts = [
    {
      category: "Science",
      date: "February 5, 2026",
      readTime: "8 min read",
      title: "The Science Behind GLP-1 Receptor Agonists: How Peptide Therapeutics Are Transforming Metabolic Care",
      desc: "An in-depth look at the mechanism of action, clinical benefits, and future directions of GLP-1 receptor agonist therapies in diabetes and obesity management.",
      image: scienceResearch,
    },
    {
      category: "Manufacturing",
      date: "January 15, 2026",
      readTime: "6 min read",
      title: "Scaling Up Solid-Phase Peptide Synthesis: Challenges and Innovations at Commercial Scale",
      desc: "How AMOGEN is overcoming the technical hurdles of large-scale SPPS to deliver high-quality peptide APIs with consistent purity profiles.",
      image: manufacturing,
    },
    {
      category: "Industry",
      date: "December 28, 2025",
      readTime: "5 min read",
      title: "The Global Biosimilar Landscape: Opportunities and Regulatory Pathways in 2026",
      desc: "Navigating the evolving regulatory frameworks across FDA, EMA, and emerging markets for peptide biosimilar approvals.",
      image: rdHero,
    },
    {
      category: "People",
      date: "December 10, 2025",
      readTime: "4 min read",
      title: "Inside AMOGEN: Building a Culture of Scientific Excellence and Innovation",
      desc: "Meet the people behind AMOGEN's mission — from research scientists to manufacturing engineers — and learn what drives our commitment to patients.",
      image: patientCare,
    },
    {
      category: "Science",
      date: "November 18, 2025",
      readTime: "7 min read",
      title: "Comparability Studies in Biosimilar Development: Analytical Strategies for Demonstrating Similarity",
      desc: "A deep dive into the multi-tiered analytical framework used to establish biosimilarity across structural, functional, and clinical attributes.",
      image: facility1,
    },
  ];

  const filteredBlogs = activeBlogCategory === "All"
    ? blogPosts
    : blogPosts.filter((p) => p.category === activeBlogCategory);

  // Document library
  const documents = [
    { title: "AMOGEN Corporate Overview 2026", type: "PDF", size: "4.2 MB", category: "Corporate" },
    { title: "Peptide Manufacturing Capabilities Brochure", type: "PDF", size: "6.8 MB", category: "CDMO" },
    { title: "Quality Systems & Compliance Overview", type: "PDF", size: "3.1 MB", category: "Quality" },
    { title: "Biosimilar Pipeline Summary — Q1 2026", type: "PDF", size: "2.4 MB", category: "Pipeline" },
    { title: "SPPS Technology Platform White Paper", type: "PDF", size: "5.6 MB", category: "Science" },
    { title: "Environmental, Social & Governance Report 2025", type: "PDF", size: "8.3 MB", category: "ESG" },
    { title: "Investor Presentation — February 2026", type: "PDF", size: "7.1 MB", category: "Corporate" },
    { title: "CDMO Partnership Guide", type: "PDF", size: "3.9 MB", category: "CDMO" },
  ];

  // Latest updates
  const latestUpdates = [
    { date: "Feb 12, 2026", type: "Event", title: "AMOGEN to Present at BIO International Convention 2026", desc: "Join us at booth #4215 for live manufacturing demos and pipeline discussions." },
    { date: "Feb 8, 2026", type: "Milestone", title: "500th Batch Milestone Achieved at SPPS Facility", desc: "Marking a significant manufacturing milestone with a 99.2% batch success rate." },
    { date: "Jan 30, 2026", type: "Award", title: "AMOGEN Recognized as 'Emerging CDMO Leader' by PharmSource", desc: "Annual industry report highlights AMOGEN's rapid capacity growth and quality track record." },
    { date: "Jan 18, 2026", type: "Webinar", title: "Upcoming Webinar: Peptide Biosimilars — From Lab to Market", desc: "Register for our expert panel discussion on navigating the peptide biosimilar development pathway." },
    { date: "Jan 5, 2026", type: "Hiring", title: "AMOGEN Expands R&D Team with 25 New Scientists", desc: "Strategic hiring to accelerate pipeline programs and strengthen analytical capabilities." },
  ];

  const tagColors: Record<string, string> = {
    Clinical: "bg-primary/10 text-primary",
    Partnership: "bg-accent/10 text-accent",
    Regulatory: "bg-primary/15 text-primary",
    Manufacturing: "bg-primary/10 text-primary",
    Corporate: "bg-muted text-muted-foreground",
    Event: "bg-primary/10 text-primary",
    Milestone: "bg-primary/15 text-primary",
    Award: "bg-primary/10 text-primary",
    Webinar: "bg-primary/10 text-primary",
    Hiring: "bg-muted text-muted-foreground",
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* HERO */}
        <section className="relative min-h-[85vh] flex items-end overflow-hidden">
          <div className="absolute inset-0">
            <img src={researchLab} alt="AMOGEN news and media" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-foreground/20" />
          </div>
          <div className="relative w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 pb-20 pt-40">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
              <p className="text-xs uppercase tracking-[0.25em] text-primary-foreground/60 font-semibold mb-4">
                <a href="/" className="hover:text-primary-foreground underline underline-offset-4">Home</a>
                <span className="mx-2">/</span>News & Media
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-primary-foreground leading-[1.05] max-w-5xl">
                News & Media
              </h1>
              <p className="mt-8 text-lg md:text-xl text-primary-foreground/80 max-w-2xl leading-relaxed font-light">
                Stay informed with the latest press releases, scientific insights, and corporate updates from AMOGEN Bio Pharma.
              </p>
            </motion.div>
          </div>
        </section>

        {/* PRESS RELEASES */}
        <section id="press-releases" className="py-24 lg:py-32 bg-background">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
            <ScrollReveal>
              <div className="max-w-3xl mb-16">
                <p className="text-xs uppercase tracking-[0.2em] text-primary font-bold mb-4">Media Center</p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight">
                  Press <em className="italic">releases</em>
                </h2>
                <p className="text-base md:text-lg text-muted-foreground mt-6 leading-relaxed">
                  Official announcements, clinical milestones, and corporate news from AMOGEN Bio Pharma.
                </p>
              </div>
            </ScrollReveal>

            {/* Featured press release */}
            {pressReleases.filter((pr) => pr.featured).map((pr, i) => (
              <ScrollReveal key={i}>
                <a href="#" className="group block mb-12">
                  <div className="grid lg:grid-cols-[1.2fr_1fr] gap-0 rounded-2xl overflow-hidden bg-card shadow-sm">
                    <div className="h-[280px] lg:h-[380px] overflow-hidden">
                      <img src={pr.image} alt={pr.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    <div className="p-8 lg:p-10 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-4">
                        <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${tagColors[pr.tag]}`}>{pr.tag}</span>
                        <span className="text-xs text-muted-foreground">{pr.date}</span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-extrabold text-foreground leading-snug mb-4 group-hover:text-primary transition-colors">{pr.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{pr.desc}</p>
                      <span className="inline-flex items-center gap-1.5 text-sm font-bold text-primary mt-6">
                        Read full release <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </a>
              </ScrollReveal>
            ))}

            {/* Other press releases */}
            <div className="space-y-4">
              {pressReleases.filter((pr) => !pr.featured).map((pr, i) => (
                <ScrollReveal key={i} delay={i * 0.05}>
                  <a href="#" className="group block bg-card rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                      <div className="flex items-center gap-3 md:w-48 shrink-0">
                        <Calendar size={14} className="text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{pr.date}</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className={`text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${tagColors[pr.tag]}`}>{pr.tag}</span>
                        </div>
                        <h3 className="text-base md:text-lg font-bold text-foreground leading-snug group-hover:text-primary transition-colors">{pr.title}</h3>
                        <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{pr.desc}</p>
                      </div>
                      <ChevronRight size={20} className="text-muted-foreground shrink-0 hidden md:block mt-2 group-hover:text-primary transition-colors" />
                    </div>
                  </a>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* BLOG */}
        <section id="blog" className="py-20 lg:py-28 bg-section-cream">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
            <ScrollReveal>
              <div className="max-w-3xl mb-12">
                <p className="text-xs uppercase tracking-[0.2em] text-primary font-bold mb-4">Insights & Perspectives</p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight">
                  Blog
                </h2>
                <p className="text-base md:text-lg text-muted-foreground mt-6 leading-relaxed">
                  Scientific insights, industry analysis, and stories from the people behind AMOGEN's mission.
                </p>
              </div>
            </ScrollReveal>

            {/* Category filter */}
            <div className="flex flex-wrap gap-2 mb-12">
              {blogCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveBlogCategory(cat)}
                  className={`px-5 py-2.5 text-sm font-semibold rounded-full transition-all duration-300 ${
                    activeBlogCategory === cat
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "bg-card text-foreground hover:bg-muted shadow-sm"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Blog grid */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeBlogCategory}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredBlogs.map((post, i) => (
                  <ScrollReveal key={post.title} delay={i * 0.08}>
                    <a href="#" className="group block bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full">
                      <div className="h-[220px] overflow-hidden">
                        <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                      </div>
                      <div className="p-6 flex flex-col">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-xs font-bold uppercase tracking-wider text-primary">{post.category}</span>
                          <span className="text-xs text-muted-foreground flex items-center gap-1"><Clock size={10} /> {post.readTime}</span>
                        </div>
                        <h3 className="text-base font-bold text-foreground leading-snug mb-3 group-hover:text-primary transition-colors">{post.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed flex-1">{post.desc}</p>
                        <div className="flex items-center justify-between mt-5">
                          <span className="text-xs text-muted-foreground">{post.date}</span>
                          <span className="inline-flex items-center gap-1 text-sm font-bold text-primary">
                            Read <ArrowRight size={12} />
                          </span>
                        </div>
                      </div>
                    </a>
                  </ScrollReveal>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* DOCUMENT LIBRARY */}
        <section id="document-library" className="py-20 lg:py-28 bg-background">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
            <ScrollReveal>
              <div className="max-w-3xl mb-16">
                <p className="text-xs uppercase tracking-[0.2em] text-primary font-bold mb-4">Resources</p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight">
                  Document <em className="italic">library</em>
                </h2>
                <p className="text-base md:text-lg text-muted-foreground mt-6 leading-relaxed">
                  Corporate brochures, technical white papers, pipeline reports, and investor presentations available for download.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-4">
              {documents.map((doc, i) => (
                <ScrollReveal key={doc.title} delay={i * 0.05}>
                  <a href="#" className="group flex items-center gap-5 bg-card rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <FileText size={20} className="text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-bold text-foreground truncate group-hover:text-primary transition-colors">{doc.title}</h3>
                      <div className="flex items-center gap-3 mt-1">
                        <span className="text-xs text-muted-foreground">{doc.type}</span>
                        <span className="text-xs text-muted-foreground">•</span>
                        <span className="text-xs text-muted-foreground">{doc.size}</span>
                        <span className="text-xs text-muted-foreground">•</span>
                        <span className="text-xs font-semibold text-primary">{doc.category}</span>
                      </div>
                    </div>
                    <Download size={18} className="text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                  </a>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* LATEST UPDATES */}
        <section id="latest-updates" className="py-20 lg:py-28 bg-section-cream">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
            <ScrollReveal>
              <div className="max-w-3xl mb-16">
                <p className="text-xs uppercase tracking-[0.2em] text-primary font-bold mb-4">What's New</p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight">
                  Latest <em className="italic">updates</em>
                </h2>
                <p className="text-base md:text-lg text-muted-foreground mt-6 leading-relaxed">
                  Events, milestones, awards, and company updates from across the AMOGEN organization.
                </p>
              </div>
            </ScrollReveal>

            <div className="space-y-6">
              {latestUpdates.map((update, i) => (
                <ScrollReveal key={update.title} delay={i * 0.08}>
                  <div className="bg-card rounded-2xl p-6 md:p-8 shadow-sm">
                    <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                      <div className="flex items-center gap-3 md:w-36 shrink-0">
                        <span className="text-sm text-muted-foreground font-medium">{update.date}</span>
                      </div>
                      <div className="flex-1">
                        <span className={`inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3 ${tagColors[update.type] || "bg-muted text-muted-foreground"}`}>
                          {update.type}
                        </span>
                        <h3 className="text-base md:text-lg font-bold text-foreground leading-snug">{update.title}</h3>
                        <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{update.desc}</p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* NEWSLETTER / CTA */}
        <section className="py-20 lg:py-28 bg-background">
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
                    className="flex-1 px-5 py-4 text-sm rounded-md border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                  />
                  <button className="px-8 py-4 text-sm font-semibold rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors whitespace-nowrap">
                    Subscribe
                  </button>
                </div>
                <p className="text-xs text-muted-foreground mt-4">We respect your privacy. Unsubscribe at any time.</p>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default News;
