'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaGithub, FaArrowUpRightFromSquare, FaStar, FaCode } from 'react-icons/fa6';

/* ── Per-card accent palette ── */
const ACCENTS = [
  { color: '#d6a84f', glow: 'rgba(214,168,79,0.20)', soft: 'rgba(214,168,79,0.08)', border: 'rgba(214,168,79,0.30)' },
  { color: '#38bdf8', glow: 'rgba(56,189,248,0.20)',  soft: 'rgba(56,189,248,0.07)',  border: 'rgba(56,189,248,0.28)'  },
  { color: '#2dd4bf', glow: 'rgba(45,212,191,0.20)', soft: 'rgba(45,212,191,0.07)', border: 'rgba(45,212,191,0.28)' },
  { color: '#93c5fd', glow: 'rgba(147,197,253,0.20)', soft: 'rgba(147,197,253,0.07)', border: 'rgba(147,197,253,0.28)' },
];

const ProjectsCards = ({ project, index = 0 }) => {
  const { id, title, description, tech, github, live, featured, image } = project;
  const [hovered, setHovered] = useState(false);
  const a = ACCENTS[index % ACCENTS.length];

  return (
    <motion.article
      initial={{ opacity: 0, y: 48, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: false, amount: 0.12 }}
      transition={{ duration: 0.65, delay: (index % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -10 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="relative flex flex-col rounded-2xl overflow-hidden"
      style={{
        background: 'linear-gradient(160deg,var(--color-panel-strong) 0%,var(--color-bg-soft) 100%)',
        border: `1px solid ${hovered ? a.border : 'rgba(255,255,255,0.06)'}`,
        boxShadow: hovered
          ? `0 0 48px ${a.glow}, 0 12px 40px rgba(0,0,0,0.55)`
          : '0 2px 18px rgba(0,0,0,0.4)',
        transition: 'border-color .3s, box-shadow .35s',
      }}
    >
      {/* ── Top shimmer line ── */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute top-0 left-0 right-0 h-px z-20 pointer-events-none"
        style={{ background: `linear-gradient(90deg,transparent,${a.color},transparent)` }}
      />

      {/* ── Image block ── */}
      <div className="relative w-full h-52 overflow-hidden shrink-0" style={{ background: 'var(--color-bg-soft)' }}>
        {image ? (
          <>
            <Image
              src={image}
              alt={title}
              fill
              sizes="(max-width:768px) 100vw, 33vw"
              className="object-cover"
              style={{ transform: hovered ? 'scale(1.09)' : 'scale(1)', transition: 'transform .7s ease' }}
            />
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(to bottom,${a.soft},color-mix(in srgb, var(--color-bg) 72%, transparent))`,
                opacity: hovered ? 0.8 : 0.5,
                transition: 'opacity .4s',
              }}
            />
          </>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center" style={{ background: a.soft }}>
            <FaCode className="text-5xl opacity-15" style={{ color: a.color }} />
          </div>
        )}

        {/* Featured badge */}
        {featured && (
          <motion.span
            initial={{ opacity: 0, scale: 0.7, x: 10 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.3 }}
            className="absolute top-3 right-3 z-10 flex items-center gap-1.5 text-[11px] font-mono font-bold px-3 py-1.5 rounded-full uppercase tracking-wider"
            style={{
              background: a.soft,
              color: a.color,
              border: `1px solid ${a.border}`,
              backdropFilter: 'blur(8px)',
            }}
          >
            <FaStar className="text-[9px]" /> Featured
          </motion.span>
        )}

        {/* Big watermark index */}
        <span
          className="absolute bottom-2 left-4 font-black leading-none select-none pointer-events-none z-10"
          style={{
            fontSize: '5rem',
            color: `${a.color}12`,
            fontFamily: 'Poppins,sans-serif',
            opacity: hovered ? 1 : 0.6,
            transition: 'opacity .3s',
          }}
        >
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      {/* ── Body ── */}
      <div className="flex flex-col flex-1 px-5 pt-4 pb-5 gap-3">

        {/* Tech chips */}
        {tech?.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tech.map((t, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.75 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ delay: (index % 3) * 0.08 + i * 0.05 + 0.15, type: 'spring', stiffness: 280 }}
                className="text-[10px] font-mono px-2.5 py-1 rounded-full uppercase tracking-wider"
                style={{
                  color: `${a.color}cc`,
                  background: a.soft,
                  border: `1px solid ${a.border}`,
                }}
              >
                {t}
              </motion.span>
            ))}
          </div>
        )}

        {/* Title */}
        <h3
          className="font-black text-[1.15rem] leading-snug"
          style={{
            fontFamily: 'Poppins,sans-serif',
            color: hovered ? a.color : 'var(--color-text)',
            transition: 'color .3s',
          }}
        >
          {title}
        </h3>

        {/* Description */}
        <p className="theme-muted text-sm leading-relaxed flex-1">
          {description}
        </p>

        {/* Divider */}
        <div
          className="h-px w-full"
          style={{
            background: hovered
              ? `linear-gradient(90deg,${a.border},transparent)`
              : 'rgba(255,255,255,0.04)',
            transition: 'background .3s',
          }}
        />

        {/* Action row */}
        <div className="flex items-center gap-2.5 pt-0.5">
          <Link
            href={`/projects/${id}`}
            className="flex-1 text-center py-2.5 text-sm font-bold rounded-xl"
            style={{
              background: hovered ? a.color : a.soft,
              color: hovered ? 'var(--color-bg)' : a.color,
              border: `1px solid ${a.border}`,
              transition: 'background .25s, color .25s',
            }}
          >
            View Details →
          </Link>

          {github && (
            <Link
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              className="p-2.5 rounded-xl border border-white/8 text-gray-400 hover:text-white hover:border-white/20 transition-all duration-200"
            >
              <FaGithub className="text-base" />
            </Link>
          )}

          {live && (
            <Link
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              title="Live Demo"
              className="p-2.5 rounded-xl transition-all duration-200"
              style={{
                border: `1px solid ${hovered ? a.border : 'rgba(255,255,255,0.08)'}`,
                color: hovered ? a.color : '#9ca3af',
              }}
            >
              <FaArrowUpRightFromSquare className="text-sm" />
            </Link>
          )}
        </div>
      </div>

      {/* ── Bottom-right ambient glow ── */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.35 }}
        className="absolute bottom-0 right-0 w-24 h-24 pointer-events-none rounded-tl-3xl"
        style={{ background: `radial-gradient(circle at bottom right,${a.soft},transparent)` }}
      />
    </motion.article>
  );
};

export default ProjectsCards;
