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
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-1 bg-linear-to-r from-orange-500 to-amber-400 origin-left z-[9999] shadow-[0_0_10px_rgba(249,115,22,0.8)]"
    />
  );
}
