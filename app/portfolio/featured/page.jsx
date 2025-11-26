"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Info, 
  Building2, 
  Tag, 
  ChevronDown, 
  ArrowUpRight, 
  Layers,
  Globe,
  Smartphone,
  CheckCircle2
} from "lucide-react";

// IMAGE IMPORTS
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
   DATA
------------------------------------------ */
const projects = [
  {
    id: 1,
    img: f1,
    title: "Dubai Opera – Parking Cloud",
    client: "Dubai Opera, Emaar",
    type: "Software", 
    category: "Valet Parking System",
    description: "A cloud-based parking management solution enabling live car tracking, payments, and valet automation.",
    aboutClient: "Dubai Opera is a 2,000-seat multi-format performing arts centre located in Downtown Dubai.",
    situation: "Event venues struggle to handle unpredictable crowds. We implemented a cloud-based valet system.",
    projectDetails: ["Cloud Solution", "Valet Software", "IoT Integration"]
  },
  {
    id: 2,
    img: f2,
    title: "Dahab Jewellery",
    client: "Dahab Jewellery, Dubai",
    type: "Ecommerce",
    category: "Ecommerce & App",
    description: "A modern ecommerce system and mobile app built using Laravel & Flutter.",
    aboutClient: "Dahab is a leading online jewellery platform based in Dubai, founded in 2020.",
    situation: "Rebuilt a complete ecommerce + supplier/customer app with the latest framework stack.",
    projectDetails: ["Ecommerce Portal", "Mobile App", "Flutter"]
  },
  {
    id: 3,
    img: f3,
    title: "Kantar Competency Tool",
    client: "Kantar Consulting, UK",
    type: "Software",
    category: "SaaS Application",
    description: "A cloud competency assessment tool supporting 2000+ users simultaneously.",
    aboutClient: "Kantar uses competency-driven assessments for team and individual analysis.",
    situation: "Their Excel-based evaluation system was slow. We built a cloud app with automated scoring.",
    projectDetails: ["SaaS", "Automation", "Web App"]
  },
  {
    id: 4,
    img: f4,
    title: "Bayat Plaza Property",
    client: "Bayat Plaza, KSA",
    type: "Web",
    category: "Real Estate Platform",
    description: "A complete real-estate ecommerce platform for property listings, sales, and rentals.",
    aboutClient: "Bayat Plaza features two iconic twin towers reshaping Jeddah’s skyline.",
    situation: "Built a custom ecommerce platform for selling and renting apartments with CMS.",
    projectDetails: ["Real Estate", "CMS", "Lead Gen"]
  },
  {
    id: 5,
    img: f5,
    title: "Trane Distributor Portal",
    client: "Trane Parts UAE",
    type: "Ecommerce",
    category: "B2B & Warehouse",
    description: "Unified ecommerce + warehouse management portal for inventory automation.",
    aboutClient: "Trane is a global leader in HVAC technologies.",
    situation: "Orders were scattered. We built a centralized ecommerce + WHM-linked solution.",
    projectDetails: ["B2B Portal", "Warehouse Sys", "Inventory"]
  },
  {
    id: 6,
    img: f6,
    title: "Amer Visa Automation",
    client: "Amer Centre, Dubai",
    type: "Software",
    category: "GovTech Automation",
    description: "Online visa submission, payments, alerts and GDRFA-linked automation.",
    aboutClient: "Amer is the UAE’s central service hub for visa and residency processing.",
    situation: "Developed a full visa automation system with document upload and real-time tracking.",
    projectDetails: ["Automation", "GovTech", "Payments"]
  },
  {
    id: 7,
    img: f7,
    title: "Sahar Al Sharq Perfumes",
    client: "Sahar Al Sharq, UAE",
    type: "Ecommerce",
    category: "D2C Ecommerce",
    description: "An ecommerce website with automated orders and lead-generation support.",
    aboutClient: "A premium perfume manufacturer established in 1999 in the UAE.",
    situation: "Created their ecommerce platform and handled digital marketing.",
    projectDetails: ["Ecommerce", "Marketing", "Web Dev"]
  },
  {
    id: 8,
    img: f8,
    title: "Gooxoom Marketplace",
    client: "Gooxoom Dubai",
    type: "Ecommerce",
    category: "B2B Marketplace",
    description: "A smart automated marketplace with AI search and supplier registration.",
    aboutClient: "Gooxoom specializes in construction-related products through a B2B portal.",
    situation: "Developed an automated B2B platform with dynamic pricing and AI search.",
    projectDetails: ["B2B", "AI Integration", "Marketplace"]
  },
  {
    id: 9,
    img: f9,
    title: "Tabasco Staffing",
    client: "Tabasco Staffing",
    type: "Web",
    category: "Corporate Web",
    description: "A redesigned corporate website with manpower request flows.",
    aboutClient: "Tabasco has been delivering manpower services in UAE since 2004.",
    situation: "Built a modern redesign with better UX and request management functionality.",
    projectDetails: ["Corporate", "UX/UI", "Web Dev"]
  },
  {
    id: 10,
    img: f10,
    title: "HR Automation Software",
    client: "Tabasco Group",
    type: "Software",
    category: "HR Automation",
    description: "An HR automation system for managing 3000+ workforce operations.",
    aboutClient: "A major manpower solutions provider serving all UAE industries.",
    situation: "Automated workflow for documents, mobilization and camp management.",
    projectDetails: ["HR Tech", "ERP", "Workflow"]
  },
  {
    id: 11,
    img: f11,
    title: "Pacific Petroleum",
    client: "Pacific Petroleum Africa",
    type: "Web",
    category: "Corporate Web",
    description: "A modern corporate website for African petroleum operations.",
    aboutClient: "A major petroleum supplier across Sub-Saharan Africa.",
    situation: "Designed a fast marketing website supporting Africa-wide operations.",
    projectDetails: ["Corporate", "Global", "Speed"]
  },
  {
    id: 12,
    img: f12,
    title: "Al Murjan PMS",
    client: "Al Murjan Group",
    type: "Software",
    category: "Project Management",
    description: "10+ year used automation system for estimation, proposals and billing.",
    aboutClient: "Leading electrical installation company in the UAE.",
    situation: "Automated their entire project management workflow previously done manually.",
    projectDetails: ["PMS", "Internal Tool", "Legacy"]
  },
];

