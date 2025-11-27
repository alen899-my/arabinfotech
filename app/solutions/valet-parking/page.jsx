"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import {
  CheckCircle,
  Clock,
  Zap,
  Smartphone,
  CarFront,
  ReceiptText,
  LayoutDashboard,
  ArrowRight, Hotel,
  Plane,
  Building2,
  ShoppingCart,
  Landmark, 
  Home,SquareParking,
  Key,
  CreditCard,
  MapPin,
  UserCog
} from "lucide-react";

import vp from "@/public/vp.jpg"
import Image from "next/image"; 
// Animation variants for stagger effects
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};
const accentColor = "#ae5c83";

  const steps = [
    {
      id: "01",
      title: "Client Check In",
      description:
        "When the client arrives with the car, the valet driver ask for the mobile number and sends an SMS to the client with all details which allows the client to handover the car in less than a minute.",
      icon: <Smartphone size={32} />,
    },
    {
      id: "02",
      title: "Park Vehicle",
      description:
        "The valet parking driver then parks the car and update all the parking details easily from his mobile with one click.",
      icon: <SquareParking size={32} />,
    },
    {
      id: "03",
      title: "Request Vehicle",
      description:
        "Customers present their ticket, initiating a request; the valet attendant locates the vehicle, marking it for retrieval.",
      icon: <ReceiptText size={32} />,
    },
    {
      id: "04",
      title: "On the Way",
      description:
        "After retrieval, the valet attendant drives the vehicle to the designated pick-up area.",
      // Using UserCog to represent the valet attendant driver
      icon: <UserCog size={32} />,
    },
    {
      id: "05",
      title: "Ready for Collection",
      description:
        "The vehicle is parked in the pick-up area, and the customer is notified that it's ready for collection.",
      icon: <Key size={32} />,
    },
    {
      id: "06",
      title: "Client Check-out",
      description:
        "Once the client get the vehicle the payment method and amount is noted in the system the customer has a rating and feed back option along with online payment.",
      icon: <CreditCard size={32} />,
    },
  ];
  const industries = [
  "5-star Hotels",
  "Airports",
  "Hospitals",
  "Shopping Malls",
  "Government Offices",
  "Residential And Commercial properties",
];
const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const featuresList = [
  {
    icon: <ReceiptText size={28} />,
    title: "Maximize Revenue",
    description:
      "Automated billing, dynamic pricing capabilities, and faster turnover to maximize profitability per space.",
  },
  {
    icon: <Clock size={28} />,
    title: "Faster Operations",
    description:
      "Streamlined digital check-in/check-out significantly reduces wait times and improves overall parking flow.",
  },
  {
    icon: <CheckCircle size={28} />,
    title: "Reduce Liability",
    description:
      "Digital logs, photo capture on arrival, and timestamps eliminate disputes and protect operators.",
  },
  {
    icon: <LayoutDashboard size={28} />,
    title: "Real-time Tracking",
    description:
      "Admins get a bird's-eye view of vehicle status from arrival to departure across multiple locations.",
  },
  {
    icon: <Smartphone size={28} />,
    title: "Mobile-First Design",
    description:
      "Device-agnostic application tailored for fast-paced valet staff and a seamless mobile web experience for guests.",
  },
  {
    icon: <Zap size={28} />,
    title: "Multi-User Support",
    description:
      "Scalable architecture supporting complex operations like hotels, events, or city-wide valet systems with varied user roles.",
  },
];


