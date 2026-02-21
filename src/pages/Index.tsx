import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import TherapeuticAreas from "@/components/TherapeuticAreas";
import PipelinePreview from "@/components/PipelinePreview";
import ResearchHighlight from "@/components/ResearchHighlight";
import NewsPreview from "@/components/NewsPreview";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <Hero />
        <TrustStrip />
        <TherapeuticAreas />
        <PipelinePreview />
        <ResearchHighlight />
        <NewsPreview />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