/* -----------------------------------------
   COMPONENT: PROJECT CARD
------------------------------------------ */
function ProjectCard({ project }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      layout
      className={`
        relative group flex flex-col h-fit
        bg-white rounded-2xl overflow-hidden 
        shadow-lg border border-gray-100
        transition-all duration-300
        ${isOpen ? 'ring-2 ring-[#ae5c83]/10' : 'hover:shadow-xl hover:-translate-y-1'}
      `}
    >
      {/* CARD HEADER / IMAGE */}
      <div className="relative h-48 w-full flex-shrink-0 overflow-hidden">
        <Image
          src={project.img}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Badge */}
        <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-2 py-1 rounded-md shadow-sm">
           <span className="text-[10px] font-bold uppercase tracking-widest text-[#6c53a7]">
             {project.category}
           </span>
        </div>
      </div>

      {/* CARD BODY */}
      <div className="p-5 flex flex-col flex-grow">
        
        <div className="flex justify-between items-start gap-3 mb-2">
          <h3 className="text-lg momo-font font-bold text-gray-900 leading-tight">
            {project.title}
          </h3>
          <button 
             onClick={() => setIsOpen(!isOpen)}
             className={`
               flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300
               ${isOpen ? 'bg-[#ae5c83] text-white rotate-180' : 'bg-gray-100 text-gray-600 hover:bg-[#ae5c83] hover:text-white'}
             `}
          >
             <ChevronDown size={18} />
          </button>
        </div>

        <p className="text-gray-500 roboto-text text-xs leading-relaxed mb-3 line-clamp-2">
          {project.description}
        </p>

        {/* EXPANDABLE CONTENT */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className=" border-t border-gray-100 space-y-">
                
                {/* Info Blocks */}
                <div className="-space-y-5">
                    <div className="bg-[#fcfaff] p-3 rounded-xl border border-[#6c53a7]/10">
                        <div className="flex items-center gap-2 mb-1 text-[#6c53a7]">
                            <Building2 size={14} />
                            <span className="text-[15px] font-bold uppercase tracking-wider">The Client</span>
                        </div>
                        <p className="text-[13px] text-gray-600 leading-relaxed">{project.aboutClient}</p>
                    </div>

                    <div className="bg-[#fff9fb] p-3 rounded-xl border border-[#ae5c83]/10">
                        <div className="flex items-center gap-2 mb-1 text-[#ae5c83]">
                            <Info size={14} />
                            <span className="text-[15px] font-bold uppercase tracking-wider">The Challenge</span>
                        </div>
                        <p className="text-[13px] text-gray-600 leading-relaxed">{project.situation}</p>
                    </div>
                </div>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2">
                    {project.projectDetails.map((tag, idx) => (
                        <span key={idx} className="flex items-center gap-1 text-[10px] bg-gray-50 border border-gray-200 px-2 py-1 rounded-md text-gray-600 font-semibold">
                        <CheckCircle2 size={10} className="text-[#6c53a7]" /> {tag}
                        </span>
                    ))}
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Bottom Spacer to push button down if needed, or maintain alignment */}
        <div className="mt-auto pt-3">
            {!isOpen && (
                <div 
                onClick={() => setIsOpen(true)}
                className="text-[10px] font-bold uppercase tracking-wider text-[#ae5c83] cursor-pointer hover:underline flex items-center gap-1"
                >
                    Read Case Study <ArrowUpRight size={12} />
                </div>
            )}
        </div>
      </div>
    </motion.div>
  );
}

