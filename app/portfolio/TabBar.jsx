"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function TabBar({ mobileOnly = false, desktopOnly = false }) {
  const pathname = usePathname();
  const router = useRouter();

  const tabs = [
    { label: "Featured", href: "/portfolio/featured" },
    { label: "Web Design", href: "/portfolio/work-design" },
    { label: "Ecommerce Solution", href: "/portfolio/work-ecommerce" },
    { label: "Software Solution", href: "/portfolio/work-software" },
    { label: "Valet Parking Software", href: "/portfolio/work-valet" },
    { label: "Digital Services", href: "/portfolio/work-digital" },
  ];

  const isActive = (href) => pathname.startsWith(href);

  /* -------------------------------------------------------
     MOBILE SELECT (NO HAMBURGER)
  -------------------------------------------------------- */
  if (mobileOnly) {
    return (
      <div className="relative w-[65vw] min-w-[180px]">
        <select
          value={pathname}
          onChange={(e) => router.push(e.target.value)}
          className="
            w-full momo-font bg-white border border-neutral-300 rounded-md shadow-sm
            py-2.5 px-4 pr-10 text-sm text-black
            focus:outline-none focus:ring-2 focus:ring-[#6c53a7] focus:border-[#6c53a7]
            appearance-none
          "
        >
          {tabs.map((tab) => (
            <option key={tab.href} value={tab.href}>
              {tab.label}
            </option>
          ))}
        </select>

        {/* Dropdown Arrow */}
        <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-neutral-600 text-xs">
          ▼
        </span>
      </div>
    );
  }

  /* -------------------------------------------------------
     DESKTOP VIEW (Original styling kept)
  -------------------------------------------------------- */
  if (desktopOnly) {
    return (
      <div className="w-full bg-transparent">
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-20 flex items-center justify-between">

          {/* Left Title */}
          <p className="text-[#ae5c83] text-4xl momo-font">Portfolio</p>

          {/* Desktop Tabs */}
          <nav className="flex gap-2 items-center">
            {tabs.map((tab) => (
              <Link
                key={tab.href}
                href={tab.href}
                className={`
                  px-5 py-2 rounded momo-font text-[15px]
                  transition-all duration-200 whitespace-nowrap
                  ${
                    isActive(tab.href)
                      ? "bg-[#6c53a7] text-white shadow-md scale-[1.03]"
                      : "text-white hover:text-[#6c53a7]"
                  }
                `}
              >
                {tab.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    );
  }

  return null;
}
