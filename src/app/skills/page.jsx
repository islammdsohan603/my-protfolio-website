'use client';
import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaReact, FaNodeJs, FaGithub, FaHtml5, FaCss3Alt, FaDatabase,
} from 'react-icons/fa6';
import {
  SiNextdotjs, SiTailwindcss, SiMongodb, SiExpress, SiJavascript, SiTypescript,
} from 'react-icons/si';
import PageBackdrop from '@/components/ui/PageBackdrop';

/* ───────────────────────────────────────────────────────
   DATA
─────────────────────────────────────────────────────── */
const skillGroups = [
  {
    category: 'Frontend',
    tagline: 'What users see & feel',
    accentColor: '#d6a84f',
    glowColor: 'rgba(214,168,79,0.16)',
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
      <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="var(--color-border)" strokeWidth="3" />
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
      className="card-premium relative cursor-default overflow-hidden p-4 transition-all duration-300 group"
      style={{
        background: 'linear-gradient(135deg, var(--color-panel-strong) 0%, var(--color-bg-soft) 100%)',
        boxShadow: hovered ? `0 0 30px ${glowColor}, 0 4px 24px rgba(0,0,0,0.4)` : '0 2px 12px rgba(0,0,0,0.3)',
        borderColor: hovered ? `${color}35` : 'var(--color-border)',
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
        style={{ color: `${color}08`, fontFamily: 'Poppins, sans-serif', opacity: hovered ? 1 : 0.5 }}
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
            <span className="font-display text-[15px] font-bold text-[var(--color-text)]">{skill.name}</span>
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
          <div className="mt-3 h-1 overflow-hidden rounded-full bg-[var(--color-border)]">
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

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="theme-surface relative overflow-hidden py-12 font-body md:py-20"
    >
      <PageBackdrop />
      <style>{`
        .font-display  { font-family: 'Poppins', sans-serif; }
        .font-mono     { font-family: 'Poppins', sans-serif; }

        /* Dot grid */
        .dot-grid {
          background-image: radial-gradient(circle, var(--grid-line-a) 1px, transparent 1px);
          background-size: 28px 28px;
        }

        /* Shimmer heading */
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        .shimmer-text {
          background: linear-gradient(90deg, var(--color-accent) 0%, var(--color-accent-strong) 35%, var(--color-cyan) 70%, var(--color-accent) 100%);
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

      <div className="relative z-10 mx-auto w-11/12 max-w-5xl space-y-14">

        {/* ═══════════════════════════
            HEADER
        ═══════════════════════════ */}
        <div className="text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="inline-flex items-center gap-2 border rounded-full px-4 py-1.5"
            style={{ borderColor: 'var(--color-border-strong)', background: 'color-mix(in srgb, var(--color-accent) 8%, transparent)' }}
          >
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: 'var(--color-accent)' }} />
            <span className="font-mono text-[11px] tracking-[0.25em] uppercase" style={{ color: 'var(--color-accent-strong)' }}>My Skills</span>
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
            className="mx-auto w-24 h-px"
            style={{ background: 'linear-gradient(90deg, transparent, var(--color-accent), transparent)' }}
          />
        </div>

        {/* ═══════════════════════════
            SKILL GROUPS
        ═══════════════════════════ */}
        <div className="space-y-10">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.5, delay: gi * 0.05 }}
            >
              {/* Group header */}
              <div className="flex items-center gap-4 mb-5">
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
          className="card-premium relative overflow-hidden rounded-3xl"
          style={{ background: 'linear-gradient(135deg, var(--color-panel-strong) 0%, var(--color-bg-soft) 100%)' }}
        >
          {/* Top glow line */}
          <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, var(--color-accent), transparent)' }} />

          <div className="p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono text-[11px] text-gray-600 tracking-[0.25em] uppercase">Also familiar with</span>
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
                  className="extra-tag flex items-center gap-2 text-sm px-4 py-2 rounded-xl border cursor-default"
                  style={{ borderColor: 'var(--color-border)', color: 'var(--color-muted)' }}
                >
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--color-accent)' }} />
                  {tool}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Bottom corner accents */}
          <div className="absolute bottom-0 left-0 w-16 h-16 border-b border-l rounded-bl-3xl" style={{ borderColor: 'var(--color-border-strong)' }} />
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b border-r rounded-br-3xl" style={{ borderColor: 'var(--color-border-strong)' }} />
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
            { value: '12+', label: 'Technologies', color: '#d6a84f' },
            { value: '95%', label: 'Best Skill', color: '#38bdf8' },
            { value: 'L1',  label: 'Prog. Hero', color: '#a78bfa' },
          ].map((s, i) => (
            <div
              key={i}
              className="glass-panel rounded-xl py-4"
              style={{ background: 'linear-gradient(135deg, var(--color-panel-strong) 0%, var(--color-bg-soft) 100%)' }}
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
