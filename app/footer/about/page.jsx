"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useSpring } from "framer-motion";
import { 
  CheckCircle2, 
  Globe, 
  Layers, 
  Cpu, 
  ArrowRight,
  TrendingUp,
  ShieldCheck
} from "lucide-react";

// --- DATA ---
const TIMELINE = [
  { year: "2007", title: "Inception", text: "Company formed and started in India in the name of Virtual Sys Technologies." },
  { year: "2008", title: "Humble Beginnings", text: "First office setup on rooftop of a house in Kerala, India." },
  { year: "2009", title: "First Team", text: "SSI registered and our first development team formed." },
  { year: "2010", title: "Middle East", text: "Signed contracts with UAE and Middle Eastern companies." },
  { year: "2011", title: "Expansion", text: "Onsite ERP application and few web projects developed in Dubai" },
  { year: "2012", title: "UAE Entity", text: "Formed company in the name of ARABINFOTECH FZ LLC. With a freezone license" },
  { year: "2013", title: "Licensing", text: "Registered company with DED license in the name of AIT INFORMATION TECHNOLOGY LLC." },
  { year: "2014", title: "Infopark", text: "Shifted Indian office to Infopark Cherthala." },
  { year: "2015", title: "Growth", text: "Expanded team & grew customer base significantly." },
  { year: "2016", title: "New HQ", text: "Moved UAE office to Binary Tower." },
  { year: "2017", title: "Product Dev", text: "Developed products: Valet Parking, HR & more." },
  { year: "2019", title: "Smart Office", text: "Upgraded Indian office to 25+ workstation smart office." },
  { year: "2020", title: "Hybrid Era", text: "Implemented Hybrid work model & expanded services." },
  { year: "2021", title: "Affiliate Platform", text: "Launched affiliate platform for GCC business scaling." },
  { year: "2022", title: "Global Reach", text: "Virtual Sys Technologies officially registered in Delaware, US." },
];

export default function ProfessionalAboutReadable() {
  const containerRef = useRef(null);

  return (
    <div ref={containerRef} className="w-full min-h-screen bg-white selection:bg-[#ae5c83] selection:text-white overflow-hidden font-sans">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-24  px-6 bg-slate-50 overflow-hidden flex flex-col items-center justify-center">
        {/* Background Blob */}
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#ae5c83]/10 rounded-full blur-3xl pointer-events-none" />

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center z-10 max-w-5xl"
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm mb-2">
             <span className="w-2 h-2 rounded-full bg-[#ae5c83] animate-pulse"/>
             <span className="text-sm font-bold tracking-widest text-gray-600 uppercase">Since 2006</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-gray-900 leading-[0.9] tracking-tight mb-4">
            THE NEW WAY <br />
            <span className="text-[#ae5c83]">TO SUCCESS.</span>
          </h1>

          <div className="flex justify-center gap-8 md:gap-12 text-gray-500 font-bold tracking-widest uppercase text-sm md:text-lg">
             {["Advance", "Progress", "Success"].map((item, i) => (
               <motion.span key={item} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 + (i * 0.1) }}>
                 {item}
               </motion.span>
             ))}
          </div>
        </motion.div>
      </section>


      {/* ================= INTRO SECTION ================= */}
      <section className="py-10 px-6 max-w-5xl mx-auto text-center border-b border-gray-100">
        <p className="text-xl md:text-3xl leading-relaxed text-gray-600 font-light">
          With years of experience, our experts use <span className="font-semibold text-gray-900">close communication</span> to offer flawless IT solutions. 
          We discuss ideas until <span className="text-[#ae5c83] font-medium underline underline-offset-4 decoration-[#ae5c83]/30">all your aspirations have been realized.</span>
        </p>
      </section>


      {/* ================= WHO WE ARE ================= */}
      <section className="py-1 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Left: The Story */}
          <div className="space-y-6">
            <h2 className="text-sm font-bold text-[#ae5c83] tracking-widest uppercase">Who We Are</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
              Integrated business solutions & scalable IT services.
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              AIT Information Technology LLC (Arabinfotec) was established in 2012 (India roots since 2006). We provide IT solutions for small to medium businesses. We are a <span className="font-semibold text-gray-800">technology intensive corporation</span> geared to deliver state-of-the-art solutions.
            </p>
            
            <div className="p-6 bg-slate-50 border-l-4 border-[#ae5c83] rounded-r-lg">
                <p className="italic text-gray-700 text-lg font-medium">
                "Our mission: Effective and reliable solutions that provide operational efficiency."
                </p>
            </div>
          </div>

          {/* Right: The Capabilities */}
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-gray-100 border border-gray-100">
               <h4 className="text-2xl font-bold text-gray-900 mb-6">Our Capabilities</h4>
               <div className="grid sm:grid-cols-2 gap-y-5 gap-x-4">
                  {[
                    { icon: Layers, text: "Infrastructure Consultancy" },
                    { icon: Globe, text: "Web & Custom Dev" },
                    { icon: ShieldCheck, text: "Software Testing" },
                    { icon: TrendingUp, text: "Enterprise Consulting" },
                    { icon: Cpu, text: "Onsite/Offsite Services" },
                    { icon: CheckCircle2, text: "Product Development" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <item.icon className="w-5 h-5 text-[#ae5c83]" />
                      <span className="text-base font-medium text-gray-700">{item.text}</span>
                    </div>
                  ))}
               </div>
               
               <div className="mt-8 pt-6 border-t border-gray-100 flex justify-between items-center">
                 <Link href="/portfolio/featured">
                  <button className="text-[#ae5c83] text-sm font-bold flex items-center gap-2 hover:gap-3 transition-all">
                     View Work <ArrowRight className="w-4 h-4" />
                  </button>
                  </Link>
               </div>
            </div>

        </div>
      </section>


      {/* ================= TIMELINE SECTION ================= */}
      <TimelineSection />

                  
                  <div className="max-w-5xl mx-auto px-6 relative z-20 mt-10 ">
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
                              rounded-lg
                             bg-gradient-to-r from-[#ae5c83] to-[#5b4390]
            shadow-[0_10px_25px_rgba(174,92,131,0.35)]
            hover:shadow-[0_15px_30px_rgba(91,67,144,0.45)]
            hover:scale-[1.06]
            transition-all duration-300 ease-out
            backdrop-blur-md
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
}

