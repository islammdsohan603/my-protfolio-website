'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaHome, FaArrowLeft } from 'react-icons/fa';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#070d1a] flex flex-col items-center justify-center text-white px-6 overflow-hidden relative">
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
      
      {/* Animated "404" */}
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-9xl md:text-[12rem] font-display font-black text-transparent bg-clip-text bg-linear-to-b from-orange-500 to-orange-800 tracking-tighter opacity-50 mb-4"
      >
        404
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-center relative z-10"
      >
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
          Oops! You&apos;ve entered a <span className="text-orange-500">black hole</span>.
        </h2>
        <p className="text-gray-400 text-lg md:text-xl max-w-lg mx-auto mb-10 leading-relaxed">
          The page you are looking for has been pulled into the void or never existed in this dimension. Let&apos;s get you back to safety.
        </p>

        {/* Home Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/"
              className="flex items-center gap-2 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-2xl font-bold transition-colors duration-300 shadow-lg shadow-orange-500/20 group"
            >
              <FaHome className="group-hover:-translate-y-0.5 transition-transform" />
              Back to Home
            </Link>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button
              onClick={() => window.history.back()}
              className="flex items-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl font-bold transition-all duration-300"
            >
              <FaArrowLeft className="text-sm" />
              Go Back
            </button>
          </motion.div>
        </div>
      </motion.div>

      {/* Floating particles/elements for extra polish */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 10, 0]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-1/4 text-orange-500/20 text-6xl hidden lg:block"
      >
        ?
      </motion.div>
      <motion.div
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -10, 0]
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 left-1/4 text-blue-500/20 text-4xl hidden lg:block"
      >
        !
      </motion.div>
    </div>
  );
}
