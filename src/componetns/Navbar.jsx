'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { FaGithub, FaBars, FaXmark } from 'react-icons/fa6';
import { motion, AnimatePresence } from 'framer-motion';

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

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#070d1a]/90 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <nav className="w-11/12 max-w-6xl mx-auto flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-1">
          <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold text-xl shadow-lg">
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
                    ? 'text-orange-400'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeTab"
                    className="absolute inset-0 bg-orange-500/10 rounded-lg border border-orange-500/20"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative">{item.title}</span>
              </Link>
            );
          })}
        </div>

        {/* Desktop GitHub Button */}
        <Link
          href="https://github.com/islammdsohan603"
          target="_blank"
          className="hidden md:flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-orange-500/10 border border-white/10 hover:border-orange-500/30 rounded-xl text-sm font-medium text-gray-300 hover:text-orange-400 transition-all duration-300"
        >
          <FaGithub className="text-base" />
          GitHub
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-lg text-gray-300 hover:text-orange-400 hover:bg-white/5 transition-all"
        >
          {menuOpen ? <FaXmark size={22} /> : <FaBars size={22} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-[#070d1a]/95 backdrop-blur-xl border-b border-white/5"
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
                          ? 'bg-orange-500/10 text-orange-400 border border-orange-500/20'
                          : 'text-gray-400 hover:text-white hover:bg-white/5'
                      }`}
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
                  className="flex items-center gap-2 px-4 py-3 bg-orange-500/10 border border-orange-500/20 rounded-xl text-orange-400 font-medium"
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
