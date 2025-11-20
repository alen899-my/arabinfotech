"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import first from "@/pages/first.png";
import { Monitor, ShoppingCart, Megaphone, Layers } from "lucide-react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";

/* Counter Component */
const Counter = ({ from = 0, to }) => {
  const value = useMotionValue(from);
  const rounded = useTransform(value, (latest) => Math.floor(latest));

  useEffect(() => {
    const controls = animate(value, to, { duration: 2, ease: "easeOut" });
    return () => controls.stop();
  }, []);

  return <motion.span>{rounded}</motion.span>;
};

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

const OurWorks = () => {
  const imgRef = useRef(null);
  const statsRef = useRef(null);

  const isInView = useInView(imgRef, { once: true, amount: 0.6 });
  const statsInView = useInView(statsRef, { once: true, amount: 0.4 });

  return (
    <div className="bg-[#f8eeec] w-full flex flex-col items-center">

      {/* -------- TOP SECTION -------- */}
      <section className="w-full max-w-7xl px-6 pt-6 pb-4 text-center">
        <h1 className="text-5xl momo-font  font-semibold tracking-wide text-[#ae5c83]">
          About <span className="text-[#ad4678]">Us</span>
        </h1>
        <div className="w-20 h-[3px] bg-[#6c53a7] mx-auto mt-2 rounded-full" />
      </section>

      {/* -------- IMAGE + HEADING -------- */}
      <section className="w-full max-w-7xl px-6 flex flex-col md:flex-row items-center justify-center gap-6 py-">
        <motion.div
          ref={imgRef}
          initial={{ scale: 1 }}
          animate={isInView ? { rotate: 12, scale: 1.12 } : { rotate: 0, scale: 1 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 150 }}
        >
          <Image src={first} width={150} height={150} alt="about" className="w-[120px] md:w-[150px] drop-shadow-xl" />
        </motion.div>

      <h1
  className="
    momo-font 
    text-3xl md:text-5xl 
    font-semibold 
    text-black 
    leading-tight 
    text-center md:text-left 
    w-full 
    max-w-4xl        /* wider width */
  "
>
  <span className={TitleStar}>
    Digital Marketing & Software Development Company in Dubai
  </span>
</h1>

      </section>

      {/* -------- PARAGRAPH -------- */}
      <section className="w-full max-w-5xl px-6 py-4">
        <p className="text-black text-lg md:text-xl text-center leading-relaxed">
          Whatever may be your requirements, <span className={highlight}>ArabInfotec</span> has a solution tailored
          to your needs. We provide cost-effective
          <span className={highlight}> Web Designing</span>,
          <span className={highlight}> Software Solutions</span>,
          <span className={highlight}> Mobile App Development</span>,
          <span className={highlight}> Digital Marketing</span>, and more.
        </p>
      </section>

      {/* -------- STATS SECTION -------- */}
      <section className="w-full bg-[#f8eeec] px-6 py-6 flex justify-center relative">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-[0.06] pointer-events-none" />

        <div className="max-w-7xl w-full relative">

          {/* Stats Heading */}
          <div className="text-center max-w-2xl mx-auto mb-6">
           <h1 className="text-5xl momo-font  font-semibold tracking-wide text-[#ae5c83]">
          Our <span className="text-[#ad4678]">Numbers Tells Our Stories</span>
        </h1>
            <p className="text-gray-600 mt-2 text-sm md:text-base">
              We’ve built milestones through trust, consistency and innovation.
            </p>
          </div>

          {/* Stats Grid */}
          <div ref={statsRef} className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { to: 10, label: "Years of Experience" },
              { to: 25, label: "Associates" },
              { to: 750, label: "Clients" },
              { to: 2000, label: "Projects Delivered" },
            ].map((stat, i) => (
              <motion.div
                key={i}
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

                <h1 className="text-[#6c53a7] text-4xl font-semibold">
                  {statsInView && <Counter from={0} to={stat.to} />}+
                </h1>

                <p className="text-gray-700 text-sm md:text-base mt-2 font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* -------- SERVICES SECTION -------- */}
      <section className="w-full bg-[#f8eeec] px-6 py-6 -mt-6 flex justify-center">
        <div className="max-w-7xl w-full">

          {/* Services Heading */}
          <div className="text-center max-w-2xl mx-auto mb-6">
            <h1 className="text-5xl momo-font  font-semibold tracking-wide text-[#ae5c83]">
          Our <span className="text-[#ad4678]">Services</span>
        </h1>
            <p className="text-gray-600 text-sm md:text-base mt-2">
              Powerful results-driven services designed to elevate your business.
            </p>
          </div>

          {/* Services Grid */}
         <div className="
  grid 
  grid-cols-2 
  sm:grid-cols-2 
  lg:grid-cols-4 
  gap-4           /* smaller gap on mobile */
">
  {[
    { title: "Website Design", desc: "A Website resembles the standard and image of a company.", icon: Monitor },
    { title: "E-COMMERCE", desc: "We ensure to provide the best result-driven ecommerce development", icon: ShoppingCart },
    { title: "Digital Marketing", desc: "We create go-to-market strategies for your organisation.", icon: Megaphone },
    { title: "Software Solutions", desc: "Make an Impact On Your Business with Our Application Tools.", icon: Layers },
  ].map((srv, i) => (
    <motion.div
      key={i}
      className="
        border-t-4 border-t-[#6c53a7] 
        border border-[#6c53a7]
        rounded-2xl
        p-3              /* smaller mobile padding */
        sm:p-5           /* bigger on tablet */
        text-center
        shadow-md 
        hover:shadow-xl 
        transition-all duration-300

        /* smaller overall height in phones */
        h-auto 
        sm:h-full
      "
    >
      {/* ICON CIRCLE */}
      <div className="
        w-14 h-14           /* smaller mobile icon circle */
        sm:w-20 sm:h-20     /* normal size on sm+ */
        mx-auto mb-3 
        rounded-full 
        bg-[#f3f0ff] 
        flex items-center justify-center 
        shadow-md
      ">
        <srv.icon 
          size={30}         /* icon smaller on mobile */
          className="text-[#6c53a7] sm:size-10" 
          strokeWidth={1.5} 
        />
      </div>

      {/* TITLE */}
      <h3 className="
        text-black 
        text-base          /* smaller title on mobile */
        sm:text-xl 
        font-semibold 
        mb-2
      ">
        {srv.title}
      </h3>

      {/* DESCRIPTION */}
      <p className="
        text-gray-700 
        text-xs           /* smaller mobile desc */
        sm:text-sm 
        leading-relaxed 
        mb-3
      ">
        {srv.desc}
      </p>

      {/* BUTTON */}
      <button className="
        text-[#6c53a7] 
        hover:text-black 
        font-semibold 
        text-xs sm:text-sm
        transition-all
      ">
        Learn More →
      </button>
    </motion.div>
  ))}
</div>

        </div>
      </section>
    </div>
  );
};

export default OurWorks;
