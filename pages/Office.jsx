import React from "react";
import Image from "next/image";
import map from "@/pages/map.jpg";

const locations = [
  {
    name: "USA Office",
    details: "New York, Business Bay Tower",
    position: "top-[40%] left-[22%]",
    color: "bg-red-500",
  },
  { name: "India Office",
    details: "Bangalore – Electronic City",
   
    position: "top-[55%] left-[63%]",
    color: "bg-blue-500",
  },
  {
    name: "UAE Office",
    details: "Dubai – Sheikh Zayed Road",
    position: "top-[50%] left-[58%]",
    color: "bg-green-500",
  },
];

export default function Office() {
  return (
    <div className="bg-white w-full flex flex-col items-center">
      <section className="w-full max-w-7xl px-6 pt-12 pb-6 text-center">
        <h1 className="text-5xl font-semibold tracking-wide text-[#52476b]">
          Our Offices
        </h1>
      </section>

      <div className="relative w-full max-w-4xl mx-auto">

        {/* MAP IMAGE */}
        <Image
          src={map}
          alt="world map"
          width={1200}
          height={700}
          className="w-full rounded-lg shadow-lg"
        />

        {/* LOCATION DOTS */}
        {locations.map((loc, i) => (
          <div
            key={i}
            className={`absolute ${loc.position} group cursor-pointer`}
          >
            {/* Pulsing animation wrapper */}
            <span
              className={`
                absolute left-1/2 top-1/2 
                -translate-x-1/2 -translate-y-1/2
                w-6 h-6 rounded-full ${loc.color}
                opacity-40 blur-sm animate-ping
              `}
            ></span>

            {/* Main dot */}
            <div
              className={`w-4 h-4 ${loc.color} rounded-full border-2 border-white shadow-lg
                relative z-10 group-hover:scale-125 transition-transform`}
            ></div>

            {/* Hover Info Card */}
            <div
              className="
                opacity-0 group-hover:opacity-100 
                transition-opacity duration-300 
                absolute left-6 top-10
                bg-white text-gray-700 px-4 py-2
                rounded-xl shadow-xl w-40
              "
            >
              <h3 className="font-semibold text-sm">{loc.name}</h3>
              <p className="text-xs mt-1">{loc.details}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
