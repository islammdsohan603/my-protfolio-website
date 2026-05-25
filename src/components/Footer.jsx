'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaHeart, FaArrowUp } from 'react-icons/fa6';
import { fadeUp } from '@/lib/motion';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/skills', label: 'Skills' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
];

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="theme-surface relative overflow-hidden border-t border-[var(--color-border)]">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent, var(--color-accent), var(--color-cyan), transparent)',
        }}
      />
      <div
        className="pointer-events-none absolute -top-32 left-1/2 h-64 w-96 -translate-x-1/2 rounded-full blur-[100px]"
        style={{ background: 'var(--orb-gold)' }}
      />

      <div className="relative mx-auto w-11/12 max-w-6xl py-14">
        <motion.div
          {...fadeUp(0)}
          className="mb-10 flex flex-col items-start justify-between gap-8 md:flex-row md:items-center"
        >
          <div className="space-y-3">
            <Link href="/" className="font-display text-2xl font-extrabold tracking-tight">
              Sohan<span className="text-gradient-premium"> Islam</span>
            </Link>
            <p className="max-w-sm text-sm leading-relaxed theme-muted">
              Frontend developer crafting premium web experiences with React, Next.js, and modern design systems.
            </p>
          </div>

          <button
            type="button"
            onClick={scrollTop}
            className="btn-ghost-premium shrink-0"
            aria-label="Back to top"
          >
            <FaArrowUp className="text-xs" />
            Back to top
          </button>
        </motion.div>

        <motion.div
          {...fadeUp(0.08)}
          className="mb-10 flex flex-col items-center justify-between gap-6 border-y border-[var(--color-border)] py-8 md:flex-row"
        >
          <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium theme-muted transition-colors hover:text-[var(--color-accent-strong)]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {[
              { href: 'https://github.com/islammdsohan603', Icon: FaGithub },
              { href: 'https://www.linkedin.com/in/sohanislamwebdev/', Icon: FaLinkedin },
            ].map(({ href, Icon }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="glass flex h-11 w-11 items-center justify-center rounded-xl theme-muted transition-all hover:-translate-y-0.5 hover:text-[var(--color-accent-strong)]"
              >
                <Icon />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          {...fadeUp(0.12)}
          className="flex flex-col items-center justify-between gap-3 text-xs theme-faint md:flex-row"
        >
          <p>© {new Date().getFullYear()} MD Sohan Islam. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Built with <FaHeart style={{ color: 'var(--color-accent)' }} className="text-[10px]" /> using Next.js &
            Tailwind
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