export default function ValetParkingModernPage() {
  // Accent color defined for easy reuse
  const accentColor = "#ae5c83";

  return (
    <div className="w-full  overflow-hidden font-sans">
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full pt-24 pb-16 md:pt-32 md:pb-24 px-6">
        {/* Subtle Background Element */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-[#ae5c83]/10 to-transparent rounded-bl-full -z-10 blur-3xl"></div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Text Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="text-left space-y-6"
          >
            <motion.div variants={itemVariants}>
             <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded border border-slate-200 bg-white shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#ae5c83]"></span>
              <span className="font-roboto text-xs font-bold tracking-widest uppercase text-slate-500">
                Valet Parking Service
              </span>
            </div>
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight momo-font">
                Reimagining the
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#ae5c83] to-[#8a4262]">
                  Valet Experience.
                </span>
              </h1>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-lg text-slate-600 leading-relaxed max-w-lg"
            >
              The first and last impression matters. Elevate your guest
              experience with our world-class, paperless valet parking automation
              platform designed for modern venues.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
             
<Link href="/contact">
  <button className="px-8 py-3 bg-[#ae5c83] text-white rounded-lg font-semibold shadow-lg shadow-[#ae5c83]/20 hover:bg-[#964a6d] transition-all flex items-center gap-2">
    Request Demo <ArrowRight size={18} />
  </button>
</Link>
           <button
  onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}
  className="px-8 py-3 bg-white text-slate-700 border border-slate-200 rounded-lg font-semibold hover:border-[#ae5c83]/50 hover: transition-all"
>
  View Features
</button>

            </motion.div>
          </motion.div>

          {/* Hero Video/Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative"
          >
            {/* Stylized container for the video to make it look like software */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 aspect-video z-10">
               {/* Optional overlay to make text pop before play */}
              <div className="absolute inset-0 bg-black/10 pointer-events-none"></div>
              <video
                 autoPlay
      muted
      loop
      playsInline
                className="w-full h-full object-cover"
                src="/videos/valet.mp4"
                poster="/api/placeholder/800/450" // Replace with a real poster image of your software dashboard
              />
            </div>
            {/* Decorative elements behind video */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#ae5c83] rounded-xl -z-10 opacity-20"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-[#ae5c83]/30 rounded-full -z-10"></div>
          </motion.div>
        </div>
      </section>

      {/* ================= THE PROBLEM & SOLUTION ================= */}
      <section className="py-20 px-6 bg-white">
      {/* Heading */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 momo-font">
          The Digital Transformation of Parking
        </h2>
        <p className="text-xl text-slate-600 leading-relaxed">
          Parking is often the{" "}
          <strong className="text-[#ae5c83]">first and last interaction</strong>{" "}
          a customer has with a business — meaning a poor experience can affect
          their decision to return.
        </p>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Text Block */}
        <div className="space-y-6 text-slate-600 leading-relaxed">
          <h3 className="text-2xl font-bold text-slate-900 momo-font">
            Seamless, Fast, and Transparent.
          </h3>

          <p>
            Our innovative software brings digital transformation to parking
            operations with real-time tracking, automated workflows, and a
            simplified user experience that puts convenience first.
          </p>

          <p>
            Whether you're managing a hotel, airport, mall, hospital, or
            large event venue — our system adapts to any parking structure and
            increases operational efficiency from day one.
          </p>

          <ul className="space-y-3 pt-4">
            <li className="flex items-center gap-3 font-medium text-slate-800">
              <CheckCircle size={20} className="text-[#ae5c83]" />
              Eliminate manual paper tickets completely.
            </li>
            <li className="flex items-center gap-3 font-medium text-slate-800">
              <CheckCircle size={20} className="text-[#ae5c83]" />
              Reduce disputes, operational liability, and confusion.
            </li>
          </ul>
        </div>

        {/* Image + Floating Notification */}
        <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg border border-slate-200 ">
          <Image
            src={vp}
            alt="Valet Parking Software Preview"
            fill
            className="object-cover"
        
            loading="lazy"
          />

          {/* Floating card animation */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-6 right-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 z-10 flex items-center gap-3"
          >
            <div className="bg-green-100 p-2 rounded-full text-green-600">
              <CarFront size={20} />
            </div>
            <div className="leading-tight">
              <p className="text-sm font-bold text-slate-900">Vehicle Requested</p>
              <p className="text-xs text-slate-500">Ticket #A452 • 2 mins ago</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
 <section className="py-10 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center mb-6">
        <h4 className="momo-font text-sm font-bold text-slate-400 uppercase tracking-widest">
          Industries We Serve
        </h4>
      </div>

      {/* Marquee Container */}
      <div className="relative flex w-full overflow-hidden mask-gradient">
        
        {/* Gradient Masks for smooth fade in/out effect */}
        <div className="absolute top-0 left-0 z-10 w-20 h-full bg-gradient-to-r from-white to-transparent pointer-events-none" />
        <div className="absolute top-0 right-0 z-10 w-20 h-full bg-gradient-to-l from-white to-transparent pointer-events-none" />

        {/* Moving Track 1 */}
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex flex-shrink-0 gap-6 px-3"
        >
          {industries.map((ind, i) => (
            <IndustryTag key={`a-${i}`} text={ind} />
          ))}
        </motion.div>

        {/* Moving Track 2 (Duplicate for seamless loop) */}
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex flex-shrink-0 gap-6 px-3"
        >
          {industries.map((ind, i) => (
            <IndustryTag key={`b-${i}`} text={ind} />
          ))}
        </motion.div>

        {/* Moving Track 3 (Extra buffer for wide screens) */}
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex flex-shrink-0 gap-6 px-3"
        >
          {industries.map((ind, i) => (
            <IndustryTag key={`c-${i}`} text={ind} />
          ))}
        </motion.div>
      </div>
    </section>

  <section className="py-20 px-6  border-y border-slate-200 font-sans">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 momo-font mb-4">
            How It Works
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            A streamlined, contactless journey from arrival to departure.
          </p>
        </div>

        {/* 2-Column Grid Layout similar to the image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex justify-between items-start gap-4 hover:shadow-md transition-shadow"
            >
              {/* Left Side: Number and Text */}
              <div className="flex gap-4 items-start">
                {/* Number Badge */}
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg"
                  style={{ backgroundColor: accentColor }}
                >
                  {step.id}
                </div>
                 {/* Text Content */}
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Right Side: Icon */}
              <div className="flex-shrink-0" style={{ color: accentColor }}>
                {step.icon}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

      {/* ================= KEY FEATURES & BENEFITS GRID ================= */}
      <section id="features" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 momo-font">
              Powerful Features, Tangible Results
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Drive revenue growth, enhance security, and improve operational efficiency.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {featuresList.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="p-8 bg-white rounded-2xl shadow-md border border-slate-100 hover:shadow-xl transition-all duration-300 group"
              >
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-white shadow-lg transition-transform group-hover:scale-110`}
                  style={{ backgroundColor: accentColor }}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      <section className="relative z-10 -mt-5 px-4 ">
        <div className="max-w-4xl mx-auto text-center   py-14 px-6 ">

          <h3 className="text-3xl md:text-4xl momo-font font-bold text-[#ae5c83]">
            Explore Our Solutions
          </h3>

          <p className="text-gray-500 text-s leading-relaxed mt-1 momo-font">
            Discover a variety of innovative digital tools and technologies 
            tailored to elevate your business performance and accelerate growth.
          </p>

          <a
            href="/contact"
            className="inline-block mt-6 momo-font px-6 py-4 bg-[#6c53a7] text-white rounded-xl font-semibold shadow-lg hover:bg-[#5b4390] transition-all"
          >
            Portfolio →
          </a>

        </div>
      </section>

    </div>
  );
}

function IndustryTag({ text }) {
  return (
    <span className="flex-shrink-0 px-8 py-3 momo-font text-gray-600  border border-slate-300 rounded-lg shadow-sm whitespace-nowrap text-lg">
      {text}
    </span>
  );
}