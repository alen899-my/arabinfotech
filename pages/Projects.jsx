import React from "react";
import Image from "next/image";

import valetparking from "@/public/valetparking.jpg";
import analtyc from "@/public/analtyc.jpg";
import payday from "@/public/payday.jpg";
import bus from "@/public/bus.jpg"
const Projects = () => {
  const PROJECTS = [
    {
      title: "Valet Parking Solution",
      description:
        "Our Valet Parking Platform delivers advanced technology and data-driven solutions to improve parking management and reduce congestion in cities. It enhances comfort, real-time visibility, and supports secure P2PE & EMV transactions.",
      image: valetparking,
      link: "/portfolio/work-valet",
    },
    {
      title: "Competency Analytics System",
      description:
        "This system measures knowledge, skills, and capabilities for businesses and education. It analyzes technical and behavioral competencies, providing structured and measurable insights.",
      image: analtyc,
      link: "/portfolio/work-software",
    },
    {
      title: "Attendance Payroll System",
      description:
        "A leading HR & Payroll platform managing attendance, leave, payout processing, and HR workflows. Automate HR tasks efficiently on any device—anytime, anywhere.",
      image: payday,
      link: "/portfolio/work-software",
    },
    {
      title: "Splunk Professional Services",
      description:
        "At ARABINFOTECH, we specialize in providing tailored Splunk Professional Services to help businesses harness the power of their data. Whether you're implementing IT Service Intelligence (ITSI) for service monitoring, optimizing your Security Information and Event Management (SIEM) solution",
      image: bus,
      link: "/portfolio/work-software",
    },
  ];

  const TitleStar = `
    relative pl-7
    before:content-['✦']
    before:absolute
    before:left-0
    before:top-1/2 before:-translate-y-1/2
    before:text-[#6c53a7]
    before:text-xl
    before:animate-pulse
    before:drop-shadow-[0_0_6px_rgba(255,255,255,0.7)]
  `;

return (
  <div className="w-full max-w-7xl mx-auto  px-4">

    {/* GRID — responsive */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

      {PROJECTS.map((proj, index) => (
        <div
          key={index}
          className="
            border-t-4 border-t-[#6c53a7] 
            border border-[#e5e1ee]
            rounded-xl 
            p-3                     /* smaller padding */
            bg-white
            shadow-sm hover:shadow-md
            transition-all duration-300
            flex flex-col space-y-3

            w-[92%] mx-auto         /* smaller card width mobile */
            sm:w-[85%]
            md:w-full
          "
        >
         {/* IMAGE */}
<div className="
  w-full 
  h-40 sm:h-48 md:h-56
  rounded-lg 
  overflow-hidden 
  border border-[#ece7f6]
">
  <Image
    src={proj.image}
    alt={proj.title}

    width={600}
    height={400}

    loading="lazy"
    placeholder="blur"

    className="
      object-cover w-full h-full 
      hover:scale-105 
      transition-all duration-700
    "
  />
</div>


          {/* TITLE */}
          <h2
            className={`
              text-lg sm:text-xl md:text-2xl   /* reduced size mobile */
              momo-font font-bold 
              text-[#3b2d57] 
              leading-snug
              ${TitleStar}
            `}
          >
            {proj.title}
          </h2>

          {/* DESCRIPTION */}
          <p className="text-gray-600 leading-relaxed text-xs sm:text-sm md:text-base">
            {proj.description}
          </p>

          {/* BUTTON */}
          <a
            href={proj.link}
            className="
              inline-block px-3 py-2          /* smaller button */
              rounded-lg 
              bg-[#6c53a7] hover:bg-[#5b4390]
              text-white font-semibold text-xs sm:text-sm
              transition-all duration-300
              w-max
            "
          >
            View more →
          </a>
        </div>
      ))}

    </div>
  </div>
);

};

export default Projects;
