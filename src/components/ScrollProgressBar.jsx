'use client';
import { useScroll, useSpring, motion } from 'framer-motion';

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 origin-left z-[9999]"
      style={{
        scaleX,
        background: 'linear-gradient(90deg, var(--color-accent), var(--color-cyan))',
        boxShadow: '0 0 12px color-mix(in srgb, var(--color-accent) 55%, transparent)',
      }}
    />
  );
}
