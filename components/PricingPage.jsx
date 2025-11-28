"use client";

import React from "react";
import { Check, X, HelpCircle, AlertCircle } from "lucide-react";

const PricingPage = () => {
  const plans = [
    {
      name: "Basic",
      price: "19.00",
      yearlyPrice: "228",
      description: "Essential tools for light users and frontline workers.",
      isPopular: false,
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
    <section className=" px-4 min-h-screen">
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
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap- items-start">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative bg-white rounded-3xl border transition-all duration-300 flex flex-col
                ${plan.isPopular 
                  ? "border-[#5b4390] shadow-2xl scale-105 z-10" 
                  : "border-slate-400 shadow-lg hover:shadow-xl hover:-translate-y-1"
                }`}
            >
              {plan.isPopular && (
                <div className="absolute momo-font -top-4 left-1/2 -translate-x-1/2 bg-[#5b4390] text-white px-4 py-1 rounded-full text-sm font-bold tracking-wide shadow-md">
                  MOST POPULAR
                </div>
              )}

              <div className="p-8 border-b border-slate-100 flex-grow-0">
                <h3 className="text-xl momo-font font-bold text-slate-900 mb-2">{plan.name}</h3>

                <p className="text-sm roboto-text text-slate-500 min-h-[40px] mb-2">
                  {plan.description}
                </p>
                
                <div className="flex items-baseline gap-1">
                  <span className="text-sm momo-font font-semibold text-slate-400">AED</span>
                  <span className="text-4xl momo-font font-extrabold text-slate-900">{plan.price}</span>
                  <span className="roboto-text text-slate-500">/mo</span>
                </div>
                <div className="text-xs roboto-text text-slate-400 font-medium">
                  Billed yearly at AED {plan.yearlyPrice}/user
                </div>

                <button className={`w-full  py-3 rounded-xl momo-font font-bold transition-colors duration-200 
                  ${plan.isPopular 
                    ? "bg-[#5b4390] text-white hover:bg-[#463173]" 
                    : "bg-slate-100 text-slate-800 hover:bg-slate-200"
                  }`}
                >
                  Subscribe
                </button>
              </div>

              {/* Features List */}
              <div className="p-8  text-sm roboto-text">
                
                <div className="flex justify-between items-center py-2 border-b border-slate-50">
                  <span className="text-slate-600 font-medium">Mailbox</span>
                  <span className="font-bold text-slate-900">{plan.features.email}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-50 m">
                  <span className="text-slate-600 font-medium">OneDrive</span>
                  <span className="font-bold text-slate-900">{plan.features.storage}</span>
                </div>

                <FeatureRow label="Office Desktop Apps" included={plan.features.desktopApps} tooltip="Word, Excel, PowerPoint installed on PC/Mac" />
                <FeatureRow label="Web & Mobile Apps" included={plan.features.webApps} />
                <FeatureRow label="Teams & Comm" included={plan.features.teams} />
                <FeatureRow label="Device Management" included={plan.features.deviceMgmt} />
                <FeatureRow label="Advanced Security" included={plan.features.security} />

                {plan.features.advancedThreat && (
                  <FeatureRow label="Adv. Threat Protection" included highlight />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FeatureRow = ({ label, included, highlight = false, tooltip }) => (
  <div className={`flex items-start gap-3 ${!included ? "opacity-50" : ""}`}>
    <div className={`mt-0.5 rounded-full p-0.5 ${included ? (highlight ? "bg-[#ae5c83] text-white" : "bg-green-100 text-green-700") : "bg-slate-100 text-slate-400"}`}>
        {included ? <Check className="w-3.5 h-3.5" /> : <X className="w-3.5 h-3.5" />}
    </div>
    <div className="flex-1">
        <span className={`block leading-tight roboto-text ${highlight ? "text-[#ae5c83] font-bold" : "text-slate-700"}`}>
            {label}
        </span>
        {tooltip && <span className="text-[10px] roboto-text text-slate-400">{tooltip}</span>}
    </div>
  </div>
);

export default PricingPage;
