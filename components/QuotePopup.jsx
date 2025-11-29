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

  // 1. Mapped the route /office365 to the service name
  const PAGE_SERVICE_MAP = {
    "/webdesigning": "Web Designing",
    "/ecommerce": "eCommerce",
    "/seo": "SEO",
    "/email-solutions": "Domain",
    "/digitalmarketing": "Marketing",
    "/uxui": "UX / UI Design",
    "/consultancy": "Consultancy",
    "/solutions/custom-software": "Custom Software",
    "/office365": "Microsoft 365", // Added Route
  };

  useEffect(() => {
    if (open) {
      const match = PAGE_SERVICE_MAP[pathname];
      if (match) {
        // If it's the office365 page, ensure we don't duplicate if already selected
        setServices((prev) => prev.includes(match) ? prev : [match]);
      }
    }
  }, [open, pathname]);

  if (!open) return null;

  // 2. Added "Microsoft 365" to the checkboxes list
  const SERVICES = [
    "Web Designing",
    "eCommerce",
    "Microsoft 365", 
    "Domain",
    "SEO",
    "UX / UI Design",
    "Marketing",
    "Consultancy",
    "Custom Software",
    "Not sure",
  ];

  const toggleService = (value) => {
    setServices((prev) =>
      prev.includes(value)
        ? prev.filter((s) => s !== value)
        : [...prev, value]
    );
  };

  const handleSubmit = async () => {
    if (!name.trim()) return toast.error("Enter your name.");
    if (!email.trim()) return toast.error("Enter your email.");
    if (!phone.trim()) return toast.error("Enter your phone number.");
    if (!message.trim()) return toast.error("Message is required.");
    if (services.length === 0) return toast.error("Select at least one service.");

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
        setName(""); setEmail(""); setPhone(""); setMessage(""); setServices([]);
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
            <div className="mb-2">
              <p className="font-semibold flex items-center gap-2 mb-2 text-gray-800 text-sm">
                <CheckCircle2 size={18} className="text-[#ae5c83]" />
                I’m interested in...
              </p>

              <div className="grid grid-cols-2 gap-2">
                {SERVICES.map((item) => {
                  const checked = services.includes(item);
                  return (
                    <label
                      key={item}
                      className={`flex items-center gap-1 p-1 rounded-lg border text-sm cursor-pointer transition select-none
                        ${checked ? "border-[#ae5c83] bg-[#ae5c83]/10 text-[#ae5c83] font-semibold"
                                  : "border-slate-400 bg-white text-gray-600 hover:border-[#ae5c83]/50"}`}
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
            </div>

            {/* FULL NAME */}
            <div className="mb-2">
              <label className="block text-xs font-bold mb-1.5 text-gray-700 uppercase">Full Name</label>
              <div className="relative">
                <User className="absolute left-3 top-3 text-slate-400" size={18} />
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border text-gray-900 text-sm border-slate-400 focus:border-[#ae5c83] focus:ring-[#ae5c83]/15 focus:ring-4 outline-none"
                />
              </div>
            </div>

            {/* PHONE + EMAIL ROW */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-2">
              {/* Phone */}
              <div>
                <label className="block text-xs font-bold mb-1.5 text-gray-700 uppercase">Phone</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 text-slate-400" size={18} />
                  <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border text-gray-900 text-sm border-slate-400 focus:border-[#ae5c83] focus:ring-[#ae5c83]/15 focus:ring-4 outline-none"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-bold mb-1.5 text-gray-700 uppercase">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 text-slate-400" size={18} />
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="john@company.com"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border text-gray-900 text-sm border-slate-400 focus:border-[#ae5c83] focus:ring-[#ae5c83]/15 focus:ring-4 outline-none"
                  />
                </div>
              </div>
            </div>

            {/* MESSAGE */}
            <div className="mb-2">
              <label className="block text-xs font-bold mb-1.5 text-gray-700 uppercase">Project Details</label>
              <div className="relative">
                <MessageSquare className="absolute left-3 top-3 text-slate-400" size={18} />
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us about your project…"
                  className="w-full pl-10 pr-4 py-2.5 h-28 rounded-xl border border-slate-400 text-gray-900 text-sm resize-none focus:border-[#ae5c83] focus:ring-[#ae5c83]/15 focus:ring-4 outline-none"
                />
              </div>
            </div>

            {/* SUBMIT */}
            <button
              onClick={handleSubmit}
              className="
                mx-auto
                px-6 py-2.5
                bg-gradient-to-r from-[#ae5c83] to-[#8a4262]
                text-white
                rounded-full
                text-sm font-semibold
                flex items-center justify-center gap-2
                shadow-md
                transition-all duration-300
                hover:shadow-xl hover:scale-[1.05]
                active:scale-[0.96]
                border border-white/20
                backdrop-blur-sm
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