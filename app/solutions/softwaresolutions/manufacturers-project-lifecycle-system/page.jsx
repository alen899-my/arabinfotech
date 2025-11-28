"use client";

import Image from "next/image";
import React, { useState } from "react"; 
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Play, 
  Map, 
  Cpu, 
  Activity, 
  Flag,
  Layers,
  ArrowRight,
  CheckCircle2,
  Zap
} from "lucide-react";

// --- Data ---
const phases = [
  { 
    id: 1, 
    title: "Initiating", 
    icon: Play, 
    desc: "Define the project scope and obtain necessary approvals to begin.",
    details: [
      "Identify Stakeholders",
      "Develop Project Charter",
      "Initial Scope Definition"
    ]
  },
  { 
    id: 2, 
    title: "Planning", 
    icon: Map, 
    desc: "Establish total scope, refine objectives, and define the course of action.",
    details: [
      "Define deliverables",
      "Resource allocation",
      "Risk assessment"
    ]
  },
  { 
    id: 3, 
    title: "Executing", 
    icon: Cpu, 
    desc: "Complete the work defined in the project management plan.",
    details: [
      "Team Management",
      "Quality Assurance",
      "Stakeholder Engagement"
    ]
  },
  { 
    id: 4, 
    title: "Monitoring", 
    icon: Activity, 
    desc: "Track, review, and regulate the progress and performance.",
    details: [
      "Performance Reporting",
      "Change Control",
      "Variance Analysis"
    ]
  },
  { 
    id: 5, 
    title: "Closing", 
    icon: Flag, 
    desc: "Finalize all activities across all process groups to formally close.",
    details: [
      "Project Sign-off",
      "Lessons Learned",
      "Resource Release"
    ]
  },
];

