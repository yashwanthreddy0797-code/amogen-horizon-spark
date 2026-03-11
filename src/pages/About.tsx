import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import AboutAtGlance from "@/components/about/AboutAtGlance";
import AboutVisionMission from "@/components/about/AboutVisionMission";
import AboutCultureWay from "@/components/about/AboutCultureWay";
import AboutWhoWeAre from "@/components/about/AboutWhoWeAre";
import AboutWhatWeDo from "@/components/about/AboutWhatWeDo";
import AboutLeadership from "@/components/about/AboutLeadership";
import AboutCareers from "@/components/about/AboutCareers";


const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar variant="about" />
      <main>
        {/* HERO */}
        <section className="relative min-h-[70vh] flex items-end overflow-hidden" style={{ backgroundColor: "#b1d5f2" }}>
          {/* Decorative sweeping golden line */}
          <svg
            className="absolute top-1/2 -translate-y-1/2 left-0 w-full h-[200px] pointer-events-none"
            viewBox="0 0 1400 200"
            fill="none"
            preserveAspectRatio="none"
            aria-hidden="true">

            <path
              d="M-20 180 Q200 20 500 60 Q800 100 1000 30 Q1200 -20 1420 50"
              stroke="#FFFFFF"
              strokeWidth="4"
              strokeLinecap="round"
              fill="none" />

          </svg>
          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 pb-20 pt-40">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
              <p className="text-xs uppercase tracking-[0.25em] font-semibold mb-4" style={{ color: "#001965", opacity: 0.6 }}>
                <a href="/" className="hover:opacity-100 underline underline-offset-4" style={{ color: "#001965" }}>Home</a>
                <span className="mx-2">/</span>About
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-[1.05] max-w-5xl" style={{ color: "#001965" }}>We are a peptide & biologic biosimilar company.


              </h1>
              <p className="mt-8 text-lg md:text-xl max-w-2xl leading-relaxed" style={{ color: "#001965", opacity: 0.75 }}>Founded in 2020. Built on Fermentation and chemical{"\n"}ligation technology. Developing a biosimilar pipeline{"\n"}and manufacturing platform for the markets that{"\n"}need them most.</p>
              <div className="flex flex-wrap gap-4 mt-10">
                <a href="#who-we-are"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-full border-2 border-[#001965] text-[#001965] transition-all duration-300 hover:bg-[#001965] hover:text-white">

                  Learn More <ArrowRight size={14} />
                </a>
                <a
                  href="#careers"
                  className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-full border-2 border-[#001965] text-[#001965] transition-all duration-300 hover:bg-[#001965] hover:text-white">Learn More

                  <ArrowRight size={14} />
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* At a Glance — CurateQ-inspired layout */}
        <AboutAtGlance />

        {/* Vision & Mission */}
        <AboutVisionMission />

        {/* Leadership */}
        <AboutLeadership />

        {/* Culture — Way */}
        <AboutCultureWay />



        {/* Careers CTA */}
        <AboutCareers />

      </main>
      <Footer />
    </div>);

};

export default About;