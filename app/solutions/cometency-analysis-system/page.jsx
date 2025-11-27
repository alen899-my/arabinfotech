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
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-xl border border-slate-200 shadow-lg"
              >
                 <div className="flex justify-between items-end">
                    <div>
                      <p className="momo-font text-xs text-slate-500 uppercase tracking-widest mb-1">Core Competency</p>
                      <h4 className="roboto-textfont-bold text-2xl text-slate-900">94.8% Score</h4>
                    </div>
                    <div className="h-10 w-24 bg-[#ae5c83]/10 rounded flex items-center justify-center">
                       <BarChart3 className="text-[#ae5c83]" size={20} />
                    </div>
                 </div>
              </motion.div>
            </div>

            {/* Decorative Grid Behind */}
            <div className="absolute -z-10 -bottom-10 -right-10 w-full h-full border-2 border-slate-100 rounded-2xl"></div>
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

            <div className="p-4  rounded-xl border border-slate-400 hover:border-[#ae5c83] transition-colors group">
              <div className="mb-1 bg-white w-12 h-12 rounded-lg flex items-center justify-center border border-slate-100 shadow-sm group-hover:bg-[#ae5c83] group-hover:text-white transition-colors text-slate-400">
                <Brain size={24} />
              </div>
              <h3 className="momo-font text-lg font-bold mb-3">Education Sector</h3>
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

     <section className="relative z-10 -mt-5 px-4 ">
        <div className="max-w-4xl mx-auto text-center   py-14 px-6 ">

          <h3 className="text-3xl md:text-4xl momo-font font-bold text-[#ae5c83]">
            Explore Our Solutions
          </h3>

          <p className="text-gray-500 text-s leading-relaxed mt-1 momo-font">
            Discover a variety of innovative digital tools and technologies 
            tailored to elevate your business performance and accelerate growth.
          </p>

          <a
            href="/contact"
            className="inline-block mt-6 momo-font px-6 py-4 bg-[#6c53a7] text-white rounded-xl font-semibold shadow-lg hover:bg-[#5b4390] transition-all"
          >
            Portfolio →
          </a>

        </div>
      </section>


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