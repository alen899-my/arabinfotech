"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Monitor, Smartphone, Globe, ShoppingBag,MessageSquareCode, BarChart3, Layers } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import lo from "@/public/lo.jpg";
import QuotePopup from "@/components/QuotePopup"; // ⭐ Popup Component

export default function NavBar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // ⭐ Popup State
  const [modalOpen, setModalOpen] = useState(false);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll if menu or modal open
  useEffect(() => {
    document.body.style.overflow = mobileOpen || modalOpen ? "hidden" : "unset";
  }, [mobileOpen, modalOpen]);

  const isActive = (p) => pathname === p || pathname.startsWith(p);

  /* ----------------------------- DATA ------------------------------ */
  const SOLUTIONS = [
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
          
          {/* LOGO */}
          <Link href="/" className="relative z-50 flex items-center" onClick={() => setMobileOpen(false)}>
            <Image
              src={lo}
              alt="Logo"
              width={160}
              height={50}
              className="h-10 md:h-12 w-auto object-contain hover:opacity-90 transition-opacity"
              priority
            />
          </Link>

          {/* ----------------------- DESKTOP MENU ------------------------ */}
          <div className="hidden md:flex items-center gap-8">
            {LINKS.map((item, i) => (
              item.label !== "Solutions" ? (
                <Link
                  key={i}
                  href={item.href}
                  className={`relative text-[15px] font-medium momo-font tracking-wide transition-colors group 
                    ${isActive(item.href) ? "text-[#ae5c83]" : "text-slate-600 hover:text-[#ae5c83]"}`}
                >
                  {item.label}
                  <span className={`absolute -bottom-1 left-0 h-[2px] bg-[#ae5c83] transition-all duration-300 
                    ${isActive(item.href) ? "w-full" : "w-0 group-hover:w-full"}`} />
                </Link>
              ) : (
                <div key={i} className="relative group h-full flex items-center">
                  <button
                    className={`flex items-center gap-1 text-[15px] font-medium momo-font tracking-wide transition-colors 
                      ${pathname.includes("/solutions") ? "text-[#ae5c83]" : "text-slate-600 group-hover:text-[#ae5c83]"}`}
                  >
                    Solutions
                    <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                  </button>

                  {/* Dropdown */}
                  <div className="absolute top-full right-0 pt-4 w-72 opacity-0 invisible translate-y-2 
                    group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300">
                    
                    <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-2">
                      {SOLUTIONS.map((s, idx) => (
                        <Link
                          key={idx}
                          href={s.href}
                          className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-600 hover:bg-[#fdf2f8] hover:text-[#ae5c83] transition"
                        >
                          <span className="p-2 bg-gray-50 rounded-md">{s.icon}</span>
                          <span className="text-sm font-medium momo-font">{s.label}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )
            ))}

            {/* ⭐ Desktop CTA Button */}
            <button
              onClick={() => setModalOpen(true)}
              className="px-5 py-2 bg-[#ae5c83] text-white rounded-lg hover:bg-[#96436f] transition shadow-sm"
            >
              Get a Quote
            </button>
          </div>

          {/* MOBILE BUTTON */}
          <button
            className="md:hidden z-50 text-slate-700 hover:text-[#ae5c83] transition p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* ⭐ Hooked Popup */}
      <QuotePopup open={modalOpen} onClose={() => setModalOpen(false)} />

      {/* ----------------------- MOBILE MENU ------------------------ */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden flex flex-col h-screen overflow-y-auto"
          >
            <div className="flex flex-col gap-2">
              {LINKS.map((item, i) =>
                item.label !== "Solutions" ? (
                  <Link
                    key={i}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center gap-4 py-4 border-b text-lg font-medium momo-font ${
                      isActive(item.href) ? "text-[#ae5c83]" : "text-slate-600"
                    }`}
                  >
                    {item.icon}
                    {item.label}
                  </Link>
                ) : (
                  <div key={i} className="border-b">
                    <button
                      onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                      className="w-full flex items-center justify-between py-4 text-lg font-medium momo-font text-slate-600"
                    >
                      <span className="flex items-center gap-4">{item.icon} Solutions</span>
                      <ChevronDown
                        className={`transition-transform duration-300 ${mobileSolutionsOpen ? "rotate-180 text-[#ae5c83]" : ""}`}
                      />
                    </button>

                    {mobileSolutionsOpen && (
                      <div className="bg-gray-50 p-2 rounded-xl mb-3">
                        {SOLUTIONS.map((s, idx) => (
                          <Link
                            key={idx}
                            href={s.href}
                            className="flex items-center gap-3 p-3 rounded-lg hover:bg-white text-slate-600 hover:text-[#ae5c83] transition"
                            onClick={() => setMobileOpen(false)}
                          >
                            {s.icon}
                            {s.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )
              )}
            </div>

            {/* ⭐ CTA in Mobile */}
            <button
              onClick={() => { setMobileOpen(false); setModalOpen(true); }}
              className="mt-8 mb-10 px-5 py-3 bg-[#ae5c83] text-white rounded-lg"
            >
              Get a Quote
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
