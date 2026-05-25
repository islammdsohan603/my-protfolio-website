'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FaGithub, FaArrowUpRightFromSquare, FaStar, FaCode } from 'react-icons/fa6';
import { easePremium } from '@/lib/motion';

const ACCENTS = [
  { color: '#e8b85a', glow: 'rgba(232,184,90,0.22)', soft: 'rgba(232,184,90,0.08)', border: 'rgba(232,184,90,0.32)' },
  { color: '#4cc9f0', glow: 'rgba(76,201,240,0.2)', soft: 'rgba(76,201,240,0.07)', border: 'rgba(76,201,240,0.28)' },
  { color: '#2ee4c6', glow: 'rgba(46,228,198,0.2)', soft: 'rgba(46,228,198,0.07)', border: 'rgba(46,228,198,0.28)' },
  { color: '#93c5fd', glow: 'rgba(147,197,253,0.2)', soft: 'rgba(147,197,253,0.07)', border: 'rgba(147,197,253,0.28)' },
];

const ProjectsCards = ({ project, index = 0 }) => {
  const { id, title, description, tech, github, live, featured, image } = project;
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);
  const a = ACCENTS[index % ACCENTS.length];

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), { stiffness: 200, damping: 22 });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-6, 6]), { stiffness: 200, damping: 22 });

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const onLeave = () => {
    setHovered(false);
    mx.set(0);
    my.set(0);
  };

  return (
    <motion.article
      ref={ref}
      onMouseMove={onMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={onLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      initial={{ opacity: 0, y: 48, scale: 0.94 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.65, delay: (index % 3) * 0.1, ease: easePremium }}
      className="card-premium group relative flex flex-col overflow-hidden rounded-2xl"
    >
      <motion.div
        animate={{ opacity: hovered ? 1 : 0 }}
        className="absolute top-0 left-0 right-0 z-20 h-px pointer-events-none"
        style={{ background: `linear-gradient(90deg,transparent,${a.color},transparent)` }}
      />

      <div className="relative h-52 w-full shrink-0 overflow-hidden" style={{ background: 'var(--color-bg-soft)' }}>
        {image ? (
          <>
            <Image
              src={image}
              alt={title}
              fill
              sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 33vw"
              priority={index < 3}
              loading={index < 3 ? 'eager' : 'lazy'}
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div
              className="absolute inset-0 transition-opacity duration-400"
              style={{
                background: `linear-gradient(to bottom,${a.soft},color-mix(in srgb, var(--color-bg) 75%, transparent))`,
                opacity: hovered ? 0.85 : 0.45,
              }}
            />
          </>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center" style={{ background: a.soft }}>
            <FaCode className="text-5xl opacity-20" style={{ color: a.color }} />
          </div>
        )}

        {featured && (
          <span
            className="absolute top-3 right-3 z-10 flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider backdrop-blur-md"
            style={{ background: a.soft, color: a.color, border: `1px solid ${a.border}` }}
          >
            <FaStar className="text-[8px]" /> Featured
          </span>
        )}

        <span
          className="pointer-events-none absolute bottom-2 left-4 font-display text-[5rem] font-black leading-none select-none"
          style={{ color: `${a.color}14` }}
        >
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-3 px-5 pt-4 pb-5">
        {tech?.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tech.map((t, i) => (
              <span
                key={i}
                className="rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider"
                style={{ color: `${a.color}cc`, background: a.soft, border: `1px solid ${a.border}` }}
              >
                {t}
              </span>
            ))}
          </div>
        )}

        <h3
          className="font-display text-[1.15rem] font-extrabold leading-snug transition-colors duration-300"
          style={{ color: hovered ? a.color : 'var(--color-text)' }}
        >
          {title}
        </h3>

        <p className="theme-muted flex-1 text-sm leading-relaxed">{description}</p>

        <div
          className="h-px w-full"
          style={{
            background: hovered ? `linear-gradient(90deg,${a.border},transparent)` : 'var(--color-border)',
          }}
        />

        <div className="flex items-center gap-2.5 pt-0.5">
          <Link
            href={`/projects/${id}`}
            className="flex-1 rounded-xl py-2.5 text-center text-sm font-bold transition-all duration-250"
            style={{
              background: hovered ? a.color : a.soft,
              color: hovered ? 'var(--color-bg)' : a.color,
              border: `1px solid ${a.border}`,
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
              className="rounded-xl border border-[var(--color-border)] p-2.5 theme-muted transition-all hover:text-[var(--color-text)]"
            >
              <FaGithub className="text-base" />
            </Link>
          )}

          {live && (
            <Link
              href={live.trim()}
              target="_blank"
              rel="noopener noreferrer"
              title="Live Demo"
              className="rounded-xl p-2.5 transition-all"
              style={{
                border: `1px solid ${hovered ? a.border : 'var(--color-border)'}`,
                color: hovered ? a.color : 'var(--color-muted)',
              }}
            >
              <FaArrowUpRightFromSquare className="text-sm" />
            </Link>
          )}
        </div>
      </div>

      <motion.div
        animate={{ opacity: hovered ? 1 : 0 }}
        className="pointer-events-none absolute bottom-0 right-0 h-28 w-28 rounded-tl-3xl"
        style={{ background: `radial-gradient(circle at bottom right,${a.soft},transparent)` }}
      />
    </motion.article>
  );
};

export default ProjectsCards;
