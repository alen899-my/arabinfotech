"use client";
import Link from "next/link"
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Space_Mono, Roboto } from "next/font/google";
import {
  Brain,
  Target,
  BarChart3,
  Users,
  Layers,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Microscope
} from "lucide-react";

// --- FONT CONFIGURATION ---
const spaceMono = Space_Mono({ 
  weight: ["400", "700"], 
  subsets: ["latin"], 
  variable: "--momo-font" 
});

const roboto = Roboto({ 
  weight: ["300", "400", "500", "700"], 
  subsets: ["latin"], 
  variable: "--roboto-text " 
});

// --- ANIMATION VARIANTS ---
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export default function CompetencyAnalysisPage() {
  return (
    <main className={`${spaceMono.variable} ${roboto.variable} bg-white min-h-screen text-slate-800 overflow-x-hidden selection:bg-[#ae5c83] selection:text-white`}>

      
      <section className="relative pt-32 pb-20 px-6 lg:px-12 overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#faf3f7] -z-10 skew-x-12 translate-x-20"></div>
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#ae5c83]/5 rounded-full blur-3xl -z-10"></div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Text Content */}
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={staggerContainer}
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1 rounded border border-[#ae5c83]/30 bg-[#fff0f5] text-[#ae5c83] text-xs momo-font font-bold tracking-wider mb-6">
              <TrendingUp size={14} /> aitEdge-CAS
            </motion.div>
            
            <motion.h1 variants={fadeUp} className="momo-font text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.1] mb-6">
              Make an Impact. <br />
              <span className="text-[#ae5c83]">Measure Potential.</span>
            </motion.h1>
            
            <motion.p variants={fadeUp} className="roboto-texttext-xl text-slate-600 leading-relaxed mb-8 max-w-lg">
              The <strong>Competency Analytics System</strong> is your instrument for precision. Measure knowledge, skills, and human capital capabilities to drive performance in business and education.
            </motion.p>
            
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <Link href={'/contact'}> 
              <button className="px-8 py-4 bg-[#ae5c83] text-white momo-font font-bold rounded shadow-lg hover:bg-[#8f4265] transition-all flex items-center gap-2">
                Start Analysis <ArrowRight size={18} />
              </button>
             </Link>
            </motion.div>
          </motion.div>

          {/* Right: Hero Image with Floating Effect */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main Image Container */}
            <div className="relative rounded-2xl overflow-hidden border-2 border-slate-100 shadow-2xl bg-white">
              {/* PLACEHOLDER FOR YOUR HERO IMAGE */}
              <Image 
                src="/comp.jpg"
                alt="Competency Analytics Dashboard"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                priority
              />
              
              {/* Floating Data Card Overlay */}
             
            </div>

          
          </motion.div>
        </div>
      </section>

      {/* 2. DEFINITION & PURPOSE (Clean Typography) */}
      <section className="py-5 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="momo-font text-3xl font-bold text-[#ae5c83] mb-1">
            What is Competency Analysis?
          </h2>
          <p className="roboto-texttext-2xl text-slate-500 font-light leading-normal mb-1">
            "It is an evaluative way to measure performance in an <strong className="text-slate-900 font-medium">organized, structured manner.</strong>"
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="p-8 rounded-xl border border-slate-400 hover:border-[#ae5c83] transition-colors group">
              <div className="mb-1 bg-white w-12 h-12 rounded-lg flex items-center justify-center border border-slate-400 shadow-sm group-hover:bg-[#ae5c83] group-hover:text-white transition-colors text-slate-400">
                <Users size={24} />
              </div>
              <h3 className="momo-font text-lg font-bold mb-">Human Capital</h3>
              <p className="roboto-text text-slate-600 leading-relaxed">
                Analyze a company’s products, services, and workforce. Identify gaps in skills and knowledge to optimize organizational structure.
              </p>
            </div>

            <div className="p-8 rounded-xl border border-slate-400 hover:border-[#ae5c83] transition-colors group">
              <div className="mb-1 bg-white w-12 h-12 rounded-lg flex items-center justify-center border border-slate-400 shadow-sm group-hover:bg-[#ae5c83] group-hover:text-white transition-colors text-slate-400">
                <Brain size={24} />
              </div>
              <h3 className="momo-font text-lg font-bold mb-">Education Sector</h3>
              <p className="roboto-text text-slate-600 leading-relaxed">
                Determine core competencies in student performance. Move beyond grades to measure actual capabilities and applied knowledge.
              </p>
            </div>
          </div>
        </div>
      </section>

    

      {/* 4. APPLICATION TOOLS GRID */}
      <section className="py-5 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="">
              <h2 className="momo-font text-3xl font-bold text-[#ae5c83] mb-1">Application Tools</h2>
              <p className="roboto-text text-slate-500">How we analyze and visualize the data.</p>
            </div>
            <div className="h-px bg-slate-400 flex-grow ml-8 mb-1 hidden md:block"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
             <ToolCard 
               title="Skill Gap Analysis" 
               desc="Visualize the delta between current capabilities and required proficiency levels."
               metric="Accuracy"
               val="99%"
             />
             <ToolCard 
               title="360° Feedback Loops" 
               desc="Gather structured competency data from peers, managers, and self-assessments."
               metric="Participation"
               val="High"
             />
             <ToolCard 
               title="Performance Matrix" 
               desc="Map potential vs. performance to identify future leaders and training needs."
               metric="Insight"
               val="Deep"
             />
          </div>
        </div>
      </section>

    
<div className="max-w-5xl mx-auto px-6 relative z-20 ">
  <div className="bg-white rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] p-10 md:p-5 text-center border border-slate-100 relative overflow-hidden">
    
    {/* Top Gradient Line Accent */}
    <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#6c53a7] via-[#ae5c83] to-[#6c53a7]" />

    {/* Background Pattern (Optional) */}
    <div className="absolute inset-0 bg-[radial-gradient(#6c53a7_0.5px,transparent_0.5px)] [background-size:16px_16px] opacity-[0.03]" />

    <div className="relative z-10">
      <h2 className="text-3xl md:text-5xl momo-font font-extrabold text-slate-900 tracking-tight mb-2">
        Explore Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6c53a7] to-[#ae5c83]">Solutions</span>
      </h2>

      <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto roboto-text mb-4 leading-relaxed">
        Discover a variety of innovative digital tools tailored to elevate
        your business performance.
      </p>

      <div className="flex justify-center">
        <Link
          href="/portfolio"
          className="
            group
            flex items-center gap-3
            pl-8 pr-6 py-4
            rounded-full
            bg-[#5b4390] 
            text-white 
            font-bold 
            shadow-xl shadow-[#5b4390]/25
            hover:bg-[#4a3675]
            hover:shadow-2xl hover:shadow-[#5b4390]/40
            hover:-translate-y-1
            transition-all 
            duration-300
          "
        >
          <span>View Portfolio</span>
          <div className="bg-white/20 p-1 rounded-full group-hover:translate-x-1 transition-transform">
             {/* Assuming you have lucide-react imported */}
            
          </div>
        </Link>
      </div>
    </div>
  </div>
</div>


    </main>
  );
}

// --- SUB-COMPONENT ---
function ToolCard({ title, desc, metric, val }) {
  return (
    <div className="group relative p-4 bg-white border border-slate-400 rounded-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
       <div className="absolute top-0 left-0 w-full h-1 bg-slate-100 group-hover:bg-[#ae5c83] transition-colors rounded-t-xl"></div>
       
       <div className="flex justify-between items-start mb-6">
         <Layers className="text-slate-300 group-hover:text-[#ae5c83] transition-colors" size={32} />
         <div className="text-right">
            <span className="block momo-font text-[10px] uppercase text-slate-400">{metric}</span>
            <span className="block momo-font text-lg font-bold text-slate-900">{val}</span>
         </div>
       </div>

       <h3 className="momo-font text-xl font-bold mb-1 group-hover:text-[#ae5c83] transition-colors">{title}</h3>
       <p className="roboto-text text-sm text-slate-600 leading-relaxed">
         {desc}
       </p>
    </div>
  )
}