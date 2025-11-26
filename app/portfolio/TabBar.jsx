"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function TabBar({ mobileOnly = false, desktopOnly = false }) {
  const pathname = usePathname();
  const router = useRouter();

  const tabs = [
    { label: "Featured Projects", href: "/portfolio/featured" },
    { label: "Web Design", href: "/portfolio/work-design" },
    { label: "Ecommerce", href: "/portfolio/work-ecommerce" },
    { label: "Software", href: "/portfolio/work-software" },
    { label: "Valet Parking", href: "/portfolio/work-valet" },
    { label: "Digital Services", href: "/portfolio/work-digital" },
  ];

  const isActive = (href) => pathname === href || pathname.startsWith(href);


  if (mobileOnly) {
    // Find active tab label to show if needed, or default to first
    const currentTab = tabs.find((t) => isActive(t.href))?.href || tabs[0].href;

    return (
      <div className="w-full px-1">
        <div className="relative w-full">
          {/* Custom Icon Overlay */}
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#6c53a7]">
            <ChevronDown size={20} />
          </div>

          {/* Native Select with custom styling */}
          <select
            value={currentTab}
            onChange={(e) => router.push(e.target.value)}
            className="
              appearance-none w-full cursor-pointer
              bg-white border border-gray-200 
              text-slate-700 font-medium momo-font text-base
              py-3 pl-5 pr-12 rounded-xl shadow-sm
              focus:outline-none focus:ring-2 focus:ring-[#6c53a7]/20 focus:border-[#6c53a7]
              transition-all duration-200
            "
          >
            {tabs.map((tab) => (
              <option key={tab.href} value={tab.href}>
                {tab.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  }

  /* -------------------------------------------------------
     DESKTOP VIEW: Animated Pills
  -------------------------------------------------------- */
  if (desktopOnly) {
    return (
      <div className="w-full border-b  ">
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-24 flex items-center justify-between">
          
          {/* Title */}
          <div className="flex flex-col">
            <p className="text-4xl momo-font font-bold bg-gradient-to-r from-[#ae5c83] to-[#6c53a7] bg-clip-text text-transparent">
              Portfolio
            </p>
            <span className="text-xs text-slate-400 font-medium tracking-widest uppercase mt-1 ml-1">
              Selected Works
            </span>
          </div>

          {/* Navigation Pills */}
          <nav className="flex items-center  p-1.5 ">
            {tabs.map((tab) => {
              const active = isActive(tab.href);
              
              return (
                <Link
                  key={tab.href}
                  href={tab.href}
                  className={`
                    relative px-5 py-2 rounded-full text-[14px] momo-font font-medium transition-colors duration-300 z-10
                    ${active ? "text-white" : "text-slate-500 hover:text-[#6c53a7]"}
                  `}
                >
                  {/* Sliding Background Animation */}
                  {active && (
                    <motion.span
                      layoutId="activeTabDesktop"
                      className="absolute inset-0 bg-[#6c53a7] rounded-full shadow-md -z-10"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  {tab.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    );
  }

  return null;
}