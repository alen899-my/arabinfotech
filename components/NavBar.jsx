"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import lo from "@/public/lo.jpg";

export default function NavBar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Lock body scroll on mobile menu
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [mobileOpen]);

  const isActive = (p) => pathname === p || pathname.startsWith(p);

  /* -----------------------------
     SOLUTIONS PROJECT SUB LINKS
  ------------------------------ */
  const SOLUTIONS = [
     { label: "Custom Software Development ", href: "/solutions/custom-software" },
     {label:"Custom Mobile Application Development",href:"/solutions/custom-application"}
  ];

  const LINKS = [
    { label: "Web Designing", href: "/webdesigning" },
    { label: "E-commerce", href: "/ecommerce" },
    { label: "Digital Marketing", href: "/digitalmarketing" },
    { label: "Solutions", href: "/solutions" },
    { label: "Portfolio", href: "/portfolio/featured" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white backdrop-blur-md border-b border-gray-400">
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center z-50" onClick={() => setMobileOpen(false)}>
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

          {LINKS.map((item, i) => {
            /* NORMAL LINKS (non-solutions) */
            if (item.label !== "Solutions") {
              return (
                <Link
                  key={i}
                  href={item.href}
                  className={`relative momo-font text-lg transition group ${
                    isActive(item.href)
                      ? "text-[#ae5c83] font-semibold"
                      : "text-[#6c53a7] hover:text-[#ae5c83]"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] bg-[#ae5c83] transition-all duration-300 
                      ${isActive(item.href) ? "w-full" : "w-0 group-hover:w-full"}
                    `}
                  ></span>
                </Link>
              );
            }

            /* SOLUTIONS DROPDOWN */
            return (
              <div key={i} className="relative group">
                <span
                  className={`cursor-pointer momo-font text-lg transition ${
                    pathname.includes("/solutions")
                      ? "text-[#ae5c83] font-semibold"
                      : "text-[#6c53a7] group-hover:text-[#ae5c83]"
                  }`}
                >
                  Solutions
                </span>

                {/* DROPDOWN BOX */}
                <div className="absolute left-0 top-full w-72 bg-white shadow-xl rounded-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 p-4 mt-3">

                  <div className="flex flex-col gap-2">
                    {SOLUTIONS.map((s, idx) => (
                      <Link
                        key={idx}
                        href={s.href}
                        className="px-3 py-2 rounded-lg text-slate-700 hover:bg-[#f4e6ef] hover:text-[#ae5c83] transition momo-font"
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}

          <Link href="/contact">
            <button className="px-6 py-2 bg-[#6c53a7] text-white rounded-xl shadow hover:bg-[#5b4390] transition active:scale-95 momo-font">
              Reach Us
            </button>
          </Link>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button
          className="md:hidden z-50 text-[#6c53a7] p-2 rounded-md hover:bg-gray-100 transition"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* MOBILE MENU SHEET */}
      <div
        className={`fixed inset-0 bg-white z-40 md:hidden flex flex-col items-center gap-8 transition-all duration-300 ease-in-out
        ${mobileOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-5"}`}
        style={{ top: "80px", height: "calc(100vh - 80px)" }}
      >

        <div className="flex flex-col items-center gap-8 w-full px-6">

          {LINKS.map((item, i) => {
            if (item.label !== "Solutions") {
              return (
                <Link
                  key={i}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`text-2xl momo-font font-medium transition-colors ${
                    isActive(item.href)
                      ? "text-[#ae5c83]"
                      : "text-[#6c53a7] hover:text-[#ae5c83]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            }

            /* MOBILE SOLUTIONS DROPDOWN */
            return (
              <div key={i} className="w-full px-4">
                <details className="group">
                  <summary className="cursor-pointer text-2xl momo-font font-medium text-[#6c53a7] hover:text-[#ae5c83] list-none">
                    Solutions
                  </summary>

                  <div className="mt-3 flex flex-col gap-3">
                    {SOLUTIONS.map((s, idx) => (
                      <Link
                        key={idx}
                        href={s.href}
                        onClick={() => setMobileOpen(false)}
                        className="text-lg py-2 px-4 bg-[#f8f2f7] rounded-xl text-[#6c53a7] hover:text-[#ae5c83] transition"
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                </details>
              </div>
            );
          })}
        </div>

        {/* MOBILE CTA BUTTON */}
        <div className="w-full px-8 mt-4">
          <Link href="/contact" onClick={() => setMobileOpen(false)}>
            <button className="w-full bg-[#6c53a7] text-white text-xl py-4 rounded-2xl shadow-lg hover:bg-[#5b4390] transition active:scale-95 momo-font font-semibold tracking-wide">
              Reach Us
            </button>
          </Link>
        </div>
      </div>

    </nav>
  );
}
