"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import first from "./first.png";

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

  return (
    <div className="bg-[#042326] relative w-full flex flex-col items-center pb-32">

      {/* Top Section */}
      <div className="flex flex-col text-white items-center px-4 text-center space-y-3 mt-16 w-full">
        <h1 className={`zalando-bold text-3xl uppercase font-bold tracking-wide ${TitleStar}`}>
          Our Work
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

    <div className="w-full py-20 px-6 flex justify-center">
  <div className="w-full max-w-5xl space-y-16">

    <h1 className="text-white text-[48px] md:text-[70px] font-light border-b border-white/20 pb-4">
      WEBSITE DESIGN
    </h1>

    <h1 className="text-white text-[48px] md:text-[70px] font-light border-b border-white/20 pb-4">
      E-COMMERCE
    </h1>

    <h1 className="text-white text-[48px] md:text-[70px] font-light border-b border-white/20 pb-4">
      DIGITAL MARKETING
    </h1>

    <h1 className="text-white text-[48px] md:text-[70px] font-light border-b border-white/20 pb-4">
      SOFTWARE SOLUTIONS
    </h1>

  </div>
</div>


    </div>
  );
};

export default OurWorks;
