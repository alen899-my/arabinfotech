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
      className: "md:col-span-2 md:row-span-1",
      isHero: true,
    },
    {
      title: "aitEdge-MSS — Manpower Management Suite",
      description:
        "aitEdge-MSS centralizes the end-to-end lifecycle of employee logistics, including onboarding, accommodations, job site movement, document validity, visa renewals, and HR coordination. Managers get instant visibility of workforce allocation across multiple locations. The suite reduces overhead costs and eliminates manual record-keeping with automated reminders, smart filters, and live deployment charts.",
      image: men,
      className: "md:col-span-1",
      isHero: false,
    },
    {
      title: "aitEdge-CAS — Competency Analytics System",
      description:
        "CAS introduces a structured and data-backed way to measure technical abilities, behavioral traits, and knowledge gaps. It supports exam creation, automated assessment scoring, performance tracking, knowledge-level indicators, and personalized growth roadmaps. CAS is widely used by educational institutes, HR departments, and training academies to modernize skill evaluations.",
      image: analtyc,
      className: "md:col-span-1",
      isHero: false,
    },
    {
      title: "MRP System — Material Requirements Planning",
      description:
        "Our MRP platform calculates material requirements using sales forecasts, live stock levels, seasonal patterns, and supplier lead times. It reduces overstocking, minimizes wastage, and ensures uninterrupted production cycles. The system includes automated Bill of Materials (BOM), purchase scheduling, stock alerts, and multi-plant material balancing.",
      image: bus,
      className: "md:col-span-2",
      isHero: false,
    },
    {
      title: "aitEdge-AGS — Auto Garage Automation Suite",
      description:
        "AGS replaces manual workshop operations with a streamlined digital ecosystem. Customers can book appointments, track service progress, and receive digital invoices. Workshops can track job cards, assign technicians, monitor spare parts usage, and evaluate technician performance. The interface is designed for fast-paced garage environments.",
      image: gar,
      className: "md:col-span-1",
      isHero: false,
    },
    {
      title: "APS — Attendance & Payroll System",
      description:
        "APS integrates biometric attendance, shift allocation, overtime rules, leave approval workflows, salary structure configurations, and payroll processing into a single unified platform. With automated compliance reports and salary generation, HR teams can finalize payroll in minutes with full accuracy.",
      image: payday,
      className: "md:col-span-1",
      isHero: false,
    },
    {
      title: "MPLS — Manufacturing Project Lifecycle System",
      description:
        "MPLS governs product development stages including feasibility study, design iterations, prototype build, engineering validation, testing, production rollout, and continuous improvement. The system highlights dependencies, aligns team responsibilities, and ensures documentation integrity for audit and compliance requirements.",
      image: ass,
      className: "md:col-span-1",
      isHero: false,
    },
  ];

  return (
    <section className="px-4 mt-40 md:px-8 ">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-gray-200 pb-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold momo-font text-[#ae5c83] leading-tight ">
              <span className="text-black">Our</span> Software Solutions
            </h2>
            <p className="roboto-text">
              Scalable, industry-ready platforms built to automate operations, enhance visibility, and modernize business workflows through clean engineering and intelligent design.
            </p>
          </div>
        </div>

        {/* GRID (UPDATED FOR RESPONSIVENESS) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((item, i) => (
            <ProductCard key={i} item={item} />
          ))}
        </div>

      </div>
    </section>
  );
};

/* ----------------------------- */
/* PRODUCT CARD                  */
/* ----------------------------- */
const ProductCard = ({ item }) => {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`
        group relative border border-slate-400 overflow-hidden rounded-3xl bg-white shadow-sm hover:shadow-xl
        transition-all duration-500
        ${item.className}
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
      `}
    >
      {/* IMAGE (UPDATED HEIGHT FOR MOBILE) */}
      <div className="relative w-full h-52 sm:h-60 md:h-72 overflow-hidden">
        <Image
          src={item.image}
          alt={item.title}
          width={900}
          height={600}
          priority={item.isHero}
          placeholder="blur"
          sizes="(max-width: 768px) 100vw,
                 (max-width: 1200px) 50vw,
                 33vw"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
      </div>

      {/* TEXT */}
      <div className="p-6 md:p-7">
        <h3
          className={`font-bold momo-font text-slate-900 transition-colors ${
            item.isHero ? "text-2xl md:text-3xl" : "text-xl"
          }`}
        >
          {item.title}
        </h3>

       <p
  className={`
    text-slate-600 leading-relaxed
    ${
      item.isHero
        ? "text-[14px] sm:text-[15px] md:text-[16px] line-clamp-none sm:line-clamp-6"
        : "text-xs sm:text-sm line-clamp-none sm:line-clamp-7"
    }
  `}
>
  {item.description}
</p>
      </div>
    </div>
  );
};

export default SoftwarePage;
