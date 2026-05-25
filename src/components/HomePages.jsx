'use client';

import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FaArrowDown, FaDownload, FaGithub, FaLinkedin } from 'react-icons/fa6';

const ROLES = [
  { label: 'Full-Stack Developer', color: '#d6a84f' },
  { label: 'React.js Developer', color: '#38bdf8' },
  { label: 'Next.js Developer', color: '#2dd4bf' },
  { label: 'UI Experience Builder', color: '#f5d58a' },
  { label: 'JavaScript Developer', color: '#93c5fd' },
];

const STATS = [
  { value: '10+', label: 'Projects', sub: 'Delivered' },
  { value: '1+', label: 'Year', sub: 'Coding' },
  { value: '5+', label: 'Stacks', sub: 'Practiced' },
];

const SOCIAL = [
  { href: 'https://github.com/islammdsohan603', Icon: FaGithub, label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/sohanislamwebdev/', Icon: FaLinkedin, label: 'LinkedIn' },
];

export default function HomePages() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setRoleIndex((p) => (p + 1) % ROLES.length), 2800);
    return () => clearInterval(interval);
  }, []);

  const role = ROLES[roleIndex];

  return (
    <section
      id="home"
      className="theme-surface relative min-h-screen overflow-hidden"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <style>{`
        .font-display { font-family: 'Poppins', sans-serif; }
        .font-mono { font-family: 'Poppins', sans-serif; }
        .executive-grid {
          background-image:
            linear-gradient(var(--grid-line-a) 1px, transparent 1px),
            linear-gradient(90deg, var(--grid-line-b) 1px, transparent 1px);
          background-size: 72px 72px;
          mask-image: linear-gradient(to bottom, black 0%, black 65%, transparent 100%);
        }
        .premium-name {
          background: linear-gradient(110deg, var(--color-text) 0%, var(--color-accent-strong) 38%, var(--color-cyan) 78%, var(--color-text) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        @keyframes slow-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .slow-float { animation: slow-float 5s ease-in-out infinite; }
        @keyframes pulse-ring {
          0% { transform: scale(1); opacity: 0.5; }
          100% { transform: scale(1.7); opacity: 0; }
        }
        .pulse-ring::after {
          content: '';
          position: absolute;
          inset: -3px;
          border-radius: 9999px;
          border: 1px solid rgba(45,212,191,0.45);
          animation: pulse-ring 2.2s ease-out infinite;
        }
      `}</style>

      <div className="absolute inset-0 executive-grid pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at top left, var(--orb-gold), transparent 42%), radial-gradient(ellipse at 80% 20%, var(--orb-cyan), transparent 36%)' }} />
      <div className="absolute inset-x-0 bottom-0 h-44 pointer-events-none" style={{ background: 'linear-gradient(to top, var(--color-bg), transparent)' }} />

      <div className="absolute left-5 top-1/2 z-20 hidden -translate-y-1/2 flex-col items-center gap-4 xl:flex">
        <div className="h-16 w-px bg-linear-to-b from-transparent to-[#d6a84f]/40" />
        <div className="font-mono text-[9px] uppercase tracking-[0.32em] text-slate-600" style={{ writingMode: 'vertical-rl' }}>
          Portfolio 2026
        </div>
        <div className="h-16 w-px bg-linear-to-t from-transparent to-[#38bdf8]/35" />
      </div>

      <div className="absolute right-5 top-1/2 z-20 hidden -translate-y-1/2 flex-col items-center gap-4 xl:flex">
        <div className="h-16 w-px bg-linear-to-b from-transparent to-white/10" />
        <div className="flex flex-col gap-3">
          {SOCIAL.map(({ href, Icon, label }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              title={label}
              className="group flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-slate-500 transition-all duration-200 hover:border-[#d6a84f]/40 hover:bg-[#d6a84f]/10 hover:text-[#f5d58a]"
            >
              <Icon className="text-sm" />
            </Link>
          ))}
        </div>
        <div className="h-16 w-px bg-linear-to-t from-transparent to-white/10" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl items-center px-5 pb-16 pt-28 sm:px-8 lg:pb-20 lg:pt-28">
        <div className="grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-14">
          <div className="max-w-2xl space-y-6">
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="flex w-fit items-center gap-3 rounded-full border border-[#2dd4bf]/20 bg-[#101722]/80 px-4 py-2 shadow-lg shadow-cyan-950/20"
            >
              <span className="relative flex h-2.5 w-2.5 pulse-ring">
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#2dd4bf]" />
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#8df4e8]">
                Available for junior roles
              </span>
            </motion.div>

            <div className="space-y-2">
              <motion.p
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="font-mono text-xs uppercase tracking-[0.35em] text-slate-500"
              >
                Web developer from Bangladesh
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="font-display leading-none"
                style={{ fontSize: 'clamp(3.5rem, 8vw, 6.3rem)' }}
              >
                <span className="block text-white">SOHAN</span>
                <span className="block premium-name">ISLAM</span>
              </motion.h1>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.32 }}
              className="flex h-10 items-center gap-4 overflow-hidden"
            >
              <motion.div
                key={roleIndex}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                className="h-8 w-1 shrink-0 rounded-full"
                style={{ background: role.color, boxShadow: `0 0 18px ${role.color}55` }}
              />
              <AnimatePresence mode="wait">
                <motion.span
                  key={role.label}
                  initial={{ opacity: 0, y: 18, filter: 'blur(6px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -18, filter: 'blur(6px)' }}
                  transition={{ duration: 0.35 }}
                  className="font-display text-xl font-bold md:text-2xl"
                  style={{ color: role.color }}
                >
                  {role.label}
                </motion.span>
              </AnimatePresence>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.42 }}
              className="max-w-xl text-[15px] leading-[1.9] text-slate-400"
            >
              I build <span className="font-semibold text-white">business-ready web experiences</span> with clean UI,
              fast performance, and thoughtful interaction. I am currently studying Computer Science & Technology and
              building production-minded projects with <span className="font-semibold text-[#f5d58a]">React, Next.js, and Node.js</span>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.52 }}
              className="flex flex-wrap items-center gap-3"
            >
              <Link
                href="#contact"
                className="group relative overflow-hidden rounded-lg bg-[#d6a84f] px-6 py-3 text-sm font-bold text-[#05070c] shadow-xl shadow-[#d6a84f]/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#f5d58a]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Hire Me
                  <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                    -&gt;
                  </motion.span>
                </span>
              </Link>

              <a
                href="/cv.pdf"
                download
                className="flex items-center gap-2.5 rounded-lg border border-white/10 px-6 py-3 text-sm font-semibold text-slate-300 transition-all duration-250 hover:border-[#38bdf8]/35 hover:bg-[#38bdf8]/8 hover:text-[#9be8ff]"
              >
                <FaDownload className="text-xs text-[#d6a84f]" />
                Download CV
              </a>

              <div className="flex gap-2 xl:hidden">
                {SOCIAL.map(({ href, Icon, label }) => (
                  <Link
                    key={label}
                    href={href}
                    target="_blank"
                    title={label}
                    className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-slate-400 transition-all duration-200 hover:border-[#d6a84f]/35 hover:text-[#f5d58a]"
                  >
                    <Icon className="text-base" />
                  </Link>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.62 }}
              className="grid w-full max-w-md grid-cols-3 overflow-hidden rounded-xl border border-white/8 bg-[#090d14]/80 shadow-2xl shadow-black/20 sm:w-fit"
            >
              {STATS.map((s, i) => (
                <div key={s.label} className={`px-4 py-3.5 text-center ${i < STATS.length - 1 ? 'border-r border-white/8' : ''}`}>
                  <span className="font-display block text-2xl font-black leading-none text-[#f5d58a]">{s.value}</span>
                  <span className="font-mono mt-1 block text-[10px] text-white/75">{s.label}</span>
                  <span className="font-mono block text-[9px] text-slate-600">{s.sub}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.72 }}
              className="flex flex-wrap items-center gap-2"
            >
              <span className="font-mono mr-1 text-[10px] uppercase tracking-widest text-slate-600">Stack</span>
              {['React', 'Next.js', 'Node.js', 'MongoDB', 'Tailwind'].map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.75 + i * 0.06, type: 'spring', stiffness: 300 }}
                  whileHover={{ y: -3, scale: 1.04 }}
                  className="font-mono cursor-default rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[11px] text-slate-400 transition-colors hover:border-[#d6a84f]/30 hover:text-[#f5d58a]"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 32 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.85, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative slow-float">
              <div className="absolute -inset-8 rounded-full border border-[#d6a84f]/10" />
              <div className="absolute -inset-14 rounded-full border border-[#38bdf8]/8" />
              <div className="absolute inset-0 rounded-full bg-[#d6a84f]/20 blur-3xl" />

              <div
                className="relative overflow-hidden rounded-full border border-[#d6a84f]/25 shadow-2xl shadow-black/50"
                style={{ width: 'clamp(240px, 25vw, 380px)', height: 'clamp(240px, 25vw, 380px)' }}
              >
                <Image
                  src="/sohanimage.png"
                  alt="Sohan Islam - Web Developer"
                  fill
                  priority
                  sizes="(max-width: 768px) 80vw, 380px"
                  className="object-cover object-top transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 rounded-full shadow-[inset_0_-70px_70px_rgba(5,7,12,0.78)]" />
              </div>

              <div className="absolute -bottom-5 -left-5 z-10 rounded-xl border border-white/10 bg-[#101722]/90 px-4 py-3 shadow-2xl backdrop-blur-md">
                <p className="font-mono mb-0.5 text-[9px] uppercase tracking-widest text-slate-500">Focus</p>
                <p className="font-display text-sm font-black text-white">Business UI</p>
                <div className="mt-2 h-0.5 w-20 rounded-full bg-linear-to-r from-[#d6a84f] to-transparent" />
              </div>

              <div className="absolute -right-5 -top-5 z-10 rounded-xl border border-[#2dd4bf]/25 bg-[#0b161a]/90 px-4 py-3 shadow-2xl backdrop-blur-md">
                <p className="font-mono mb-0.5 text-[9px] uppercase tracking-widest text-[#7ddbd3]">Status</p>
                <p className="font-display text-sm font-black text-[#b8fff7]">Open to Work</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2"
      >
        <motion.div animate={{ y: [0, 7, 0] }} transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}>
          <FaArrowDown className="text-xs text-slate-600" />
        </motion.div>
        <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-slate-700">Scroll</span>
      </motion.div>
    </section>
  );
}
