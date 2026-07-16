'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FaGithub, FaArrowUpRightFromSquare, FaCode } from 'react-icons/fa6';
import { easePremium } from '@/lib/motion';

const ACCENTS = [
  {
    color: '#e8b85a',
    glow: 'rgba(232,184,90,0.22)',
    soft: 'rgba(232,184,90,0.08)',
    border: 'rgba(232,184,90,0.32)',
  },
  {
    color: '#4cc9f0',
    glow: 'rgba(76,201,240,0.2)',
    soft: 'rgba(76,201,240,0.07)',
    border: 'rgba(76,201,240,0.28)',
  },
  {
    color: '#2ee4c6',
    glow: 'rgba(46,228,198,0.2)',
    soft: 'rgba(46,228,198,0.07)',
    border: 'rgba(46,228,198,0.28)',
  },
  {
    color: '#93c5fd',
    glow: 'rgba(147,197,253,0.2)',
    soft: 'rgba(147,197,253,0.07)',
    border: 'rgba(147,197,253,0.28)',
  },
];

const ProjectsCards = ({ project, index = 0 }) => {
  const { id, title, description, tech, github, live, featured, image } =
    project;
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);
  const a = ACCENTS[index % ACCENTS.length];
  const cardNumber = String(id ?? index + 1).padStart(4, '0');

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), {
    stiffness: 200,
    damping: 22,
  });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), {
    stiffness: 200,
    damping: 22,
  });
  const glareX = useTransform(mx, [-0.5, 0.5], ['0%', '100%']);
  const glareY = useTransform(my, [-0.5, 0.5], ['0%', '100%']);

  const onMove = e => {
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
    <Link
      href={`/projects/${id}`}
      className="my-6 mx-2 block cursor-pointer"
      style={{ perspective: 1200 }}
    >
      <motion.article
        ref={ref}
        onMouseMove={onMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={onLeave}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        initial={{ opacity: 0, y: 48, scale: 0.94 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.12 }}
        transition={{
          duration: 0.65,
          delay: (index % 3) * 0.1,
          ease: easePremium,
        }}
        className="group relative min-h-[320px] w-full max-w-sm overflow-hidden rounded-2xl bg-black text-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.6)]"
      >
        {/* project image as the card's background */}
        <div className="absolute inset-0">
          {image ? (
            <Image
              src={image}
              alt={title}
              fill
              sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 400px"
              priority={index < 3}
              loading={index < 3 ? 'eager' : 'lazy'}
              className="object-cover opacity-45 transition-transform duration-700 group-hover:scale-105"
              style={{
                transform: hovered ? 'scale(1.06)' : 'scale(1)',
                transition: 'transform 0.7s ease',
              }}
            />
          ) : (
            <div
              className="flex h-full w-full items-center justify-center"
              style={{ background: a.soft }}
            >
              <FaCode
                className="text-5xl"
                style={{ color: a.color, opacity: 0.15 }}
              />
            </div>
          )}
          {/* darken so text stays readable over any photo */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.75) 55%, rgba(0,0,0,0.92) 100%)',
            }}
          />
        </div>

        {/* dotted radial texture, same trick as the DaisyUI bank card */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at bottom left, #ffffff08 35%, transparent 36%), radial-gradient(circle at top right, #ffffff08 35%, transparent 36%)`,
            backgroundSize: '4.95em 4.95em',
          }}
        />

        {/* moving glare that follows the cursor, driven by the same motion values as the tilt */}
        <motion.div
          animate={{ opacity: hovered ? 1 : 0 }}
          className="pointer-events-none absolute inset-0"
          style={{
            background: useTransform(
              [glareX, glareY],
              ([gx, gy]) =>
                `radial-gradient(circle at ${gx} ${gy}, ${a.glow}, transparent 60%)`,
            ),
          }}
        />

        <div
          className="relative z-10 flex flex-col gap-8 p-6"
          style={{ transform: 'translateZ(30px)' }}
        >
          <div className="flex items-start justify-between">
            <div>
              <div className="text-[11px] font-bold uppercase tracking-[0.2em] opacity-50">
                Portfolio
              </div>
              <div
                className="mt-1 font-display text-lg font-extrabold leading-snug transition-colors duration-300"
                style={{ color: hovered ? a.color : '#fff' }}
              >
                {title}
              </div>
            </div>
            {featured ? (
              <span
                className="rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider"
                style={{
                  background: a.soft,
                  color: a.color,
                  border: `1px solid ${a.border}`,
                }}
              >
                Featured
              </span>
            ) : (
              <FaCode className="text-2xl opacity-10" />
            )}
          </div>

          <p className="text-sm leading-relaxed opacity-50 line-clamp-2">
            {description}
          </p>

          <div className="text-lg tracking-[0.3em] opacity-30">
            {cardNumber.match(/.{1,2}/g)?.join(' ')}
          </div>

          {tech?.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {tech.slice(0, 4).map((t, i) => (
                <span
                  key={i}
                  className="rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider"
                  style={{
                    color: `${a.color}cc`,
                    background: a.soft,
                    border: `1px solid ${a.border}`,
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          )}

          <div className="flex items-end justify-between">
            <div>
              <div className="text-[10px] uppercase tracking-wider opacity-30">
                Repository
              </div>
              <div className="mt-1 flex items-center gap-2">
                {github ? (
                  <span
                    onClick={e => e.stopPropagation()}
                    className="inline-flex"
                  >
                    <Link
                      href={github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={e => e.stopPropagation()}
                      title="GitHub"
                      className="opacity-70 transition-opacity hover:opacity-100"
                    >
                      <FaGithub className="text-base" />
                    </Link>
                  </span>
                ) : (
                  <span className="text-sm opacity-30">Private</span>
                )}
              </div>
            </div>

            <div className="text-right">
              <div className="text-[10px] uppercase tracking-wider opacity-30">
                Live
              </div>
              <div className="mt-1">
                {live ? (
                  <Link
                    href={live.trim()}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={e => e.stopPropagation()}
                    title="Live Demo"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold transition-colors"
                    style={{ color: hovered ? a.color : '#fff' }}
                  >
                    Visit <FaArrowUpRightFromSquare className="text-[11px]" />
                  </Link>
                ) : (
                  <span className="text-sm opacity-30">—</span>
                )}
              </div>
            </div>
          </div>
        </div>

        <motion.div
          animate={{ opacity: hovered ? 1 : 0 }}
          className="pointer-events-none absolute top-0 left-0 right-0 z-20 h-px"
          style={{
            background: `linear-gradient(90deg,transparent,${a.color},transparent)`,
          }}
        />
      </motion.article>
    </Link>
  );
};

export default ProjectsCards;
