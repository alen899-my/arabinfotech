"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import lo from "@/public/lo.jpg";

export default function NavBar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const isActive = (p) => pathname === p;

  // close dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const LINKS = [
    { label: "Web Designing", href: "/webdesigning" },
    { label: "E-commerce", href: "/ecommerce" },
    { label: "Digital Marketing", href: "/digitalmarketing" },
    { label: "Portfolio", href: "/portfolio/featured" },
  ];

  const WORKS = [
    { label: "Web Projects", href: "/works/web" },
    { label: "UI/UX Designs", href: "/works/uiux" },
    { label: "Apps", href: "/works/apps" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-20 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <Image 
            src={lo} 
            alt="Logo"
            width={165}
            height={50}
            className="h-12 w-auto object-contain"
            priority
          />
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-10">
          {LINKS.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className={`relative momo-font text-lg transition ${
                isActive(item.href)
                  ? "text-[#ae5c83] font-semibold"
                  : "text-[#6c53a7] hover:text-[#ae5c83]"
              }`}
            >
              {item.label}

              {/* Animated underline */}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-[#ae5c83] transition-all duration-300 
                ${isActive(item.href) ? "w-full" : "w-0 group-hover:w-full"}`}
              ></span>
            </Link>
          ))}

          {/* WORKS DROPDOWN */}
          <div
            className="relative"
            ref={dropdownRef}
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button className="flex items-center gap-1 text-[#6c53a7] hover:text-[#ae5c83] momo-font text-lg transition">
              Works
              <ChevronDown size={18} className="mt-[2px]" />
            </button>

            {/* Dropdown */}
            {dropdownOpen && (
              <div className="absolute top-10 left-0 w-56 bg-white rounded-xl shadow-lg border border-black/10 py-3 animate-fadeIn">
                {WORKS.map((w, i) => (
                  <Link
                    key={i}
                    href={w.href}
                    className="block px-5 py-2 text-[#6c53a7] hover:bg-gray-100 hover:text-[#ae5c83] momo-font transition"
                  >
                    {w.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* BUTTON */}
          <Link href="/contact">
            <button className="px-6 py-2 bg-[#6c53a7] text-white rounded-xl shadow hover:bg-[#5b4390] transition active:scale-95 momo-font">
              Reach Us
            </button>
          </Link>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button className="md:hidden text-[#6c53a7]" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="md:hidden bg-white shadow-xl border-t border-black/10 animate-slideDown">
          <div className="flex flex-col gap-6 p-6 text-lg text-[#6c53a7] momo-font">

            {LINKS.map((item, i) => (
              <Link
                key={i}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`${
                  isActive(item.href) ? "text-[#ae5c83] font-semibold" : ""
                }`}
              >
                {item.label}
              </Link>
            ))}

            {/* MOBILE DROPDOWN */}
            <div>
              <p className="font-semibold">Works</p>
              <div className="ml-4 mt-2 space-y-2">
                {WORKS.map((w, i) => (
                  <Link
                    key={i}
                    href={w.href}
                    onClick={() => setMobileOpen(false)}
                    className="block hover:text-violet-500"
                  >
                    {w.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA BUTTON */}
            <Link href="/contact">
              <button className="w-full bg-[#6c53a7] text-white py-2 rounded-xl shadow hover:bg-[#5b4390] transition active:scale-95">
                Reach Us
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