// ================= TIMELINE COMPONENTS =================

const TimelineSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section ref={ref} className="bg-slate-50 py-2 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 relative">
        
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">OUR HISTORY</h2>
          <div className="w-20 h-1.5 bg-[#ae5c83] mx-auto rounded-full" />
        </div>

        {/* --- THE LINE --- */}
        <div className="absolute left-6 md:left-1/2 top-[160px] bottom-10 w-[3px] bg-gray-200 -translate-x-1/2">
           <motion.div 
             style={{ scaleY, originY: 0 }}
             className="w-full bg-[#ae5c83] absolute top-0 left-0 bottom-0"
           />
        </div>

        {/* --- ITEMS --- */}
        <div className="space-y-8 md:space-y-1">
          {TIMELINE.map((item, index) => (
            <TimelineItem key={index} item={item} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

const TimelineItem = ({ item, index }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4 }}
      className={`relative flex items-center md:justify-between ${
        isEven ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      {/* Spacer for Desktop ZigZag */}
      <div className="hidden md:block w-5/12" />

      {/* CENTER NODE */}
      <div className="absolute left-6 md:left-1/2 -translate-x-1/2 flex items-center justify-center z-20">
          <div className="w-4 h-4 bg-white border-[4px] border-[#ae5c83] rounded-full shadow-sm" />
      </div>

      {/* CONTENT CARD */}
      <div className="w-full md:w-5/12 pl-14 md:pl-0">
        <div className={`
            relative p-6 md:p-8 bg-white rounded-2xl border border-gray-400 shadow-sm 
            hover:shadow-md hover:border-[#ae5c83]/30 transition-all duration-300 group
            ${isEven ? "md:text-left" : "md:text-right"}
        `}>
          
          {/* Connector Line (Horizontal) */}
          <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-8 h-[2px] bg-gray-300 
             ${isEven ? "-left-8" : "-right-8"}
          `}/>

          <div className={`flex items-center gap-3 mb-2 ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}>
             <span className="text-[#ae5c83] font-bold text-sm md:text-base bg-pink-50 px-3 py-1 rounded-md">
                {item.year}
             </span>
             <h3 className="text-lg md:text-xl font-bold text-gray-900">{item.title}</h3>
          </div>
          
          <p className="text-gray-600 text-base leading-relaxed">
            {item.text}
          </p>
        </div>
      </div>

    </motion.div>
  );
};