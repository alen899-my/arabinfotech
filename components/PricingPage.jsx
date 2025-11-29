"use client";

import React, { useState } from "react";
import { Check, X } from "lucide-react";
// ↓↓↓ IMPORT YOUR POPUP COMPONENT HERE ↓↓↓
import QuotePopup from "./QuotePopup"; 

const PricingPage = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const plans = [
    {
      name: "Basic",
      price: "19.00",
      yearlyPrice: "228",
      description: "Essential tools for light users and frontline workers.",
      isPopular: false,
      themeColor: "#3b82f6", // Blue
      lightColor: "#eff6ff", // Blue-50
      features: {
        email: "50 GB",
        storage: "1 TB",
        desktopApps: false,
        webApps: true,
        teams: true,
        security: false,
        deviceMgmt: false,
      },
    },
    {
      name: "Business",
      price: "31.50",
      yearlyPrice: "378",
      description: "Best for businesses that need desktop apps and storage.",
      isPopular: false,
      themeColor: "#6366f1", // Indigo
      lightColor: "#eef2ff", // Indigo-50
      features: {
        email: "50 GB",
        storage: "1 TB",
        desktopApps: true,
        webApps: true,
        teams: true,
        security: false,
        deviceMgmt: false,
      },
    },
    {
      name: "Standard",
      price: "45.00",
      yearlyPrice: "540",
      description: "The comprehensive solution for most businesses.",
      isPopular: true,
      themeColor: "#5b4390", // Brand Purple
      lightColor: "#f3f0ff", // Purple-50
      features: {
        email: "50 GB",
        storage: "1 TB",
        desktopApps: true,
        webApps: true,
        teams: true,
        security: true,
        deviceMgmt: true,
      },
    },
    {
      name: "Premium",
      price: "70.00",
      yearlyPrice: "840",
      description: "Advanced security and cyberthreat protection.",
      isPopular: false,
      themeColor: "#ae5c83", // Brand Rose
      lightColor: "#fff1f2", // Rose-50
      features: {
        email: "50 GB",
        storage: "1 TB",
        desktopApps: true,
        webApps: true,
        teams: true,
        security: true,
        deviceMgmt: true,
        advancedThreat: true,
      },
    },
  ];

  return (
    <>
      <section className="px-4 py-12 min-h-screen bg-slate-50/50">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm momo-font font-bold tracking-widest text-[#ae5c83] uppercase mb-3">
              Transparent Pricing
            </h2>

            <h1 className="text-4xl md:text-5xl momo-font font-extrabold text-slate-900 mb-6">
              Choose the right plan for your team.
            </h1>

            <p className="text-lg roboto-text text-slate-600">
              All plans include a <span className="font-semibold text-[#5b4390]">75 AED One-Time Setup Fee</span> per user.
              <br />
              <span className="text-sm roboto-text text-slate-500">
                * Prices do not include tax. Yearly Billing Only.
              </span>
            </p>
          </div>

          {/* Pricing Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {plans.map((plan, idx) => (
              <div
                key={idx}
                style={{ 
                    borderColor: plan.isPopular ? plan.themeColor : undefined 
                }}
                className={`relative bg-white rounded-3xl border transition-all duration-300 flex flex-col h-full overflow-hidden
                  ${plan.isPopular 
                    ? "shadow-2xl lg:scale-110 lg:z-10 ring-1" 
                    : "border-slate-200 shadow-lg hover:shadow-xl hover:-translate-y-1"
                  }`}
              >
                 {/* Top Colored Bar for Visual Separation */}
                 <div style={{ backgroundColor: plan.themeColor }} className="h-2 w-full absolute top-0 left-0"></div>

                {plan.isPopular && (
                  <div 
                    style={{ backgroundColor: plan.themeColor }}
                    className="absolute momo-font top-0 left-1/2 -translate-x-1/2 text-white px-4 pt-3 pb-1 rounded-b-xl text-xs font-bold tracking-wide shadow-md whitespace-nowrap z-20"
                  >
                    MOST POPULAR
                  </div>
                )}

                {/* Top Section */}
                <div className="p-5 pt-8 flex flex-col flex-grow">
                  {/* Name with Dynamic Color */}
                  <h3 
                    style={{ color: plan.themeColor }}
                    className="text-xl momo-font font-bold mb-1"
                  >
                    {plan.name}
                  </h3>

                  {/* Description */}
                  <p className="text-sm roboto-text text-slate-500 min-h-[40px] mb-4 leading-relaxed">
                    {plan.description}
                  </p>
                  
                  <div className="mt-auto">
                    <div className="flex items-baseline gap-1">
                      <span className="text-sm momo-font font-semibold text-slate-400">AED</span>
                      {/* Price with Dynamic Color */}
                      <span 
                        style={{ color: plan.themeColor }}
                        className="text-4xl momo-font font-extrabold"
                      >
                        {plan.price}
                      </span>
                      <span className="roboto-text text-slate-500">/mo</span>
                    </div>
                    <div className="text-xs roboto-text text-slate-400 font-medium mb-4">
                      Billed yearly at AED {plan.yearlyPrice}/user
                    </div>

                    <button 
                      onClick={handleOpenPopup}
                      style={{ 
                        backgroundColor: plan.isPopular ? plan.themeColor : plan.lightColor,
                        color: plan.isPopular ? '#ffffff' : plan.themeColor,
                        boxShadow: plan.isPopular ? `0 10px 15px -3px ${plan.themeColor}40` : 'none'
                      }}
                      className={`w-full py-2.5 rounded-xl momo-font font-bold transition-all duration-200 text-sm hover:brightness-95`}
                    >
                      Subscribe
                    </button>
                  </div>
                </div>

                {/* Features List Section */}
                <div className="p-5 pt-4 text-sm roboto-text bg-slate-50/50 border-t border-slate-100 rounded-b-3xl flex-grow-0">
                  <div className="space-y-3">
                      <div className="flex justify-between items-center pb-2 border-b border-slate-200/60">
                        <span className="text-slate-600 font-medium">Mailbox</span>
                        <span className="font-bold text-slate-900">{plan.features.email}</span>
                      </div>
                      <div className="flex justify-between items-center pb-2 border-b border-slate-200/60">
                        <span className="text-slate-600 font-medium">OneDrive</span>
                        <span className="font-bold text-slate-900">{plan.features.storage}</span>
                      </div>

                      <div className="pt-2 space-y-2.5">
                          <FeatureRow 
                            label="Office Desktop Apps" 
                            included={plan.features.desktopApps} 
                            tooltip="Word, Excel, PowerPoint" 
                            themeColor={plan.themeColor}
                          />
                          <FeatureRow 
                            label="Web & Mobile Apps" 
                            included={plan.features.webApps} 
                            themeColor={plan.themeColor}
                          />
                          <FeatureRow 
                            label="Teams & Comm" 
                            included={plan.features.teams} 
                            themeColor={plan.themeColor}
                          />
                          <FeatureRow 
                            label="Device Management" 
                            included={plan.features.deviceMgmt} 
                            themeColor={plan.themeColor}
                          />
                          <FeatureRow 
                            label="Advanced Security" 
                            included={plan.features.security} 
                            themeColor={plan.themeColor}
                          />

                          {plan.features.advancedThreat && (
                          <FeatureRow 
                            label="Adv. Threat Protection" 
                            included 
                            highlight 
                            themeColor={plan.themeColor}
                          />
                          )}
                      </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <QuotePopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />

        </div>
      </section>
    </>
  );
};

const FeatureRow = ({ label, included, highlight = false, tooltip, themeColor }) => (
  <div className={`flex items-start gap-3 ${!included ? "opacity-40 grayscale" : ""}`}>
    {/* Checkmark Circle with Dynamic Background */}
    <div 
        style={{ 
            backgroundColor: included ? (highlight ? themeColor : `${themeColor}20`) : '#e2e8f0', // Hex + 20 opacity if not highlighted
            color: included ? (highlight ? '#ffffff' : themeColor) : '#94a3b8'
        }}
        className={`mt-0.5 rounded-full p-0.5 flex-shrink-0`}
    >
        {included ? <Check className="w-3 h-3" strokeWidth={3} /> : <X className="w-3 h-3" />}
    </div>
    
    <div className="flex-1">
        <span 
            style={{ color: highlight ? themeColor : undefined }}
            className={`block text-[13px] leading-tight roboto-text ${highlight ? "font-bold" : "text-slate-700"}`}
        >
            {label}
        </span>
        {tooltip && <span className="text-[10px] roboto-text text-slate-400 block mt-0.5 leading-tight">{tooltip}</span>}
    </div>
  </div>
);

export default PricingPage;