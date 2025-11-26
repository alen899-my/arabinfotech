"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  LuSmartphone, 
  LuLayers, 
  LuCpu, 
  LuApple, 
  LuCode, // Changed from LuCode to LuCode2 for better visual
  LuArrowRight, 
  LuZap,
  LuSearch,
  LuPenTool,
  LuRocket,
  LuSettings
} from "react-icons/lu";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const floatAnimation = {
  animate: {
    y: [0, -20, 0],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
  }
};

const marqueeVariants = {
  animate: {
    x: [0, -1000],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 20,
        ease: "linear",
      },
    },
  },
};

export default function MobileAppsPage() {
  return (
    <div className="w-full bg-white overflow-x-hidden selection:bg-[#ae5c83] selection:text-white">
      
      {/* ---------------- SECTION 1: HERO ---------------- */}
      <section className="relative pt-32 pb-12 px-6 md:pt-25 md:pb-20 bg-[#fdfbfd] overflow-hidden">
        {/* Background Decor */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-b from-[#f4ebf1] to-transparent -z-10 rounded-bl-[100px]" />
        
        {/* Animated Background Blob */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#6c53a7]/5 rounded-full blur-3xl -z-10 animate-pulse" />

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          
          {/* Left: Content */}
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={fadeInUp}
            className="z-10"
          >
          

            <h1 className="text-5xl md:text-7xl momo-font font-bold text-gray-900 leading-[1.1] mb-6">
              Apps that sit in <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6c53a7] to-[#ae5c83]">
                everyone's pocket.
              </span>
            </h1>
            
            <p className="text-base md:text-lg text-gray-600 roboto-text mb-8 max-w-lg leading-relaxed">
              We create top-notch user experiences for startups and enterprise-level mobile applications that build business and drive engagement.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <button className="px-8 py-4 bg-[#6c53a7] text-white rounded-xl font-bold hover:bg-[#58428a] transition shadow-lg shadow-[#6c53a7]/30 flex items-center gap-2 hover:-translate-y-1">
                  Let's Talk <LuArrowRight />
                </button>
              </Link>
            </div>
          </motion.div>

          {/* Right: Abstract 3D Phone Composition */}
          <div className="relative h-[400px] md:h-[500px] flex items-center justify-center mt-10 md:mt-0">
             {/* Back Circle */}
             <div className="absolute w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-[#ae5c83]/10 rounded-full blur-3xl" />
             
             {/* Floating Phone Card 1 */}
             <motion.div 
               variants={floatAnimation}
               animate="animate"
               className="absolute z-20 w-52 md:w-64 h-[380px] md:h-[450px] bg-white border-[6px] md:border-8 border-gray-900 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl flex flex-col overflow-hidden rotate-[-6deg]"
             >
                <div className="h-full w-full bg-[#1a1a1a] relative p-4">
                    {/* Fake UI Elements */}
                    <div className="w-full h-24 md:h-32 bg-gradient-to-br from-[#ae5c83] to-[#8a4262] rounded-2xl mb-4 opacity-90" />
                    <div className="flex gap-2 mb-4">
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-700 rounded-full" />
                        <div className="flex-1 space-y-2 py-2">
                            <div className="w-full h-2 bg-gray-700 rounded" />
                            <div className="w-2/3 h-2 bg-gray-700 rounded" />
                        </div>
                    </div>
                    <div className="w-full h-24 md:h-32 bg-[#6c53a7] rounded-2xl opacity-80" />
                    
                    {/* Floating notification inside phone */}
                    <div className="absolute bottom-6 left-4 right-4 bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/10">
                         <div className="h-2 w-1/2 bg-white/50 rounded mb-2"></div>
                         <div className="h-2 w-3/4 bg-white/30 rounded"></div>
                    </div>
                </div>
             </motion.div>

             {/* Floating Phone Card 2 */}
             <motion.div 
               animate={{ y: [0, 20, 0] }}
               transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
               className="absolute z-10 top-10 md:top-20 right-4 md:right-20 w-44 md:w-56 h-[340px] md:h-[400px] bg-white border-[6px] md:border-8 border-gray-200 rounded-[2rem] md:rounded-[2.5rem] shadow-xl overflow-hidden rotate-[6deg] opacity-60 md:opacity-100 grayscale hover:grayscale-0 transition-all duration-500"
             >
                 <div className="h-full w-full bg-gray-50 p-4">
                    <div className="w-full h-32 md:h-40 bg-gray-200 rounded-xl mb-4" />
                    <div className="space-y-3">
                        <div className="w-full h-3 bg-gray-200 rounded" />
                        <div className="w-full h-3 bg-gray-200 rounded" />
                        <div className="w-3/4 h-3 bg-gray-200 rounded" />
                    </div>
                 </div>
             </motion.div>
          </div>
        </div>
      </section>

      {/* ---------------- NEW SECTION: INFINITE TECH MARQUEE ---------------- */}
      <section className="py-8 bg-white border-y border-gray-100 overflow-hidden">
        <p className="text-center text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Powering Apps With</p>
        <div className="relative flex w-full overflow-hidden">
           <motion.div 
             variants={marqueeVariants}
             animate="animate"
             className="flex whitespace-nowrap gap-12 md:gap-24"
           >
              {/* Duplicated list for infinite scroll effect */}
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex gap-12 md:gap-24 items-center opacity-50 grayscale hover:grayscale-0 transition-all duration-300">
                   <span className="text-xl md:text-2xl font-bold text-gray-800">React Native</span>
                   <span className="text-xl md:text-2xl font-bold text-gray-800">Flutter</span>
                   <span className="text-xl md:text-2xl font-bold text-gray-800">Swift</span>
                   <span className="text-xl md:text-2xl font-bold text-gray-800">Kotlin</span>
                   <span className="text-xl md:text-2xl font-bold text-gray-800">Node.js</span>
                   <span className="text-xl md:text-2xl font-bold text-gray-800">Firebase</span>
                   <span className="text-xl md:text-2xl font-bold text-gray-800">AWS</span>
                   <span className="text-xl md:text-2xl font-bold text-gray-800">GraphQL</span>
                </div>
              ))}
           </motion.div>
           {/* Gradient Fades for Marquee */}
           <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-white to-transparent z-10" />
           <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-white to-transparent z-10" />
        </div>
      </section>

      {/* ---------------- SECTION 2: CONTENT & VIDEO INTEGRATION ---------------- */}
     <section className="py-12 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* The Video Section */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1 group"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-video bg-gray-900">
              <video
                src="/videos/mobile.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                poster="/fallback-mobile.jpg"
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                onCanPlay={(e) => e.target.play()}
              />
              {/* Modern Glass Badge on Video */}
              
            </div>

            {/* Decorative Glow */}
            <div className="absolute -z-10 -bottom-10 -left-10 w-40 h-40 bg-[#6c53a7] rounded-full blur-[60px] opacity-30 group-hover:opacity-50 transition-opacity"></div>
          </motion.div>

          {/* Text Section */}
          <motion.div 
             initial="hidden"
             whileInView="visible"
             variants={fadeInUp}
             className="order-1 lg:order-2"
          >
            <h2 className="text-3xl md:text-5xl momo-font font-bold text-gray-900 mb-6 leading-tight">
              Customized excellence, <br/>
              <span className="text-[#ae5c83]">Evolving with technology.</span>
            </h2>
            
            <p className="text-gray-600 roboto-text text-base md:text-lg mb-6 leading-relaxed">
              We study all your requirements to offer you top-quality and smooth mobile applications. 
              Whether it's a startup idea or an enterprise ecosystem, our solutions evolve alongside technological advancements.
            </p>

            <p className="text-gray-600 roboto-text text-base md:text-lg mb-8 leading-relaxed">
              We offer customized mobile applications on different scales because we know how to exploit the powers of different technologies and integrate them seamlessly.
            </p>

            <div className="grid grid-cols-2 gap-4 md:gap-6">
              <div className="p-5 bg-[#f8f2f5] rounded-2xl hover:bg-[#f1e6ec] transition-colors">
                <h4 className="font-bold momo-font text-[#ae5c83] text-3xl mb-1">50+</h4>
                <p className="text-sm text-gray-500 font-medium">Apps Launched</p>
              </div>
              <div className="p-5 bg-[#eef0f6] rounded-2xl hover:bg-[#e4e8f1] transition-colors">
                <h4 className="font-bold momo-font text-[#6c53a7] text-3xl mb-1">4.8</h4>
                <p className="text-sm text-gray-500 font-medium">Avg Store Rating</p>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>

    {/* ----------------  STEPS ---------------- */}
    <section className="py-16 md:py-10 bg-[#fcfcfc] border-t ">
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-2">
                <h2 className="text-3xl md:text-4xl momo-font font-bold text-gray-900">How We Build</h2>
                <p className="text-gray-500 mt-2">From concept to the App Store, we handle it all.</p>
            </div>
            
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
                {[
                    { icon: <LuSearch />, title: "Discovery", desc: "Understanding goals & users." },
                    { icon: <LuPenTool />, title: "Design", desc: "Wireframing & UI/UX." },
                    { icon: <LuCode />, title: "Development", desc: "Agile sprints & coding." },
                    { icon: <LuRocket />, title: "Launch", desc: "Deployment & Support." }
                ].map((step, idx) => (
                    <motion.div 
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-white p-3 rounded-2xl shadow-sm border border-gray-400 hover:shadow-lg transition-all group"
                    >
                        <div className="w-12 h-12 bg-[#ae5c83] rounded-xl flex items-center justify-center text-white text-xl mb-4 group-hover:bg-[#6c53a7] group-hover:text-white transition-colors">
                            {step.icon}
                        </div>
                        <h3 className="font-bold text-black text-lg momo-font ">{step.title}</h3>
                        <p className="text-sm text-gray-500">{step.desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>

      {/* ---------------- SECTION 3: SERVICES (3 Columns) ---------------- */}
      <section className="py-20 px-6 bg-[#111] text-white relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#ae5c83] rounded-full blur-[120px] opacity-10 pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#6c53a7] rounded-full blur-[120px] opacity-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="text-[#ae5c83] font-bold tracking-widest uppercase text-xs md:text-sm border border-[#ae5c83]/30 px-3 py-1 rounded-full">Our Expertise</span>
            <h2 className="text-4xl md:text-5xl momo-font font-bold mt-6">Mobile App Services</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            
            {/* Card 1: Hybrid */}
            <ServiceCard 
              icon={<LuLayers size={32} />}
              title="Hybrid App Development"
              desc="Hybrid apps allow you to leverage all the popular mobile platforms out there. We help you make the most of React Native and Flutter so your business succeeds on every device."
              color="hover:border-[#ae5c83]/50"
              accent="#ae5c83"
            />

            {/* Card 2: Android */}
            <ServiceCard 
              icon={<LuCode size={32} />}
              title="Android Development"
              desc="Android applications connect you to the maximum number of users globally. Our native Android solutions provide you with a competitive advantage in your respective industry."
              color="hover:border-[#3DDC84]/50" // Android Green tint
              accent="#3DDC84"
            />

            {/* Card 3: iOS */}
            <ServiceCard 
              icon={<LuApple size={32} />}
              title="iOS App Development"
              desc="iOS applications are the gold standard for premium user experience. We specialize in Swift development to help you attract and retain maximum iOS users with flawless performance."
              color="hover:border-[#6c53a7]/50"
              accent="#6c53a7"
            />

          </div>
        </div>
      </section>

      {/* ---------------- SECTION 4: CTA STRIP ---------------- */}
        <section className="relative z-10 w-full px-4 bg-gradient-to-br from-gray-50 to-white border-t border-gray-100">
        <div
          className="
            w-full 
            py-16 md:py-20 px-6 
            text-center 
            transition-all 
            duration-300
          "
        >
          <h2
            className="
              text-3xl md:text-5xl 
              momo-font 
              font-bold 
              text-[#ae5c83] 
              tracking-tight
              mb-4
            "
          >
            Explore Our Solutions
          </h2>

          <p className="text-gray-600 mt-3 text-base md:text-lg max-w-2xl mx-auto momo-font mb-8">
            Discover a variety of innovative digital tools and technologies tailored to elevate
            your business performance and accelerate growth.
          </p>

          <Link
            href="/portfolio"
            className="
              inline-flex items-center gap-2
              mt-3 
              px-8 py-4 
              rounded-xl 
              bg-[#6c53a7] 
              text-white 
              font-semibold 
              hover:bg-[#5b4390]
              hover:shadow-lg hover:shadow-[#6c53a7]/20
              hover:-translate-y-1
              transition-all 
              duration-300
            "
          >
            View Portfolio <LuArrowRight />
          </Link>
        </div>
      </section>
    </div>
  );
}

// Sub-component for Service Cards
function ServiceCard({ icon, title, desc, color, accent }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`bg-[#1a1a1a]/80 backdrop-blur-sm p-8 rounded-3xl border border-white/5 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:bg-[#202020] group ${color}`}
    >
      <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300" style={{ color: accent }}>
        {icon}
      </div>
      <h3 className="text-2xl font-bold momo-font mb-4 text-white">{title}</h3>
      <p className="text-gray-400 roboto-text leading-relaxed text-sm">
        {desc}
      </p>
      <div className="mt-8 flex items-center gap-2 text-sm font-bold uppercase tracking-wider opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300" style={{ color: accent }}>
       
      </div>
    </motion.div>
  );
}