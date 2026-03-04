import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutHero from "@/components/AboutHero";
import ProductsBanner from "@/components/ProductsBanner";
import PipelinePreview from "@/components/PipelinePreview";
import ResearchDevelopment from "@/components/ResearchDevelopment";
import ManufacturingGlance from "@/components/ManufacturingGlance";
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
        <ResearchDevelopment />
        <ManufacturingGlance />
        <ResearchHighlight />
        <ProductsBanner />
        <NewsPreview />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