/* -----------------------------------------
   MAIN PAGE
------------------------------------------ */
export default function FeaturedPage() {
  const [filter, setFilter] = useState("All");

  const categories = [
    { label: "All Works", key: "All" },
    { label: "Software", key: "Software" },
    { label: "Ecommerce", key: "Ecommerce" },
    { label: "Websites", key: "Web" },
  ];

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.type === filter);

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-gray-900 ">
      
      {/* HEADER SECTION (Margin Top 20 as requested) */}
      <section className="mt-40 px-6 mb-12">
        <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl momo-font font-bold mb-4 text-gray-900">
               Featured <span className="text-[#ae5c83]">Projects</span>
            </h1>
            <p className="text-gray-500 roboto-text text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              A curated selection of our most impactful work across industries, showing how we solve complex problems with innovation.
            </p>

            {/* Simple Filter Bar */}
            <div className="flex flex-wrap justify-center gap-2 mt-8">
                {categories.map((cat) => (
                    <button
                    key={cat.key}
                    onClick={() => setFilter(cat.key)}
                    className={`
                        px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wide transition-all duration-300 border
                        ${filter === cat.key
                        ? "bg-[#ae5c83] text-white border-[#ae5c83]" 
                        : "bg-white text-gray-500 border-gray-200 hover:border-[#ae5c83] hover:text-[#ae5c83]"}
                    `}
                    >
                    {cat.label}
                    </button>
                ))}
            </div>
        </div>
      </section>

      {/* PROJECTS GRID (Reduced Gap) */}
      <section className="max-w-7xl mx-auto px-6">
         <motion.div 
           layout
           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
         >
           <AnimatePresence mode="popLayout">
             {filteredProjects.map((project) => (
               <ProjectCard key={project.id} project={project} />
             ))}
           </AnimatePresence>
         </motion.div>
      </section>

    </div>
  );
}