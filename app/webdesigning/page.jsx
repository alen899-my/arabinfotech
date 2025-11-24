"use client";
import { motion } from "framer-motion";

import React from "react";
import Image from "next/image";
import des from "../../public/des.jpg";
import img2 from "../../public/img2.jpg";
import side from "../../public/side.webp";

import {
  LuLayoutDashboard,
  LuCode,
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
    <div className="relative w-full bg-white overflow-hidden">

    
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[50px] left-[20px] w-[220px] h-[220px] bg-[#eadaffdf] rotate-[12deg] shadow-lg opacity-90"></div>
        <div className="absolute top-[800px] right-[30px] w-0 h-0 border-l-[140px] border-l-transparent border-r-[140px] border-r-transparent border-b-[240px] border-b-[#ffd9e6] opacity-90 rotate-[10deg]"></div>
        

        <div
          className="absolute bottom-[-60px] right-[25%] w-[260px] h-[150px] bg-[#fff3cc] opacity-95 shadow-lg"
          style={{
            clipPath:
              "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
          }}
        ></div>

      
       

        <div className="absolute top-[72%] right-[12%] w-[200px] h-[80px] bg-[#d9ecff] opacity-80 rotate-[14deg] rounded-md shadow"></div>
      </div>

      {/* ================= HERO SECTION ================= */}
     <section className="relative z-10 max-w-7xl mx-auto px-4 pt-32 pb-13 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

  {/* LEFT - Animated */}
  <motion.div
    className="flex flex-col justify-center space-y-2 lg:-mt-20"
    initial={{ opacity: 0, x: -40 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.7 }}
  >
    <span className="text-[#9056bc] text-sm tracking-wider font-medium uppercase">
      ✦ Premium Web Experience
    </span>

    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="text-4xl md:text-5xl font-bold text-[#ae5c83] momo-font leading-tight"
    >
      Transform Your Business with Modern, High-Converting Web Design
    </motion.h1>

    <motion.p
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="text-gray-500 text-s leading-relaxed roboto-text "
    >
      We create websites that elevate your brand, increase trust, and
      deliver measurable business outcomes.
    </motion.p>

    <motion.button
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: 0.5 }}
      className="w-fit px-6 py-4 bg-[#6c53a7] hover:bg-[#8d4368] transition-all text-white rounded-xl momo-font momo-font shadow-xl text-m font-medium"
    >
      Schedule an Intro Call
    </motion.button>
  </motion.div>

  {/* RIGHT IMAGES - Animated */}
  <motion.div
    className="relative w-full h-[420px] sm:h-[520px] lg:h-[520px] flex items-center justify-center"
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8 }}
  >
    {/* BACK IMAGE */}
    <motion.div
      className="absolute w-[70%] h-[60%] rounded-3xl overflow-hidden shadow-xl top-[20%] left-[15%]"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <Image src={img2} alt="Background" fill className="object-cover" />
    </motion.div>

    {/* FRONT IMAGE */}
    <motion.div
      className="absolute w-[75%] h-[65%] rounded-3xl overflow-hidden shadow-2xl top-[5%] left-[5%]"
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <Image src={des} alt="Foreground" fill className="object-cover" />
    </motion.div>
  </motion.div>

