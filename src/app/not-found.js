'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaHome, FaArrowLeft } from 'react-icons/fa';

export default function NotFound() {
  return (
    <div className="theme-surface min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden relative">
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none" style={{ background: 'var(--orb-gold)' }} />
      <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full blur-[100px] pointer-events-none" style={{ background: 'var(--orb-cyan)' }} />
      
      {/* Animated "404" */}
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-9xl md:text-[12rem] font-display font-black text-transparent bg-clip-text tracking-tighter opacity-60 mb-4"
        style={{ backgroundImage: 'linear-gradient(to bottom, var(--color-accent-strong), var(--color-cyan))' }}
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
          Oops! You&apos;ve entered a <span style={{ color: 'var(--color-accent-strong)' }}>black hole</span>.
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
              className="flex items-center gap-2 px-8 py-4 rounded-xl font-bold transition-all duration-300 group"
              style={{ background: 'var(--color-accent)', color: 'var(--color-bg)', boxShadow: 'var(--shadow-premium)' }}
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
              className="flex items-center gap-2 px-8 py-4 border rounded-xl font-bold transition-all duration-300"
              style={{ background: 'var(--color-panel)', borderColor: 'var(--color-border)' }}
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
        className="absolute top-1/4 right-1/4 text-6xl hidden lg:block"
        style={{ color: 'color-mix(in srgb, var(--color-accent) 22%, transparent)' }}
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
