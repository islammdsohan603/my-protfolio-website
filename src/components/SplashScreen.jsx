'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { easePremium } from '@/lib/motion';

export default function SplashScreen() {
  const [show, setShow] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const start = Date.now();
    const duration = 2600;

    const tick = () => {
      const elapsed = Date.now() - start;
      const pct = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(pct);
      if (elapsed < duration) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);

    const timer = setTimeout(() => {
      setShow(false);
      document.body.style.overflow = '';
    }, duration + 200);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.7, ease: easePremium }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{ background: 'var(--color-bg)' }}
        >
          <div className="theme-grid absolute inset-0 opacity-40" />
          <div className="aurora-blob aurora-blob-gold absolute left-1/4 top-1/4" />
          <div className="aurora-blob aurora-blob-cyan absolute bottom-1/4 right-1/4" />
          <div className="premium-grain absolute inset-0" />

          <motion.div
            initial={{ opacity: 0, y: 24, filter: 'blur(12px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.9, ease: easePremium }}
            className="relative z-10 flex flex-col items-center gap-8 px-6"
          >
            <div className="text-center">
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.4em] theme-faint">
                Portfolio
              </p>
              <h1 className="font-display text-4xl font-extrabold tracking-tight md:text-6xl lg:text-7xl">
                <motion.span
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15, duration: 0.6 }}
                  className="block text-[var(--color-text)]"
                >
                  MD
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="block text-gradient-premium"
                >
                  SOHAN
                </motion.span>
              </h1>
            </div>

            <div className="w-56 md:w-72">
              <div className="mb-2 flex justify-between text-[10px] font-semibold uppercase tracking-widest theme-faint">
                <span>Loading experience</span>
                <span>{progress}%</span>
              </div>
              <div className="h-1 overflow-hidden rounded-full bg-[var(--color-border)]">
                <motion.div
                  className="h-full rounded-full"
                  style={{
                    width: `${progress}%`,
                    background: 'linear-gradient(90deg, var(--color-accent), var(--color-cyan))',
                  }}
                  transition={{ ease: 'linear' }}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
