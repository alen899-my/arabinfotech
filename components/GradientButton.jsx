"use client";

import Link from "next/link";

export default function GradientButton({ href = "#", text = "Click Me", className = "" }) {
  return (
    <Link
      href={href}
      className={`
        inline-flex items-center justify-center
        px-6 py-3 
        text-white text-sm momo-font rounded-lg
        bg-gradient-to-r from-[#ae5c83] to-[#5b4390]
        shadow-[0_10px_25px_rgba(174,92,131,0.35)]
        hover:shadow-[0_15px_30px_rgba(91,67,144,0.45)]
        hover:scale-[1.06]
        transition-all duration-300 ease-out
        backdrop-blur-md
        ${className}
      `}
    >
      {text}
    </Link>
  );
}
