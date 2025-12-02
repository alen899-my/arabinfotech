"use client";

import Image from "next/image";
import React from "react"; 
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Car, 
  Wrench, 
  FileText, 
  Smartphone, 
  BarChart3, 
  Users,
  ArrowRight, 
  CheckCircle2,
  Settings
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
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15,
    },
  },
};

// --- Sub-Components ---

// Horizontal Card (Icon Left, Text Right) - Updated Colors
const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ scale: 1.02 }}
      className="flex items-start gap-4 p-5 bg-white rounded-xl border border-slate-400 shadow-sm hover:shadow-md transition-all duration-300 group"
    >
      
      <div>
        <h3 className="text-lg momo-font font-bold text-gray-800 mb-1">{title}</h3>
        <p className="text-gray-600 roboto-text text-sm leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

const StatBox = ({ value, label }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="flex flex-col items-center p-4"
  >
    <h4 className="text-4xl momo-font font-extrabold text-white mb-1">
      {value}
    </h4>
    <p className="text-purple-100  text-sm font-medium">{label}</p>
  </motion.div>
);

// --- Main Page Component ---
const GaragePage = () => {

  return (
    <div className="min-h-screen w-full bg-[#FAFAFA] text-black selection:bg-[#6c53a7] selection:text-white pb-10">
      
      {/* Background Decor - Updated to Purple/Pink theme */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] rounded-full bg-[#6c53a7]/5 blur-[90px]" />
        <div className="absolute bottom-[10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[#ae5c83]/5 blur-[100px]" />
      </div>

      {/* ---------- HERO SECTION ---------- */}
      <section className="relative z-10 w-full pt-20 pb-2 px-6 max-w-7xl mx-auto">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
        >
          {/* Column 1: Product Visual (Left) */}
          <motion.div variants={itemVariants} className="relative order-last lg:order-first">
             <motion.div 
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-gradient-to-bl from-[#6c53a7] to-[#ae5c83] rounded-2xl opacity-10 blur-2xl"
            ></motion.div>
            
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white">
              <Image 
                src="/gara.jpg"
                width={700}
                height={500}
                alt="aitEdge-AGS Garage Interface"
                className="w-full h-auto object-cover"
              />
              
              {/* Floating Badge */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="absolute bottom-6 left-6 bg-gray-900/90 backdrop-blur-md px-4 py-3 rounded-xl shadow-lg border border-gray-700 flex items-center gap-3"
              >
                <div className="p-1.5 bg-[#ae5c83] rounded-lg">
                    <Settings className="text-white w-4 h-4 animate-spin-slow" />
                </div>
                <div>
                    <p className="text-xs text-gray-400 font-medium">System Status</p>
                    <p className="text-sm font-bold text-white">Optimal Performance</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Column 2: Text Description (Right) */}
          <div className="space-y-">
            <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              aitEdge-<span className="text-[#6c53a7]">AGS</span>
              <span className="block text-2xl md:text-3xl text-gray-500 font-medium mt-2">Auto Garage System</span>
            </motion.h1>

            <motion.div variants={itemVariants} className="space-y- text-lg text-gray-600 leading-relaxed">
              <p>
                <strong>Arabinfotec</strong> presents a fully automated Garage Management System (GMS). This isn't just software it's a complete ecosystem to manage your workshop, inventory, and customer website from a single dashboard.
              </p>
              <p>
                Transition to a paperless environment. Our modern cloud architecture ensures you can track job cards, monitor mechanic efficiency, and handle billing from anywhere in the world.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="pt-4 flex gap-4">
              <GradientButton href="/contact" text="Get Started" />
               <Link href="#carfeatures">
    <motion.button 
      whileHover={{ scale: 1.05, backgroundColor: "#f3f4f6" }}
      whileTap={{ scale: 0.95 }}
      className="px-6 py-3 bg-white text-gray-700 border border-gray-500 rounded-xl font-bold hover:shadow-lg transition-all"
    >
      View Features
    </motion.button>
  </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ---------- STATS STRIP (Updated to Theme Purple) ---------- */}
      <motion.section 
         initial={{ opacity: 0, y: 20 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
         className="w-full bg-[#6c53a7] py-5 mb-3 shadow-inner"
      >
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-purple-400/30">
            <StatBox value="100%" label="Paperless Workflow" />
            <StatBox value="CMS" label="Integrated Website" />
            <StatBox value="24/7" label="Cloud Access" />
            <StatBox value="ROI" label="Cost Saving" />
        </div>
      </motion.section>

      {/* ---------- MODULES GRID ---------- */}
      <section id="carfeatures" className="relative z-10 w-full px-6 max-w-7xl mx-auto ">
        <div className="text-center mb-2">
          <h2 className="text-3xl momo-font font-bold text-[#ae5c83] mb-1">System Capabilities</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">Everything you need to run a modern auto service center, packed into one intuitive interface.</p>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          <FeatureCard 
            icon={Wrench}
            title="Job Card Management"
            description="Create, track, and close job cards digitally. Assign mechanics and track labor hours accurately against every task."
          />
          <FeatureCard 
            icon={Car}
            title="Vehicle History"
            description="Maintain detailed service history records (VIN, mileage, repairs) for every vehicle to improve customer trust."
          />
          <FeatureCard 
            icon={FileText}
            title="Invoicing & Billing"
            description="Generate professional, tax-compliant invoices instantly. Manage VAT, discounts, and spare parts pricing automatically."
          />
          <FeatureCard 
            icon={Users}
            title="Customer CRM"
            description="A built-in CRM to manage customer profiles, send service reminders via SMS/Email, and boost retention."
          />
          <FeatureCard 
            icon={Smartphone}
            title="Responsive Web App"
            description="Access the system from any device—tablet, mobile, or desktop. Perfect for mechanics working on the floor."
          />
          <FeatureCard 
            icon={BarChart3}
            title="Business Analytics"
            description="Get actionable insights into daily revenue, mechanic performance, and inventory turnover with real-time reports."
          />
        </motion.div>
      </section>

      {/* ---------- WHY CHOOSE LIST ---------- */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="w-full py-5 px-6 bg-white border-t border-gray-100"
      >
        <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl momo-font font-bold text-[#ae5c83] mb-2">Why Garages Choose aitEdge-AGS?</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-left">
              {[
                "Fully automated & paperless operations",
                "Integrated CMS for managing your garage website",
                "Cloud-based secure data storage",
                "Reduce administrative costs & save time",
                "Real-time Inventory Tracking",
                "Multi-User Role Management"
              ].map((item, idx) => (
                <motion.div 
                  key={idx} 
                  variants={itemVariants}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-purple-50 transition-colors"
                >
                  <CheckCircle2 className="text-[#ae5c83] shrink-0" size={20} />
                  <span className="text-gray-700 font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
        </div>
      </motion.section>
           <CtaBanner/>
    </div>
  );
};

export default GaragePage;