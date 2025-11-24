"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import map from "@/pages/map.jpg";

const locations = [
  {
    name: "USA Office",
    details: `US Office <br>
Virtual Sys Technologies Inc,<br>
447 Broadway, 2nd Floor Suite #1233,<br> 
New York, NY 10013, US <br>
+1 478 800 4004 <br> 
info@vstbiz.com <br> 
www.virtualsystechnologies.com`,
    position: "top-[40%] left-[22%]",
    color: "bg-red-500",
  },

  {
    name: "India Office",
    details: `Bangalore India Office<br>
Virtual Sys Technologies,<br> 
Infopark, 1st Floor, Suite #C1-5,<br> 
Cherthala, Kerala 688541, IN <br>
+91 478 255 4004 <br>
info@vstbiz.com <br> 
www.virtualsystechnologies.com`,
    position: "top-[55%] left-[63%]",
    color: "bg-blue-500",
  },

  {
    name: "UAE Office",
    details: `UAE Office<br>
AIT Information Technology L.L.C<br>
R364 - Al Wasal Building, 3rd Floor<br> 
Suite #40 & 103, Dubai, DXB 111273, AE.<br>
+971 4 852 0449<br>
info@arabinfotechllc.com<br>
www.arabinfotechllc.com`,
    position: "top-[50%] left-[58%]",
    color: "bg-green-500",
  },
];

export default function Office() {
  const [activeIndex, setActiveIndex] = useState(null);

  // Close tooltip when tapping outside (mobile)
  useEffect(() => {
    function closeOnOutsideTap(e) {
      if (!e.target.closest(".location-dot")) {
        setActiveIndex(null);
      }
    }
    document.addEventListener("touchstart", closeOnOutsideTap);
    return () =>
      document.removeEventListener("touchstart", closeOnOutsideTap);
  }, []);

  return (
    <div className="bg-white w-full flex flex-col items-center">

      {/* Heading */}
      <section className="w-full max-w-7xl px-6 -mt-10 pt-12 text-center">
        <h1 className="text-5xl font-semibold tracking-wide momo-font  text-[#ae5c83]">
          Our <span className="text-[#ad4678]">Offices</span>
        </h1>
      </section>

      {/* Banner */}
      <section className="w-full flex justify-center mb-10">
        <div className="w-full max-w-5xl rounded-2xl flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all duration-300 py-8 px-6">
          <div className="flex items-center justify-center gap-3 sm:gap-4">

         

            <p className="roboto-text -mt-8">
              We operate across multiple regions to support our clients worldwide.
            </p>

          </div>
        </div>
      </section>

      {/* MAP SECTION */}
      <div className="relative w-full max-w-4xl mx-auto mb-10 -mt-20">
        <Image
          src={map}
          alt="world map"
          width={1200}
          height={700}
          className="w-full rounded-lg "
        />

        {/* Location Dots */}
        {locations.map((loc, i) => (
          <div
            key={i}
            className={`absolute ${loc.position} group cursor-pointer location-dot`}
            onClick={() => setActiveIndex(i)} // Mobile tap
            onMouseEnter={() => setActiveIndex(i)} // Desktop hover
            onMouseLeave={() => setActiveIndex(null)} // Desktop unhover
          >

            {/* Ping */}
            <span
              className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full ${loc.color} opacity-40 blur-sm animate-ping`}
            />

            {/* Dot */}
            <div
              className={`w-4 h-4 ${loc.color} rounded-full border-2 border-white shadow-lg relative z-10 transition-transform ${
                activeIndex === i ? "scale-125" : "group-hover:scale-125"
              }`}
            />

            {/* Tooltip */}
            <div
              className={`
                absolute z-50 bg-white text-gray-700 px-3 py-3 rounded-xl shadow-xl text-left 
                transition-all duration-200

          
                md:w-48 md:top-10
                ${loc.name === "USA Office" ? "md:left-1/2 md:-translate-x-1/2" : "md:left-2"}
                md:opacity-0 md:group-hover:opacity-100

                left-7 -translate-x-1/2 top-10
                w-[60vw] max-w-xs
                ${activeIndex === i ? "opacity-100" : "opacity-0"}
              `}
            >
              <h3 className="font-semibold text-sm">{loc.name}</h3>
              <p
                className="text-xs mt-1 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: loc.details }}
              ></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
