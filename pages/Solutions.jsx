import React from "react";
import Projects from "@/pages/Projects";

const Solutions = () => {
  return (
    <div className="bg-white w-full flex flex-col items-center">
      
      {/* Header Section */}
      <section className="w-full max-w-7xl px-6 -mt-9 mb-4 text-center">
         <h1 className="text-5xl font-semibold tracking-wide momo-font  text-[#ae5c83]">
          Our <span className="text-[#ad4678]">Solutions</span>
        </h1>
        <p className="text-gray-600 mt-2 text-sm md:text-base">
              A complete suite of intelligent solutions crafted to elevate your business to the next level.
            </p>
      </section>
     <Projects />
      {/* BANNER SECTION */}
      <section className="w-full max-w-7xl px  mb-10">
        <div
          className="
            w-full 
            bg-[#f9f7ff] 
           
            rounded-2xl 
            py-10 px-6 
            text-center 
            shadow-sm
            hover:shadow-md
            transition-all 
            duration-300
          "
        >
          <h2
            className="
              text-3xl md:text-4xl 
              momo-font 
              font-bold 
              text-[#ad4678] 
              tracking-tight
            "
          >
            Explore Our More Solutions Here
          </h2>

          <p className="text-gray-600 mt-3 text-base md:text-lg max-w-2xl mx-auto">
            Discover a variety of innovative digital tools and technologies tailored to elevate
            your business performance and accelerate growth.
          </p>

          <a
            href="#"
            className="
              inline-block 
              mt-3 
              px-4 py-4 
              rounded-lg 
              bg-[#6c53a7] 
              text-white 
              font-semibold 
              hover:bg-[#5b4390]
              transition-all 
              duration-300
              shadow-lg shadow-black/10
            "
          >
            PortFolio →
          </a>
        </div>
      </section>

      {/* Projects Listing */}
     
    </div>
  );
};

export default Solutions;
