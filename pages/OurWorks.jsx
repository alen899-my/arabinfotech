"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";

import Globe from "../components/Globe"
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import first from "./first.png";
import dg from "./dg.jpg"
import ds from "./ds.jpg"
import ecom from "./ecom.jpg"
import ss from "./ss.jpg"
/* -------------------- COUNTER COMPONENT -------------------- */
const Counter = ({ from = 0, to }) => {
  const value = useMotionValue(from);
  const rounded = useTransform(value, (latest) => Math.floor(latest));

  useEffect(() => {
    const controls = animate(value, to, {
      duration: 2,
      ease: "easeOut",
    });
    return () => controls.stop();
  }, []);

  return <motion.span>{rounded}</motion.span>;
};
/* ------------------------------------------------------------ */

const TitleStar = `
  relative
  pl-6
  before:content-['✦']
  before:absolute
  before:left-0
  before:top-1/2
  before:-translate-y-1/2
  before:text-[#5e1afd]
  before:text-lg
  before:animate-pulse
  before:drop-shadow-[0_0_6px_rgba(255,255,150,0.8)]
`;

const highlight = "text-white font-semibold";

const OurWorks = () => {
  const imgRef = useRef(null);
  const statsRef = useRef(null);

  const isInView = useInView(imgRef, {
    once: true,
    amount: 0.6,
  });

  const statsInView = useInView(statsRef, { once: true, amount: 0.4 });

  /* -------------------- SERVICES HOVER SETUP -------------------- */
  const [hovered, setHovered] = useState(null);

  const services = [
    { title: "WEBSITE DESIGN", image: ds},
    { title: "E-COMMERCE", image: ecom },
    { title: "DIGITAL MARKETING", image: dg },
    { title: "SOFTWARE SOLUTIONS", image: ss },
  ];
  /* ------------------------------------------------------------ */

  return (
    <div className="bg-[#042326] relative w-full flex flex-col items-center pb-32">

      {/* Top Section */}
      <div className="flex flex-col text-white items-center px-4 text-center space-y-3 mt-16 w-full">
        <h1 className={`zalando-bold text-3xl uppercase font-bold tracking-wide ${TitleStar}`}>
          About ArabInfotech
        </h1>
      </div>

      {/* Row: Image + Heading */}
      <div className="flex flex-col md:flex-row items-center justify-center mt-10 gap-6 md:gap-10 px-6 max-w-7xl w-full">
        <motion.div
          ref={imgRef}
          initial={{ scale: 1, rotate: 0 }}
          animate={
            isInView
              ? { rotate: 12, scale: 1.12 }
              : { rotate: 0, scale: 1 }
          }
          transition={{ duration: 0.6, type: "spring", stiffness: 150 }}
          className="flex justify-center"
        >
          <Image
            src={first}
            alt="Digital Marketing"
            width={100}
            height={100}
            className="w-[100px] md:w-[150px] min-w-[80px] h-auto drop-shadow-xl"
          />
        </motion.div>

        <h1 className="momo-font text-3xl md:text-5xl font-semibold text-white leading-tight text-center md:text-left">
          Digital Marketing & Software Development Company in Dubai
        </h1>
      </div>

      {/* Paragraph */}
      <div className="max-w-5xl mt-10 px-6">
        <p className="text-gray-200 text-lg md:text-xl text-center leading-relaxed md:leading-loose">
          Whatever may be your requirements, <span className={highlight}>ArabInfotec</span> has a solution tailored
          to your needs. We provide comprehensive, cost-effective
          <span className={highlight}> Web Designing</span>,
          <span className={highlight}> Software Solutions</span>,
          <span className={highlight}> Mobile App Development</span>,
          <span className={highlight}> Digital Marketing</span>, and a wide range of
          applications such as <span className={highlight}>E-commerce Sites</span>,
          <span className={highlight}> Cloud Software</span> for Staff Supply,
          <span className={highlight}> Valet Parking</span>,
          <span className={highlight}> KOD Systems</span>,
          <span className={highlight}> Real Estate CRM</span> and
          <span className={highlight}> Tour Management Systems</span>.
        </p>
      </div>

      {/* Stats Section */}
      <div className="w-full py-28 px-6 flex justify-center">
        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

          {/* LEFT SIDE */}
          <div className="space-y-6">
            <h1 className="text-white momo-font text-4xl md:text-5xl font-light leading-tight">
              Numbers that<br /> tell our story
            </h1>

            <p className="text-gray-300 text-lg max-w-md leading-relaxed">
              Behind every number is a milestone — built through trust,
              innovation, and the success of our clients.
            </p>
          </div>

          {/* RIGHT SIDE CARD */}
          <div ref={statsRef} className="relative">
            <div className="absolute -inset-6 bg-purple-800/10 blur-3xl rounded-3xl"></div>

            <div className="relative backdrop-blur-xl border border-white/10 rounded-3xl shadow-xl overflow-hidden">

              {/* Stat 1 */}
              <div className="p-10 border-b border-white/10">
                <h1 className="text-white text-5xl font-light">
                  {statsInView && <Counter from={0} to={10} />}+
                </h1>
                <p className="text-gray-400 mt-2">Years of Experience</p>
              </div>

              {/* Stat 2 */}
              <div className="p-10 border-b border-white/10">
                <h1 className="text-white text-5xl font-light">
                  {statsInView && <Counter from={0} to={25} />}+
                </h1>
                <p className="text-gray-400 mt-2">Associates</p>
              </div>

              {/* Stat 3 */}
              <div className="p-10 border-b border-white/10">
                <h1 className="text-white text-5xl font-light">
                  {statsInView && <Counter from={0} to={750} />}+
                </h1>
                <p className="text-gray-400 mt-2">Clients</p>
              </div>

              {/* Stat 4 */}
              <div className="p-10">
                <h1 className="text-white text-5xl font-light">
                  {statsInView && <Counter from={0} to={2000} />}+
                </h1>
                <p className="text-gray-400 mt-2">Projects Delivered</p>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* -------------------- SERVICES SECTION -------------------- */}
  <div className="w-full py-20 px-6 flex justify-center relative">
  <div className="w-full max-w-5xl space-y-20 relative">
          
    <h1 className="momo-font text-5xl font-semibold text-white leading-tight text-center md:text-left">
      Our Focus
    </h1>

    {services.map((item, i) => (
      <div
        key={i}
        onMouseEnter={() => setHovered(i)}
        onMouseLeave={() => setHovered(null)}
        className="relative w-full flex items-center md:items-start"
      >
        {/* IMAGE ON LEFT (Desktop only) */}
        {hovered === i && (
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="
              absolute 
              left-0
              top-1/2 -translate-y-1/2
              hidden md:block
              bg-[#0c383a] 
              border border-white/10 
              rounded-2xl 
              
              shadow-xl
            "
          >
            <Image
              src={item.image}
              alt={item.title}
              width={150}
              height={110}
              className="rounded-xl object-cover"
            />
          </motion.div>
        )}

        {/* IMAGE ON TOP (Mobile Only) */}
        {hovered === i && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="
              md:hidden mb-3 w-full flex justify-center
            "
          >
            <div className="bg-[#0c383a] border border-white/10 rounded-xl  shadow-xl">
              <Image
                src={item.image}
                alt={item.title}
                width={130}
                height={90}
                className="rounded-lg object-cover"
              />
            </div>
          </motion.div>
        )}

        {/* TEXT */}
        <motion.h1
          initial={{ x: 0 }}
          animate={
            hovered === i
              ? { x: window.innerWidth < 768 ? 20 : 180 } // smaller shift on mobile
              : { x: 0 }
          }
          transition={{ type: "spring", stiffness: 160, damping: 20 }}
          className="
            text-white 
            text-[38px] md:text-[70px] 
            font-light 
            border-b border-white/20 
            pb-4 cursor-pointer 
            w-full leading-tight
          "
        >
          {item.title}
        </motion.h1>
      </div>
    ))}

  </div>
</div>

    <div className="w-full py-28 px-6 flex justify-center">
        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-1 items-start">
         
             <div className="space-y-6">
              <h1 className="text-white momo-font text-4xl md:text-5xl font-light leading-tight">"We help brands scale faster, perform better, and stand out online"</h1>
             </div>
        <Globe/>
              
        </div>
       
    </div>


      {/* ------------------------------------------------------------ */}

    </div>
  );
};

export default OurWorks;
