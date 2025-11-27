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