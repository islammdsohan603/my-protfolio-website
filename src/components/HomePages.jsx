'use client';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { FaArrowDown, FaDownload, FaGithub, FaLinkedin } from 'react-icons/fa6';
import Link from 'next/link';
import { useMotionValue, useSpring, useTransform } from 'framer-motion';

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
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth mouse movement
  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });

  const spotlightX = useTransform(springX, x => `${x}px`);
  const spotlightY = useTransform(springY, y => `${y}px`);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % skillsItems.length);
    }, 2500);

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      clearInterval(interval);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <section
      id="home"
      className="relative bg-[#070d1a] text-white min-h-screen flex items-center overflow-hidden"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(#f97316 1px, transparent 1px), linear-gradient(90deg, #f97316 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Mouse Follow Spotlight */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-0 opacity-40 transition-opacity duration-300"
        style={{
          background: useTransform(
            [spotlightX, spotlightY],
            ([x, y]) => `radial-gradient(600px circle at ${x} ${y}, rgba(249, 115, 22, 0.15), transparent 80%)`
          ),
        }}
      />

      {/* Ambient blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* ── Outer container: full width, horizontal padding only ── */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-10 pt-28 pb-20">
        {/* ── Two-column grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* ══ LEFT — Text (order-2 on mobile so image shows first on small) ══ */}
          <div className="flex flex-col gap-6 order-2 lg:order-1">
            {/* Available badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 bg-orange-500/10 border border-orange-500/25 rounded-full px-5 py-2 text-orange-400 text-sm w-fit"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
              </span>
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
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-black leading-1.0 tracking-tight">
                SOHAN
                <br />
                <span
                  className="text-transparent bg-clip-text"
                  style={{
                    backgroundImage: 'linear-gradient(90deg, #f97316, #fb923c)',
                  }}
                >
                  ISLAM
                </span>
              </h1>
            </motion.div>

            {/* Animated role */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-3 h-9"
            >
              <span className="w-8 h-[2px] bg-orange-500 rounded-full shrink-0" />
              <AnimatePresence mode="wait">
                <motion.span
                  key={skillsItems[currentIndex].id}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.32 }}
                  className="text-xl md:text-2xl font-bold"
                  style={{ color: skillsItems[currentIndex].color }}
                >
                  {skillsItems[currentIndex].title}
                </motion.span>
              </AnimatePresence>
            </motion.div>

            {/* Bio */}
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

            <motion.div className="flex items-center gap-2">
              <Link
                href="https://github.com/islammdsohan603"
                target="_blank"
                className="hidden md:flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-orange-500/10 border border-white/10 hover:border-orange-500/30 rounded-xl text-sm font-medium text-gray-300 hover:text-orange-400 transition-all duration-300"
              >
                <FaGithub className="text-base" />
                GitHub
              </Link>
              <Link
                href={'https://www.linkedin.com/in/sohanislamwebdev/'}
                target="_blank"
                className="hidden md:flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-orange-500/10 border border-white/10 hover:border-orange-500/30 rounded-xl text-sm font-medium text-gray-300 hover:text-orange-400 transition-all duration-300"
              >
                <FaLinkedin className="text-base" />
                LinkedIn
              </Link>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-4 flex-wrap"
            >
              <Link
                href="#contact"
                className="px-7 py-3.5 bg-orange-500 hover:bg-orange-600 rounded-xl font-semibold text-sm transition-all duration-300 shadow-lg shadow-orange-500/25 hover:-translate-y-0.5"
              >
                Hire Me →
              </Link>
              <a
                href="/cv.pdf"
                download
                className="flex items-center gap-2 px-7 py-3.5 border border-white/15 hover:border-orange-500/50 hover:text-orange-400 rounded-xl font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5"
              >
                <FaDownload className="text-xs" />
                Download CV
              </a>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65 }}
              className="flex items-stretch border-t border-white/5 pt-4 max-w-xs"
            >
              {stats.map((s, i) => (
                <div
                  key={i}
                  className={`flex-1 text-center ${
                    i !== stats.length - 1 ? 'border-r border-white/8' : ''
                  }`}
                >
                  <p className="text-2xl font-black text-orange-400 leading-none">
                    {s.value}
                  </p>
                  <p className="text-[11px] text-gray-500 mt-1.5">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ══ RIGHT — Image ══ */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <div className="relative">
              {/* Spinning dashed rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-4 rounded-full border border-dashed border-orange-500/20"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-9 rounded-full border border-dashed border-orange-500/10"
              />

              {/* Glow pulse */}
              <motion.div
                animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.25, 0.1] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute inset-0 bg-orange-500 blur-3xl rounded-full"
              />

              {/* ── Photo ── */}
              <div className="relative w-64 h-64 md:w-72 md:h-72 lg:w-[420px] lg:h-[420px]">
                <Image
                  src="/sohanimage.png"
                  alt="Sohan Islam — Web Developer"
                  fill
                  className="object-cover object-top rounded-full shadow-2xl ring-4 ring-orange-500/25 hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>

              {/* Bottom-left floating card */}
              <motion.div
                initial={{ opacity: 0, x: -20, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                whileInView={{ y: [-4, 4, -4] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  initial: { duration: 0.8, delay: 0.6 }
                }}
                className="absolute -bottom-5 -left-6 bg-[#1e293b]/90 backdrop-blur-md border border-white/10 rounded-2xl px-4 py-2.5 shadow-xl"
              >
                <p className="text-[10px] text-gray-500 leading-none mb-0.5">
                  Experience
                </p>
                <p className="text-sm font-bold text-white">1+ Year Coding</p>
              </motion.div>

              {/* Top-right floating card */}
              <motion.div
                initial={{ opacity: 0, x: 20, y: -20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                whileInView={{ y: [4, -4, 4] }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  initial: { duration: 0.8, delay: 0.8 }
                }}
                className="absolute -top-5 -right-6 bg-orange-500 rounded-2xl px-4 py-2.5 shadow-xl shadow-orange-500/30"
              >
                <p className="text-[10px] text-white/70 leading-none mb-0.5">
                  Status
                </p>
                <p className="text-sm font-bold text-white">Open to Work</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-200 text-[10px] tracking-widest uppercase"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <FaArrowDown />
          </motion.div>
          Scroll
        </motion.div>
      </div>
    </section>
  );
}
