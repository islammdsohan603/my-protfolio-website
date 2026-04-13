import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/componetns/Navbar";
import AboutPages from "./about/page";
import SkillsPages from "./skills/page";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "sohan protfolio web site",
  description: "my protfolio web and skills deteailes",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <Navbar />
        {children}


      </body>
    </html>
  );
}
