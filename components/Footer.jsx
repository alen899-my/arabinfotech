import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0f0e17] text-white  p-6   border-t border-white/10">

      {/* ---------- MAIN GRID ---------- */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* ---------- NEWSLETTER ---------- */}
        <div>
          <h3 className="text-2xl font-bold momo-font text-[#ae5c83]">
            Newsletter
          </h3>

          <p className="text-gray-400 text-sm mt-2">
            Subscribe for updates on solutions, services & industry insights.
          </p>

          <div className="flex items-center gap-2 mt-5">
            <input
              type="email"
              placeholder="Enter your email"
              className="
                w-full px-4 py-3 rounded-lg bg-[#1b1a26]
                border border-white/10
                text-sm text-white placeholder-gray-400
                focus:ring-2 focus:ring-[#6c53a7] outline-none
              "
            />
            <button
              className="
                px-5 py-3 rounded-lg
                bg-[#6c53a7] hover:bg-[#5b4390]
                text-white font-semibold
                transition-all text-sm
              "
            >
              Subscribe
            </button>
          </div>
        </div>

        {/* ---------- GLOBAL CONTACTS ---------- */}
       {/* ---------- GLOBAL CONTACTS ---------- */}
<div>
  <h3 className="text-2xl font-bold momo-font text-[#ae5c83]">
    Global Contacts
  </h3>

  <ul className="mt-5 space-y-4 text-gray-300">

    {/* UAE */}
    <li className="flex items-start gap-3">
      <MapPin className="text-[#ae5c83]" size={20} />
      <span className="text-sm">UAE — +971 4 852 0449</span>
    </li>

    {/* India */}
    <li className="flex items-start gap-3">
      <MapPin className="text-[#ae5c83]" size={20} />
      <span className="text-sm">India — +91 478 255 4004</span>
    </li>

    {/* USA */}
    <li className="flex items-start gap-3">
      <MapPin className="text-[#ae5c83]" size={20} />
      <span className="text-sm">USA — +1 478 800 4004</span>
    </li>

    {/* Email */}
    <li className="flex items-start gap-3">
      <Mail className="text-[#ae5c83]" size={20} />
      <span className="text-sm">info@arabinfotechllc.com</span>
    </li>

  </ul>
</div>


        {/* ---------- SOCIALS ---------- */}
        <div>
          <h3 className="text-2xl font-bold momo-font text-[#ae5c83]">
            Follow Us
          </h3>

          <p className="text-gray-400 text-sm mt-2">
            Stay connected with our latest updates.
          </p>

          <div className="flex items-center gap-4 mt-6">
            {[
              { icon: Facebook, link: "#" },
              { icon: Instagram, link: "#" },
              { icon: Linkedin, link: "#" },
              { icon: Twitter, link: "#" },
            ].map((social, i) => {
              const Icon = social.icon;
              return (
                <a
                  key={i}
                  href={social.link}
                  className="
                    p-3 bg-[#1b1a26] rounded-full border border-white/10
                    hover:bg-[#6c53a7] hover:border-[#6c53a7]
                    hover:text-white transition-all
                  "
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>
        </div>

      </div>

      {/* ---------- SUB-FOOTER ---------- */}
      <div className="max-w-7xl mx-auto px-6 mt-14 border-t border-white/10 pt-6 text-center">
        <p className="text-gray-400 text-xs md:text-sm">
          © {new Date().getFullYear()} ArabInfoTech — All Rights Reserved.
        </p>

        <div className="flex justify-center gap-4 mt-3 text-xs text-[#ae5c83]">
          <Link href="/termsandconditions" className="hover:underline">Terms & Conditons</Link>
          <a href="/privacypolicy" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">FAQ</a>
        </div>

        <p className="text-gray-500 text-xs mt-3">
          Designed & Developed by ArabInfoTech
        </p>
      </div>

    </footer>
  );
}
