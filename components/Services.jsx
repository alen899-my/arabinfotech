"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";

export default function Services() {
  const [hovered, setHovered] = useState(null);

  const services = [
    { title: "WEBSITE DESIGN", image: "/web.jpg" },
    { title: "E-COMMERCE", image: "/ecom.jpg" },
    { title: "DIGITAL MARKETING", image: "/marketing.jpg" },
    { title: "SOFTWARE SOLUTIONS", image: "/software.jpg" },
  ];

  return (
    <div className="w-full py-20 px-6 flex justify-center relative">
      <div className="w-full max-w-5xl space-y-16 relative">

        {services.map((item, i) => (
          <div
            key={i}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            className="relative"
          >
            <motion.h1
              initial={{ x: 0 }}
              animate={hovered === i ? { x: 20 } : { x: 0 }}
              transition={{ type: "spring", stiffness: 120 }}
              className="text-white text-[48px] md:text-[70px] font-light border-b border-white/20 pb-4 cursor-pointer"
            >
              {item.title}
            </motion.h1>

            {/* Image on Hover */}
            {hovered === i && (
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.3 }}
                className="absolute right-[-350px] top-1/2 -translate-y-1/2 hidden md:block"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={300}
                  height={200}
                  className="rounded-xl shadow-lg object-cover"
                />
              </motion.div>
            )}
          </div>
        ))}

      </div>
    </div>
  );
}
