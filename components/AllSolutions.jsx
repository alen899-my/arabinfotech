"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowRight, LayoutGrid, Monitor, Smartphone } from "lucide-react";

// --- DATA SOURCE ---
const SOFTWARE_SOLUTIONS = [
  { label: "Attendance Payroll System", href: "/attendance-payroll-system" },
  { label: "Auto Garage System", href: "/auto-garage-system" },
  { label: "Manufacturers Project Lifecycle", href: "/manufacturers-project-lifecycle-system" },
  { label: "Materials Requirement Planning", href: "/materials-requirement-planning-system" },
  { label: "Property Rentals Management", href: "/property-rentals-management-system" },
];

const SOLUTIONS = [
  { label: "Valet Parking", href: "/valet-parking" },
  { label: "Splunk Professional", href: "/splunk-proffesional-service" },
  { label: "ShortList Pro", href: "/shortlist-pro" },
  { label: "Competency Analysis System", href: "/competency-analysis-system" },
  { label: "Manpower Supply Solution", href: "/manpower-supply-software" },

  { label: "Software Solutions", href: "#", isNested: true }, 
  { label: "Custom Software", href: "/custom-software", icon: <Monitor size={18} /> },
  { label: "Mobile Apps", href: "/custom-application", icon: <Smartphone size={18} /> }
];

const AllSolutions = () => {
  const pathname = usePathname();

 
  const availableSolutions = [...SOFTWARE_SOLUTIONS, ...SOLUTIONS].filter(
    (item) => 
      !item.isNested && 
      item.href !== "#" && 
      item.href !== pathname
  );

  return (
    <section className="w-full mb-3 py-1 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-10 flex items-center gap-3">
          <div className="p-2 bg-purple-100 text-[#6c53a7] rounded-lg">
            <LayoutGrid size={24} />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 momo-font">
            Explore Other Solutions
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {availableSolutions.map((solution, index) => (
            <Link key={index} href={solution.href} passHref>
              <motion.div
                whileHover={{ y: -4, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="group relative bg-white p-5 rounded-xl border border-gray-400 shadow-sm hover:shadow-md hover:border-[#6c53a7]/30 transition-all duration-300 flex items-center justify-between cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  {/* If the item has a specific icon, use it, otherwise use a bullet dot */}
                  {solution.icon ? (
                    <div className="text-gray-400 group-hover:text-[#6c53a7] transition-colors">
                      {solution.icon}
                    </div>
                  ) : (
                    <div className="w-2 h-2 rounded-full bg-gray-300 group-hover:bg-[#ae5c83] transition-colors" />
                  )}
                  
                  <span className="font-medium text-gray-700 momo-font group-hover:text-gray-900 transition-colors">
                    {solution.label}
                  </span>
                </div>

                <div className="text-gray-300 group-hover:text-[#6c53a7] group-hover:translate-x-1 transition-all duration-300">
                  <ArrowRight size={18} />
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AllSolutions;