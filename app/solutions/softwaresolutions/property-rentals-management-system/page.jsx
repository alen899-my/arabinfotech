"use client";

import Image from "next/image";
import React from "react"; 
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Building2, 
  Key, 
  Search, 
  CalendarCheck, 
  UserCheck, 
  LayoutDashboard,
  ArrowRight, 
  CheckCircle2,
  MapPin,
  Heart,
  ShieldCheck
} from "lucide-react";
import CtaBanner from "@/components/CtaBanner";
import GradientButton from "@/components/GradientButton";
// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 80, damping: 15 },
  },
};

// --- Sub-Components ---

// 1. Feature Card (Horizontal)
const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ scale: 1.02 }}
      className="flex items-start gap-4 p-5 bg-white rounded-xl border border-gray-400 shadow-sm hover:shadow-md transition-all duration-300 group"
    >
      <div className="shrink-0 p-3 bg-purple-50 text-[#6c53a7] rounded-lg group-hover:bg-[#6c53a7] group-hover:text-white transition-colors duration-300">
        <Icon size={24} />
      </div>
      <div>
        <h3 className="text-lg momo-font font-bold text-gray-800 mb-1">{title}</h3>
        <p className="text-gray-600 roboto-text text-sm leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

// 2. Role Card (Vertical)
const RoleCard = ({ icon: Icon, role, title, features }) => (
  <motion.div 
    variants={itemVariants}
    whileHover={{ y: -8 }}
    className="bg-white p-4 rounded-2xl border border-gray-400 shadow-xl shadow-purple-900/5 relative overflow-hidden"
  >
    <div className="absolute top-0 right-0 w-24 h-24 bg-[#6c53a7]/5 rounded-bl-[80px] -mr-4 -mt-4"></div>
    
    <div className="w-14 h-14 bg-purple-50 rounded-xl flex items-center justify-center text-[#6c53a7] mb-2">
      <Icon size={28} />
    </div>
    
    <span className="text-xs font-bold uppercase tracking-widest text-[#ae5c83] mb-2 block">{role}</span>
    <h3 className="text-2xl font-bold text-gray-900 mb-4 momo-font">{title}</h3>
    
    <ul className="space-y-3">
      {features.map((item, idx) => (
        <li key={idx} className="flex items-start gap-3 text-sm text-gray-600">
           <CheckCircle2 size={16} className="text-[#6c53a7] mt-0.5 shrink-0" />
           {item}
        </li>
      ))}
    </ul>
  </motion.div>
);

// 3. Stat Box
const StatBox = ({ value, label }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="flex flex-col items-center p-4"
  >
    <h4 className="text-4xl momo-font font-extrabold text-white mb-1">{value}</h4>
    <p className="text-purple-100 text-sm font-medium">{label}</p>
  </motion.div>
);

