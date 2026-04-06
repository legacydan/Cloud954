import type { Metadata } from "next";
import { Inter, Permanent_Marker } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const permanentMarker = Permanent_Marker({ 
  weight: "400",
  subsets: ["latin"],
  variable: "--font-graffiti"
});

export const metadata: Metadata = {
  title: "Cloud954 | Fort Lauderdale's Premier Smoke Shop",
  description: "In-store, local delivery, and online ordering. Cloud954 — quality you can trust. Servicing Fort Lauderdale with premium vapes, CBD, and accessories.",
  openGraph: {
    title: "Cloud954 | Premiere Smoke Shop",
    description: "Visit us in-store in Fort Lauderdale or order online.",
    url: "https://cloud954.com",
    siteName: "Cloud954",
    images: [{ url: "/assets/cloud954-logo.png", width: 800, height: 600 }],
  }
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThreeSmokeBackground from "@/components/ThreeSmokeBackground";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* LocalBusiness JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SmokeShop",
              "name": "Cloud954",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Placeholder Address", /* Client to provide */
                "addressLocality": "Fort Lauderdale",
                "addressRegion": "FL",
                "postalCode": "33311", /* Placeholder */
                "addressCountry": "US"
              },
              "telephone": "(954) 816-4669",
              "url": "https://cloud954.com"
            })
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${permanentMarker.variable} antialiased font-sans flex flex-col min-h-screen relative`}
      >
        <ThreeSmokeBackground />
        <Navbar />
        <main className="flex-grow pt-20 relative z-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
