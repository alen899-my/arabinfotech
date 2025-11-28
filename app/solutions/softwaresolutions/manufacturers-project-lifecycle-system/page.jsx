"use client";

import Image from "next/image";
import React, { useState } from "react"; 
import { motion, AnimatePresence } from "framer-motion";
import { 
  Play, 
  Map, 
  Cpu, 
  Activity, 
  Flag,
  Layers,
  ArrowRight,
  TrendingUp,
  ShieldCheck,
  Briefcase
} from "lucide-react";

// --- Data ---
const phases = [
  { 
    id: 1, 
    title: "Initiating", 
    icon: Play, 
    desc: "Define the project scope and obtain necessary approvals to begin." 
  },
  { 
    id: 2, 
    title: "Planning", 
    icon: Map, 
    desc: "Establish total scope, refine objectives, and define the course of action." 
  },
  { 
    id: 3, 
    title: "Executing", 
    icon: Cpu, 
    desc: "Complete the work defined in the project management plan." 
  },
  { 
    id: 4, 
    title: "Monitoring", 
    icon: Activity, 
    desc: "Track, review, and regulate the progress and performance." 
  },
  { 
    id: 5, 
    title: "Closing", 
    icon: Flag, 
    desc: "Finalize all activities across all process groups to formally close." 
  },
];