</section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="relative z-10 w-full py-20 px-4 -mt-50">
        <motion.div
          className="text-center mb-15"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-[#ae5c83] text-3xl momo-font font-semibold">
            Our Web Features
          </h1>
          <p className="text-gray-500 text-sm tracking-wide uppercase momo-font">
            What We Can Do
          </p>
        </motion.div>

    <div className="
  max-w-7xl mx-auto 
  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
  gap-6 sm:gap-10 
  -mt-5 sm:-mt-10
  px-4
">
  {[{
    icon: <LuPenTool className="text-[#ae5c83] text-4xl mb-3 sm:mb-4" />,
    title: "Creative UI/UX",
    text: "We design interfaces that feel natural and enjoyable to use. Every layout, color, and element is chosen to guide visitors smoothly and keep them engaged from the moment they land on your website."
  }, {
    icon: <LuMonitorSmartphone className="text-[#ae5c83] text-4xl mb-3 sm:mb-4" />,
    title: "Fully Responsive",
    text: "Your website will look and function beautifully on any device—phone, tablet, or desktop. No awkward zooming, no broken layouts—just a seamless experience everywhere."
  }, {
    icon: <LuRocket className="text-[#ae5c83] text-4xl mb-3 sm:mb-4" />,
    title: "SEO & Speed Optimized",
    text: "Fast-loading pages and clean SEO structure help your business rank higher and convert more visitors. We remove the technical stress so you can focus on growth."
  }, {
    icon: <LuSearch className="text-[#ae5c83] text-4xl mb-3 sm:mb-4" />,
    title: "Market-Driven Strategy",
    text: "We build websites based on how your customers behave. Every design choice is backed by research, ensuring your site speaks directly to your ideal audience."
  }, {
    icon: <LuShieldCheck className="text-[#ae5c83] text-4xl mb-3 sm:mb-4" />,
    title: "Secure & Reliable",
    text: "From SSL protection to secure coding practices, we make sure your website stays safe, stable, and resistant to attacks or downtime."
  }, {
    icon: <LuSettings className="text-[#ae5c83] text-4xl mb-3 sm:mb-4" />,
    title: "Scalable Solutions",
    text: "Whether you’re just starting out or planning rapid expansion, your website will be ready to grow with you—without needing a complete rebuild."
  }].map((card, index) => (
    <motion.div
      key={index}
      className="
        p-6 sm:p-8 
        bg-white/70 backdrop-blur-sm 
        rounded-2xl shadow-md hover:shadow-xl 
        transition-all border border-gray-400
      "
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
    >
      {card.icon}
      <h3 className="text-gray-700 text-lg sm:text-xl uppercase tracking-wide mt-1 momo-font">
        {card.title}
      </h3>
      <p className=" roboto-text">
        {card.text}
      </p>
    </motion.div>
  ))}
</div>


      </section>

      {/* ================= SERVICES SECTION ================= */}
      <section className="relative z-10 w-full py-20 px-4 -mt-30">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}text-gray-700 mt-3 leading-relaxed
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-[#ae5c83] text-3xl momo-font font-semibold">Web Designing Services</h1>
          <p className="text-gray-500 text-sm tracking-wide uppercase momo-font">What We Offer</p>
          
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* LEFT CONTENT */}
          <motion.div
            className="flex flex-col space-y-12"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {[{
              icon: <LuLayoutDashboard className="text-[#ae5c83] text-3xl" />,
              title: "Static Website Designing",
              text: "Perfect for businesses who want to look professional and trustworthy online. Our static websites are clean, fast, and visually polished—giving your brand an instant credibility boost. Ideal for service providers, personal brands, and small businesses who want a strong presence without complex features."
            },{
              icon: <LuCode className="text-[#ae5c83] text-3xl" />,
              title: "Dynamic Web Development",
              text: "For companies that need more than a simple website. Dynamic websites allow you to update content anytime, manage users, run dashboards, and automate operations. Built with modern frameworks, they adapt to your business as it grows and keep your visitors engaged with real-time, interactive features"
            },{
              icon: <LuShoppingBag className="text-[#ae5c83] text-3xl" />,
              title: "E-commerce Development",
              text: "We build online stores that feel smooth, trustworthy, and effortless to shop from. From product filtering to secure payments and fast checkout—we focus on the details that actually increase sales. Whether you're starting small or scaling into a full online marketplace, your store will be built to sell effectively."
            }].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <div className="flex items-center gap-4">
                  {item.icon}
                  <h2 className="text-xl uppercase tracking-wide  text-[#ae5c83] momo-font">{item.title}</h2>
                </div>
                <p className="text-gray-500 text-s leading-relaxed roboto-text">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            className="relative w-full h-[420px] sm:h-[520px] lg:h-[620px] flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="w-full h-full  rounded-3xl shadow-inner overflow-hidden p-4">
              <Image src={side} alt="Service" width={900} height={900} className="object-contain w-full h-full" />
            </div>
          </motion.div>

        </div>
      </section>
      <section className="relative z-10 w-full  px-4 -mt-30">
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
