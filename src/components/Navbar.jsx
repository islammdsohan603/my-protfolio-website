'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { FaGithub, FaBars, FaXmark, FaMoon, FaSun } from 'react-icons/fa6';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/providers/ThemeProvider';

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
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b shadow-lg backdrop-blur-xl'
          : 'bg-transparent'
      }`}
      style={scrolled ? { background: 'color-mix(in srgb, var(--color-bg) 90%, transparent)', borderColor: 'var(--color-border)' } : undefined}
    >
      <nav className="w-11/12 max-w-6xl mx-auto flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-1">
          <div className="w-10 h-10 flex items-center justify-center rounded-lg backdrop-blur-md border font-bold text-xl shadow-lg"
            style={{ background: 'var(--color-panel)', borderColor: 'var(--color-border-strong)', color: 'var(--color-accent-strong)' }}>
            S
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map(item => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? ''
                    : 'hover:text-[var(--color-text)]'
                }`}
                style={{ color: isActive ? 'var(--color-accent-strong)' : 'var(--color-muted)' }}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeTab"
                    className="absolute inset-0 rounded-lg border"
                    style={{ background: 'color-mix(in srgb, var(--color-accent) 10%, transparent)', borderColor: 'var(--color-border-strong)' }}
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative">{item.title}</span>
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={isLight ? 'Switch to dark theme' : 'Switch to light theme'}
            title={isLight ? 'Dark mode' : 'Light mode'}
            className="relative flex h-10 w-10 items-center justify-center rounded-lg border transition-all hover:-translate-y-0.5"
            style={{
              background: 'var(--color-panel)',
              borderColor: 'var(--color-border)',
              color: 'var(--color-accent-strong)',
            }}
          >
            {isLight ? <FaMoon size={15} /> : <FaSun size={15} />}
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg transition-all hover:bg-white/5"
            style={{ color: 'var(--color-muted)' }}
          >
            {menuOpen ? <FaXmark size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden border-b backdrop-blur-xl"
            style={{ background: 'color-mix(in srgb, var(--color-bg) 95%, transparent)', borderColor: 'var(--color-border)' }}
          >
            <div className="w-11/12 mx-auto py-4 flex flex-col gap-1">
              {navItems.map((item, i) => {
                const isActive = pathname === item.path;
                return (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 }}
                  >
                    <Link
                      href={item.path}
                      onClick={() => setMenuOpen(false)}
                      className={`block px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
                        isActive
                          ? 'border'
                          : 'hover:bg-white/5'
                      }`}
                      style={{
                        color: isActive ? 'var(--color-accent-strong)' : 'var(--color-muted)',
                        background: isActive ? 'color-mix(in srgb, var(--color-accent) 10%, transparent)' : undefined,
                        borderColor: isActive ? 'var(--color-border-strong)' : undefined,
                      }}
                    >
                      {item.title}
                    </Link>
                  </motion.div>
                );
              })}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="pt-2"
              >
                <Link
                  href="https://github.com/islammdsohan603"
                  target="_blank"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-2 px-4 py-3 border rounded-xl font-medium"
                  style={{
                    background: 'color-mix(in srgb, var(--color-accent) 10%, transparent)',
                    borderColor: 'var(--color-border-strong)',
                    color: 'var(--color-accent-strong)',
                  }}
                >
                  <FaGithub />
                  GitHub Profile
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
