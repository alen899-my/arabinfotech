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
    <div className="bg-white w-full flex flex-col items-center">

    {/* -------- TOP SECTION -------- */}
<section className="w-full max-w-7xl px-6 pt-6 pb-4 text-center">
  <motion.h1
    initial={{ opacity: 0, y: -20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: true }}
    className="text-5xl momo-font font-semibold tracking-wide text-[#ae5c83]"
  >
    About <span className="text-[#ad4678]">Us</span>
  </motion.h1>

  <motion.div
    className="w-20 h-[3px] bg-[#6c53a7] mx-auto mt-2 rounded-full"
    initial={{ width: 0, opacity: 0 }}
    whileInView={{ width: 80, opacity: 1 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
    viewport={{ once: true }}
  />
</section>

{/* -------- IMAGE + HEADING -------- */}
<section className="w-full max-w-7xl px-6 flex flex-col md:flex-row items-center justify-center gap-6">
  
  <motion.div
    ref={imgRef}
    initial={{ opacity: 0, scale: 0.9, rotate: 0 }}
    whileInView={
      isInView
        ? { opacity: 1, scale: 1.1, rotate: 12 }
        : { opacity: 1, scale: 1, rotate: 0 }
    }
    transition={{ duration: 0.8, type: "spring", stiffness: 120 }}
    viewport={{ once: true }}
  >
    <Image
      src={first}
      width={150}
      height={150}
      alt="about"
      className="w-[120px] md:w-[150px] drop-shadow-xl"
    />
  </motion.div>

  <motion.h1
    initial={{ opacity: 0, x: 30 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
    viewport={{ once: true }}
    className="
      momo-font 
      text-3xl md:text-5xl 
      font-semibold 
      text-black 
      leading-tight 
      text-center md:text-left 
      w-full 
      max-w-4xl
    "
  >
    <span className={TitleStar}>
      Digital Marketing & Software Development Company in Dubai
    </span>
  </motion.h1>
</section>

      {/* -------- PARAGRAPH -------- */}
      <section className="w-full max-w-5xl px-6 py-4">
        <motion.p initial={{ opacity: 0, x: 30 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
    viewport={{ once: true }} className="roboto-text">
          Whatever may be your requirements, <span className={highlight}>ArabInfotec</span> has a solution tailored
          to your needs. We provide cost-effective
          <span className={highlight}> Web Designing</span>,
          <span className={highlight}> Software Solutions</span>,
          <span className={highlight}> Mobile App Development</span>,
          <span className={highlight}> Digital Marketing</span>, and more.
        </motion.p>
      </section>

 {/* -------- STATS SECTION -------- */}
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


{/* -------- SERVICES SECTION -------- */}
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
      className="
        grid 
        grid-cols-2
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        gap-4
        sm:gap-6
        md:gap-8
      "
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
            <srv.icon
              size={30}
              className="text-[#6c53a7] sm:size-10"
              strokeWidth={1.5}
            />
          </motion.div>

          {/* TITLE */}
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="
              text-black 
              text-sm 
              sm:text-lg 
              md:text-xl 
              font-semibold 
              mb-2
            "
          >
            {srv.title}
          </motion.h3>

          {/* DESCRIPTION (your <p> untouched, only responsive classes added) */}
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
            className="
              text-[#6c53a7] 
              hover:text-black 
              font-semibold 
              text-xs sm:text-sm
              transition-all
            "
          >
            Learn More →
          </motion.button>

        </motion.div>
      ))}
    </motion.div>

  </div>
</section>


    </div>
  );
};

export default OurWorks;
