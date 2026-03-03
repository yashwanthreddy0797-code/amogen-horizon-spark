import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import researchCloseup from "@/assets/research-closeup.jpg";

const NewsHero = () => (
  <section className="relative w-full h-[55vh] min-h-[420px] flex items-end overflow-hidden">
    {/* Background image with red overlay */}
    <div className="absolute inset-0">
      <img
        src={researchCloseup}
        alt="AMOGEN research"
        className="w-full h-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, hsla(0, 70%, 30%, 0.85) 0%, hsla(0, 75%, 25%, 0.75) 50%, hsla(350, 60%, 35%, 0.65) 100%)",
        }}
      />
    </div>

    <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-16 pb-16">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-[13px] text-white/80 mb-6">
        <Link to="/" className="hover:text-white transition-colors underline underline-offset-2">
          Home
        </Link>
        <ChevronRight size={14} className="text-white/60" />
        <span className="text-white">News & Stories</span>
      </nav>
      <h1
        className="text-[3rem] md:text-[4rem] lg:text-[5rem] font-bold text-white leading-[1.05] tracking-[-0.02em]"
        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
      >
        News & stories
      </h1>
    </div>
  </section>
);

export default NewsHero;
