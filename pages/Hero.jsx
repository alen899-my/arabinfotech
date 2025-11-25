"use client";

import Image from "next/image";
import back from "@/public/back.jpg";
import second from "@/public/second.jpg";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Home() {
  /* --- IMAGE SLIDER LOGIC --- */
  const images = [back, second];
  const [index, setIndex] = useState(0);

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Manual controls
  const nextSlide = () => setIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div
      className="
        relative w-full 
        h-[55vh]
        sm:h-[70vh]
        md:h-[85vh]
        overflow-hidden
      "
    >
   
     {/* BACKGROUND SLIDER - Smooth Fade */}
<div className="absolute inset-0 z-0 overflow-hidden">

  {images.map((img, i) => (
    <Image
      key={i}
      src={img}
      alt="background-slide"
      fill
      priority
      quality={100}
      className={`
        object-cover
        absolute inset-0
        transition-opacity duration-1000 ease-in-out
        ${i === index ? "opacity-100" : "opacity-0"}
        animate-scaleOneWay
      `}
    />
  ))}

</div>


      {/* LEFT BUTTON (smaller on mobile) */}
      <button
        onClick={prevSlide}
        className="
          absolute left-3 top-1/2 -translate-y-1/2 z-30
          bg-white/20 hover:bg-white/40
          text-white
          p-2 sm:p-3 rounded-full
          backdrop-blur-md
          transition-all
        "
      >
        <ChevronLeft size={20} className="sm:size-4" />
      </button>

      {/* RIGHT BUTTON (smaller on mobile) */}
      <button
        onClick={nextSlide}
        className="
          absolute right-3 top-1/2 -translate-y-1/2 z-30
          bg-white/20 hover:bg-white/40
          text-white
          p-2 sm:p-3 rounded-full
          backdrop-blur-md
          transition-all
        "
      >
        <ChevronRight size={20} className="sm:size-4" />
      </button>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Content */}
      <div
        className="
          relative z-20 px-4 sm:px-6 w-full max-w-6xl mx-auto 
          flex flex-col justify-center h-full 
          text-center
          mt-10
          sm:mt-0
        "
      >
        <h1
          className="
            momo-font mt-5
            text-[clamp(40px,10vw,100px)]
            leading-[0.9]
            tracking-tight
            font-semibold
            text-white
          "
        >
          Arab Web Design Agency <br />
          Delivering Big Results
        </h1>

        <div className="mt-4 sm:mt-6 flex justify-center">
          <span
            className="
              flex items-center gap-2 
              zalando-bold 
              text-sm sm:text-base md:text-lg
              uppercase font-bold text-white
            "
          >
            <span className="text-[#5e1afd] text-xl animate-pulse">✦</span>
            UAE Based Software Agency — Working Worldwide
          </span>
        </div>

        <div className="mt-6 sm:mt-8">
          <Link
            href="/contact"
            className="
              inline-flex items-center justify-center 
              px-7 py-3.5 rounded-lg
              bg-white/10 border border-white/20 text-white 
              backdrop-blur-md
              hover:bg-white/20 hover:border-white/30 
              transition-all duration-300 
              font-medium tracking-wide
              text-base sm:text-lg
            "
          >
            Schedule an intro call →
          </Link>
        </div>
      </div>
    </div>
  );
}
