"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  LuCog,
  LuLayers,
  LuWarehouse,
  LuUsers,
  LuWorkflow,
  LuChartBar,
  LuClipboardList,
  LuArrowRight,
  LuCheckCircle,
  LuZap,
  LuShieldCheck,
} from "react-icons/lu";
import CtaBanner from "@/components/CtaBanner";
import GradientButton from "@/components/GradientButton"; 
// Animation variants for cleaner code
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Page() {
  return (
    <div className="w-full bg-[#FAFAFA] overflow-x-hidden selection:bg-[#ae5c83] selection:text-white">
      
      {/* ---------------- HERO SECTION:  ---------------- */}
     <div className="relative w-full min-h-[70vh] md:h-screen flex items-center justify-center overflow-hidden">

  {/* Video Background */}
  <div className="absolute inset-0 z-0">
    <video
      src="/videos/soft.mp4"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      className="w-full h-full object-cover"
      onCanPlay={(e) => e.target.play()}
    />

    <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-black/90 via-black/50 to-transparent" />
  </div>

  {/* Content */}
  <div className="relative z-10 w-full max-w-7xl mx-auto px-5 py-20 md:py-0">
    <motion.div
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="max-w-3xl"
    >

      {/* Tagline */}
      <motion.div variants={fadeInUp} className="flex items-center gap-3 ">
      
        
      </motion.div>

      {/* Heading */}
      <motion.h1
        variants={fadeInUp}
        className="font-bold momo-font leading-tight text-white text-[clamp(2.5rem,6vw,5.5rem)]"
      >
        Software that<br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ae5c83] to-[#e5a9c4]">
          Thinks & Scales.
        </span>
      </motion.h1>

      {/* Paragraph */}
      <motion.p
        variants={fadeInUp}
        className="roboto-texts text-[clamp(1rem,2vw,1.3rem)] roboto-text max-w-xl mt-4 mb-8 font-light leading-relaxed drop-shadow-xl"
      >
        We craft intelligent digital ecosystems—From complex ERPs to scalable automation, built to adapt and grow with your business.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
        <Link href="#services">
          <button className="px-6 momo-font py-3 sm:px-8 sm:py-4 bg-[#ae5c83] text-white rounded-md font-semibold hover:bg-[#964a6d] transition flex items-center gap-2 group shadow-lg shadow-[#ae5c83]/40">
            Our Expertise
            <LuArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </Link>

        <GradientButton href="/contact" text="Lets Talk" icon={<LuArrowRight className="w-4 h-4 ml-2" />} />
      </motion.div>
    </motion.div>
  </div>

  {/* Floating Stats — Show only from md breakpoint */}
  <motion.div 
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 1, duration: 0.8 }}
    className="hidden md:flex absolute bottom-10 right-10 bg-white/10 backdrop-blur-xl border border-white/10 p-6 rounded-2xl max-w-xs space-x-6"
  >
    <div className="text-white">
      <p className="text-3xl font-bold momo-font">98%</p>
      <p className="text-sm opacity-80 roboto-texts">Client Retention</p>
    </div>
    <div className="w-[1px] bg-white/20 h-10" />
    <div className="text-white">
      <p className="text-3xl font-bold momo-font">200+</p>
      <p className="text-sm opacity-80 roboto-texts">Projects Shipped</p>
    </div>
  </motion.div>
