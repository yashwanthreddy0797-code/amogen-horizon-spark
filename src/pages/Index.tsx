import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import NavigationBridge from "@/components/NavigationBridge";
import TrustStrip from "@/components/TrustStrip";

import AboutStats from "@/components/AboutStats";
import PipelinePreview from "@/components/PipelinePreview";
import ResearchHighlight from "@/components/ResearchHighlight";
import ManufacturingProcess from "@/components/ManufacturingProcess";
import NewsPreview from "@/components/NewsPreview";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <NavigationBridge />
        
        <ResearchHighlight />
        <PipelinePreview />
        <AboutStats />
        <ManufacturingProcess />
        <NewsPreview />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
