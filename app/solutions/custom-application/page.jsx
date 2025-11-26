"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  LuSmartphone, 
  LuLayers, 
  LuCpu, 
  LuApple, 
  LuCode, 
  LuArrowRight, 
  LuZap 
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

export default function MobileAppsPage() {
  return (
    <div className="w-full bg-white overflow-x-hidden">
      
      {/* ---------------- SECTION 1: HERO (Text + CSS Composition, No Video) ---------------- */}
      <section className="relative pt-32 pb-20 px-6 md:pt-25 md:pb-10 bg-[#fdfbfd]">
        {/* Background Decor */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-b from-[#f4ebf1] to-transparent -z-10 rounded-bl-[100px]" />

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left: Content */}
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={fadeInUp}
            className="z-10"
          >
           

            <h1 className="text-5xl md:text-7xl momo-font font-bold text-gray-900 leading-[1.1] mb-6">
              Apps that sit in <br/>
              <span className="text-[#6c53a7]">everyone's pocket.</span>
            </h1>
            
            <p className="text-lg text-gray-600 roboto-text mb-8 max-w-lg leading-relaxed">
              We create top-notch user experiences for startups and enterprise-level mobile applications that build business and drive engagement.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <button className="px-8 py-4 bg-[#6c53a7] text-white rounded-xl font-bold hover:bg-[#58428a] transition shadow-lg shadow-[#6c53a7]/30 flex items-center gap-2">
                  Lets Talk <LuArrowRight />
                </button>
              </Link>
            
            </div>
          </motion.div>

          {/* Right: Abstract 3D Phone Composition (CSS only, no images needed) */}
          <div className="relative h-[500px] flex items-center justify-center">
             {/* Back Circle */}
             <div className="absolute w-[400px] h-[400px] bg-[#ae5c83]/10 rounded-full blur-3xl" />
             
             {/* Floating Phone Card 1 */}
             <motion.div 
               variants={floatAnimation}
               animate="animate"
               className="absolute z-20 w-64 h-[450px] bg-white border-8 border-gray-900 rounded-[3rem] shadow-2xl flex flex-col overflow-hidden rotate-[-6deg]"
             >
                <div className="h-full w-full bg-[#1a1a1a] relative p-4">
                    {/* Fake UI Elements */}
                    <div className="w-full h-32 bg-[#ae5c83] rounded-2xl mb-4 opacity-80" />
                    <div className="flex gap-2 mb-4">
                        <div className="w-12 h-12 bg-gray-700 rounded-full" />
                        <div className="flex-1 space-y-2 py-2">
                            <div className="w-full h-2 bg-gray-700 rounded" />
                            <div className="w-2/3 h-2 bg-gray-700 rounded" />
                        </div>
                    </div>
                    <div className="w-full h-32 bg-[#6c53a7] rounded-2xl opacity-80" />
                </div>
             </motion.div>

             {/* Floating Phone Card 2 */}
             <motion.div 
               animate={{ y: [0, 20, 0] }}
               transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
               className="absolute z-10 top-20 right-10 md:right-20 w-56 h-[400px] bg-white border-8 border-gray-200 rounded-[2.5rem] shadow-xl overflow-hidden rotate-[6deg] opacity-60 md:opacity-100"
             >
                 <div className="h-full w-full bg-gray-50 p-4">
                    <div className="w-full h-40 bg-gray-200 rounded-xl mb-4" />
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

      {/* ---------------- SECTION 2: CONTENT & VIDEO INTEGRATION ---------------- */}
     <section className="py-6 px-6 bg-white">
  <div className="max-w-7xl mx-auto">
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      
      {/* The Video Section */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative order-2 lg:order-1"
      >
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-video">
          
          <video
            src="/videos/mobile.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/fallback-mobile.jpg"
            disablePictureInPicture
            controlsList="nodownload nofullscreen noremoteplayback"
            onCanPlay={(e) => e.target.play()}
            className="w-full h-full object-cover bg-gray-100 will-change-transform"
          />

          {/* Overlay Pulse Button Effect */}
          
        </div>

        {/* Decorative Glow */}
        <div className="absolute -z-10 -bottom-10 -left-10 w-40 h-40 bg-[#6c53a7] rounded-full blur-[60px] opacity-40"></div>
      </motion.div>

      {/* Text Section */}
      <motion.div 
         initial="hidden"
         whileInView="visible"
         variants={fadeInUp}
         className="order-1 lg:order-2"
      >
        <h2 className="text-4xl md:text-5xl momo-font font-bold text-gray-900 mb-6">
          Customized excellence, <br/>
          <span className="text-[#ae5c83]">Evolving with technology.</span>
        </h2>
        
        <p className="text-gray-600 roboto-text text-lg mb-6 leading-relaxed">
          We study all your requirements to offer you top-quality and smooth mobile applications. 
          Whether it's a startup idea or an enterprise ecosystem, our solutions evolve alongside technological advancements.
        </p>

        <p className="text-gray-600 roboto-text text-lg mb-8 leading-relaxed">
          We offer customized mobile applications on different scales because we know how to exploit the powers of different technologies and integrate them seamlessly.
        </p>

        <div className="grid grid-cols-2 gap-6">
          <div className="p-4 bg-[#f8f2f5] rounded-xl">
            <h4 className="font-bold momo-font text-[#ae5c83] text-2xl">50+</h4>
            <p className="text-sm text-gray-500">Apps Launched</p>
          </div>
          <div className="p-4 bg-[#eef0f6] rounded-xl">
            <h4 className="font-bold momo-font text-[#6c53a7] text-2xl">4.8</h4>
            <p className="text-sm text-gray-500">Avg Store Rating</p>
          </div>
        </div>
      </motion.div>
      
    </div>
  </div>
</section>


      {/* ---------------- SECTION 3: SERVICES (3 Columns) ---------------- */}
      <section className="py-20 px-6 bg-[#111] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#ae5c83] font-bold tracking-widest uppercase text-sm">Our Expertise</span>
            <h2 className="text-4xl md:text-5xl momo-font font-bold mt-3">Mobile App Services</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Card 1: Hybrid */}
            <ServiceCard 
              icon={<LuLayers size={40} />}
              title="Hybrid App Development"
              desc="Hybrid apps allow you to leverage all the popular mobile platforms out there. We help you make the most of React Native and Flutter so your business succeeds on every device."
              color="hover:shadow-[#ae5c83]"
              accent="#ae5c83"
            />

            {/* Card 2: Android */}
            <ServiceCard 
              icon={<LuCode size={40} />}
              title="Android Development"
              desc="Android applications connect you to the maximum number of users globally. Our native Android solutions provide you with a competitive advantage in your respective industry."
              color="hover:shadow-[#3DDC84]" // Android Green tint
              accent="#3DDC84"
            />

            {/* Card 3: iOS */}
            <ServiceCard 
              icon={<LuApple size={40} />}
              title="iOS App Development"
              desc="iOS applications are the gold standard for premium user experience. We specialize in Swift development to help you attract and retain maximum iOS users with flawless performance."
              color="hover:shadow-[#6c53a7]"
              accent="#6c53a7"
            />

          </div>
        </div>
      </section>

      {/* ---------------- SECTION 4: CTA STRIP ---------------- */}
        <section className="relative z-10 w-full  px-4 ">
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
            href="contact"
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

// Sub-component for Service Cards
function ServiceCard({ icon, title, desc, color, accent }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`bg-[#1a1a1a] p-8 rounded-3xl border border-white/5 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${color}`}
    >
      <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 text-white" style={{ color: accent }}>
        {icon}
      </div>
      <h3 className="text-2xl font-bold momo-font mb-4">{title}</h3>
      <p className="text-gray-400 roboto-text leading-relaxed text-sm">
        {desc}
      </p>
      <div className="mt-8 flex items-center gap-2 text-sm font-bold uppercase tracking-wider opacity-0 transition-opacity group-hover:opacity-100" style={{ color: accent }}>
        Learn More <LuArrowRight />
      </div>
    </motion.div>
  );
}