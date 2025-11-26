"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Keep your existing imports exactly as they are
import des1 from "../../../public/webdesign/des1.png";
import des2 from "../../../public/webdesign/des2.png";
import des3 from "../../../public/webdesign/des3.png";
import des4 from "../../../public/webdesign/des4.png";
import des5 from "../../../public/webdesign/des5.png";
import des6 from "../../../public/webdesign/des6.png";
import des7 from "../../../public/webdesign/des7.png";
import des8 from "../../../public/webdesign/des8.png";
import des9 from "../../../public/webdesign/des9.png";
import des10 from "../../../public/webdesign/des10.png";
import des11 from "../../../public/webdesign/des11.png";
import des12 from "../../../public/webdesign/des12.png";
import des13 from "../../../public/webdesign/des13.png";
import des14 from "../../../public/webdesign/des14.png";
import des15 from "../../../public/webdesign/des15.png";
import des16 from "../../../public/webdesign/des16.png";
import des17 from "../../../public/webdesign/des17.png";
import des18 from "../../../public/webdesign/des18.png";
import des19 from "../../../public/webdesign/des19.png";
import des20 from "../../../public/webdesign/des20.png";
import des21 from "../../../public/webdesign/des21.png";
import des22 from "../../../public/webdesign/des22.png";
import des23 from "../../../public/webdesign/des23.png";
import des24 from "../../../public/webdesign/des24.png";
import des25 from "../../../public/webdesign/des25.png";
import des26 from "../../../public/webdesign/des26.png";
import des27 from "../../../public/webdesign/des27.png";
import des28 from "../../../public/webdesign/des28.png";

/* ------------------------------------------
   PROJECT CONTENT
------------------------------------------- */

const webDesignProjects = [
  { img: des1,  client: "Reliance Human Resources Consultancy, UAE" },
  { img: des2,  client: "Reliance Immigration, UAE" },
  { img: des3,  client: "Tonio & Senora, UAE" },
  { img: des4,  client: "Innovation Suite Businessmen Services, UAE" },
  { img: des5,  client: "Dubai Orbits, UAE" },
  { img: des6,  client: "Solapak, UAE" },
  { img: des7,  client: "4horses, UAE" },
  { img: des8,  client: "Al Murjan Group , UAE" },
  { img: des9,  client: "Vi7 Group, Dubai" },
  { img: des10, client: "Gafoorkas Thattukada, Dubai" },
  { img: des11, client: "Northern Insurance Brokers L.L.C, Dubai" },
  { img: des12, client: "WALTZ Solutions, Dubai" },
  { img: des13, client: "Arabian International Incubator Commercial Investment LLC" },
  { img: des14, client: "C-Suite Hub, Dubai" },
  { img: des15, client: "Arclight, Dubai" },
  { img: des16, client: "Pacific Petroleum, Africa" },
  { img: des17, client: "Amer Centre, Dubai" },
  { img: des18, client: "Tabasco, Sharjah" },
  { img: des19, client: "Wide Range Business, Dubai" },
  { img: des20, client: "Creative HR Consultancy, Ajman" },
  { img: des21, client: "Al Mahtab Vegetables & Fruits Company L.L.C, Abu Dhabi" },
  { img: des22, client: "KIZA, UAE" },
  { img: des23, client: "Ocean Plate Restaurant, Dubai" },
  { img: des24, client: "Foresight Shipping Management, Dubai" },
  { img: des25, client: "Royal Elite Valet Parking, Sharjah" },
  { img: des26, client: "JR Valet Parking, Dubai" },
  { img: des27, client: "Aquaflow Waterjetting Equipment LLC, Dubai" },
  { img: des28, client: "A.S.S Scaffolding, Al Qouz" },
];

const tags = [
  "Website Designing",
  "Responsive Design", // Shortened slightly for better fit
  "Web Development",
];

const itemsPerPage = 6;

const Page = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(webDesignProjects.length / itemsPerPage);

  const firstIndex = (currentPage - 1) * itemsPerPage;
  const currentProjects = webDesignProjects.slice(
    firstIndex,
    firstIndex + itemsPerPage
  );

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <section className="bg-gray-50 px-6 py-16 mt-20 md:py-24 min-h-screen">
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold momo-font text-[#ae5c83] leading-tight mb-4"
        >
          <span className="text-gray-900">Our</span> Websites
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="roboto-text text-gray-600 text-lg max-w-xl mx-auto"
        >
          A showcase of our custom-built websites designed to elevate brands, enhance engagement,
          and deliver exceptional digital experiences.
        </motion.p>
      </div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <AnimatePresence mode="wait">
          {currentProjects.map((p, i) => (
            <motion.div
              key={`${currentPage}-${i}`} // Force re-render animation on page change
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-300 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-56 w-full overflow-hidden bg-gray-100">
                <img
                  src={p.img.src}
                  alt={p.client}
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
                {/* Subtle Overlay on Hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-gray-800 text-lg font-bold uppercase tracking-wide momo-font leading-snug mb-2 group-hover:text-[#ae5c83] transition-colors">
                  {p.client}
                </h3>

                <p className="text-gray-500 text-sm font-medium mb-4">
                  Project: <span className="text-gray-700">Website Designing</span>
                </p>

                {/* Tags pushed to bottom */}
                <div className="mt-auto flex flex-wrap gap-2">
                  {tags.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-[#ae5c83]/5 text-[#ae5c83] text-[11px] font-semibold uppercase tracking-wider rounded-md border border-[#ae5c83]/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* PAGINATION */}
     <div className="flex justify-center mt-10">
  <div className="flex items-center gap-1 sm:gap-2 bg-white p-2 rounded-xl shadow-sm border border-gray-100 overflow-x-auto scrollbar-none max-w-full">

    {/* Prev */}
    <button
      onClick={() => goToPage(currentPage - 1)}
      disabled={currentPage === 1}
      className={`px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap transition-colors ${
        currentPage === 1
          ? "text-gray-300 cursor-not-allowed"
          : "text-gray-600 hover:bg-gray-100 hover:text-[#ae5c83]"
      }`}
    >
      Prev
    </button>

    {/* Page Numbers */}
    {Array.from({ length: totalPages }).map((_, idx) => (
      <button
        key={idx}
        onClick={() => goToPage(idx + 1)}
        className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
          currentPage === idx + 1
            ? "bg-[#ae5c83] text-white shadow-md scale-105"
            : "text-gray-600 hover:bg-gray-50"
        }`}
      >
        {idx + 1}
      </button>
    ))}

    {/* Next */}
    <button
      onClick={() => goToPage(currentPage + 1)}
      disabled={currentPage === totalPages}
      className={`px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap transition-colors ${
        currentPage === totalPages
          ? "text-gray-300 cursor-not-allowed"
          : "text-gray-600 hover:bg-gray-100 hover:text-[#ae5c83]"
      }`}
    >
      Next
    </button>

  </div>
</div>

    </section>
  );
};

export default Page;