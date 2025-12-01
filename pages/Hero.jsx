"use client";

/* --- IMPORTS --- */
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { ChevronLeft, ChevronRight, Monitor, ShoppingCart, Megaphone, Layers } from "lucide-react";

/* --- LOCAL ASSETS & COMPONENTS --- */
import back from "@/public/back.jpg";
import second from "@/public/second.jpg";
import map from "@/pages/map.jpg"; // Note: Ensure this path is correct in your project structure
import first from "@/pages/first.png"; // Note: Ensure this path is correct
import Projects from "@/pages/Projects";

export default function Home() {

  /* =========================================
     STATE & REFS
  ========================================= */
  const [index, setIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(null);

  const imgRef = useRef(null);
  const statsRef = useRef(null);

  const isInView = useInView(imgRef, { once: true, amount: 0.6 });
  const statsInView = useInView(statsRef, { once: true, amount: 0.4 });

  /* =========================================
     DATA: IMAGES & LOCATIONS
  ========================================= */
  const images = [back, second];

  const locations = [
    {
      name: "USA Office",
      details: `US Office <br>
      Virtual Sys Technologies Inc,<br>
      447 Broadway, 2nd Floor Suite #1233,<br> 
      New York, NY 10013, US <br>
      +1 478 800 4004 <br> 
      info@vstbiz.com <br> 
      www.virtualsystechnologies.com`,
      position: "top-[40%] left-[22%]",
      color: "bg-red-500",
    },
    {
      name: "India Office",
      details: `Bangalore India Office<br>
      Virtual Sys Technologies,<br> 
      Infopark, 1st Floor, Suite #C1-5,<br> 
      Cherthala, Kerala 688541, IN <br>
      +91 478 255 4004 <br>
      info@vstbiz.com <br> 
      www.virtualsystechnologies.com`,
      position: "top-[55%] left-[63%]",
      color: "bg-blue-500",
    },
    {
      name: "UAE Office",
      details: `UAE Office<br>
      AIT Information Technology L.L.C<br>
      R364 - Al Wasal Building, 3rd Floor<br> 
      Suite #40 & 103, Dubai, DXB 111273, AE.<br>
      +971 4 852 0449<br>
      info@arabinfotechllc.com<br>
      www.arabinfotechllc.com`,
      position: "top-[50%] left-[58%]",
      color: "bg-green-500",
    },
  ];

  /* =========================================
     STYLES
  ========================================= */
  const TitleStar = `
    relative pl-4
    before:content-['✦']
    before:absolute
    before:left-0
    before:top-1/2
    before:-translate-y-1/2
    before:text-[#6c53a7]
    before:text-base
  `;

  const highlight = "text-[#6c53a7] font-semibold";

  /* =========================================
     HELPER COMPONENTS (COUNTER)
  ========================================= */
  const Counter = ({ from = 0, to }) => {
    const value = useMotionValue(from);
    const rounded = useTransform(value, (latest) => Math.floor(latest));

    useEffect(() => {
      const controls = animate(value, to, { duration: 2, ease: "easeOut" });
      return () => controls.stop();
    }, []);

    return <motion.span>{rounded}</motion.span>;
  };

  /* =========================================
     EFFECTS
  ========================================= */
  
  // Auto-slide logic
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Close tooltip when tapping outside (mobile)
  useEffect(() => {
    function closeOnOutsideTap(e) {
      if (!e.target.closest(".location-dot")) {
        setActiveIndex(null);
      }
    }
    document.addEventListener("touchstart", closeOnOutsideTap);
    return () => document.removeEventListener("touchstart", closeOnOutsideTap);
  }, []);

  /* =========================================
     HANDLERS
  ========================================= */
  const nextSlide = () => setIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  /* =========================================
     RENDER
  ========================================= */
  return (
    <>
      {/* --------------------------------------------------
          SECTION 1: HERO SLIDER
      -------------------------------------------------- */}
      <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[100vh] overflow-hidden">
        
        {/* Background Images */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {images.map((img, i) => (
            <Image
              key={i}
              src={img}
              alt="background-slide"
              fill
              priority
              quality={100}
              className={`
                object-cover
                absolute inset-0
                transition-opacity duration-1000 ease-in-out
                ${i === index ? "opacity-100" : "opacity-0"}
                animate-scaleOneWay
              `}
            />
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="
            absolute left-3 top-1/2 -translate-y-1/2 z-30
            bg-white/20 hover:bg-white/40
            text-white
            p-2 sm:p-3 rounded-full
            backdrop-blur-md
            transition-all
          "
        >
          <ChevronLeft size={20} className="sm:size-4" />
        </button>

        <button
          onClick={nextSlide}
          className="
            absolute right-3 top-1/2 -translate-y-1/2 z-30
            bg-white/20 hover:bg-white/40
            text-white
            p-2 sm:p-3 rounded-full
            backdrop-blur-md
            transition-all
          "
        >
          <ChevronRight size={20} className="sm:size-4" />
        </button>

        {/* Overlay & Content */}
        <div className="absolute inset-0 bg-black/60 z-10" />

        <div className="relative z-20 px-4 sm:px-6 w-full max-w-6xl mx-auto flex flex-col justify-center h-full text-center mt-10 sm:mt-0">
          <h1 className="momo-font mt-5 text-[clamp(40px,10vw,100px)] leading-[0.9] tracking-tight font-semibold text-white">
            Arab Web Design Agency <br />
            Delivering Big Results
          </h1>

          <div className="mt-4 sm:mt-6 flex justify-center">
            <span className="flex items-center gap-2 zalando-bold text-sm sm:text-base md:text-lg uppercase font-bold text-white">
              <span className="text-[#5e1afd] text-xl animate-pulse">✦</span>
              UAE Based Software Agency — Working Worldwide
            </span>
          </div>

          <div className="mt-6 sm:mt-8">
            <Link
              href="/contact"
              className="
                inline-flex items-center justify-center 
                px-7 py-3.5 rounded-lg
                bg-white/10 border border-white/20 text-white 
                backdrop-blur-md
                hover:bg-white/20 hover:border-white/30 
                transition-all duration-300 
                font-medium tracking-wide
                text-base sm:text-lg
              "
            >
              Schedule an intro call →
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-white w-full flex flex-col items-center">
        
<section className="w-full max-w-6xl mx-auto px-5 py-6 flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">

  {/* --------------------------------------------------
      LEFT: IMAGE
  -------------------------------------------------- */}
  <motion.div
    ref={imgRef}
    initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
    whileInView={
      isInView
        ? { opacity: 1, scale: 1, rotate: 0 }
        : { opacity: 1, scale: 0.9, rotate: -5 }
    }
    transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
    viewport={{ once: true }}
    className="flex-shrink-0"
  >
    <Image
      src={first}
      width={160}
      height={160}
      alt="about"
      className="w-[100px] sm:w-[130px] md:w-[160px] drop-shadow-lg object-contain"
    />
  </motion.div>

  {/* --------------------------------------------------
      RIGHT: CONTENT
  -------------------------------------------------- */}
  <div className="flex flex-col gap-3 text-center md:text-left">
    
    {/* Heading */}
    <motion.h1
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="momo-font text-2xl sm:text-3xl md:text-4xl font-semibold text-[#ae5c83] leading-tight"
    >
      Digital Marketing & Software Development Company in Dubai
    </motion.h1>

    {/* Paragraph with Justified Text */}
    <motion.p
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
      viewport={{ once: true }}
      className="roboto-text text-sm sm:text-base text-gray-700 leading-relaxed text-justify"
    >
      At ArabInfotec, your requirements shape the solution — not the other way around. Whether you need Web Design, Software Development, Mobile App Development, Digital Marketing, or Enterprise Systems, we deliver scalable and value-driven technology tailored to your business. Our ready-to-use platforms include E-commerce Stores, Staff Management ERP, Valet Parking Systems, Kitchen Display Software, Real Estate CRM, and Travel Management Systems — designed to streamline operations and accelerate growth. Digital transformation isn’t optional — it’s essential. And we make the journey seamless, efficient, and future-ready.
    </motion.p>
  </div>

</section>


        {/* --------------------------------------------------
            SECTION 5: STATS
        -------------------------------------------------- */}
        <section className="w-full bg-white px-6 py-6 flex justify-center relative">
          <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-[0.06] pointer-events-none" />

          <div className="max-w-7xl w-full relative">
            {/* Stats Heading */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-center max-w-2xl mx-auto mb-6"
            >
              <h1 className="text-5xl momo-font font-semibold tracking-wide text-[#ae5c83]">
                Our <span className="text-[#ad4678]">Numbers Tells Our Stories</span>
              </h1>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="roboto-text"
              >
                We’ve built milestones through trust, consistency and innovation.
              </motion.p>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              ref={statsRef}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { staggerChildren: 0.15, duration: 0.5 }
                }
              }}
              className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {[
                { to: 10, label: "Years of Experience" },
                { to: 25, label: "Associates" },
                { to: 750, label: "Clients" },
                { to: 2000, label: "Projects Delivered" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  whileHover={{ y: -6, scale: 1.035 }}
                  transition={{ type: "spring", stiffness: 140, damping: 18 }}
                  className="
                    bg-white border border-[#eaeaea] rounded-2xl p-6
                    shadow-[0_4px_20px_rgba(0,0,0,0.05)]
                    hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]
                    transition-all duration-300 text-center relative
                  "
                >
                  <div className="absolute top-0 left-0 h-1 w-full rounded-t-2xl bg-gradient-to-r from-[#ae5c83] to-[#6c53a7]" />

                  <motion.h1
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="text-[#6c53a7] text-4xl font-semibold"
                  >
                    {statsInView && <Counter from={0} to={stat.to} />}+
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="roboto-text"
                  >
                    {stat.label}
                  </motion.p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* --------------------------------------------------
            SECTION 6: SERVICES
        -------------------------------------------------- */}
        <section className="w-full bg-white px-4 sm:px-6 lg:px-8 py-10 -mt-4 flex justify-center">
          <div className="max-w-7xl w-full">
            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-center max-w-2xl mx-auto mb-10 px-2"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl momo-font font-semibold tracking-wide text-[#ae5c83]">
                Our <span className="text-[#ad4678]">Services</span>
              </h1>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="roboto-text text-sm sm:text-base mt-2 leading-relaxed px-2"
              >
                Powerful results-driven services designed to elevate your business.
              </motion.p>
            </motion.div>

            {/* Services Grid */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { staggerChildren: 0.15, duration: 0.5 }
                }
              }}
              className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8"
            >
              {[
                { title: "Website Design", desc: "A Website resembles the standard and image of a company.", icon: Monitor },
                { title: "E-COMMERCE", desc: "We ensure to provide the best result-driven ecommerce development", icon: ShoppingCart },
                { title: "Digital Marketing", desc: "We create go-to-market strategies for your organisation.", icon: Megaphone },
                { title: "Software Solutions", desc: "Make an Impact On Your Business with Our Application Tools.", icon: Layers },
              ].map((srv, i) => (
                <motion.div
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  whileHover={{ y: -6, scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 140, damping: 18 }}
                  className="
                    border-t-4 border-t-[#6c53a7] 
                    border border-[#6c53a7]
                    rounded-2xl
                    p-3 
                    sm:p-5
                    text-center
                    shadow-md 
                    hover:shadow-xl 
                    transition-all duration-300
                    flex flex-col 
                    justify-between 
                    h-full
                  "
                >
                  {/* ICON */}
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="
                      w-14 h-14
                      sm:w-20 sm:h-20
                      mx-auto mb-3 
                      rounded-full 
                      bg-[#f3f0ff] 
                      flex items-center justify-center 
                      shadow-md
                    "
                  >
                    <srv.icon size={30} className="text-[#6c53a7] sm:size-10" strokeWidth={1.5} />
                  </motion.div>

                  {/* TITLE */}
                  <motion.h3
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    viewport={{ once: true }}
                    className="text-black text-sm sm:text-lg md:text-xl font-semibold mb-2"
                  >
                    {srv.title}
                  </motion.h3>

                  {/* DESCRIPTION */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="roboto-text text-xs sm:text-sm md:text-base leading-relaxed mb-3"
                  >
                    {srv.desc}
                  </motion.p>

                  {/* BUTTON */}
                  <motion.button
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="text-[#6c53a7] hover:text-black font-semibold text-xs sm:text-sm transition-all"
                  >
                    Learn More →
                  </motion.button>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </div>

      <div className="bg-white w-full flex flex-col items-center">
        
        {/* --------------------------------------------------
            SECTION 7: OFFICES HEADING
        -------------------------------------------------- */}
        <section className="w-full max-w-7xl px-6 -mt-10 pt-12 text-center">
          <h1 className="text-5xl font-semibold tracking-wide momo-font text-[#ae5c83]">
            Our <span className="text-[#ad4678]">Offices</span>
          </h1>
        </section>

        {/* --------------------------------------------------
            SECTION 8: MAP & LOCATIONS
        -------------------------------------------------- */}
        <section className="w-full flex justify-center mb-10">
          <div className="w-full max-w-5xl rounded-2xl flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all duration-300 py-8 px-6">
            <div className="flex items-center justify-center gap-3 sm:gap-4">
              <p className="roboto-text -mt-8">
                We operate across multiple regions to support our clients worldwide.
              </p>
            </div>
          </div>
        </section>

        <div className="relative w-full max-w-4xl mx-auto mb-10 -mt-20">
          <Image
            src={map}
            alt="world map"
            width={1200}
            height={700}
            className="w-full rounded-lg "
          />

          {/* Location Dots */}
          {locations.map((loc, i) => (
            <div
              key={i}
              className={`absolute ${loc.position} group cursor-pointer location-dot`}
              onClick={() => setActiveIndex(i)} // Mobile tap
              onMouseEnter={() => setActiveIndex(i)} // Desktop hover
              onMouseLeave={() => setActiveIndex(null)} // Desktop unhover
            >
              {/* Ping */}
              <span className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full ${loc.color} opacity-40 blur-sm animate-ping`} />

              {/* Dot */}
              <div
                className={`w-4 h-4 ${loc.color} rounded-full border-2 border-white shadow-lg relative z-10 transition-transform ${activeIndex === i ? "scale-125" : "group-hover:scale-125"}`}
              />

              {/* Tooltip */}
              <div
                className={`
                  absolute z-50 bg-white text-gray-700 px-3 py-3 rounded-xl shadow-xl text-left 
                  transition-all duration-200
                  md:w-48 md:top-10
                  ${loc.name === "USA Office" ? "md:left-1/2 md:-translate-x-1/2" : "md:left-2"}
                  md:opacity-0 md:group-hover:opacity-100
                  left-7 -translate-x-1/2 top-10
                  w-[60vw] max-w-xs
                  ${activeIndex === i ? "opacity-100" : "opacity-0"}
                `}
              >
                <h3 className="font-semibold text-sm">{loc.name}</h3>
                <p
                  className="text-xs mt-1 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: loc.details }}
                ></p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white w-full flex flex-col items-center">
        
        {/* --------------------------------------------------
            SECTION 9: SOLUTIONS & PORTFOLIO CTA
        -------------------------------------------------- */}
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

        {/* Projects Component */}
        <Projects />

        {/* Bottom CTA Card */}
        <div className="max-w-5xl mx-auto px-6 relative z-20 mt-10 ">
          <div className="bg-white rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] p-10 md:p-5 text-center border border-slate-100 relative overflow-hidden">
            
            {/* Top Gradient Line Accent */}
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#6c53a7] via-[#ae5c83] to-[#6c53a7]" />

            {/* Background Pattern */}
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
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}