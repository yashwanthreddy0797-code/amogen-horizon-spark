import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { motion, AnimatePresence } from "framer-motion";
import facility1Img from "@/assets/facility-1.jpg";
import facility2Img from "@/assets/facility-2.jpg";
import facility3Img from "@/assets/facility-3.jpg";

const cards = [
{
  title: "Integrated Peptide\nSupply",
  image: facility1Img,
  heading: "Integrated Peptide Supply",
  bullets: [
  "End-to-end peptide supply from development through commercial manufacturing",
  "Seamless integration of API synthesis, purification, and isolation under one roof",
  "Dedicated project management and regulatory support for accelerated timelines",
  "Flexible capacity allocation to meet evolving demand across clinical and commercial phases"]

},
{
  title: "Scientific\nExpertise",
  image: facility2Img,
  heading: "Scientific Expertise",
  bullets: [
  "Deep expertise in peptide chemistry spanning over two decades of innovation",
  "Cross-functional teams of chemists, engineers, and analytical scientists",
  "Proprietary process optimization methodologies for yield and purity improvements",
  "Continuous investment in next-generation peptide synthesis technologies"]

},
{
  title: "Proven Peptide\nManufacturing",
  image: facility3Img,
  heading: "Proven Peptide Manufacturing",
  sections: [
  {
    subtitle: "Solid-Phase Peptide Synthesis (SPPS)",
    bullets: [
    "Automated fully GMP reactors ranging from 12 L to 10,000 L to produce grams to multi-100-kilogram quantities per batch under cGMP with dedicated peptide lines",
    "Robust and efficient production of large-scale commercial peptides embedded into large-volume solvent & waste-handling logistics, warehouse & site infrastructure"]

  },
  {
    subtitle: "Liquid-Phase Peptide Synthesis (LPPS)",
    bullets: [
    "Technology of choice for cost-effective large-scale manufacturing of short peptides or structures not easily prepared by SPPS",
    "Hybrid fragment coupling of shorter SPPS-generated sequences in solution",
    "Cyclization manufacturing of commercial peptides containing a single or multiple disulfide bridges or cyclized lactam peptides"]

  },
  {
    subtitle: "TAG-Assisted Peptide Synthesis (TAPS)",
    bullets: [
    "Advantages of SPPS & LPPS combined in one approach",
    "Substantial reduction of PMI (>90% less solvents and >50% less raw materials)",
    "Standard small molecule manufacturing equipment used",
    "Bottleneck in the upstream peptide specific manufacturing assets eliminated",
    "Aggregation-prone peptides easier to handle with TAPS than conventional SPPS"]

  },
  {
    subtitle: "Purification",
    bullets: [
    "Reach or exceed the required purity at any scale, leveraging preparative High-Pressure Liquid Chromatography (HPLC) technology",
    "Automated reverse-phase HPLC with columns up to 100 cm in diameter, supported by different ion exchange chromatography columns"]

  },
  {
    subtitle: "Isolation",
    bullets: [
    "Traditional final isolation using lyophilization or spray drying",
    "Alternate isolation technique via precipitation process reduces cost and improves API handling at the drug product site with easy scale-up and transfer",
    "Ability to precipitate any peptide upon request (including long peptides with more than 35 amino acids)"]

  }]

}];


const CDMOPeptideCards = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const activeCard = activeIndex !== null ? cards[activeIndex] : null;

  return (
    <section className="py-20 lg:py-28 bg-background">
      


















































































































      
    </section>);

};

export default CDMOPeptideCards;