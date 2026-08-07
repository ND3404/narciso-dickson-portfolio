import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Project slugs were renamed to match the public repository names.
      // Permanent redirects keep any existing external links working.
      {
        source: "/projects/change-order-rfi-analytics",
        destination: "/projects/construction-change-order-rfi-analytics",
        permanent: true,
      },
      {
        source: "/projects/predictive-project-overrun-model",
        destination: "/projects/predictive-construction-project-overrun-model",
        permanent: true,
      },
      // Expertise folded into About; Contact became a home-page section.
      {
        source: "/expertise",
        destination: "/about#capabilities",
        permanent: true,
      },
      {
        source: "/contact",
        destination: "/#contact",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
