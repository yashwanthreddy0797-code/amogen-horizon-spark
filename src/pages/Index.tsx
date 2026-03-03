import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutHero from "@/components/AboutHero";
import ProductsBanner from "@/components/ProductsBanner";
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
        <AboutHero />
        <PipelinePreview />
        <ResearchHighlight />
        <NewsPreview />
        <ProductsBanner />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
