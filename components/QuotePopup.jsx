"use client";

import { motion } from "framer-motion";
import { X, User, Mail, MessageSquare, CheckCircle2, Send } from "lucide-react";
import toast from "react-hot-toast";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useEffect } from "react";


export default function QuotePopup({ open, setOpen }) {
  const [services, setServices] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
    const PAGE_SERVICE_MAP = {
  "/webdesigning": "Web Designing",
  "/ecommerce": "eCommerce",
  "/seo": "SEO",
  "/digitalmarketing": "Marketing",
  "/uxui": "UX / UI Design",
  "/consultancy": "Consultancy",
};
const pathname = usePathname();
useEffect(() => {
  if (open) {
    const match = PAGE_SERVICE_MAP[pathname];
    if (match) {
      setServices([match]);  // auto-select only one
    }
  }
}, [open, pathname]);

  if (!open) return null;

  const SERVICES = [
    "Web Designing",
    "eCommerce",
    "SEO",
    "UX / UI Design",
    "Marketing",
    "Consultancy",
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
    if (!message.trim()) return toast.error("Message is required.");
    if (services.length === 0) return toast.error("Select at least one service.");

    const loading = toast.loading("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message, services }),
      });

      const data = await res.json();

      toast.dismiss(loading);
      if (data.success) {
        toast.success("Message sent!");
        setOpen(false);
        setName("");
        setEmail("");
        setMessage("");
        setServices([]);
      } else {
        toast.error("Failed to send.");
      }
    } catch (e) {
      toast.dismiss(loading);
      toast.error("Error sending message.");
    }
  };

  return (
    <div className="fixed inset-0 z-[9999] bg-black/40 backdrop-blur-sm flex items-end justify-center">
      {/* Close on background click */}
      <div className="absolute inset-0" onClick={() => setOpen(false)} />

      {/* POPUP PANEL */}
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        className="relative w-full max-w-xl bg-white rounded-t-3xl shadow-xl p-6 overflow-y-auto max-h-[85vh]"
      >
        {/* Close Button */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 bg-[#ae5c83] shadow p-2 rounded-full"
        >
          <X size={20} />
        </button>

      {/* FORM TITLE */}
<h2 className="text-xl text-center font-bold text-[#ae5c83] mb-4 momo-font">
  Get a Quote
</h2>

{/* SERVICES */}
<div className="mb-4">
  <p className="font-semibold flex items-center gap-2 mb-2 text-black text-sm">
    <CheckCircle2 size={16} className="text-[#ae5c83]" />
    I’m interested in...
  </p>

  <div className="grid grid-cols-2 gap-2">
    {SERVICES.map((item) => {
      const checked = services.includes(item);
      return (
        <label
          key={item}
          className={`flex items-center gap-2 p-2.5 rounded-lg border text-sm cursor-pointer transition 
            ${checked ? "border-[#ae5c83] bg-[#f7e9f1]" : "border-slate-300 bg-white"}
          `}
        >
          <input
            type="checkbox"
            checked={checked}
            onChange={() =>
              setServices((prev) =>
                prev.includes(item)
                  ? prev.filter((s) => s !== item)
                  : [...prev, item]
              )
            }
            className="w-4 h-4 accent-[#ae5c83]"
          />
          <span className="text-[13px] font-medium text-black leading-tight">
            {item}
          </span>
        </label>
      );
    })}
  </div>
</div>

{/* NAME FIELD */}
<div className="mb-3">
  <label className="block text-[13px] text-black font-semibold mb-1">Full Name</label>
  <div className="relative">
    <User className="absolute left-3 top-3 text-slate-400" size={16} />
    <input
      value={name}
      onChange={(e) => setName(e.target.value)}
      className="w-full pl-9 pr-3 py-2 rounded-lg text-black bg-slate-50 text-sm border border-slate-300 focus:border-[#ae5c83] focus:ring-2 focus:ring-[#ae5c83]/20 transition"
      placeholder="John Doe"
    />
  </div>
</div>

{/* EMAIL FIELD */}
<div className="mb-3">
  <label className="block text-[13px] text-black font-semibold mb-1">Email Address</label>
  <div className="relative">
    <Mail className="absolute left-3 top-3 text-slate-400" size={16} />
    <input
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      className="w-full pl-9 pr-3 py-2 rounded-lg bg-slate-50 text-black text-sm border border-slate-300 focus:border-[#ae5c83] focus:ring-2 focus:ring-[#ae5c83]/20 transition"
      placeholder="john@company.com"
    />
  </div>
</div>

{/* MESSAGE FIELD */}
<div className="mb-4">
  <label className="block text-[13px] text-black font-semibold mb-1">Message</label>
  <div className="relative">
    <MessageSquare className="absolute left-3 top-3 text-slate-400" size={16} />
    <textarea
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      className="w-full pl-9 pr-3 py-2 rounded-lg bg-slate-50 text-black text-sm border border-slate-300 h-28 resize-none focus:border-[#ae5c83] focus:ring-2 focus:ring-[#ae5c83]/20 transition"
      placeholder="Tell us about your project..."
    />
  </div>
</div>

{/* SUBMIT BUTTON */}
<button
  onClick={handleSubmit}
  className="w-full bg-gradient-to-r from-[#ae5c83] to-[#8a4262] text-white py-2.5 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 shadow-md hover:shadow-lg active:scale-95 transition"
>
  <Send size={16} />
  Send Message
</button>

      </motion.div>
    </div>
  );
}
