"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  CheckCircle2, ArrowRight, Mail, Calendar, 
  Video, Cloud, FileText, ShieldCheck, 
  Users, Zap, Briefcase, LayoutGrid 
} from "lucide-react";
// ↓↓↓ Make sure this path is correct ↓↓↓
import QuotePopup from "../../../../components/QuotePopup"; 

const GSuitePage = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const tools = [
    { name: "Gmail", icon: <Mail className="w-5 h-5" />, desc: "Professional business email" },
    { name: "Drive", icon: <Cloud className="w-5 h-5" />, desc: "Secure cloud storage" },
    { name: "Calendar", icon: <Calendar className="w-5 h-5" />, desc: "Shared scheduling" },
    { name: "Meet", icon: <Video className="w-5 h-5" />, desc: "Video conferencing" },
    { name: "Docs & Sheets", icon: <FileText className="w-5 h-5" />, desc: "Real-time collaboration" },
    { name: "Admin", icon: <ShieldCheck className="w-5 h-5" />, desc: "Security & controls" },
  ];

  return (
    <>
      {/* --- SECTION 1: HERO & INTRO --- */}
      <section className="bg-white text-slate-800 py-8 relative overflow-hidden flex flex-col justify-center">
        
        {/* Soft gradient background highlights */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#ae5c83]/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#5b4390]/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10 max-w-7xl grid lg:grid-cols-2 gap-10 items-center">

          {/* LEFT: CONTENT */}
          <div className="space-y-4">

            {/* Tag */}
            <div className="flex items-center gap-2 bg-slate-50 w-fit px-4 py-2 rounded-full border border-slate-100">
              <LayoutGrid className="w-4 h-4 text-[#5b4390]" />
              <span className="uppercase momo-font text-[11px] tracking-[2px] font-bold text-[#5b4390]">
                Productivity & Collaboration
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl lg:text-6xl font-extrabold momo-font leading-[1.15] tracking-tight text-slate-900">
              Google G-Suite <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ae5c83] to-[#5b4390]">
                Business Solutions.
              </span>
            </h1>

            {/* Intro Text based on your content */}
            <p className="text-slate-600 roboto-text leading-relaxed text-lg max-w-xl">
              At Arabinfotec, we use G-Suite daily to maximize our productivity. 
              Quick to set up, simple to use, and secure, its objective is to optimize your 
              company’s performance through virtual and collaborative work tools in real time.
            </p>

            <div className="p-2 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-slate-100 max-w-lg w-full">
              <div className="flex items-center">
                <button 
                  onClick={handleOpenPopup}
                  className="bg-[#ae5c83] hover:bg-[#964a6e] momo-font text-white px-6 py-3 rounded-xl font-semibold transition-all shadow-md hover:shadow-lg flex items-center gap-2 justify-center w-full md:w-auto"
                >
                  Get G-Suite Now
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex items-center gap-6 text-sm font-medium text-slate-500 pt-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#5b4390]" />
                <span>99.9% Uptime</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#5b4390]" />
                <span>Trusted by Arabinfotec</span>
              </div>
            </div>

          </div>

          {/* RIGHT: IMAGE */}
          <div className="relative w-full h-[400px] lg:h-[480px] rounded-[2rem] overflow-hidden shadow-2xl shadow-slate-200/50 border border-slate-100 group">
            {/* Replace with a Google Workspace / Office visual */}
            <Image 
              src="/cloud.gif" 
              alt="Google G-Suite Collaboration" 
              fill 
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent" />
          </div>
        </div>
      </section>


      {/* --- SECTION 2: THE TOOLSET --- */}
      <section className="bg-white text-slate-800 py-8 relative overflow-hidden">
        
        <div className="container mx-auto px-6 relative z-10 max-w-7xl">
          
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            
            {/* LEFT: TEXT CONTENT */}
            <div className="space-y-4">
              <div>
                <span className="text-[#5b4390] momo-font font-bold tracking-wider uppercase text-xs mb-2 block flex items-center gap-2">
                  <Briefcase className="w-4 h-4" />
                  Powerful Toolkit
                </span>
                <h2 className="text-3xl md:text-5xl momo-font font-bold leading-tight text-slate-900">
                  Everything you need <br/>
                  <span className="text-[#ae5c83]">in one suite.</span>
                </h2>
              </div>

              <div className="space-y-3 text-slate-600 roboto-text leading-relaxed text-base">
                <p>
                  G Suite is a collection of business, productivity, collaboration, and education software developed by Google. 
                  While the email service (Gmail) is certainly one of the best on the market, the true power lies in the integration.
                </p>
                <p>
                  Arabinfotec’s primary G Suite tools include <strong>Gmail, Drive, Docs, Sheets, Slides, Forms, Calendar, and Hangouts</strong>. 
                  We recommend this complete ecosystem to all our customers because it allows teams to work together seamlessly, 
                  regardless of their physical location.
                </p>
              </div>
            </div>

            {/* RIGHT: TOOLS GRID */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {tools.map((tool, idx) => (
                <div 
                  key={idx} 
                  className="bg-slate-50 p-5 rounded-2xl border border-slate-100 hover:border-[#ae5c83]/30 hover:bg-white hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center mb-3 text-[#5b4390] group-hover:text-[#ae5c83] transition-colors">
                    {tool.icon}
                  </div>
                  <h3 className="font-bold momo-font text-slate-900">{tool.name}</h3>
                  <p className="text-xs roboto-text text-slate-500 mt-1">{tool.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>


      {/* --- SECTION 3: SCALABILITY --- */}
      <section className="bg-white text-slate-800 py-8 relative overflow-hidden">
        
        <div className="container mx-auto px-6 relative z-10 max-w-7xl">
          {/* Box Style Layout */}
          <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-[2.5rem] p-8 md:p-12 border border-slate-200">
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              
              {/* CONTENT */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl md:text-4xl momo-font font-bold leading-tight text-slate-900">
                    Scale Seamlessly <br/>
                    <span className="text-[#5b4390]">Stay Secure.</span>
                  </h2>
                </div>

                <div className="prose roboto-text prose-slate text-slate-600 leading-relaxed">
                  <p>
                    As your business scales, simple tasks like onboarding new employees, maintaining data security, 
                    or organizing your files become increasingly complicated.
                  </p>
                  <p>
                    Customers often tell us that their move to G Suite helped ease these growing pains. 
                    It allows them to grow seamlessly and be as efficient as possible without worrying about IT infrastructure.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                   <div className="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm border border-slate-100">
                      <div className="bg-[#5b4390]/10 p-2 rounded-full text-[#5b4390]">
                        <Users className="w-5 h-5" />
                      </div>
                      <span className="text-sm font-bold text-slate-700">Easy Onboarding</span>
                   </div>
                   <div className="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm border border-slate-100">
                      <div className="bg-[#ae5c83]/10 p-2 rounded-full text-[#ae5c83]">
                        <ShieldCheck className="w-5 h-5" />
                      </div>
                      <span className="text-sm font-bold text-slate-700">Enterprise Security</span>
                   </div>
                   <div className="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm border border-slate-100">
                      <div className="bg-[#5b4390]/10 p-2 rounded-full text-[#5b4390]">
                        <Zap className="w-5 h-5" />
                      </div>
                      <span className="text-sm font-bold text-slate-700">High Efficiency</span>
                   </div>
                </div>

                <div className="pt-4">
                  <button 
                    onClick={handleOpenPopup}
                    className="px-8 py-3.5 bg-[#5b4390] text-white font-bold rounded-xl shadow-lg hover:bg-[#4a3675] hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 momo-font flex items-center gap-2"
                  >
                    Start Your Migration
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* VISUAL / GRAPHIC AREA */}
              <div className="relative h-full min-h-[300px] flex items-center justify-center">
                 {/* Abstract representation of connection/growth */}
                 <div className="relative w-full h-full bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200 p-8 flex flex-col items-center justify-center text-center space-y-4">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#ae5c83] to-[#5b4390] rounded-2xl flex items-center justify-center shadow-lg transform rotate-3">
                       <Cloud className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-xl font-bold momo-font text-slate-800">Ready to switch?</h3>
                    <p className="text-slate-500 text-sm max-w-xs">
                      Join thousands of businesses using G-Suite to power their daily operations.
                    </p>
                 </div>
                 
                 {/* Floating Elements decoration */}
                 <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#5b4390] rounded-full opacity-10 blur-xl"></div>
                 <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-[#ae5c83] rounded-full opacity-10 blur-xl"></div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Popup Component */}
      <QuotePopup open={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </>
  );
};

export default GSuitePage;