const MPLSPage = () => {
  const [activeTab, setActiveTab] = useState(phases[0]);

  return (
    <div className="min-h-screen w-full bg-[#FAFAFA] text-gray-900 selection:bg-[#6c53a7] selection:text-white pb-20">
      
      {/* Background Decor */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-white via-white to-transparent" />
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#6c53a7]/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 pt-32">
        
        {/* --- HEADER WITH NEW PARAGRAPHS --- */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gray-200 text-[#6c53a7] text-xs font-bold uppercase tracking-wider mb-6 shadow-sm"
          >
            <Layers size={14} /> Manufacturer's Project Lifecycle System
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight momo-font mb-8"
          >
            Framework for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6c53a7] to-[#ae5c83]">
              Business Object Maturity
            </span>
          </motion.h1>
          
          {/* Added Paragraphs Here */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-4 text-lg text-gray-600 roboto-text leading-relaxed text-left md:text-center max-w-3xl mx-auto"
          >
            <p>
              The Project Life Cycle provides a framework for managing any type of project within a business. It focuses on the phases, processes, tools, knowledge and skills of managing a project.
            </p>
            
            



            <p>
              Life cycles define the way business objects mature, providing a model for the commercialization process. Business information and objects become more mature throughout the product development cycle.
            </p>
          </motion.div>
        </div>

        {/* --- FEATURE TOUR LAYOUT (Vertical Tabs) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: VERTICAL NAVIGATION */}
          <div className="lg:col-span-4 flex flex-col relative">
            {/* The vertical gray line */}
            <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-gray-100 hidden lg:block" />
            
            {/* The active moving line (Progress bar) */}
            <motion.div 
              layout
              className="absolute left-6 w-[2px] bg-[#6c53a7] hidden lg:block z-10"
              initial={false}
              animate={{ 
                height: 80, // Height of one item roughly
                top: (activeTab.id - 1) * 96 // Approx distance between items
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />

            <div className="space-y-4">
              {phases.map((phase) => {
                const isActive = activeTab.id === phase.id;
                return (
                  <button
                    key={phase.id}
                    onClick={() => setActiveTab(phase)}
                    className={`
                      relative w-full text-left p-4 rounded-xl transition-all duration-300 group flex items-center gap-4
                      ${isActive ? "bg-white shadow-lg shadow-purple-900/5 lg:bg-transparent lg:shadow-none" : "hover:bg-white hover:shadow-sm"}
                    `}
                  >
                    {/* Number Circle */}
                    <div className={`
                      w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm border-2 transition-all duration-300 shrink-0 z-20 bg-white
                      ${isActive 
                        ? "border-[#6c53a7] text-[#6c53a7] scale-110 shadow-lg shadow-purple-500/20" 
                        : "border-gray-100 text-gray-400 group-hover:border-[#6c53a7]/50 group-hover:text-[#6c53a7]"}
                    `}>
                      0{phase.id}
                    </div>

                    {/* Text */}
                    <div>
                      <h3 className={`font-bold text-lg transition-colors ${isActive ? "text-[#6c53a7]" : "text-gray-700"}`}>
                        {phase.title}
                      </h3>
                      <p className={`text-xs ${isActive ? "text-gray-500" : "text-gray-400"}`}>
                        Click to view details
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>


          {/* RIGHT: DYNAMIC WINDOW (The "Card") */}
          <div className="lg:col-span-8">
             <div className="relative bg-white rounded-3xl border border-gray-100 shadow-2xl shadow-gray-200/50 overflow-hidden min-h-[500px]">
                
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="h-full flex flex-col md:flex-row"
                  >
                    {/* CONTENT SIDE */}
                    <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                       <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center text-[#6c53a7] mb-6">
                          <activeTab.icon size={24} />
                       </div>
                       
                       <h2 className="text-3xl font-bold text-gray-900 mb-4 momo-font">{activeTab.title} Phase</h2>
                       
                       <p className="text-gray-600 roboto-text leading-relaxed mb-8">
                         {activeTab.desc}
                       </p>

                       <div className="space-y-3">
                         <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Key Activities</p>
                         {activeTab.details.map((detail, i) => (
                           <motion.div 
                             key={i}
                             initial={{ opacity: 0, x: -10 }}
                             animate={{ opacity: 1, x: 0 }}
                             transition={{ delay: 0.1 + (i * 0.1) }}
                             className="flex items-center gap-3 text-sm font-medium text-gray-700 bg-gray-50 p-3 rounded-lg"
                           >
                             <CheckCircle2 size={16} className="text-[#ae5c83]" />
                             {detail}
                           </motion.div>
                         ))}
                       </div>

                       <div className="mt-8 pt-6 border-t border-gray-100">
                        <Link href="/contact">
                          <button className="flex items-center gap-2 text-[#6c53a7] font-bold text-sm hover:gap-3 transition-all">
                             Start {activeTab.title} Process <ArrowRight size={16} />
                          </button>
                        </Link>
                        
                       </div>
                    </div>

                    {/* IMAGE SIDE */}
                    <div className="md:w-1/2 relative min-h-[300px] md:min-h-full bg-gray-100">
                       <Image 
                         src="/prodcycle.jpg" 
                         alt="Product Cycle Visualization" 
                         fill 
                         className="object-cover"
                       />
                       {/* Gradient Overlay */}
                       <div className="absolute inset-0 bg-gradient-to-t from-[#6c53a7]/80 to-transparent mix-blend-multiply opacity-60"></div>
                       
                       {/* Floating Stats Card on Image */}
                       <motion.div 
                         initial={{ y: 20, opacity: 0 }}
                         animate={{ y: 0, opacity: 1 }}
                         transition={{ delay: 0.3 }}
                         className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/50"
                       >
                          <div className="flex items-center justify-between mb-2">
                             <div className="flex items-center gap-2">
                                <Zap size={16} className="text-orange-500 fill-orange-500" />
                                <span className="text-xs font-bold uppercase text-gray-600">Impact Score</span>
                             </div>
                             <span className="text-lg font-bold text-gray-900">98%</span>
                          </div>
                          <div className="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden">
                             <motion.div 
                               initial={{ width: 0 }}
                               animate={{ width: "98%" }}
                               transition={{ duration: 1, delay: 0.5 }}
                               className="h-full bg-gradient-to-r from-[#6c53a7] to-[#ae5c83]"
                             />
                          </div>
                       </motion.div>
                    </div>

                  </motion.div>
                </AnimatePresence>

             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default MPLSPage;