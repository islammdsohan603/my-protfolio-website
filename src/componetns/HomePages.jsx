'use client';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaArrowDown, FaDownload } from 'react-icons/fa6';
import Link from 'next/link';

const skillsItems = [
  { id: 1, title: 'Full Stack Developer', color: '#f97316' },
  { id: 2, title: 'JavaScript Expert', color: '#facc15' },
  { id: 3, title: 'React.js Developer', color: '#38bdf8' },
  { id: 4, title: 'Next.js Developer', color: '#a78bfa' },
  { id: 5, title: 'UI/UX Enthusiast', color: '#34d399' },
];

const stats = [
  { value: '10+', label: 'Projects Done' },
  { value: '1+', label: 'Years Learning' },
  { value: '5+', label: 'Technologies' },
];

export default function HomePages() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % skillsItems.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative bg-[#070d1a] text-white min-h-screen flex items-center overflow-hidden"
    >
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(#f97316 1px, transparent 1px), linear-gradient(90deg, #f97316 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Ambient glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 w-11/12 max-w-6xl mx-auto pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <div className="space-y-6">
            {/* Available badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 bg-orange-500/10 border border-orange-500/25 rounded-full px-5 py-2 text-orange-400 text-sm"
            >
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Available for work
            </motion.div>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <p className="text-gray-500 text-sm tracking-[0.3em] uppercase mb-2">
                Hello, I&apos;m
              </p>
              <h1 className="text-5xl md:text-7xl font-black leading-none tracking-tight">
                MD: SOHAN
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                  ISLAM
                </span>
              </h1>
            </motion.div>

            {/* Animated skill title */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-3 h-10"
            >
              <span className="w-8 h-[2px] bg-orange-500 rounded" />
              <AnimatePresence mode="wait">
                <motion.span
                  key={skillsItems[currentIndex].id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.35 }}
                  className="text-xl md:text-2xl font-bold"
                  style={{ color: skillsItems[currentIndex].color }}
                >
                  {skillsItems[currentIndex].title}
                </motion.span>
              </AnimatePresence>
            </motion.div>

            {/* Short bio */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-gray-400 text-base leading-7 max-w-md"
            >
              I craft fast, modern web applications with clean code and
              exceptional user experience. Passionate about turning ideas into
              reality.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-4 flex-wrap"
            >
              <Link
                href="#contact"
                className="group flex items-center gap-2 px-7 py-3.5 bg-orange-500 hover:bg-orange-600 rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5"
              >
                Hire Me
              </Link>
              <a
                href="/cv.pdf"
                download
                className="group flex items-center gap-2 px-7 py-3.5 border border-gray-600 hover:border-orange-500 hover:text-orange-400 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-0.5"
              >
                <FaDownload className="text-sm" />
                Download CV
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65 }}
              className="flex items-center gap-8 pt-2"
            >
              {stats.map((s, i) => (
                <div key={i} className="text-center">
                  <p className="text-2xl font-black text-orange-400">
                    {s.value}
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Hexagon-style decorative ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-4 rounded-full border border-dashed border-orange-500/20"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-8 rounded-full border border-dashed border-orange-500/10"
              />

              {/* Glow */}
              <motion.div
                animate={{ scale: [1, 1.12, 1], opacity: [0.15, 0.3, 0.15] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute inset-0 bg-orange-500 blur-3xl rounded-full"
              />

              {/* Image */}
              <div className="relative w-72 h-72 md:w-80 md:h-80">
                <Image
                  src="/hero.JPG"
                  alt="Sohan Islam"
                  fill
                  className="object-cover rounded-full shadow-2xl ring-4 ring-orange-500/20"
                  priority
                />
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-4 -left-4 bg-[#1e293b] border border-white/10 rounded-2xl px-4 py-3 shadow-xl"
              >
                <p className="text-xs text-gray-400">Experience</p>
                <p className="text-white font-bold text-sm">1+ Year Coding</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 }}
                className="absolute -top-4 -right-4 bg-orange-500 rounded-2xl px-4 py-3 shadow-xl shadow-orange-500/30"
              >
                <p className="text-xs text-white/80">Status</p>
                <p className="text-white font-bold text-sm">Open to Work</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600 text-xs"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <FaArrowDown />
          </motion.div>
          <span>Scroll Down</span>
        </motion.div>
      </div>
    </section>
  );
}
