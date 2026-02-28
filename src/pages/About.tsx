import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "framer-motion";
import aboutHero from "@/assets/about-hero.jpg";
import AboutAtGlance from "@/components/about/AboutAtGlance";
import AboutVisionMission from "@/components/about/AboutVisionMission";
import AboutCultureWay from "@/components/about/AboutCultureWay";
import AboutWhoWeAre from "@/components/about/AboutWhoWeAre";
import AboutWhatWeDo from "@/components/about/AboutWhatWeDo";
import AboutLeadership from "@/components/about/AboutLeadership";
import AboutGovernance from "@/components/about/AboutGovernance";
import AboutSustainability from "@/components/about/AboutSustainability";
import AboutCareers from "@/components/about/AboutCareers";
import AboutHelp from "@/components/about/AboutHelp";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* HERO */}
        <section className="relative min-h-[85vh] flex items-end overflow-hidden">
          <div className="absolute inset-0">
            <img src={aboutHero} alt="AMOGEN research laboratory" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-foreground/20" />
          </div>
          <div className="relative w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 pb-20 pt-40">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
              <p className="text-xs uppercase tracking-[0.25em] text-primary-foreground/60 font-semibold mb-4">
                <a href="/" className="hover:text-primary-foreground underline underline-offset-4">Home</a>
                <span className="mx-2">/</span>
                About
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-primary-foreground leading-[1.05] max-w-5xl">
                We are a peptide medicine company.
              </h1>
              <p className="mt-8 text-lg md:text-xl text-primary-foreground/80 max-w-2xl leading-relaxed font-light">
                From groundbreaking research to record investments in manufacturing, we ruthlessly prioritize giving everyone a chance at health.
              </p>
            </motion.div>
          </div>
        </section>

        {/* At a Glance — CurateQ-inspired layout */}
        <AboutAtGlance />

        {/* Vision & Mission */}
        <AboutVisionMission />

        {/* Culture — Way */}
        <AboutCultureWay />

        {/* Who We Are */}
        <AboutWhoWeAre />

        {/* What We Do */}
        <AboutWhatWeDo />

        {/* Leadership */}
        <AboutLeadership />

        {/* Governance */}
        <AboutGovernance />

        {/* Sustainability */}
        <AboutSustainability />

        {/* Careers CTA */}
        <AboutCareers />

        {/* Help */}
        <AboutHelp />
      </main>
      <Footer />
    </div>
  );
};

export default About;
