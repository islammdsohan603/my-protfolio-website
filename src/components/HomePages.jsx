'use client';

import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { FaArrowDown, FaDownload, FaGithub, FaLinkedin, FaBolt } from 'react-icons/fa6';
import PageBackdrop from '@/components/ui/PageBackdrop';
import { easePremium, staggerContainer, staggerItem } from '@/lib/motion';

const ROLES = [
  { label: 'Full-Stack Developer', color: 'var(--color-accent)' },
  { label: 'React.js Developer', color: 'var(--color-cyan)' },
  { label: 'Next.js Developer', color: 'var(--color-teal)' },
  { label: 'UI Experience Builder', color: 'var(--color-accent-strong)' },
  { label: 'JavaScript Developer', color: '#93c5fd' },
];

const STATS = [
  { value: '10+', label: 'Projects', sub: 'Delivered' },
  { value: '1+', label: 'Year', sub: 'Coding' },
  { value: '5+', label: 'Stacks', sub: 'Practiced' },
];

const STACK = ['React', 'Next.js', 'Node.js', 'MongoDB', 'Tailwind'];
const SOCIAL = [
  { href: 'https://github.com/islammdsohan603', Icon: FaGithub, label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/sohanislamwebdev/', Icon: FaLinkedin, label: 'LinkedIn' },
];

function HeroPortrait() {
  const ref = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), { stiffness: 120, damping: 18 });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), { stiffness: 120, damping: 18 });

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      className="relative flex justify-center lg:justify-end perspective-[1200px]"
    >
      <div className="relative animate-float-soft">
        <div className="ring-orbit" />
        <div className="ring-orbit ring-orbit-inner" />
        <div
          className="absolute inset-0 rounded-full blur-3xl"
          style={{ background: 'var(--orb-gold)' }}
        />

        <div
          className="relative overflow-hidden rounded-full border shadow-2xl"
          style={{
            width: 'clamp(240px, 28vw, 400px)',
            height: 'clamp(240px, 28vw, 400px)',
            borderColor: 'var(--color-border-strong)',
            boxShadow: 'var(--shadow-premium), var(--shadow-glow-gold)',
          }}
        >
          <Image
            src="/sohanimage.png"
            alt="Sohan Islam - Web Developer"
            fill
            priority
            sizes="(max-width: 768px) 80vw, 400px"
            className="object-cover object-top transition-transform duration-700 hover:scale-[1.03]"
          />
          <div className="absolute inset-0 rounded-full shadow-[inset_0_-80px_80px_var(--color-bg)]" />
        </div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className="glass-panel absolute -bottom-5 -left-6 z-10 rounded-2xl px-4 py-3"
        >
          <p className="text-[9px] font-semibold uppercase tracking-[0.2em] theme-faint">Focus</p>
          <p className="font-display text-sm font-bold">Business UI</p>
          <div className="mt-2 h-0.5 w-16 rounded-full bg-linear-to-r from-[var(--color-accent)] to-transparent" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.75 }}
          className="glass-panel absolute -top-4 -right-6 z-10 rounded-2xl border px-4 py-3"
          style={{ borderColor: 'color-mix(in srgb, var(--color-teal) 35%, transparent)' }}
        >
          <p className="text-[9px] font-semibold uppercase tracking-[0.2em]" style={{ color: 'var(--color-teal)' }}>
            Status
          </p>
          <p className="font-display text-sm font-bold theme-accent">Open to Work</p>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function HomePages() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setRoleIndex((p) => (p + 1) % ROLES.length), 2600);
    return () => clearInterval(interval);
  }, []);

  const role = ROLES[roleIndex];

  return (
    <section id="home" className="theme-surface relative min-h-screen overflow-hidden font-body">
      <PageBackdrop intensity="strong" />

      <div className="absolute left-6 top-1/2 z-20 hidden -translate-y-1/2 flex-col items-center gap-4 xl:flex">
        <div className="h-20 w-px bg-linear-to-b from-transparent to-[var(--color-accent)]/40" />
        <span
          className="text-[9px] font-semibold uppercase tracking-[0.32em] theme-faint"
          style={{ writingMode: 'vertical-rl' }}
        >
          2026
        </span>
        <div className="flex flex-col gap-3">
          {SOCIAL.map(({ href, Icon, label }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              title={label}
              className="glass flex h-10 w-10 items-center justify-center rounded-xl theme-muted transition-all hover:-translate-y-0.5 hover:border-[var(--color-border-strong)] hover:text-[var(--color-accent-strong)]"
            >
              <Icon className="text-sm" />
            </Link>
          ))}
        </div>
        <div className="h-20 w-px bg-linear-to-t from-transparent to-[var(--color-cyan)]/35" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl items-center px-5 pb-20 pt-28 sm:px-8 lg:pt-32">
        <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_auto] lg:gap-16">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="max-w-2xl space-y-7"
          >
            <motion.div variants={staggerItem} className="badge-premium">
              <FaBolt className="text-[10px]" style={{ color: 'var(--color-teal)' }} />
              Available for junior roles
            </motion.div>

            <motion.div variants={staggerItem} className="space-y-1">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] theme-faint">
                Web developer · Bangladesh
              </p>
              <h1
                className="font-display font-extrabold leading-[0.92] tracking-tight"
                style={{ fontSize: 'clamp(3.2rem, 9vw, 6.5rem)' }}
              >
                <motion.span
                  className="block"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: easePremium }}
                >
                  SOHAN
                </motion.span>
                <motion.span
                  className="block text-gradient-premium"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.08, ease: easePremium }}
                >
                  ISLAM
                </motion.span>
              </h1>
            </motion.div>

            <motion.div variants={staggerItem} className="flex h-11 items-center gap-4 overflow-hidden">
              <motion.div
                key={roleIndex}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                className="h-9 w-1 shrink-0 rounded-full"
                style={{ background: role.color, boxShadow: `0 0 20px ${role.color}` }}
              />
              <AnimatePresence mode="wait">
                <motion.span
                  key={role.label}
                  initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -16, filter: 'blur(8px)' }}
                  transition={{ duration: 0.35 }}
                  className="font-display text-xl font-bold md:text-2xl"
                  style={{ color: role.color }}
                >
                  {role.label}
                </motion.span>
              </AnimatePresence>
            </motion.div>

            <motion.p variants={staggerItem} className="max-w-xl text-[15px] leading-[1.85] theme-muted">
              I craft <span className="font-semibold text-[var(--color-text)]">business-ready web experiences</span>{' '}
              with refined UI, fast performance, and thoughtful motion. Studying Computer Science & Technology while
              building production-minded apps with{' '}
              <span className="font-semibold theme-accent">React, Next.js, and Node.js</span>.
            </motion.p>

            <motion.div variants={staggerItem} className="flex flex-wrap items-center gap-3">
              <Link href="#contact" className="btn-primary-premium">
                Hire Me
                <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.4, repeat: Infinity }}>
                  →
                </motion.span>
              </Link>
              <a href="/cv.pdf" download className="btn-ghost-premium">
                <FaDownload className="text-xs" style={{ color: 'var(--color-accent)' }} />
                Download CV
              </a>
              <div className="flex gap-2 xl:hidden">
                {SOCIAL.map(({ href, Icon, label }) => (
                  <Link
                    key={label}
                    href={href}
                    target="_blank"
                    className="glass flex h-11 w-11 items-center justify-center rounded-xl theme-muted hover:text-[var(--color-accent-strong)]"
                  >
                    <Icon />
                  </Link>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={staggerItem}
              className="glass-panel grid w-full max-w-md grid-cols-3 overflow-hidden rounded-2xl sm:w-fit"
            >
              {STATS.map((s, i) => (
                <div
                  key={s.label}
                  className={`px-5 py-4 text-center ${i < STATS.length - 1 ? 'border-r border-[var(--color-border)]' : ''}`}
                >
                  <span className="font-display block text-2xl font-extrabold theme-accent">{s.value}</span>
                  <span className="mt-1 block text-[10px] font-medium text-[var(--color-text)]">{s.label}</span>
                  <span className="block text-[9px] theme-faint">{s.sub}</span>
                </div>
              ))}
            </motion.div>

            <motion.div variants={staggerItem} className="flex flex-wrap items-center gap-2">
              <span className="mr-1 text-[10px] font-semibold uppercase tracking-widest theme-faint">Stack</span>
              {STACK.map((tech, i) => (
                <motion.span
                  key={tech}
                  whileHover={{ y: -3, scale: 1.05 }}
                  className="cursor-default rounded-full border border-[var(--color-border)] bg-[var(--glass)] px-3 py-1.5 text-[11px] theme-muted backdrop-blur-sm transition-colors hover:border-[var(--color-border-strong)] hover:text-[var(--color-accent-strong)]"
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9 + i * 0.05 }}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.88, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: easePremium }}
          >
            <HeroPortrait />
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}>
          <FaArrowDown className="text-xs theme-faint" />
        </motion.div>
        <span className="text-[9px] font-semibold uppercase tracking-[0.3em] theme-faint">Scroll</span>
      </motion.div>
    </section>
  );
}
