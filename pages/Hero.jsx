"use client";

/* --- IMPORTS --- */
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { ChevronLeft, ChevronRight, Monitor, ShoppingCart, Megaphone, Layers,ArrowRight } from "lucide-react";

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
  const services = [
    {
      title: "Website Design",
      desc: "We create visually stunning, responsive, and user-centered websites tailored to match your brand identity and business goals.",
      img: "/service/sdes.jpg",
      link:"/webdesigning"
    },
    {
      title: "E-Commerce",
      desc: "Our scalable and secure ecommerce solutions help you sell smarter with optimized checkout, product management, and automation.",
      img: "/service/ecm.jpg",
      link:"/ecommerce"
    },
    {
      title: "Digital Marketing",
      desc: "From SEO and paid ads to brand storytelling — we drive meaningful engagement and boost your visibility across digital platforms.",
      img: "/service/sdig.jpg",
      link:"/digitalmarketing"
    },
    {
      title: "Software Solutions",
      desc: "Custom applications built to automate workflows, increase efficiency, and scale seamlessly with your business.",
      img: "/service/sst.jpg",
      link:"/softwaresolutions"
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
          object-cover absolute inset-0
          transition-opacity duration-1000 ease-in-out
          ${i === index ? "opacity-100" : "opacity-0"}
          animate-scaleOneWay
        `}
      />
    ))}
  </div>

  {/* Left Button */}
  <button
    onClick={prevSlide}
    className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/40 p-2 sm:p-3 rounded-full text-white backdrop-blur-md transition-all"
  >
    <ChevronLeft size={22} />
  </button>

  {/* Right Button */}
  <button
    onClick={nextSlide}
    className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/40 p-2 sm:p-3 rounded-full text-white backdrop-blur-md transition-all"
  >
    <ChevronRight size={22} />
  </button>

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/60 z-10" />

  {/* CONTENT */}
  <div className="relative z-20 mt-6 px-4 sm:px-6 w-full max-w-6xl mx-auto h-full flex flex-col justify-center text-center">

    {/* Heading */}
    <h1 className="momo-font text-[clamp(38px,9vw,95px)] leading-[1.05] font-semibold text-white">
      Arab Web Design Agency <br />
      Delivering Big Results
    </h1>

    {/* Subtitle */}
    <div className="mt-4 sm:mt-6 flex justify-center">
      <span className="flex items-center gap-2 zalando-bold text-xs sm:text-sm md:text-lg uppercase font-bold text-white">
        <span className="text-[#5e1afd] text-lg animate-pulse">✦</span>
        UAE Based Software Agency — Working Worldwide
      </span>
    </div>

    {/* CTA BUTTON */}
    <div className="mt-6 sm:mt-8">
      <Link
        href="/contact"
        className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-lg bg-white/10 border border-white/20 
        text-white backdrop-blur-md hover:bg-white/20 hover:border-white/30 transition-all 
        duration-300 font-medium tracking-wide text-sm sm:text-lg"
      >
        Schedule an intro call →
      </Link>
    </div>

    {/* Pagination Dots — moved under CTA */}
    <div className="flex justify-center mt-5 sm:mt-6 gap-3">
      {images.map((_, i) => (
        <button
          key={i}
          onClick={() => setIndex(i)}
          className={`
            w-2.5 h-2.5 rounded-full transition-all duration-300
            ${i === index ? "bg-white scale-125" : "bg-white/40 hover:bg-white/70"}
          `}
        />
      ))}
    </div>
  </div>
</div>


      <div className="bg-white w-full flex flex-col items-center">
        
<section className="w-full max-w-6xl mx-auto px-5 py-6 flex flex-col md:flex-row items-center md:items-start gap- md:gap-">

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
      className="momo-font text-2xl sm:text-3xl md:text-5xl font-semibold text-[#ae5c83] leading-tight"
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
      <section className="w-full bg-white px-6 py-2 md:py-6 flex justify-center relative overflow-hidden">
  
  {/* Background Decoration (Optional: keeps your pattern) */}
  <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-[0.03] pointer-events-none" />

  <div className="max-w-7xl w-full relative z-10">
    
    {/* --------------------------------------------------
        HEADER SECTION
    -------------------------------------------------- */}
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="text-center max-w-3xl mx-auto "
    >
      <h1 className="momo-font text-3xl md:text-5xl font-semibold text-gray-900 ">
        Our Numbers <span className="text-[#ae5c83]">Tell Our Story</span>
      </h1>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="roboto-text text-gray-600 text-sm md:text-base"
      >
        We’ve built milestones through trust, consistency, and innovation. Here is the impact we have created so far.
      </motion.p>
    </motion.div>

    {/* --------------------------------------------------
        STATS GRID
    -------------------------------------------------- */}
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
  className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-8"
>
  {[
    { to: 10, label: "Years of Experience" },
    { to: 25, label: "Expert Associates" },
    { to: 750, label: "Happy Clients" },
    { to: 2000, label: "Projects Delivered" },
  ].map((stat, i) => (
    <motion.div
      key={i}
      variants={{
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1 }
      }}
      whileHover={{ y: -8 }}
      className="
        relative group bg-white p-6 md:p-6 rounded-2xl text-center
        border border-gray-400
        shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)]
        hover:shadow-[0_20px_40px_-15px_rgba(174,92,131,0.3)]
        hover:border-[#ae5c83]/50
        transition-all duration-300 ease-in-out
      "
    >
      {/* Optional: Subtle background gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#ae5c83]/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300" />

      {/* Number */}
      <motion.h1
        className="relative z-10 text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-[#ae5c83] to-[#6c53a7] bg-clip-text text-transparent"
      >
        {statsInView && <Counter from={0} to={stat.to} />}+
      </motion.h1>

      {/* Label */}
      <p className="relative z-10 roboto-text text-gray-600 font-medium text-sm md:text-base group-hover:text-gray-800 transition-colors">
        {stat.label}
      </p>
    </motion.div>
  ))}
</motion.div>
  </div>
</section>
        {/* --------------------------------------------------
            SECTION 6: SERVICES
        -------------------------------------------------- */}


<section className="w-full bg-white px-6 py-2 flex justify-center">
  <div className="max-w-7xl w-full">

    {/* -------- HEADER -------- */}
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center max-w-3xl mx-auto"
    >
      <h1 className="momo-font text-3xl md:text-5xl font-semibold text-gray-900 ">
        Our <span className="text-[#ae5c83]">Services</span>
      </h1>
      <p className="roboto-text text-gray-600 text-sm md:text-base leading-relaxed">
        Empowering businesses with high-impact solutions designed for growth, automation, and digital transformation.
      </p>
    </motion.div>

    {/* -------- CARDS GRID -------- */}
   <motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
  variants={{
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.15 },
    },
  }}
  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8"
>
  {[
    {
      title: "Website Design",
      desc: "We create visually stunning, responsive, and user-centered websites tailored to match your brand identity and business goals.",
      img: "/service/sdes.jpg",
      link:"/webdesigning"
    },
    {
      title: "E-Commerce",
      desc: "Our scalable and secure ecommerce solutions help you sell smarter with optimized checkout, product management, and automation.",
      img: "/service/ecm.jpg",
      link:"/ecommerce"
    },
    {
      title: "Digital Marketing",
      desc: "From SEO and paid ads to storytelling — boosting your brand visibility and conversions across major platforms.",
      img: "/service/sdig.jpg",
      link:"/digitalmarketing",
      
    },
    {
      title: "Software Solutions",
      desc: "Custom-built applications designed to automate workflows, improve efficiency, and scale with your business growth.",
      img: "/service/sst.jpg",
       link:"/portfolio/work-software"
    },
  ].map((srv, i) => (
    <motion.div
      key={i}
      whileHover={{ y: -10 }}
      className="group rounded-2xl bg-white border border-gray-400 hover:border-[#ae5c83] 
      shadow-md hover:shadow-[0_20px_45px_-10px_rgba(174,92,131,0.30)]
      overflow-hidden transition-all duration-500 flex flex-col"
    >
      
      {/* TOP GRADIENT STRIP */}
      <div className="h-1 w-full bg-gradient-to-r from-[#ae5c83] to-[#6c53a7]" />

      {/* IMAGE */}
      <div className="overflow-hidden h-48">
       <div className="relative w-full h-48 overflow-hidden">
 <div className="relative w-full h-48 overflow-hidden">
  <Image
    src={srv.img}
    alt={srv.title}
    fill
    loading={i === 0 ? "eager" : "lazy"}
    priority={i === 0}
   
    
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
    className="object-cover group-hover:scale-110 transition-transform duration-700"
  />
</div>

</div>

      </div>

      {/* CONTENT */}
      <div className="p-6 flex flex-col gap-2 flex-1">
        <h3 className="text-xl font-semibold text-gray-900 momo-font group-hover:text-[#ae5c83] transition-colors">
          {srv.title}
        </h3>

        <p className="text-gray-600 roboto-text text-sm leading-relaxed flex-grow">
          {srv.desc}
        </p>

        {/* LEARN MORE TEXT */}
        <div className="flex items-center text-[#ae5c83] font-medium text-sm transition-all duration-300 momo-font group-hover:underline cursor-pointer">
         <Link
  href={srv.link}
  className="flex items-center text-[#ae5c83] font-medium text-sm momo-font cursor-pointer transition-all duration-300 group-hover:underline group-hover:text-[#6c53a7]"
>
  Learn More
  <svg
    width="18"
    height="18"
    className="ml-2 transition-transform duration-300 group-hover:translate-x-2"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M5 3l6 5-6 5" />
  </svg>
</Link>

        </div>
      </div>

    </motion.div>
  ))}
</motion.div>

  </div>
</section>


      </div>

      {/* ---------- OFFICES SECTION ---------- */}
<section className="w-full bg-white px-6 py-2 flex justify-center">
  <div className="max-w-7xl w-full">

    {/* HEADER (same style as services) */}
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center max-w-3xl mx-auto"
    >
      <h1 className="momo-font text-3xl md:text-5xl font-semibold text-gray-900 ">
        Our <span className="text-[#ae5c83]">Offices</span>
      </h1>
      <p className="roboto-text text-gray-600 text-sm md:text-base leading-relaxed">
        We operate across multiple regions to support our clients worldwide.
      </p>
    </motion.div>

    {/* MAP + LOCATIONS */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.3 }}
      className="relative w-full max-w-4xl mx-auto  mb-8"
    >
      <div className="relative w-full overflow-hidden rounded-2xl shadow-md">
        <Image
          src={map}
          alt="World map"
          width={1200}
          height={700}
          loading="lazy"
          placeholder="blur"
          className="w-full h-auto rounded-2xl"
        />
      </div>

      {/* Location Dots */}
      {locations.map((loc, i) => (
        <div
          key={i}
          className={`absolute ${loc.position} group cursor-pointer location-dot`}
          onClick={() => setActiveIndex(i)}          // Mobile tap
          onMouseEnter={() => setActiveIndex(i)}     // Desktop hover
          onMouseLeave={() => setActiveIndex(null)}  // Desktop unhover
        >
          {/* Ping */}
          <span
            className={`
              absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
              w-6 h-6 rounded-full ${loc.color} opacity-40 blur-sm animate-ping
            `}
          />

          {/* Dot */}
          <div
            className={`
              w-4 h-4 ${loc.color} rounded-full border-2 border-white shadow-lg relative z-10 
              transition-transform 
              ${activeIndex === i ? "scale-125" : "group-hover:scale-125"}
            `}
          />

          {/* Tooltip */}
          <div
            className={`
              absolute z-50 bg-white border border-5-gray text-gray-700 px-3 py-3 rounded-xl shadow-xl text-left 
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
    </motion.div>

  </div>
</section>

<div className="bg-white w-full flex flex-col items-center">
  {/* ---------- SOLUTIONS SECTION HEADER ---------- */}
  <section className="w-full bg-white px-6 pt-1 pb-4 flex justify-center">
    <div className="w-full max-w-7xl">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto"
      >
        <h1 className="text-3xl md:text-5xl font-semibold tracking-wide momo-font text-black">
          Our <span className="text-[#ad4678]">Solutions</span>
        </h1>

        <p className="text-gray-600 roboto-text text-sm md:text-base">
          A complete suite of intelligent solutions crafted to elevate your business to the next level.
        </p>
      </motion.div>
    </div>
  </section>

  {/* ---------- PROJECTS & CTA WRAPPER (align with max width) ---------- */}
  <div className="w-full  px-2">
    {/* Projects Component */}
    <Projects />

    {/* Bottom CTA Card */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      className="max-w-5xl mx-auto relative z-20 mt-10"
    >
      <div className="bg-white rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] p-10 md:p-5 text-center border border-slate-100 relative overflow-hidden">
        {/* Top Gradient Line Accent */}
        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#6c53a7] via-[#ae5c83] to-[#6c53a7]" />

        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#6c53a7_0.5px,transparent_0.5px)] [background-size:16px_16px] opacity-[0.03]" />

        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl momo-font font-extrabold text-slate-900 tracking-tight mb-2">
            Explore Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6c53a7] to-[#ae5c83]">
              Solutions
            </span>
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
              <div className="bg-white/20 p-1 rounded-full group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  </div>
</div>


    </>
  );
}