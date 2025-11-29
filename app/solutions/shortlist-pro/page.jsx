"use client";

import React from "react";
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion";
import short from "../../../public/short.jpg"
import { Space_Mono, Roboto } from "next/font/google";
import {
  Briefcase,
  Users,
  GitCommit,
  BarChart3,
  Send,
  LayoutDashboard,
  CheckCircle2,
  Lock,
  Zap,
  ArrowRight
} from "lucide-react";

// --- FONTS ---
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

// --- CONSTANTS ---
const ACCENT = "#ae5c83"; 

export default function ShortlistProPage() {
  return (
    <main className={`${spaceMono.variable} ${roboto.variable} bg-white min-h-screen text-slate-800 selection:bg-[#ae5c83] selection:text-white`}>

      {/* SECTION 1: THE "ANTI-HERO" HEADER 
          Focuses purely on the Value Proposition (Typography First) */}
      <section className="pt-26 pb-12 px-6 ">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="momo-font text-[#ae5c83] font-bold tracking-widest uppercase text-sm mb-1 block">
              Recruitment Intelligence
            </span>
            
            <h1 className="momo-font text-5xl md:text-7xl font-bold text-slate-900 mb-1 leading-tight">
              Make Shortlisting Easy!
            </h1>
            
            <div className="flex justify-center mb-1">
              <div className="h-1 w-24 bg-[#ae5c83]"></div>
            </div>

            <h2 className="momo-font text-3xl text-slate-900 mb-1">
              ShortlistPRO
            </h2>

            <p className="roboto-texttext-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
              ShortlistPRO makes it easier for companies to analyze and filter resumes, identifying the most qualified candidates in seconds.
            </p>

            <div className="mt-1">
              <Link href={'/contact'}>
               <button className="px-8 py-4 bg-[#ae5c83] text-white momo-font font-bold rounded hover:bg-[#8f4265] transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 inline-flex items-center gap-2">
                Start Filtering <ArrowRight size={18} />
              </button>
              </Link>
             
            </div>
          </motion.div>
        </div>
      </section>
      

      {/* SECTION 2: CORE MODULES (The Functional Grid) */}
      <section className="py- px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className=" border-l-4 border-[#ae5c83] pl-6">
            <h3 className="momo-font text-2xl font-bold text-slate-900">Core Modules</h3>
            <p className="roboto-text text-slate-500">Everything you need to manage the hiring lifecycle.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 bg-slate-200 border border-slate-200">
            {/* Using a tight grid layout with gap-px for that modern 'border-grid' look */}
            
            <ModuleCard 
              icon={Briefcase} 
              title="Job Posting & Management" 
              desc="Create, edit, and manage job listings across multiple platforms from a single hub." 
            />
            <ModuleCard 
              icon={Users} 
              title="Candidates Listing & Filtering" 
              desc="Advanced filtering to sort thousands of applicants and find the top 1% instantly." 
            />
            <ModuleCard 
              icon={GitCommit} 
              title="Recruitment Pipeline Tracking" 
              desc="Visualize every stage of the hiring process. Drag-and-drop candidate management." 
            />
            <ModuleCard 
              icon={BarChart3} 
              title="Application Analysis" 
              desc="Actionable insights and data-driven metrics to improve your hiring quality." 
            />
            <ModuleCard 
              icon={Send} 
              title="Candidate Submission Portal" 
              desc="A user-friendly frontend for candidates to submit applications seamlessly." 
            />
            <ModuleCard 
              icon={LayoutDashboard} 
              title="Centralized Oversight" 
              desc="One dashboard to view all active jobs, new applicants, and team activities." 
            />
          </div>
        </div>
      </section>
     

      {/* SECTION 3: KEY FEATURES & FOOTER */}
      <section className="py-1 px-6 bg-[#fafafa] ">
        <div className="max-w-6xl mx-auto">
          <div className=" border-l-4 border-[#ae5c83] pl-6">
            <h3 className="momo-font text-2xl font-bold text-slate-900">Core Functionalities</h3>
            <p className="roboto-text text-slate-500">Everything you Will Able To Use.</p>
          </div>
          {/* Key Features Row */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <FeatureItem 
              icon={Zap} 
              title="User-Friendly Interface" 
              desc="Designed for clarity. Both employers and candidates enjoy a seamless, intuitive experience." 
            />
            <FeatureItem 
              icon={CheckCircle2} 
              title="Real-Time Updates" 
              desc="Never miss a top talent. Get instant notifications for new applications and status changes." 
            />
            <FeatureItem 
              icon={Lock} 
              title="Secure & Scalable" 
              desc="Enterprise-grade security to protect candidate data, built on a scalable architecture." 
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

// --- COMPONENTS ---

function ModuleCard({ icon: Icon, title, desc }) {
  return (
    <div className="bg-white border border-[#ae5c83] p-5 hover:bg-[#faf3f7] rounded-md transition-colors group h-full">
      <Icon className="w-10 h-10 text-slate-500 group-hover:text-[#ae5c83] mb-6 transition-colors" />
      <h4 className="momo-font text-lg font-bold text-slate-900 mb-3">{title}</h4>
      <p className="roboto-texttext-slate-500 text-sm leading-relaxed">
        {desc}
      </p>
    </div>
  );
}

function FeatureItem({ icon: Icon, title, desc }) {
  return (
    <div className="flex flex-col border border-[#ae5c83] items-center rounded-md text-center p-2">
      <div className="w-14 h-14 bg-white border border-slate-300 rounded-full flex items-center justify-center mb-4 shadow-sm text-[#ae5c83]">
        <Icon size={24} />
      </div>
      <h4 className="momo-font text-lg font-bold text-slate-900 mb-2">{title}</h4>
      <p className="roboto-texttext-slate-500 text-sm max-w-xs">
        {desc}
      </p>
    </div>
  );
}