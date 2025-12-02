"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu, X, ChevronDown, Monitor,
  Globe, ShoppingBag, MessageSquareCode, KeySquare,
  BarChart3, Layers, Server, Smartphone, Code2, Database
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import lo from "@/public/lo.jpg";
import QuotePopup from "@/components/QuotePopup";

export default function NavBar() {
  const pathname = usePathname();
  
  // Mobile Toggles
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [mobileSoftwareOpen, setMobileSoftwareOpen] = useState(false);
  const [mobileEmailOpen, setMobileEmailOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  // Handle Scroll Effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock Body Scroll when menu/modal is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen || modalOpen ? "hidden" : "unset";
  }, [mobileOpen, modalOpen]);

  const isActive = (p) => pathname === p || pathname.startsWith(p);

  // --- DATA DEFINITIONS ---

  // Column 1: Software Products
  const SOFTWARE_SOLUTIONS = [
    { label: "Attendance Payroll System", href: "/attendance-payroll-system" },
    { label: "Auto Garage system", href: "/auto-garage-system" },
    { label: "Manufacturers Project Lifecycle", href: "/manufacturers-project-lifecycle-system" },
    { label: "Materials Requirement Planning", href: "/materials-requirement-planning-system" },
    { label: "Property Rentals Management", href: "/property-rentals-management-system" },
  ];

  // Column 2: Infrastructure
  const EMAILANDDOMAIN = [
    { label: "Email & Hosting", href: "/email-solutions" },
    { label: "Google Business", href: "/google-business" },
    { label: "Office365", href: "/office365" },
  ];

  // Column 3: Specialized Systems
  const SPECIALIZED_SYSTEMS = [
    { label: "Valet Parking", href: "/valet-parking" },
    { label: "Splunk Professional", href: "/splunk-proffesional-service" },
    { label: "ShortList Pro", href: "/shortlist-pro" },
    { label: "Competency Analysis", href: "/competency-analysis-system" },
    { label: "Manpower Supply", href: "/manpower-supply-software" },
  ];

  // Column 4: Development Services (Now standard list format)
  const DEV_SERVICES = [
    { label: "Custom Software", href: "/custom-software" },
    { label: "Mobile Apps", href: "/custom-application" }
  ];

  const LINKS = [
    { label: "Web Designing", href: "/webdesigning", icon: <Globe size={20} /> },
    { label: "E-commerce", href: "/ecommerce", icon: <ShoppingBag size={20} /> },
    { label: "Digital Marketing", href: "/digitalmarketing", icon: <BarChart3 size={20} /> },
    { label: "Solutions", href: "/solutions", icon: <Layers size={20} /> }, // Trigger for Mega Menu
    { label: "Portfolio", href: "/portfolio/featured", icon: <Monitor size={20} /> },
    { label: "About Us", href: "/about", icon: <KeySquare size={20} /> },
    { label: "Contact Us", href: "/contact", icon: <MessageSquareCode size={20} /> }
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
          <Link href="/" className="relative z-60" onClick={() => setMobileOpen(false)}>
            <Image
              src={lo}
              alt="Logo"
              width={160}
              height={50}
              className="h-10 md:h-12 w-auto"
              priority
            />
          </Link>

          {/* --- DESKTOP MENU --- */}
          <div className="hidden lg:flex items-center gap-6">
            {LINKS.map((item, i) =>
              item.label !== "Solutions" ? (
                // STANDARD LINKS
                <Link key={i} href={item.href}
                  className={`relative text-[15px] momo-font font-medium transition 
                    ${isActive(item.href) ? "text-[#ae5c83]" : "text-slate-800 hover:text-[#ae5c83]"}`}>
                  {item.label}
                  <span className={`absolute -bottom-1 left-0 h-[2px] bg-[#ae5c83] transition-all duration-300 
                    ${isActive(item.href) ? "w-full" : "w-0 group-hover:w-full"}`} />
                </Link>
              ) : (
                // MEGA MENU TRIGGER
                <div key={i} className="group static">
                  <button
                    className={`flex items-center gap-1 text-[15px] momo-font font-semibold transition h-20 
                      ${pathname.includes("/solutions") ? "text-[#ae5c83]" : "text-slate-800 group-hover:text-[#ae5c83]"}`}
                  >
                    Solutions
                    <ChevronDown className="w-4 h-4 transition-all duration-200 group-hover:rotate-180" />
                  </button>

                  {/* --- MEGA MENU CONTAINER --- */}
                 <div
  className="
    absolute left-80 top-[80px] w-fit
    bg-white rounded-md
    border border-slate-400 border-t-[3px] border-t-[#ae5c83]
    shadow-2xl
    opacity-0 invisible
    group-hover:opacity-100 group-hover:visible
    transition-all duration-300
    translate-y-4 group-hover:translate-y-0
  "
>

                    <div className="max-w-7xl mx-auto px-6 py-8">
                      <div className="grid grid-cols-4 gap-8">
                        
                        {/* COLUMN 1: Specialized Systems */}
                        <div className="space-y-4">
                          <h3 className="text-[#ae5c83] font-bold momo-font text-sm uppercase tracking-wider border-b pb-2 mb-2 flex items-center gap-2">
                            <Layers size={16} /> Specialized Systems
                          </h3>
                          <ul className="space-y-2">
                            {SPECIALIZED_SYSTEMS.map((sub, idx) => (
                              <li key={idx}>
                                <Link href={sub.href} className="text-slate-600 hover:text-[#ae5c83] text-[14px] momo-font font-medium block hover:translate-x-1 transition-transform">
                                  {sub.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* COLUMN 2: Software Products */}
                        <div className="space-y-4">
                          <h3 className="text-[#ae5c83] font-bold momo-font text-sm uppercase tracking-wider border-b pb-2 mb-2 flex items-center gap-2">
                            <Database size={16} /> Software Products
                          </h3>
                          <ul className="space-y-2">
                            {SOFTWARE_SOLUTIONS.map((sub, idx) => (
                              <li key={idx}>
                                <Link href={sub.href} className="text-slate-600 hover:text-[#ae5c83] text-[14px] momo-font font-medium block hover:translate-x-1 transition-transform">
                                  {sub.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* COLUMN 3: IT Infrastructure */}
                        <div className="space-y-4">
                          <h3 className="text-[#ae5c83] font-bold momo-font text-sm uppercase tracking-wider border-b pb-2 mb-2 flex items-center gap-2">
                             <Server size={16} /> Email & Domain
                          </h3>
                          <ul className="space-y-2">
                            {EMAILANDDOMAIN.map((sub, idx) => (
                              <li key={idx}>
                                <Link href={sub.href} className="text-slate-600 hover:text-[#ae5c83] text-[14px] momo-font font-medium block hover:translate-x-1 transition-transform">
                                  {sub.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* COLUMN 4: Development Services (Matching Style) */}
                        <div className="space-y-4">
                           <h3 className="text-[#ae5c83] font-bold momo-font text-sm uppercase tracking-wider border-b pb-2 mb-2 flex items-center gap-2">
                            <Code2 size={16} /> Custom Development
                          </h3>
                          <ul className="space-y-2">
                            {DEV_SERVICES.map((sub, idx) => (
                              <li key={idx}>
                                <Link href={sub.href} className="text-slate-600 hover:text-[#ae5c83] text-[14px] momo-font font-medium block hover:translate-x-1 transition-transform">
                                  {sub.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              )
            )}

            {/* CTA Button */}
            <button
              onClick={() => setModalOpen(true)}
              className="
                px-6 py-3 
                text-white text-sm momo-font rounded-lg
                bg-gradient-to-r from-[#ae5c83] to-[#5b4390]
                shadow-[0_10px_25px_rgba(174,92,131,0.35)]
                hover:shadow-[0_15px_30px_rgba(91,67,144,0.45)]
                hover:scale-[1.06]
                transition-all duration-300 ease-out
                backdrop-blur-md
              "
            >
              Get a Quote
            </button>
          </div>

          {/* Mobile / Tablet Hamburger */}
          <button
            className="lg:hidden text-slate-800 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      <QuotePopup open={modalOpen} onClose={() => setModalOpen(false)} />

      {/* --- MOBILE MENU (Accordion Style) --- */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-white z-40 pt-24 px-6 lg:hidden overflow-y-auto pb-20"
          >
            <div className="flex flex-col gap-2">
              {LINKS.map((item, i) => (
                item.label !== "Solutions" ? (
                  <Link key={i} href={item.href} onClick={() => setMobileOpen(false)}
                    className={`text-lg font-medium border-b border-gray-100 momo-font py-4 flex gap-4
                      ${isActive(item.href) ? "text-[#ae5c83]" : "text-slate-800"}`}>
                    {item.icon} {item.label}
                  </Link>
                ) : (
                  <div key={i} className="border-b border-gray-100">
                    {/* Main Solutions Toggle */}
                    <button
                      onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                      className="w-full flex justify-between items-center py-4 text-lg font-medium text-slate-800">
                      <span className="flex items-center gap-4 momo-font">{item.icon} Solutions</span>
                      <ChevronDown className={`transition-transform duration-300 ${mobileSolutionsOpen ? "rotate-180" : ""}`} />
                    </button>

                    {/* Solutions Nested Accordion */}
                    <AnimatePresence>
                      {mobileSolutionsOpen && (
                        <motion.div 
                          initial={{ height: 0, opacity: 0 }} 
                          animate={{ height: "auto", opacity: 1 }} 
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="pl-4 pr-2 pb-4 space-y-1">
                            
                            {/* Mobile: Specialized Systems */}
                            <div className="py-2">
                                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Specialized Systems</p>
                                {SPECIALIZED_SYSTEMS.map((s, idx) => (
                                    <Link key={idx} href={s.href} onClick={() => setMobileOpen(false)}
                                    className="block text-slate-700 py-2 pl-2 text-[15px] momo-font hover:text-[#ae5c83]">
                                    {s.label}
                                    </Link>
                                ))}
                            </div>

                            {/* Mobile: Software Products (Nested Toggle) */}
                            <div className="bg-gray-50 rounded-lg mt-2">
                                <button 
                                  onClick={() => setMobileSoftwareOpen(!mobileSoftwareOpen)}
                                  className="w-full flex items-center justify-between text-slate-800 py-3 px-3 hover:text-[#ae5c83] font-medium text-[15px]"
                                >
                                  <span className="flex items-center momo-font gap-2"><Database size={16}/> Software Products</span>
                                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${mobileSoftwareOpen ? "rotate-180" : ""}`} />
                                </button>
                                {mobileSoftwareOpen && (
                                  <div className="pl-6 pb-3 pr-2 space-y-2 border-l-2 border-[#ae5c83] ml-3 mb-2">
                                     {SOFTWARE_SOLUTIONS.map((sub, idx) => (
                                       <Link key={idx} href={sub.href} onClick={() => setMobileOpen(false)}
                                         className="block text-slate-600 text-sm momo-font hover:text-[#ae5c83]">
                                         {sub.label}
                                       </Link>
                                     ))}
                                  </div>
                                )}
                            </div>

                            {/* Mobile: Email & Domain (Nested Toggle) */}
                            <div className="bg-gray-50 rounded-lg mt-2">
                                <button 
                                  onClick={() => setMobileEmailOpen(!mobileEmailOpen)}
                                  className="w-full flex items-center justify-between text-slate-800 py-3 px-3 hover:text-[#ae5c83] font-medium text-[15px]"
                                >
                                  <span className="flex items-center momo-font gap-2"><Server size={16}/> Email & Domain</span>
                                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${mobileEmailOpen ? "rotate-180" : ""}`} />
                                </button>
                                {mobileEmailOpen && (
                                  <div className="pl-6 pb-3 pr-2 space-y-2 border-l-2 border-[#ae5c83] ml-3 mb-2">
                                     {EMAILANDDOMAIN.map((sub, idx) => (
                                       <Link key={idx} href={sub.href} onClick={() => setMobileOpen(false)}
                                         className="block text-slate-600 text-sm momo-font hover:text-[#ae5c83]">
                                         {sub.label}
                                       </Link>
                                     ))}
                                  </div>
                                )}
                            </div>

                             {/* Mobile: Dev Services (Simple List) */}
                             <div className="py-2 mt-2">
                                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Development</p>
                                {DEV_SERVICES.map((s, idx) => (
                                    <Link key={idx} href={s.href} onClick={() => setMobileOpen(false)}
                                    className="block text-slate-700 py-2 pl-2 text-[15px] momo-font hover:text-[#ae5c83]">
                                    {s.label}
                                    </Link>
                                ))}
                            </div>

                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              ))}
            </div>

            <button
              onClick={() => setModalOpen(true)}
              className="
                w-full mt-8 px-6 py-4
                text-white text-lg momo-font rounded-lg
                bg-gradient-to-r from-[#ae5c83] to-[#5b4390]
                shadow-lg
              "
            >
              Get a Quote
            </button>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}