"use client";

import React from "react";
import Link from "next/link"
import Image from "next/image"; // Import Next.js Image component
import { motion } from "framer-motion";
import { Space_Mono, Roboto } from "next/font/google";
import {
  Users,
  ClipboardList,
  Tent,
  Clock,
  Briefcase,
  FileText,
  Wrench,
  ShieldCheck,
  TrendingUp,
  ArrowRight,
  LayoutGrid,
  Search,
  Bell,
  Menu,
  MoreHorizontal
} from "lucide-react";

// --- FONT CONFIGURATION ---
const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-mono",
});

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--roboto-text ",
});

// --- CONSTANTS ---
const ACCENT = "#ae5c83";

// --- ANIMATION VARIANTS ---
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

export default function ManpowerPage() {
  return (
    <main
      className={`${spaceMono.variable} ${roboto.variable} bg-white min-h-screen text-slate-800 selection:bg-[#ae5c83] selection:text-white overflow-x-hidden`}
    >
      {/* SECTION 1: HERO - INTRODUCTION */}
      <section className="pt-32 pb-10 px-6 border-b border-slate-100 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px]">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <span className="inline-block py-1 px-3 rounded border border-[#ae5c83]/20 bg-[#fff0f5] text-[#ae5c83] momo-font text-xs font-bold tracking-widest mb-1">
              WORKFORCE  MANAGEMENT REIMAGINED
            </span>
            <h1 className="momo-font text-5xl md:text-7xl font-bold text-[#ae5c83] leading-tight mb-1">
              Manpower <span className="text-slate-900">Supply</span> Software
            </h1>
            <h2 className="roboto-text  text-2xl md:text-3xl text-slate-500 font-light max-w-4xl mx-auto mb-1">
              Transform your workforce management with our Manpower Supply Software.
            </h2>
            <p className="roboto-text  text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed mb-1">
              Increase labor productivity and efficiently allocate human resources.
              From part-time skilled workers to large-scale project deployments,
              control every aspect of your operation effortlessly.
            </p>
            <div className="flex justify-center gap-4">

              <Link href={'/contact'}>
              <button className="px-8 py-4 bg-[#ae5c83] text-white momo-font font-bold rounded shadow-lg hover:bg-[#8f4265] transition-all flex items-center gap-2">
                Request Demo <ArrowRight size={18} />
              </button>
             </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: THE DASHBOARD & 3 CHARTS (IMAGE BASED) */}
      <section className="py-5 px-6 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="mb-1 text-center">
            <h3 className="momo-font text-3xl font-bold text-[#ae5c83] mb-1">
              Operational Visibility
            </h3>
            <p className="roboto-text  text-slate-500">
              Real-time insights into your labor pool and project demands.
            </p>
          </div>

          {/* DASHBOARD LAYOUT GRID */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid lg:grid-cols-4 gap-8 items-start"
          >
            
           
            <div className="lg:col-span-3 bg-white p-2 rounded-2xl shadow-xl border-2 border-slate-600 relative group overflow-hidden">
               {/* Subtle hover overlay */}
               <div className="absolute inset-0 bg-[#ae5c83]/0 transition-colors group-hover:bg-[#ae5c83]/5 z-10 pointer-events-none"></div>
               
             
               <Image 
                 src="/manpower.jpg" 
                 alt="aitEdge-MSS Main Dashboard View"
                 width={1200}
                 height={1000}
                 className="w-full h-auto rounded-xl "
                 priority
               />
            </div>

            {/* 2. RIGHT COLUMN: 3 CHART IMAGES STACKED */}
            <div className="lg:col-span-1 flex flex-col gap-2">
                
                {/* Chart Image 1 */}
                <div className="bg-white p-2 rounded-xl shadow-md border-2 border-slate-600 hover:shadow-xl hover:-translate-y-1 transition-all group relative overflow-hidden">
                   {/* REPLACE src WITH YOUR CHART 1 IMAGE */}
                   <Image 
                     src="/manpower2.jpg" 
                     alt="Workforce Allocation Chart"
                     width={400}
                     height={300}
                     className="w-full h-auto rounded-lg border border-slate-50"
                   />
                </div>

                {/* Chart Image 2 */}
                <div className="bg-white p-2 rounded-xl shadow-md border-2 border-slate-600 hover:shadow-xl hover:-translate-y-1 transition-all group relative overflow-hidden">
                   {/* REPLACE src WITH YOUR CHART 2 IMAGE */}
                   <Image 
                     src="/manpower3.jpg" 
                     alt="Attendance Trends Chart"
                     width={400}
                     height={300}
                     className="w-full h-auto rounded-lg border border-slate-50"
                   />
                </div>

                {/* Chart Image 3 */}
                <div className="bg-white p-2 rounded-xl shadow-md border-2 border-slate-600 hover:shadow-xl hover:-translate-y-1 transition-all group relative overflow-hidden">
                   {/* REPLACE src WITH YOUR CHART 3 IMAGE */}
                   <Image 
                     src="/manpower4.jpg" 
                     alt="Project Revenue Chart"
                     width={400}
                     height={300}
                     className="w-full h-auto rounded-lg border border-slate-50"
                   />
                </div>

            </div>

          </motion.div>
        </div>
      </section>

      {/* SECTION 3: WHY & BENEFITS (Text & Grid) */}
      <section className="py-5 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16">
          
          {/* Left: The "Why" Text */}
          <div className="lg:col-span-5">
            <h3 className="momo-font text-3xl font-bold text-[#ae5c83] mb-3">
              Why aitEdge-MSS?
            </h3>
            <div className="space-y-6 roboto-text  text-slate-600 leading-relaxed">
              <p>
                The workload of a manpower supply institution fluctuates wildly. Managing skilled, semi-skilled, and unskilled workers across various projects creates operational chaos when done manually.
              </p>
              <p>
                <strong>aitEdge-MSS</strong> steps in as a reliable backbone. It transforms fragmented manual processes into a streamlined digital workflow.
              </p>
              <div className="p-6 bg-[#faf3f7] rounded-lg border border-[#ae5c83]/20 mt-8">
                <p className="momo-font text-sm text-[#ae5c83] font-bold mb-1">KEY ADVANTAGE</p>
                <p className="text-slate-800 text-sm">
                  Available for small, mid-sized, and large companies. Fully customizable to manage your specific business logic reliably at your fingertips.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Benefits Grid */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            <BenefitCard 
              icon={TrendingUp} 
              title="Reduced Operational Costs" 
              desc="Minimize wastage and overhead through digital tracking." 
            />
            <BenefitCard 
              icon={Search} 
              title="Improved Visibility" 
              desc="See workforce performance and location in real-time." 
            />
            <BenefitCard 
              icon={ShieldCheck} 
              title="Effective Compliance" 
              desc="Automated document expiry reminders and NOC generation." 
            />
            <BenefitCard 
              icon={Users} 
              title="Expanded Collaboration" 
              desc="Connect HR, Site Supervisors, and Accounts in one flow." 
            />
          </div>
        </div>
      </section>

      {/* SECTION 4: MODULES (Massive Grid) */}
      <section className="py-5 px-6 bg-[#f8f9fa] border-y border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="mb-1 text-center">
            <h3 className="momo-font text-3xl font-bold text-[#ae5c83] ">
              Comprehensive Modules
            </h3>
            <p className="roboto-text  text-slate-500 max-w-2xl mx-auto">
              From recruitment to demobilization, we cover every inch of the manpower lifecycle.
            </p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
          >
            {[
              { icon: Users, label: "Worker Management" },
              { icon: FileText, label: "Document & Expiry" },
              { icon: Tent, label: "Camp & Accommodation" },
              { icon: Clock, label: "Attendance & Check-In" },
              { icon: ClipboardList, label: "Timesheet Management" },
              { icon: Briefcase, label: "Vacation Management" },
              { icon: Search, label: "Requirement Management" },
              { icon: FileText, label: "Quotation & Approvals" },
              { icon: TrendingUp, label: "Project Demand Request" },
              { icon: LayoutGrid, label: "Project Booking" },
              { icon: ShieldCheck, label: "NOC & Undertaking Letters" },
              { icon: ArrowRight, label: "Mobilization & Demobilization" },
              { icon: LayoutGrid, label: "Site Visit Tracking" },
              { icon: Users, label: "Worker Free List" },
              { icon: Wrench, label: "Tools Inventory" },
              { icon: Menu, label: "User Role Management" },
            ].map((mod, i) => (
              <motion.div
                variants={fadeUp}
                key={i}
                className="flex items-center gap-3 p-4 bg-white border border-slate-400 rounded-lg hover:border-[#ae5c83] hover:shadow-md transition-all group"
              >
                <div className="p-2 mb-1 bg-slate-50 text-slate-400 group-hover:text-[#ae5c83] rounded transition-colors">
                  <mod.icon size={18} />
                </div>
                <span className="roboto-text  text-sm font-medium text-slate-700">
                  {mod.label}
                </span>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-5 text-center">
            <p className="momo-font text-md text-[#ae5c83] uppercase tracking-widest mb-1">
              And specialized access for
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {[
                "Marketing Execs", "HR", "Accounts", "Camp Boss", 
                "Site Supervisor", "Site Admin", "Ops Manager", "General Manager"
              ].map((role, i) => (
                <span key={i} className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs momo-fonttext-slate-500">
                  {role}
                </span>
              ))}
            </div>
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

// --- SUB COMPONENTS ---

function BenefitCard({ icon: Icon, title, desc }) {
  return (
    <div className="p-3  border border-slate-400 rounded-xl hover:bg-white hover:shadow-lg hover:border-[#ae5c83]/30 transition-all duration-300">
      <Icon className="text-[#ae5c83] mb-4" size={32} />
      <h4 className="momo-font text-lg font-bold text-slate-900 mb-2">{title}</h4>
      <p className="roboto-text  text-sm text-slate-600 leading-relaxed">{desc}</p>
    </div>
  );
}