'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFolderOpen, FaCode, FaLayerGroup } from 'react-icons/fa6';
import projects from '@/data/projects.json';
import ProjectsCards from '@/components/ProjectsCards';

/* ─── collect unique filter tags from projects ─── */
function getCategories(projects) {
  const all = projects.flatMap(p => p.tags ?? []);
  const unique = ['All', ...new Set(all)];
  return unique;
}

export default function ProjectsPages() {
  const categories = useMemo(() => getCategories(projects), []);
  const [active, setActive] = useState('All');

  const filtered = useMemo(
    () => active === 'All' ? projects : projects.filter(p => p.tags?.includes(active)),
    [active]
  );

  return (
    <section
      className="relative bg-[#050810] text-white py-12 md:py-28 overflow-hidden"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800;900&family=Syne:wght@700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap');
        .font-display { font-family: 'Syne', sans-serif; }
        .font-mono    { font-family: 'JetBrains Mono', monospace; }

        /* Dot grid */
        .dot-grid-proj {
          background-image: radial-gradient(circle, rgba(249,115,22,0.06) 1px, transparent 1px);
          background-size: 30px 30px;
        }

        /* Shimmer */
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

        /* Ticker */
        @keyframes ticker {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .ticker-inner { animation: ticker 28s linear infinite; }

        /* Filter tab */
        .filter-tab {
          transition: all 0.22s ease;
          cursor: pointer;
          white-space: nowrap;
        }
        .filter-tab:hover { color: #f97316; border-color: rgba(249,115,22,0.35); }
      `}</style>

      {/* ── Background ── */}
      <div className="absolute inset-0 dot-grid-proj pointer-events-none opacity-70" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-blue-500/4 rounded-full blur-[80px]" />
      </div>

      {/* ── Scrolling ticker ── */}
      <div className="overflow-hidden border-b border-orange-500/8 bg-orange-500/3 py-2 mb-16">
        <div className="ticker-inner flex gap-10 whitespace-nowrap font-mono text-[11px] text-orange-500/35">
          {Array(6).fill(['MY PROJECTS', 'REACT', 'NEXT.JS', 'NODE.JS', 'FULL-STACK', 'OPEN SOURCE', 'SOHAN ISLAM']).flat().map((t, i) => (
            <span key={i}>✦ {t}</span>
          ))}
        </div>
      </div>

      <div className="relative z-10 w-11/12 max-w-6xl mx-auto space-y-14">

        {/* ═══════════════════════════
            HEADER
        ═══════════════════════════ */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 border border-orange-500/20 bg-orange-500/5 rounded-full px-4 py-1.5"
            >
              <FaFolderOpen className="text-orange-400 text-xs" />
              <span className="font-mono text-[11px] text-orange-400 tracking-[0.25em] uppercase">Portfolio</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-5xl md:text-7xl font-black leading-none"
            >
              My <span className="shimmer-text">Projects</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-gray-500 text-sm max-w-sm leading-relaxed"
            >
              A collection of things I&apos;ve built — from experiments to real-world full-stack apps.
            </motion.p>
          </div>

          {/* Stats chips */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex gap-3 flex-wrap md:flex-nowrap shrink-0"
          >
            {[
              { icon: <FaLayerGroup />, value: projects.length, label: 'Projects' },
              { icon: <FaCode />,       value: categories.length - 1, label: 'Tech Tags' },
            ].map((s, i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-4 py-3 rounded-xl border border-white/6"
                style={{ background: 'linear-gradient(135deg,#0d1526,#080c18)' }}
              >
                <span className="text-orange-400 text-sm">{s.icon}</span>
                <div>
                  <p className="font-display font-black text-xl text-white leading-none">{s.value}+</p>
                  <p className="text-[10px] text-gray-500 font-mono">{s.label}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ═══════════════════════════
            FILTER TABS
        ═══════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="flex gap-2 overflow-x-auto pb-1 scrollbar-none -mx-1 px-1"
          style={{ scrollbarWidth: 'none' }}
        >
          {categories.map(cat => {
            const isActive = active === cat;
            return (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className="filter-tab relative text-xs font-mono font-semibold px-4 py-2 rounded-xl border"
                style={{
                  background: isActive ? 'rgba(249,115,22,0.12)' : 'rgba(255,255,255,0.02)',
                  borderColor: isActive ? 'rgba(249,115,22,0.4)' : 'rgba(255,255,255,0.07)',
                  color: isActive ? '#f97316' : '#6b7280',
                }}
              >
                {isActive && (
                  <motion.span
                    layoutId="filter-pill"
                    className="absolute inset-0 rounded-xl"
                    style={{ background: 'rgba(249,115,22,0.08)' }}
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            );
          })}
        </motion.div>

        {/* ═══════════════════════════
            GRID
        ═══════════════════════════ */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
          >
            {filtered.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((project, i) => (
                  <ProjectsCards
                    key={project.id}
                    project={project}
                    index={i}
                  />
                ))}
              </div>
            ) : (
              <div className="py-24 text-center text-gray-600">
                <FaFolderOpen className="text-4xl mx-auto mb-3 opacity-30" />
                <p className="font-mono text-sm">No projects found for &quot;{active}&quot;</p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}