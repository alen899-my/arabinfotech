"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Menu, X, ChevronDown, ChevronRight, Monitor, Smartphone, 
  Globe, ShoppingBag, MessageSquareCode,KeySquare, BarChart3, Layers, Mail 
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import lo from "@/public/lo.jpg"; 
import QuotePopup from "@/components/QuotePopup"; 

export default function NavBar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  
  // Mobile dropdown states
  const [mobileSoftwareOpen, setMobileSoftwareOpen] = useState(false); 
  const [mobileEmailOpen, setMobileEmailOpen] = useState(false);

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

  // --- DATA ARRAYS ---
  const SOFTWARE_SOLUTIONS = [
    { label: "Attendance Payroll System", href: "/attendance-payroll-system" },
    { label: "Auto Garage system", href: "/auto-garage-system" },
    { label: "Manufacturers Project Lifecycle", href: "/manufacturers-project-lifecycle-system" },
    { label: "Materials Requirement Planning", href: "/materials-requirement-planning-system" },
    { label: "Property Rentals Management", href: "/property-rentals-management-system" },
  ];

  const EMAILANDDOMAIN = [
    { label: "Email & Hosting", href: "/email-solutions" },
    { label: "Google Business", href: "/google-business" },
    { label: "Office365", href: "/office365" },
  ];

  const SOLUTIONS = [
    { label: "Valet Parking", href: "/valet-parking" },
    { label: "Splunk professional", href: "/splunk-proffesional-service" },
    { label: "ShortList Pro", href: "/shortlist-pro" },
    { label: "Competency analysis system", href: "/competency-analysis-system" },
    { label: "Manpower supply solution", href: "/manpower-supply-software" },
   
    // Triggers for nested menus
    { label: "Software Solutions", href: "#", isNested: true,  }, 
    { label: "Email & Domain Solutions", href: "#", isNested: true,  },
    
    { label: "Custom Software", href: "/custom-software",  },
    { label: "Mobile Apps", href: "/custom-application",  }
  ];

  const LINKS = [
    { label: "Web Designing", href: "/webdesigning", icon: <Globe size={20} /> },
    { label: "E-commerce", href: "/ecommerce", icon: <ShoppingBag size={20} /> },
    { label: "Digital Marketing", href: "/digitalmarketing", icon: <BarChart3 size={20} /> },
    { label: "Solutions", href: "/solutions", icon: <Layers size={20} /> },
    { label: "Portfolio", href: "/portfolio/featured", icon: <Monitor size={20} /> },
    { label: "Contact Us", href: "/contact", icon: <MessageSquareCode size={20} /> }
  ];

  // Helper to get the correct sub-array based on label
  const getSubItems = (label) => {
    if (label === "Software Solutions") return SOFTWARE_SOLUTIONS;
    if (label === "Email & Domain Solutions") return EMAILANDDOMAIN;
    return [];
  };

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

                  {/* Dropdown Container */}
                  <div className="absolute left-0 top-full opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-3 group-hover:translate-y-0 transition-all duration-300 border-t-[3px] border-[#ae5c83]">
                    <div className="w-[280px] bg-white shadow-2xl rounded-lg border border-gray-200 p-2">
                      
                      <div className="flex flex-col gap-1">
                        {SOLUTIONS.map((s, idx) => {
                          
                          // LOGIC FOR DESKTOP NESTED ITEMS
                          if (s.isNested) {
                            const subItems = getSubItems(s.label);

                            return (
                              <div key={idx} className="relative group/nested">
                                <button
                                  className="w-full flex items-center justify-between px-4 py-2 hover:bg-[#f9e6f1] rounded-md transition-all duration-200 cursor-pointer text-[14px] font-medium text-gray-700 group-hover/nested:text-[#ae5c83]"
                                >
                                  <span className="flex items-center gap-2 momo-font-light">
                                    {s.icon && s.icon}
                                    {s.label}
                                  </span>
                                  <ChevronRight className="w-4 h-4" />
                                </button>

                                {/* --- NESTED MENU (Pops out to the right) --- */}
                                <div className="absolute left-full top-0 pl-2 opacity-0 invisible group-hover/nested:opacity-100 group-hover/nested:visible transition-all duration-300">
                                  <div className="w-[280px] bg-white shadow-2xl rounded-lg border border-gray-200 p-2 border-t-[3px] border-t-[#ae5c83]">
                                    {subItems.map((sub, subIdx) => (
                                      <Link
                                        key={subIdx}
                                        href={sub.href}
                                        className="block px-4 py-2 hover:bg-[#f9e6f1] momo-font-light rounded-md transition-all duration-200 text-[13px] font-medium text-gray-600 hover:text-[#ae5c83]"
                                      >
                                        {sub.label}
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            );
                          }

                          // STANDARD DESKTOP LINK
                          return (
                            <Link
                              key={idx}
                              href={s.href}
                              className="flex items-center momo-font-light  gap-2 px-4 py-2 hover:bg-[#f9e6f1] rounded-md transition-all duration-200 cursor-pointer text-[14px] font-medium text-gray-700 hover:text-[#ae5c83]"
                            >
                              {s.icon}
                              {s.label}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              )
            )}

            <button
              onClick={() => setModalOpen(true)}
              className="px-6 py-3 bg-gradient-to-r from-[#ae5c83] to-[#8a4262] text-white rounded-md text-sm shadow-md hover:scale-[1.05] momo-font transition">
              Get a Quote
            </button>
          </div>

          {/* Mobile / Tablet Hamburger */}
          <button
            className="lg:hidden text-slate-700 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      <QuotePopup open={modalOpen} onClose={() => setModalOpen(false)} />

      {/* --- MOBILE MENU --- */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 bg-white z-40 pt-24 px-6 lg:hidden overflow-y-auto pb-10"
          >
            <div className="flex flex-col gap-4">
              {LINKS.map((item, i) => (
                item.label !== "Solutions" ? (
                  <Link key={i} href={item.href} onClick={() => setMobileOpen(false)}
                    className={`text-lg font-medium border-b momo-font py-4 flex gap-4
                      ${isActive(item.href) ? "text-[#ae5c83]" : "text-slate-600"}`}>
                    {item.icon} {item.label}
                  </Link>
                ) : (
                  <div key={i} className="border-b">
                    {/* Main Solutions Toggle */}
                    <button
                      onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                      className="w-full flex justify-between py-4 text-lg font-medium">
                      <span className="flex text-slate-600 w-full items-center gap-4 momo-font border-b">{item.icon} Solutions</span>
                      <ChevronDown className={`transition-transform duration-300 ${mobileSolutionsOpen ? "rotate-180" : ""}`} />
                    </button>

                    {/* Solutions List */}
                    {mobileSolutionsOpen && (
                      <div className="pl-4 pr-2 pb-4 space-y-2">
                        {SOLUTIONS.map((s, idx) => {
                          
                          // LOGIC FOR MOBILE NESTED ITEMS
                          if (s.isNested) {
                            const isSoftware = s.label === "Software Solutions";
                            // Determine which state to toggle and which array to show
                            const isOpen = isSoftware ? mobileSoftwareOpen : mobileEmailOpen;
                            const setOpen = isSoftware ? setMobileSoftwareOpen : setMobileEmailOpen;
                            const subItems = getSubItems(s.label);

                            return (
                              <div key={idx} className="rounded-lg  bg-gray-50">
                                <button 
                                  onClick={() => setOpen(!isOpen)}
                                  className="w-full flex items-center border-b justify-between text-slate-600 py-3 px-3 hover:text-[#ae5c83] font-medium"
                                >
                                  <span className="flex items-center momo-font gap-3">{s.icon} {s.label}</span>
                                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                                </button>
                                
                                {/* Nested Sub-items */}
                                {isOpen && (
                                  <div className="pl-6 pr-2 pb-2 space-y-1 border-l-2 border-[#ae5c83] ml-3 mb-2">
                                    {subItems.map((sub, subIdx) => (
                                       <Link 
                                         key={subIdx} 
                                         href={sub.href} 
                                         onClick={() => setMobileOpen(false)}
                                         className="block text-slate-500 text-sm py-2 momo-font hover:text-[#ae5c83]"
                                       >
                                         {sub.label}
                                       </Link>
                                    ))}
                                  </div>
                                )}
                              </div>
                            );
                          }

                          // STANDARD MOBILE LINK
                          return (
                            <Link key={idx} href={s.href} onClick={() => setMobileOpen(false)}
                              className="flex items-center text-slate-600 gap-3 momo-font py-3 px-3 rounded-lg hover:bg-gray-50 hover:text-[#ae5c83]">
                              {s.icon} {s.label}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                )
              ))}
            </div>

            <button
              onClick={() => { setMobileOpen(false); setModalOpen(true); }}
              className="mt-8 px-6 py-3 mx-auto momo-font block bg-gradient-to-r from-[#ae5c83] to-[#8a4262] text-white rounded-full shadow-md ">
              Get a Quote
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}