import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutHero from "@/components/AboutHero";



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
        <AboutHero />
        
        
        
        <ResearchHighlight />
        <PipelinePreview />
        
        <ManufacturingProcess />
        <NewsPreview />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
