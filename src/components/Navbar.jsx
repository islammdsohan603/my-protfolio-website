'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { FaGithub, FaBars, FaXmark, FaMoon, FaSun } from 'react-icons/fa6';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/providers/ThemeProvider';
import { easePremium } from '@/lib/motion';

const navItems = [
  { path: '/', title: 'Home' },
  { path: '/about', title: 'About' },
  { path: '/skills', title: 'Skills' },
  { path: '/projects', title: 'Projects' },
  { path: '/contact', title: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === 'light';

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 md:px-6">
      <motion.nav
        layout
        transition={{ duration: 0.35, ease: easePremium }}
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 py-3 md:px-6 ${
          scrolled ? 'glass-panel shadow-lg' : 'bg-transparent'
        }`}
        style={
          scrolled
            ? {
                background: 'color-mix(in srgb, var(--color-panel) 92%, transparent)',
                border: '1px solid var(--color-border)',
              }
            : undefined
        }
      >
        <Link href="/" className="group flex items-center gap-2.5">
          <motion.div
            whileHover={{ rotate: 8, scale: 1.05 }}
            className="font-display flex h-10 w-10 items-center justify-center rounded-xl border text-lg font-extrabold"
            style={{
              background: 'linear-gradient(135deg, color-mix(in srgb, var(--color-accent) 20%, transparent), transparent)',
              borderColor: 'var(--color-border-strong)',
              color: 'var(--color-accent-strong)',
            }}
          >
            S
          </motion.div>
          <span className="hidden font-display text-sm font-bold tracking-tight sm:block">
            Sohan<span className="theme-accent">.</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.path}
                href={item.path}
                className="relative px-4 py-2 text-sm font-medium transition-colors"
                style={{ color: isActive ? 'var(--color-accent-strong)' : 'var(--color-muted)' }}
              >
                {isActive && (
                  <motion.span
                    layoutId="navPill"
                    className="absolute inset-0 rounded-xl"
                    style={{
                      background: 'color-mix(in srgb, var(--color-accent) 12%, transparent)',
                      border: '1px solid var(--color-border-strong)',
                    }}
                    transition={{ type: 'spring', stiffness: 380, damping: 28 }}
                  />
                )}
                <span className="relative">{item.title}</span>
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <motion.button
            type="button"
            whileTap={{ scale: 0.92 }}
            onClick={toggleTheme}
            aria-label={isLight ? 'Dark mode' : 'Light mode'}
            className="glass flex h-10 w-10 items-center justify-center rounded-xl transition-colors"
            style={{ color: 'var(--color-accent-strong)' }}
          >
            {isLight ? <FaMoon size={15} /> : <FaSun size={15} />}
          </motion.button>

          <Link
            href="https://github.com/islammdsohan603"
            target="_blank"
            className="hidden h-10 w-10 items-center justify-center rounded-xl border transition-all hover:-translate-y-0.5 md:flex"
            style={{
              borderColor: 'var(--color-border)',
              color: 'var(--color-muted)',
              background: 'var(--glass)',
            }}
          >
            <FaGithub size={16} />
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl md:hidden"
            style={{ color: 'var(--color-muted)' }}
            aria-label="Menu"
          >
            {menuOpen ? <FaXmark size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.28, ease: easePremium }}
            className="glass-panel mx-auto mt-2 max-w-6xl overflow-hidden rounded-2xl border md:hidden"
          >
            <div className="flex flex-col gap-1 p-4">
              {navItems.map((item, i) => {
                const isActive = pathname === item.path;
                return (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={item.path}
                      onClick={() => setMenuOpen(false)}
                      className="block rounded-xl px-4 py-3 font-medium"
                      style={{
                        color: isActive ? 'var(--color-accent-strong)' : 'var(--color-muted)',
                        background: isActive
                          ? 'color-mix(in srgb, var(--color-accent) 10%, transparent)'
                          : undefined,
                        border: isActive ? '1px solid var(--color-border-strong)' : '1px solid transparent',
                      }}
                    >
                      {item.title}
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
