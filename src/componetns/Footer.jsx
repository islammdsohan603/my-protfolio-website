import Link from 'next/link';
import { FaGithub, FaLinkedin, FaHeart } from 'react-icons/fa6';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="bg-[#040810] border-t border-white/5 text-gray-500">
      <div className="w-11/12 max-w-6xl mx-auto py-12 space-y-8">
        {/* Top row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <Link href="/" className="text-xl font-black text-white">
            SOHAN<span className="text-orange-500">.Dev</span>
          </Link>

          {/* Nav links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm hover:text-orange-400 transition-colors duration-200"
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
              className="w-9 h-9 rounded-xl bg-white/5 hover:bg-orange-500/15 border border-white/5 hover:border-orange-500/30 flex items-center justify-center text-gray-400 hover:text-orange-400 transition-all duration-300"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/sohanislamwebdev/"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-xl bg-white/5 hover:bg-orange-500/15 border border-white/5 hover:border-orange-500/30 flex items-center justify-center text-gray-400 hover:text-orange-400 transition-all duration-300"
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
            Built with <FaHeart className="text-orange-500" /> using Next.js &
            Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
