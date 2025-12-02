"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, User, Mail, MessageSquare, CheckCircle2, Send, Phone } from "lucide-react";
import toast from "react-hot-toast";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function QuotePopup({ open, onClose }) {
  const pathname = usePathname();

  const [services, setServices] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  
  // New: Error State
  const [errors, setErrors] = useState({});

  // 1. Mapped the route /office365 to the service name
  const PAGE_SERVICE_MAP = {
    "/webdesigning": "Web Designing",
    "/ecommerce": "eCommerce",
    "/seo": "SEO",
    "/email-solutions": "Email and Domain",
    "/digitalmarketing": "Marketing",
    "/uxui": "UX / UI Design",
    "/consultancy": "Consultancy",
    "/solutions/custom-software": "Custom Software",
    "/office365": "Microsoft 365",
    "/google-business": "G-Suite",
    "/valet-parking":"Valet Parking"
  };

  useEffect(() => {
    if (open) {
      const match = PAGE_SERVICE_MAP[pathname];
      if (match) {
        setServices((prev) => prev.includes(match) ? prev : [match]);
      }
      // Clear errors when opening
      setErrors({});
    }
  }, [open, pathname]);

  if (!open) return null;

  const SERVICES = [
    "Web Designing",
    "eCommerce",
    "Microsoft 365", 
    "Email and Domain",
    "SEO",
    "UX / UI Design",
    "Marketing",
    "Consultancy",
    "Custom Software",
    "Not sure",
    "Valet Parking",
    "G-Suite"
  ];

  const toggleService = (value) => {
    setServices((prev) => {
      const newServices = prev.includes(value)
        ? prev.filter((s) => s !== value)
        : [...prev, value];
      
      // Clear service error if selection is made
      if (newServices.length > 0 && errors.services) {
        setErrors(prevErr => ({ ...prevErr, services: null }));
      }
      return newServices;
    });
  };

  // Validation Logic
  const validateForm = () => {
    let newErrors = {};
    let isValid = true;

    if (!name.trim()) {
      newErrors.name = "Full name is required";
      isValid = false;
    }

    if (!phone.trim()) {
      newErrors.phone = "Phone number is required";
      isValid = false;
    } else if (!/^\+?[0-9\s-]{7,15}$/.test(phone)) {
      newErrors.phone = "Invalid phone number";
      isValid = false;
    }

    if (!message.trim()) {
      newErrors.message = "Message details are required";
      isValid = false;
    }

    // Email is optional, but if provided, must be valid
    if (email.trim() && !/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Invalid email format";
      isValid = false;
    }

    if (services.length === 0) {
      newErrors.services = "Please select at least one service";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async () => {
    // Run Validation
    if (!validateForm()) return;

    const loading = toast.loading("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, message, services }),
      });

      const data = await res.json();

      toast.dismiss(loading);

      if (data.success) {
        toast.success("Message sent successfully!");
        onClose();
        // Reset Form
        setName(""); setEmail(""); setPhone(""); setMessage(""); setServices([]); setErrors({});
      } else {
        toast.error("Failed to send message.");
      }
    } catch {
      toast.dismiss(loading);
      toast.error("Something went wrong.");
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Background */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9998]"
          />

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.2 }}
            className="fixed max-h-[90vh] overflow-y-auto z-[9999] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white w-[92%] max-w-lg p-6 rounded-2xl shadow-2xl"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 hover:bg-gray-100 p-1.5 rounded-full transition"
            >
              <X size={24} />
            </button>

            {/* Title */}
            <h2 className="text-2xl text-center font-bold text-[#ae5c83] mb-2 momo-font">Get a Quote</h2>

            {/* SERVICES */}
            <div className="mb-4">
              <p className="font-semibold flex items-center gap-2 mb-2 text-gray-800 text-sm">
                <CheckCircle2 size={18} className="text-[#ae5c83]" />
                I’m interested in... <span className="text-red-500">*</span>
              </p>

              <div className="grid grid-cols-2 gap-2">
                {SERVICES.map((item) => {
                  const checked = services.includes(item);
                  return (
                    <label
                      key={item}
                      className={`flex items-center gap-1 p-1 rounded-lg border text-sm cursor-pointer transition select-none
                        ${checked 
                            ? "border-[#ae5c83] bg-[#ae5c83]/10 text-[#ae5c83] font-semibold"
                            : "border-slate-400 bg-white text-gray-600 hover:border-[#ae5c83]/50"
                        }
                        ${errors.services ? "border-red-300" : ""}
                      `}
                    >
                      <input
                        checked={checked}
                        type="checkbox"
                        onChange={() => toggleService(item)}
                        className="w-4 h-4 accent-[#ae5c83]"
                      />
                      <span className="text-[13px]">{item}</span>
                    </label>
                  );
                })}
              </div>
              {errors.services && (
                <p className="text-red-500 text-[11px] mt-1 font-medium">{errors.services}</p>
              )}
            </div>

            {/* FULL NAME */}
            <div className="mb-3">
              <label className="block text-xs font-bold mb-1.5 text-gray-700 uppercase">
                Full Name <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <User className="absolute left-3 top-3 text-slate-400" size={18} />
                <input
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (errors.name) setErrors({...errors, name: null});
                  }}
                  placeholder="John Doe"
                  className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-gray-900 text-sm focus:ring-4 outline-none transition-all
                    ${errors.name 
                      ? "border-red-500 bg-red-50 focus:border-red-500 focus:ring-red-100" 
                      : "border-slate-400 focus:border-[#ae5c83] focus:ring-[#ae5c83]/15"
                    }`}
                />
              </div>
              {errors.name && (
                <p className="text-red-500 text-[11px] mt-1 font-medium">{errors.name}</p>
              )}
            </div>

            {/* PHONE + EMAIL ROW */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
              {/* Phone */}
              <div>
                <label className="block text-xs font-bold mb-1.5 text-gray-700 uppercase">
                  Phone <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 text-slate-400" size={18} />
                  <input
                    value={phone}
                    onChange={(e) => {
                        setPhone(e.target.value);
                        if (errors.phone) setErrors({...errors, phone: null});
                    }}
                    placeholder="+91 98765 43210"
                    className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-gray-900 text-sm focus:ring-4 outline-none transition-all
                        ${errors.phone 
                          ? "border-red-500 bg-red-50 focus:border-red-500 focus:ring-red-100" 
                          : "border-slate-400 focus:border-[#ae5c83] focus:ring-[#ae5c83]/15"
                        }`}
                  />
                </div>
                {errors.phone && (
                    <p className="text-red-500 text-[11px] mt-1 font-medium">{errors.phone}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-bold mb-1.5 text-gray-700 uppercase">
                  Email <span className="text-gray-400 font-normal normal-case">(Optional)</span>
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 text-slate-400" size={18} />
                  <input
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                        if (errors.email) setErrors({...errors, email: null});
                    }}
                    placeholder="john@company.com"
                    className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-gray-900 text-sm focus:ring-4 outline-none transition-all
                        ${errors.email 
                          ? "border-red-500 bg-red-50 focus:border-red-500 focus:ring-red-100" 
                          : "border-slate-400 focus:border-[#ae5c83] focus:ring-[#ae5c83]/15"
                        }`}
                  />
                </div>
                {errors.email && (
                    <p className="text-red-500 text-[11px] mt-1 font-medium">{errors.email}</p>
                )}
              </div>
            </div>

            {/* MESSAGE */}
            <div className="mb-4">
              <label className="block text-xs font-bold mb-1.5 text-gray-700 uppercase">
                 Details <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <MessageSquare className="absolute left-3 top-3 text-slate-400" size={18} />
                <textarea
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                    if (errors.message) setErrors({...errors, message: null});
                  }}
                  placeholder="Tell us about your project…"
                  className={`w-full pl-10 pr-4 py-2.5 h-28 rounded-xl border text-gray-900 text-sm resize-none focus:ring-4 outline-none transition-all
                    ${errors.message 
                      ? "border-red-500 bg-red-50 focus:border-red-500 focus:ring-red-100" 
                      : "border-slate-400 focus:border-[#ae5c83] focus:ring-[#ae5c83]/15"
                    }`}
                />
              </div>
              {errors.message && (
                <p className="text-red-500 text-[11px] mt-1 font-medium">{errors.message}</p>
              )}
            </div>

            {/* SUBMIT */}
            <button
              onClick={handleSubmit}
              className="
                mx-auto
                px-6 py-2.5
               
                text-white
                rounded-lg
                text-sm font-semibold
                flex items-center justify-center gap-2
                
                active:scale-[0.96]
                border border-white/20
                backdrop-blur-sm
                 bg-gradient-to-r from-[#ae5c83] to-[#5b4390]
            shadow-[0_10px_25px_rgba(174,92,131,0.35)]
            hover:shadow-[0_15px_30px_rgba(91,67,144,0.45)]
            hover:scale-[1.06]
            transition-all duration-300 ease-out
            backdrop-blur-md
              "
            >
              <Send size={16} />
              Send Message
            </button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}