import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import researchCloseup from "@/assets/research-closeup.jpg";
import { TYPE } from "@/typography";

const NewsHero = () =>
<section className="relative w-full h-[55vh] min-h-[420px] flex items-end overflow-hidden">
    <div className="absolute inset-0">
      <img src={researchCloseup} alt="AMOGEN research" className="w-full h-full object-cover" />
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, hsla(0, 70%, 30%, 0.85) 0%, hsla(0, 75%, 25%, 0.75) 50%, hsla(350, 60%, 35%, 0.65) 100%)" }} />
    </div>

    <div className="relative z-10 w-full pb-16" style={{ maxWidth: "1200px", margin: "0 auto", paddingLeft: "24px", paddingRight: "24px" }}>
      <nav className="flex items-center gap-1.5 mb-6" style={{ ...TYPE.meta, color: "rgba(255,255,255,0.8)" }}>
        <Link to="/" className="hover:text-white transition-colors underline underline-offset-2">Home</Link>
        <ChevronRight size={14} className="text-white/60" />
        <span className="text-white">News & Stories</span>
      </nav>
      <h1 style={{ ...TYPE.h1, color: "white" }}>News & stories</h1>
    </div>
  </section>;

export default NewsHero;
