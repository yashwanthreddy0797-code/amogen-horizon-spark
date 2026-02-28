import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CDMOHero from "@/components/cdmo/CDMOHero";
import CDMOCapabilities from "@/components/cdmo/CDMOCapabilities";
import CDMOTimeline from "@/components/cdmo/CDMOTimeline";
import CDMOPeptideCards from "@/components/cdmo/CDMOPeptideCards";
import CDMOSolutions from "@/components/cdmo/CDMOSolutions";
import CDMORfpProcess from "@/components/cdmo/CDMORfpProcess";
import CDMORelatedContent from "@/components/cdmo/CDMORelatedContent";

const CDMO = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar variant="cdmo" />
      <main>
        <CDMOHero />
        <CDMOCapabilities />
        <CDMOTimeline />
        <CDMOPeptideCards />
        <CDMOSolutions />
        <CDMORfpProcess />
        <CDMORelatedContent />
      </main>
      <Footer />
    </div>
  );
};

export default CDMO;
