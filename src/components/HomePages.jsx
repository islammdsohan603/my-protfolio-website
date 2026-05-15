'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { FaDownload, FaGithub, FaLinkedin, FaArrowDown } from 'react-icons/fa6';

/* ─────────────────────────────────────────
   DATA
───────────────────────────────────────── */
const ROLES = [
  { label: 'Full-Stack Developer', color: '#f97316' },
  { label: 'React.js Developer',   color: '#38bdf8' },
  { label: 'Next.js Developer',    color: '#a78bfa' },
  { label: 'UI/UX Enthusiast',     color: '#34d399' },
  { label: 'JavaScript Expert',    color: '#fbbf24' },
];

const STATS = [
  { value: '10+', label: 'Projects',    sub: 'Completed'   },
  { value: '1+',  label: 'Year',        sub: 'of Coding'   },
  { value: '5+',  label: 'Tech Stack',  sub: 'Mastered'    },
];

const SOCIAL = [
  { href: 'https://github.com/islammdsohan603',            Icon: FaGithub,   label: 'GitHub'   },
  { href: 'https://www.linkedin.com/in/sohanislamwebdev/', Icon: FaLinkedin, label: 'LinkedIn' },
];

/* ─────────────────────────────────────────
   COMPONENT
───────────────────────────────────────── */
export default function HomePages() {
  const [roleIndex, setRoleIndex] = useState(0);
  const sectionRef = useRef(null);

  /* Mouse spotlight */
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const sX = useSpring(mouseX, { stiffness: 80, damping: 25 });
  const sY = useSpring(mouseY, { stiffness: 80, damping: 25 });
  const spotBg = useTransform(
    [sX, sY],
    ([x, y]) => `radial-gradient(700px circle at ${x}px ${y}px, rgba(249,115,22,0.10), transparent 75%)`
  );

  useEffect(() => {
    const interval = setInterval(() => setRoleIndex(p => (p + 1) % ROLES.length), 2800);
    const onMove = (e) => { mouseX.set(e.clientX); mouseY.set(e.clientY); };
    window.addEventListener('mousemove', onMove);
    return () => { clearInterval(interval); window.removeEventListener('mousemove', onMove); };
  }, [mouseX, mouseY]);

  const role = ROLES[roleIndex];

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#040710] text-white"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* ───── Styles ───── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300&family=Syne:wght@700;800;900&family=JetBrains+Mono:wght@300;400;500&display=swap');
        .font-display { font-family: 'Syne', sans-serif; }
        .font-mono    { font-family: 'JetBrains Mono', monospace; }

        /* Fine dot grid */
        .dot-bg {
          background-image: radial-gradient(circle, rgba(255,255,255,0.055) 1px, transparent 1px);
          background-size: 22px 22px;
        }

        /* Noise grain overlay */
        .grain::after {
          content: '';
          position: fixed; inset: 0; z-index: 1;
          pointer-events: none;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
          background-size: 200px 200px;
          opacity: 0.35;
        }

        /* Shimmer word */
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        .shimmer-name {
          background: linear-gradient(110deg,
            #f97316 0%, #fbbf24 20%, #fff 35%, #fbbf24 50%, #f97316 65%, #fbbf24 80%, #f97316 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 5s linear infinite;
        }

        /* Vertical marquee */
        @keyframes marquee-up {
          0%   { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        .marquee-track { animation: marquee-up 18s linear infinite; }

        /* Blinking cursor */
        @keyframes blink { 0%,100% { opacity:1; } 50% { opacity:0; } }
        .cursor-blink { animation: blink 1s step-end infinite; }

        /* Ring spin */
        @keyframes spin-cw  { to { transform: rotate(360deg);  } }
        @keyframes spin-ccw { to { transform: rotate(-360deg); } }
        .ring-cw  { animation: spin-cw  24s linear infinite; }
        .ring-ccw { animation: spin-cw  18s linear infinite reverse; }

        /* Floating badge */
        @keyframes float-a { 0%,100%{ transform:translateY(0);   } 50%{ transform:translateY(-8px); } }
        @keyframes float-b { 0%,100%{ transform:translateY(0);   } 50%{ transform:translateY( 8px); } }
        .float-a { animation: float-a 3.5s ease-in-out infinite; }
        .float-b { animation: float-b 4s   ease-in-out infinite; }

        /* Pulse ring */
        @keyframes pulse-ring {
          0%   { transform: scale(1);   opacity: 0.5; }
          100% { transform: scale(1.7); opacity: 0; }
        }
        .pulse-ring::after {
          content:''; position:absolute; inset:-3px; border-radius:9999px;
          border: 1px solid rgba(74,222,128,0.5);
          animation: pulse-ring 2s ease-out infinite;
        }

        /* Stat bar fill */
        @keyframes fill-bar { from { width:0; } to { width:100%; } }

        /* Glow orb float */
        @keyframes orb-float {
          0%,100% { transform: translateY(0) scale(1);   }
          50%      { transform: translateY(-40px) scale(1.05); }
        }
      `}</style>

      {/* ───── Noise grain ───── */}
      <div className="grain pointer-events-none" />

      {/* ───── Dot grid ───── */}
      <div className="absolute inset-0 dot-bg pointer-events-none opacity-70" />

      {/* ───── Ambient blobs ───── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[10%] w-[600px] h-[600px] rounded-full blur-[160px]"
          style={{ background: 'radial-gradient(ellipse, rgba(249,115,22,0.10), transparent 70%)', animation: 'orb-float 10s ease-in-out infinite' }} />
        <div className="absolute bottom-[-5%] right-[5%] w-[450px] h-[450px] rounded-full blur-[120px]"
          style={{ background: 'radial-gradient(ellipse, rgba(56,189,248,0.07), transparent 70%)', animation: 'orb-float 13s ease-in-out infinite 3s' }} />
        <div className="absolute top-[40%] right-[20%] w-[280px] h-[280px] rounded-full blur-[90px]"
          style={{ background: 'radial-gradient(ellipse, rgba(167,139,250,0.06), transparent 70%)', animation: 'orb-float 8s ease-in-out infinite 1.5s' }} />
      </div>

      {/* ───── Mouse spotlight ───── */}
      <motion.div className="pointer-events-none absolute inset-0 z-0" style={{ background: spotBg }} />

      {/* ───── Vertical side text ───── */}
      <div className="absolute left-5 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-4 z-20">
        <div className="w-px h-16 bg-linear-to-b from-transparent to-orange-500/40" />
        <div className="font-mono text-[9px] text-gray-600 tracking-[0.3em] uppercase" style={{ writingMode: 'vertical-rl' }}>
          Portfolio · 2026
        </div>
        <div className="w-px h-16 bg-linear-to-t from-transparent to-orange-500/40" />
      </div>

      {/* ───── Social sidebar ───── */}
      <div className="absolute right-5 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-4 z-20">
        <div className="w-px h-16 bg-linear-to-b from-transparent to-white/10" />
        <div className="flex flex-col gap-3">
          {SOCIAL.map(({ href, Icon, label }) => (
            <Link key={label} href={href} target="_blank"
              className="group flex items-center justify-center w-9 h-9 rounded-xl border border-white/8 bg-white/3 text-gray-500 hover:text-orange-400 hover:border-orange-500/30 hover:bg-orange-500/5 transition-all duration-200"
              title={label}
            >
              <Icon className="text-sm" />
            </Link>
          ))}
        </div>
        <div className="w-px h-16 bg-linear-to-t from-transparent to-white/10" />
      </div>

      {/* ═══════════════════════════════════════
          MAIN GRID
      ═══════════════════════════════════════ */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-10 pt-32 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-16 lg:gap-20 items-center">

          {/* ══ LEFT — Content ══ */}
          <div className="flex flex-col gap-7 max-w-2xl">

            {/* ── Available badge ── */}
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="flex items-center gap-3 w-fit"
            >
              <div className="relative flex items-center gap-2.5 bg-[#0d1628] border border-white/8 rounded-full pl-3 pr-5 py-2">
                <span className="relative flex h-2.5 w-2.5 pulse-ring">
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-400" />
                </span>
                <span className="font-mono text-[11px] text-green-400 tracking-[0.15em] uppercase">Available for work</span>
              </div>
              <div className="h-px w-10 bg-linear-to-r from-green-500/30 to-transparent" />
            </motion.div>

            {/* ── Greeting + Name ── */}
            <div className="space-y-1">
              <motion.p
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="font-mono text-xs text-gray-600 tracking-[0.35em] uppercase"
              >
                {'<'} Hello World, I&apos;m {'>'}
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="font-display leading-none tracking-tight"
                style={{ fontSize: 'clamp(3.5rem, 8vw, 6rem)' }}
              >
                <span className="block text-white/90">SOHAN</span>
                <span className="block shimmer-name">ISLAM</span>
              </motion.h1>
            </div>

            {/* ── Animated role ── */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.32 }}
              className="flex items-center gap-4 h-10 overflow-hidden"
            >
              {/* Accent bar */}
              <motion.div
                key={roleIndex}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                className="w-1 h-8 rounded-full shrink-0"
                style={{ background: role.color, boxShadow: `0 0 12px ${role.color}` }}
              />

              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIndex}
                  initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
                  animate={{ opacity: 1, y: 0,  filter: 'blur(0px)' }}
                  exit={{  opacity: 0, y: -20, filter: 'blur(6px)' }}
                  transition={{ duration: 0.38 }}
                  className="font-display text-xl md:text-2xl font-bold"
                  style={{ color: role.color }}
                >
                  {role.label}
                </motion.span>
              </AnimatePresence>

              {/* Blinking cursor */}
              <span className="cursor-blink font-mono text-2xl text-orange-500/50 select-none">_</span>
            </motion.div>

            {/* ── Bio ── */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.42 }}
              className="text-gray-400 text-[15px] leading-[1.85] max-w-lg"
            >
              I build{' '}
              <span className="text-white font-semibold">business-ready web experiences</span>{' '}
              that feel premium, load fast, and turn visitors into clients. Currently in 5th semester at Polytechnic Institute -
              shipping polished products with{' '}
              <span className="text-orange-400 font-semibold">React, Next.js & Node.js</span>.
            </motion.p>

            {/* ── CTA Buttons ── */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.52 }}
              className="flex items-center gap-3 flex-wrap"
            >
              <Link
                href="#contact"
                className="relative group px-8 py-3.5 rounded-xl font-bold text-sm overflow-hidden"
                style={{ background: '#f97316', boxShadow: '0 8px 24px rgba(249,115,22,0.30)' }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Hire Me
                  <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>→</motion.span>
                </span>
                <div className="absolute inset-0 bg-linear-to-r from-orange-400 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>

              <a
                href="/cv.pdf"
                download
                className="flex items-center gap-2.5 px-8 py-3.5 rounded-xl font-semibold text-sm border border-white/10 hover:border-orange-500/35 hover:bg-orange-500/5 hover:text-orange-400 transition-all duration-250 text-gray-300"
              >
                <FaDownload className="text-xs text-orange-400" />
                Download CV
              </a>

              {/* Mobile socials */}
              <div className="flex gap-2 xl:hidden">
                {SOCIAL.map(({ href, Icon, label }) => (
                  <Link key={label} href={href} target="_blank"
                    className="flex items-center justify-center w-11 h-11 rounded-xl border border-white/8 bg-white/3 text-gray-400 hover:text-orange-400 hover:border-orange-500/30 transition-all duration-200"
                  >
                    <Icon className="text-base" />
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* ── Stats ── */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.62 }}
              className="flex items-stretch gap-0 border border-white/6 rounded-2xl overflow-hidden w-fit"
              style={{ background: 'linear-gradient(135deg, #0d1628 0%, #080c1a 100%)' }}
            >
              {STATS.map((s, i) => (
                <div
                  key={i}
                  className={`flex flex-col items-center px-7 py-4 ${i < STATS.length - 1 ? 'border-r border-white/6' : ''}`}
                >
                  <span className="font-display text-2xl font-black text-orange-400 leading-none">{s.value}</span>
                  <span className="font-mono text-[10px] text-white/70 mt-1">{s.label}</span>
                  <span className="font-mono text-[9px] text-gray-600">{s.sub}</span>
                </div>
              ))}
            </motion.div>

            {/* ── Tech badges row ── */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.72 }}
              className="flex flex-wrap items-center gap-2"
            >
              <span className="font-mono text-[10px] text-gray-600 uppercase tracking-widest mr-1">Stack</span>
              {['React', 'Next.js', 'Node.js', 'MongoDB', 'Tailwind'].map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.75 + i * 0.06, type: 'spring', stiffness: 300 }}
                  whileHover={{ y: -3, scale: 1.07 }}
                  className="text-[11px] font-mono px-3 py-1.5 rounded-full border border-white/8 bg-white/3 text-gray-400 hover:text-orange-400 hover:border-orange-500/25 cursor-default transition-colors"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* ══ RIGHT — Photo ══ */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">

              {/* Outer spinning rings */}
              <div
                className="absolute rounded-full border border-dashed border-orange-500/15 ring-cw"
                style={{ inset: '-28px' }}
              />
              <div
                className="absolute rounded-full border border-dashed border-white/5 ring-ccw"
                style={{ inset: '-52px' }}
              />

              {/* Corner accent dots on outer ring */}
              {[0, 90, 180, 270].map(deg => (
                <motion.div
                  key={deg}
                  className="absolute w-2 h-2 rounded-full"
                  style={{
                    background: '#f97316',
                    boxShadow: '0 0 8px #f97316',
                    top: '50%', left: '50%',
                    transformOrigin: '0 0',
                    transform: `rotate(${deg}deg) translateX(${145}px) translateY(-50%)`,
                  }}
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, delay: deg / 360 }}
                />
              ))}

              {/* Glow halo */}
              <motion.div
                animate={{ scale: [1, 1.12, 1], opacity: [0.12, 0.28, 0.12] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-0 rounded-full blur-3xl"
                style={{ background: 'radial-gradient(circle, rgba(249,115,22,0.5), transparent 70%)' }}
              />

              {/* Photo frame */}
              <div
                className="relative overflow-hidden rounded-full"
                style={{
                  width: 'clamp(240px, 25vw, 380px)',
                  height: 'clamp(240px, 25vw, 380px)',
                  border: '2px solid rgba(249,115,22,0.20)',
                  boxShadow: '0 0 60px rgba(249,115,22,0.15), 0 20px 60px rgba(0,0,0,0.6)',
                }}
              >
                <Image
                  src="/sohanimage.png"
                  alt="Sohan Islam — Web Developer"
                  fill
                  priority
                  className="object-cover object-top hover:scale-105 transition-transform duration-700"
                />
                {/* Inner vignette */}
                <div className="absolute inset-0 rounded-full" style={{ boxShadow: 'inset 0 -60px 60px rgba(4,7,16,0.7)' }} />
              </div>

              {/* ── Floating badge: bottom-left ── */}
              <div
                className="float-a absolute -bottom-4 -left-8 rounded-2xl px-4 py-3 z-10"
                style={{
                  background: 'linear-gradient(135deg, #0d1628 0%, #080c1a 100%)',
                  border: '1px solid rgba(255,255,255,0.09)',
                  backdropFilter: 'blur(12px)',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.5)',
                }}
              >
                <p className="font-mono text-[9px] text-gray-600 uppercase tracking-widest mb-0.5">Experience</p>
                <p className="font-display text-sm font-black text-white">1+ Year Coding</p>
                <div className="mt-1.5 h-0.5 rounded-full bg-linear-to-r from-orange-500 to-transparent" style={{ width: '80%' }} />
              </div>

              {/* ── Floating badge: top-right ── */}
              <div
                className="float-b absolute -top-4 -right-8 rounded-2xl px-4 py-3 z-10"
                style={{
                  background: 'linear-gradient(135deg, rgba(249,115,22,0.15), rgba(249,115,22,0.05))',
                  border: '1px solid rgba(249,115,22,0.25)',
                  backdropFilter: 'blur(12px)',
                  boxShadow: '0 8px 24px rgba(249,115,22,0.15)',
                }}
              >
                <p className="font-mono text-[9px] text-orange-500/60 uppercase tracking-widest mb-0.5">Status</p>
                <p className="font-display text-sm font-black text-orange-400">Open to Work</p>
                <div className="mt-1.5 flex gap-1">
                  {[1,2,3].map(i => (
                    <motion.span
                      key={i}
                      animate={{ scaleY: [1, 2.5, 1] }}
                      transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.15 }}
                      className="inline-block w-1 h-2 rounded-full bg-orange-400/60"
                    />
                  ))}
                </div>
              </div>

              {/* ── Level badge: right ── */}
              <div
                className="float-a absolute top-1/2 -translate-y-1/2 -right-14 rounded-xl px-3 py-2.5 z-10 hidden lg:block"
                style={{
                  background: 'linear-gradient(135deg, #0d1628 0%, #080c1a 100%)',
                  border: '1px solid rgba(56,189,248,0.20)',
                  boxShadow: '0 8px 20px rgba(56,189,248,0.08)',
                }}
              >
                <p className="font-mono text-[8px] text-blue-400/60 uppercase tracking-widest mb-1">Sem</p>
                <p className="font-display text-xl font-black text-blue-400 leading-none">5th</p>
                <p className="font-mono text-[8px] text-gray-600 mt-0.5">Polytechnic</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ───── Scroll indicator ───── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-1"
        >
          <FaArrowDown className="text-gray-600 text-xs" />
        </motion.div>
        <span className="font-mono text-[9px] text-gray-700 uppercase tracking-[0.3em]">Scroll</span>
      </motion.div>

      {/* ───── Bottom gradient fade ───── */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to top, #040710, transparent)' }} />
    </section>
  );
}
