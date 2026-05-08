'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaGraduationCap, FaCode, FaRocket, FaDownload, FaStar, FaMedal, FaTrophy } from 'react-icons/fa6';

/* ─────────────────────────────────────────
   DATA
───────────────────────────────────────── */
const timeline = [
  {
    icon: <FaMedal />,
    year: '2017',
    badge: 'PSC',
    title: 'Primary School Certificate',
    sub: 'Completed Primary Education — The journey begins',
    desc: 'Successfully passed the Primary School Certificate examination, marking the very first academic milestone in my educational journey.',
    color: 'text-yellow-400',
    border: 'border-yellow-500/30',
    bg: 'bg-yellow-500/10',
    glow: 'shadow-yellow-500/20',
    accentColor: '#eab308',
    step: '01',
  },
  {
    icon: <FaTrophy />,
    year: '2023',
    badge: 'SSC',
    title: 'Secondary School Certificate',
    sub: 'Passed SSC — A strong academic step forward',
    desc: 'Completed the Secondary School Certificate with strong results, demonstrating consistent academic growth and determination.',
    color: 'text-blue-400',
    border: 'border-blue-500/30',
    bg: 'bg-blue-500/10',
    glow: 'shadow-blue-500/20',
    accentColor: '#3b82f6',
    step: '02',
  },
  {
    icon: <FaGraduationCap />,
    year: '2023 – Present',
    badge: '5th Sem',
    title: 'Diploma in Engineering',
    sub: 'Computer Science & Technology — Polytechnic Institute',
    desc: 'Currently pursuing a Diploma in Computer Science & Technology. Now in the 5th semester, gaining deep knowledge in programming, networking, and software engineering.',
    color: 'text-cyan-400',
    border: 'border-cyan-500/30',
    bg: 'bg-cyan-500/10',
    glow: 'shadow-cyan-500/20',
    accentColor: '#06b6d4',
    step: '03',
  },
  {
    icon: <FaCode />,
    year: '2024 – 2025',
    badge: 'Level 1',
    title: 'Full-Stack Web Development',
    sub: 'Programming Hero — Level 1 Completed ✅',
    desc: 'Completed Level 1 of the Full-Stack Web Development course at Programming Hero. Built real-world projects covering HTML, CSS, JavaScript, React, Node.js, Express & MongoDB.',
    color: 'text-orange-400',
    border: 'border-orange-500/30',
    bg: 'bg-orange-500/10',
    glow: 'shadow-orange-500/20',
    accentColor: '#f97316',
    step: '04',
  },
  {
    icon: <FaRocket />,
    year: '2026 – Present',
    badge: 'Now',
    title: 'Freelance & Personal Projects',
    sub: 'React, Next.js & Node.js — Turning dreams into reality',
    desc: 'Actively working on freelance projects and personal products using React, Next.js and Node.js. Seeking my first professional Junior Developer role.',
    color: 'text-green-400',
    border: 'border-green-500/30',
    bg: 'bg-green-500/10',
    glow: 'shadow-green-500/20',
    accentColor: '#22c55e',
    step: '05',
  },
];

const traits = [
  { emoji: '⚡', label: 'Fast Learner' },
  { emoji: '🎯', label: 'Goal Oriented' },
  { emoji: '🤝', label: 'Team Player' },
  { emoji: '💡', label: 'Problem Solver' },
  { emoji: '🔥', label: 'Self-Driven' },
  { emoji: '🌙', label: 'Night Coder' },
];

const services = [
  {
    icon: '🎨',
    title: 'Frontend Dev',
    desc: 'Responsive, pixel-perfect UIs with React, Next.js & Tailwind CSS',
    tech: ['React', 'Next.js', 'Tailwind'],
  },
  {
    icon: '⚙️',
    title: 'Backend Dev',
    desc: 'Scalable REST APIs with Node.js, Express & MongoDB',
    tech: ['Node.js', 'Express', 'MongoDB'],
  },
  {
    icon: '✨',
    title: 'UI/UX Design',
    desc: 'Clean, modern interfaces with buttery Framer Motion animations',
    tech: ['Figma', 'Motion', 'CSS'],
  },
];

const stats = [
  { value: '5th', label: 'Semester', note: 'Polytechnic' },
  { value: '1+', label: 'Years', note: 'Coding' },
  { value: 'L1', label: 'Completed', note: 'Prog. Hero' },
  { value: '∞', label: 'Passion', note: 'Always' },
];

