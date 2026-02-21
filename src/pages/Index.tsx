import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import NavigationBridge from "@/components/NavigationBridge";
import TrustStrip from "@/components/TrustStrip";
import TherapeuticAreas from "@/components/TherapeuticAreas";
import AboutStats from "@/components/AboutStats";
import EditorialCards from "@/components/EditorialCards";
import PipelinePreview from "@/components/PipelinePreview";
import ResearchHighlight from "@/components/ResearchHighlight";
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
        <TherapeuticAreas />
        <AboutStats />
        <EditorialCards />
        <PipelinePreview />
        <ResearchHighlight />
        <NewsPreview />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