// --- Main Page Component ---
const PRMSPage = () => {

  return (
    <div className="min-h-screen w-full bg-[#FAFAFA] text-black selection:bg-[#6c53a7] selection:text-white ">
      
      {/* Background Decor */}
     

      {/* ---------- HERO SECTION ---------- */}
      <section className="relative z-10 w-full pt-26 pb-2 px-6 max-w-7xl mx-auto">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
        >
          {/* Column 1: Text Description */}
          <div className="">
            <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              aitEdge-<span className="text-[#6c53a7]">PRMS</span>
              <span className="block text-2xl md:text-3xl text-gray-500 font-medium ">Property Rentals System</span>
            </motion.h1>

            <motion.div variants={itemVariants} className="space-y- text-lg text-gray-600 leading-relaxed">
              <p>
                <strong>Arabinfotec</strong> provides all-in-one, cloud-based property management software designed by property managers. Take control of every aspect of your business—from accounting and leasing to operations and maintenance.
              </p>
              <p>
                Our system bridges the gap between Landlords and Tenants. Landlords can post properties with admin approval, while tenants can search, shortlist, and book site visits seamlessly.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="pt-4 flex gap-4">
              <GradientButton href ="/contact" text="Lets Talk" />

             
              
            </motion.div>
          </div>

          {/* Column 2: Product Visual */}
          <motion.div variants={itemVariants} className="relative">
             <motion.div 
              animate={{ rotate: [0, 2, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-gradient-to-bl from-[#6c53a7] to-[#ae5c83] rounded-2xl opacity-10 blur-2xl"
            ></motion.div>
            
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white">
              {/* Placeholder Image */}
              <Image 
                src="/rent.jpg"
                width={700}
                height={500}
                alt="aitEdge-PRMS Dashboard"
                className="w-full h-auto object-cover"
              />
              
              {/* Floating Badge: Site Visit */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
                className="absolute top-6 right-6 bg-white/95 backdrop-blur-md px-4 py-3 rounded-xl shadow-lg border border-purple-100 flex items-center gap-3"
              >
                <div className="p-1.5 bg-[#ae5c83] rounded-lg">
                    <CalendarCheck className="text-white w-4 h-4" />
                </div>
                <div>
                    <p className="text-xs text-gray-400 font-medium">Next Site Visit</p>
                    <p className="text-sm font-bold text-gray-900">Today, 2:00 PM</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ---------- STATS STRIP ---------- */}
      <motion.section 
         initial={{ opacity: 0, y: 20 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
         className="w-full bg-[#6c53a7] py-5 mb-3 shadow-inner"
      >
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-purple-400/30">
            <StatBox value="Cloud" label="Based Solution" />
            <StatBox value="360°" label="Property View" />
            <StatBox value="Admin" label="Approval System" />
            <StatBox value="Easy" label="Site Booking" />
        </div>
      </motion.section>

      {/* ---------- ECOSYSTEM ROLES (Landlord vs Tenant) ---------- */}
      <section className="relative z-10 w-full px-6 max-w-7xl mx-auto mb-2">
        <div className="text-center mb-1">
          <h2 className="text-3xl momo-font font-bold text-[#ae5c83] mb-1">One Platform, Multiple Roles</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">Connecting property owners with tenants through a seamless digital experience.</p>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* Tenant Card */}
          <RoleCard 
            icon={UserCheck}
            role="For Tenants"
            title="Search & Stay"
            features={[
              "Search by Location & Property Type",
              "Shortlist Preferred Properties",
              "Book Site Visits Online",
              "View History of Reviewed Sites",
              "Easy Member Registration"
            ]}
          />

          {/* Landlord Card */}
          <RoleCard 
            icon={Building2}
            role="For Landlords"
            title="List & Manage"
            features={[
              "Post Property Details",
              "Update Listings Instantly",
              "Admin Approval Workflow",
              "Track Tenant Enquiries",
              "Maximize Occupancy Rates"
            ]}
          />

          {/* Manager/Admin Card */}
          <RoleCard 
            icon={LayoutDashboard}
            role="For Managers"
            title="Control & Grow"
            features={[
              "Accounting & Operations",
              "Maintenance Tracking",
              "Marketing Enquiry Forms",
              "Verify Landlord Posts",
              "Complete Business Overview"
            ]}
          />
        </motion.div>
      </section>

      {/* ---------- DETAILED FEATURES GRID ---------- */}
      <section className="relative z-10 w-full px-6 max-w-7xl mx-auto mb-20">
         <div className="mb-2 border-b border-gray-100 pb-4">
             <h3 className="text-2xl font-bold text-[#ae5c83]">Key Capabilities</h3>
         </div>

         <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
         >
            <FeatureCard 
              icon={Search} 
              title="Advanced Search" 
              description="Filter properties by keywords, type, price, and location to find the perfect match instantly." 
            />
            <FeatureCard 
              icon={CalendarCheck} 
              title="Site Visit Booking" 
              description="Registered members can schedule site visits and view their upcoming appointments in their account." 
            />
            <FeatureCard 
              icon={ShieldCheck} 
              title="Admin Approval" 
              description="Quality control is ensured. Landlord posts must be reviewed and approved by Admin before going live." 
            />
            <FeatureCard 
              icon={Heart} 
              title="Shortlisting" 
              description="Tenants can save their favorite properties to a shortlist for easy comparison and decision making." 
            />
            <FeatureCard 
              icon={LayoutDashboard} 
              title="Member Dashboard" 
              description="A dedicated account area for members to manage profile, view history, and track reviewed sites." 
            />
            <FeatureCard 
              icon={MapPin} 
              title="Marketing Tools" 
              description="Integrated enquiry forms allow easy contact with the Admin for marketing and featured listings." 
            />
         </motion.div>
      </section>
            <CtaBanner/>
    </div>
  );
};

export default PRMSPage;