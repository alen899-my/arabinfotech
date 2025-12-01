import Link from "next/link";
import path from "path";
import { getAllRoutes } from "@/lib/getRoutes";

import { 
  Globe, 
  Layers, 
  Server, 
  FileText, 
  Home, 
  LayoutGrid,
  Map as MapIcon,
  CheckCircle2, // Added for the values list
  Target // Added for the mission icon
} from "lucide-react";

// --- HELPER: Formats URL strings into readable Titles ---
const formatRouteLabel = (route) => {
  const parts = route.split('/');
  const lastPart = parts[parts.length - 1];
  
  if (!lastPart) return "Home";

  return lastPart
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase());
};

// --- HELPER: Groups flat routes into Categories ---
const groupRoutes = (routes) => {
  const groups = {
    general: [] ,
    software: [],
    solutions: [] ,
    domain: [],
    legal: [] 
  };

  routes.forEach((route) => {
    if (route.startsWith("/api") || route === "/site-map") return;

    if (route.includes("/softwaresolutions")) {
      groups.software.push(route);
    } else if (route.includes("/domainandserver")) {
      groups.domain.push(route);
    } else if (route.includes("/footer")) {
      groups.legal.push(route);
    } else if (route.startsWith("/solutions")) {
      groups.solutions.push(route);
    } else {
      groups.general.push(route);
    }
  });

  return groups;
};

export default function SiteMapPage() {
  // 1. Fetch Routes (Server-Side)
  const basePath = path.join(process.cwd(), "app");
  const allRoutes = getAllRoutes(basePath);
  
  // 2. Group Routes
  const categories = groupRoutes(allRoutes);

  // 3. Define UI Configuration for groups
  const sections = [
    { id: 'general', title: "Main Pages", icon: <Home size={20} />, data: categories.general },
    { id: 'solutions', title: "Specialized Solutions", icon: <Layers size={20} />, data: categories.solutions },
    { id: 'software', title: "Software Solutions", icon: <LayoutGrid size={20} />, data: categories.software },
    { id: 'domain', title: "Email & Hosting", icon: <Server size={20} />, data: categories.domain },
    { id: 'legal', title: "Legal & Support", icon: <FileText size={20} />, data: categories.legal },
  ];

  // 4. Data for Right Sidebar
  const companyValues = [
    "Act with uncompromising honesty and integrity in everything we do.",
    "Satisfy our customers with innovative technology and superior quality, value and service.",
    "Provide our investors an attractive return through sustainable, global growth.",
    "Respect our social and physical environment around the world.",
    "Value and develop our employees' diverse talents, initiative and leadership."
  ];

  return (
    <div className="w-full min-h-screen bg-gray-50 selection:bg-[#ae5c83] selection:text-white font-sans">
      
      {/* --- FIXED PINK BANNER --- */}
      <div className="fixed top-20 left-0 w-full bg-[#ae5c83] py-3 md:px-10 z-20 shadow-lg border-b border-[#924b6d]">
        <div className="max-w-[1280px] mx-auto w-full px-6">
          <h1 className="momo-font text-white text-lg sm:text-xl md:text-2xl font-semibold uppercase mb-1">
            Site Map
          </h1>
          <p className="text-white/70 text-[10px] sm:text-xs md:text-sm tracking-wide uppercase">
            Overview of our pages
          </p>
        </div>
      </div>

      {/* --- MAIN CONTENT CONTAINER --- */}
      <div className="max-w-7xl mx-auto px-6 pb-20 pt-[180px] md:pt-[220px]">
        
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* --- LEFT COLUMN: DYNAMIC SITEMAP --- */}
          <div className="lg:col-span-8 space-y-1">
            
            <div className="mb-8">
              <h2 className="momo-font text-3xl md:text-4xl font-extrabold text-gray-900 uppercase mb-2">
                Explore <span className="text-[#ae5c83]">Pages</span>
              </h2>
              <div className="h-1 w-20 bg-[#ae5c83] rounded-full"></div>
            </div>

            {sections.map((section) => (
              // Only render section if it has routes
              section.data.length > 0 && (
                <div key={section.id} className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
                  
                  {/* Section Header */}
                  <div className="flex items-center gap-3  border-b border-gray-100 pb-4">
                    <span className="p-2 bg-pink-50 text-[#ae5c83] rounded-lg">
                      {section.icon}
                    </span>
                    <h3 className="momo-font text-xl font-bold text-gray-800 uppercase">
                      {section.title}
                    </h3>
                  </div>

                  {/* Links Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-">
                    {section.data.map((route, idx) => (
                      <Link
                        key={idx}
                        href={route}
                        className="group flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 transition-all duration-300"
                      >
                        <span className="text-gray-600 font-medium text-sm md:text-base roboto-text group-hover:text-[#ae5c83] group-hover:translate-x-1 transition-all duration-300">
                          {formatRouteLabel(route)}
                        </span>
                        
                        {/* Arrow Icon */}
                        <svg 
                          className="w-4 h-4 text-[#ae5c83] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    ))}
                  </div>
                </div>
              )
            ))}
          </div>

          {/* --- RIGHT COLUMN: CONTEXT (Sticky Sidebar) --- */}
          <div className="lg:col-span-4 lg:sticky lg:top-48 space-y-6">
            
            {/* Info Card - UPDATED CONTENT */}
            <div className="bg-white p-8 rounded-2xl shadow-md border-t-4 border-[#ae5c83] relative overflow-hidden group">
              
              {/* Decorative Background Blob */}
              <div className="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-[#ae5c83]/5 rounded-full blur-3xl"></div>

              {/* WHO WE ARE Section */}
              <div className="mb-8 relative z-10">
                <div className="flex items-center gap-2 mb-3">
                  <Target className="w-5 h-5 text-[#ae5c83]" />
                  <h2 className="momo-font text-xl font-bold text-[#ae5c83] uppercase tracking-wide">
                    Who We Are
                  </h2>
                </div>
                <p className="roboto-text text-gray-600 text-sm leading-7 text-justify">
                  We have been helping clients to design information systems and applications to transform their businesses since 2007.
                </p>
              </div>

              {/* DIVIDER */}
              <div className="w-full h-px bg-gray-100 mb-6"></div>

              {/* OUR VALUES Section */}
              <div className="relative z-10">
                <h3 className="momo-font text-lg font-bold text-gray-800 mb-4 uppercase">
                  Our Values
                </h3>
                
                <ul className="space-y-4">
                  {companyValues.map((value, i) => (
                    <li key={i} className="flex items-start gap-3 group/item">
                      {/* Custom Check Icon */}
                      <span className="mt-1 flex-shrink-0 text-gray-300 group-hover/item:text-[#ae5c83] transition-colors duration-300">
                        <CheckCircle2 size={18} strokeWidth={2.5} />
                      </span>
                      
                      {/* Value Text */}
                      <span className="text-sm roboto-text text-gray-600 leading-relaxed group-hover/item:text-gray-900 transition-colors">
                        {value}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="bg-gradient-to-br from-[#ae5c83] to-[#924b6d] p-8 rounded-2xl shadow-lg text-white text-center">
              <h3 className="momo-font text-xl font-bold uppercase mb-2">Need Assistance?</h3>
              <p className="text-white text-sm mb-6 roboto-texts">
                Can't find the page you're looking for?
              </p>
              <Link 
                href="/contact" 
                className="inline-block momo-font w-full bg-white text-[#ae5c83] py-3 rounded-lg font-bold uppercase text-sm hover:bg-pink-50 transition-colors shadow-sm hover:shadow-md"
              >
                Contact Us
              </Link>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}