"use client";

import React, { useState, useEffect, useRef } from "react";
import { 
  CheckCircle2, 
  CloudCog, ShieldCheck, Coins, LayoutGrid,
  ShieldAlert, Lock, Users,Server, Mail, 
  Laptop, HardDrive, AlertOctagon, Check,Briefcase, X 
} from "lucide-react";
import QuotePopup from "../../../../components/QuotePopup";
import PricingPage from "@/components/PricingPage";

// --- SUB-COMPONENT: Animated Circular Stat ---
const AnimatedCircularStat = ({ value, label, icon, color }) => {
  const [percent, setPercent] = useState(0);
  
  
  const handleOpenPopup = () => {
      setIsPopupOpen(true);
    };
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  // Parse the number from string "58%" -> 58
  const targetNumber = parseInt(value); 

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the item is visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      let start = 0;
      const duration = 2000; // Animation duration in ms
      const startTime = performance.now();

      const animate = (currentTime) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        
        // Easing function for smooth effect (easeOutQuart)
        const easeOut = 1 - Math.pow(1 - progress, 4);
        
        const currentVal = Math.floor(easeOut * targetNumber);
        setPercent(currentVal);

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isVisible, targetNumber]);

  // Circle Math
  const radius = 60;
  const stroke = 8;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percent / 100) * circumference;

  return (
    <div ref={ref} className="flex flex-col items-center">
      {/* Circle Container */}
      <div className="relative flex items-center justify-center w-40 h-40 ">
        {/* Background Circle */}
        <svg
          height={radius * 2}
          width={radius * 2}
          className="transform -rotate-90"
        >
          <circle
            stroke="#e2e8f0" // slate-200
            strokeWidth={stroke}
            fill="transparent"
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />
         
          <circle
            stroke="currentColor"
            className={`${color} transition-all duration-300 ease-out`}
            strokeWidth={stroke}
            strokeDasharray={circumference + ' ' + circumference}
            style={{ strokeDashoffset }}
            strokeLinecap="round"
            fill="transparent"
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />
        </svg>

        {/* Content Centered Inside Circle */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
           {/* Small Icon inside or above text */}
           <div className={`mb-1 scale-75 ${color} opacity-80`}>
             {icon}
           </div>
           <span className={`text-2xl momo-font font-extrabold ${color}`}>
             {percent}%
           </span>
        </div>
      </div>

      {/* Label Text */}
      <p className="text-slate-500 roboto-text font-medium leading-tight text-center max-w-[200px]">
        {label}
      </p>
    </div>
  );
};


