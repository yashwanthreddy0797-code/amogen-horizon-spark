import { useState, useMemo } from "react";
import { ArrowRight, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import NewsHero from "@/components/news/NewsHero";
import NewsDevelopments from "@/components/news/NewsDevelopments";
import NewsPressReleases from "@/components/news/NewsPressReleases";
import NewsMediaSection from "@/components/news/NewsMediaSection";
import NewsExploreMore from "@/components/news/NewsExploreMore";

const News = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar variant="news" />
      <main>
        <NewsHero />
        <NewsDevelopments />
        <NewsPressReleases />
        <NewsMediaSection />
        <NewsExploreMore />
      </main>
      <Footer />
    </div>
  );
};

export default News;
