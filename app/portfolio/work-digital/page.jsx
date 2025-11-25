"use client";

import Image from "next/image";

// POSTER IMPORTS
import post1 from "../../../public/posters/post1.jpg";
import post2 from "../../../public/posters/post2.jpg";
import post3 from "../../../public/posters/post3.jpg";
import post4 from "../../../public/posters/post4.jpg";
import post5 from "../../../public/posters/post5.jpg";
import post6 from "../../../public/posters/post6.jpg";
import post7 from "../../../public/posters/post7.jpg";
import post8 from "../../../public/posters/post8.jpg";
import post9 from "../../../public/posters/post9.jpg";
import post10 from "../../../public/posters/post10.jpg";
import post11 from "../../../public/posters/post11.jpg";
import post12 from "../../../public/posters/post12.jpg";
import post13 from "../../../public/posters/post13.jpg";
import post14 from "../../../public/posters/post14.jpg";
import post15 from "../../../public/posters/post15.jpg";
import post16 from "../../../public/posters/post16.jpg";

import post17 from "../../../public/posters/post17.png";
import post18 from "../../../public/posters/post18.png";
import post19 from "../../../public/posters/post19.png";
import post20 from "../../../public/posters/post20.png";
import post21 from "../../../public/posters/post21.png";
import post22 from "../../../public/posters/post22.png";
import post23 from "../../../public/posters/post23.png";
import post24 from "../../../public/posters/post24.png";
import post25 from "../../../public/posters/post25.png";

// ================================
// POSTERS WITH TITLES & TYPES
// ================================
const posters = [
  { src: post1, title: "Varletpark", type: "Social Media Poster" },
  { src: post2, title: "Aztech", type: "Social Media Poster" },
  { src: post3, title: "Virtual Sys Technologies", type: "Social Media Poster" },
  { src: post4, title: "Aztech", type: "Social Media Poster" },
  { src: post5, title: "Aztech", type: "Social Media Poster" },
  { src: post6, title: "Aztech", type: "Social Media Poster" },
  { src: post7, title: "Virtual Sys Technologies", type: "Social Media Poster" },
  { src: post8, title: "Innovation Suite", type: "Social Media Poster" },
  { src: post9, title: "Innovation Suite", type: "Social Media Poster" },
  { src: post10, title: "Aztech", type: "Social Media Poster" },
  { src: post11, title: "Aztech", type: "Social Media Poster" },
  { src: post12, title: "Innovation Suite", type: "Social Media Poster" },
  { src: post13, title: "Innovation Suite", type: "Social Media Poster" },
  { src: post14, title: "Innovation Suite", type: "Social Media Poster" },
  { src: post15, title: "Arabinfotec", type: "Social Media Poster" },
  { src: post16, title: "Arabinfotec", type: "Social Media Poster" },
  { src: post17, title: "Creatrive HR", type: "Social Media Poster" },
  { src: post18, title: "Aztech", type: "Social Media Poster" },
  { src: post19, title: "Al Murjan Group", type: "Social Media Poster" },
  { src: post20, title: "Hub Space", type: "Social Media Poster" },
  { src: post21, title: "Al Murjan Group", type: "Social Media Poster" },
  { src: post22, title: "Waltz", type: "Flyer Design" },
  { src: post23, title: "Arabinfotec", type: "Visiting Card Design" },
  { src: post24, title: "Foresight", type: "Visiting Card Design" },
  { src: post25, title: "Arclight", type: "Brochure Design" },
];

export default function MagazineCollage() {
  return (
    <div className="px-6 mt-30 py-10">
      
      {/* HEADER */}
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold momo-font text-[#ae5c83] leading-tight">
          <span className="text-black">Our</span> Marketing Works
        </h2>
        <p className="roboto-text mt-2 text-neutral-600">
          Explore our digital marketing creatives designed to strengthen brand identity,
          captivate audiences, and maximize reach across modern marketing channels.
        </p>
      </div>

      {/* MASONRY GRID */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4 mt-10">
        {posters.map((item, i) => (
          <div
            key={i}
            className={`
              relative group overflow-hidden rounded-2xl shadow-md break-inside-avoid 
              hover:shadow-xl hover:scale-[1.02] transition-all duration-300
              ${i % 5 === 0 ? "h-[420px]" : ""}
              ${i % 3 === 0 ? "h-[320px]" : ""}
              ${i % 2 === 0 ? "h-[260px]" : ""}
            `}
          >
            {/* IMAGE */}
            <Image
              src={item.src}
              alt={item.title}
              className="w-full h-full object-cover"
            />

            {/* HOVER OVERLAY */}
            <div className="
  absolute inset-0 bg-black/60 
  opacity-100 md:opacity-0 md:group-hover:opacity-100
  transition-all duration-300 
  flex flex-col justify-end p-5
">
  <h3 className="text-white text-lg font-semibold">
    {item.title}
  </h3>
  <p className="text-white/80 text-sm">
    {item.type}
  </p>
</div>

          </div>
        ))}
      </div>
    </div>
  );
}
