import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
  MessageCircle
} from "lucide-react";
import lo from "@/public/lo.jpg"; 
import Link from "next/link";
import Image from "next/image";
import GradientButton from "@/components/GradientButton"
export default function Footer() {
  return (
    <footer className="w-full bg-[#0f0e17] text-white relative  border-t border-white/10 font-sans">

     

      {/* ---------- MAIN GRID ---------- */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-12 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* ---------- NEWSLETTER ---------- */}
        <div>
          <h3 className="text-2xl font-bold momo-font text-[#ae5c83] mb-4">
            Newsletter
          </h3>

          <p className="text-gray-300 text-sm mb-4 leading-relaxed">
            Subscribe for updates on solutions, services & industry insights.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="
                flex-grow px-4 py-3 rounded-lg bg-[#1b1a26]
                border border-white/10
                text-sm text-white placeholder-gray-400
                focus:ring-2 focus:ring-[#6c53a7] outline-none
                transition-all
              "
            />
            <GradientButton href="" text="subscribe" />
          </div>
        </div>

        {/* ---------- GLOBAL CONTACTS ---------- */}
        <div>
          <h3 className="text-2xl font-bold momo-font text-[#ae5c83] mb-4">
            Global Contacts
          </h3>

          <ul className="space-y-3 text-gray-300">
            {[
              { icon: MapPin, text: "UAE — +971 4 852 0449" },
              { icon: MapPin, text: "India — +91 478 255 4004" },
              { icon: MapPin, text: "USA — +1 478 800 4004" },
              { icon: Mail, text: "info@arabinfotechllc.com" },
            ].map((contact, i) => (
              <li key={i} className="flex items-start gap-3 group">
                <contact.icon className="text-[#ae5c83] mt-1 group-hover:text-white transition-colors" size={18} />
                <span className="text-sm leading-relaxed">{contact.text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* ---------- SOCIALS & LOGO ---------- */}
        <div className="flex flex-col h-full justify-between">
          <div>
            <h3 className="text-2xl font-bold momo-font text-[#ae5c83] mb-4">
              Follow Us
            </h3>

            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
              Stay connected with our latest updates.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {[
                { icon: Facebook, link: "https://www.facebook.com/arabinfotec" },
                { icon: Instagram, link: "https://www.instagram.com/arabinfotec_/" },
                { icon: Linkedin, link: "https://www.linkedin.com/company/arabinfotec" },
                { icon: Twitter, link: "https://x.com/arabinfotec" },
                { icon: Youtube, link: "https://www.youtube.com/channel/UConU2gg52rHALzD6QNU2DoQ" },
              ].map((social, i) => {
                const Icon = social.icon;
                return (
                  <a
                    key={i}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      p-2.5 bg-[#1b1a26] rounded-full border border-white/10
                      hover:bg-[#ae5c83] hover:border-[#ae5c83]
                      hover:text-white transition-all group
                    "
                  >
                    <Icon size={18} className="text-gray-300 group-hover:text-white transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Logo Under Social Icons */}
          <div className="mt-8 md:mt-auto pt-8 md:pt-0">
             <Image
               src={lo}
               alt="Company Logo"
               width={160}
               height={160}
               className="
                 object-contain opacity-90 transition-all 
                 hover:opacity-100 hover:scale-105
                 mix-blend-screen
               "
             />
          </div>
        </div>

      </div>

      {/* ---------- SUB-FOOTER ---------- */}
      <div className="w-full bg-black/20 py-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">

          {/* COPYRIGHT */}
          <p className="text-gray-400 text-sm order-2 md:order-1">
            © {new Date().getFullYear()} ArabInfoTech — All Rights Reserved.
          </p>

          {/* LINKS */}
          <div className="flex flex-wrap justify-center md:justify-end items-center gap-x-4 gap-y-2 text-xs sm:text-sm font-medium roboto-text order-1 md:order-2">
            {[
              { label: "Terms & Conditions", href: "/termsandconditions" },
              { label: "Privacy Policy", href: "/privacypolicy" },
              { label: "Refund Policy", href: "/refundpolicy" },
              { label: "FAQ", href: "/faq" },
              { label: "Sitemap", href: "/site-map" },
              { label: "About Us", href: "/about" },
              { label: "Contact Us", href: "/contact" },
            ].map((link, i, arr) => (
              <React.Fragment key={i}>
                <Link href={link.href} className="text-gray-300 hover:text-[#ae5c83] transition-colors">
                  {link.label}
                </Link>
                {i < arr.length - 1 && <span className="text-gray-600 hidden sm:inline">|</span>}
              </React.Fragment>
            ))}
          </div>

        </div>
      </div>

    </footer>
  );
}