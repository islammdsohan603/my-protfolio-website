'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaArrowLeft, FaGithub, FaArrowUpRightFromSquare, FaStar, FaCode, FaLayerGroup, FaCalendar } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import { useParams } from 'next/navigation';
import projectsData from '@/data/projects.json';

/* ── Accent palette (matches ProjectsCards) ── */
const ACCENTS = [
  { color: '#f97316', glow: 'rgba(249,115,22,0.20)', soft: 'rgba(249,115,22,0.07)', border: 'rgba(249,115,22,0.28)' },
  { color: '#38bdf8', glow: 'rgba(56,189,248,0.20)',  soft: 'rgba(56,189,248,0.07)',  border: 'rgba(56,189,248,0.28)'  },
  { color: '#a78bfa', glow: 'rgba(167,139,250,0.20)', soft: 'rgba(167,139,250,0.07)', border: 'rgba(167,139,250,0.28)' },
  { color: '#34d399', glow: 'rgba(52,211,153,0.20)',  soft: 'rgba(52,211,153,0.07)',  border: 'rgba(52,211,153,0.28)'  },
  { color: '#f472b6', glow: 'rgba(244,114,182,0.20)', soft: 'rgba(244,114,182,0.07)', border: 'rgba(244,114,182,0.28)' },
  { color: '#fbbf24', glow: 'rgba(251,191,36,0.20)',  soft: 'rgba(251,191,36,0.07)',  border: 'rgba(251,191,36,0.28)'  },
];

