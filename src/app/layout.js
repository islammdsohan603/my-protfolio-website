import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import SmoothScroll from "@/providers/SmoothScroll";

import SplashScreen from "@/components/SplashScreen";
import Script from "next/script";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    default: "MD SOHAN | Sohan Islam Portfolio | Frontend Developer Bangladesh",
    template: "%s | Sohan Islam",
  },
  description:
    "Professional Portfolio of MD SOHAN (Sohan Islam), a skilled Frontend Developer from Bangladesh specializing in Next.js, React, and Tailwind CSS. Explore my projects and skills.",
  keywords: [
    "Sohan Portfolio",
    "Sohan Islam Portfolio",
    "Frontend Developer Bangladesh",
    "MD SOHAN",
    "Sohan Islam",
    "React Developer Bangladesh",
    "Next.js Developer",
    "Web Developer Portfolio",
    "Sohan Islam Web Dev",
    "Frontend Developer",
    "Web Developer",
    "Software Engineer",
    "React Developer",
    "JavaScript Developer",
    "Top Developer in Bangladesh",
    "Hire Frontend Developer",
    "UI/UX Developer",
    "Web Designer Bangladesh",
    "Web Developer in Dhaka",
    "Frontend Engineer",
    "Developer",
    "Programmer",
    "Coder",
    "Website Developer"
  ],
  authors: [{ name: "MD SOHAN", url: "https://my-nextjs-protfolio.vercel.app/" }],
  creator: "MD SOHAN",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://my-nextjs-protfolio.vercel.app/",
    title: "MD SOHAN | Sohan Islam Portfolio | Frontend Developer Bangladesh",
    description:
      "Explore the professional portfolio of MD SOHAN, a Frontend Developer specializing in modern web technologies.",
    siteName: "Sohan Islam Portfolio",
    images: [
      {
        url: "https://my-nextjs-protfolio.vercel.app/portfolio.png",
        width: 1200,
        height: 630,
        alt: "MD SOHAN Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MD SOHAN | Frontend Developer Portfolio",
    description:
      "Professional Portfolio of MD SOHAN (Sohan Islam), a skilled Frontend Developer from Bangladesh.",
    images: ["https://my-nextjs-protfolio.vercel.app/portfolio.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "MD SOHAN",
  "alternateName": "Sohan Islam",
  "url": "https://my-nextjs-protfolio.vercel.app/",
  "image": "https://my-nextjs-protfolio.vercel.app/portfolio.png",
  "jobTitle": "Frontend Developer",
  "description": "Professional Frontend Developer from Bangladesh specializing in Next.js, React, and Tailwind CSS.",
  "worksFor": {
    "@type": "Organization",
    "name": "Freelance"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Dhaka",
    "addressCountry": "Bangladesh"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
      <body className="antialiased font-inter">
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-SJKJTN0MP0`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
        >
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-SJKJTN0MP0');
          `}
        </Script>
        <SmoothScroll>
          <SplashScreen />

          <Navbar />
          {children}

        </SmoothScroll>
      </body>
    </html>
  );
}

