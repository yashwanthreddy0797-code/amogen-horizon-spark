import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CDMOHero from "@/components/cdmo/CDMOHero";
import CDMOCapabilities from "@/components/cdmo/CDMOCapabilities";
import CDMOTimeline from "@/components/cdmo/CDMOTimeline";
import CDMOServicesOverview from "@/components/cdmo/CDMOServicesOverview";
import CDMOMicrobialExpertise from "@/components/cdmo/CDMOMicrobialExpertise";
import CDMOPeptideCards from "@/components/cdmo/CDMOPeptideCards";

import CDMOSolutions from "@/components/cdmo/CDMOSolutions";
import CDMORfpProcess from "@/components/cdmo/CDMORfpProcess";
import CDMORelatedContent from "@/components/cdmo/CDMORelatedContent";
import CDMOManufacturingGlance from "@/components/cdmo/CDMOManufacturingGlance";
import CDMOProductsBanner from "@/components/cdmo/CDMOProductsBanner";
import MicrobialScience from "@/components/science/MicrobialScience";

const CDMO = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar variant="cdmo" />
      <main>
        <CDMOHero />
        <CDMOServicesOverview />
        <CDMOManufacturingGlance />
        <CDMOTimeline />
        <CDMOCapabilities />
        <CDMOMicrobialExpertise />
        <CDMOIntegratedServices />
        <MicrobialScience />
        <CDMOPeptideCards />
        <CDMOSolutions />
        <CDMORfpProcess />
        <CDMORelatedContent />
        <div className="py-16" />
        <CDMOProductsBanner />
      </main>
      <Footer />
    </div>
  );
};

export default CDMO;
