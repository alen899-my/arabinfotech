"use client";

import Image from "next/image";
import React from "react"; 
import { motion } from "framer-motion"; // Removed useScroll/useTransform
import { 
  Users, 
  CreditCard, 
  CalendarClock, 
  CloudLightning, 
  Activity,
  ArrowRight, 
  Banknote,
  CheckCircle2
} from "lucide-react";

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

const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -8, scale: 1.02 }}
      className="relative flex flex-col items-start p-6 bg-white rounded-2xl border border-[#6c53a7] shadow-sm transition-all duration-300 group overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#6c53a7]/0 via-[#6c53a7]/5 to-[#ae5c83]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      <div className="relative z-10">
        <div className="p-3 bg-purple-50 text-[#6c53a7] rounded-lg mb-4 group-hover:bg-[#6c53a7] group-hover:text-white transition-colors duration-300">
          <Icon size={24} />
        </div>
        <h3 className="text-lg momo-font font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 roboto-text text-sm leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

const StatBox = ({ value, label }) => (
  <motion.div 
    whileHover={{ scale: 1.05 }}
    className="flex flex-col border rounded-md border-[#6c53a7] items-center md:items-start p-4 bg-white hover:shadow-md transition-shadow"
  >
    <h4 className="text-3xl font-extrabold text-[#6c53a7] mb-1">
      {value}
    </h4>
    <p className="text-gray-500 text-sm font-medium">{label}</p>
  </motion.div>
);

// --- Main Page Component ---
const Page = () => {
  // REMOVED: useScroll and useTransform logic so hero stays visible

  return (
    <div className="min-h-screen w-full bg-[#FAFAFA] text-black selection:bg-[#6c53a7] selection:text-white pb-20">
      
      {/* Background Decor */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[30%] h-[30%] rounded-full bg-[#6c53a7]/5 blur-[80px]" />
        <div className="absolute bottom-[20%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[#ae5c83]/5 blur-[100px]" />
      </div>

      {/* ---------- PRODUCT OVERVIEW SECTION ---------- */}
      <section className="relative z-10 w-full pt-12 pb-6 px-6 max-w-7xl mx-auto">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          // REMOVED: style={{ opacity, scale, y }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center origin-top"
        >
          {/* Left Column: Text Description */}
          <div className="space-y-6">
            <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              aitEdge-<span className="text-[#6c53a7]">APS</span>
              <span className="block text-2xl md:text-3xl text-gray-500 font-medium mt-2">Attendance Payroll System</span>
            </motion.h1>

            {/* FIXED: Removed 'prose' so text-gray-600 works correctly */}
            <motion.div variants={itemVariants} className="space-y-4 text-lg text-gray-600 leading-relaxed">
              <p>
                <strong>Arabinfotec</strong> is a leading HRMS & Payroll Platform. Automate HR tasks & employee attendance in minutes with our best-in-class software.
              </p>
              <p>
                Using this system, we manage Payroll Execution, Leave & Attendance Management & Payout Processing and other HR processes efficiently. Manage your attendance and payroll anytime, anywhere, on any platform.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-3 mt-4">
              {["Fastest growing platform in UAE", "Cloud-based", "Secure"].map((tag, i) => (
                <span key={i} className="px-3 py-1 bg-purple-50 text-[#6c53a7] text-xs font-semibold rounded-full border border-purple-100">
                  {tag}
                </span>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="pt-4 flex gap-4">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-[#6c53a7] momo-font hover:bg-[#5a448d] text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-all flex items-center gap-2"
              >
                Get Started
                <ArrowRight size={18} />
              </motion.button>
            </motion.div>
          </div>

          {/* Right Column: Product Visual */}
          <motion.div variants={itemVariants} className="relative">
            <motion.div 
              animate={{ rotate: [2, 4, 2], translateY: [4, 8, 4] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-gradient-to-tr from-[#6c53a7] to-[#ae5c83] rounded-2xl opacity-10 blur-xl"
            ></motion.div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100 bg-white">
              <Image 
                src="/attend.jpg"
                width={700}
                height={500}
                alt="aitEdge-APS Dashboard Interface"
                className="w-full h-auto object-cover"
              />
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
                className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-lg shadow-lg border border-gray-100 flex items-center gap-2"
              >
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-xs font-bold text-gray-700">System Live</span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ---------- KEY CAPABILITIES GRID ---------- */}
      <section className="relative z-10 w-full py-1 px-6 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="mb-1">
            <h2 className="text-2xl momo-font font-bold text-[#ae5c83] mb-1">System Modules</h2>
            <p className="text-gray-500">Comprehensive tools designed for modern HR needs.</p>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3"
          >
            <FeatureCard 
              icon={CreditCard}
              title="Payroll Execution"
              description="Automate salary calculations with absolute precision, accounting for overtime, deductions, and bonuses instantly."
            />
            <FeatureCard 
              icon={CalendarClock}
              title="Leave Management"
              description="Streamline leave requests and approvals. Track balances and accruals in real-time for all employees."
            />
            <FeatureCard 
              icon={Users}
              title="Attendance Tracking"
              description="Capture employee clock-ins and outs effortlessly with biometric integration and mobile support."
            />
            <FeatureCard 
              icon={Banknote}
              title="Payout Processing"
              description="Secure and fast payout processing ensuring your workforce is paid on time, every time."
            />
            <FeatureCard 
              icon={CloudLightning}
              title="Cloud Accessibility"
              description="Access your HR data securely from anywhere in the world. Fully optimized for web and mobile."
            />
            <FeatureCard 
              icon={Activity}
              title="Compliance & Reports"
              description="Stay compliant with UAE labor laws. Generate comprehensive reports for management review."
            />
          </motion.div>
        </div>
      </section>

      {/* ---------- TECHNICAL HIGHLIGHTS & STATS ---------- */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="w-full py-1 px-6 max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left: Bullet Points */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl momo-font font-bold  text-[#ae5c83] mb-1">Why Choose aitEdge-APS?</h3>
            <ul className="space-y-4">
              {[
                "Zero processing errors in payroll computation",
                "Real-time synchronization with biometric devices",
                "Automated end-of-service gratuity calculations",
                "Employee self-service portal included"
              ].map((item, idx) => (
                <motion.li 
                  key={idx} 
                  variants={itemVariants}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="text-[#ae5c83] mt-1 shrink-0" size={20} />
                  <span className="text-gray-700">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right: Quick Stats */}
          <motion.div variants={itemVariants} className="rounded-2xl p-8 border border-gray-100 bg-white/50 backdrop-blur-sm">
            <div className="grid grid-cols-2 gap-8">
              <StatBox value="100%" label="Payroll Accuracy" />
              <StatBox value="0" label="Processing Errors" />
              <StatBox value="24/7" label="Platform Uptime" />
              <StatBox value="UAE" label="Labor Law Compliant" />
            </div>
          </motion.div>

        </div>
      </motion.section>

    </div>
  );
};

export default Page;