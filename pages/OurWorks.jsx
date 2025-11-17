import React from "react";
import Image from "next/image";

import valetparking from "@/public/valetparking.jpg";
import analtyc from "@/public/analtyc.jpg"
import payday from "@/public/payday.jpg"
// PROJECT LIST
const PROJECTS = [
  {
    title: "Valet Parking Solution",
    description:
      "Our Valet Parking Platform delivers advanced technology and data-driven solutions to improve parking management and reduce congestion in cities. Since parking areas often create the first and last impression for visitors, a poor experience can affect return rates. Arabinfotec’s Valet Parking Software helps maximize revenue, enhance comfort, offer real-time visibility, and reduce operational challenges. It also supports secure transactions with P2PE and EMV.",
    image: valetparking,
    link: "#",
  },
  {
    title: "Competency Analytics System",
    description:
      "Competency Analysis system is used to measure knowledge, skills, and capabilities either for analyzing a company’s products, services, human capital. Also it can be used in education in order to analyze the core competency in student performance. Competency Analysis tools are interested in determining skills, knowledge and abilities   Competencies are capabilities that can be performed by individuals or groups and measured. Measurements can be divided by technical competencies and behavioral competencies.It is an evaluative way to measure performance in an organized, structured manner.",
    image: analtyc,
    link: "#",
  },
   {
    title: "Attendance Payroll System ",
    description:
      "Arabinfotec is a leading leading HRMS & Payroll Platform.Automate HR tasks & employee attendance in minutes with our Attendance payroll system.Best-in-class Software.Using this system we manage Payroll Execution, Leave & Attendance Management & Payout Processing and other HR processes efficiently. Manage your attendance and payroll anytime, anywhere, on any platform.We are the fastest growing HR & Payroll Platform in UAE.",
    image: payday,
        link: "#",
  },
  

];

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

const OurWorks = () => {
  return (
    <div className="bg-[#042326] relative w-full min-h-screen overflow-hidden flex flex-col items-center">
      
      {/* Top Section */}
      <div className="flex flex-col text-white items-center px-4 text-center space-y-3 mt-10 w-full">
        
        {/* Star Title */}
        <h1 className={`zalando-bold text-2xl uppercase font-bold ${TitleStar}`}>
          Our Work
        </h1>

        <h1 className="momo-font leading-tight text-[clamp(28px,8vw,50px)]">
          Exceptional Digital Solutions
        </h1>

        <h1 className="momo-font -mt-2 leading-tight text-[clamp(28px,8vw,50px)]">
          From Vision to Execution
        </h1>

        <p className="text-[clamp(16px,4vw,20px)] text-gray-200 leading-relaxed max-w-3xl">
          We provide comprehensive, cost-effective Web Designing, Software Solutions,
          Mobile App Development, Digital Marketing, and a wide range of applications.
        </p>
      </div>

      {/* Project Section */}
      <div className="w-full max-w-6xl px-6 mt-20 space-y-24 pb-20">

        {PROJECTS.map((proj, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center justify-between gap-10 
              ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
          >
            {/* TEXT BLOCK */}
            <div className="text-[#6c53a7] md:w-1/2 space-y-4  ">
              
              {/* H2 with star */}
              <h2 className={`text-3xl momo-font font-bold border-b border-[#5e1afd77] p-2 ${TitleStar}`}>
                {proj.title}
              </h2>

              <p className="text-gray-300 leading-relaxed ">
                {proj.description}
              </p>

              <a
                href={proj.link}
                className="inline-block px-4 py-4 mt-1 rounded-md bg-[#6c53a7] text-white text-l 
                           hover:bg-[#5b4390] transition-all duration-300"
              >
                View Project →
              </a>
            </div>

            {/* IMAGE BLOCK */}
            <div className="md:w-1/2">
              <div className="w-full h-64 md:h-80 rounded-xl overflow-hidden border border-white/10 shadow-xl ">
                <Image
                  src={proj.image}
                  alt={proj.title}
                  className="object-cover w-full h-full "
                />
              </div>
            </div>

          </div>
        ))}

      </div>
    </div>
  );
};

export default OurWorks;
