"use client";

import Image from "next/image";
import back from "@/public/back.jpg";
import Link from "next/link";

export default function Home() {
  return (
    /* HERO SECTION */
    <div className="relative w-full h-screen overflow-hidden">

      {/* Background Image */}
      <Image
        src={back}
        alt="background"
        fill
        quality={100}
        priority
        className="object-cover animate-scaleOneWay"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col justify-center translate-y-10 mt-25 px-6 transform translate-x-50 h-fit">

        {/* Heading */}
        <h1 className="momo-font text-[clamp(28px,9vw,100px)] leading-none tracking-tight">
          Arab Web <br />
          Design Agency, <br />
          Delivering <br />
          Big Results
        </h1>

        {/* Text Section */}
        <div className="mt-10 flex flex-col md:flex-row gap-10 max-w-6xl">

          {/* Star Tagline */}
          <p
            className="relative zalando-bold text-sm leading-tight uppercase text-left font-bold
              pl-6
              before:content-['✦']
              before:absolute
              before:left-0
              before:top-1/2
              before:-translate-y-30
              before:text-[#5e1afd]
              before:text-lg
              before:animate-pulse
              before:drop-shadow-[0_0_6px_rgba(255,255,150,0.8)]
            "
          >
            UAE Based Software Agency
            <br />
            Working Worldwide
          </p>

          {/* Paragraphs */}
          <div className="md:w-2/3 text-justify text-lg sm:text-xl md:text-2xl gap-2">

            <p className="text-gray-100/80 font-light font-mono bg-black/5">
              We specialize in building standout websites and digital products
              that blend visual storytelling with clean development principles
              and strategic thinking.
            </p>

            <p className="text-gray-100/80 mt-2 font-light font-mono bg-black/5">
              Clients describe us as lean, focused, and a refreshing alternative
              to larger agencies. We bring big-team expertise with the care and
              precision of a boutique studio.
            </p>

            {/* CTA Button */}
            <p>
              <Link
                href="/"
                className="inline-block px-6 py-3 rounded-xl bg-[#6c53a7] text-[#b6abc5] 
                           border border-[#b6abc5]/30 backdrop-blur-md
                           hover:bg-[#b6abc5]/30 hover:border-[#b6abc5]/50 
                           transition-all duration-300 mt-2"
              >
                Schedule an intro call →
              </Link>
            </p>

          </div>
  
        </div>
      </div>
   
    </div>
  );
}
