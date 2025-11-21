"use client";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

import market from "../../public/market.webp";
import SEO from "../../public/SEO.webp";
import advert from "../../public/advert.webp";

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
    <div className="relative w-full overflow-hidden">

      {/* ===================== Shapes ===================== */}
      <div className="absolute top-10 left-2 
        w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-96 lg:h-96 
        bg-[#8d79a1] rounded-full opacity-20 z-0">
      </div>

      <div className="absolute bottom-20 right-4 
        w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 
        bg-[#8d79a1] rounded-3xl rotate-6 opacity-20 z-0">
      </div>

      {/* ===================== HERO ===================== */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 pt-28 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

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

          <p className="text-gray-600 text-base leading-relaxed momo-font mb-3">
            Ad solutions to help you reach and engage millions of customers at every stage of journey
          </p>

          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-6 px-7 py-4 bg-[#6c53a7] text-white rounded-xl shadow-lg hover:bg-[#8d4368] transition-all momo-font"
          >
            Schedule an Intro Call
          </motion.button>
        </motion.div>
      </section>

      {/* ===================== CAROUSEL (D — Fade In) ===================== */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative overflow-hidden -mt-20"
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
      <section className="relative z-10 w-full py-20 px-4 -mt-12">
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
          <p className="text-gray-500 text-sm tracking-wide momo-font">
            And easy for marketers of any experience level.
            Arabinfotech provides smart digital marketing solutions that engage your customers throughout their entire journey.
          </p>
        </motion.div>

        {/* ==================== FOUR BOX GRID (E — Hover Lift + Fade Up) ==================== */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto ">

          {/* Box 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.04, y: -5 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="border border-gray-400 p-6 rounded-2xl bg-white shadow-sm  "
          >
            <LuSearch className="text-[#ae5c83] text-3xl mb-4" />
            <h3 className="text-md momo-font font-semibold text-gray-800 mb-2">
              Search Engine Optimization (SEO)
            </h3>
            <p className="text-gray-600 text-sm mb-3 momo-font-thin-mix">
              Strengthen your online visibility with strategic SEO techniques designed
              to increase rankings and attract the right customers.
            </p>
            <span className="text-[#ae5c83] text-sm font-semibold cursor-pointer">
              Read More
            </span>
          </motion.div>

          {/* Box 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.04, y: -5 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="border border-gray-400 p-6 rounded-2xl bg-white shadow-sm "
          >
            <LuRocket className="text-[#ae5c83] text-3xl mb-4" />
            <h3 className="text-md momo-font font-semibold text-gray-800 mb-2">
              Search Engine Advertising (SEA)
            </h3>
            <p className="text-gray-600 text-sm mb-3 momo-font-thin-mix">
              Get instant visibility with paid search ads that drive targeted traffic
              and boost conversions quickly and effectively.
            </p>
            <span className="text-[#ae5c83] text-sm font-semibold cursor-pointer">
              Read More
            </span>
          </motion.div>

          {/* Box 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.04, y: -5 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="border border-gray-400 p-6 rounded-2xl bg-white shadow-xl "
          >
            <LuPenTool className="text-[#ae5c83] text-3xl mb-4" />
            <h3 className="text-md momo-font font-semibold text-gray-800 mb-2">
              Social Media Optimization (SMO)
            </h3>
            <p className="text-gray-600 text-sm mb-3 momo-font-thin-mix">
              Build meaningful engagement and a strong online presence across social
              platforms with our tailored SMO strategies.
            </p>
            <span className="text-[#ae5c83] text-sm font-semibold cursor-pointer">
              Read More
            </span>
          </motion.div>

          {/* Box 4 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.04, y: -5 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="border border-gray-400 p-6 rounded-2xl bg-white shadow-sm "
          >
            <LuShoppingBag className="text-[#ae5c83] text-3xl mb-4" />
            <h3 className="text-md momo-font font-semibold text-gray-800 mb-2">
              Social Media Advertising (SMA)
            </h3>
            <p className="text-gray-600 text-sm mb-3 momo-font-thin-mix">
              Reach the right audience with high-impact social ads that expand brand
              awareness and drive measurable results.
            </p>
            <span className="text-[#ae5c83] text-sm font-semibold cursor-pointer">
              Read More
            </span>
          </motion.div>

        </div>
      </section>
        
<section className="relative overflow-hidden py-20 px-4 bg-gradient-to-b from-white via-[#fdf6fa] to-white -mt-30">
      <div className="max-w-5xl mx-auto relative">

        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <h2 className="text-[#ae5c83] text-4xl momo-font font-semibold tracking-tight">
            Why Arab Infotech?
          </h2>
          <p className="text-gray-500 mt-3 momo-font-light text-lg">
            Best digital marketing agency in Dubai
          </p>
          <div className="h-1 w-16 mt-4 bg-[#ae5c83] rounded-full opacity-60"></div>
        </div>

        {/* Items */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-y-10 gap-x-8 max-w-3xl mx-auto mt-12"
        >

          {/* Cost-Effective */}
          <motion.div
            variants={item}
            className="flex flex-col items-center text-center group transition-transform duration-300 hover:scale-105"
          >
            <LuShoppingBag className="text-[#ae5c83] text-5xl mb-3 group-hover:scale-110 transition-all duration-300" />
            <h3 className="text-gray-800 font-semibold momo-font text-lg">Cost-Effective</h3>
          </motion.div>

          {/* Reach */}
          <motion.div
            variants={item}
            className="flex flex-col items-center text-center group transition-transform duration-300 hover:scale-105"
          >
            <LuRocket className="text-[#ae5c83] text-5xl mb-3 group-hover:scale-110 transition-all duration-300" />
            <h3 className="text-gray-800 font-semibold momo-font text-lg">Reach</h3>
          </motion.div>

          {/* Targeting */}
          <motion.div
            variants={item}
            className="flex flex-col items-center text-center group transition-transform duration-300 hover:scale-105"
          >
            <LuSearch className="text-[#ae5c83] text-5xl mb-3 group-hover:scale-110 transition-all duration-300" />
            <h3 className="text-gray-800 font-semibold momo-font text-lg">Targeting</h3>
          </motion.div>

          {/* Analytics */}
          <motion.div
            variants={item}
            className="flex flex-col items-center text-center group transition-transform duration-300 hover:scale-105"
          >
            <LuPenTool className="text-[#ae5c83] text-5xl mb-3 group-hover:scale-110 transition-all duration-300" />
            <h3 className="text-gray-800 font-semibold momo-font text-lg">Analytics</h3>
          </motion.div>

        </motion.div>
      </div>
    </section>




      <section className="relative z-10 w-full  -mt-20">
        <div
          className="
            w-full 
          
           border-none
            
            py-10 px-6 
            text-center 
          
          
            transition-all 
            duration-300
          "
        >
          <h2
            className="
              text-3xl md:text-4xl 
              momo-font 
              font-bold 
              text-[#ae5c83] 
              tracking-tight
            "
          >
            Explore Our Solutions
          </h2>

          <p className="text-gray-600 mt-3 text-base md:text-lg max-w-2xl mx-auto momo-font">
            Discover a variety of innovative digital tools and technologies tailored to elevate
            your business performance and accelerate growth.
          </p>

          <a
            href="#"
            className="
              inline-block 
              mt-3 
              px-4 py-4 
              rounded-lg 
              bg-[#6c53a7] 
              text-white 
              font-semibold 
              hover:bg-[#5b4390]
              transition-all 
              duration-300
              shadow-lg shadow-black/10
            "
          >
            PortFolio →
          </a>
        </div>
      </section>

    </div>
  );
}
