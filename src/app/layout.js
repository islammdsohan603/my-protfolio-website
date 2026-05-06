// src/app/layout.js
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import SmoothScroll from "@/providers/SmoothScroll";

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
<<<<<<< HEAD
  title: {
    default: "Sohan Islam | Frontend Developer",
    template: "%s | Sohan Islam",
  },
  description:
    "Sohan Islam is a Frontend Developer from Bangladesh specializing in React.js, Next.js, and modern web applications. View portfolio, projects, and contact details.",
  keywords: [
    "Sohan Islam",
    "Sohan Islam Developer",
    "Frontend Developer Bangladesh",
    "React Developer Bangladesh",
    "Next.js Developer",
    "Sohan Portfolio",
  ],
  authors: [{ name: "Sohan Islam" }],
  creator: "Sohan Islam",
  openGraph: {
    title: "Sohan Islam | Frontend Developer",
    description:
      "Portfolio of Sohan Islam - React & Next.js Developer",
    url: "https://your-domain.com",
    siteName: "Sohan Portfolio",
    locale: "en_US",
    type: "website",
=======
  title: "MD SOHAN | Sohan Islam Portfolio | Frontend Developer Bangladesh",
  description:
    "Professional Portfolio of MD SOHAN (Sohan Islam), a skilled Frontend Developer from Bangladesh specializing in Next.js, React, and Tailwind CSS. Explore my projects and skills.",
  keywords: [
    "Sohan Islam Portfolio",
    "Frontend Developer Bangladesh",
    "MD SOHAN",
    "React Developer Bangladesh",
    "Next.js Developer",
    "Web Developer Portfolio",
    "Sohan Islam Web Dev",
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
>>>>>>> 8521c852cde4491ca7276e516003b3e38a3a8bc5
  },
};

export default function RootLayout({ children }) {
  return (
<<<<<<< HEAD
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
=======
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
      <body className="antialiased font-inter">
>>>>>>> 8521c852cde4491ca7276e516003b3e38a3a8bc5
        <SmoothScroll>
          <Navbar />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}