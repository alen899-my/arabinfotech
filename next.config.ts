import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/competency-analysis-system",
        destination: "/solutions/competency-analysis-system",
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
    ];
  },
};

export default nextConfig;
