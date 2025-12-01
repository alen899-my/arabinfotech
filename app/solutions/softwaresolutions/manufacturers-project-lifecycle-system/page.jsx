"use client";

import Image from "next/image";
import React, { useState } from "react"; 
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Play, Map, Cpu, Activity, Flag,
  ArrowRight, CheckCircle2, ChevronRight, Layers
} from "lucide-react";

// --- Data ---
const phases = [
  { 
    id: 1, 
    title: "Initiating", 
    icon: Play, 
    desc: "Define the project scope and obtain necessary approvals to begin.",
    details: ["Identify Stakeholders", "Develop Project Charter", "Initial Scope Definition"]
  },
  { 
    id: 2, 
    title: "Planning", 
    icon: Map, 
    desc: "Establish total scope, refine objectives, and define the course of action.",
    details: ["Define deliverables", "Resource allocation", "Risk assessment"]
  },
  { 
    id: 3, 
    title: "Executing", 
    icon: Cpu, 
    desc: "Complete the work defined in the project management plan.",
    details: ["Team Management", "Quality Assurance", "Stakeholder Engagement"]
  },
  { 
    id: 4, 
    title: "Monitoring", 
    icon: Activity, 
    desc: "Track, review, and regulate the progress and performance.",
    details: ["Performance Reporting", "Change Control", "Variance Analysis"]
  },
  { 
    id: 5, 
    title: "Closing", 
    icon: Flag, 
    desc: "Finalize all activities across all process groups to formally close.",
    details: ["Project Sign-off", "Lessons Learned", "Resource Release"]
  },
];