</div>


      {/* ---------------- FEATURES SECTION  ---------------- */}
  <section className="py-5 md:py-5 px-4 md:px-6 bg-white">
  {/* Reduced gap on mobile (gap-6) and padding (py-8) */}
  <div className="max-w-7xl mx-auto grid md:grid-cols-2  md:gap-16 items-center">

    {/* LEFT CONTENT */}
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      <motion.h2 
        variants={fadeInUp} 
        className="text-[#6c53a7] font-bold tracking-wider uppercase text-xs md:text-sm mb-2 roboto-text"
      >
        Why Choose Us
      </motion.h2>

      <motion.h3 
        variants={fadeInUp} 
        className="text-2xl sm:text-3xl md:text-5xl momo-font font-bold text-gray-900 mb-3 md:mb-6 leading-tight"
      >
        Beyond just code. <br/> We build <span className="text-[#ae5c83]">Business Assets.</span>
      </motion.h3>

      <motion.p 
        variants={fadeInUp} 
        className="text-gray-600 roboto-text text-sm sm:text-base md:text-lg mb-6 md:mb-8 leading-relaxed"
      >
        We don't just deliver software; we deliver reliability. Our architecture is designed for high-traffic environments and complex data relationships. 
        
      </motion.p>
      
      <motion.div 
        variants={fadeInUp} 
        className="space-y-3 md:space-y-4"
      >
        {[
  {
    title: "Scalable Architecture",
    desc: "Built to handle millions of requests without breaking.Whether you're growing gradually or scaling globally — performance stays consistent.",
    desc2: "Whether you're growing gradually or scaling globally — performance stays consistent.",
    icon: LuLayers
  },
  {
    title: "Bank-Grade Security",
    desc: "Data encryption and role-based access control.We follow industry-standard security compliance including OWASP, GDPR, and ISO practices.",
    desc2: "We follow industry-standard security compliance including OWASP, GDPR, and ISO practices.",
    icon: LuShieldCheck
  },
  {
    title: "Lightning Fast",
    desc: "Optimized React & Next.js patterns for speed.From caching to lazy loading — every millisecond is engineered for smoother UX.",
    desc2: "From caching to lazy loading — every millisecond is engineered for smoother UX.",
    icon: LuZap
  }
].map((item, i) => (
          <div key={i} className="flex items-start gap-3">
            <div className="mt-1 p-2 bg-[#f8f2f5] text-[#ae5c83] rounded-lg shrink-0">
              <item.icon size={18} />
            </div>
            <div>
              <h4 className="font-bold momo-font text-gray-800 text-sm md:text-base">{item.title}</h4>
              <p className="text-xs md:text-sm text-gray-500 roboto-text leading-tight">{item.desc}</p>
              
            </div>
          </div>
        ))}
      </motion.div>
    </motion.div>

    {/* RIGHT VISUAL */}
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative h-[300px] sm:h-[420px] md:h-[500px] w-full bg-[#f8f2f5] rounded-xl md:rounded-[2rem] overflow-hidden mt-2 md:mt-0"
    >
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Blurs */}
        <div className="w-40 md:w-64 h-40 md:h-64 bg-[#ae5c83]/20 rounded-full blur-3xl absolute top-6 md:top-10 left-6" />
        <div className="w-40 md:w-64 h-40 md:h-64 bg-[#6c53a7]/20 rounded-full blur-3xl absolute bottom-6 md:bottom-10 right-6" />
        
        {/* Glass Card - Width increased for mobile (w-[90%]) */}
        <div className="relative z-10 bg-white/60 backdrop-blur-xl p-5 md:p-8 rounded-2xl shadow-xl border border-white/50 w-[90%] sm:max-w-sm">
          <LuWorkflow size={32} className="text-[#6c53a7] mb-3 md:mb-4" />
          <h4 className="text-lg md:text-2xl momo-font font-bold text-gray-800 mb-1 md:mb-2">Workflow Engine</h4>
          <p className="text-gray-600 roboto-text text-xs md:text-sm">
            Automating complex business logic with precision and style.
          </p>
          <div className="mt-4 md:mt-6 flex gap-2">
            <span className="h-2 w-full bg-[#ae5c83] rounded-full opacity-80" />
            <span className="h-2 w-1/3 bg-[#6c53a7] rounded-full opacity-40" />
          </div>
        </div>
      </div>
    </motion.div>
  </div>
</section>


      {/* ---------------- BENTO GRID SERVICES ---------------- */}
      <section id="services" className="w-full bg-[#1a1a1a] py-5 px-6 text-white">
  <div className="max-w-7xl mx-auto">

    {/* Header */}
    <div className="flex flex-col md:flex-row justify-between items-end mb-14">
      <div>
        <h2 className="text-4xl md:text-5xl momo-font font-bold text-white mb-3">
          Our Capabilities
        </h2>
        <p className="  roboto-texts max-w-md text-sm md:text-base">
          Modular, powerful, and designed for the future. Explore our core technical services.
        </p>
      </div>
      <Link 
        href="/portfolio/featured/featured" 
        className="hidden md:block text-[#ae5c83] hover:text-white transition-colors pb-1 border-b border-[#ae5c83] text-sm"
      >
        View Full Portfolio
      </Link>
    </div>

    {/* Bento Grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 auto-rows-[200px]">

      {/* Featured Large Card */}
     <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  className="col-span-1 md:col-span-2 bg-[#252525] rounded-3xl p-5 flex flex-col justify-between hover:bg-[#2b2b2b] transition-colors group relative overflow-hidden"

