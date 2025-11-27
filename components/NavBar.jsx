"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Monitor, Smartphone, Globe, ShoppingBag,MessageSquareCode, BarChart3, Layers } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import lo from "@/public/lo.jpg";
import QuotePopup from "@/components/QuotePopup";

export default function NavBar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen || modalOpen ? "hidden" : "unset";
  }, [mobileOpen, modalOpen]);

  const isActive = (p) => pathname === p || pathname.startsWith(p);

  const SOLUTIONS = [
    {label:"Valet Parking",href:"/solutions/valet-parking"},
    {label:"Splunk professional",href:"/solutions/splunk-proffesional-software"},
    {label:"ShortList Pro",href:"/solutions/shortlist-pro"},
    {label:"Cometency analysis system",href:"/solutions/cometency-analysis-system"},
    {label:"Manpower supply solution",href:"/solutions/manpower-supply-software"},
    { label: "Custom Software", href: "/solutions/custom-software", icon: <Monitor size={18} /> },
    { label: "Mobile Apps", href: "/solutions/custom-application", icon: <Smartphone size={18} /> }
  ];

  const LINKS = [
    { label: "Web Designing", href: "/webdesigning", icon: <Globe size={20} /> },
    { label: "E-commerce", href: "/ecommerce", icon: <ShoppingBag size={20} /> },
    { label: "Digital Marketing", href: "/digitalmarketing", icon: <BarChart3 size={20} /> },
    { label: "Solutions", href: "/solutions", icon: <Layers size={20} /> },
    { label: "Portfolio", href: "/portfolio/featured", icon: <Monitor size={20} /> },
    { label:"Contact Us", href:"/contact", icon:<MessageSquareCode size={20}/> }
    
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b 
          ${scrolled || mobileOpen 
            ? "bg-white backdrop-blur-lg border-gray-200 shadow-sm" 
            : "bg-white backdrop-blur-md border-transparent shadow-none"}`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-20 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="relative z-50" onClick={() => setMobileOpen(false)}>
            <Image 
              src={lo} 
              alt="Logo" 
              width={160} 
              height={50} 
              className="h-10 md:h-12 w-auto"
              priority 
            />
          </Link>

          {/* SHOW FULL MENU ONLY ON LARGE SCREENS */}
          <div className="hidden lg:flex items-center gap-8">
            {LINKS.map((item, i) =>
              item.label !== "Solutions" ? (
                <Link key={i} href={item.href}
                  className={`relative text-[15px] momo-font font-medium transition 
                    ${isActive(item.href) ? "text-[#ae5c83]" : "text-slate-600 hover:text-[#ae5c83]"}`}>
                  {item.label}
                  <span className={`absolute -bottom-1 left-0 h-[2px] bg-[#ae5c83] transition-all duration-300 
                    ${isActive(item.href) ? "w-full" : "w-0 group-hover:w-full"}`} />
                </Link>
              ) : (
               <div key={i} className="relative group">
  <button
    className={`flex items-center gap-1 text-[15px] momo-font font-semibold transition 
      ${pathname.includes("/solutions") ? "text-[#ae5c83]" : "text-slate-600 group-hover:text-[#ae5c83]"}`}
  >
    Solutions
    <ChevronDown className="w-4 h-4 transition-all duration-200 group-hover:rotate-180" />
  </button>

  {/* Dropdown */}
  <div
    className="absolute left-0 top-full  opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-3 group-hover:translate-y-0 transition-all duration-300 border-t-[3px] border-[#ae5c83]"
  >
    <div className="w-[200px] bg-white shadow-2xl rounded-lg border border-gray-200 overflow-hidden">
      
      {/* Header */}
      

      {/* List */}
      <div className="flex flex-col ">
        {SOLUTIONS.map((s, idx) => (
          <Link
            key={idx}
            href={s.href}
            className="flex items-center justify-between group/item px-4 py-2 hover:bg-[#f9e6f1] transition-all duration-200 cursor-pointer"
          >
            <span className="flex items-center  text-[14px] font-medium text-gray-700 group-hover/item:text-[#ae5c83]">
              <span className="p-1.5 rounded-md bg-gray-100 text-gray-600 group-hover/item:bg-white group-hover/item:text-[#ae5c83] transition">
                {s.icon}
              </span>
              {s.label}
            </span>

            {/* OPTIONAL ARROW ICON LIKE SCREENSHOT */}
            
          </Link>
        ))}
      </div>
    </div>
  </div>
</div>

              )
            )}

            <button
              onClick={() => setModalOpen(true)}
              className="px-5 py-2 bg-gradient-to-r from-[#ae5c83] to-[#8a4262] text-white rounded-full text-sm shadow-md hover:scale-[1.05] transition">
              Get a Quote
            </button>
          </div>

          {/* Mobile / Tablet Hamburger (SM + MD only) */}
          <button
            className="lg:hidden text-slate-700 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      <QuotePopup open={modalOpen} onClose={() => setModalOpen(false)} />

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 bg-white z-40 pt-24 px-6 lg:hidden overflow-y-auto"
          >
            <div className="flex flex-col gap-4">
              {LINKS.map((item, i) => (
                item.label !== "Solutions" ? (
                  <Link key={i} href={item.href} onClick={() => setMobileOpen(false)}
                    className={`text-lg font-medium border-b py-4 flex gap-4
                      ${isActive(item.href) ? "text-[#ae5c83]" : "text-slate-600"}`}>
                    {item.icon} {item.label}
                  </Link>
                ) : (
                  <div key={i} className="border-b">
                    <button
                      onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                      className="w-full flex justify-between py-4 text-lg font-medium">
                      <span className="flex items-center gap-4">{item.icon} Solutions</span>
                      <ChevronDown className={`${mobileSolutionsOpen ? "rotate-180" : ""}`} />
                    </button>

                    {mobileSolutionsOpen && (
                      <div className="bg-gray-50 p-2 rounded-xl">
                        {SOLUTIONS.map((s, idx) => (
                          <Link key={idx} href={s.href} onClick={() => setMobileOpen(false)}
                            className="flex items-center gap-3 py-3 px-2 rounded-lg hover:bg-white">
                            {s.icon} {s.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )
              ))}
            </div>

            <button
              onClick={() => { setMobileOpen(false); setModalOpen(true); }}
              className="mt-8 px-6 py-3 mx-auto block bg-gradient-to-r from-[#ae5c83] to-[#8a4262] text-white rounded-full shadow-md">
              Get a Quote
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