const MPLSPage = () => {
  const [activeTab, setActiveTab] = useState(phases[0]);
  const [direction, setDirection] = useState(0);

  const handleTabChange = (newTab) => {
    setDirection(newTab.id > activeTab.id ? 1 : -1);
    setActiveTab(newTab);
  };

  const nextPhase = () => {
    const nextId = activeTab.id < phases.length ? activeTab.id : 1;
    const nextTab = phases.find(p => p.id === nextId + 1) || phases[0];
    handleTabChange(nextTab);
  };

  return (
    <div className="min-h-screen w-full bg-white text-slate-900 pb-20 relative overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-slate-50 to-white -z-10" />
      <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] bg-[#ae5c83]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-[20%] right-[-100px] w-[600px] h-[600px] bg-[#6c53a7]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 pt-16">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-12 max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-4">
             <div className="w-8 h-1 bg-[#6c53a7] rounded-full" />
             <span className="text-[#6c53a7] font-bold uppercase tracking-widest text-xs">Lifecycle Methodology</span>
             <div className="w-8 h-1 bg-[#6c53a7] rounded-full" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight momo-font mb-6">
            Framework for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6c53a7] to-[#ae5c83]">Business Object Maturity</span>
          </h1>
          
          <p className="text-lg text-slate-600 roboto-text leading-relaxed max-w-2xl mx-auto">
             A structured approach to project execution, ensuring consistency and quality from initiation to closure.
          </p>
        </div>
        
        {/* Diagram Placeholder */}
        <div className="hidden">
           


        </div>

        {/* --- WIZARD NAVIGATION (Progress Bar) --- */}
        <div className="relative mb-16 px-4">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-100 -translate-y-1/2 rounded-full -z-10 hidden md:block" />
          
          <div className="flex justify-between items-center max-w-4xl mx-auto relative">
             {/* Mobile View: Simple progress text */}
             <div className="md:hidden w-full text-center text-sm font-bold text-slate-500 mb-4">
               Phase {activeTab.id} of {phases.length}
             </div>

             {/* Desktop View: Steps */}
             <div className="hidden md:flex justify-between w-full">
                {phases.map((phase) => {
                  const isActive = activeTab.id === phase.id;
                  const isCompleted = activeTab.id > phase.id;
                  
                  return (
                    <button 
                      key={phase.id}
                      onClick={() => handleTabChange(phase)}
                      className="group flex flex-col items-center gap-3 relative"
                    >
                      <div className={`
                        w-12 h-12 rounded-full flex items-center justify-center border-4 transition-all duration-300 z-10 bg-white
                        ${isActive 
                           ? "border-[#ae5c83] text-[#ae5c83] scale-125 shadow-xl" 
                           : isCompleted 
                              ? "border-[#6c53a7] text-white bg-[#6c53a7]" 
                              : "border-slate-200 text-slate-300 group-hover:border-slate-300"}
                      `}>
                         {isCompleted ? <CheckCircle2 size={18} /> : <phase.icon size={18} />}
                      </div>
                      <span className={`
                        text-xs font-bold uppercase tracking-wider transition-colors absolute -bottom-8 w-32 text-center
                        ${isActive ? "text-[#ae5c83]" : isCompleted ? "text-[#6c53a7]" : "text-slate-300"}
                      `}>
                        {phase.title}
                      </span>
                    </button>
                  );
                })}
             </div>
          </div>
        </div>

        {/* --- MAIN CONTENT CARD (Reversed Layout) --- */}
        <div className="relative min-h-[600px]">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={activeTab.id}
            custom={direction}
            initial={{ opacity: 0, x: direction > 0 ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction > 0 ? -50 : 50 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="grid lg:grid-cols-2 gap-0 bg-white rounded-[3rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] overflow-hidden border border-slate-100"
          >
            
            {/* LEFT: VISUAL (Reversed Position) */}
            <div className="relative h-[400px] lg:h-auto bg-slate-900 group">
               <Image 
                 src="/prodcycle.jpg" 
                 alt={`${activeTab.title} Phase Visualization`} 
                 fill 
                 className="object-cover opacity-80 group-hover:opacity-60 transition-opacity duration-500"
               />
               
               {/* Overlay Gradients */}
               <div className="absolute inset-0 bg-gradient-to-tr from-[#6c53a7]/80 to-[#ae5c83]/40 mix-blend-overlay" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

               {/* Decorative Content on Image */}
               <div className="absolute bottom-10 left-10 text-white z-10">
                  <div className="text-6xl font-bold opacity-20 momo-font mb-2">0{activeTab.id}</div>
                  <h3 className="text-2xl font-bold">{activeTab.title} Phase</h3>
                  <div className="h-1 w-12 bg-[#ae5c83] mt-4 rounded-full" />
               </div>
            </div>

            {/* RIGHT: CONTENT (Reversed Position) */}
            <div className="p-10 md:p-14 lg:p-16 flex flex-col justify-center">
               
               <div className="mb-6">
                 <div className="inline-flex items-center gap-2 text-[#ae5c83] font-bold uppercase tracking-wider text-xs mb-4">
                    <Layers size={14} /> Process Detail
                 </div>
                 <h2 className="text-3xl md:text-4xl font-bold text-slate-900 momo-font leading-tight">
                   {activeTab.title} the <br/> Project Scope
                 </h2>
               </div>

               <p className="text-lg text-slate-600 mb-8 roboto-text leading-relaxed border-l-4 border-slate-100 pl-4">
                 {activeTab.desc}
               </p>

               <div className="bg-slate-50 rounded-2xl p-6 mb-8">
                  <h4 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                    <Activity size={18} className="text-[#6c53a7]" /> 
                    Key Activities
                  </h4>
                  <ul className="space-y-3">
                   {activeTab.details.map((item, i) => (
                     <motion.li 
                       key={i} 
                       initial={{ opacity: 0, x: 20 }}
                       animate={{ opacity: 1, x: 0 }}
                       transition={{ delay: 0.2 + (i * 0.1) }}
                       className="flex items-center gap-3 text-slate-600 text-sm font-medium"
                     >
                       <div className="w-1.5 h-1.5 rounded-full bg-[#ae5c83]" />
                       {item}
                     </motion.li>
                   ))}
                  </ul>
               </div>

               <div className="flex items-center gap-4">
                 <Link href="/contact">
                    <button className="px-8 py-4 bg-[#6c53a7] text-white rounded-xl font-bold shadow-lg shadow-purple-200 hover:shadow-xl hover:bg-[#5a448d] transition-all flex items-center gap-2">
                      Start Phase
                    </button>
                 </Link>
                 
                 {activeTab.id < phases.length && (
                   <button 
                     onClick={nextPhase}
                     className="px-6 py-4 text-slate-500 hover:text-[#ae5c83] font-bold transition-colors flex items-center gap-2"
                   >
                     Next Step <ChevronRight size={18} />
                   </button>
                 )}
               </div>

            </div>

          </motion.div>
        </AnimatePresence>
        </div>
           <div className="max-w-5xl mt-2 mx-auto px-6 relative z-20 ">
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
                        href="/portfolio/featured"
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
      </div>
    </div>
  );
};

export default MPLSPage;