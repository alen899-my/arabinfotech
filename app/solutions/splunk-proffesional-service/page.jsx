"use client";

import React from "react";
import { motion } from "framer-motion";
import { Space_Mono, Roboto } from "next/font/google";
import {
  ShieldAlert,
  Activity,
  LayoutDashboard,
  Database,
  FileText,
  Zap,
  Workflow,
  GraduationCap,
  CheckCircle2,
  ArrowRight,
  MousePointerClick
} from "lucide-react";
const industries = [
  "Financial Services",
  "Healthcare",
  "Retail and E-commerce",
  "Telecommunications",
  "Manufacturing",
  "Government and Public Sector",
];
// --- FONT CONFIGURATION ---
// "Momo-font" style (Monospace/Tech) for Headings
const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-momo",
});

// "Roboto-text" for Body
const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

// --- CONSTANTS ---
const ACCENT = "#ae5c83";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function SplunkPage() {
  return (
    <main className={`${spaceMono.variable} ${roboto.variable} bg-white min-h-screen text-slate-800 selection:bg-[#ae5c83] selection:text-white`}>
      
      {/* 1. NON-HERO HEADER (Typographic Focus) */}
      <section className="pt-32  px-6 border-b border-slate-100 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={fadeInUp}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded border border-slate-200 bg-white shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#ae5c83]"></span>
              <span className="font-roboto text-xs font-bold tracking-widest uppercase text-slate-500">
                Splunk Professional Services
              </span>
            </div>
            
            <h1 className="momo-font text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-[1.1] mb-8">
              Transform Your Business with <span style={{ color: ACCENT }}>Splunk.</span>
            </h1>
            
            <h2 className="momo-font text-2xl md:text-3xl text-slate-500 mb-8 max-w-3xl leading-snug">
              Advanced Data Analytics, Security, and IT Solutions.
            </h2>

            {/* Intro Content Block */}
            <div className="roboto-text text-lg text-slate-600 leading-relaxed border-l-4 border-[#ae5c83] pl-6 max-w-3xl">
              <p>
                At <strong className="text-slate-900">ARABINFOTECH</strong>, we specialize in providing tailored Splunk Professional Services to help businesses harness the power of their data. Whether you're implementing <strong>IT Service Intelligence (ITSI)</strong> for service monitoring, optimizing your <strong>SIEM</strong> solution, or setting up advanced <strong>Dashboarding</strong>, we offer comprehensive services to help you achieve operational efficiency, security, and data-driven decision-making.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. WHY CHOOSE US (Clean Grid) */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6">
            <h3 className="font-momo text-3xl font-bold mb-2">Why Choose Us?</h3>
            <div className="h-1 w-16 bg-[#ae5c83]"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              title="Certified Experts"
              content="Our team of Splunk-certified consultants brings years of experience to ensure your environment is optimized for success."
            />
            <FeatureCard 
              title="Tailored Solutions"
              content="We customize solutions to align with your business goals, ensuring maximum return on investment."
            />
            <FeatureCard 
              title="Comprehensive Support"
              content="From initial deployment to ongoing optimization, we provide full-service support at every stage of your Splunk journey."
            />
          </div>
        </div>
      </section>
     {/* 4. INDUSTRIES TICKER */}
  



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
      {/* 3. RICH CONTENT SERVICES (Masonry Style Layout) */}
      <section className="py-12 px-6  border-y border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center ">
            <h2 className="momo-font text-4xl font-bold text-slate-900">Our Services</h2>
            <p className="roboto-text text-slate-500 ">End-to-end data intelligence capabilities.</p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {/* 1. ITSI */}
            <ServiceBlock 
              title="Splunk IT Service Intelligence (ITSI)"
              icon={Activity}
              items={[
                "Real-Time Service Monitoring: Track the health of your IT services with live health scores and performance metrics.",
                "Predictive Analytics: Use machine learning to forecast service disruptions and prevent issues before they occur.",
                "Service Dependencies and Event Correlation: Quickly identify the root cause of service issues by correlating events across multiple services.",
                "Custom Glass Tables: Build interactive dashboards to visualize service health, dependencies, and critical paths in real-time.",
                "KPI Configuration and Tuning: Set up and optimize KPIs to reflect your business objectives and ensure service reliability."
              ]}
            />

            {/* 2. SIEM */}
            <ServiceBlock 
              title="Splunk Security Information (SIEM)"
              icon={ShieldAlert}
              items={[
                "Advanced Threat Detection: Detect and mitigate security risks using Splunk's real-time analytics and threat intelligence.",
                "Incident Response Automation: Implement automated workflows to speed up incident detection, investigation, and resolution.",
                "Custom Alerts & Dashboards: Create custom security alerts and dashboards to monitor and analyze threats effectively.",
                "Compliance Reporting: Meet regulatory requirements (such as GDPR, HIPAA, PCI-DSS) with built-in or custom compliance reports.",
                "Threat Intelligence Integration: Enrich security data with external threat feeds to enhance detection and response capabilities."
              ]}
            />

            {/* 3. Dashboards */}
            <ServiceBlock 
              title="Custom Dashboards, Alerts, & Reporting"
              icon={LayoutDashboard}
              items={[
                "Real-Time Dashboards: Build interactive, intuitive dashboards that provide clear, real-time insights into business and IT operations.",
                "Automated Alerts: Configure automated alerts for critical events, such as security breaches, service disruptions, and performance issues.",
                "Custom Reports: Design automated, detailed reports for executive summaries, compliance audits, and operational analysis.",
                "Dashboard Optimization: Train your teams to use, customize, and optimize dashboards and reports for maximum impact."
              ]}
            />

            {/* 4. Big Data */}
            <ServiceBlock 
              title="Big Data Analytics"
              icon={Database}
              items={[
                "Massive Data Ingestion: Process and analyze large volumes of structured and unstructured data from a variety of sources.",
                "Real-Time Analytics: Extract actionable insights from big data through real-time analysis and visualization.",
                "Predictive Analytics: Leverage machine learning to uncover trends and patterns in big data for proactive decision-making.",
                "Custom Data Models: Build and deploy custom data models tailored to your specific business requirements."
              ]}
            />

            {/* 5. Log Management */}
            <ServiceBlock 
              title="Log Management"
              icon={FileText}
              items={[
                "Centralized Log Aggregation: Collect, index, and analyze logs from all your systems in a centralized platform for improved monitoring.",
                "Log Search and Correlation: Easily search and correlate logs to quickly identify and resolve issues.",
                "Log Retention & Compliance: Ensure compliance with regulatory requirements by managing log retention, auditing, and reporting.",
                "Automated Log Alerts: Set up alerts for specific log events, such as errors or unusual activities, to detect issues early."
              ]}
            />

            {/* 6. Event Management */}
            <ServiceBlock 
              title="Event Management"
              icon={Zap}
              items={[
                "Real-Time Event Correlation: Correlate events from multiple sources to quickly identify incidents and understand their impact.",
                "Noise Reduction: Minimize unnecessary alerts with intelligent filtering and event deduplication.",
                "Incident Prioritization: Prioritize events based on their severity and business impact for faster resolution.",
                "Event Visualization: Build dynamic, real-time event dashboards that help teams track and manage incidents more efficiently."
              ]}
            />

            {/* 7. ITSM */}
            <ServiceBlock 
              title="ITSM Integration"
              icon={Workflow}
              items={[
                "Seamless Workflow Integration: Integrate Splunk with ITSM tools like ServiceNow and Jira to streamline incident workflows.",
                "Automated Incident Creation: Automatically create incidents in your ITSM system based on Splunk alerts.",
                "Real-Time Synchronization: Keep data in sync between Splunk and ITSM platforms for real-time insights.",
                "Comprehensive Reporting: Merge insights from Splunk and ITSM tools to generate holistic reports."
              ]}
            />

            {/* 8. Training */}
            <ServiceBlock 
              title="Training and Knowledge Transfer"
              icon={GraduationCap}
              items={[
                "Hands-on Training: Train your teams on the best practices for using Splunk ITSI, SIEM, dashboards, and ITSM integration.",
                "Empowerment for Self-Sufficiency: Provide comprehensive documentation to ensure your team can manage Splunk independently.",
                "Ongoing Support: Offer ongoing support and guidance to ensure long-term success with Splunk."
              ]}
            />
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

    

    </main>
  );
}

