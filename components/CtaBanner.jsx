"use client";

import Link from "next/link";
import { ArrowRight, Layers } from "lucide-react";

const CtaBanner = () => {
  return (
    <section className="relative w-full py-5 px-4 bg-slate-50 border-t border-slate-200 overflow-hidden">
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-50 to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        
        {/* Floating Icon */}
        <div className="w-16 h-16 bg-white rounded-2xl shadow-lg shadow-[#ae5c83]/10 flex items-center justify-center mx-auto mb-6 transform rotate-3 border border-slate-100">
          <Layers className="w-8 h-8 text-[#ae5c83]" />
        </div>

        <h2 className="text-4xl md:text-5xl momo-font font-bold text-slate-900 tracking-tight mb-4">
          Explore Our <span className="text-[#ae5c83]">Solutions</span>
        </h2>

        <p className="text-slate-600 text-lg max-w-xl mx-auto momo-font mb-8 leading-relaxed">
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
              rounded-2xl
              bg-[#5b4390] 
              text-white 
              font-semibold 
              shadow-xl shadow-[#5b4390]/20
              hover:bg-[#4a3675]
              hover:scale-105
              transition-all 
              duration-300
            "
          >
            <span>View Portfolio</span>
            <div className="bg-white/10 p-1.5 rounded-lg group-hover:bg-white/20 transition-colors">
               <ArrowRight className="w-4 h-4" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;