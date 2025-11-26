"use client";

import React from "react";
import { motion } from "framer-motion";
import ec1 from "../../../public/ecom/ec1.png";
import ec2 from "../../../public/ecom/ec2.png";
import ec3 from "../../../public/ecom/ec3.png";
import ec4 from "../../../public/ecom/ec4.png";
import ec5 from "../../../public/ecom/ec5.png";
import ec6 from "../../../public/ecom/ec6.png";
import ec7 from "../../../public/ecom/ec7.png";
import ec8 from "../../../public/ecom/ec8.png";
import ec9 from "../../../public/ecom/ec9.png";
import ec10 from "../../../public/ecom/ec10.png";
import ec11 from "../../../public/ecom/ec11.png";

/* ------------------------------------------
   PROJECT DATA (Image + Details)
------------------------------------------- */

const ecommerceProjects = [
  {
    img: ec1,
    client: "Yameem, UAE",
    project: "Ecommerce Portal & Mobile Application",
    features: ["Responsive Web Designing", "Ecommerce Development"],
  },
  {
    img: ec2,
    client: "Better Quality Flowers and Chocolates",
    project: "Ecommerce Portal & Mobile Application",
    features: ["Responsive Web Designing", "Ecommerce Development"],
  },
  {
    img: ec3,
    client: "Inn Styles",
    project: "Ecommerce Portal & Mobile Application",
    features: ["Responsive Web Designing", "Ecommerce Development"],
  },
  {
    img: ec4,
    client: "Alia Fresh",
    project: "Ecommerce Portal & Mobile Application",
    features: ["Responsive Web Designing", "Ecommerce Development"],
  },
  {
    img: ec5,
    client: "Trane Parts, UAE",
    project: "Web Application for Distributors Portal",
    features: ["Responsive Web Designing", "Ecommerce Development"],
  },
  {
    img: ec6,
    client: "Shar Al Sharq Perfume",
    project: "Ecommerce B2C Portal Development",
    features: ["Responsive Web Designing", "Ecommerce Development"],
  },
  {
    img: ec7,
    client: "Gooxoom, Dubai",
    project: "Ecommerce B2B Portal Development",
    features: ["Responsive Web Designing", "Ecommerce Development"],
  },
  {
    img: ec8,
    client: "Shoecare Me, UAE",
    project: "Ecommerce B2C Portal Development",
    features: ["Responsive Web Designing", "Ecommerce Development"],
  },
  {
    img: ec9,
    client: "Magic Repair Me, UAE",
    project: "Ecommerce B2C Portal Development",
    features: ["Responsive Web Designing", "Ecommerce Development"],
  },
  {
    img: ec10,
    client: "Aliafresh, UAE",
    project: "Ecommerce B2C Portal Development",
    features: ["Responsive Web Designing", "Ecommerce Development"],
  },
  {
    img: ec11,
    client: "Nature Craft Essentials Trading LLC, Dubai",
    project: "Ecommerce B2C Portal Development",
    features: ["Responsive Web Designing", "Ecommerce Development"],
  },
];

/* ------------------------------------------
   ANIMATION VARIANTS
------------------------------------------- */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Delay between each card showing up
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Page = () => {
  return (
    <section className="bg-gradient-to-b px-6 py-16 mt-20 md:py-24">
      {/* HEADER ANIMATION */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold momo-font text-[#ae5c83] leading-tight ">
          <span className="text-black">Our</span> E-Commerce Websites
        </h2>
        <p className="roboto-text mt-4">
          Explore our e-commerce builds—designed for speed, user-friendly
          navigation, and seamless checkout experiences that increase customer
          satisfaction.
        </p>
      </motion.div>

      {/* GRID ANIMATION CONTAINER */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-12"
      >
        {ecommerceProjects.map((p, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            whileHover={{ y: -8 }} // Slight lift effect on hover
            className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-300"
          >
            {/* IMAGE */}
            <div className="relative h-56 w-full overflow-hidden">
              <motion.img
                whileHover={{ scale: 1.05 }} // Zoom effect on hover
                transition={{ duration: 0.5 }}
                src={p.img.src}
                alt={p.client}
                className="w-full h-full object-cover"
              />
            </div>

            {/* CONTENT */}
            <div className="p-4 space-y-2">
              <h3 className="text-gray-700 text-lg sm:text-xl uppercase tracking-wide mt-1 momo-font">
                {p.client}
              </h3>

              <p className="text-slate-600 text-[15px]">{p.project}</p>

              {/* TAGS */}
              <div className="flex flex-wrap gap-2 mt-2">
                {p.features.map((feature, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-purple-50 text-[#ae5c83] text-xs font-medium rounded-lg border border-purple-200 shadow-sm"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Page;