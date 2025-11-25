import React from "react";
import { motion } from "framer-motion";
import Projects from "@/pages/Projects";

const Solutions = () => {
  return (
    <div className="bg-white w-full flex flex-col items-center">
      
      {/* Header Section */}
      <section className="w-full max-w-7xl px-6 -mt-9 mb-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-5xl font-semibold tracking-wide momo-font text-[#ae5c83]"
        >
          Our <span className="text-[#ad4678]">Solutions</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-gray-600 mt-2 text-sm md:text-base"
        >
          A complete suite of intelligent solutions crafted to elevate your business to the next level.
        </motion.p>
      </section>

      <Projects />

      {/* BANNER SECTION */}
      <section className="w-full max-w-7xl px mb-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
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
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="
              text-3xl md:text-4xl 
              momo-font 
              font-bold 
              text-[#ad4678] 
              tracking-tight
            "
          >
            Explore Our More Solutions Here
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-gray-600 mt-3 text-base md:text-lg max-w-2xl mx-auto"
          >
            Discover a variety of innovative digital tools and technologies tailored to elevate
            your business performance and accelerate growth.
          </motion.p>

          <motion.a
            href="/portfolio/featured"
            whileHover={{ scale: 1.05, y: -3 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
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
          </motion.a>
        </motion.div>
      </section>

    </div>
  );
};

export default Solutions;
