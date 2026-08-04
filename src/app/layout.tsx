import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Source_Sans_3, Roboto_Slab } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/lib/seo";
import { profile } from "@/config/profile";
import "./globals.css";

const sourceSans = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const robotoSlab = Roboto_Slab({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(profile.portfolioCanonicalUrl),
  title: {
    default: "Narciso M. Dickson | Construction Project Controls, Analytics, and AI",
    template: "%s | Narciso M. Dickson",
  },
  description:
    "Personal portfolio for Narciso M. Dickson: construction project management, project controls analytics, business intelligence, and responsible AI leadership.",
  openGraph: {
    type: "website",
    siteName: "Narciso M. Dickson Portfolio",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.fullName,
    jobTitle: profile.title,
    url: profile.portfolioCanonicalUrl,
    email: `mailto:${profile.publicEmail}`,
    sameAs: [profile.githubProfileUrl, profile.inProjectUrl, profile.inProjectAiUrl],
    founder: {
      "@type": "Organization",
      name: "In Project LLC",
      url: profile.inProjectUrl,
    },
    knowsAbout: [
      "construction project management",
      "construction project controls",
      "project controls analytics",
      "Power BI construction dashboard",
      "Tableau construction analytics",
      "Earned Value Management",
      "AI leadership in project management",
    ],
  };

  return (
    <html lang="en" className={`${sourceSans.variable} ${robotoSlab.variable}`}>
      <body>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <JsonLd data={personSchema} />
      </body>
    </html>
  );
}
