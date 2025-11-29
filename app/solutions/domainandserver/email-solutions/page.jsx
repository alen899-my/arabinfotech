"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  Search, Globe, ArrowRight, CheckCircle2, 
  Server, Shield, Zap, Clock, Mail, MousePointer2, 
  Cloud, Cpu, Lock, HardDrive, Settings, Briefcase 
} from "lucide-react";
// ↓↓↓ Make sure this path is correct for your project structure ↓↓↓
import QuotePopup from "../../../../components/QuotePopup"; 

import Link from "next/link"

const DomainWhiteTheme = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const extensions = [
    ".com", ".in", ".ae", ".net", ".org", ".co.uk", ".io", 
    ".tech", ".biz", ".info", ".me", ".store", ".online", ".app"
  ];

  const features = [
    {
      icon: <Clock className="w-6 h-6 text-[#ae5c83]" />,
      title: "100% Network Uptime",
      desc: "Maximum availability ensuring your website never faces downtime issues."
    },
    {
      icon: <Shield className="w-6 h-6 text-[#5b4390]" />,
      title: "Managed Security",
      desc: "Robust protection for your data within our virtual operating environments."
    },
    {
      icon: <MousePointer2 className="w-6 h-6 text-[#ae5c83]" />,
      title: "1-Click App Install",
      desc: "Deploy applications instantly with our easy-to-use control panel."
    },
    {
      icon: <Mail className="w-6 h-6 text-[#5b4390]" />,
      title: "Free Email IDs",
      desc: "Professional email accounts included with allocated disk space and traffic."
    }
  ];
  
  const dedicatedStats = [
    { label: "Uptime", value: "99.99%", icon: <Zap className="w-4 h-4 text-[#ae5c83]" /> },
    { label: "Control", value: "Root Access", icon: <Settings className="w-4 h-4 text-[#5b4390]" /> },
    { label: "Resources", value: "Dedicated", icon: <Cpu className="w-4 h-4 text-[#ae5c83]" /> },
  ];

  return (
    <>
      {/* --- SECTION 1: DOMAIN SEARCH --- */}
     
      <section className="bg-white text-slate-800 py-20 relative overflow-hidden flex flex-col justify-center">
        
        {/* --- CSS for Marquee Animation --- */}
        <style jsx global>{`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: scroll 30s linear infinite;
          }
        `}</style>

        {/* Soft gradient background highlights */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#ae5c83]/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#5b4390]/5 blur-[120px] rounded-full pointer-events-none" />

        {/* --- MAIN CONTENT WRAPPER --- */}
        {/* Reduced gap-12/20 to gap-8/12 and mb-16 to mb-8 */}
        <div className="container mx-auto px-6 relative z-10 max-w-7xl grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-8">

          {/* LEFT: CONTENT */}
          <div className="space-y-2">

            {/* Tag */}
            <div className="flex items-center gap-2 bg-slate-50 w-fit px-4 py-2 rounded-full border border-slate-100">
              <Globe className="w-4 h-4 text-[#ae5c83]" />
              <span className="uppercase momo-font text-[11px] tracking-[2px] font-bold text-[#ae5c83]">
                Email & Hosting Services
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl lg:text-6xl font-extrabold momo-font leading-[1.15] tracking-tight text-slate-900">
              Your Domain <br />
              <span className="text-transparent  bg-clip-text bg-gradient-to-r from-[#ae5c83] to-[#5b4390]">
                Defines Your Identity.
              </span>
            </h1>

            <p className="text-slate-600 roboto-text leading-relaxed text-lg max-w-xl">
              Choosing the right domain is the foundation of your online identity. 
              Whether you're starting a business or creating a personal brand, 
              your domain is the first impression people get. We are the leading registrar 
              in the UAE. Secure your digital name today before someone else does.
            </p>

            <div className=" p-2 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-slate-100 max-w-lg w-full">
              <div className="flex items-center">
                {/* Button triggers popup */}
                <button 
                  onClick={handleOpenPopup}
                  className="bg-[#ae5c83] hover:bg-[#964a6e] momo-font text-white px-6 py-3 rounded-xl font-semibold transition-all shadow-md hover:shadow-lg flex items-center gap-2 justify-center w-full md:w-auto"
                >
                  Get Your Domain 
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex items-center gap-6 text-sm font-medium text-slate-500">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#5b4390]" />
                <span>Instant Activation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#5b4390]" />
                <span>Secure Hosting</span>
              </div>
            </div>

          </div>

          {/* RIGHT: IMAGE */}
          <div className="relative w-full h-[400px] lg:h-[550px] rounded-[2rem] overflow-hidden shadow-2xl shadow-slate-200/50 border border-slate-100 group">
            <Image 
              src="/domain.jpg" 
              alt="Domain Internet Visual" 
              fill 
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent" />
          </div>
        </div>

        {/* ---- MARQUEE ---- */}
        <div className="w-full backdrop-blur-sm">
          <div className="w-full overflow-hidden">
            <div className="flex w-max animate-marquee">
              {[...extensions, ...extensions, ...extensions].map((ext, index) => (
                <span 
                  key={index} 
                  className="mx-8 text-2xl md:text-xl font-bold text-slate-400 hover:text-[#5b4390] transition-colors cursor-default select-none"
                >
                  {ext}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* --- SECTION 2: SHARED MANAGED SERVER --- */}
      
      <section className="text-slate-800 -mt-5 relative overflow-hidden">
        
        <div className="container mx-auto px-6 relative z-10 max-w-7xl">
          
          {/* Reduced gap-16 to gap-10 */}
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            
            {/* LEFT: TEXT CONTENT */}
            <div className="space-y-3">
              
              {/* Header */}
              <div>
                <span className="text-[#5b4390] momo-font font-bold tracking-wider uppercase text-xs mb-2 block flex items-center gap-2">
                  <Cloud className="w-4 h-4" />
                  Premium Solutions in Dubai
                </span>
                <h2 className="text-3xl md:text-5xl momo-font font-bold leading-tight text-slate-900">
                  Managed Cloud <br/>
                  <span className="text-[#ae5c83]">Shared Hosting</span>
                </h2>
              </div>

              {/* Main Paragraphs */}
              <div className="space-y-3 text-slate-600 roboto-text leading-relaxed text-base">
                <p>
                  Are you looking for managed cloud shared hosting for your business needs? 
                  <strong> Arabinfotec</strong> offers the cheapest and most reliable shared server hosting in Dubai. 
                  Our high-end cloud solutions provide a robust platform for your business websites, 
                  running on a custom, easy-to-use control panel designed for efficiency.
                </p>
                
                {/* Info Box */}
                <div className="p-6 bg-white border-l-4 border-[#5b4390] shadow-sm rounded-r-xl">
                  <h4 className="font-bold momo-font text-slate-800 mb-2 flex items-center gap-2">
                    <Server className="w-4 h-4 text-[#5b4390]" />
                    What is a Shared Server?
                  </h4>
                  <p className="text-sm roboto-text ">
                    It is a single computer system where a web-hosting service runs many websites. 
                    It runs in a virtual operating environment, ensuring your site is isolated and 
                    does not affect others. It is the classic, most popular plan—perfect for websites 
                    focusing on cost-efficiency without sacrificing speed.
                  </p>
                </div>

                <p>
                  Every client is allocated specific disk space, traffic, FTP accounts, and databases. 
                  With our 24/7 onsite support and lightning-quick servers, your website will be 
                  distributed across hundreds of cloud shared hosting nodes, located anywhere in Dubai.
                </p>
              </div>

            </div>

            {/* RIGHT: FEATURE GRID */}
            <div className="relative pt-">
              {/* Grid Layout for Features */}
              <div className="grid sm:grid-cols-2 gap-6">
                {features.map((item, idx) => (
                  <div 
                    key={idx} 
                    className="bg-white p-6 rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.04)] border border-slate-400 hover:border-[#ae5c83]/30 hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-4 border border-slate-100">
                      {item.icon}
                    </div>
                    <h3 className="font-bold text-lg momo-font text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-sm roboto-text text-slate-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- SECTION 3: DEDICATED SERVER --- */}
      {/* Reduced py-12 to py-8 */}
      <section className="bg-white text-slate-800 py-8 relative overflow-hidden">
        
        <div className="container mx-auto px-6 relative z-10 max-w-7xl">
          {/* Reduced gap-16 to gap-10 */}
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            
            <div className="relative order-2 lg:order-1">
              <div className="relative w-full h-[500px] rounded-[2rem] overflow-hidden shadow-2xl border border-slate-100">
                 {/* Replace with a server/rack image */}
                <Image 
                  src="/server.jpg" 
                  alt="Dedicated Server Rack" 
                  fill 
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[#5b4390]/20 mix-blend-multiply" />
              </div>
            </div>

            {/* RIGHT: TEXT CONTENT */}
            <div className="space-y-8 order-1 lg:order-2">
              <div>
                <span className="text-[#ae5c83] momo-font font-bold tracking-wider uppercase text-xs mb-2 block flex items-center gap-2">
                  <Cpu className="w-4 h-4" />
                  Ultimate Power & Control
                </span>
                <h2 className="text-3xl md:text-5xl momo-font font-bold leading-tight text-slate-900">
                  Dedicated <br/>
                  <span className="text-[#5b4390]">Managed Server</span>
                </h2>
              </div>

              <div className="prose roboto-text prose-slate text-slate-600 leading-relaxed">
                <p className="text-lg">
                  You may find lots of web hosts offering dedicated servers, but with 
                  <strong> Arabinfotec Cheap Dedicated Server in Dubai</strong>, you will find the difference. 
                  Unlike shared hosting, you don't need to impart your resources to anybody.
                </p>
                <p>
                  This is the definitive choice for power and control. Key assets like <strong>CPU, RAM, and Disk Space</strong> are 
                  assigned exclusively to you. If your website has huge resource requirements or high traffic, 
                  our dedicated server hosting is the solution.
                </p>
              </div>

              {/* Feature List Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex gap-3 items-start">
                  <div className="mt-1 bg-[#ae5c83]/10 p-2 rounded-lg text-[#ae5c83]">
                    <Settings className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold momo-font text-slate-900">Full Root Access</h4>
                    <p className="text-xs roboto-text text-slate-500 mt-1">Install any software required for your business.</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                   <div className="mt-1 bg-[#5b4390]/10 p-2 rounded-lg text-[#5b4390]">
                    <HardDrive className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold momo-font text-slate-900">Single Tenant</h4>
                    <p className="text-xs roboto-text text-slate-500 mt-1">You own complete resources; no sharing with third parties.</p>
                  </div>
                </div>
                 <div className="flex gap-3 items-start">
                   <div className="mt-1 bg-[#ae5c83]/10 p-2 rounded-lg text-[#ae5c83]">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold momo-font text-slate-900">High Performance</h4>
                    <p className="text-xs roboto-text text-slate-500 mt-1">Load pages fast with our 99.99% uptime guarantee.</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                   <div className="mt-1 bg-[#5b4390]/10 p-2 rounded-lg text-[#5b4390]">
                    <Lock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold momo-font text-slate-900">Enhanced Security</h4>
                    <p className="text-xs roboto-text text-slate-500 mt-1">Valuable tools to manage and protect your hosting account.</p>
                  </div>
                </div>
              </div>

              {/* Added Popup Trigger Button in Last Section */}
              <div className="pt-2">
                <button 
                  onClick={handleOpenPopup}
                  className="px-8 py-3.5 bg-[#5b4390] text-white font-bold rounded-xl shadow-lg hover:bg-[#4a3675] hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 momo-font flex items-center gap-2"
                >
                  <Briefcase className="w-4 h-4" />
                  Get Dedicated Server 
                </button>
              </div>

            </div>
          </div>
        </div>
      </section>
        <div className="max-w-5xl mx-auto px-6 relative z-20 ">
             <div className="bg-white rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] p-10 md:p-5 text-center border border-slate-100 relative overflow-hidden">
               
               {/* Top Gradient Line Accent */}
               <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#6c53a7] via-[#ae5c83] to-[#6c53a7]" />
           
               {/* Background Pattern (Optional) */}
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
                     href="/portfolio"
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
                        {/* Assuming you have lucide-react imported */}
                       
                     </div>
                   </Link>
                 </div>
               </div>
             </div>
           </div>          
      {/* Popup Component Rendered at the end */}
      <QuotePopup open={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </>
  );
};

export default DomainWhiteTheme;