export default function ProjectDetails() {
  const params = useParams();
  const projectIndex = projectsData.findIndex(p => String(p.id) === params.id);
  const project = projectsData[projectIndex];

  if (!project) return null;

  const { title, description, tech, github, live, featured, image } = project;
  const a = ACCENTS[projectIndex % ACCENTS.length];
  const nextProject = projectsData[projectIndex + 1] ?? projectsData[0];
  const prevProject = projectsData[projectIndex - 1] ?? projectsData[projectsData.length - 1];

  return (
    <main
      className="bg-[#050810] text-white min-h-screen relative overflow-hidden"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800;900&family=Syne:wght@700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap');
        .font-display { font-family: 'Syne', sans-serif; }
        .font-mono    { font-family: 'JetBrains Mono', monospace; }

        /* Dot grid */
        .dot-grid {
          background-image: radial-gradient(circle, rgba(249,115,22,0.05) 1px, transparent 1px);
          background-size: 28px 28px;
        }

        /* Shimmer heading */
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        .shimmer-accent {
          background: linear-gradient(90deg, var(--ac) 0%, #fff 40%, var(--ac) 60%, #fff 80%, var(--ac) 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 5s linear infinite;
        }

        /* Scanlines overlay */
        .scanlines::after {
          content: '';
          position: absolute; inset: 0;
          background: repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.04) 2px, rgba(0,0,0,0.04) 4px);
          pointer-events: none;
          border-radius: inherit;
        }

        /* Pulse dot */
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.5; transform: scale(0.8); }
        }
        .pulse-dot { animation: pulse-dot 2s ease-in-out infinite; }
      `}</style>

      {/* ── Background ── */}
      <div className="absolute inset-0 dot-grid pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full blur-[130px] opacity-60"
          style={{ background: `radial-gradient(ellipse, ${a.glow}, transparent 70%)` }}
        />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/4 rounded-full blur-[100px]" />
      </div>

      {/* ════════════════════════════════
          HERO IMAGE BANNER
      ════════════════════════════════ */}
      <div className="relative w-full h-[55vh] min-h-[360px] max-h-[540px] overflow-hidden scanlines">
        {image ? (
          <>
            <Image
              src={image}
              alt={title}
              fill
              priority
              sizes="100vw"
              className="object-cover"
              style={{ filter: 'brightness(0.45) saturate(1.1)' }}
            />
            {/* Layered gradient overlays */}
            <div className="absolute inset-0" style={{ background: `linear-gradient(to bottom, transparent 20%, #050810 100%)` }} />
            <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${a.soft} 0%, transparent 60%)` }} />
          </>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center" style={{ background: `linear-gradient(135deg, #0d1628, #050810)` }}>
            <FaCode className="text-8xl opacity-10" style={{ color: a.color }} />
          </div>
        )}

        {/* Back button — floats over image, below fixed navbar */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute top-20 left-0 right-0 z-20 w-11/12 max-w-3xl mx-auto"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2.5 text-sm font-semibold text-white/70 hover:text-white transition-colors duration-200 group"
            style={{ fontFamily: 'JetBrains Mono, monospace' }}
          >
            <motion.span
              animate={{ x: [0, -4, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            >
              <FaArrowLeft className="text-xs" />
            </motion.span>
            <span className="group-hover:underline underline-offset-4">Back to Projects</span>
          </Link>
        </motion.div>

        {/* Project index watermark on image */}
        <div
          className="absolute bottom-8 right-8 font-black leading-none select-none pointer-events-none z-10"
          style={{ fontSize: '8rem', color: `${a.color}10`, fontFamily: 'Syne,sans-serif' }}
        >
          {String(projectIndex + 1).padStart(2, '0')}
        </div>
      </div>

      {/* ════════════════════════════════
          MAIN CONTENT
      ════════════════════════════════ */}
      <div className="relative z-10 w-11/12 max-w-3xl mx-auto -mt-16 pb-28 space-y-10">

        {/* ── Header card ── */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-2xl p-8 border overflow-hidden"
          style={{
            background: 'linear-gradient(160deg, #0d1628 0%, #080c1a 100%)',
            borderColor: a.border,
            boxShadow: `0 0 60px ${a.glow}, 0 8px 32px rgba(0,0,0,0.6)`,
          }}
        >
          {/* Glow top line */}
          <div className="absolute top-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${a.color}, transparent)` }} />

          <div className="space-y-5">
            {/* Badges row */}
            <div className="flex flex-wrap items-center gap-3">
              {featured && (
                <span
                  className="inline-flex items-center gap-1.5 text-[11px] font-mono font-bold px-3 py-1.5 rounded-full uppercase tracking-wider"
                  style={{ background: a.soft, color: a.color, border: `1px solid ${a.border}` }}
                >
                  <FaStar className="text-[9px]" /> Featured
                </span>
              )}
              <span
                className="inline-flex items-center gap-1.5 text-[11px] font-mono px-3 py-1.5 rounded-full"
                style={{ background: 'rgba(255,255,255,0.04)', color: '#6b7280', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                <span className="pulse-dot w-1.5 h-1.5 rounded-full" style={{ background: a.color }} />
                Project #{String(projectIndex + 1).padStart(2, '0')}
              </span>
            </div>

            {/* Title */}
            <h1
              className="font-display text-4xl md:text-5xl font-black leading-tight"
              style={{ '--ac': a.color }}
            >
              <span className="shimmer-accent" style={{ '--ac': a.color }}>
                {title}
              </span>
            </h1>

            {/* Description */}
            <p className="text-gray-400 text-base md:text-lg leading-8">
              {description}
            </p>
          </div>

          {/* Corner accent */}
          <div
            className="absolute bottom-0 right-0 w-24 h-24 pointer-events-none"
            style={{ background: `radial-gradient(circle at bottom right, ${a.soft}, transparent)` }}
          />
        </motion.div>

        {/* ── Tech Stack ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="space-y-5"
        >
          <div className="flex items-center gap-3">
            <FaLayerGroup className="text-sm" style={{ color: a.color }} />
            <span className="font-mono text-xs text-gray-500 uppercase tracking-[0.25em]">Tech Stack</span>
            <div className="flex-1 h-px" style={{ background: `linear-gradient(90deg, ${a.border}, transparent)` }} />
          </div>

          <div className="flex flex-wrap gap-3">
            {tech.map((t, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 14, scale: 0.85 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.07, type: 'spring', stiffness: 260 }}
                whileHover={{ y: -4, scale: 1.07 }}
                className="px-4 py-2 text-sm font-semibold rounded-xl cursor-default"
                style={{
                  background: a.soft,
                  color: a.color,
                  border: `1px solid ${a.border}`,
                  fontFamily: 'JetBrains Mono, monospace',
                }}
              >
                {t}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* ── Action Buttons ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.3 }}
          className="flex flex-wrap items-center gap-4"
        >
          {github && (
            <motion.a
              href={github}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -3, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2.5 px-6 py-3 rounded-xl text-sm font-bold border transition-all duration-250"
              style={{
                background: 'rgba(255,255,255,0.03)',
                borderColor: 'rgba(255,255,255,0.1)',
                color: '#d1d5db',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = a.border;
                e.currentTarget.style.color = a.color;
                e.currentTarget.style.background = a.soft;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                e.currentTarget.style.color = '#d1d5db';
                e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
              }}
            >
              <FaGithub className="text-base" />
              View Source Code
            </motion.a>
          )}

          {live && (
            <motion.a
              href={live}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -3, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2.5 px-6 py-3 rounded-xl text-sm font-bold transition-all duration-250 shadow-xl"
              style={{
                background: a.color,
                color: '#fff',
                boxShadow: `0 8px 24px ${a.glow}`,
              }}
            >
              <FaArrowUpRightFromSquare className="text-xs" />
              Live Demo
            </motion.a>
          )}
        </motion.div>

        {/* ── Divider ── */}
        <motion.div
          initial={{ scaleX: 0, originX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="h-px"
          style={{ background: `linear-gradient(90deg, ${a.border}, rgba(255,255,255,0.03), transparent)` }}
        />

        {/* ── GitHub CTA card ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.45 }}
          className="relative rounded-2xl border overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #0d1628 0%, #080c1a 100%)',
            borderColor: 'rgba(255,255,255,0.06)',
          }}
        >
          <div className="absolute top-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${a.color}40, transparent)` }} />
          <div className="p-6 flex items-center justify-between gap-4 flex-wrap">
            <div>
              <p className="font-mono text-[11px] text-gray-600 uppercase tracking-widest mb-1">// Want to see more?</p>
              <p className="text-sm text-gray-300 font-semibold">Check out all my projects on GitHub</p>
            </div>
            <motion.a
              href="https://github.com/islammdsohan603"
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -3, scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-200"
              style={{ background: a.soft, color: a.color, border: `1px solid ${a.border}` }}
            >
              <FaGithub />
              GitHub Profile
            </motion.a>
          </div>
        </motion.div>

        {/* ── Prev / Next Navigation ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.55 }}
          className="grid grid-cols-2 gap-4"
        >
          {[
            { label: '← Previous', proj: prevProject, dir: 'prev' },
            { label: 'Next →',     proj: nextProject, dir: 'next' },
          ].map(({ label, proj, dir }) => {
            const idx = projectsData.findIndex(p => p.id === proj.id);
            const pa = ACCENTS[idx % ACCENTS.length];
            return (
              <Link
                key={dir}
                href={`/projects/${proj.id}`}
                className={`group relative rounded-xl border overflow-hidden p-4 transition-all duration-250 ${dir === 'next' ? 'text-right' : 'text-left'}`}
                style={{
                  background: 'linear-gradient(135deg,#0d1628,#080c1a)',
                  borderColor: 'rgba(255,255,255,0.06)',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = pa.border; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; }}
              >
                <p className="font-mono text-[10px] uppercase tracking-widest mb-1.5" style={{ color: pa.color }}>{label}</p>
                <p className="text-xs text-gray-300 font-semibold truncate group-hover:text-white transition-colors">{proj.title}</p>
              </Link>
            );
          })}
        </motion.div>

      </div>
    </main>
  );
}