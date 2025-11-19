"use client";

import React, { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import lo from "@/public/lo.jpg";
import Image from "next/image";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white z-50 border-b border-black/10">
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-20 flex items-center justify-between">

        {/* LOGO */}
        <div className="flex items-center">
          <Image
            src={lo}
            alt="Logo"
            width={120}
            height={50}
            className="object-contain mix-blend-multiply"
            priority
          />
        </div>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-10 text-lg font-medium items-center">

          <li className="group text-[#6c53a7] cursor-pointer">
            Web Designing
            <span className="block h-[2px] bg-[#ae5c83] scale-x-0 group-hover:scale-x-100 transition-all"></span>
          </li>

          <li className="group text-[#6c53a7] cursor-pointer">
            E-commerce
            <span className="block h-[2px] bg-[#ae5c83] scale-x-0 group-hover:scale-x-100 transition-all"></span>
          </li>

          <li className="group text-[#6c53a7] cursor-pointer">
            Digital Marketing
            <span className="block h-[2px] bg-[#ae5c83] scale-x-0 group-hover:scale-x-100 transition-all"></span>
          </li>

          {/* WORKS DROPDOWN */}
          <li
            className="relative group text-[#6c53a7] cursor-pointer"
            ref={dropdownRef}
            onMouseEnter={() => setDropdown(true)}
            onMouseLeave={() => setDropdown(false)}
          >
            Works
            <span className="block h-[2px] bg-[#ae5c83] scale-x-0 group-hover:scale-x-100 transition-all"></span>

            {dropdown && (
              <ul className="absolute top-10 left-0 w-48 bg-white shadow-xl border border-black/10 rounded-xl py-3 z-50 animate-fadeIn">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Web Projects</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">UI/UX Designs</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Apps</li>
              </ul>
            )}
          </li>

          {/* Reach Us */}
          <li>
            <button className="bg-[#6c53a7] text-white px-6 py-2 rounded-xl shadow hover:bg-[#5b4390] active:scale-95 transition">
              Reach Us
            </button>
          </li>
        </ul>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-[#6c53a7]"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white shadow-xl border-t border-black/10">
          <ul className="flex flex-col gap-6 p-6 text-lg font-medium text-[#6c53a7]">

            <li className="hover:text-violet-500">Web Designing</li>
            <li className="hover:text-violet-500">E-commerce</li>
            <li className="hover:text-violet-500">Digital Marketing</li>

            <li className="flex flex-col">
              <span className="font-semibold">Works</span>
              <ul className="ml-4 mt-2 space-y-2">
                <li className="hover:text-violet-500">Web Projects</li>
                <li className="hover:text-violet-500">UI/UX Designs</li>
                <li className="hover:text-violet-500">Apps</li>
              </ul>
            </li>

            <button className="bg-[#6c53a7] text-white px-5 py-2 rounded-xl shadow hover:bg-[#5b4390] active:scale-95 transition">
              Reach Us
            </button>

          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
