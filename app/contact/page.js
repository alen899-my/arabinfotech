"use client";
import toast from "react-hot-toast";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  MapPin, 
  Send, 
  User, 
  Mail, 
  Phone, 
  MessageSquare, 
  CheckCircle2,
  Globe,
  ArrowRight
} from "lucide-react";

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { type: "spring", stiffness: 100 }
  }
};

export default function ContactPage({ hideHeader = false }) {
  const [services, setServices] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toggleService = (value) => {
    setServices((prev) =>
      prev.includes(value)
        ? prev.filter((s) => s !== value)
        : [...prev, value]
    );
  };

  const SERVICES = [
    "Website Project", "Web App", "eCommerce", "SEO",
    "UX / UI Design", "Marketing", "Consultancy", "Not sure",
  ];
  const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [message, setMessage] = useState("");


  const locations = [
    {
      name: "USA Office",
      address: "447 Broadway, 2nd Floor Suite #1233, New York, NY 10013, US",
      phone: "+1 478 800 4004",
      email: "info@vstbiz.com",
      // Visual Styles
      bgClass: "bg-rose-100",
      borderClass: "border-rose-100 group-hover:border-rose-200",
      textAccent: "text-rose-600",
      markerColor: "bg-rose-500",
    },
    {
      name: "India Office",
      address: "Infopark, 1st Floor, Suite #C1-5, Cherthala, Kerala 688541, IN",
      phone: "+91 478 255 4004",
      email: "info@vstbiz.com",
      // Visual Styles
      bgClass: "bg-blue-100",
      borderClass: "border-blue-100 group-hover:border-blue-200",
      textAccent: "text-blue-600",
      markerColor: "bg-blue-500",
    },
    {
      name: "UAE Office",
      address: "R364 - Al Wasal Building, 3rd Floor, Suite #40 & 103, Dubai, AE",
      phone: "+971 4 852 0449",
      email: "info@arabinfotechllc.com",

      bgClass: "bg-emerald-100",
      borderClass: "border-emerald-100 group-hover:border-emerald-200",
      textAccent: "text-emerald-600",
      markerColor: "bg-emerald-500",
    },
  ];
  async function handleSubmit() {
  const loadingToast = toast.loading("Sending message...");

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        message,
        services,
      }),
    });

    const data = await res.json();

    toast.dismiss(loadingToast);

    if (data.success) {
      toast.success("Message delivered to Mailtrap!");
    } else {
      toast.error("Failed to send message.");
    }
  } catch (error) {
    toast.dismiss(loadingToast);
    toast.error("Error sending message.");
  }
}

  return (
    <div className="mt-20 min-h-screen  text-slate-800 overflow-x-hidden selection:bg-[#ae5c83] selection:text-white pb-20">
      
      {/* Background Decoration */}
      <div className="fixed inset-0 pointer-events-none opacity-40">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#ae5c83] rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-400 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob animation-delay-2000" />
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative max-w-6xl mx-auto mt-12 px-6 z-10"
      >
        
        {/* HEADER */}
        {!hideHeader && (
  <motion.div variants={itemVariants} className="text-center mb-12">
    <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight momo-font text-[#ae5c83]">
      Contact Us
    </h1>
    <p className="text-lg text-slate-500 max-w-2xl mx-auto roboto-text">
      Whether you need a digital transformation or a quick consultation, 
      we are ready to listen.
    </p>
  </motion.div>
)}


        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {/* LEFT COLUMN: FORM */}
          <motion.div variants={itemVariants} className="lg:col-span-7">
            <div className="backdrop-blur-xl bg-white/80 border border-slate-300 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-3xl p-8">
              
              {/* SECTION: SERVICES */}
              <div className="mb-8">
                <h2 className="text-xl font-bold momo-font text-slate-800 flex items-center gap-2 mb-4">
                  <CheckCircle2 size={20} className="text-[#ae5c83]" />
                  I'm interested in...
                </h2>
                <div className="flex flex-wrap gap-3">
                  {SERVICES.map((item) => (
                    <motion.button
                      key={item}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => toggleService(item)}
                      className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 border
                        ${
                          services.includes(item)
                            ? "bg-[#ae5c83] text-white border-[#ae5c83] shadow-lg shadow-[#ae5c83]/25"
                            : "bg-white text-slate-600 border-slate-400 hover:border-[#ae5c83] hover:text-[#ae5c83]"
                        }
                      `}
                    >
                      {item}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* SECTION: CONTACT INPUTS */}
              <div className="space-y-6">
                <h2 className="text-xl momo-font font-bold text-slate-800 flex items-center gap-2">
                  <User size={20} className="text-[#ae5c83]" />
                  About you
                </h2>

                <div className="grid md:grid-cols-2 gap-5">
                  <div className="group">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1 block">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-4 top-3.5 text-slate-400 w-4 h-4 group-focus-within:text-[#ae5c83] transition-colors" />
                      <input 
                        type="text" value={name} required
  onChange={(e) => setName(e.target.value)}
                        className="w-full  border border-slate-400 text-slate-800 text-sm rounded-xl pl-10 pr-4 py-3 outline-none focus:bg-white focus:border-[#ae5c83] focus:ring-4 focus:ring-[#ae5c83]/10 transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>

                  <div className="group">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1 block">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-3.5 text-slate-400 w-4 h-4 group-focus-within:text-[#ae5c83] transition-colors" />
                      <input 
                        type="email"  
  value={email}
  onChange={(e) => setEmail(e.target.value)}
                        className="w-full  border border-slate-400 text-slate-800 text-sm rounded-xl pl-10 pr-4 py-3 outline-none focus:bg-white focus:border-[#ae5c83] focus:ring-4 focus:ring-[#ae5c83]/10 transition-all"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>
                </div>

                <div className="group">
                   <label className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1 block">Message</label>
                   <div className="relative">
                      <MessageSquare className="absolute left-4 top-3.5 text-slate-400 w-4 h-4 group-focus-within:text-[#ae5c83] transition-colors" />
                      <textarea  value={message}
  onChange={(e) => setMessage(e.target.value)}
                        className="w-full  border border-slate-400 text-slate-800 text-sm rounded-xl pl-10 pr-4 py-3 h-32 outline-none focus:bg-white focus:border-[#ae5c83] focus:ring-4 focus:ring-[#ae5c83]/10 transition-all resize-none"
                        placeholder="Tell us a bit about your project goals..."
                      />
                   </div>
                </div>
                
                <div className="pt-2">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleSubmit}
                    className="w-full bg-gradient-to-r from-[#ae5c83] to-[#8a4262] text-white font-semibold rounded-xl py-4 shadow-xl shadow-[#ae5c83]/20 hover:shadow-2xl hover:shadow-[#ae5c83]/30 transition-all flex items-center justify-center gap-2 group"
                  >
                    <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                    <span>Send Message</span>
                  </motion.button>
                </div>

              </div>
            </div>
             {/* Support Note */}
             <div className="mt-8 bg-[#ae5c83]/5 rounded-xl p-5 border border-[#ae5c83]/10 text-center">
                <p className="text-sm text-slate-600 font-medium">
                  Need immediate assistance?
                </p>
                <a href="mailto:support@vstbiz.com" className="text-[#ae5c83] text-sm font-bold hover:underline mt-1 block">
                  Contact Support Team &rarr;
                </a>
             </div>
          </motion.div>

          {/* RIGHT COLUMN: LOCATION CARDS */}
          <motion.div variants={itemVariants} className="lg:col-span-5 lg:sticky lg:top-10">
             
             <div className="mb-6 flex items-center gap-3">
               <div className="bg-[#ae5c83]/10 p-2 rounded-lg">
                 <Globe className="text-[#ae5c83]" size={24} />
               </div>
               <div className="bg-[#ae5c83">
                 <h3 className="font-bold text-lg text-slate-800 leading-tight">Global Presence</h3>
                 <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">3 Offices Worldwide</p>
               </div>
             </div>

             <div className="flex flex-col gap-4">
               {locations.map((loc, i) => (
                 <motion.div 
                   key={i}
                   variants={itemVariants}
                   whileHover={{ y: -5 }}
                   className={`
                     group ${loc.bgClass} relative p-6 rounded-2xl border 
                     shadow-sm hover:shadow-xl transition-all duration-300
                     ${loc.bgClass} ${loc.borderClass}
                   `}
                 >
                    {/* Color Stripe Indicator */}
                    <div className={`absolute top-6 left-0 w-1 h-12 rounded-r-full ${loc.markerColor}`} />

                    <div className="pl-3">
                      <h4 className="font-bold text-lg text-slate-800 mb-1 flex items-center justify-between">
                        {loc.name}
                        <ArrowRight className={`opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all ${loc.textAccent}`} size={18} />
                      </h4>
                      
                      <div className="flex items-start gap-3 mt-3">
                        <MapPin size={16} className={`mt-1 shrink-0 transition-colors ${loc.textAccent}`} />
                        <p className="text-sm text-slate-600 leading-relaxed max-w-[90%]">
                          {loc.address}
                        </p>
                      </div>

                      <div className="flex flex-col gap-2  pt-4 border-t border-black/5">
                        <div className={`flex items-center gap-3 text-sm text-slate-500 hover:${loc.textAccent} transition-colors cursor-pointer w-max`}>
                          <Phone size={14} /> <span>{loc.phone}</span>
                        </div>
                        <div className={`flex items-center gap-3 text-sm text-slate-500 hover:${loc.textAccent} transition-colors cursor-pointer w-max`}>
                          <Mail size={14} /> <span>{loc.email}</span>
                        </div>
                      </div>
                    </div>
                 </motion.div>
               ))}
             </div>

            

          </motion.div>

        </div>
      </motion.div>
    </div>
  );
}