// --- MAIN PAGE COMPONENT ---
const Microsoft365Page = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  // Updated Video ID for Microsoft 365 Copilot
  const VIDEO_ID = "9lCs43HUw9M"; 

  // Data structure for the three main content pillars
  const benefits = [
    {
      title: "Be Productive Anywhere",
      description: "Get work done and stay connected whether you're working remotely or onsite.",
      icon: <CloudCog className="w-8 h-8 text-[#ae5c83]" />,
      accentColor: "text-[#ae5c83]",
      points: [
        "Chat, Call and Host meetings",
        "Share documents in the cloud",
        "Collaborate using office apps",
        "Connect via email and calendar",
      ],
    },
    {
      title: "Secure your Business",
      description: "Help safeguard business data with built-in enterprise-grade security features.",
      icon: <ShieldCheck className="w-8 h-8 text-[#5b4390]" />,
      accentColor: "text-[#5b4390]",
      points: [
        "Defend against cyberthreats",
        "Make customer data more secure",
        "Help secure your devices",
        "Manage users and devices easily",
      ],
    },
    {
      title: "Get a Cost-effective Solution",
      description: "Streamline IT setup, management, and costs with a single productivity solution.",
      icon: <Coins className="w-8 h-8 text-[#ae5c83]" />,
      accentColor: "text-[#ae5c83]",
      points: [
        "Improve overall user productivity",
        "Save on automation and IT costs",
        "Consolidate vendor spend",
        "Reduce cost of security risks",
      ],
    },
  ];

  const stats = [
    {
      value: "58%",
      label: "Believe they are unlikely to be targeted by cyber criminals",
      icon: <ShieldAlert className="w-8 h-8" />,
      color: "text-[#ae5c83]"
    },
    {
      value: "43%",
      label: "Do not have a cybersecurity defense plan",
      icon: <Lock className="w-8 h-8" />,
      color: "text-[#5b4390]"
    },
    {
      value: "50%",
      label: "Do not provide employee cybersecurity training",
      icon: <Users className="w-8 h-8" />,
      color: "text-[#ae5c83]"
    }
  ];

  return (
    <main className="bg-white text-slate-800 min-h-screen overflow-hidden">
      
      {/* =========================================
          HERO SECTION
      ========================================= */}
      <section className="relative py-20 lg:py-20">
         {/* Soft gradient background highlights */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#ae5c83]/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#5b4390]/5 blur-[120px] rounded-full pointer-events-none -translate-y-1/2" />

        <div className="container mx-auto px-6 relative z-10 max-w-7xl">
          
          {/* Centered Hero Text */}
          <div className="text-center max-w-4xl mx-auto mb-16 space-y-6">
            <div className="flex items-center justify-center gap-2 mb-4">
                <div className="bg-slate-50 px-4 py-2 rounded-full border border-slate-100 flex items-center gap-2">
                  <LayoutGrid className="w-4 h-4 text-[#5b4390]" />
                  <span className="uppercase text-[11px] tracking-[2px] font-bold text-[#5b4390]">
                    Microsoft 365 for Business
                  </span>
                </div>
            </div>

            <h1 className="text-5xl momo-font lg:text-7xl font-extrabold leading-[1.1] tracking-tight text-slate-900">
              Work From Anywhere, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ae5c83] to-[#5b4390]">
                Collaborate Seamlessly.
              </span>
            </h1>
          </div>

          {/* =========================================
              YOUTUBE VIDEO BANNER (AUTOPLAY)
          ========================================= */}
          <div className="relative w-full h-[300px] md:h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-200/50 border border-slate-100 mb-10 group">
            
            {/* Iframe Wrapper */}
            <div className="absolute inset-0 w-full h-full pointer-events-none">
              <iframe
                src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&mute=1&controls=0&loop=1&playlist=${VIDEO_ID}&showinfo=0&rel=0&iv_load_policy=3&disablekb=1&modestbranding=1`}
                title="Microsoft 365 Banner Video"
                className="w-full h-full scale-[1.35] object-cover" 
                allow="autoplay; encrypted-media"
                frameBorder="0"
              />
            </div>

            {/* Overlays for better integration */}
            <div className="absolute inset-0 bg-slate-900/10 mix-blend-multiply pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent pointer-events-none" />
          </div>


          {/* =========================================
              THREE PILLARS GRID
          ========================================= */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-10">
            {benefits.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-white p-4 rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-400 hover:border-[#ae5c83]/30 hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden flex flex-col"
              >
                 <div className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none 
                    ${idx % 2 === 0 ? 'from-[#ae5c83]/5' : 'from-[#5b4390]/5'} to-transparent`} 
                 />

                 <div className=" p-5  rounded-3xl w-fit border border-slate-100 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                   {item.icon}
                 </div>
                 
                 <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2 momo-font">{item.title}</h3>
                    <p className="text-slate-600 mb-3  roboto-text leading-relaxed">{item.description}</p>

                    <ul className="space-y-4">
                      {item.points.map((point, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-3 roboto-text text-[15px] text-slate-700 font-medium">
                          <CheckCircle2 className={`w-5 h-5 flex-shrink-0 ${item.accentColor} mt-0.5`} />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                 </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <section className=" relative overflow-hidden">
        
      
        
        <div className="container mx-auto px-6 relative z-10 max-w-7xl">
          
          {/* HEADER & ANIMATED STATS GRID */}
          <div className="max-w-4xl mx-auto text-center mb-8">
            <h2 className="text-4xl momo-font lg:text-5xl font-extrabold text-slate-900 ">
              Why you need Office 365?
            </h2>
            <p className="text-lg roboto-text text-slate-600 mb-1">
              Small Businesses are <span className="text-[#ae5c83] font-bold">over Confident</span> and <span className="text-[#5b4390] font-bold">under Prepared</span>.
            </p>

            {/* --- UPDATED STATS SECTION --- */}
            <div className="grid md:grid-cols-3 gap-8 justify-items-center">
              {stats.map((stat, idx) => (
                <AnimatedCircularStat 
                  key={idx}
                  value={stat.value}
                  label={stat.label}
              
                  color={stat.color}
                />
              ))}
            </div>
          </div>

          <div className="w-full h-px bg-slate-200 mb-2" />

          {/* TEXT CONTENT & ARABINFOTEC PITCH */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-4">
            
            {/* Left: General Benefits */}
            <div className="space-y-6">
              <h3 className="text-3xl momo-font font-bold text-slate-900">
                How can Office 365 help your business?
              </h3>
              <p className="text-slate-600 roboto-text leading-relaxed text-lg">
                As a small or midsize business, you need affordable and professional IT tools. 
                Microsoft Office 365 gives you and your employees access to popular productivity applications, 
                including <strong>Microsoft Word, Excel, and PowerPoint</strong> anytime, from virtually anywhere.
              </p>
              <p className="text-slate-600 leading-relaxed text-lg">
                You can also take advantage of built-in enterprise-grade services such as high-definition 
                video conferencing, business-class email, and portals for file sharing.
              </p>
            </div>

            {/* Right: Arabinfotec Box */}
            <div className="bg-[#5b4390] text-white p-10 rounded-[2.5rem] relative overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              
              <div className="relative z-10 space-y-6">
                <h4 className="text-2xl momo-font font-bold">Partner with Arabinfotec</h4>
                <p className="text-slate-100  leading-relaxed">
                  Arabinfotec is one of the authorized distributors of Microsoft Office 365 solutions in UAE. 
                  We have expertise in setting up your business needs at a very affordable price.
                </p>
                
                <div className="pt-4">
                  <p className="text-sm font-semibold momo-font uppercase tracking-wider text-slate-300 mb-2">Get in touch</p>
                  <a 
                    href="mailto:info@arabinfotec.com" 
                    className="inline-flex items-center  gap-3 bg-white text-[#5b4390] px-6 py-3 rounded-xl font-bold hover:bg-[#ae5c83] hover:text-white transition-all shadow-lg"
                  >
                    <Mail className="w-5 h-5" />
                    info@arabinfotec.com
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>
       <PricingPage/>    
      <section className="py-1 px-6 bg-white">
  <div className="max-w-6xl mx-auto">
    
    {/* Section Heading */}
    <div className="mb-1 text-center md:text-left">
      <h2 className="text-3xl momo-font font-extrabold text-slate-900">
        Setup & Implementation Scope
      </h2>
      <p className="text-slate-500 roboto-text mt-2">
        Transparency is key. Here is exactly what the One-Time Setup Fee covers.
      </p>
    </div>

    {/* Split Container */}
    <div className="grid md:grid-cols-2 gap-0 rounded-[2.5rem] overflow-hidden shadow-2xl">
      
      {/* =========================================
          PANEL 1: INCLUDED
      ========================================= */}
      <div className="bg-gradient-to-br from-[#5b4390] to-[#3d2c61] p-10 md:p-14 text-white relative">

        {/* Decorative Glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm border border-white/10">
              <ShieldCheck className="w-8 h-8 text-[#ae5c83]" />
            </div>
            <div>
              <h3 className="text-2xl momo-font font-bold">One-Time Charge Includes</h3>
              <p className="text-slate-300  text-sm">Professional Configuration</p>
            </div>
          </div>

          <ul className="space-y-6">

            {/* Item 1 */}
            <li className="flex items-start gap-4">
              <div className="mt-1 bg-green-400/20 p-1 rounded-full">
                <Check className="w-5 h-5 text-green-300" />
              </div>
              <div>
                <h4 className="font-bold text-lg momo-font">Cpanel Domain Configuration</h4>
                <p className="text-slate-300  text-sm leading-relaxed mt-1">
                  Complete DNS setup and domain linking to Microsoft servers to ensure seamless connectivity.
                </p>
              </div>
            </li>

            {/* Item 2 */}
            <li className="flex items-start gap-4">
              <div className="mt-1 bg-green-400/20 p-1 rounded-full">
                <Check className="w-5 h-5 text-green-300" />
              </div>
              <div>
                <h4 className="font-bold momo-font text-lg">License Installation & Email Gen</h4>
                <p className="text-slate-300 text-sm leading-relaxed mt-1">
                  Allocation of licenses to users and creation of professional business email addresses.
                </p>
              </div>
            </li>

            {/* Item 3 */}
            <li className="flex items-start gap-4">
              <div className="mt-1 bg-green-400/20 p-1 rounded-full">
                <Check className="w-5 h-5 text-green-300" />
              </div>
              <div>
                <h4 className="font-bold momo-font text-lg">Security Policy Implementation</h4>
                <p className="text-slate-300  text-sm leading-relaxed mt-1">
                  Setting up tenant-wide security rules to protect your organization's data from day one.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* =========================================
          PANEL 2: NOT INCLUDED
      ========================================= */}
      <div className="bg-slate-50 p-10 md:p-14 border-y border-r border-slate-200 md:border-l-0 md:rounded-r-[2.5rem] relative">
        
        <div className="flex items-center gap-3 mb-8">
          <div className="p-3 bg-slate-200 rounded-xl">
            <AlertOctagon className="w-8 h-8 text-slate-500" />
          </div>
          <div>
            <h3 className="text-2xl momo-font font-bold text-slate-800">Exclusions</h3>
            <p className="text-slate-500 roboto-text text-sm">Client Responsibilities</p>
          </div>
        </div>

        <div className="space-y-6">
          
          {/* Item 1 */}
          <div className="group flex items-start gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm hover:border-red-200 transition-colors">
            <div className="mt-1 bg-red-50 p-1.5 rounded-full">
              <Laptop className="w-5 h-5 text-red-500" />
            </div>
            <div>
              <h4 className="font-bold momo-font text-slate-800">Client Device Configuration</h4>
              <p className="text-slate-500 roboto-text text-sm mt-1">
                We do not configure individual laptops, mobiles, or Outlook desktop clients on user devices.
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="group flex items-start gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm hover:border-red-200 transition-colors">
            <div className="mt-1 bg-red-50 p-1.5 rounded-full">
              <HardDrive className="w-5 h-5 text-red-500" />
            </div>
            <div>
              <h4 className="font-bold momo-font text-slate-800">Data & Email Backups</h4>
              <p className="text-slate-500 roboto-text text-sm mt-1">
                Migration or backup of existing emails, contacts, or files from previous providers is not included.
              </p>
            </div>
          </div>

          {/* Bottom Note */}
          <div className="mt-6 pt-6 border-t border-slate-200">
            <p className="text-xs roboto-text text-slate-400 font-medium italic">
              * Note: If you require assistance with these excluded items, please contact our support team for a separate quote.
            </p>
          </div>

        </div>
      </div>

    </div>
  </div>

<div className="py-12 px-6 text-center">
  <div className="max-w-3xl mx-auto flex flex-col items-center">
    
    <h2 className="text-3xl md:text-4xl momo-font font-bold text-slate-900 mb-4">
      Looking for Office 365 solutions?
    </h2>
    
    <p className="text-lg roboto-text text-slate-600 mb-8 max-w-xl">
      Need a custom enterprise setup or consultation? Let us build the perfect plan for your business.
    </p>

    <button 
      onClick={handleOpenPopup}
      className="px-10 py-3.5 bg-[#ae5c83] text-white font-bold rounded-md shadow-lg hover:bg-[#96476d] hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 momo-font"
    >
      Schedule a Call
    </button>
  </div>
</div>
            <QuotePopup open={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
</section>

           
    </main>
  );
};

export default Microsoft365Page;