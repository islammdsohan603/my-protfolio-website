import Link from 'next/link';
import { FaGithub, FaLinkedin, FaHeart } from 'react-icons/fa6';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/skills', label: 'Skills' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="theme-surface border-t" style={{ borderColor: 'var(--color-border)', color: 'var(--color-muted)' }}>
      <div className="w-11/12 max-w-6xl mx-auto py-8 space-y-6">
        {/* Top row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Brand */}
          <Link href="/" className="group flex items-center gap-1">
            <div className="w-10 h-10 flex items-center justify-center rounded-lg backdrop-blur-md border font-bold text-xl shadow-lg"
              style={{ background: 'var(--color-panel)', borderColor: 'var(--color-border-strong)', color: 'var(--color-accent-strong)' }}>
              S
            </div>
          </Link>

          {/* Nav links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm transition-colors duration-200 hover:text-[var(--color-accent-strong)]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/islammdsohan603"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-lg border flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5"
              style={{ background: 'var(--color-panel)', borderColor: 'var(--color-border)', color: 'var(--color-muted)' }}
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/sohanislamwebdev/"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-lg border flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5"
              style={{ background: 'var(--color-panel)', borderColor: 'var(--color-border)', color: 'var(--color-muted)' }}
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs">
          <p>© {new Date().getFullYear()} Sohan Islam. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Built with <FaHeart style={{ color: 'var(--color-accent)' }} /> using Next.js &
            Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