>
  <div className="absolute top-0 right-0 w-52 h-52 bg-[#ae5c83] blur-[90px] opacity-20 rounded-full group-hover:opacity-30 transition-opacity"></div>

  <div className="relative z-10">
    <div className="w-12 h-12 bg-[#ae5c83] rounded-full flex items-center justify-center text-white mb-4">
      <LuLayers size={22} />
    </div>

    <h3 className="text-2xl momo-font font-bold mb-2">Enterprise ERP</h3>

    <p className=" text-sm roboto-texts leading-relaxed max-w-sm">
      Connect finance, HR, sales & logistics into one real-time dashboard.
    </p>
  </div>

  
</motion.div>


      {/* Standard Smaller Cards */}
      {[
        {
          title: "Business Automation",
          icon: <LuWorkflow size={22} />,
          desc: "Reduce manual work.",
          bg: "bg-[#6c53a7]",
        },
        {
          title: "Staff Management",
          icon: <LuUsers size={22} />,
          desc: "Rostering & payroll.",
          bg: "bg-[#333]",
        },
        {
          title: "Inventory Tools",
          icon: <LuWarehouse size={22} />,
          desc: "Real-time tracking.",
          bg: "bg-[#252525]",
        },
        {
          title: "Task Systems",
          icon: <LuClipboardList size={22} />,
          desc: "Project workflow.",
          bg: "bg-[#252525]",
        },
      ].map((card, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className={`${card.bg} rounded-3xl p-5 flex flex-col justify-between hover:scale-[1.02] transition-all`}
        >
          <div>
            <div className="w-10 h-10 bg-[#ae5c83] rounded-xl flex items-center justify-center text-white mb-3">
              {card.icon}
            </div>
            <h4 className="text-lg font-semibold momo-font">{card.title}</h4>
           <p className=" text-xs roboto-texts mt-1 !text-white">{card.desc}</p>

          </div>
        </motion.div>
      ))}

      {/* Wide Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="col-span-1 md:col-span-2 bg-[#6c53a7] rounded-3xl p-6 flex items-center justify-between group overflow-hidden"
      >
        <div>
          <LuChartBar size={26} className="text-white mb-2" />
          <h3 className="text-xl momo-font font-bold text-white">
            CRM & Analytics
          </h3>
          <p className=" text-xs roboto-texts mt-1 ">

            Smarter customer insights and automation.
          </p>
        </div>
        <div className="hidden md:block w-24 h-24 bg-white/10 rounded-full translate-x-6 translate-y-6"></div>
      </motion.div>

    </div>
  </div>
</section>


      {/* ---------------- HOW WE WORK (Process) ---------------- */}
      <section className="py-5 bg-[#f8f2f5]">
        <div className="max-w-6xl mx-auto px-6">
            <div className="text-center ">
                <h2 className="text-3xl md:text-4xl momo-font font-bold text-[#ae5c83]">The Development Process</h2>
                <p className="text-gray-600 mt-2 roboto-text">Transparent, agile, and focused on results.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 relative">
                {/* Connecting Line (Desktop) */}
                <div className="hidden md:block absolute top-12 left-0 w-full h-[2px] bg-[#e0dce0] z-0"></div>

                {[
                    { step: "01", title: "Discovery", desc: "We analyze your requirements and blueprint the perfect architecture." },
                    { step: "02", title: "Development", desc: "Agile sprints with regular updates, ensuring code quality and speed." },
                    { step: "03", title: "Deployment", desc: "Rigorous testing followed by a smooth launch and ongoing support." }
                ].map((item, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                        className="relative z-10 bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:-translate-y-2 transition-transform duration-300"
                    >
                        <div className="w-12 h-12 bg-[#ae5c83] text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-6 shadow-md">
                            {item.step}
                        </div>
                        <h3 className="text-xl font-bold momo-font text-gray-800 mb-3">{item.title}</h3>
                        <p className="text-gray-500 roboto-text text-sm leading-6">{item.desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>
       <CtaBanner/>      
    
    </div>
  );
}


function ServiceCard({ title, icon, desc, color }) {
    return (
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className={`${color} rounded-3xl p-6 flex flex-col justify-between hover:brightness-110 transition-all cursor-pointer`}
        >
            <div className="text-white/90">
                <div className=" opacity-90">{icon}</div>
                <h3 className="text-xl momo-font font-bold text-white leading-tight">{title}</h3>
            </div>
            <div className=" pt-4 border-t border-white/10">
                <p className="text-xs text-white/70 roboto-text">{desc}</p>
            </div>
        </motion.div>
    )
}