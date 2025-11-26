"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

// IMAGES
import valetparking from "../../../public/valetparking.jpg";
import analtyc from "../../../public/analtyc.jpg";
import payday from "../../../public/payday.jpg";
import bus from "../../../public/bus.jpg";
import gar from "../../../public/gar.jpg";
import ass from "../../../public/ass.jpg";
import men from "../../../public/men.jpg";

const SoftwarePage = () => {
  const PROJECTS = [
    {
      title: "aitEdge-VPS — Valet Parking Solution",
      description:
        "aitEdge-VPS transforms traditional valet operations into a fully digital and efficient experience. Designed for malls, airports, hospitals, and high-traffic venues, VPS automates vehicle intake, real-time parking bay mapping, driver allocation, tokenless retrieval, and incident logging. The built-in analytics dashboard helps management optimize traffic flow, reduce congestion, and improve visitor experience while maintaining complete transparency of revenue and staff performance.",
      image: valetparking,
    },
    {
      title: "aitEdge-MSS — Manpower Management Suite",
      description:
        "aitEdge-MSS centralizes the end-to-end lifecycle of employee logistics, including onboarding, accommodations, job site movement, document validity, visa renewals, and HR coordination. Managers get instant visibility of workforce allocation across multiple locations. The suite reduces overhead costs and eliminates manual record-keeping with automated reminders, smart filters, and live deployment charts.",
      image: men,
    },
    {
      title: "aitEdge-CAS — Competency Analytics System",
      description:
        "CAS introduces a structured and data-backed way to measure technical abilities, behavioral traits, and knowledge gaps. It supports exam creation, automated assessment scoring, performance tracking, knowledge-level indicators, and personalized growth roadmaps. CAS is widely used by educational institutes, HR departments, and training academies to modernize skill evaluations.",
      image: analtyc,
    },
    {
      title: "MRP System — Material Requirements Planning",
      description:
        "Our MRP platform calculates material requirements using sales forecasts, live stock levels, seasonal patterns, and supplier lead times. It reduces overstocking, minimizes wastage, and ensures uninterrupted production cycles. The system includes automated Bill of Materials (BOM), purchase scheduling, stock alerts, and multi-plant material balancing.",
      image: bus,
    },
    {
      title: "aitEdge-AGS — Auto Garage Automation Suite",
      description:
        "AGS replaces manual workshop operations with a streamlined digital ecosystem. Customers can book appointments, track service progress, and receive digital invoices. Workshops can track job cards, assign technicians, monitor spare parts usage, and evaluate technician performance. The interface is designed for fast-paced garage environments.",
      image: gar,
    },
    {
      title: "APS — Attendance & Payroll System",
      description:
        "APS integrates biometric attendance, shift allocation, overtime rules, leave approval workflows, salary structure configurations, and payroll processing into a single unified platform. With automated compliance reports and salary generation, HR teams can finalize payroll in minutes with full accuracy.",
      image: payday,
    },
    {
      title: "MPLS — Manufacturing Project Lifecycle System",
      description:
        "MPLS governs product development stages including feasibility study, design iterations, prototype build, engineering validation, testing, production rollout, and continuous improvement. The system highlights dependencies, aligns team responsibilities, and ensures documentation integrity for audit and compliance requirements.",
      image: ass,
    },
  ];

  return (
    <section className="bg-white min-h-screen px-4 py-24 md:px-8 overflow-hidden mt-20">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER */}
        <div className=" text-center max-w-4xl mx-auto">
          
          <h2 className="text-4xl md:text-6xl font-bold momo-font text-[#ae5c83] leading-tight mb-6">
            <span className="text-black">Our</span> Software Solutions
          </h2>
          <p className="roboto-text text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Scalable, industry-ready platforms built to automate operations,
            enhance visibility, and modernize business workflows.
          </p>
        </div>

        {/* LIST LAYOUT (Zig-Zag) */}
        <div className="flex flex-col gap-24 md:gap-40">
          {PROJECTS.map((item, i) => (
            <SolutionRow key={i} item={item} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
};

/* ----------------------------- */
/* INDIVIDUAL SOLUTION ROW       */
/* ----------------------------- */
const SolutionRow = ({ item, index }) => {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  // Check if this row is even (Index 0, 2, 4...)
  const isEven = index % 2 === 0;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 } // Trigger when 20% visible
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`
        flex flex-col md:flex-row items-center gap-12 lg:gap-20
        transition-all duration-1000 ease-out
        ${isEven ? "md:flex-row" : "md:flex-row-reverse"}
        ${isVisible 
            ? "opacity-100 translate-y-0 blur-0" 
            : "opacity-0 translate-y-20 blur-sm"
        }
      `}
    >
      {/* IMAGE SIDE */}
      <div className="w-full md:w-1/2">
        <div className="relative h-64 md:h-96 w-full rounded-3xl overflow-hidden shadow-2xl border border-gray-100 group">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {/* Subtle Overlay */}
          <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
        </div>
      </div>

      {/* TEXT SIDE */}
      <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
        {/* Number Badge */}
        <span className="text-6xl font-bold text-gray-100 select-none">
            0{index + 1}
        </span>
        
        <div>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold momo-font text-slate-900 leading-tight mb-2">
            {item.title.split("—")[0]}
          </h3>
          <span className="block text-[#ae5c83] font-medium text-lg uppercase tracking-wider">
            {item.title.split("—")[1] || "Solution"}
          </span>
        </div>

        <p className="text-slate-600 text-base md:text-lg leading-relaxed roboto-text">
          {item.description}
        </p>

        <button className="inline-flex items-center font-semibold text-slate-900 border-b-2 border-[#ae5c83] pb-1 hover:text-[#ae5c83] transition-colors">
          Explore Solution
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
        </button>
      </div>
    </div>
  );
};

export default SoftwarePage;