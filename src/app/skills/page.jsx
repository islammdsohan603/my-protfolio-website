'use client';
import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import {
  FaReact, FaNodeJs, FaGithub, FaHtml5, FaCss3Alt, FaDatabase,
} from 'react-icons/fa6';
import {
  SiNextdotjs, SiTailwindcss, SiMongodb, SiExpress, SiJavascript, SiTypescript,
} from 'react-icons/si';

/* ───────────────────────────────────────────────────────
   DATA
─────────────────────────────────────────────────────── */
const skillGroups = [
  {
    category: 'Frontend',
    tagline: 'What users see & feel',
    accentColor: '#f97316',
    glowColor: 'rgba(249,115,22,0.15)',
    id: 'frontend',
    skills: [
      { name: 'HTML5',       icon: <FaHtml5 />,       level: 95, tag: 'Markup'    },
      { name: 'CSS3',        icon: <FaCss3Alt />,      level: 90, tag: 'Styling'   },
      { name: 'JavaScript',  icon: <SiJavascript />,   level: 85, tag: 'Language'  },
      { name: 'React.js',    icon: <FaReact />,        level: 85, tag: 'Library'   },
      { name: 'Next.js',     icon: <SiNextdotjs />,    level: 80, tag: 'Framework' },
      { name: 'Tailwind CSS',icon: <SiTailwindcss />,  level: 88, tag: 'Utility'   },
    ],
  },
  {
    category: 'Backend',
    tagline: 'What powers under the hood',
    accentColor: '#38bdf8',
    glowColor: 'rgba(56,189,248,0.15)',
    id: 'backend',
    skills: [
      { name: 'Node.js',    icon: <FaNodeJs />,   level: 75, tag: 'Runtime' },
      { name: 'Express.js', icon: <SiExpress />,  level: 70, tag: 'Framework' },
      { name: 'MongoDB',    icon: <SiMongodb />,  level: 72, tag: 'Database' },
      { name: 'REST API',   icon: <FaDatabase />, level: 78, tag: 'Protocol' },
    ],
  },
  {
    category: 'Tools & Others',
    tagline: 'Dev environment & extras',
    accentColor: '#a78bfa',
    glowColor: 'rgba(167,139,250,0.15)',
    id: 'tools',
    skills: [
      { name: 'GitHub',     icon: <FaGithub />,      level: 82, tag: 'VCS'      },
      { name: 'TypeScript', icon: <SiTypescript />,  level: 55, tag: 'Language' },
    ],
  },
];

const extras = ['Git','VS Code','Figma','Vercel','Netlify','Postman','npm','Firebase'];

/* ───────────────────────────────────────────────────────
   CIRCULAR PROGRESS SVG
─────────────────────────────────────────────────────── */
function CircleProgress({ level, color, size = 56 }) {
  const r = (size - 8) / 2;
  const circ = 2 * Math.PI * r;
  return (
    <svg width={size} height={size} className="absolute inset-0 -rotate-90">
      <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="3" />
      <motion.circle
        cx={size/2} cy={size/2} r={r}
        fill="none" stroke={color} strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray={circ}
        initial={{ strokeDashoffset: circ }}
        whileInView={{ strokeDashoffset: circ - (circ * level) / 100 }}
        viewport={{ once: false }}
        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.1 }}
      />
    </svg>
  );
}