// --- SUB-COMPONENTS ---

function FeatureCard({ title, content }) {
  return (
    <div className="p-8 border border-[#ae5c83]  hover:bg-white hover:shadow-lg transition-all duration-300 group">
      <div className="w-12 h-12 bg-white border border-slate-200 flex items-center justify-center rounded mb-6 group-hover:border-[#ae5c83]">
        <MousePointerClick className="text-slate-400 group-hover:text-[#ae5c83] transition-colors" size={24} />
      </div>
      <h4 className="momo-font text-xl font-bold text-slate-900 mb-3">{title}</h4>
      <p className="roboto-text text-slate-600 leading-relaxed text-sm">
        {content}
      </p>
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
function ServiceBlock({ title, items, icon: Icon }) {
  return (
    <motion.div 
      variants={fadeInUp}
      className="bg-white p-6 md:p-8 border border-slate-400 hover:border-[#ae5c83] transition-colors shadow-sm hover:shadow-md rounded-xl h-full flex flex-col"
    >
      <div className="flex items-start gap-4  border-b border-slate-100 pb-6">
        <div className="p-3 bg-[#ae5c83]/5 rounded-lg text-[#ae5c83]">
          <Icon size={32} />
        </div>
        <h3 className="momo-font text-2xl font-bold text-slate-900 leading-tight pt-1">
          {title}
        </h3>
      </div>
      
      <ul className="space-y-2 font-roboto flex-grow">
        {items.map((item, idx) => {
           // Split the content into Bold Header and Regular Text
           const [head, body] = item.includes(':') ? item.split(':') : [item, ''];
           
           return (
            <li key={idx} className="flex gap-3 text-slate-600">
              <CheckCircle2 size={18} className="text-[#25111b] mt-1 shrink-0" />
              <span className="text-base leading-relaxed">
                <strong className="text-slate-900 blockroboto-text">{head}{body ? ':' : ''}</strong>
                {body}
              </span>
            </li>
          );
        })}
      </ul>
    </motion.div>
  );
}