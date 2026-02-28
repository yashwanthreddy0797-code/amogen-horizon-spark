import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CDMOHero from "@/components/cdmo/CDMOHero";
import CDMOCapabilities from "@/components/cdmo/CDMOCapabilities";
import CDMOTimeline from "@/components/cdmo/CDMOTimeline";
import CDMOSolutions from "@/components/cdmo/CDMOSolutions";
import CDMORfpProcess from "@/components/cdmo/CDMORfpProcess";
import CDMORelatedContent from "@/components/cdmo/CDMORelatedContent";

const CDMO = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <CDMOHero />
        <CDMOCapabilities />
        <CDMOTimeline />
        <CDMOSolutions />
        <CDMORfpProcess />
        <CDMORelatedContent />
      </main>
      <Footer />
    </div>
  );
};

export default CDMO;