/* ───────────────────────────────────────────────────────
   SKILL CARD
─────────────────────────────────────────────────────── */
function SkillCard({ skill, color, glowColor, index }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 32, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.55, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, scale: 1.02 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="relative rounded-2xl p-5 border border-white/5 cursor-default overflow-hidden transition-all duration-300 group"
      style={{
        background: 'linear-gradient(135deg, #0d1526 0%, #080d1a 100%)',
        boxShadow: hovered ? `0 0 30px ${glowColor}, 0 4px 24px rgba(0,0,0,0.4)` : '0 2px 12px rgba(0,0,0,0.3)',
        borderColor: hovered ? `${color}35` : 'rgba(255,255,255,0.05)',
      }}
    >
      {/* Card inner glow top */}
      <div
        className="absolute top-0 left-0 right-0 h-px transition-opacity duration-300"
        style={{ background: `linear-gradient(90deg, transparent, ${color}60, transparent)`, opacity: hovered ? 1 : 0 }}
      />

      {/* Background number watermark */}
      <span
        className="absolute bottom-2 right-3 font-black text-6xl leading-none select-none pointer-events-none transition-opacity duration-300"
        style={{ color: `${color}08`, fontFamily: 'Syne, sans-serif', opacity: hovered ? 1 : 0.5 }}
      >
        {skill.level}
      </span>

      <div className="flex items-center gap-4">
        {/* Icon with ring */}
        <div className="relative w-14 h-14 shrink-0 flex items-center justify-center">
          <CircleProgress level={skill.level} color={color} size={56} />
          <motion.span
            animate={{ rotate: hovered ? 360 : 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="relative z-10 text-xl"
            style={{ color }}
          >
            {skill.icon}
          </motion.span>
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-0.5">
            <span className="font-bold text-[15px] text-white font-display">{skill.name}</span>
            <span
              className="font-mono text-xs font-bold tabular-nums"
              style={{ color }}
            >
              {skill.level}%
            </span>
          </div>
          <span
            className="text-[10px] uppercase tracking-widest font-mono px-2 py-0.5 rounded-full border"
            style={{ color: `${color}99`, borderColor: `${color}25`, background: `${color}0a` }}
          >
            {skill.tag}
          </span>

          {/* Progress bar */}
          <div className="mt-3 h-1 bg-white/5 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              viewport={{ once: false }}
              transition={{ duration: 1.1, delay: index * 0.05 + 0.3, ease: 'easeOut' }}
              className="h-full rounded-full"
              style={{ background: `linear-gradient(90deg, ${color}55, ${color})` }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ───────────────────────────────────────────────────────
   MAIN COMPONENT
─────────────────────────────────────────────────────── */
export default function SkillsPages() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative bg-[#050810] text-white py-12 md:py-28 overflow-hidden"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800;900&family=Syne:wght@700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap');
        .font-display  { font-family: 'Syne', sans-serif; }
        .font-mono     { font-family: 'JetBrains Mono', monospace; }

        /* Dot grid */
        .dot-grid {
          background-image: radial-gradient(circle, rgba(249,115,22,0.07) 1px, transparent 1px);
          background-size: 28px 28px;
        }

        /* Shimmer heading */
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        .shimmer-text {
          background: linear-gradient(90deg, #f97316 0%, #fbbf24 30%, #f97316 50%, #fbbf24 70%, #f97316 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 4s linear infinite;
        }

        /* Floating orbs */
        @keyframes float-orb {
          0%, 100% { transform: translateY(0px) scale(1);   opacity: 0.5; }
          50%       { transform: translateY(-30px) scale(1.08); opacity: 0.8; }
        }

        /* Category tab active underline */
        .cat-tab-line {
          background: linear-gradient(90deg, transparent, currentColor, transparent);
        }

        /* Extra tag hover */
        .extra-tag {
          transition: all 0.25s;
        }
        .extra-tag:hover {
          transform: translateY(-3px);
        }
      `}</style>

      {/* ── Parallax dot grid ── */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 dot-grid pointer-events-none opacity-60" />

      {/* ── Ambient blobs ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full blur-[120px]"
          style={{ background: 'radial-gradient(ellipse, rgba(249,115,22,0.08), transparent 70%)', animation: 'float-orb 8s ease-in-out infinite' }}
        />
        <div
          className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full blur-[100px]"
          style={{ background: 'radial-gradient(ellipse, rgba(56,189,248,0.06), transparent 70%)', animation: 'float-orb 10s ease-in-out infinite 2s' }}
        />
        <div
          className="absolute top-1/2 left-0 w-[300px] h-[300px] rounded-full blur-[80px]"
          style={{ background: 'radial-gradient(ellipse, rgba(167,139,250,0.05), transparent 70%)', animation: 'float-orb 12s ease-in-out infinite 4s' }}
        />
      </div>

      <div className="relative z-10 w-11/12 max-w-5xl mx-auto space-y-20">

        {/* ═══════════════════════════
            HEADER
        ═══════════════════════════ */}
        <div className="text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="inline-flex items-center gap-2 border border-orange-500/20 bg-orange-500/5 rounded-full px-4 py-1.5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
            <span className="font-mono text-[11px] text-orange-400 tracking-[0.25em] uppercase">My Skills</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.1 }}
            className="font-display text-5xl md:text-7xl font-black leading-none"
          >
            Tech{' '}
            <span className="shimmer-text">Stack</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 max-w-md mx-auto text-sm leading-relaxed"
          >
            Technologies I work with to build modern, fast, and scalable web applications.
          </motion.p>

          {/* Decorative divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mx-auto w-24 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"
          />
        </div>

        {/* ═══════════════════════════
            SKILL GROUPS
        ═══════════════════════════ */}
        <div className="space-y-16">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.5, delay: gi * 0.05 }}
            >
              {/* Group header */}
              <div className="flex items-center gap-4 mb-8">
                {/* Accent pill */}
                <div
                  className="flex items-center gap-3 px-4 py-2 rounded-xl border"
                  style={{
                    background: `${group.accentColor}0d`,
                    borderColor: `${group.accentColor}25`,
                  }}
                >
                  <span className="w-2 h-2 rounded-full" style={{ background: group.accentColor, boxShadow: `0 0 8px ${group.accentColor}` }} />
                  <span className="font-display font-black text-base" style={{ color: group.accentColor }}>
                    {group.category}
                  </span>
                </div>

                {/* Tagline */}
                <span className="text-xs text-gray-600 font-mono hidden sm:block">{group.tagline}</span>

                {/* Line */}
                <div className="flex-1 h-px" style={{ background: `linear-gradient(90deg, ${group.accentColor}30, transparent)` }} />

                {/* Count badge */}
                <span
                  className="text-xs font-mono font-bold px-2.5 py-1 rounded-full"
                  style={{ color: group.accentColor, background: `${group.accentColor}12`, border: `1px solid ${group.accentColor}25` }}
                >
                  {group.skills.length} skills
                </span>
              </div>

              {/* Cards grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {group.skills.map((skill, si) => (
                  <SkillCard
                    key={skill.name}
                    skill={skill}
                    color={group.accentColor}
                    glowColor={group.glowColor}
                    index={si}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ═══════════════════════════
            EXTRAS
        ═══════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl border border-white/5 overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #0d1526 0%, #080d1a 100%)' }}
        >
          {/* Top glow line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent" />

          <div className="p-8 md:p-10">
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono text-[11px] text-gray-600 tracking-[0.25em] uppercase">// Also familiar with</span>
              <div className="flex-1 h-px bg-white/5" />
            </div>

            <div className="flex flex-wrap gap-3">
              {extras.map((tool, i) => (
                <motion.span
                  key={tool}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false }}
                  transition={{ delay: i * 0.06, type: 'spring', stiffness: 300 }}
                  whileHover={{ y: -4, scale: 1.05 }}
                  className="extra-tag flex items-center gap-2 text-sm px-4 py-2 rounded-xl border border-white/8 text-gray-400 hover:text-orange-400 hover:border-orange-500/30 hover:bg-orange-500/5 cursor-default"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500/40" />
                  {tool}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Bottom corner accents */}
          <div className="absolute bottom-0 left-0 w-16 h-16 border-b border-l border-orange-500/10 rounded-bl-3xl" />
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b border-r border-orange-500/10 rounded-br-3xl" />
        </motion.div>

        {/* ═══════════════════════════
            BOTTOM STAT ROW
        ═══════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-3 gap-4 text-center"
        >
          {[
            { value: '12+', label: 'Technologies', color: '#f97316' },
            { value: '95%', label: 'Best Skill', color: '#38bdf8' },
            { value: 'L1',  label: 'Prog. Hero', color: '#a78bfa' },
          ].map((s, i) => (
            <div
              key={i}
              className="rounded-2xl py-6 border border-white/5"
              style={{ background: 'linear-gradient(135deg, #0d1526 0%, #080d1a 100%)' }}
            >
              <p className="font-display text-3xl font-black" style={{ color: s.color }}>{s.value}</p>
              <p className="text-xs text-gray-500 mt-1 font-mono">{s.label}</p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}