/* ─────────────────────────────────────────
   ANIMATION VARIANTS
───────────────────────────────────────── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, amount: 0.15 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

/* ─────────────────────────────────────────
   COMPONENT
───────────────────────────────────────── */
const AboutPages = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);

  return (
    <section
      ref={containerRef}
      className="relative bg-[#050810] text-white overflow-hidden"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* Google Font */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700;800;900&family=Syne:wght@700;800;900&family=JetBrains+Mono:wght@400;500&display=swap');
        .font-display { font-family: 'Syne', sans-serif; }
        .font-mono-code { font-family: 'JetBrains Mono', monospace; }

        /* Animated grid */
        .grid-bg {
          background-image:
            linear-gradient(rgba(249,115,22,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(249,115,22,0.04) 1px, transparent 1px);
          background-size: 60px 60px;
        }

        /* Neon border glow */
        .neon-border {
          box-shadow: 0 0 0 1px rgba(249,115,22,0.15),
                      0 0 20px rgba(249,115,22,0.08),
                      inset 0 0 20px rgba(249,115,22,0.02);
        }

        /* Shimmer effect */
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .shimmer-text {
          background: linear-gradient(90deg,
            #f97316 0%, #fbbf24 30%, #f97316 50%, #fbbf24 70%, #f97316 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 4s linear infinite;
        }

        /* Pulse ring */
        @keyframes pulse-ring {
          0% { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(1.6); opacity: 0; }
        }
        .pulse-ring::after {
          content: '';
          position: absolute;
          inset: -4px;
          border-radius: inherit;
          border: 1px solid rgba(249,115,22,0.4);
          animation: pulse-ring 2s ease-out infinite;
        }

        /* Timeline connector */
        .timeline-line {
          background: linear-gradient(180deg,
            rgba(249,115,22,0.6) 0%,
            rgba(249,115,22,0.1) 100%);
        }

        /* Card hover gradient */
        .service-card::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          opacity: 0;
          transition: opacity 0.4s;
          background: radial-gradient(circle at 50% 0%, rgba(249,115,22,0.12), transparent 70%);
        }
        .service-card:hover::before { opacity: 1; }

        /* Scanline overlay */
        .scanlines::after {
          content: '';
          position: absolute;
          inset: 0;
          background: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(0,0,0,0.05) 2px,
            rgba(0,0,0,0.05) 4px
          );
          pointer-events: none;
          border-radius: inherit;
        }
      `}</style>

      {/* ── Ambient background ── */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-orange-500/6 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-cyan-500/4 rounded-full blur-[80px]" />
      </div>

      {/* ── Scrolling ticker ── */}
      <div className="overflow-hidden border-b border-orange-500/10 bg-orange-500/3 py-2 relative">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="flex gap-12 whitespace-nowrap font-mono-code text-xs text-orange-500/40"
        >
          {Array(4).fill(['SOHAN ISLAM', 'FULL-STACK DEVELOPER', 'BANGLADESH', 'REACT • NEXT.JS • NODE', 'OPEN TO WORK', 'POLYTECHNIC 5TH SEM']).flat().map((t, i) => (
            <span key={i}>✦ {t}</span>
          ))}
        </motion.div>
      </div>

      <div className="relative w-11/12 max-w-6xl mx-auto py-24 space-y-32">

        {/* ═══════════════════════════════════════
            HERO ROW
        ═══════════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT — Photo */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              {/* Decorative geometric frames */}
              <div className="absolute -inset-4 rounded-[2rem] border border-orange-500/10 rotate-[3deg]" />
              <div className="absolute -inset-7 rounded-[2.5rem] border border-orange-500/5 -rotate-[1.5deg]" />

              {/* Corner accents */}
              {[
                'top-0 left-0 border-t-2 border-l-2 rounded-tl-2xl',
                'top-0 right-0 border-t-2 border-r-2 rounded-tr-2xl',
                'bottom-0 left-0 border-b-2 border-l-2 rounded-bl-2xl',
                'bottom-0 right-0 border-b-2 border-r-2 rounded-br-2xl',
              ].map((cls, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className={`absolute w-8 h-8 border-orange-500/60 ${cls} -m-1`}
                />
              ))}

              {/* Pulsing glow */}
              <motion.div
                animate={{ opacity: [0.15, 0.35, 0.15], scale: [1, 1.05, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute inset-0 bg-orange-500/20 blur-3xl rounded-3xl"
              />

              {/* Photo */}
              <div className="relative w-72 h-80 md:w-80 md:h-[420px] rounded-3xl overflow-hidden border border-orange-500/20 shadow-2xl shadow-orange-500/10 scanlines">
                <Image
                  src="/hero.JPG"
                  alt="Sohan Islam"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-top hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#050810]/70 via-transparent to-transparent" />

                {/* Status badge inside photo */}
                <motion.div
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute top-4 left-4 flex items-center gap-2 bg-[#050810]/80 backdrop-blur-sm border border-green-500/30 rounded-full px-3 py-1.5"
                >
                  <span className="w-2 h-2 bg-green-400 rounded-full relative pulse-ring" />
                  <span className="text-xs text-green-400 font-mono-code font-medium">Open to Work</span>
                </motion.div>
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-6 left-1/2 -translate-x-1/2 neon-border bg-[#0f172a] border border-orange-500/20 rounded-2xl px-6 py-3 shadow-2xl whitespace-nowrap text-center"
              >
                <p className="text-[10px] text-gray-500 font-mono-code tracking-widest uppercase">Computer Science & Tech</p>
                <p className="text-sm font-bold text-orange-400 font-display">Polytechnic Institute · 5th Sem</p>
              </motion.div>

              {/* XP chip */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                animate={{ y: [-3, 3, -3] }}
                className="absolute -top-4 -right-4 bg-[#0f172a] border border-yellow-500/30 rounded-xl px-3 py-2 text-center shadow-xl"
              >
                <p className="text-[10px] text-yellow-500/70 font-mono-code">XP</p>
                <p className="text-lg font-bold text-yellow-400 font-display leading-none">+1.5</p>
                <p className="text-[9px] text-yellow-500/50">Years</p>
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT — Intro */}
          <motion.div {...fadeUp(0.2)} className="space-y-7 lg:pl-2">
            <div className="space-y-2">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-2 text-orange-400 font-mono-code tracking-[0.25em] text-[11px] uppercase border border-orange-500/20 rounded-full px-4 py-1.5 bg-orange-500/5"
              >
                <FaStar className="text-[8px]" /> About Me
              </motion.span>

              <h2 className="font-display text-4xl md:text-5xl xl:text-6xl font-black leading-[1.05]">
                Passionate About{' '}
                <span className="shimmer-text">Building the Web</span>
              </h2>
            </div>

            <div className="space-y-4 text-gray-400 leading-8 text-[15px]">
              <p>
                I&apos;m <span className="text-white font-semibold">Sohan Islam</span>
                {' — a self-driven web developer from Bangladesh. I passed PSC in 2017, SSC in 2023, and I\'m currently studying Diploma in Engineering at a Polytechnic Institute.'}
              </p>
              <p>
                I completed Level 1 of Full-Stack Web Development at{' '}
                <span className="text-orange-400 font-semibold">Programming Hero</span> and
                I&apos;m actively building modern, fast, and user-friendly digital products
                with clean code.
              </p>
            </div>

            {/* Trait chips */}
            <div className="flex flex-wrap gap-2.5">
              {traits.map((t, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.7 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.15 + i * 0.07, type: 'spring', stiffness: 300 }}
                  whileHover={{ scale: 1.08, borderColor: 'rgba(249,115,22,0.5)' }}
                  className="flex items-center gap-1.5 text-sm px-4 py-2 bg-white/3 border border-white/8 rounded-full text-gray-300 cursor-default transition-colors"
                >
                  <span>{t.emoji}</span> {t.label}
                </motion.span>
              ))}
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-4 gap-3 pt-1">
              {stats.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  className="bg-white/3 border border-white/6 rounded-2xl p-3 text-center hover:border-orange-500/20 transition-colors"
                >
                  <p className="font-display text-2xl font-black text-orange-400">{s.value}</p>
                  <p className="text-[10px] text-gray-400">{s.label}</p>
                  <p className="text-[9px] text-gray-600 font-mono-code">{s.note}</p>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-3 pt-1">
              <Link
                href="/contact"
                className="relative px-7 py-3 bg-orange-500 hover:bg-orange-400 rounded-xl font-bold transition-all duration-300 shadow-xl shadow-orange-500/25 text-sm overflow-hidden group"
              >
                <span className="relative z-10">Hire Me →</span>
                <div className="absolute inset-0 bg-linear-to-r from-orange-400 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
              <a
                href="/cv.pdf"
                download
                className="flex items-center gap-2 px-7 py-3 border border-white/10 hover:border-orange-500/40 hover:bg-orange-500/5 rounded-xl font-semibold transition-all duration-300 text-sm"
              >
                <FaDownload className="text-orange-400 text-xs" />
                Download CV
              </a>
            </div>
          </motion.div>
        </div>

        {/* ═══════════════════════════════════════
            SERVICES
        ═══════════════════════════════════════ */}
        <motion.div {...fadeUp(0)} className="space-y-10">
          <div className="flex items-end justify-between">
            <div>
              <p className="font-mono-code text-xs text-orange-500/60 tracking-widest mb-2">// CAPABILITIES</p>
              <h3 className="font-display text-3xl md:text-4xl font-black">
                What I <span className="text-orange-400">Do</span>
              </h3>
            </div>
            <div className="hidden md:block w-32 h-px bg-linear-to-l from-transparent to-orange-500/30" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {services.map((item, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.12)}
                whileHover={{ y: -8, scale: 1.01 }}
                className="service-card relative bg-linear-to-br from-[#0f172a] to-[#080c18] border border-white/5 hover:border-orange-500/20 rounded-2xl p-7 transition-all duration-400 overflow-hidden"
              >
                {/* Step number */}
                <span className="absolute top-5 right-5 font-mono-code text-4xl font-black text-white/3">
                  0{i + 1}
                </span>

                <div className="text-5xl mb-5">{item.icon}</div>
                <h4 className="font-display font-bold text-white text-xl mb-2">{item.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{item.desc}</p>

                <div className="flex flex-wrap gap-2">
                  {item.tech.map((t, j) => (
                    <span key={j} className="text-[11px] px-2.5 py-1 bg-orange-500/8 border border-orange-500/15 text-orange-400/80 rounded-full font-mono-code">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ═══════════════════════════════════════
            TIMELINE
        ═══════════════════════════════════════ */}
        <motion.div {...fadeUp(0)} className="space-y-10">
          <div>
            <p className="font-mono-code text-xs text-orange-500/60 tracking-widest mb-2">// JOURNEY</p>
            <h3 className="font-display text-3xl md:text-4xl font-black">
              Education &amp; <span className="text-orange-400">Experience</span>
            </h3>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-px timeline-line hidden md:block" />

            <div className="space-y-5">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ x: 6 }}
                  className={`relative flex items-center gap-6 bg-linear-to-r from-[#0f172a] to-[#080c18] rounded-2xl p-5 border ${item.border} hover:shadow-lg ${item.glow} transition-all duration-300 md:ml-4`}
                >
                  {/* Timeline dot */}
                  <div className={`absolute -left-9 w-4 h-4 rounded-full ${item.bg} border-2 ${item.border} hidden md:block`} />

                  {/* Step badge */}
                  <div className={`shrink-0 w-12 h-12 rounded-xl ${item.bg} ${item.color} flex items-center justify-center text-xl border ${item.border}`}>
                    {item.icon}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1 flex-wrap">
                      <span className={`font-mono-code text-[10px] ${item.color} border ${item.border} ${item.bg} px-2 py-0.5 rounded-full`}>
                        {item.badge}
                      </span>
                      <span className="font-mono-code text-xs text-gray-600">{item.year}</span>
                    </div>
                    <h4 className="font-display font-bold text-white text-base md:text-lg leading-tight">{item.title}</h4>
                    <p className="text-sm text-gray-400 mt-0.5">{item.sub}</p>
                  </div>

                  {/* Step number */}
                  <span className="font-display text-4xl font-black text-white/4 shrink-0 hidden sm:block">
                    {item.step}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ═══════════════════════════════════════
            CTA BANNER
        ═══════════════════════════════════════ */}
        <motion.div
          {...fadeUp(0)}
          className="relative rounded-3xl overflow-hidden border border-orange-500/20"
        >
          {/* Background layers */}
          <div className="absolute inset-0 bg-linear-to-br from-orange-500/10 via-[#0f172a] to-amber-600/5" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(249,115,22,0.15),transparent_60%)]" />
          <div className="absolute inset-0 grid-bg opacity-40" />

          {/* Corner decorations */}
          <div className="absolute top-0 left-0 w-32 h-32 border-t border-l border-orange-500/20 rounded-tl-3xl" />
          <div className="absolute bottom-0 right-0 w-32 h-32 border-b border-r border-orange-500/20 rounded-br-3xl" />

          <div className="relative p-12 md:p-16 text-center space-y-4">
            <p className="font-mono-code text-xs text-orange-500/50 tracking-[0.3em] uppercase">// NEXT STEP</p>
            <h3 className="font-display text-3xl md:text-4xl font-black">
              Ready to Work <span className="shimmer-text">Together?</span>
            </h3>
            <p className="text-gray-400 max-w-md mx-auto text-sm leading-7">
              Interested in junior roles, internships, and freelance projects. Let's create something amazing together! 🚀
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Link
                href="/contact"
                className="relative px-8 py-3.5 bg-orange-500 hover:bg-orange-400 rounded-xl font-bold text-sm transition-all shadow-2xl shadow-orange-500/30 group overflow-hidden"
              >
                <span className="relative z-10">Get In Touch →</span>
                <div className="absolute inset-0 bg-linear-to-r from-orange-400 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
              <a
                href="/cv.pdf"
                download
                className="flex items-center gap-2 px-8 py-3.5 border border-white/10 hover:border-orange-500/40 hover:bg-orange-500/5 rounded-xl font-semibold text-sm transition-all"
              >
                <FaDownload className="text-orange-400 text-xs" /> Download CV
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutPages;