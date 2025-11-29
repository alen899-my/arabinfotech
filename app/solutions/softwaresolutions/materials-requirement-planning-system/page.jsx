"use client";

import Image from "next/image";
import React from "react"; 
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Factory, 
  ClipboardList, 
  Boxes, 
  TrendingUp, 
  Users,
  ArrowRight, 
  CheckCircle2,
  FileCheck,
  Search,
  PlayCircle,
  PackageCheck
} from "lucide-react";

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 80, damping: 15 },
  },
};

// --- Sub-Components ---

// 1. Horizontal Feature Card (Same style as Garage Page)
const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ scale: 1.02 }}
      className="flex items-start gap-4 p-5 bg-white rounded-xl border border-gray-400 shadow-sm hover:shadow-md transition-all duration-300 group"
    >
      <div className="shrink-0 p-3 bg-purple-50 text-[#6c53a7] rounded-lg group-hover:bg-[#6c53a7] group-hover:text-white transition-colors duration-300">
        <Icon size={24} />
      </div>
      <div>
        <h3 className="text-lg momo-font font-bold text-gray-800 mb-1">{title}</h3>
        <p className="text-gray-600 roboto-text text-sm leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

// 2. Process Step Card (New for the 3 Steps)
const ProcessStep = ({ number, title, icon: Icon, description }) => (
  <motion.div 
    variants={itemVariants}
    className="relative flex flex-col items-center text-center p-6 bg-white rounded-2xl border border-gray-400 shadow-lg shadow-purple-900/5 hover:-translate-y-2 transition-transform duration-300"
  >
    <div className="absolute -top-4 bg-[#ae5c83] text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
      Step 0{number}
    </div>
    <div className="w-14 h-14 bg-purple-50 rounded-full flex items-center justify-center text-[#6c53a7] mb-2">
      <Icon size={28} />
    </div>
    <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
    <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
  </motion.div>
);

// 3. Stat Box (Same style)
const StatBox = ({ value, label }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="flex flex-col items-center p-4"
  >
    <h4 className="text-4xl font-extrabold text-white mb-1">{value}</h4>
    <p className="text-purple-100 text-sm font-medium">{label}</p>
  </motion.div>
);

