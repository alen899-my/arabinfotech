"use client";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import ecom from "@/public/ecom.webp";
import one from "@/public/one.png"
import two from "@/public/two.png"
import three from "@/public/three.png"
import four from "@/public/four.png"
import {
  LuLayoutDashboard,
  LuCode,LuShield,
  LuShoppingBag,
  LuMonitorSmartphone,
  LuRocket,
  LuPenTool,
  LuSearch,
  LuShieldCheck,
  LuSettings,
} from "react-icons/lu";

export default function Page() {
  return (
    <div className="relative w-full bg-[#f8eeec] overflow-hidden">

      {/* =================== SHAPES =================== */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 bg-[#ffd9e6] rounded-3xl rotate-12 opacity-80"></div>
        <div className="absolute top-[45%] right-10 w-32 h-32 bg-[#d9ecff] rounded-full blur-sm opacity-70"></div>
        <div className="absolute bottom-20 left-[40%] w-52 h-28 bg-[#fff3cc] rotate-[18deg] rounded-xl shadow"></div>
        <div className="absolute top-[65%] left-5 w-[270px] h-[2px] bg-gradient-to-r from-[#ae5c83] to-transparent opacity-60 rotate-[14deg]"></div>
      </div>

      {/* =================== HERO LAYOUT =================== */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 pt-32 pb-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className=""
        >

          <p className="text-[#9056bc] font-medium tracking-wider uppercase">
            ✦ eCommerce Web Development
          </p>

          <h1 className="text-4xl md:text-5xl font-bold momo-font text-[#ae5c83] mt-2 leading-tight">
            Ecommerce Development Company In Dubai
          </h1>

          <p className="text-gray-700 mt-4">
            At Arabinfotech, we create well-designed e-commerce solutions with 
            modern features helping your business reach more customers around 
            the world.
          </p>

          <p className="text-gray-700 mt-3">
            We build fast, scalable, professional online stores optimized for 
            conversions. Enjoy a smooth shopping experience from browsing to 
            checkout — crafted for your brand.
          </p>

          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="mt-6 px-6 py-4 bg-[#6c53a7] text-white rounded-xl shadow-lg hover:bg-[#8d4368] transition-all"
          >
            Schedule an Intro Call
          </motion.button>
        </motion.div>

    
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-full h-[350px] md:h-[420px] lg:h-[500px] rounded-3xl overflow-hidden   "
        >
          <Image src={ecom} alt="ecommerce" fill className="object-contain p-6" />
        </motion.div>

      </section>

     {/* =================== Featurewss LAYOUT =================== */}
    <section className="relative z-10 py-24 px-4 bg-white/40 backdrop-blur-lg rounded-t-[60px] -mt-20">

  {/* HEADER */}
  <motion.div
    className="text-center mb-14"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <h2 className="text-[#ae5c83] text-3xl momo-font font-semibold">
      Our eCommerce Services
    </h2>
    <p className="text-gray-500 text-sm uppercase tracking-wider mt-1">
      What We Offer
    </p>
    <div className="w-20 h-[3px] bg-[#ae5c83] mx-auto mt-2 rounded-full"></div>
  </motion.div>

  {/* 2×2 SMALL BOX GRID */}
  <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 -mt-12">

    {[
      {
        title: "Modern Online Store Design",
        desc: "We craft clean, user-friendly store layouts that reflect your brand. Every page is planned to guide shoppers smoothly.",
        icon: <LuLayoutDashboard className="text-[#ae5c83] w-7 h-7" />
      },
      {
        title: "Store Improvements & Custom Features",
        desc: "Upgrade your store with custom functionalities. We refine layouts, add tools, and make everything run better.",
        icon: <LuPenTool className="text-[#ae5c83] w-7 h-7" />
      },
      {
        title: "Advanced Cart System",
        desc: "We build secure and seamless shopping cart experiences. Faster, smoother, and optimized for conversions.",
        icon: <LuShoppingBag className="text-[#ae5c83] w-7 h-7" />
      },
      {
        title: "Multi-Vendor Marketplace Setup",
        desc: "Launch platforms where multiple sellers can manage products, orders, and earnings from one dashboard.",
        icon: <LuMonitorSmartphone className="text-[#ae5c83] w-7 h-7" />
      },
      {
        title: "Custom Plugins & Modules",
        desc: "Need something unique? We build add-ons tailored to your business workflow and storefront needs.",
        icon: <LuCode className="text-[#ae5c83] w-7 h-7" />
      },
      {
        title: "Fully Responsive Store Layouts",
        desc: "Your store looks sharp and consistent on mobile, tablet, and desktop — built with modern responsive design.",
        icon: <LuRocket className="text-[#ae5c83] w-7 h-7" />
      },
      {
        title: "eCommerce Mobile App Development",
        desc: "Turn your store into a fast, smooth mobile app. Designed for shoppers who prefer buying on the go.",
        icon: <LuMonitorSmartphone className="text-[#ae5c83] w-7 h-7" />
      },
      {
        title: "Secure Payment Integration",
        desc: "We set up trusted payment gateways for hassle-free checkout. Safe, reliable, and globally supported.",
        icon: <LuShield className="text-[#ae5c83] w-7 h-7" />
      },
      {
        title: "Maintenance & Technical Support",
        desc: "We handle updates, fixes, and ongoing improvements so your store stays stable and efficient.",
        icon: <LuSearch className="text-[#ae5c83] w-7 h-7" />
      },
      {
        title: "Product & Inventory Management",
        desc: "Keep your catalog organized with structured inventory tools. Easy to update, track, and automate.",
        icon: <LuLayoutDashboard className="text-[#ae5c83] w-7 h-7" />
      },
      {
        title: "Optimized Checkout Experience",
        desc: "We streamline your checkout flow to reduce drop-offs. Faster steps, fewer clicks, more conversions.",
        icon: <LuRocket className="text-[#ae5c83] w-7 h-7" />
      },
      {
        title: "Performance Insights & Analytics",
        desc: "Understand how customers shop through detailed analytics. We add tools that help you make smart decisions.",
        icon: <LuSearch className="text-[#ae5c83] w-7 h-7" />
      },
    ].map((item, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay: index * 0.04 }}
        className="p-5 bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all flex items-start gap-3"
      >
        <div className="shrink-0 mt-1">{item.icon}</div>

        <div>
          <h3 className="text-gray-500 text-xl uppercase tracking-wide mt-1">
            {item.title}
          </h3>
          <p className="text-gray-500 text-s leading-relaxed mt-1">
            {item.desc}
          </p>
        </div>
      </motion.div>
    ))}

  </div>
</section>

       {/* =================== Why LAYOUT =================== */}
<section className="relative z-10 p-4 bg-white/40 backdrop-blur-lg rounded-t-[60px] -mt-20">

  {/* HEADER */}
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="text-center mb-14"
  >
    <h2 className="text-[#ae5c83] momo-font text-3xl font-semibold">Why Choose Our eCommerce Solutions</h2>
    <p className="text-gray-500 text-sm uppercase tracking-wide mt-1">Driven by Quality & Performance</p>
    <div className="w-20 h-[3px] bg-[#ae5c83] mx-auto mt-2 rounded-full"></div>
  </motion.div>

  {/* GRID */}
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

    {[
      {
        img: one,
        title: "Human-Focused Experience Architecture",
        sub: "Designed around real customer behavior",
        text: "We create store flows that feel natural and frictionless. Each layout, section, and interaction is built to keep shoppers engaged and comfortable.",
        extra: "A well-structured journey improves browsing time and boosts conversions organically."
      },
      {
        img: two,
        title: "Search-Smart Foundations for Better Visibility",
        sub: "Structured to rank higher from day one",
        text: "Our eCommerce builds come with an SEO-friendly code structure, optimized product placements, and lightning-fast performance — ideal for search engines.",
        extra: "This improves your visibility without heavy reliance on paid ads."
      },
      {
        img: three,
        title: "Future-Ready Platforms That Grow With You",
        sub: "Flexible for expansion and scaling",
        text: "Your platform adapts smoothly as you grow — add more products, new features, vendors, or enter new markets without system breakdown.",
        extra: "Built with long-term scalability in mind, not just initial launch."
      },
      {
        img: four,
        title: "Reliable Support That Never Sleeps",
        sub: "Proactive monitoring & continuous improvements",
        text: "Our team ensures uninterrupted performance with 24/7 support, frequent updates, and quick fixes whenever you need help.",
        extra: "Peace of mind knowing experts are always watching over your store."
      }
    ].map((item, i) => (
      
      <motion.div
        key={i}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 180, damping: 10, delay: i * 0.1 }}
         className="
  relative p-6 rounded-2xl shadow-md border border-[#d9c8ff] 
  hover:shadow-xl hover:-translate-y-1 transition-all

  bg-gradient-to-tr from-[#cec5dd] via-[#F3ECFF]/40 to-white
  backdrop-blur-sm
"

      >

        {/* ROW: Stamp + Heading */}
        <div className="flex items-center gap-2 mb-1">

          {/* IMAGE STAMP — DO NOT TOUCH */}
          <motion.div
            initial={{ scale: 0.4, rotate: -12, opacity: 0 }}
            whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 240, damping: 12, delay: 0.1 }}
            className="relative w-20 h-20  overflow-hidden   "
          >
            <Image src={item.img} alt="stamp" fill className="object-cover" />
          </motion.div>

          {/* HEADING BESIDE IMAGE */}
          <div className="flex-1">
            <h3 className="text-gray-500 text-xl uppercase tracking-wide mt-1">
              {item.title}
            </h3>
          </div>

        </div>

        {/* CONTENT BELOW */}
        <p className="text-[#ae5c83] text-sm font-medium tracking-wide ">
    {item.sub}
  </p>

  {/* MAIN TEXT */}
  <p className="text-gray-500 text-s leading-relaxed  ">
    {item.text}
  </p>

  {/* EXTRA INFO */}
  <p className="text-gray-500 text-s leading-relaxed">
    {item.extra}
  </p>

      </motion.div>

    ))}

  </div>
</section>



      <section className="relative z-10 -mt-5 px-4 ">
        <div className="max-w-4xl mx-auto text-center   py-14 px-6 ">

          <h3 className="text-3xl md:text-4xl momo-font font-bold text-[#ae5c83]">
            Explore Our Solutions
          </h3>

          <p className="text-gray-500 text-s leading-relaxed mt-1">
            Discover a variety of innovative digital tools and technologies 
            tailored to elevate your business performance and accelerate growth.
          </p>

          <a
            href="#"
            className="inline-block mt-6 px-6 py-4 bg-[#6c53a7] text-white rounded-xl font-semibold shadow-lg hover:bg-[#5b4390] transition-all"
          >
            Portfolio →
          </a>

        </div>
      </section>

    </div>
  );
}
