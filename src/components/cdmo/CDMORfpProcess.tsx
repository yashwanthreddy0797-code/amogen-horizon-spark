import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "framer-motion";
import { Send, ArrowRight } from "lucide-react";

const rfpSteps = [
{
  step: "01",
  title: "Initial Inquiry",
  desc: "Submit your project details through our secure portal or contact our business development team. We'll assign a dedicated project lead within 48 hours.",
  timeline: "Day 1–2"
},
{
  step: "02",
  title: "Technical Assessment",
  desc: "Our scientific team evaluates feasibility, identifies process challenges, and prepares a preliminary scope including timeline, capacity, and regulatory pathway.",
  timeline: "Week 1–2"
},
{
  step: "03",
  title: "Proposal & Alignment",
  desc: "Receive a detailed technical and commercial proposal. We work collaboratively to align on scope, milestones, quality agreements, and pricing structure.",
  timeline: "Week 3–4"
},
{
  step: "04",
  title: "Contract & Kick-off",
  desc: "Finalize MSA, quality agreements, and project plans. A cross-functional kick-off meeting launches your program with clear deliverables and governance.",
  timeline: "Week 5–6"
},
{
  step: "05",
  title: "Execution & Delivery",
  desc: "Your dedicated project team executes the program with regular milestone reviews, transparent reporting, and proactive communication throughout.",
  timeline: "Ongoing"
}];


const CDMORfpProcess = () => {
  const [activeStep, setActiveStep] = useState(0);

  return null;


















































































};

export default CDMORfpProcess;