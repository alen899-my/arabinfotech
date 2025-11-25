"use client";

import { useState } from "react";
import Image from "next/image";

import { Info, BadgeInfo, Building2, Layers, Tag, ChevronDown, ChevronUp } from "lucide-react";

import f1 from "../../../public/featured/f1.png";
import f2 from "../../../public/featured/f2.png";
import f3 from "../../../public/featured/f3.png";
import f4 from "../../../public/featured/f4.png";
import f5 from "../../../public/featured/f5.png";
import f6 from "../../../public/featured/f6.png";
import f7 from "../../../public/featured/f7.png";
import f8 from "../../../public/featured/f8.png";
import f9 from "../../../public/featured/f9.png";
import f10 from "../../../public/featured/f10.png";
import f11 from "../../../public/featured/f11.png";
import f12 from "../../../public/featured/f12.png";

/* -----------------------------------------
   EXTENDED PROJECT CONTENTS  
------------------------------------------ */

const projects = [
  {
    img: f1,
    title: "Dubai Opera – Parking Cloud Solution",
    client: "Dubai Opera, Emaar, Dubai",
    category: "Software Solution • Valet Parking System",
    description:
      "A cloud-based parking management solution enabling live car tracking, payments, and valet automation.",
    aboutClient:
      "Dubai Opera is a 2,000-seat multi-format performing arts centre located in Downtown Dubai's Opera District.",
    situation:
      "Event venues struggle to handle unpredictable crowds. We implemented a cloud-based valet system with real-time tracking, handheld scanning, and wireless receipt printing.",
    projectDetails: [
      "Parking Management Cloud Solution",
      "Valet Parking Software",
    ],
  },

  {
    img: f2,
    title: "Dahab Jewellery – Ecommerce & Mobile App",
    client: "Dahab Jewellery, Dubai",
    category: "Ecommerce Development • Web + Mobile App",
    description:
      "A modern ecommerce system and mobile app built using Laravel & Flutter.",
    aboutClient:
      "Dahab is a leading online jewellery platform based in Dubai, founded in 2020.",
    situation:
      "Their old website had UX issues. We rebuilt a complete ecommerce + supplier/customer app with the latest framework stack.",
    projectDetails: [
      "Ecommerce Portal",
      "Mobile Application",
      "Responsive Web Designing",
    ],
  },

  {
    img: f3,
    title: "Kantar UK – Competency Analysis Cloud Tool",
    client: "Kantar Consulting, UK",
    category: "Software Solution • Web Application",
    description:
      "A cloud competency assessment tool supporting 2000+ users simultaneously.",
    aboutClient:
      "Kantar uses competency-driven assessments for team and individual analysis.",
    situation:
      "Their Excel-based evaluation system was slow. We built a cloud app with automated scoring & real-time reports.",
    projectDetails: [
      "Competency Analysis System",
      "Software Automation",
      "Web Application",
    ],
  },

  {
    img: f4,
    title: "Bayat Plaza – Property Sales Platform",
    client: "Bayat Plaza, Jeddah KSA",
    category: "Web Application • Ecommerce",
    description:
      "A complete real-estate ecommerce platform for property listings, sales, and rentals.",
    aboutClient:
      "Bayat Plaza features two iconic twin towers reshaping Jeddah’s skyline.",
    situation:
      "We built a custom ecommerce platform for selling and renting apartments, including CMS & lead management.",
    projectDetails: [
      "Property Ecommerce Platform",
      "Responsive Web Design",
      "CMS + Lead Handling",
    ],
  },

  {
    img: f5,
    title: "Trane UAE – Inventory & Distributor Portal",
    client: "Trane Parts UAE",
    category: "Ecommerce Portal • Warehouse System",
    description:
      "Unified ecommerce + warehouse management portal for inventory automation.",
    aboutClient: "Trane is a global leader in HVAC technologies.",
    situation:
      "Orders were scattered across multiple sources. We built a centralized ecommerce + WHM-linked solution.",
    projectDetails: [
      "Distributor Portal",
      "Warehouse Management System",
      "Ecommerce Development",
    ],
  },

  {
    img: f6,
    title: "Amer Centre – Visa Processing Automation",
    client: "Amer Centre, Dubai",
    category: "Web Application • Document Automation",
    description:
      "Online visa submission, payments, alerts and GDRFA-linked automation.",
    aboutClient:
      "Amer is the UAE’s central service hub for visa and residency processing.",
    situation:
      "We developed a full visa automation system with document upload, payments and real-time tracking.",
    projectDetails: [
      "Visa Automation System",
      "Document Management",
      "Web Application",
    ],
  },

  {
    img: f7,
    title: "Sahar Al Sharq Perfumes – B2C Ecommerce",
    client: "Sahar Al Sharq Perfume, UAE",
    category: "Ecommerce Development • Digital Marketing",
    description:
      "An ecommerce website with automated orders and lead-generation support.",
    aboutClient:
      "A premium perfume manufacturer established in 1999 in the UAE.",
    situation:
      "We created their ecommerce platform and handled digital marketing to support lead generation.",
    projectDetails: [
      "Ecommerce Portal",
      "Digital Marketing",
      "Web Development",
    ],
  },

  {
    img: f8,
    title: "Gooxoom – B2B Construction Marketplace",
    client: "Gooxoom Dubai",
    category: "Ecommerce B2B Platform",
    description:
      "A smart automated marketplace with AI search and supplier registration.",
    aboutClient:
      "Gooxoom specializes in construction-related products through a B2B portal.",
    situation:
      "We developed an automated B2B platform with dynamic pricing, supplier listings and AI product search.",
    projectDetails: [
      "B2B Marketplace",
      "AI Search Integration",
      "Ecommerce Development",
    ],
  },

  {
    img: f9,
    title: "Tabasco – Corporate Website Redesign",
    client: "Tabasco Staffing, Sharjah",
    category: "Web Development • Responsive Design",
    description:
      "A redesigned corporate website with manpower request flows.",
    aboutClient:
      "Tabasco has been delivering manpower services in UAE since 2004.",
    situation:
      "We built a modern redesign with better UX and request management functionality.",
    projectDetails: [
      "Corporate Website",
      "Responsive Web Design",
      "Web Development",
    ],
  },

  {
    img: f10,
    title: "Manpower Supply Software",
    client: "Tabasco Group, Sharjah",
    category: "Software Solution • HR Automation",
    description:
      "An HR automation system for managing 3000+ workforce operations.",
    aboutClient:
      "A major manpower solutions provider serving all UAE industries.",
    situation:
      "We automated workflow for documents, mobilization and camp management.",
    projectDetails: [
      "Manpower Software",
      "Document Management",
      "HR Automation",
    ],
  },

  {
    img: f11,
    title: "Pacific Petroleum – Corporate Website",
    client: "Pacific Petroleum Africa",
    category: "Web Development • Responsive Design",
    description:
      "A modern corporate website for African petroleum operations.",
    aboutClient:
      "A major petroleum supplier across Sub-Saharan Africa.",
    situation:
      "We designed a fast marketing website supporting Africa-wide operations.",
    projectDetails: [
      "Corporate Website",
      "Web Development",
      "Responsive Design",
    ],
  },

  {
    img: f12,
    title: "Al Murjan – Project Management System",
    client: "Al Murjan Group UAE",
    category: "Software Solution • Project Management",
    description:
      "10+ year used automation system for estimation, proposals and billing.",
    aboutClient:
      "Leading electrical installation company in the UAE.",
    situation:
      "We automated their entire project management workflow previously done manually.",
    projectDetails: [
      "Project Management Software",
      "Software Solution",
      "Workflow Automation",
    ],
  },
];
function ProjectCard({ project }) {
  const [open, setOpen] = useState(false);

  return (
    <div className=" self-start  border border-slate-400 group bg-white rounded-2xl shadow-3xl hover:shadow-2xl hover:-translate-y-2 hover:border-slate-300 transition-all duration-300 overflow-hidden">

      {/* IMAGE */}
      <div className="relative h-50 w-full overflow-hidden rounded-b-lg">
        <Image
          src={project.img}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* CONTENT */}
      <div className="p-4 flex flex-col">

        {/* Category */}
        <p className="text-[11px] momo-font font-bold uppercase tracking-widest text-purple-700/70 bg-purple-100/40 inline-block px-2 py-1 rounded-md w-fit">
          {project.category}
        </p>

        {/* Title + Expand */}
       <div className="flex justify-between items-start gap-3">
  <h3
    className="text-gray-700 text-lg sm:text-xl uppercase tracking-wide momo-font
               max-h-[48px] overflow-hidden leading-snug"
  >
    {project.title}
  </h3>

  <button
    onClick={() => setOpen(!open)}
    className="p-1 rounded-md hover:bg-slate-100 transition flex-shrink-0"
  >
    {open ? (
      <ChevronUp size={22} className="text-slate-700" />
    ) : (
      <ChevronDown size={22} className="text-slate-700" />
    )}
  </button>
</div>


        {/* EXPANDING SECTION */}
        <div
          className={`${open ? "max-h-[5000px] mt-1" : "max-h-0"} overflow-hidden transition-all duration-500`}
        >
          {/* DESCRIPTION */}
          <p className="text-slate-600 text-[15px] leading-relaxed">
            {project.description}
          </p>

          <hr className="border-slate-200 my-2" />

          {/* DETAILS */}
          <div className="space-y-3">

            {/* Client */}
            <div className="flex gap-3">
              <Building2 size={18} className="text-purple-600 mt-1" />
              <div>
                <h4 className="text-sm font-semibold text-gray-900">Client</h4>
                <p className="text-sm text-slate-600">{project.client}</p>
              </div>
            </div>

            {/* About Client */}
            <div className="flex gap-3">
              <Info size={18} className="text-purple-600 mt-1" />
              <div>
                <h4 className="text-sm font-semibold text-gray-900">About Client</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {project.aboutClient}
                </p>
              </div>
            </div>

            {/* Situation */}
            <div className="flex gap-3">
              <BadgeInfo size={18} className="text-purple-600 mt-1" />
              <div>
                <h4 className="text-sm font-semibold text-gray-900">
                  Situation & Approach
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {project.situation}
                </p>
              </div>
            </div>
          </div>

          {/* TAGS */}
          <div className="border-t border-slate-200 mt-3 pt-2">
            <div className="flex items-center gap-2 text-sm font-semibold text-gray-900 mb-2">
              <Tag size={16} className="text-purple-600" />
              <span>Technologies & Scope</span>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.projectDetails.map((d, idx) => (
                <span
                  key={idx}
                  className="px-3 py-[6px] bg-purple-50 text-purple-700 text-xs font-medium rounded-lg border border-purple-200 shadow-sm"
                >
                  {d}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

/* -----------------------------------------
   PAGE COMPONENT
------------------------------------------ */
export default function FeaturedPage() {
  return (
    <section className="bg-gradient-to-b  px-6 py-16 mt-20 md:py-24">

      {/* HEADER */}
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold momo-font text-[#ae5c83] leading-tight ">
         <span className="text-black">Our</span> Featured Projects
        </h2>
        <p className="roboto-text">
          A selection of our most impactful work across industries, showing how we solve
          complex problems with innovation and precision.
        </p>
      </div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-2">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>

    </section>
  );
}