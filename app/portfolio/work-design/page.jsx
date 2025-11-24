"use client";

import React, { useState } from "react";

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
  "Responsive Web Designing",
  "Web Development",
];

const itemsPerPage =6;

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
    <section className="bg-gradient-to-b from-slate-100 to-slate-50 px-6 py-16 mt-20 md:py-24">
         <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold momo-font text-[#ae5c83] leading-tight ">
        <span className="text-black">Our</span>  Websites
        </h2>
        <p className="roboto-text">
          A showcase of our custom-built websites designed to elevate brands, enhance engagement,
  and deliver exceptional digital experiences.
        </p>
      </div>
      {/* GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {currentProjects.map((p, i) => (
          <div
            key={i}
            className="border border-slate-400 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
          >
            <div className="relative h-56 w-full overflow-hidden">
              <img
                src={p.img.src}
                alt={p.client}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-4 space-y-2">
              <h3 className="text-gray-700 text-lg sm:text-xl uppercase tracking-wide mt-1 momo-font">
                {p.client}
              </h3>

              <p className="text-slate-600 text-[15px]">
                Project: Website Designing
              </p>

              <div className="flex flex-wrap gap-2 mt-2">
                {tags.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-purple-50 text-purple-700 text-xs font-medium rounded-lg border border-purple-200 shadow-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* PAGINATION */}
      {/* PAGINATION */}
<div className="flex justify-center mt-12">
  <div className="flex items-center gap-2">

    {/* Prev */}
    <button
      onClick={() => goToPage(currentPage - 1)}
      disabled={currentPage === 1}
      className={`px-4 py-2 rounded-lg border border-slate-400 text-slate-700 font-medium ${
        currentPage === 1
          ? "opacity-40 cursor-not-allowed"
          : "hover:bg-slate-200"
      }`}
    >
      Prev
    </button>

    {/* Page Numbers */}
    {Array.from({ length: totalPages }).map((_, idx) => (
      <button
        key={idx}
        onClick={() => goToPage(idx + 1)}
        className={`px-4 py-2 rounded-lg border text-sm font-medium ${
          currentPage === idx + 1
            ? "bg-purple-600 text-white border-purple-600"
            : "border-slate-400 text-slate-700 hover:bg-slate-200"
        }`}
      >
        {idx + 1}
      </button>
    ))}

    {/* Next */}
    <button
      onClick={() => goToPage(currentPage + 1)}
      disabled={currentPage === totalPages}
      className={`px-4 py-2 rounded-lg border border-slate-400 text-slate-700 font-medium ${
        currentPage === totalPages
          ? "opacity-40 cursor-not-allowed"
          : "hover:bg-slate-200"
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
