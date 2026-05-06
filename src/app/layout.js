// src/app/layout.js
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/componetns/Navbar";
import SmoothScroll from "@/providers/SmoothScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
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
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <SmoothScroll>
          <Navbar />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}