const MPLSPage = () => {
  const [activePhase, setActivePhase] = useState(phases[0]);

  return (
    <div className="min-h-screen w-full bg-[#FAFAFA] text-black selection:bg-[#6c53a7] selection:text-white pb-20 overflow-x-hidden">
      
      {/* Background Decor */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-white to-[#FAFAFA]" />
      </div>

      {/* =========================================
          SECTION 1: HERO & CONTEXT (Text + Image)
      ========================================= */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Text */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 text-[#6c53a7] text-xs font-bold uppercase tracking-wider border border-purple-100">
               <Layers size={14} /> aitEdge-MPLS
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight momo-font">
              Manufacturers Project <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6c53a7] to-[#ae5c83]">
                Lifecycle System
              </span>
            </h1>

            <div className="text-gray-600 roboto-text text-lg leading-relaxed space-y-4">
              <p>
                The Project Life Cycle provides a framework for managing any type of project within a business. It focuses on the phases, processes, tools, knowledge, and skills of managing a project.
              </p>
              <p>
                Life cycles define the way business objects mature, providing a model for the commercialization process. Business information and objects become more mature throughout the product development cycle.
              </p>
            </div>
          </motion.div>

          {/* Right: Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[350px] md:h-[450px] w-full rounded-3xl overflow-hidden shadow-2xl border-[8px] border-white bg-white"
          >
             <Image 
               src="/prodcycle.jpg" 
               alt="Product Cycle Context" 
               fill 
               className="object-cover hover:scale-105 transition-transform duration-700"
             />
             {/* Gradient Overlay for Text Readability if needed */}
             <div className="absolute inset-0 bg-gradient-to-tr from-[#6c53a7]/10 to-transparent mix-blend-overlay"></div>
             
             {/* Floating Tag */}
             
          </motion.div>
        </div>
      </section>


      {/* =========================================
          SECTION 2: THE LIFECYCLE CHART (Dark Mode)
      ========================================= */}
      <section className="relative z-10 w-full py-5 bg-[#1A0B2E] border-y border-[#6c53a7]/20 overflow-hidden">
        
        {/* Ambient Glows */}
        <div className="absolute top-[-20%] left-[20%] w-[500px] h-[500px] bg-[#6c53a7]/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-[-20%] right-[20%] w-[500px] h-[500px] bg-[#ae5c83]/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl font-bold text-white mb-2 momo-font tracking-wide">Project Life Cycle</h2>
          
          
          {/* CHART CONTAINER */}
          <div className="relative h-[500px] md:h-[650px] w-full flex items-center justify-center">
            
            {/* Background Rings (Glowing SVG) */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-30">
               {/* Outer Ring */}
               <div className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full border border-dashed border-white/30 animate-spin-slow"></div>
               {/* Inner Ring */}
               <div className="absolute w-[200px] h-[200px] md:w-[350px] md:h-[350px] rounded-full border border-white/10"></div>
            </div>

            {/* --- CENTRAL CORE (Active Details) --- */}
            <motion.div 
               layout
               className="absolute z-20 w-[260px] h-[260px] bg-white rounded-full shadow-[0_0_50px_rgba(108,83,167,0.3)] flex flex-col items-center justify-center p-8 text-center border-8 border-[#2D1B4E]"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activePhase.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col items-center"
                >
                   <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#6c53a7] to-[#ae5c83] text-white flex items-center justify-center mb-4 shadow-md">
                      <activePhase.icon size={24} />
                   </div>
                   <h3 className="text-xl font-bold text-gray-900 mb-2 momo-font">{activePhase.title}</h3>
                   <p className="text-sm text-gray-500 roboto-text leading-tight">
                     {activePhase.desc}
                   </p>
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* --- ORBITING NODES --- */}
            {phases.map((phase, index) => {
               // Positions refined for better pentagon/circle shape
               const positions = [
                 "top-[0%] left-1/2 -translate-x-1/2", // Top Center
                 "top-[30%] right-[5%] md:right-[20%]", // Top Right
                 "bottom-[15%] right-[10%] md:right-[25%]", // Bottom Right
                 "bottom-[15%] left-[10%] md:left-[25%]", // Bottom Left
                 "top-[30%] left-[5%] md:left-[20%]", // Top Left
               ];

               const isActive = activePhase.id === phase.id;

               return (
                 <div key={phase.id} className={`absolute ${positions[index]} z-30 flex flex-col items-center justify-center`}>
                   
                   {/* Connector Line (Only visible when active) */}
                   {isActive && (
                      <motion.div 
                        layoutId="connector"
                        className="absolute w-[1px] h-[150px] bg-gradient-to-b from-transparent via-[#ae5c83] to-transparent z-0"
                        style={{ 
                          // Simple rotation logic based on index to point towards center roughly
                          transform: `rotate(${index * 72 + 180}deg)`, 
                          top: '100%',
                          transformOrigin: 'top center'
                        }} 
                      />
                   )}

                   <motion.button
                     onClick={() => setActivePhase(phase)}
                     whileHover={{ scale: 1.1 }}
                     whileTap={{ scale: 0.95 }}
                     className={`
                       relative w-16 h-16 md:w-20 md:h-20 rounded-full border-2 transition-all duration-300 flex items-center justify-center shadow-2xl z-10
                       ${isActive
                         ? "bg-[#ae5c83] border-white text-white scale-110 shadow-[0_0_30px_#ae5c83]" 
                         : "bg-[#2D1B4E] border-[#6c53a7]/50 text-gray-300 hover:border-[#ae5c83] hover:text-white hover:bg-[#36205D]"}
                     `}
                   >
                      <span className="text-xl md:text-2xl font-bold">0{phase.id}</span>
                      
                      {/* Active Ring Pulse */}
                      {isActive && (
                        <span className="absolute inset-0 rounded-full border border-white animate-ping opacity-50"></span>
                      )}
                   </motion.button>

                   {/* Label */}
                   <span className={`mt-3 text-sm font-bold tracking-wider uppercase transition-colors duration-300 ${isActive ? "text-[#ae5c83]" : "text-gray-400"}`}>
                      {phase.title}
                   </span>
                 </div>
               );
            })}
          </div>
        </div>
      </section>


      {/* =========================================
          SECTION 3: IMPACT & MATURITY (Clean Grid)
      ========================================= */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-5">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold  text-[#ae5c83] momo-font mb-3">Business Maturity Model</h2>
          <p className="text-gray-500 max-w-2xl mx-auto roboto-text">
            Our framework systematically matures your business objects, transforming raw ideas into commercialized products with minimized risk.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="group bg-white p-8 rounded-3xl shadow-lg shadow-gray-200/50 border border-gray-400 hover:border-[#6c53a7]/30 transition-all duration-300"
          >
            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-3 group-hover:bg-[#6c53a7] group-hover:text-white transition-colors">
              <TrendingUp size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Object Maturity</h3>
            <p className="text-gray-600 roboto-text text-sm leading-relaxed">
              Business information and objects become more mature throughout the product development cycle, creating a stable foundation for growth.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="group bg-white p-8 rounded-3xl shadow-lg shadow-gray-200/50 border border-purple-400 hover:border-[#6c53a7] transition-all duration-300 relative overflow-hidden"
          >
            {/* Corner Decor */}
             <div className="absolute top-0 right-0 w-24 h-24 bg-[#6c53a7]/5 rounded-bl-full group-hover:bg-[#6c53a7]/10 transition-colors"></div>
            
            <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center text-[#6c53a7] mb-3 group-hover:bg-[#6c53a7] group-hover:text-white transition-colors">
              <Briefcase size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Commercialization</h3>
            <p className="text-gray-600 roboto-text text-sm leading-relaxed">
              Life cycles define the way business objects mature, providing a concrete model for the commercialization process and market entry.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="group bg-white p-8 rounded-3xl shadow-lg shadow-gray-200/50 border border-gray-400 hover:border-[#ae5c83]/30 transition-all duration-300"
          >
            <div className="w-14 h-14 bg-pink-50 rounded-2xl flex items-center justify-center text-[#ae5c83] mb-3 group-hover:bg-[#6c53a7] group-hover:text-white transition-colors">
              <ShieldCheck size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Risk Reduction</h3>
            <p className="text-gray-600 roboto-text text-sm leading-relaxed">
              By following the 5 phases (Initiating to Closing), we systematically reduce ambiguity and risk at every stage of the project.
            </p>
          </motion.div>

        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <button className="px-10 py-4 bg-[#6c53a7] hover:bg-[#5a448d] text-white rounded-xl font-bold shadow-lg shadow-purple-500/20 transition-all hover:scale-105 inline-flex items-center gap-3">
            Standardize Your Process
            <ArrowRight size={20} />
          </button>
        </div>

      </section>

    </div>
  );
};

export default MPLSPage;