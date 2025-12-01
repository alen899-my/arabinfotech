import React from "react";
import { motion } from "framer-motion";
import Projects from "@/pages/Projects";
import Link from "next/link";
const Solutions = () => {
  return (
    <div className="bg-white w-full flex flex-col items-center">
      
      {/* Header Section */}
      <section className="w-full max-w-7xl px-6 -mt-9 mb-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-5xl font-semibold tracking-wide momo-font text-[#ae5c83]"
        >
          Our <span className="text-[#ad4678]">Solutions</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-gray-600 mt-2 text-sm md:text-base"
        >
          A complete suite of intelligent solutions crafted to elevate your business to the next level.
        </motion.p>
      </section>

      <Projects />

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

export default Solutions;
