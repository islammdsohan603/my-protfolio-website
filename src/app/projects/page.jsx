'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFolderOpen, FaCode, FaLayerGroup } from 'react-icons/fa6';
import projects from '@/data/projects.json';
import ProjectsCards from '@/components/ProjectsCards';
import PageBackdrop from '@/components/ui/PageBackdrop';

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
    () =>
      active === 'All'
        ? projects
        : projects.filter(p => p.tags?.includes(active)),
    [active],
  );

  return (
    <section
      id="projects"
      className="theme-surface relative overflow-hidden py-12 font-body md:py-20"
    >
      <PageBackdrop />
      <style>{`
        .font-display { font-family: 'Poppins', sans-serif; }
        .font-mono    { font-family: 'Poppins', sans-serif; }

        /* Dot grid */
        .dot-grid-proj {
          background-image: radial-gradient(circle, var(--grid-line-a) 1px, transparent 1px);
          background-size: 30px 30px;
        }

        /* Shimmer */
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

        /* Filter tab */
        .filter-tab {
          transition: all 0.22s ease;
          cursor: pointer;
          white-space: nowrap;
        }
        .filter-tab:hover { color: var(--color-accent-strong); border-color: var(--color-border-strong); }
      `}</style>

      <div className="relative z-10 mx-auto w-11/12 max-w-6xl space-y-10">
        {/* ═══════════════════════════
            HEADER
        ═══════════════════════════ */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 border rounded-full px-4 py-1.5"
              style={{ borderColor: 'var(--color-border-strong)', background: 'color-mix(in srgb, var(--color-accent) 8%, transparent)' }}
            >
              <FaFolderOpen className="text-xs" style={{ color: 'var(--color-accent-strong)' }} />
              <span className="font-mono text-[11px] tracking-[0.25em] uppercase" style={{ color: 'var(--color-accent-strong)' }}>
                Portfolio
              </span>
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
              A collection of things I&apos;ve built — from experiments to
              real-world full-stack apps.
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
              {
                icon: <FaLayerGroup />,
                value: projects.length,
                label: 'Projects',
              },
              {
                icon: <FaCode />,
                value: categories.length - 1,
                label: 'Tech Tags',
              },
            ].map((s, i) => (
              <div
                key={i}
                className="glass-panel flex items-center gap-3 rounded-xl px-4 py-3"
              >
                <span className="text-sm" style={{ color: 'var(--color-accent-strong)' }}>{s.icon}</span>
                <div>
                  <p className="font-display text-xl font-black leading-none text-[var(--color-text)]">
                    {s.value}+
                  </p>
                  <p className="font-mono text-[10px] theme-faint">
                    {s.label}
                  </p>
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
                  background: isActive
                    ? 'color-mix(in srgb, var(--color-accent) 12%, transparent)'
                    : 'var(--color-panel)',
                  borderColor: isActive
                    ? 'var(--color-border-strong)'
                    : 'var(--color-border)',
                  color: isActive ? 'var(--color-accent-strong)' : 'var(--color-muted)',
                }}
              >
                {isActive && (
                  <motion.span
                    layoutId="filter-pill"
                    className="absolute inset-0 rounded-xl"
                    style={{ background: 'color-mix(in srgb, var(--color-accent) 8%, transparent)' }}
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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {filtered.map((project, i) => (
                  <ProjectsCards key={project.id} project={project} index={i} />
                ))}
              </div>
            ) : (
              <div className="py-14 text-center text-gray-600">
                <FaFolderOpen className="text-4xl mx-auto mb-3 opacity-30" />
                <p className="font-mono text-sm">
                  No projects found for &quot;{active}&quot;
                </p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
