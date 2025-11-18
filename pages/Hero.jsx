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

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Content Wrapper */}
      <div className="relative z-20 px-6 w-full max-w-7xl mx-auto flex flex-col justify-center h-full">

        {/* Main Heading */}
        <h1 className="momo-font text-[clamp(32px,9vw,100px)] leading-[0.95] tracking-tight">
          Arab Web <br />
          Design Agency, <br />
          Delivering <br />
          Big Results
        </h1>

        {/* Two Column Layout */}
        <div className="mt-10 flex flex-col md:flex-row gap-10 md:items-start">

          {/* Star Tagline */}
          <p className="flex items-center gap-2 zalando-bold text-xs sm:text-sm md:text-base uppercase font-bold">
            <span className="text-[#5e1afd] text-lg animate-pulse drop-shadow-[0_0_6px_rgba(255,255,150,0.8)]">
              ✦
            </span>
            <span className="leading-tight">
              UAE Based Software Agency — Working Worldwide
            </span>
          </p>

          {/* Right-Side Text + CTA */}
          <div className="md:w-2/3 text-left md:text-justify md:text-lg sm:text-xl md:text-2xl space-y-3">

           {/* Paragraph 1 */}
<p className="text-gray-100/80 font-light font-mono bg-black/5 p-2 rounded">
  We create modern websites and digital experiences that are fast, clean, and beautifully designed.
</p>

{/* Paragraph 2 */}
<p className="text-gray-100/80 mt-2 font-light font-mono bg-black/5 p-2 rounded">
  A lean, quality-focused team delivering smart solutions with precise craftsmanship.
</p>


            {/* CTA Button */}
            <div className="pt-2">
              <Link
  href="/"
  className="inline-flex items-center justify-center px-6 py-3 rounded-lg
             bg-white/10 border border-white/20 text-white 
             backdrop-blur-md
             hover:bg-white/20 hover:border-white/30 
             transition-all duration-300 font-medium tracking-wide"
>
  Schedule an intro call →
</Link>

            </div>

          </div>

        </div>
      </div>

    </div>
  );
}
