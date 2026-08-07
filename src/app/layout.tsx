import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Source_Sans_3, Roboto_Slab } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/lib/seo";
import { profile, positioningLong, education, certifications } from "@/config/profile";
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
  // No phone number, credential IDs, street address or ZIP: public location is
  // limited to the city and state.
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.fullName,
    honorificSuffix: profile.credentials,
    jobTitle: "Founder & Construction Project Management Consultant",
    description: positioningLong.join(" "),
    url: profile.portfolioCanonicalUrl,
    email: `mailto:${profile.publicEmail}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lehi",
      addressRegion: "Utah",
      addressCountry: "US",
    },
    sameAs: [
      profile.linkedinUrl,
      profile.githubProfileUrl,
      profile.inProjectUrl,
      profile.inProjectAiUrl,
    ],
    knowsLanguage: profile.languages,
    alumniOf: education.map((item) => ({
      "@type": "EducationalOrganization",
      name: item.org,
    })),
    hasCredential: certifications.map((item) => ({
      "@type": "EducationalOccupationalCredential",
      name: item.name,
      recognizedBy: { "@type": "Organization", name: item.org },
    })),
    worksFor: {
      "@type": "Organization",
      name: "In Project LLC",
      url: profile.inProjectUrl,
    },
    founder: {
      "@type": "Organization",
      name: "In Project LLC",
      url: profile.inProjectUrl,
    },
    knowsAbout: [
      "construction project management",
      "construction project controls",
      "project controls analytics",
      "construction data analytics",
      "change-order analytics",
      "RFI workflow analytics",
      "construction predictive analytics",
      "cost-overrun prediction",
      "schedule-delay prediction",
      "Power BI construction dashboards",
      "Tableau construction analytics",
      "Earned Value Management",
      "AI leadership in project management",
      "responsible AI for construction",
      "bilingual English Spanish project manager",
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