// --- Main Page Component ---
const MRPSPage = () => {

  return (
    <div className="min-h-screen w-full bg-[#FAFAFA] text-black selection:bg-[#6c53a7] selection:text-white pb-10">
      
      {/* Background Decor */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] rounded-full bg-[#6c53a7]/5 blur-[90px]" />
        <div className="absolute bottom-[10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[#ae5c83]/5 blur-[100px]" />
      </div>

      {/* ---------- HERO SECTION ---------- */}
     <section className="relative z-10 w-full pt-26 pb-2 px-6 max-w-7xl mx-auto">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
        >
          {/* Column 1: Text Description */}
          <div className="">
            <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              aitEdge-<span className="text-[#6c53a7]">MRPS</span>
              <span className="block text-2xl md:text-3xl text-gray-500 font-medium mt-2">Materials Requirement Planning</span>
            </motion.h1>

            <motion.div variants={itemVariants} className="space-y- text-lg text-gray-600 leading-relaxed">
              <p>
                <strong>Arabinfotec</strong> presents a robust planning and decision-making tool. Analyze current inventory levels versus production capacity and forecast the need to manufacture goods with precision.
              </p>
              

[Image of material requirements planning system diagram]

              <p>
                Schedule production as per <strong>Bills of Materials (BOM)</strong> while minimizing inventory. It's the perfect manufacturing control and production planning system.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="pt-4 flex gap-4">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-[#6c53a7] momo-font hover:bg-[#5a448d] text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-all flex items-center gap-2"
              >
                Schedule Demo
                <ArrowRight size={18} />
              </motion.button>
               <Link href="#mrpfeatures">
                  <motion.button 
                    whileHover={{ scale: 1.05, backgroundColor: "#f3f4f6" }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-white text-gray-700 border border-gray-500 rounded-xl font-bold hover:shadow-lg transition-all"
                  >
                    View Features
                  </motion.button>
                </Link>
            </motion.div>
          </div>

          {/* Column 2: Product Visual */}
          <motion.div variants={itemVariants} className="relative">
             <motion.div 
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-gradient-to-bl from-[#6c53a7] to-[#ae5c83] rounded-2xl opacity-10 blur-2xl"
            ></motion.div>
            
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white">
              {/* Using placeholder /mrp.jpg */}
              <Image 
                src="/material.jpg"
                width={700}
                height={500}
                alt="aitEdge-MRPS Dashboard Interface"
                className="w-full h-auto object-cover"
              />
              
              {/* Floating Badge */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-md px-4 py-3 rounded-xl shadow-lg border border-purple-100 flex items-center gap-3"
              >
                <div className="p-1.5 bg-green-500 rounded-lg">
                    <TrendingUp className="text-white w-4 h-4" />
                </div>
                <div>
                    <p className="text-xs text-gray-400 font-medium">Inventory Efficiency</p>
                    <p className="text-sm font-bold text-gray-900">+35% Optimized</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ---------- STATS STRIP ---------- */}
      <motion.section 
         initial={{ opacity: 0, y: 20 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
         className="w-full bg-[#6c53a7] py-5 mb-3 shadow-inner"
      >
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-purple-400/30">
            <StatBox value="100%" label="Inventory Control" />
            <StatBox value="BOM" label="Bill of Materials" />
            <StatBox value="Auto" label="Order Suggestions" />
            <StatBox value="ROI" label="Productivity Boost" />
        </div>
      </motion.section>

      {/* ---------- THE 3 STEPS PROCESS ---------- */}
      <section className="relative z-10 w-full px-6 max-w-7xl mx-auto mb-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl momo-font font-bold text-[#ae5c83] ">How MRP Works</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">The 3 basic steps of our Material Requirements Planning run.</p>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* Connector Line (Desktop Only) */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-100 -z-10 hidden md:block -translate-y-8" />
          
          <ProcessStep 
            number="1"
            icon={Search}
            title="Identify Requirements"
            description="Analyze production schedules and forecasts to identify exactly which items need to be included in the MRP run."
          />
          <ProcessStep 
            number="2"
            icon={PlayCircle}
            title="Run MRP & Suggest"
            description="The system processes data and creates intelligent suggestions for action (buy, make, or transfer) based on lead times."
          />
          <ProcessStep 
            number="3"
            icon={FileCheck}
            title="Firm Suggestions"
            description="Review and firm the suggestions to automatically release manufacturing orders (MO) and purchase orders (PO)."
          />
        </motion.div>
      </section>

      {/* ---------- FEATURES & BENEFITS GRID ---------- */}
      <section className="relative z-10 w-full px-6 max-w-7xl mx-auto ">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* LEFT: Feature Modules */}
          <div className="lg:col-span-7">
            <div className="mb-">
               <h3 id="mrpfeatures" className="text-2xl font-bold text-[#ae5c83] mb-2">System Capabilities</h3>
               <p className="text-gray-500">Comprehensive tools for modern manufacturing.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               <FeatureCard 
                 icon={ClipboardList} 
                 title="Production Planning" 
                 description="Create realistic production schedules that balance demand with capacity." 
               />
               <FeatureCard 
                 icon={Boxes} 
                 title="Inventory Optimization" 
                 description="Maintain optimal stock levels. Reduce carrying costs without risking stockouts." 
               />
               <FeatureCard 
                 icon={Factory} 
                 title="Manufacturing Control" 
                 description="Gain full visibility into the shop floor. Track work-in-progress (WIP) in real-time." 
               />
               <FeatureCard 
                 icon={TrendingUp} 
                 title="Demand Forecasting" 
                 description="Use historical data to predict future material needs accurately." 
               />
            </div>
          </div>

          {/* RIGHT: Why Choose / Benefits */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 bg-white p-8 rounded-2xl border border-gray-100 shadow-xl shadow-purple-900/5 h-fit"
          >
             <h3 className="text-xl font-bold text-[#ae5c83] mb-4">Why Choose aitEdge-MRPS?</h3>
             <ul className="space-y-2">
               {[
                 "Reduce inventory levels significantly",
                 "Improve manufacturing productivity",
                 "Enhance customer service with on-time delivery",
                 "Automated Purchase Order creation",
                 "Real-time shortage alerts"
               ].map((item, idx) => (
                 <motion.li 
                   key={idx} 
                   whileHover={{ x: 5 }}
                   className="flex items-start gap-3 p-2 rounded-lg hover:bg-purple-50 transition-all"
                 >
                   <CheckCircle2 className="text-[#ae5c83] mt-0.5 shrink-0" size={20} />
                   <span className="text-gray-700 font-medium">{item}</span>
                 </motion.li>
               ))}
             </ul>

          
          </motion.div>

        </div>
      </section>
      {/* ---------- CALL TO ACTION BANNER ---------- */}
        <div className="max-w-5xl mt-10 mx-auto px-6 relative z-20 ">
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
    </div>
  );
};

export default MRPSPage;