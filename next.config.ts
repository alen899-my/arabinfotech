import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/competency-analysis-system",
        destination: "/solutions/competency-analysis-system",
      },
      {
        source:"/",
        destination:"/home"
      },
      {
        source: "/custom-application",
        destination: "/solutions/custom-application",
      },
      {
        source: "/custom-software",
        destination: "/solutions/custom-software",
      },
      {
        source: "/manpower-supply-software",
        destination: "/solutions/manpower-supply-software",
      },
      {
        source: "/shortlist-pro",
        destination: "/solutions/shortlist-pro",
      },
      {
        source: "/softwaresolutions",
        destination: "/solutions/softwaresolutions",
      },
      {
        source: "/splunk-proffesional-service",
        destination: "/solutions/splunk-proffesional-service",
      },
      {
        source: "/valet-parking",
        destination: "/solutions/valet-parking",
      },
      {
        source:"/attendance-payroll-system",
        destination:"/solutions/softwaresolutions/attendance-payroll-system"
      },
      {
        source:"/auto-garage-system",
        destination:"/solutions/softwaresolutions/auto-garage-system"
      },
      {
        source:"/manufacturers-project-lifecycle-system",
        destination:"/solutions/softwaresolutions/manufacturers-project-lifecycle-system"
      },
      {
        source:"/materials-requirement-planning-system",
        destination:"/solutions/softwaresolutions/materials-requirement-planning-system"
      },
      {
        source:"/property-rentals-management-system",
        destination:"/solutions/softwaresolutions/property-rentals-management-system"
      },
      {
        source:"/email-solutions",
        destination:"/solutions/domainandserver/email-solutions"
      },
      {
        source:"/google-business",
        destination:"/solutions/domainandserver/google-business"
      },
      {
        source:"/office365",
        destination:"/solutions/domainandserver/office365"
      },
      {
        source:"/privacypolicy",
        destination:"/footer/privacypolicy"
      },
      {
        source:"/termsandconditions",
        destination:"/footer/termsandconditions"
      },
      {
        source:"/refundpolicy",
        destination:"/footer/refundpolicy"
      },
      {
        source:"/faq",
        destination:"/footer/faq"
      },
      {
        source:"/site-map",
        destination:"/footer/site-map"
      }
    ];
  },
};

export default nextConfig;
