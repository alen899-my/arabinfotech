"use client";

import React, { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import lo from "@/public/lo.jpg";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const isActive = (path) => pathname === path;

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const menuItems = [
    { name: "Web Designing", path: "/webdesigning" },
    { name: "E-commerce", path: "/ecommerce" },
    { name: "Digital Marketing", path: "/digitalmarketing" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white backdrop-blur-md z-50 border-b border-gray-300">
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-20 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <Image
  src={lo}
  alt="Logo"
  width={160}
  height={90}
  className="object-contain cursor-pointer h-20"
  priority
/>

        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-10 text-lg font-medium items-center">

          {menuItems.map((item, idx) => (
            <li key={idx}>
              <Link
                href={item.path}
                className={`
                  group cursor-pointer relative momo-font
                  ${isActive(item.path) ? "text-[#ae5c83] font-semibold" : "text-[#6c53a7]"}
                `}
              >
                {item.name}

                {/* underline effect */}
                <span
                  className={`
                    absolute left-0 -bottom-1  h-[2px] bg-[#ae5c83] transition-all duration-300
                    ${isActive(item.path) ? "w-full" : "w-0 group-hover:w-full"}
                  `}
                ></span>
              </Link>
            </li>
          ))}

          {/* WORKS DROPDOWN */}
          <li
            className="relative group cursor-pointer text-[#6c53a7] momo-font"
            ref={dropdownRef}
            onMouseEnter={() => setDropdown(true)}
            onMouseLeave={() => setDropdown(false)}
          >
            <span className="relative">
              Works
              <span
                className="
                  block h-[2px] bg-[#ae5c83] scale-x-0 
                  group-hover:scale-x-100 transition-transform duration-300
                "
              ></span>
            </span>

            {dropdown && (
              <ul
                className="absolute top-10 left-0 w-48 bg-white shadow-xl border border-black/10 
                rounded-xl py-3 z-50 animate-fadeIn"
              >
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Web Projects</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">UI/UX Designs</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Apps</li>
              </ul>
            )}
          </li>

          {/* Button */}
          <li>
            <button
              className="
                bg-[#6c53a7] text-white px-6 py-2 rounded-xl shadow
                hover:bg-[#5b4390] active:scale-95 transition
              "
            >
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
        <div className="md:hidden bg-white shadow-xl border-t border-black/10 animate-slideDown">
          <ul className="flex flex-col gap-6 p-6 text-lg font-medium text-[#6c53a7]">

            {menuItems.map((item, idx) => (
              <li key={idx}>
                <Link
                  href={item.path}
                  onClick={() => setOpen(false)}
                  className={`
                    block py-1
                    ${isActive(item.path) ? "text-[#ae5c83] font-semibold momo-font" : "momo-font"}
                  `}
                >
                  {item.name}
                </Link>
              </li>
            ))}

            {/* Works Dropdown in Mobile */}
            <li className="flex flex-col">
              <span className="font-semibold">Works</span>
              <ul className="ml-4 mt-2 space-y-2">
                <li className="hover:text-violet-500 momo-font">Web Projects</li>
                <li className="hover:text-violet-500 momo-font">UI/UX Designs</li>
                <li className="hover:text-violet-500 momo-font">Apps</li>
              </ul>
            </li>

            <button
              className="
                bg-[#6c53a7] text-white px-5 py-2 rounded-xl shadow
                hover:bg-[#5b4390] active:scale-95 transition
              "
            >
              Reach Us
            </button>

          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
