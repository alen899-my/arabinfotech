"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Monitor, Smartphone, Globe, ShoppingBag, BarChart3, Layers, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import lo from "@/public/lo.jpg";

export default function NavBar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle Scroll Effect for Navbar Background
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll on mobile menu
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "unset";
  }, [mobileOpen]);

  const isActive = (p) => pathname === p || pathname.startsWith(p);

  /* -----------------------------
     DATA
  ------------------------------ */
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

          {/* -----------------------
             DESKTOP MENU
          ------------------------ */}
          <div className="hidden md:flex items-center gap-8">
            {LINKS.map((item, i) => {
              if (item.label !== "Solutions") {
                return (
                  <Link
                    key={i}
                    href={item.href}
                    className={`relative text-[15px] font-medium momo-font tracking-wide transition-colors group ${
                      isActive(item.href) ? "text-[#ae5c83]" : "text-slate-600 hover:text-[#ae5c83]"
                    }`}
                  >
                    {item.label}
                    <span className={`absolute -bottom-1 left-0 h-[2px] bg-[#ae5c83] transition-all duration-300 ${isActive(item.href) ? "w-full" : "w-0 group-hover:w-full"}`} />
                  </Link>
                );
              }

              // SOLUTIONS DROPDOWN
              return (
                <div key={i} className="relative group h-full flex items-center">
                  <button
                    className={`flex items-center gap-1 text-[15px] font-medium momo-font tracking-wide transition-colors ${
                      pathname.includes("/solutions") ? "text-[#ae5c83]" : "text-slate-600 group-hover:text-[#ae5c83]"
                    }`}
                  >
                    Solutions
                    <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                  </button>

                  {/* Dropdown Panel */}
                  <div className="absolute top-full right-0 pt-4 w-72 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-out">
                    <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-2 overflow-hidden ring-1 ring-black/5">
                      {SOLUTIONS.map((s, idx) => (
                        <Link
                          key={idx}
                          href={s.href}
                          className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-600 hover:bg-[#fdf2f8] hover:text-[#ae5c83] transition group/item"
                        >
                          <span className="p-2 bg-gray-50 rounded-md text-[#6c53a7] group-hover/item:bg-white group-hover/item:text-[#ae5c83] transition-colors">
                            {s.icon}
                          </span>
                          <span className="text-sm font-medium momo-font">{s.label}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Desktop CTA */}
            <Link href="/contact">
              <button className="px-6 py-2.5 bg-gradient-to-r from-[#6c53a7] to-[#5b4390] text-white rounded-full shadow-md shadow-purple-200 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 momo-font text-sm font-semibold tracking-wide flex items-center gap-2">
                Reach Us
              </button>
            </Link>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            className="md:hidden z-50 text-slate-700 hover:text-[#ae5c83] transition p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* -----------------------
         MOBILE MENU OVERLAY
      ------------------------ */}
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
              {LINKS.map((item, i) => {
                if (item.label !== "Solutions") {
                  return (
                    <Link
                      key={i}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={`flex items-center gap-4 py-4 border-b border-gray-50 text-lg font-medium momo-font ${
                        isActive(item.href) ? "text-[#ae5c83]" : "text-slate-600"
                      }`}
                    >
                      <span className={`p-2 rounded-lg ${isActive(item.href) ? "bg-[#ae5c83]/10" : "bg-gray-50"}`}>
                        {item.icon}
                      </span>
                      {item.label}
                    </Link>
                  );
                }

                {/* Mobile Dropdown Logic */}
                return (
                  <div key={i} className="border-b border-gray-50">
                    <button
                      onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                      className="w-full flex items-center justify-between py-4 text-lg font-medium momo-font text-slate-600"
                    >
                      <div className="flex items-center gap-4">
                        <span className="p-2 bg-gray-50 rounded-lg">
                           <Layers size={20} />
                        </span>
                        Solutions
                      </div>
                      <ChevronDown
                        className={`transition-transform duration-300 ${mobileSolutionsOpen ? "rotate-180 text-[#ae5c83]" : ""}`}
                      />
                    </button>

                    <AnimatePresence>
                      {mobileSolutionsOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden bg-gray-50/50 rounded-xl mb-4"
                        >
                          <div className="flex flex-col p-2">
                            {SOLUTIONS.map((s, idx) => (
                              <Link
                                key={idx}
                                href={s.href}
                                onClick={() => setMobileOpen(false)}
                                className="flex items-center gap-3 p-3 rounded-lg hover:bg-white text-slate-600 hover:text-[#ae5c83] hover:shadow-sm transition"
                              >
                                <span className="text-[#6c53a7]">{s.icon}</span>
                                <span className="text-sm font-medium momo-font">{s.label}</span>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* Mobile Footer/CTA */}
            <div className="mt-8 mb-10">
              <Link href="/contact" onClick={() => setMobileOpen(false)}>
                <button className="w-full py-4 bg-[#6c53a7] text-white rounded-xl shadow-lg hover:bg-[#5b4390] transition active:scale-95 flex items-center justify-center gap-2 font-semibold momo-font text-lg">
                  <Phone size={20} />
                  Reach Us
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}