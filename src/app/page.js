"use client"

import '../app/globals.css'
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const skillsItems = [
  { id: 1, title: "WEB DEVELOPER" },
  { id: 2, title: "JAVASCRIPT" },
  { id: 3, title: "REACT.JS" },
  { id: 4, title: "NEXT.JS" },
  { id: 5, title: "FULL STACK DEVELOPER" },
]

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % skillsItems.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#0f172a] text-white min-h-screen py-10">
      <div className="w-11/12 max-w-6xl mx-auto">

        {/* grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center pt-10">

          {/* Left Content */}
          <div className="max-w-2xl text-center mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                MD: SOHA<span className="text-orange-500">N </span>
                Islam
              </h1>

              <h2 className="mt-6 text-lg md:text-xl text-gray-300 flex items-center justify-center gap-2 min-h-2.5">

                <AnimatePresence mode="wait">
                  <motion.span
                    key={skillsItems[currentIndex].id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="text-orange-400 font-semibold inline-block"
                  >
                    {skillsItems[currentIndex].title}
                  </motion.span>
                </AnimatePresence>
              </h2>

              <div className="mt-8 flex items-center justify-center gap-4">
                <button className="px-6 py-3 rounded-2xl cursor-pointer bg-orange-500 hover:bg-orange-600 shadow-lg transition">
                  Hire Me
                </button>
                <button className="px-6 py-3 rounded-2xl cursor-pointer border border-gray-500 hover:bg-gray-800 transition">
                  Download CV
                </button>
              </div>
            </motion.div>
          </div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-orange-500 blur-2xl opacity-20 rounded-full"></div>
              <Image
                src="/hero.JPG"
                alt="hero Image"
                width={350}
                height={350}
                className="relative object-cover rounded-full shadow-2xl animate-pulse hover:scale-105 duration-300"
                priority
              />
            </div>
          </motion.div>

        </div>
      </div>


    </div>
  );
}