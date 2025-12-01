"use client";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import Link from "next/link"
import market from "../../public/market.webp";
import SEO from "../../public/SEO.webp";
import advert from "../../public/advert.webp";
import ca from "../../public/ca.png"
import {
  LuLayoutDashboard,
  LuCode,
  LuShieldCheck,
  LuShoppingBag,
  LuMonitorSmartphone,
  LuRocket,
  LuPenTool,
  LuSearch,
  LuSettings,

} from "react-icons/lu";

{/*corousel imports*/}
import ads from "../../public/ads.webp";
import Ahrefs from "../../public/Ahrefs.webp";
import analys from "../../public/analys.webp";
import Bing from "../../public/Bing.webp";
import hotjar from "../../public/hotjar.webp";
import Semrush from "../../public/Semrush.webp";
import search from "../../public/search.webp";
import tag from "../../public/tag.webp";
import wordpress from "../../public/wordpress.webp";
import yoast from "../../public/yoast.webp";
const container = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0.4, y: 30 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};


export default function Page() {
  const logos = [
    ads, Ahrefs, analys, Bing, hotjar, Semrush, search, tag, wordpress, yoast
  ];

  return (
    <div className="relative w-full bg-white overflow-hidden">

      {/* ===================== Shapes ===================== */}
      <div className="absolute top-20 left-2 
        w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-96 lg:h-96 
        bg-[#8d79a1] rounded-full opacity-20 z-0">
      </div>

      <div className="absolute bottom-20 right-4 
        w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 
        bg-[#8d79a1] rounded-3xl rotate-6 opacity-20 z-0">
      </div>

      {/* ===================== HERO ===================== */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 pt-30 pb-13 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative w-full flex justify-center"
        >
          <motion.div
            whileHover={{ scale: 1.04, rotate: 1 }}
            transition={{ type: "spring", stiffness: 140 }}
            className="relative w-[90%] md:w-[80%] lg:w-[95%] h-[350px] md:h-[420px] lg:h-[500px] rounded-3xl overflow-hidden "
          >
            <Image src={advert} alt="ecommerce" fill className="object-cover" />
            <div className="absolute inset-0"></div>
          </motion.div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-[#9056bc] font-medium tracking-wide uppercase mb-2">
            ✦ Digital Marketing & SEO Services
          </p>

          <h1 className="text-4xl md:text-5xl font-bold momo-font text-[#ae5c83] leading-tight mb-4">
            Digital Marketing Agency in Dubai – SEO, & Social Media Experts
          </h1>

          <p className="roboto-text">
            Ad solutions to help you reach and engage millions of customers at every stage of journey
          </p>

         
            
        
         <motion.div
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  <Link
    href="/contact"
    className=" inline-block px-7 py-4 bg-[#6c53a7] text-white rounded-xl shadow-lg hover:bg-[#8d4368] transition-all momo-font"
  >
    Schedule an Intro Call
  </Link>
</motion.div>

         
        </motion.div>
      </section>

      {/* ===================== CAROUSEL (D — Fade In) ===================== */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative overflow-hidden -mt-18"
        onWheel={(e) => {
          const container = document.getElementById("fm-carousel");
          container.scrollLeft += e.deltaY;
        }}
      >
        <div id="fm-carousel" className="w-full overflow-hidden">
          <motion.div
            className="flex gap-10 whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
              },
            }}
          >
            {[...logos, ...logos].map((logo, i) => (
              <div
                key={i}
                className="min-w-[150px] h-[100px] flex items-center justify-center"
              >
                <Image
                  src={logo}
                  alt="tool-logo"
                  className="opacity-90 hover:opacity-100 transition w-auto h-auto"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* ===================== FOUR BOX SECTION ===================== */}
      <section className="relative z-10 w-full py-2 px-4 ">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-[#ae5c83] text-3xl momo-font font-semibold">
            Digital Marketing Solutions for Every Business
          </h1>
          <p className="roboto-text max-w-3xl mx-auto">
            Arabinfotech provides smart digital marketing solutions that engage customers throughout their journey.
          </p>
        </motion.div>

        {/* FOUR BOX GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto px-3">

          {/* Box Template */}
          {[
            {
              icon: <LuSearch className="text-[#ae5c83] text-3xl mb" />,
              title: "Search Engine Optimization (SEO)",
              text: " Strengthen your online visibility with strategic SEO techniques designed to increase rankings and attract the right customers."
            },
            {
              icon: <LuRocket className="text-[#ae5c83] text-3xl mb" />,
              title: "Search Engine Advertising (SEA)",
              text: "Get instant visibility with paid search ads that drive targeted traffic and boost conversions quickly and effectively.",
            },
            {
              title: "Social Media Optimization (SMO)",
              text: "Build meaningful engagement and a strong online presence across social platforms with our tailored SMO strategies.",
            },
            {
              icon: <LuShoppingBag className="text-[#ae5c83] text-3xl mb" />,
              title: "Social Media Advertising (SMA)",
              text: "Reach the right audience with high-impact social ads that expand brand awareness and drive measurable results.",
            },
          ].map((box, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.04, y: -5 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 + i * 0.05 }}
              className="border border-gray-400 p-6 rounded-2xl bg-white shadow-sm"
            >
              {box.icon}
              <h3 className="text-gray-700 text-xl uppercase tracking-wide momo-font">
                {box.title}
              </h3>
              <p className="roboto-text ">{box.text}</p>
              
            </motion.div>
          ))}

        </div>
      </section>

<section className="py-5 px-6 bg-white relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left: Text Content */}
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-[#5b4390] text-xs font-bold uppercase tracking-wider">
             Agency Benefits
          </div>
          
          <h2 className="text-4xl lg:text-5xl momo-font font-bold text-slate-900 leading-tight">
            Why we are the <br/>
            <span className= " text-[#ae5c83]">
              Best in Dubai
            </span>
          </h2>
          
          <p className="text-slate-600 text-lg roboto-text leading-relaxed">
            We don't just run ads; we build digital ecosystems. Arab Infotech provides a holistic approach to marketing that prioritizes growth, transparency, and tangible results.
          </p>

          <div className="pt-4 border-t border-slate-100">
             <p className="text-sm font-bold text-slate-400 uppercase tracking-widest momo-font">Trusted by 500+ Clients</p>
          </div>
        </div>

        {/* Right: The Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
           
           <div className="bg-[#FAFAFA] p-6 rounded-2xl hover:bg-white hover:shadow-lg border border-transparent hover:border-slate-100 transition-all duration-300">
              <LuShoppingBag className="text-[#ae5c83] w-10 h-10 mb-4" />
              <h3 className="text-lg font-bold text-slate-900 momo-font">Cost-Effective</h3>
              <p className="text-sm text-slate-500 mt-2">Optimized budgets for maximum impact.</p>
           </div>

           <div className="bg-[#FAFAFA] p-6 rounded-2xl hover:bg-white hover:shadow-lg border border-transparent hover:border-slate-100 transition-all duration-300">
              <LuRocket className="text-[#5b4390] w-10 h-10 mb-4" />
              <h3 className="text-lg font-bold text-slate-900 momo-font">Global Reach</h3>
              <p className="text-sm text-slate-500 mt-2">Scale your brand beyond borders.</p>
           </div>

           <div className="bg-[#FAFAFA] p-6 rounded-2xl hover:bg-white hover:shadow-lg border border-transparent hover:border-slate-100 transition-all duration-300">
              <LuSearch className="text-[#5b4390] w-10 h-10 mb-4" />
              <h3 className="text-lg font-bold text-slate-900 momo-font">Laser Targeting</h3>
              <p className="text-sm text-slate-500 mt-2">Find customers who actually convert.</p>
           </div>

           <div className="bg-[#FAFAFA] p-6 rounded-2xl hover:bg-white hover:shadow-lg border border-transparent hover:border-slate-100 transition-all duration-300">
              <LuPenTool className="text-[#ae5c83] w-10 h-10 mb-4" />
              <h3 className="text-lg font-bold text-slate-900 momo-font">Deep Analytics</h3>
              <p className="text-sm text-slate-500 mt-2">Insights that drive strategy.</p>
           </div>

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
}