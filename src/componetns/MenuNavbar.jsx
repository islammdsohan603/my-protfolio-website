'use client';
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa6';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

const MenuNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      {/* Toggle Button */}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-[80] cursor-pointer hover:text-red-400 duration-300"
      >
        {isOpen ? <X size={28} className="text-white" /> : <Menu size={28} />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* 🔥 Background Overlay Animation */}
            <motion.div
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            />

            {/* 🔥 Menu Panel Animation */}
            <motion.div
              className="absolute top-12 right-0 w-64 h-[70vh] bg-[#101829] text-white flex flex-col items-center justify-center gap-6 shadow-lg"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
            >
              {/* 🔥 Stagger Links */}
              {navItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.15 }}
                >
                  <Link
                    href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    onClick={() => setIsOpen(false)}
                    className="text-xl font-semibold hover:text-orange-500"
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}

              {/* Github */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Link
                  href="https://github.com/islammdsohan603"
                  className="flex items-center gap-2 bg-orange-600 px-4 py-2 rounded-md"
                >
                  <FaGithub />
                  GitHub
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MenuNavbar;
